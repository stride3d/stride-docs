<#
.SYNOPSIS
    The documentation build steps for the primary and translated languages.
.NOTES
    This file maps onto a future C# BuildPipeline. Every function returns a DocFX exit code so
    that failures propagate instead of relying on the ambient $LASTEXITCODE.
#>

function Build-EnglishDoc {
    <#
    .SYNOPSIS
        Builds the primary language site and, unless skipped, its PDF.
    .OUTPUTS
        The DocFX exit code. Non-zero means the build failed.
    #>
    [CmdletBinding()]
    [OutputType([int])]
    param (
        [Parameter(Mandatory)]
        [PSCustomObject]$Settings,

        [Parameter(Mandatory)]
        [PSCustomObject]$PrimaryLanguage,

        [switch]$SkipPdf
    )

    $outputDirectory = Get-LanguageOutputPath -Settings $Settings -Code $Settings.PrimaryLanguageCode

    Write-Step "Start building $($PrimaryLanguage.Name) documentation. Output: $outputDirectory" -Color Yellow

    $exitCode = Invoke-DocFx -Argument @('build', $Settings.DocFxConfigFile, '-o', $outputDirectory)

    # A successful PDF run must not mask a failed site build
    if ($exitCode -ne 0) {
        return $exitCode
    }

    if ($SkipPdf) {
        return 0
    }

    return Build-EnglishPdf -Settings $Settings -OutputDirectory $outputDirectory
}

function Build-EnglishPdf {
    <#
    .SYNOPSIS
        Builds the PDF version of the primary language documentation.
    #>
    [CmdletBinding()]
    [OutputType([int])]
    param (
        [Parameter(Mandatory)]
        [PSCustomObject]$Settings,

        [Parameter(Mandatory)]
        [string]$OutputDirectory
    )

    return Invoke-DocFx -Argument @('pdf', $Settings.DocFxConfigFile, '-o', $OutputDirectory)
}

function Build-NonEnglishDoc {
    <#
    .SYNOPSIS
        Builds a translated site from a temporary overlay folder.
    .DESCRIPTION
        The primary language content is copied into <code>_tmp first so untranslated pages fall
        back to English, each fallback page is marked with a warning banner, and the translated
        index page and manual are then copied over the top.
    .OUTPUTS
        The DocFX exit code. Non-zero means the build failed.
    #>
    [CmdletBinding()]
    [OutputType([int])]
    param (
        [Parameter(Mandatory)]
        [PSCustomObject]$Settings,

        [Parameter(Mandatory)]
        [PSCustomObject]$SelectedLanguage,

        [switch]$KeepTempFolder
    )

    $code = $SelectedLanguage.Code

    if ($code -eq $Settings.PrimaryLanguageCode) {
        Write-Warning "Skipping '$code'; it is the primary language and is built separately."
        return 0
    }

    Write-Host "-------------------------------------------------------------------------------"
    Write-Host ""
    Write-Step "Start building $($SelectedLanguage.Name) documentation." -Color Yellow

    $langFolder = Get-LanguageTempPath -Settings $Settings -Code $code
    $sourceFolder = Get-LanguageSourcePath -Settings $Settings -Code $code

    if (Test-Path $langFolder) {
        Remove-Item "$langFolder/*" -Recurse -Verbose
    }
    else {
        New-Item -Path $langFolder -ItemType Directory -Verbose | Out-Null
    }

    # Copy all files from the primary language folder, so untranslated pages still render
    Copy-Item "$($Settings.SourceDirectory)/*" -Recurse $langFolder -Force

    Add-NotTranslatedWarning -Settings $Settings -SelectedLanguage $SelectedLanguage -TempFolder $langFolder

    # Overwrite the primary index page with the translated one
    $translatedIndex = "$sourceFolder/$($Settings.IndexFileName)"
    if (Test-Path $translatedIndex) {
        Copy-Item $translatedIndex $langFolder -Force
    }
    else {
        Write-Warning "$translatedIndex not found. English version will be used."
    }

    # Overwrite the primary manual pages with the translated ones
    $translatedManual = "$sourceFolder/$($Settings.ManualFolderName)"
    if (Test-Path $translatedManual) {
        Copy-Item $translatedManual -Recurse -Destination $langFolder -Force
    }
    else {
        Write-Warning "$translatedManual not found."
    }

    # Reuse the primary docfx.json so there is only one set of settings to maintain
    Copy-Item $Settings.DocFxConfigFile $langFolder -Force

    $docFxConfigName = Split-Path -Leaf $Settings.DocFxConfigFile
    $outputDirectory = Get-LanguageOutputPath -Settings $Settings -Code $code

    $exitCode = Invoke-DocFx -Argument @('build', "$langFolder/$docFxConfigName", '-o', $outputDirectory)

    if (-not $KeepTempFolder) {
        Remove-Item $langFolder -Recurse -Verbose
    }

    if ($exitCode -ne 0) {
        return $exitCode
    }

    Update-DocFxDocUrl -Settings $Settings -SelectedLanguage $SelectedLanguage

    Write-Host -ForegroundColor Green "$($SelectedLanguage.Name) documentation built."

    return $exitCode
}

function Add-NotTranslatedWarning {
    <#
    .SYNOPSIS
        Prefixes each copied manual page with a banner saying it has not been translated.
    .DESCRIPTION
        The banner replaces the first blank line, which in these documents sits between the
        title and the body.
    #>
    [CmdletBinding()]
    param (
        [Parameter(Mandatory)][PSCustomObject]$Settings,
        [Parameter(Mandatory)][PSCustomObject]$SelectedLanguage,
        [Parameter(Mandatory)][string]$TempFolder
    )

    $files = @(Get-ChildItem "$TempFolder/$($Settings.ManualFolderName)/*.md" -Recurse -Force)

    Write-Host "Start write files:"

    foreach ($file in $files) {
        if ($file.Name -ieq 'toc.md') {
            continue
        }

        $data = Get-Content $file -Encoding UTF8

        for ($i = 0; $i -lt $data.Length; $i++) {
            if ($data[$i].Length -le 0) {
                Write-Host $file

                $data[$i] = "> [!WARNING]`r`n> " + $SelectedLanguage.NotTranslatedMessage + "`r`n"
                $data | Out-File -Encoding UTF8 $file

                break
            }
        }
    }

    Write-Host "End write files"
}

function Build-AllLanguagesDoc {
    <#
    .SYNOPSIS
        Builds every enabled translated language.
    .OUTPUTS
        The exit code of the first language that failed, or 0 when all succeeded.
    #>
    [CmdletBinding()]
    [OutputType([int])]
    param (
        [Parameter(Mandatory)]
        [PSCustomObject]$Settings,

        [Parameter(Mandatory)]
        [PSCustomObject[]]$Language,

        [switch]$KeepTempFolder
    )

    foreach ($lang in Get-TranslatableLanguage -Language $Language) {
        $exitCode = Build-NonEnglishDoc -Settings $Settings -SelectedLanguage $lang -KeepTempFolder:$KeepTempFolder

        if ($exitCode -ne 0) {
            Write-Error "Failed to build $($lang.Name) documentation. ExitCode: $exitCode"
            return $exitCode
        }
    }

    return 0
}

function Start-LocalWebsite {
    <#
    .SYNOPSIS
        Serves the built site locally and opens it in the default browser.
    #>
    [CmdletBinding()]
    param (
        [Parameter(Mandatory)]
        [PSCustomObject]$Settings
    )

    Write-Host -ForegroundColor Green "Running local website..."
    Write-Host -ForegroundColor Green "Navigate manually to non English website, if you didn't build English documentation."

    Stop-BuildTranscript

    New-Item -ItemType Directory -Verbose -Force -Path $Settings.WebDirectory | Out-Null

    Push-Location $Settings.WebDirectory
    try {
        Start-Process -FilePath $Settings.LocalTestHostUrl

        docfx serve
    }
    finally {
        Pop-Location
    }
}
