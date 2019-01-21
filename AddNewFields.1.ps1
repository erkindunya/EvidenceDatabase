$templatePath = Join-Path (Get-Location) '\resources\provtemplateUAtTrimmed.xml'
Connect-PnPOnline -Url https://28.kier.group -CurrentCredentials
Set-PnPTraceLog -On -LogFile traceoutputV5.txt -Level Debug
Apply-PnPProvisioningTemplate -path $templatePath -overwrite
Set-PnPTraceLog -Off