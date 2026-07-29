<#
.SYNOPSIS
    Fixes up the generated site after DocFX has run, and copies deployment extras into _site.
.NOTES
    This file maps onto a future C# SitePostProcessor.
#>

function Update-DocFxDocUrl {
    <#
    .SYNOPSIS
        Corrects the GitHub "edit this page" links in a translated site.
    .DESCRIPTION
        Non-English sites are built from a temporary <code>_tmp folder, so DocFX derives its
        docfx:docurl meta tag and anchor hrefs from a path that does not exist on GitHub. Pages
        that really are translated are pointed at the language folder; everything else falls
        back to the English source.
    .PARAMETER SelectedLanguage
        The language whose output should be corrected.
    .NOTES
        Progress is displayed interactively and suppressed in non-interactive sessions such as
        CI/CD pipelines.
    #>
    [CmdletBinding()]
    param (
        [Parameter(Mandatory)]
        [PSCustomObject]$Settings,

        [Parameter(Mandatory)]
        [PSCustomObject]$SelectedLanguage
    )

    $code = $SelectedLanguage.Code
    $sourcePath = (Resolve-Path (Get-LanguageSourcePath -Settings $Settings -Code $code)).Path
    $outputPath = Get-LanguageOutputPath -Settings $Settings -Code $code
    $tempFolder = Get-LanguageTempPath -Settings $Settings -Code $code

    # Relative paths of the files that have actually been translated, e.g. "manual/index.md"
    $translatedPaths = @(
        Get-ChildItem "$sourcePath/*.md" -Recurse -Force |
            ForEach-Object { Get-RelativePath -BasePath $sourcePath -Path $_.FullName }
    )

    $htmlFiles = @(Get-ChildItem "$outputPath/*.html" -Recurse)

    Write-Host -ForegroundColor Yellow "Post-processing docfx:docurl in $($htmlFiles.Count) files..."

    # Matches the temporary build folder inside the docurl meta tag and inside anchor hrefs
    $docUrlPattern = '(<meta name="docfx:docurl" content=".*?)(/' + $tempFolder + '/)(.*?">)'
    $anchorPattern = '(<a href=".*?)(/' + $tempFolder + '/)(.*?">)'

    for ($i = 0; $i -lt $htmlFiles.Count; $i++) {
        $htmlFile = $htmlFiles[$i]

        $relativePath = Get-RelativePath -BasePath $outputPath -Path $htmlFile.FullName
        $relativeMarkdownPath = [System.IO.Path]::ChangeExtension($relativePath, '.md')

        # Translated pages link to the language folder, everything else to the English source
        $targetFolder = if ($translatedPaths -contains $relativeMarkdownPath) { $code } else { $Settings.PrimaryLanguageCode }

        Update-FileContent -Path $htmlFile.FullName -AsRegex -Replacement ([ordered]@{
            $docUrlPattern = "`${1}/$targetFolder/`${3}"
            $anchorPattern = "`${1}/$targetFolder/`${3}"
        })

        # Check if the script is running in an interactive session before writing progress.
        # We don't want to write progress when running in a build pipeline.
        if ($host.UI.RawUI) {
            Write-Progress -Activity "Processing files" -Status "$($i + 1) of $($htmlFiles.Count) processed" -PercentComplete ((($i + 1) / $htmlFiles.Count) * 100)
        }
    }

    Write-Host ""
    Write-Step "Post-processing completed."
}

function Update-Sitemap {
    <#
    .SYNOPSIS
        Rewrites sitemap.xml so every URL points at the /latest/<primary language> alias.
    #>
    [CmdletBinding()]
    param (
        [Parameter(Mandatory)]
        [PSCustomObject]$Settings
    )

    Write-Step "Post-processing $($Settings.SitemapFileName), adding $($Settings.LatestAlias)/$($Settings.PrimaryLanguageCode) to url" -Color Yellow

    $primaryOutput = Get-LanguageOutputPath -Settings $Settings -Code $Settings.PrimaryLanguageCode
    $sitemapFile = "$primaryOutput/$($Settings.SitemapFileName)"

    Update-FileContent -Path $sitemapFile -Replacement ([ordered]@{
        $Settings.DocsUrl = "$($Settings.DocsUrl)/$($Settings.LatestAlias)/$($Settings.PrimaryLanguageCode)"
    })

    Write-Step "Post-processing $($Settings.SitemapFileName) completed."
}

function Update-NotFoundPage {
    <#
    .SYNOPSIS
        Rewrites the relative asset references in 404.html to absolute, version-qualified paths.
    .DESCRIPTION
        404.html is served from arbitrary URLs, so its relative references to CSS, JS and images
        would otherwise resolve against the requested path rather than the site root.
    #>
    [CmdletBinding()]
    param (
        [Parameter(Mandatory)]
        [PSCustomObject]$Settings
    )

    Write-Step "Post-processing $($Settings.NotFoundFileName), adding version/$($Settings.PrimaryLanguageCode) to url" -Color Yellow

    $primaryOutput = Get-LanguageOutputPath -Settings $Settings -Code $Settings.PrimaryLanguageCode
    $notFoundFile = "$primaryOutput/$($Settings.NotFoundFileName)"
    $prefix = "/$($Settings.Version)/$($Settings.PrimaryLanguageCode)/"

    $replacements = [ordered]@{}

    foreach ($asset in $Settings.NotFoundAssetPath) {
        $replacements[$asset] = "$prefix$asset"
    }

    # DocFX emits script tags with a leading ./
    foreach ($script in $Settings.NotFoundScriptPath) {
        $replacements["./$script"] = "$prefix$script"
    }

    Update-FileContent -Path $notFoundFile -Replacement $replacements

    Write-Step "Post-processing $($Settings.NotFoundFileName) completed."
}

function Copy-ExtraItem {
    <#
    .SYNOPSIS
        Copies deployment files that DocFX does not produce into the web root.
    #>
    [CmdletBinding()]
    param (
        [Parameter(Mandatory)]
        [PSCustomObject]$Settings
    )

    $webDirectory = $Settings.WebDirectory

    foreach ($file in @($Settings.VersionsFile, $Settings.WebConfigFile, $Settings.RobotsFile)) {
        Write-Step "Copying $file into $webDirectory/" -Color Yellow
        Copy-Item $file "$webDirectory/"
    }

    Write-Step "Updating $($Settings.WebConfigFile)" -Color Yellow

    Update-FileContent -Path "$webDirectory/$($Settings.WebConfigFile)" -Replacement ([ordered]@{
        $Settings.DeploymentVersionToken = $Settings.Version
    })

    Write-Step "Updating $($Settings.WebConfigFile) completed."

    # This is needed for Stride Launcher, which loads Release Notes
    $primaryOutput = Get-LanguageOutputPath -Settings $Settings -Code $Settings.PrimaryLanguageCode
    $releaseNotesDirectory = "$primaryOutput/$($Settings.ReleaseNotesFolderName)"

    Write-Step "Copying $($Settings.ReleaseNotesFile) into $releaseNotesDirectory/" -Color Yellow

    # Without an existing directory Copy-Item would silently create a file named ReleaseNotes
    if (-not (Test-Path $releaseNotesDirectory)) {
        New-Item -ItemType Directory -Path $releaseNotesDirectory -Force | Out-Null
    }

    Copy-Item $Settings.ReleaseNotesFile "$releaseNotesDirectory/"
}
