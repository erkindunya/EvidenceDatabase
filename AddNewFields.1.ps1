$templatePath = Join-Path (Get-Location) '\resources\provtemplateUAtTrimmed.xml'
Connect-PnPOnline -Url https://28.kier.group -CurrentCredentials
Apply-PnPProvisioningTemplate -path $templatePath -overwrite