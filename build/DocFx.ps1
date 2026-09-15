<#
.SYNOPSIS
    DocFX invocation and API metadata management.
.NOTES
    This file maps onto a future C# DocFxRunner. Invoke-DocFx is the single place where the
    external tool is called, so a port only has to replace one function body with Process.Start.
#>

function Invoke-DocFx {
    <#
    .SYNOPSIS
        Runs docfx and returns the exit code of that invocation.
    .DESCRIPTION
        Callers must capture the return value immediately. Reading $LASTEXITCODE later picks up
        whichever native command ran most recently, which is how build failures used to be
        misreported.
    #>
    [CmdletBinding()]
    [OutputType([int])]
    param (
        [Parameter(Mandatory)]
        [string[]]$Argument
    )

    docfx @Argument | Write-Host

    return $LASTEXITCODE
}

function New-ApiMetadata {
    <#
    .SYNOPSIS
        Generates API metadata from the C# sources. DocFX runs dotnet restore itself.
    #>
    [CmdletBinding()]
    [OutputType([int])]
    param (
        [Parameter(Mandatory)]
        [PSCustomObject]$Settings
    )

    Write-Step "Generating API documentation..."

    return Invoke-DocFx -Argument @('metadata', $Settings.DocFxConfigFile)
}

function Test-ApiMetadata {
    <#
    .SYNOPSIS
        Returns $true when previously generated API metadata is available for reuse.
    #>
    [CmdletBinding()]
    [OutputType([bool])]
    param (
        [Parameter(Mandatory)]
        [PSCustomObject]$Settings
    )

    if (-not (Test-Path $Settings.ApiDirectory)) {
        return $false
    }

    $ymlFiles = @(Get-ChildItem -Path $Settings.ApiDirectory -Filter '*.yml' -ErrorAction SilentlyContinue)

    return $ymlFiles.Count -gt 0
}

function Remove-ApiDocumentation {
    <#
    .SYNOPSIS
        Deletes generated API metadata so the site can be built without API documentation.
    #>
    [CmdletBinding()]
    param (
        [Parameter(Mandatory)]
        [PSCustomObject]$Settings
    )

    Write-Host ""
    Write-Host -ForegroundColor Green "Erasing API documentation..."

    if (Test-Path $Settings.ApiManifestFile) {
        Remove-Item "$($Settings.ApiDirectory)/*.yml" -Recurse -Verbose
        Remove-Item $Settings.ApiManifestFile -Verbose
    }
    else {
        Write-Warning "Could not delete APIDoc. The Path $($Settings.ApiManifestFile) does not exist or is not valid."
    }
}
