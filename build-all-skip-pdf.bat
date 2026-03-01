PowerShell.exe -NoProfile -ExecutionPolicy Bypass -Command "& './BuildDocs.ps1' -BuildAll -SkipPdfBuilding; exit $LastExitCode"
if %errorlevel% neq 0 exit /b %errorlevel%
