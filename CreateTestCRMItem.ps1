Add-Type -Path "C:\Program Files\Common Files\microsoft shared\Web Server Extensions\15\ISAPI\Microsoft.SharePoint.Client.dll"  
Add-Type -Path "C:\Program Files\Common Files\microsoft shared\Web Server Extensions\15\ISAPI\Microsoft.SharePoint.Client.Runtime.dll"  
  
$siteURL = "https://content-mykier/sites/EDBUAT"  
$userId = "gabor.vig"  
$pwd = Read-Host -Prompt "Enter password" -AsSecureString  
$ctx = New-Object Microsoft.SharePoint.Client.ClientContext($siteURL)
$ctx.Credentials = New-Object System.Net.NetworkCredential($userId, $pwd)

try{  
    $lists = $ctx.web.Lists  
    $list = $lists.GetByTitle("Project Datasheet")  
    $listItemInfo = New-Object Microsoft.SharePoint.Client.ListItemCreationInformation  
    $listItem = $list.AddItem($listItemInfo)  
    $listItem["Title"] = "Al Noor Primary School ICT Part 3"  
    $listItem["CRM_ID"] = "19f41871-1d4d-e711-8119-e0071b66a052"  
    $listItem["Client"] = "Client1"
    $listItem["Project_x0020_Description"] = "Project Description Test"  
    $listItem["CRM_x0020_Number"] = "007"
    $listItem["Otherwise_x0020_known_x0020_as"] = "James Bond"
    $listItem.Update()      
    $ctx.load($list)      
    $ctx.executeQuery()  
    Write-Host "Item Added with ID - " $listItem.Id      
}  
catch{  
    write-host "$($_.Exception.Message)" -foregroundcolor red  
}  