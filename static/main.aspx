<%@ assembly name="Microsoft.SharePoint,Version=14.0.0.0,Culture=neutral,PublicKeyToken=71e9bce111e9429c" %>
<%@ page masterpagefile="~masterurl/default.master" inherits="Microsoft.SharePoint.WebPartPages.WebPartPage" %>

<asp:Content ContentPlaceholderID="PlaceHolderAdditionalPageHead" runat="server">

  <link href="./css/bundle.css" rel="stylesheet" />

</asp:content>

<asp:content ContentPlaceholderID="PlaceHolderPageTitleInTitleArea" runat="server">
  Template - Construction North Central
</asp:content>

<asp:content ContentPlaceholderID="PlaceHolderMain" runat="server">

  <p>Hello</p>

  <script src="./js/bundle.js"></script>
</asp:content>