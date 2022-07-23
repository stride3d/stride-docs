Start-Transcript -Path build.log
Write-Host "Start building Russian documentation."

If(Test-Path ru_tmp){
    Remove-Item ru_tmp/* -recurse
}
Else{   
    New-Item -Path 'ru_tmp' -ItemType "directory"
}
Copy-Item en/* -Recurse ru_tmp -Force
$posts = Get-ChildItem ru_tmp/manual/*.md -Recurse -Force
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
Copy-Item ru/index.md ru_tmp -Force
Copy-Item ru/manual -Recurse ru_tmp -Force
Copy-Item en/docfx.json ru_tmp -Force
(Get-Content ru_tmp/docfx.json) -replace "_site/en","_site/ru" | Set-Content ru_tmp/docfx.json
(Get-Content ru_tmp/docfx.json) -replace '"_enableSearch": true','"_enableSearch": false' | Set-Content ru_tmp/docfx.json
deps\docfx\docfx.exe build ru_tmp\docfx.json
Remove-Item ru_tmp -recurse 
if ($LastExitCode -ne 0)
{
	Write-Host "Failed to build doc"
	exit $LastExitCode
}

Write-Host "Japanese documentation built."
Stop-Transcript
