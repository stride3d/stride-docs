<#
.SYNOPSIS
    Build settings for the Stride documentation build.
.DESCRIPTION
    Every path, file name, URL and token used by BuildDocs.ps1 is defined here exactly once.
    Only a handful of root values are literals; everything else is composed from them, so
    changing the primary language folder or the output folder is a one-line edit.
.NOTES
    This file maps onto a future C# BuildSettings options class. The derivation below is what
    that class would do in its constructor.
#>

function New-BuildSettings {
    [CmdletBinding()]
    [OutputType([PSCustomObject])]
    param (
        [Parameter(Mandatory)]
        [string]$Version,

        [Parameter(Mandatory)]
        [string]$RootPath
    )

    # Roots. Everything below is derived from these four values.
    $primary = 'en'
    $web = '_site'
    $site = "$web/$Version"
    $architecture = "$primary/contributors/engine/architecture"

    [PSCustomObject]@{
        RootPath              = $RootPath
        Version               = $Version
        PrimaryLanguageCode   = $primary

        # Directories
        SourceDirectory       = $primary
        WebDirectory          = $web
        SiteDirectory         = $site
        TempDirectorySuffix   = '_tmp'
        ApiDirectory          = "$primary/api"
        ArchitectureDirectory = $architecture
        EngineDocsDirectory   = '../stride/docs'
        ManualFolderName      = 'manual'
        ReleaseNotesFolderName = 'ReleaseNotes'

        # Files
        DocFxConfigFile       = "$primary/docfx.json"
        LanguageJsonPath      = "$primary/languages.json"
        ApiManifestFile       = "$primary/api/.manifest"
        ArchitectureIndexFile = "$primary/contributors/engine/architecture-index.md"
        ReleaseNotesFile      = "$primary/ReleaseNotes/ReleaseNotes.md"
        VersionsFile          = 'versions.json'
        WebConfigFile         = 'web.config'
        RobotsFile            = 'robots.txt'
        LogPath               = './build.log'

        # File names
        IndexFileName         = 'index.md'
        TocFileName           = 'toc.yml'
        ReadmeFileName        = 'README.md'
        SitemapFileName       = 'sitemap.xml'
        NotFoundFileName      = '404.html'

        # URLs and tokens
        DocsUrl               = 'https://doc.stride3d.net'
        LatestAlias           = 'latest'
        EngineRepositoryUrl   = 'https://github.com/stride3d/stride/tree/master'
        LocalTestHostUrl      = "http://localhost:8080/$Version/$primary/index.html"
        DeploymentVersionToken = '%deployment_version%'

        # Relative asset paths rewritten to absolute ones in 404.html. Assets are referenced
        # bare (href="favicon.ico"); scripts are referenced with a leading ./ by DocFX.
        NotFoundAssetPath     = @(
            'favicon.ico'
            'public/docfx.min.css'
            'public/main.css'
            'toc.html'
            'media/stride-logo-red.svg'
        )
        NotFoundScriptPath    = @(
            'public/main.js'
            'public/docfx.min.js'
        )
    }
}

function Get-LanguageSourcePath {
    <#
    .SYNOPSIS
        The checked-in source folder for a language, e.g. "jp".
    #>
    [CmdletBinding()]
    [OutputType([string])]
    param (
        [Parameter(Mandatory)][PSCustomObject]$Settings,
        [Parameter(Mandatory)][string]$Code
    )

    return $Code
}

function Get-LanguageTempPath {
    <#
    .SYNOPSIS
        The scratch folder a language is built from, e.g. "jp_tmp".
    .DESCRIPTION
        English content is copied here first, then overlaid with the translated files, so that
        untranslated pages fall back to English.
    #>
    [CmdletBinding()]
    [OutputType([string])]
    param (
        [Parameter(Mandatory)][PSCustomObject]$Settings,
        [Parameter(Mandatory)][string]$Code
    )

    return "$Code$($Settings.TempDirectorySuffix)"
}

function Get-LanguageOutputPath {
    <#
    .SYNOPSIS
        The built output folder for a language, e.g. "_site/4.4/jp".
    #>
    [CmdletBinding()]
    [OutputType([string])]
    param (
        [Parameter(Mandatory)][PSCustomObject]$Settings,
        [Parameter(Mandatory)][string]$Code
    )

    return "$($Settings.SiteDirectory)/$Code"
}
