$templatePath = Join-Path (Get-Location) '\resources\addOppAuthToUAT.xml'
Connect-PnPOnline -Url https://content-mykier/sites/EDBUAT -CurrentCredentials
Set-PnPTraceLog -On -LogFile traceoutputV10.txt -Level Debug
Apply-PnPProvisioningTemplate -path $templatePath -overwrite
Set-PnPTraceLog -Off