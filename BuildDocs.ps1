<#
.SYNOPSIS
    This script builds documentation (manuals, tutorials, release notes) in selected language(s) from the languages.json file and optionally includes API documentation.
.DESCRIPTION
    The script allows the user to build documentation in English or any other available language specified in the languages.json file. It provides options to build documentation in all available languages, run a local website for the documentation, or cancel the operation. If the user chooses to build the documentation, the script also prompts whether API documentation should be included.
.NOTES
    The documentation files are expected to be in Markdown format (.md). The script uses the DocFX tool to build the documentation and optionally includes API documentation. The script generates the API documentation from C# source files using DocFX metadata and can run a local website using the DocFX serve command. This script can also be run from GitHub Actions.
.LINK
    https://github.com/VaclavElias/stride-website-next
.LINK
    https://github.com/VaclavElias/stride-docs-next/blob/main/en/languages.json
.LINK
    https://dotnet.github.io/docfx/index.html
.PARAMETER BuildAll
    Switch parameter. If provided, the script will build documentation in all available languages and include API documentation.
.PARAMETER Version
    The Version to build the Docs, the default is the latest version
.EXAMPLE
    .\BuildDocs.ps1 -BuildAll
    In this example, the script will build the documentation in all available languages and include API documentation. Use this in GitHub Actions.
.EXAMPLE
    .\BuildDocs.ps1
    In this example, the script will prompt the user to select an operation and an optional language. If the user chooses to build the documentation, the script will also ask if they want to include API documentation.
#>

param (
    [switch]$BuildAll,
    [ArgumentCompleter({
        [OutputType([System.Management.Automation.CompletionResult])]
        param([string] $CommandName,[string] $ParameterName,[string] $WordToComplete,[System.Management.Automation.Language.CommandAst] $CommandAst,[System.Collections.IDictionary] $FakeBoundParameters)
        return (Get-Content $PSScriptRoot\versions.json -Encoding UTF8 | ConvertFrom-Json).versions
    })]
    $Version = $((Get-Content $PSScriptRoot\versions.json -Encoding UTF8 | ConvertFrom-Json).versions | Sort-Object -Descending | Select-Object -First 1)
)

$Settings = [PSCustomObject]@{
    Version = $Version
    SiteDirectory = "_site/$Version"
    LocalTestHostUrl = "http://localhost:8080/$Version/en/index.html"
    LanguageJsonPath = "en\languages.json"
    LogPath = ".\build.log"
    TempDirectory = "_tmp"
    WebDirectory = "_site"
    IndexFileName = "index.md"
    ManualFolderName = "manual"
    DocsUrl = "https://doc.stride3d.net"
}

# To Do fix, GitHub references, fix sitemap links to latest/en/

function Read-LanguageConfigurations {
    return Get-Content $Settings.LanguageJsonPath -Encoding UTF8 | ConvertFrom-Json
}

function Get-UserInput {
    Write-Host ""
    Write-Host -ForegroundColor Cyan "Please select an option:"
    Write-Host ""
    Write-Host -ForegroundColor Yellow "  [en] Build English documentation"
    foreach ($lang in $languages) {
        if ($lang.Enabled -and -not $lang.IsPrimary) {
            Write-Host -ForegroundColor Yellow "  [$($lang.Code)] Build $($lang.Name) documentation"
        }
    }
    Write-Host -ForegroundColor Yellow "  [all] Build documentation in all available languages"
    Write-Host -ForegroundColor Yellow "  [r] Run local website"
    Write-Host -ForegroundColor Yellow "  [c] Cancel"
    Write-Host ""
    $validOptions = @('all', 'r', 'c') + $($languages | Select-Object -ExpandProperty Code)

    while($true)
    {
        $userChoice = Read-Host -Prompt "Your choice"
        if($validOptions -contains $userChoice)
        {
            return $userChoice.ToLower()
        }
    }
    Write-Error "No valid Choice was given."
}

function Ask-IncludeAPI {
    Write-Host ""
    Write-Host -ForegroundColor Cyan "Do you want to include API?"
    Write-Host ""
    Write-Host -ForegroundColor Yellow "  [Y] Yes"
    Write-Host -ForegroundColor Yellow "  [N] No"
    Write-Host ""

    return (Read-Host -Prompt "Your choice (Y/N)").ToLower() -eq "y"
}

function Copy-ExtraItems {

    Write-Host -ForegroundColor Yellow "Copying versions.json into $($Settings.WebDirectory)/"
    Write-Host ""
    Copy-Item versions.json "$($Settings.WebDirectory)/"

    Write-Host -ForegroundColor Yellow "Copying web.config into $($Settings.WebDirectory)/"
    Write-Host ""
    Copy-Item web.config "$($Settings.WebDirectory)/"

    Write-Host -ForegroundColor Yellow "Updating web.config"
    Write-Host ""

    $webConfig = "$($Settings.WebDirectory)/web.config"

    $content = Get-Content $webConfig -Encoding UTF8

    $content = $content -replace "%deployment_version%", $Settings.Version

    $content | Set-Content -Encoding UTF8 $webConfig

    Write-Host -ForegroundColor Green "Updating web.config completed."
    Write-Host ""

    # Do we need this?
    # Copy-Item en/ReleaseNotes/ReleaseNotes.md "$($Settings.SiteDirectory)/en/ReleaseNotes/"
}

function Start-LocalWebsite {
    Write-Host -ForegroundColor Green "Running local website..."
    Write-Host -ForegroundColor Green "Navigate manually to non English website, if you didn't build English documentation."
    Stop-Transcript
    New-Item -ItemType Directory -Verbose -Force -Path $Settings.WebDirectory | Out-Null
    Set-Location $Settings.WebDirectory
    Start-Process -FilePath $Settings.LocalTestHostUrl
    docfx serve
    Set-Location ..
}

function Generate-APIDoc {
    Write-Host -ForegroundColor Green "Generating API documentation..."

    Write-Host ""

    # Build metadata from C# source, docfx runs dotnet restore
    docfx metadata en/docfx.json | Write-Host

    return $LastExitCode
}

function Remove-APIDoc {
    Write-Host ""
    Write-Host -ForegroundColor Green "Erasing API documentation..."
    $APIDocPath = "en/api/.manifest"
    if (Test-Path $APIDocPath) {
        Remove-Item en/api/*yml -recurse -Verbose
        Remove-Item $APIDocPath -Verbose
    } else{
        Write-Warning "Could not delete APIDoc. The Path $APIDocPath does not exist or is not valid."
    }
}

function Build-EnglishDoc {

    $outputDirectory = "$($Settings.SiteDirectory)/en"

    Write-Host -ForegroundColor Yellow "Start building English documentation. Output: $($outputDirectory)"

    Write-Host ""

    # Output to both build.log and console
    docfx build en/docfx.json -o $outputDirectory | Write-Host

    return $LastExitCode
}

function Build-NonEnglishDoc {
    param (
        $SelectedLanguage
    )

    if ($SelectedLanguage -and $SelectedLanguage.Code -ne 'en') {

        Write-Host -ForegroundColor Yellow "Start building $($SelectedLanguage.Name) documentation."

        $langFolder = "$($SelectedLanguage.Code)$($Settings.TempDirectory)"

        if(Test-Path $langFolder){
            Remove-Item $langFolder/* -recurse -Verbose
        }
        else{
            $discard = New-Item -Path $langFolder -ItemType Directory -Verbose
        }

        # Copy all files from en folder to the selected language folder, this way we can keep en files that are not translated
        Copy-Item en/* -Recurse $langFolder -Force

        # Get all translated files from the selected language folder
        $files = Get-ChildItem "$langFolder/$($Settings.ManualFolderName)/*.md" -Recurse -Force

        Write-Host "Start write files:"

        # Mark files as not translated if they are not in the toc.md file
        foreach ($file in $files)
        {
            if($file.ToString().Contains("toc.md")) {
                continue;
            }

            $data = Get-Content $file -Encoding UTF8
            for ($i = 0; $i -lt $data.Length; $i++)
            {
                $line = $data[$i];
                if ($line.length -le 0)
                {
                    Write-Host $file

                    $data[$i]="> [!WARNING]`r`n> " + $SelectedLanguage.NotTranslatedMessage + "`r`n"

                    $data | Out-File -Encoding UTF8 $file

                    break
                }
            }
        }

        Write-Host "End write files"
        $indexFile = $Settings.IndexFileName

        # overwrite en manual page with translated manual page
        if (Test-Path ($SelectedLanguage.Code + "/" + $indexFile)) {
            Copy-Item ($SelectedLanguage.Code + "/" + $indexFile) $langFolder -Force
        }
        else {
            Write-Warning "$($SelectedLanguage.Code)/"+ $indexFile +" not found. English version will be used."
        }

        # overwrite en manual pages with translated manual pages
        if (Test-Path ($SelectedLanguage.Code + "/" + $Settings.ManualFolderName)) {
            Copy-Item ($SelectedLanguage.Code + "/" + $Settings.ManualFolderName) -Recurse -Destination $langFolder -Force
        }
        else {
            Write-Warning "$($SelectedLanguage.Code)/$($Settings.ManualFolderName) not found."
        }

        # we copy the docfx.json file from en folder to the selected language folder, so we can keep the same settings and maitain just one docfx.json file
        Copy-Item en/docfx.json $langFolder -Force

        $SiteDir = $Settings.SiteDirectory

        # we replace the en folder with the selected language folder in the docfx.json file
        (Get-Content $langFolder/docfx.json) -replace "$SiteDir/en","$SiteDir/$($SelectedLanguage.Code)" | Set-Content -Encoding UTF8 $langFolder/docfx.json

        $outputDirectory = "$($Settings.SiteDirectory)/$($SelectedLanguage.Code)"

        docfx build $langFolder/docfx.json -o $outputDirectory | Write-Host

        if (!$BuildAll) {
            Remove-Item $langFolder -Recurse -Verbose
        }

        PostProcessing-DocFxDocUrl -SelectedLanguage $SelectedLanguage

        Write-Host -ForegroundColor Green "$($SelectedLanguage.Name) documentation built."

        return $LastExitCode
    }
}

function Build-AllLanguagesDocs {
    param (
        [array]$Languages
    )

    foreach ($lang in $Languages) {
        if ($lang.Enabled -and -not $lang.IsPrimary) {

            Build-NonEnglishDoc -SelectedLanguage $lang

            if ($exitCode -ne 0)
            {
                Write-Error "Failed to build $($SelectedLanguage.Name) documentation. ExitCode: $exitCode"
                Stop-Transcript
                return $exitCode
            }
        }
    }
}

function PostProcessing-DocFxDocUrl {
<#
.SYNOPSIS
    DocFX generates GitHub link based on the temp _tmp folder, which we need to fix to correct GitHub links. This function performs the needed adjustments.
.DESCRIPTION
    This function takes a selected language as input and iterates through the relevant HTML and markdown files. It corrects the meta tag "docfx:docurl" and anchor tags to reflect the correct GitHub URL by replacing the temporary folder path.
.PARAMETER SelectedLanguage
    The Language to find the relevant HTML and markdown Files
.NOTES
    1. This function assumes that the folder structure and naming conventions meet the specified conditions.
    2. Progress is displayed interactively, and is suppressed in non-interactive sessions such as CI/CD pipelines.
#>
    param (
        $SelectedLanguage
    )

    $translatedFiles = Get-ChildItem "$($SelectedLanguage.Code)/*.md" -Recurse -Force

    # Get a list of all HTML files in the _site/<language> directory
    $htmlFiles = Get-ChildItem "$($Settings.SiteDirectory)/$($SelectedLanguage.Code)/*.html" -Recurse

    # Get the relative paths of the translated files
    $relativeTranslatedFilesPaths = $translatedFiles | ForEach-Object { $_.FullName.Replace((Resolve-Path $SelectedLanguage.Code).Path + '\', '') }

    Write-Host -ForegroundColor Yellow "Post-processing docfx:docurl in $($htmlFiles.Count) files..."

    for ($i = 0; $i -lt $htmlFiles.Count; $i++) {
        $htmlFile = $htmlFiles[$i]
        # Get the relative path of the HTML file
        $relativeHtmlPath = $htmlFile.FullName.Replace((Resolve-Path "$($Settings.SiteDirectory)/$($SelectedLanguage.Code)").Path + '\', '').Replace('.html', '.md')

        # Read the content of the HTML file
        $content = Get-Content $htmlFile

        # Define a regex pattern to match the meta tag with name="docfx:docurl"
        $pattern = '(<meta name="docfx:docurl" content=".*?)(/' + $SelectedLanguage.Code + $Settings.TempDirectory+ '/)(.*?">)'

        # Define a regex pattern to match the href attribute in the <a> tags
        $pattern2 = '(<a href=".*?)(/' + $SelectedLanguage.Code + $Settings.TempDirectory + '/)(.*?">)'

        # Check if the HTML file is from the $translatedFiles collection, if so, we will update the path to the
        # existing file in GitHub
        if ($relativeTranslatedFilesPaths -contains $relativeHtmlPath) {
            # Replace /<language>_tmp/ with /<language>/ in the content
            $content = $content -replace $pattern, "`${1}/$($SelectedLanguage.Code)/`${3}"
            $content = $content -replace $pattern2, "`${1}/$($SelectedLanguage.Code)/`${3}"
        } else {
            # Replace /<language>_tmp/ with /en/ in the content
            $content = $content -replace $pattern, '${1}/en/${3}'
            $content = $content -replace $pattern2, '${1}/en/${3}'
        }

        # Write the updated content back to the HTML file
        $content | Set-Content -Encoding UTF8 $htmlFile

        # Check if the script is running in an interactive session before writing progress
        # We don't want to write progress when running in a non-interactive session, such as in a build pipeline
        if ($host.UI.RawUI) {
            Write-Progress -Activity "Processing files" -Status "$i of $($htmlFiles.Count) processed" -PercentComplete (($i / $htmlFiles.Count) * 100)
        }
    }

    Write-Host -ForegroundColor Green "Post-processing completed."
}

# we need to update all urls to /latest/en
function PostProcessing-FixingSitemap {
    Write-Host -ForegroundColor Yellow "Post-processing sitemap.xml, adding latest/en to url"
    Write-Host ""

    $sitemapFile = "$($Settings.SiteDirectory)/en/sitemap.xml"

    # Read the content of the sitemap.xml file with UTF8 encoding
    $content = Get-Content $sitemapFile -Encoding UTF8

    # Replace DocsUrl with DocsUrl + latest/en
    $content = $content -replace $Settings.DocsUrl, "$($Settings.DocsUrl)/latest/en"

    # Write the updated content back to the sitemap.xml file with UTF8 encoding
    $content | Set-Content -Encoding UTF8 $sitemapFile

    Write-Host -ForegroundColor Green "Post-processing sitemap.xml completed."
    Write-Host ""
}

function PostProcessing-Fixing404AbsolutePath {
    Write-Host -ForegroundColor Yellow "Post-processing 404.html, adding version/en to url"
    Write-Host ""

    $file404 = "$($Settings.SiteDirectory)/en/404.html"

    $content = Get-Content $file404 -Encoding UTF8

    $keysToReplace = @("favicon.ico", "public/docfx.min.css", "public/main.css", "toc.html", "media/stride-logo-red.svg")

    foreach ($key in $keysToReplace) {
        $replacement = "/$($Settings.Version)/en/$key"
        $content = $content -replace $key, $replacement
    }

    $content = $content -replace "./public/main.js", "/$($Settings.Version)/en/public/main.js"
    $content = $content -replace "./public/docfx.min.js", "/$($Settings.Version)/en/public/docfx.min.js"
    $content = $content -replace '<a class="navbar-brand" href="index.html">', '<a class="navbar-brand" href="/">'

    $content | Set-Content -Encoding UTF8 $file404

    Write-Host -ForegroundColor Green "Post-processing 404.html completed."
    Write-Host ""
}

# Main script execution starts here

$languages = Read-LanguageConfigurations

Start-Transcript -Path $Settings.LogPath

[bool]$isAllLanguages = $false

if ($BuildAll)
{
    $isAllLanguages = $true
    $API = $true
}
else
{
    $userInput = Get-UserInput

    [bool]$isEnLanguage = $userInput -ieq "en"
    [bool]$shouldRunLocalWebsite = $userInput -ieq "r"
    [bool]$isCanceled = $userInput -ieq "c"
    $isAllLanguages = $userInput -ieq "all"

    # Check if user input matches any non-English language build
    $selectedLanguage = $languages | Where-Object { $_.Code -eq $userInput -and $_.Enabled -and -not $_.IsPrimary }

    if ($selectedLanguage)
    {
        [bool]$shouldBuildSelectedLanguage = $true
    }

    # Ask if the user wants to include API
    if ($isEnLanguage -or $isAllLanguages -or $shouldBuildSelectedLanguage) {
        $API = Ask-IncludeAPI
    } elseif ($isCanceled)
    {
        Write-Host -ForegroundColor Red "Operation canceled by user."
        Stop-Transcript
        Read-Host -Prompt "Press ENTER key to exit..."
        return
    } elseif ($shouldRunLocalWebsite)
    {
        Start-LocalWebsite
        return
    }
}

# Generate API doc
if ($API)
{
    $exitCode = Generate-APIDoc
    if($exitCode -ne 0)
    {
        Write-Error "Failed to generate API metadata. ExitCode: $exitCode"
        Stop-Transcript
        Read-Host -Prompt "Press any ENTER to exit..."
        return $exitCode
    }
}
else
{
    Remove-APIDoc
}

Write-Host -ForegroundColor Green "Generating documentation..."
Write-Host ""
Write-Warning "Note that when building docs without API, you will get UidNotFound warnings and invalid references warnings"
Write-Host ""

if ($isEnLanguage -or $isAllLanguages)
{
   $exitCode = Build-EnglishDoc

   if ($exitCode -ne 0)
   {
       Write-Error "Failed to build English documentation. ExitCode: $exitCode"
       Stop-Transcript
       Read-Host -Prompt "Press any ENTER to exit..."
       return $exitCode
   }

   PostProcessing-FixingSitemap

   PostProcessing-Fixing404AbsolutePath

   Copy-ExtraItems
}

# Build non-English language if selected or build all languages if selected
if ($isAllLanguages) {
    Build-AllLanguagesDocs -Languages $languages
} elseif ($selectedLanguage) {
    Build-NonEnglishDoc -SelectedLanguage $selectedLanguage
}

Stop-Transcript

Read-Host -Prompt "Press any ENTER to exit..."