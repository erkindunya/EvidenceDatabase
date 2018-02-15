<%@ assembly name="Microsoft.SharePoint,Version=14.0.0.0,Culture=neutral,PublicKeyToken=71e9bce111e9429c" %>
<%@ page masterpagefile="~masterurl/default.master" inherits="Microsoft.SharePoint.WebPartPages.WebPartPage" %>

<asp:Content ContentPlaceholderID="PlaceHolderAdditionalPageHead" runat="server">

  <link href="./css/bundle.css" rel="stylesheet" />

</asp:content>

<asp:content ContentPlaceholderID="PlaceHolderPageTitleInTitleArea" runat="server">
  Template - Construction North Central
</asp:content>

<asp:content ContentPlaceholderID="PlaceHolderMain" runat="server">

  <p class="js-red-text">Hello</p>

  <div class="form-group">
    <label for="mainTableFilter">Filter</label>
    <input type="text" class="form-control" id="mainTableFilter" placeholder="Enter Filter.">
  </div>

  <div class="js-main-table"></div>

  <button type="button" class="js-main-table-previous">Previous</button>
  <button type="button" class="js-main-table-next">Next</button>

  <script src="./js/libs.js"></script>
  <script src="./js/subpage.js"></script>
</asp:content>