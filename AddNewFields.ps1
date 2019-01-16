Connect-PnPOnline -Url "https://28.kier.group" -Credentials (Get-Credential)

Get-PnPProvisioningTemplate -Out template.pnp -ContentTypeGroups "Construction EvidenceDB"