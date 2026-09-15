<#
.SYNOPSIS
    Reads and filters the language configuration.
.NOTES
    This file maps onto a future C# Language record plus the service that loads languages.json.
#>

function Read-LanguageConfiguration {
    <#
    .SYNOPSIS
        Loads languages.json.
    #>
    [CmdletBinding()]
    [OutputType([PSCustomObject[]])]
    param (
        [Parameter(Mandatory)]
        [PSCustomObject]$Settings
    )

    return @(Get-Content $Settings.LanguageJsonPath -Encoding UTF8 | ConvertFrom-Json)
}

function Get-EnabledLanguage {
    <#
    .SYNOPSIS
        All languages that are switched on, primary language first.
    #>
    [CmdletBinding()]
    [OutputType([PSCustomObject[]])]
    param (
        [Parameter(Mandatory)]
        [PSCustomObject[]]$Language
    )

    $enabled = @($Language | Where-Object { $_.Enabled })

    # Ordered explicitly rather than sorted, so the menu always lists English first.
    return @($enabled | Where-Object { $_.IsPrimary }) + @($enabled | Where-Object { -not $_.IsPrimary })
}

function Get-TranslatableLanguage {
    <#
    .SYNOPSIS
        The enabled non-primary languages, i.e. those built from a _tmp overlay folder.
    #>
    [CmdletBinding()]
    [OutputType([PSCustomObject[]])]
    param (
        [Parameter(Mandatory)]
        [PSCustomObject[]]$Language
    )

    return @($Language | Where-Object { $_.Enabled -and -not $_.IsPrimary })
}

function Find-TranslatableLanguage {
    <#
    .SYNOPSIS
        Resolves a language code to its configuration, or $null if it is not translatable.
    #>
    [CmdletBinding()]
    [OutputType([PSCustomObject])]
    param (
        [Parameter(Mandatory)]
        [PSCustomObject[]]$Language,

        [Parameter(Mandatory)]
        [string]$Code
    )

    return Get-TranslatableLanguage -Language $Language | Where-Object { $_.Code -eq $Code } | Select-Object -First 1
}
