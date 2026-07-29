<#
.SYNOPSIS
    Imports the engine architecture documentation from the sibling stride repository and
    generates its table of contents.
.NOTES
    This file maps onto a future C# ArchitectureDocsImporter plus TocGenerator. The TOC
    generation is already written in an almost-C# style and is the easiest piece to port.

    Known issue, deliberately left as-is: the relative-link rewriting in Copy-ArchitectureDocs
    miscounts directory depth and rewrites some in-site links to GitHub URLs. Fixing it needs a
    proper per-link rewrite rather than whole-line string replacement, which is out of scope
    for this refactor.
#>

function Copy-ArchitectureDocs {
    <#
    .SYNOPSIS
        Mirrors stride/docs into the architecture folder, rewriting links and README file names.
    #>
    [CmdletBinding()]
    param (
        [Parameter(Mandatory)]
        [PSCustomObject]$Settings
    )

    Write-Host -ForegroundColor Green "Copying architecture documentation from the main engine repository..."

    $architectureFolder = $Settings.ArchitectureDirectory
    $engineDocsFolder = Join-Path $Settings.RootPath $Settings.EngineDocsDirectory

    # Return if the repository isn't available
    if (-not (Test-Path $engineDocsFolder)) {
        Write-Host -ForegroundColor Yellow "Skipping copying architecture documentation, can't find the main engine repository. Make sure the stride directory is located next to stride-docs."
        return
    }

    # Remove old files
    if (Test-Path $architectureFolder) {
        Remove-Item "$architectureFolder/*" -Recurse -Force -Verbose
    }

    # Copy files
    Get-ChildItem $engineDocsFolder -Force | ForEach-Object {
        Copy-Item $_.FullName (Join-Path $architectureFolder $_.Name) -Recurse -Verbose
    }

    # Post-processing files. The list is captured up front because the loop renames files.
    $files = @(Get-ChildItem $architectureFolder -Recurse -Force)

    foreach ($file in $files) {
        if (-not $file.PSIsContainer) {
            Update-ArchitectureDocsLink -Settings $Settings -File $file -RootDirectory $architectureFolder
        }

        # Rename README.md files to index.md
        if ($file.Name -ieq $Settings.ReadmeFileName) {
            $renamedLocation = Join-Path ($file.FullName | Split-Path) $Settings.IndexFileName
            Move-Item $file.FullName $renamedLocation -Force
        }
    }

    # Copy root index file
    if (Test-Path $Settings.ArchitectureIndexFile) {
        Copy-Item $Settings.ArchitectureIndexFile (Join-Path $architectureFolder $Settings.IndexFileName)
    }
}

function Update-ArchitectureDocsLink {
    <#
    .SYNOPSIS
        Rewrites links in an imported architecture file.
    .DESCRIPTION
        Links that point outside the imported docs folder are redirected at the engine
        repository, and README references become index references.
    #>
    [CmdletBinding()]
    param (
        [Parameter(Mandatory)][PSCustomObject]$Settings,
        [Parameter(Mandatory)][System.IO.FileSystemInfo]$File,
        [Parameter(Mandatory)][string]$RootDirectory
    )

    $relativePath = Get-RelativePath -BasePath $RootDirectory -Path $File.FullName
    $relativePathSlashes = ([regex]::Matches($relativePath, '/')).Count
    $wrongRelative = "]($('../' * $relativePathSlashes)"

    $content = @(Get-Content $File.FullName -Encoding UTF8)

    for ($i = 0; $i -lt $content.Length; $i++) {
        # Only touch lines that actually contain a markdown link
        if (-not [regex]::IsMatch($content[$i], '\[[^\[\]]*?\]\([^\(\)]*?\)')) {
            continue
        }

        # Replace relative links to files from the repo with non-relative
        $content[$i] = $content[$i].Replace($wrongRelative, "]($($Settings.EngineRepositoryUrl)/")

        # Replace links to README.md files with index.md
        if (!$content[$i].Contains("https://") -and $content[$i].Contains("README")) {
            $content[$i] = $content[$i].Replace("README", "index")
        }
    }

    Set-Utf8Content -Path $File.FullName -Content $content
}

function Get-ArchitectureDocsTocChild {
    <#
    .SYNOPSIS
        The folders and markdown files that become TOC entries, folders first then alphabetical.
    #>
    [CmdletBinding()]
    [OutputType([System.IO.FileSystemInfo[]])]
    param (
        [Parameter(Mandatory)][PSCustomObject]$Settings,
        [Parameter(Mandatory)][string]$Directory
    )

    return @(Get-ChildItem -LiteralPath $Directory -Force |
        Where-Object { $_.PSIsContainer -or $_.Extension -ieq '.md' } |
        Where-Object { $_.Name -ine $Settings.IndexFileName -and $_.Name -ine $Settings.TocFileName } |
        Sort-Object @{ Expression = { if ($_.PSIsContainer) { 0 } else { 1 } } }, Name)
}

function Get-ArchitectureDocsTocTitle {
    <#
    .SYNOPSIS
        The display title for a TOC entry, taken from the document's first heading where
        available and otherwise derived from the file name.
    #>
    [CmdletBinding()]
    [OutputType([string])]
    param (
        [Parameter(Mandatory)][PSCustomObject]$Settings,
        [Parameter(Mandatory)][System.IO.FileSystemInfo]$Item
    )

    $title = [System.IO.Path]::GetFileNameWithoutExtension($Item.Name).Replace('-', ' ')
    if ($title.Length -gt 0) {
        $title = "$($title[0].ToString().ToUpper())$($title.Substring(1))"
    }

    $titleSource = $Item.FullName
    if ($Item.PSIsContainer) {
        $titleSource = Join-Path $Item.FullName $Settings.IndexFileName
    }

    if (Test-Path $titleSource) {
        # The em dash below is written as a \u escape to keep this file pure ASCII,
        # because Windows PowerShell reads BOM-less .ps1 files as ANSI and would
        # otherwise corrupt a literal em dash and break the match.
        $heading = Select-String -LiteralPath $titleSource -Encoding UTF8 -Pattern '^# (.+?)(?:\s[-\u2014]\s.*)?$' | Select-Object -First 1

        if ($null -ne $heading) {
            $title = $heading.Matches[0].Groups[1].Value.Trim().Replace('&amp;', '&')
        }
    }

    # Escape single quotes for the single-quoted YAML scalar the caller emits
    return $title.Replace("'", "''")
}

function Add-ArchitectureDocsTocItem {
    <#
    .SYNOPSIS
        Recursively appends YAML TOC lines for everything under $Directory.
    #>
    [CmdletBinding()]
    param (
        [Parameter(Mandatory)][PSCustomObject]$Settings,
        [Parameter(Mandatory)][string]$Directory,
        [Parameter(Mandatory)][string]$RootDirectory,
        [Parameter(Mandatory)][int]$IndentLevel,
        [Parameter(Mandatory)][AllowEmptyCollection()][System.Collections.Generic.List[string]]$Line
    )

    foreach ($item in Get-ArchitectureDocsTocChild -Settings $Settings -Directory $Directory) {
        $indent = '  ' * $IndentLevel
        $title = Get-ArchitectureDocsTocTitle -Settings $Settings -Item $item

        $Line.Add("$indent- name: '$title'")

        if (-not $item.PSIsContainer) {
            $Line.Add("$indent  href: $(Get-RelativePath -BasePath $RootDirectory -Path $item.FullName)")
            continue
        }

        $indexPath = Join-Path $item.FullName $Settings.IndexFileName
        if (Test-Path $indexPath) {
            $Line.Add("$indent  href: $(Get-RelativePath -BasePath $RootDirectory -Path $indexPath)")
        }

        $children = Get-ArchitectureDocsTocChild -Settings $Settings -Directory $item.FullName
        if ($children.Count -gt 0) {
            $Line.Add("$indent  items:")
            Add-ArchitectureDocsTocItem -Settings $Settings -Directory $item.FullName -RootDirectory $RootDirectory -IndentLevel ($IndentLevel + 1) -Line $Line
        }
    }
}

function New-ArchitectureDocsToc {
    <#
    .SYNOPSIS
        Writes toc.yml for the imported architecture documentation.
    #>
    [CmdletBinding()]
    param (
        [Parameter(Mandatory)]
        [PSCustomObject]$Settings
    )

    Write-Host -ForegroundColor Green "Generating architecture docs $($Settings.TocFileName)..."

    $architectureFolder = $Settings.ArchitectureDirectory
    $lines = [System.Collections.Generic.List[string]]::new()

    Add-ArchitectureDocsTocItem -Settings $Settings -Directory $architectureFolder -RootDirectory $architectureFolder -IndentLevel 0 -Line $lines

    Set-Utf8Content -Path (Join-Path $architectureFolder $Settings.TocFileName) -Content $lines
}
