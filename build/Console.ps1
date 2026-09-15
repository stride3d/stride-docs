<#
.SYNOPSIS
    Console interaction and progress reporting for the documentation build.
.NOTES
    This file maps onto a future C# console UI layer (e.g. Spectre.Console prompts).
#>

function Write-Step {
    <#
    .SYNOPSIS
        Writes a coloured status line followed by a blank line.
    #>
    [CmdletBinding()]
    param (
        [Parameter(Mandatory, Position = 0)]
        [AllowEmptyString()]
        [string]$Message,

        [System.ConsoleColor]$Color = [System.ConsoleColor]::Green
    )

    Write-Host -ForegroundColor $Color $Message
    Write-Host ""
}

function Confirm-Choice {
    <#
    .SYNOPSIS
        Asks a yes/no question. ENTER means yes.
    #>
    [CmdletBinding()]
    [OutputType([bool])]
    param (
        [Parameter(Mandatory, Position = 0)]
        [string]$Question
    )

    Write-Host ""
    Write-Host -ForegroundColor Cyan $Question
    Write-Host ""
    Write-Host -ForegroundColor Yellow "  [Y] Yes or ENTER"
    Write-Host -ForegroundColor Yellow "  [N] No"
    Write-Host ""

    $answer = Read-Host -Prompt "Your choice [Y, N, or ENTER (default is Y)]"

    return ($answer -ieq "y" -or $answer -eq "")
}

function Read-BuildOption {
    <#
    .SYNOPSIS
        Shows the main menu and returns the selected option.
    .DESCRIPTION
        Returns a language code, or one of 'all', 'r' (run local website), 'c' (cancel).
        Only languages marked Enabled in languages.json are offered and accepted, so a
        disabled code cannot fall through the caller's language lookup.
    #>
    [CmdletBinding()]
    [OutputType([string])]
    param (
        [Parameter(Mandatory)]
        [PSCustomObject[]]$Language
    )

    $enabled = @(Get-EnabledLanguage -Language $Language)

    Write-Host ""
    Write-Host -ForegroundColor Cyan "Please select an option:"
    Write-Host ""
    foreach ($lang in $enabled) {
        Write-Host -ForegroundColor Yellow "  [$($lang.Code)] Build $($lang.Name) documentation"
    }
    Write-Host -ForegroundColor Yellow "  [all] Build documentation in all available languages"
    Write-Host -ForegroundColor Yellow "  [r] Run local website"
    Write-Host -ForegroundColor Yellow "  [c] Cancel"
    Write-Host ""

    $validOptions = @('all', 'r', 'c') + @($enabled | Select-Object -ExpandProperty Code)

    # Bounded so a redirected or exhausted stdin cannot spin forever
    for ($attempt = 0; $attempt -lt 10; $attempt++) {
        $userChoice = Read-Host -Prompt "Your choice"

        if ($validOptions -contains $userChoice) {
            return $userChoice.ToLower()
        }

        Write-Host -ForegroundColor Red "'$userChoice' is not a valid option. Expected one of: $($validOptions -join ', ')"
    }

    Write-Host -ForegroundColor Red "No valid choice was given. Cancelling."

    return 'c'
}

function Stop-BuildTranscript {
    <#
    .SYNOPSIS
        Stops the transcript, tolerating the case where none is running.
    #>
    [CmdletBinding()]
    param ()

    try {
        Stop-Transcript | Out-Null
    }
    catch {
        # No transcript was running; nothing to do.
    }
}

function Wait-ForUserExit {
    <#
    .SYNOPSIS
        Holds the console open so the user can read the output. No-op in CI.
    #>
    [CmdletBinding()]
    param (
        [switch]$Interactive
    )

    if ($Interactive) {
        Read-Host -Prompt "Press ENTER to exit..." | Out-Null
    }
}

function Exit-WithError {
    <#
    .SYNOPSIS
        Reports a fatal error, closes the transcript and terminates with a non-zero exit code.
    .DESCRIPTION
        Uses `exit` rather than `return` so the exit code reaches the .bat wrappers, which end
        with `exit $LastExitCode`, and therefore reaches CI.
    #>
    [CmdletBinding()]
    param (
        [Parameter(Mandatory)]
        [string]$Message,

        [int]$ExitCode = 1,

        [switch]$Interactive
    )

    Write-Error $Message

    Stop-BuildTranscript
    Wait-ForUserExit -Interactive:$Interactive

    if ($ExitCode -eq 0) {
        $ExitCode = 1
    }

    exit $ExitCode
}
