# Get-PnPProvisioningTemplate -Out template.xml

# Connect-PnPOnline –Url $siteUrl –Credentials (Get-Credential)
#     Get-PnPProvisioningTemplate -Out $templatexml


# $templatePath = Join-Path (Get-Location) '\resources\Fields.xml'
Connect-PnPOnline -Url "https://28.kier.group" –Credentials (Get-Credential)
# Get-PnPProvisioningTemplate -Out template.xml
#Write-Output "test"
#Get-PnPProvisioningTemplate -Out template.pnp -ContentTypeGroups "GConstruction EvidenceDB"
#Write-Output "test"
# Apply-PnPProvisioningTemplate -path $templatePath -overwrite
# Add-PnPListItem -List "New Starter Submissions" -ContentType "NewStarterSubmissions" -Values @{"Title" = "Test Title"}Connect-PnPOnline -Url "https://28.kier.group" –Credentials (Get-Credential)

Write-Output "test"