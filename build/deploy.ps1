param ($version, $deploymentProfile, $deploymentPassword)

# Deploy doc on the target
Write-Host Executing `'WAWSDeploy.exe ../stride_doc.zip $deploymentProfile /v /t $version /d /p XXXXXXXXXXXXX`'
./WAWSDeploy.exe ../stride_doc.zip $deploymentProfile /v /t $version /d /p $deploymentPassword

# Process versions.json
Write-Host Updating list of versions
$response = Invoke-RestMethod -Uri http://xenko-doc.azurewebsites.net/versions.json
$response.versions = ($response.versions + $version) | select -Unique | Sort-Object -Property @{Expression={ new-object System.Version ($_) }; Descending = $True}
# Save file
New-Item -Name "_siteroot" -ItemType "directory"
$response | ConvertTo-Json | Out-File -Encoding utf8 "_siteroot/versions.json"

# Only update web.config if we are the latest version
if ($response.versions[0] -eq $version)
{
	(Get-Content -path "web.config" -Raw) -Replace '%deployment_version%', $version | Set-Content -Encoding utf8 -Path "_siteroot\web.config"
}

# Upload versions.json and web.config
./WAWSDeploy.exe _siteroot $deploymentProfile /v /p $deploymentPassword

Remove-Item "_siteroot" -Recurse