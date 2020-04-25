 param (
    [switch]$API
 )

# Remove build.log file
If(Test-Path build.log)
{
    Remove-Item build.log
}
Start-Transcript -Path build.log
# Generate API doc
if ($API)
{
    Write-Host "Generating API documentation..."

    # Run nuget restore
    ..\stride\build\.nuget\nuget restore ..\stride\build\Stride.sln
	if ($LastExitCode -ne 0)
	{
		Write-Host "Failed to restore nuget packages"
		exit $LastExitCode
	}
    
    # Build metadata from C# source
    deps\docfx\docfx.exe metadata en/docfx.json
	if ($LastExitCode -ne 0)
	{
		Write-Host "Failed to generate API metadata"
		exit $LastExitCode
	}
}
else
{
    If(Test-Path en/api/.manifest)
    {
        Write-Host "Erasing API documentation..."
        Remove-Item en/api/*yml -recurse
        Remove-Item en/api/.manifest 
    }
}

Write-Host "Generating documentation..."

# Output to both build.log and console
deps\docfx\docfx.exe build en\docfx.json
if ($LastExitCode -ne 0)
{
	Write-Host "Failed to build doc"
	exit $LastExitCode
}

# Copy extra items
Copy-Item en/ReleaseNotes/ReleaseNotes.md _site/en/ReleaseNotes/
Stop-Transcript