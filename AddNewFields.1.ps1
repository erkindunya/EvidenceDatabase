$templatePath = Join-Path (Get-Location) '\resources\provtemplateUAtTrimmed.xml'
Connect-PnPOnline -Url https://28.kier.group -CurrentCredentials
Set-PnPTraceLog -On -LogFile traceoutputV9.txt -Level Debug
Apply-PnPProvisioningTemplate -path $templatePath -overwrite -ExcludeHandlers ComposedLook
Set-PnPTraceLog -Off