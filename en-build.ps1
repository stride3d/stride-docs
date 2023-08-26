 param (
    [switch]$API
 )

 # Define constants
$Settings = [PSCustomObject]@{
    Version = "4.1"
}

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

    # Run MSBuild restore
	$msbuild = & ("${env:ProgramFiles(x86)}\Microsoft Visual Studio\Installer\vswhere.exe") -latest -requires Microsoft.Component.MSBuild -find MSBuild\**\Bin\MSBuild.exe | select-object -first 1
    & $msbuild ..\stride\build\Stride.sln /t:Restore
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

# Apply absolute path to 404.html based on the version property

$404 = Get-Content _site/en/404.html -Encoding UTF8

$404 = $404 -replace 'href="css/site.css"', "href=/$($Settings.Version)/en/css/site.css"
$404 = $404 -replace 'src="scripts/site.doc.js"', "src=/$($Settings.Version)/en/scripts/site.doc.js"
$404 = $404 -replace 'href="favicon.png"', "href=/$($Settings.Version)/en/favicon.png"
$404 = $404 -replace 'src="scripts/theme.js"', "src=/$($Settings.Version)/en/scripts/theme.js"

$404 | Set-Content _site/en/404.html -Encoding UTF8

Stop-Transcript