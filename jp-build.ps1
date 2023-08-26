# Define constants
$Settings = [PSCustomObject]@{
    Version = "4.1"
}

Start-Transcript -Path build.log
Write-Host "Start building Japanese documentation."

If(Test-Path jp_tmp){
    Remove-Item jp_tmp/* -recurse
}
Else{   
    New-Item -Path 'jp_tmp' -ItemType "directory"
}
Copy-Item en/* -Recurse jp_tmp -Force
$posts = Get-ChildItem jp_tmp/manual/*.md -Recurse -Force
Write-Host "Start write files:"
Foreach ($post in $posts)
{    
    if($post.ToString().Contains("toc.md")) {
		continue; 
	}
		
    $data = Get-Content $post
    $i = 0;
    Foreach ($line in $data)
    {    
        $i++
        if ($line.length -le 0) 
        {
           Write-Host $post
           $data[$i-1]="<div class='doc-no-translated'/>"
           $data | out-file $post  
           break
        } 
    }
}

Write-Host "End write files"
Copy-Item jp/index.md jp_tmp -Force
Copy-Item jp/manual -Recurse jp_tmp -Force
Copy-Item en/docfx.json jp_tmp -Force
(Get-Content jp_tmp/docfx.json) -replace "_site/en","_site/jp" | Set-Content jp_tmp/docfx.json
deps\docfx\docfx.exe build jp_tmp\docfx.json --force
Remove-Item jp_tmp -recurse 
if ($LastExitCode -ne 0)
{
	Write-Host "Failed to build doc"
	exit $LastExitCode
}

# Apply absolute path to 404.html based on the version property

$404 = Get-Content _site/jp/404.html -Encoding UTF8

$404 = $404 -replace 'href="css/site.css"', "href=/$($Settings.Version)/jp/css/site.css"
$404 = $404 -replace 'src="scripts/site.doc.js"', "src=/$($Settings.Version)/jp/scripts/site.doc.js"
$404 = $404 -replace 'href="favicon.png"', "href=/$($Settings.Version)/jp/favicon.png"
$404 = $404 -replace 'src="scripts/theme.js"', "src=/$($Settings.Version)/jp/scripts/theme.js"

$404 | Set-Content _site/jp/404.html -Encoding UTF8

Write-Host "Japanese documentation built."
Stop-Transcript
