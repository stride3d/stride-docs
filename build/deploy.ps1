param ($deploymentProfile, $deploymentPassword)

# This is the version used in the https://doc.stride3d.net/<version> url
# Please update this if branching for a new release!
$version = "4.1"

# Deploy doc on the target
Write-Host Executing `'WAWSDeploy.exe ../stride_doc.zip $deploymentProfile /v /t $version /d /p XXXXXXXXXXXXX`'
./WAWSDeploy.exe ../stride_doc.zip $deploymentProfile /v /t $version /d /p $deploymentPassword

# Find host URL from deployment profile
[xml]$deploymentProfileXml = Get-Content $deploymentProfile
$deployUrl = $deploymentProfileXml.publishData.publishProfile[0].destinationAppUrl

# Process versions.json
Write-Host Updating list of versions
$response = Invoke-RestMethod -Uri $deployUrl/versions.json
$response.versions = ($response.versions + $version) | select -Unique | Sort-Object -Property @{Expression={ new-object System.Version ($_) }; Descending = $True}
# Save file
New-Item -Name "_siteroot" -ItemType "directory"
$response | ConvertTo-Json | Out-File -Encoding ascii "_siteroot/versions.json"

# Only update web.config if we are the latest version
if ($response.versions[0] -eq $version)
{
	(Get-Content -path "web.config" -Raw) -Replace '%deployment_version%', $version | Set-Content -Encoding utf8 -Path "_siteroot\web.config"
}

# Upload versions.json and web.config
./WAWSDeploy.exe _siteroot $deploymentProfile /v /p $deploymentPassword

Remove-Item "_siteroot" -Recurse