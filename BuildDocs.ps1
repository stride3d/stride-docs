<#
.SYNOPSIS
    This script builds documentation (manuals, tutorials, release notes) in selected language(s) from the languages.json file and optionally includes API documentation.
.DESCRIPTION
    The script allows the user to build documentation in English or any other available language specified in the languages.json file. It provides options to build documentation in all available languages, run a local website for the documentation, or cancel the operation. If the user chooses to build the documentation, the script also prompts whether API documentation should be included unless API building is explicitly skipped.
.NOTES
    The documentation files are expected to be in Markdown format (.md). The script uses the DocFX tool to build the documentation and optionally includes API documentation. The script generates the API documentation from C# source files using DocFX metadata and can run a local website using the DocFX serve command. This script can also be run from GitHub Actions.

    The build steps live in the build/ folder and are dot-sourced below. Each of those files is
    scoped to become one class when this script is eventually ported to C#.
.LINK
    https://github.com/stride3d/stride-docs
.LINK
    https://github.com/stride3d/stride-docs/blob/master/en/languages.json
.LINK
    https://dotnet.github.io/docfx/index.html
.PARAMETER BuildAll
    Switch parameter. If provided, the script will build documentation in all available languages and include API documentation unless SkipApiBuilding is also provided.
.PARAMETER Version
    The Version to build the Docs, the default is the latest version
.PARAMETER SkipApiBuilding
    Switch parameter. If provided, it skips API metadata generation and excludes API documentation from the build.
.PARAMETER SkipPdfBuilding
    Switch parameter. If provided, It skips Pdf generation step.
.EXAMPLE
    .\BuildDocs.ps1 -BuildAll
    In this example, the script will build the documentation in all available languages and include API documentation. Use this in GitHub Actions.
.EXAMPLE
    .\BuildDocs.ps1 -BuildAll -SkipApiBuilding
    In this example, the script will build the documentation in all available languages without generating API documentation. Use this in GitHub Actions when API docs should be skipped.
.EXAMPLE
    .\BuildDocs.ps1
    In this example, the script will prompt the user to select an operation and an optional language. If the user chooses to build the documentation, the script will also ask if they want to include API documentation.
.EXAMPLE
    .\BuildDocs.ps1 -SkipPdfBuilding
#>

param (
    [switch]$BuildAll,
    [switch]$SkipApiBuilding,
    [switch]$SkipPdfBuilding,
    [ArgumentCompleter({
        [OutputType([System.Management.Automation.CompletionResult])]
        param([string] $CommandName,[string] $ParameterName,[string] $WordToComplete,[System.Management.Automation.Language.CommandAst] $CommandAst,[System.Collections.IDictionary] $FakeBoundParameters)
        return (Get-Content $PSScriptRoot\versions.json -Encoding UTF8 | ConvertFrom-Json).versions
    })]
    [string]$Version = $((Get-Content $PSScriptRoot\versions.json -Encoding UTF8 | ConvertFrom-Json).versions | Sort-Object -Property { [version]$_ } -Descending | Select-Object -First 1)
)

# Almost every path below is relative to the repository root, so anchor the working directory
# rather than depending on where the script was invoked from.
Push-Location $PSScriptRoot

try {
    . "$PSScriptRoot\build\Settings.ps1"
    . "$PSScriptRoot\build\Languages.ps1"
    . "$PSScriptRoot\build\Console.ps1"
    . "$PSScriptRoot\build\FileUtility.ps1"
    . "$PSScriptRoot\build\DocFx.ps1"
    . "$PSScriptRoot\build\ArchitectureDocs.ps1"
    . "$PSScriptRoot\build\PostProcessing.ps1"
    . "$PSScriptRoot\build\Build.ps1"

    $Settings = New-BuildSettings -Version $Version -RootPath $PSScriptRoot
    $languages = Read-LanguageConfiguration -Settings $Settings

    $primaryLanguage = $languages | Where-Object { $_.Code -eq $Settings.PrimaryLanguageCode } | Select-Object -First 1

    # Running unattended (CI) means never blocking on a prompt
    $isInteractive = -not $BuildAll

    Start-Transcript -Path $Settings.LogPath

    if (-not $primaryLanguage) {
        Exit-WithError -Message "No language with code '$($Settings.PrimaryLanguageCode)' found in $($Settings.LanguageJsonPath)." -Interactive:$isInteractive
    }

    # Decide what to build
    if ($BuildAll) {
        $isAllLanguages = $true
        $isPrimaryLanguage = $false
        $selectedLanguage = $null
        $buildApi = -not $SkipApiBuilding
        $reuseApi = $false
        $buildArchitecture = $true
    }
    else {
        $userInput = Read-BuildOption -Language $languages

        if ($userInput -eq 'c') {
            Write-Host -ForegroundColor Red "Operation canceled by user."
            Stop-BuildTranscript
            Wait-ForUserExit -Interactive:$isInteractive
            return
        }

        if ($userInput -eq 'r') {
            Start-LocalWebsite -Settings $Settings
            return
        }

        # Read-BuildOption only returns 'all' or an enabled language code at this point
        $isAllLanguages = $userInput -eq 'all'
        $isPrimaryLanguage = $userInput -eq $Settings.PrimaryLanguageCode
        $selectedLanguage = Find-TranslatableLanguage -Language $languages -Code $userInput

        if ($SkipApiBuilding) {
            $buildApi = $false
            $reuseApi = $false
        }
        else {
            $buildApi = Confirm-Choice "Do you want to include API?"
            $reuseApi = $buildApi -and (Test-ApiMetadata -Settings $Settings) -and (Confirm-Choice "Do you want to use already generated API metadata?")
        }

        # Architecture docs are independent of the API, so this is asked either way
        $buildArchitecture = Confirm-Choice "Do you want to copy and replace engine architecture docs?"
    }

    # Generate API doc
    if ($reuseApi) {
        Write-Step "Generating API documentation from existing metadata..."
    }
    elseif ($buildApi) {
        $exitCode = New-ApiMetadata -Settings $Settings

        if ($exitCode -ne 0) {
            Exit-WithError -Message "Failed to generate API metadata. ExitCode: $exitCode" -ExitCode $exitCode -Interactive:$isInteractive
        }
    }
    else {
        Remove-ApiDocumentation -Settings $Settings
    }

    # Engine architecture docs
    if ($buildArchitecture) {
        Copy-ArchitectureDocs -Settings $Settings
        New-ArchitectureDocsToc -Settings $Settings
    }

    Write-Step "Generating documentation..."
    Write-Warning "Note that when building docs without API, you will get UidNotFound warnings and invalid references warnings"
    Write-Host ""

    if ($isPrimaryLanguage -or $isAllLanguages) {
        $exitCode = Build-EnglishDoc -Settings $Settings -PrimaryLanguage $primaryLanguage -SkipPdf:$SkipPdfBuilding

        if ($exitCode -ne 0) {
            Exit-WithError -Message "Failed to build $($primaryLanguage.Name) documentation. ExitCode: $exitCode" -ExitCode $exitCode -Interactive:$isInteractive
        }

        Update-Sitemap -Settings $Settings

        Update-NotFoundPage -Settings $Settings

        Copy-ExtraItem -Settings $Settings
    }

    # Build non-English language if selected or build all languages if selected
    if ($isAllLanguages) {
        $exitCode = Build-AllLanguagesDoc -Settings $Settings -Language $languages -KeepTempFolder:$BuildAll
    }
    elseif ($selectedLanguage) {
        $exitCode = Build-NonEnglishDoc -Settings $Settings -SelectedLanguage $selectedLanguage -KeepTempFolder:$BuildAll
    }
    else {
        $exitCode = 0
    }

    if ($exitCode -ne 0) {
        Exit-WithError -Message "Failed to build translated documentation. ExitCode: $exitCode" -ExitCode $exitCode -Interactive:$isInteractive
    }

    Stop-BuildTranscript

    Wait-ForUserExit -Interactive:$isInteractive
}
finally {
    Pop-Location
}
