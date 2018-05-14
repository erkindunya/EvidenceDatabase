<%@ assembly name="Microsoft.SharePoint,Version=14.0.0.0,Culture=neutral,PublicKeyToken=71e9bce111e9429c" %>
<%@ page masterpagefile="~masterurl/default.master" inherits="Microsoft.SharePoint.WebPartPages.WebPartPage" %>

<asp:Content ContentPlaceholderID="PlaceHolderAdditionalPageHead" runat="server">

  <link href="./css/main.css" rel="stylesheet" />

</asp:content>

<asp:content ContentPlaceholderID="PlaceHolderPageTitleInTitleArea" runat="server">
  Evidence Database - Locator Page
</asp:content>

<asp:content ContentPlaceholderID="PlaceHolderMain" runat="server">
  <div id="container"></div>
  <script src="./js/libs.js"></script>
  <script src="./js/adminpage.js"></script>
</asp:content>