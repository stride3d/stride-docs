<#
.SYNOPSIS
    Shared path and file editing helpers.
.NOTES
    This file maps onto a future C# PathHelper / FileEditor. Get-RelativePath becomes
    Path.GetRelativePath and Update-FileContent becomes a small file-rewriting helper.
#>

function Get-RelativePath {
    <#
    .SYNOPSIS
        Returns $Path expressed relative to $BasePath, using forward slashes.
    #>
    [CmdletBinding()]
    [OutputType([string])]
    param (
        [Parameter(Mandatory)]
        [string]$BasePath,

        [Parameter(Mandatory)]
        [string]$Path
    )

    $separators = @([System.IO.Path]::DirectorySeparatorChar, [System.IO.Path]::AltDirectorySeparatorChar)
    $baseUri = [Uri]((Resolve-Path $BasePath).Path.TrimEnd($separators) + [System.IO.Path]::DirectorySeparatorChar)
    $pathUri = [Uri](Resolve-Path $Path).Path

    return [Uri]::UnescapeDataString($baseUri.MakeRelativeUri($pathUri).ToString())
}

function Set-Utf8Content {
    <#
    .SYNOPSIS
        Writes lines as UTF-8 without a byte order mark.
    .DESCRIPTION
        Windows PowerShell's Set-Content defaults to ANSI, which corrupts non-ASCII characters,
        and its -Encoding UTF8 emits a BOM. Markdown and YAML written by this build should be
        BOM-less UTF-8.
    #>
    [CmdletBinding()]
    param (
        [Parameter(Mandatory)]
        [string]$Path,

        [Parameter(Mandatory)]
        [AllowEmptyCollection()]
        [AllowEmptyString()]
        [string[]]$Content
    )

    # WriteAllLines resolves relative paths against the process directory, not the PowerShell
    # location, so resolve them here.
    $fullPath = if ([System.IO.Path]::IsPathRooted($Path)) {
        [System.IO.Path]::GetFullPath($Path)
    }
    else {
        [System.IO.Path]::GetFullPath((Join-Path (Get-Location).ProviderPath $Path))
    }

    [System.IO.File]::WriteAllLines($fullPath, $Content, [System.Text.UTF8Encoding]::new($false))
}

function Update-FileContent {
    <#
    .SYNOPSIS
        Applies a set of ordered replacements to a UTF-8 text file.
    .DESCRIPTION
        Replacements are literal by default. Pass -AsRegex when the keys are genuine patterns
        with capture groups; note that PowerShell's -replace is case-insensitive, whereas the
        literal path is ordinal.
    .PARAMETER Replacement
        An ordered dictionary of search string to replacement string. Order matters: each entry
        is applied to the result of the previous one.
    #>
    [CmdletBinding()]
    param (
        [Parameter(Mandatory)]
        [string]$Path,

        [Parameter(Mandatory)]
        [System.Collections.IDictionary]$Replacement,

        [switch]$AsRegex
    )

    if (-not (Test-Path -LiteralPath $Path)) {
        Write-Warning "Cannot update '$Path'. The file does not exist."
        return
    }

    $content = @(Get-Content -LiteralPath $Path -Encoding UTF8)

    foreach ($entry in $Replacement.GetEnumerator()) {
        if ($AsRegex) {
            $content = $content -replace $entry.Key, $entry.Value
        }
        else {
            $content = @($content | ForEach-Object { $_.Replace($entry.Key, $entry.Value) })
        }
    }

    $content | Set-Content -LiteralPath $Path -Encoding UTF8
}
