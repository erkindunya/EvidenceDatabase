"use strict";

var collListItem;
var mainExportContainer;
var row;
var rowData;

//$(document).ready(function () { ExecuteOrDelayUntilScriptLoaded(retrieveListItems, "sp.js"); });

function retrieveListItems(curItemId, curItemTitle, curPath) {
    if (window.jQuery) {
        console.log('jQuery is loaded');
    } else {
        console.log('jQuery is not loaded');
    }

    var oListName = curPath.substring(curPath.lastIndexOf("/Lists/") + 7, curPath.lastIndexOf("/"));
    var olistID = getParameterByName("ID", curPath);

    $('#mainExportContainer').html('');
    //$('#mainExportContainer').attr('id', 'mainExportContainer').css('display', 'none');
    $("<h1 align='left'>" + oListName + "</h2>").appendTo("#mainExportContainer"); // Heading of the Word document Page.  

    GetList(oListName);
    getListItem(oListName, olistID);

    // var clientContext = SP.ClientContext.get_current();
    // var oList = clientContext.get_web().get_lists().getByTitle(oListName);
    // var camlQuery = new SP.CamlQuery();
    // camlQuery.set_viewXml("<View><Query><Where><Eq><FieldRef Name='ID' LookupId='TRUE'/><Value Type='Text'>" + olistID + "</Value></Eq></Where></Query></View>");
    // collListItem = oList.getItems(camlQuery);
    // clientContext.load(collListItem);
    // clientContext.executeQueryAsync(Function.createDelegate(this, onQuerySucceeded), Function.createDelegate(this, onQueryFailed));
}
////////////////////////////////////////////////////
function GetList(listName) {
    var queryUrl = _spPageContextInfo.webAbsoluteUrl + "/_api/web/lists/getbytitle('" + listName + "')/items";

    $.ajax({
        url: queryUrl,
        type: "GET",
        headers: {
            "Accept": "application/json;odata=verbose"
        },
        success: function(data) {
            if (data.d.results.length > 0) {
                $.each(data.d.results, function(index, item) {
                    console.log(item.Title);
                    var $table;
                    $('<h2 align="left">' + item.Title + '</h2>').appendTo('#mainExportContainer');
                    //Create table
                    $table = $('<table></table>');
                    $table.attr('id', item.ID);
                    $("<thead><tr><td><b>Column Name</b></td><td><b>Column Value</b></td><tr></thead>").appendTo($table);
                    //Add field name row
                    row = $('<tr></tr>');
                    rowData = $('<td></td>').addClass('fieldName').text("Title");
                    row.append(rowData);
                    //Add field value row
                    rowData = $('<td></td>').addClass('fieldValue').text(item.Title);
                    row.append(rowData);
                    $table.append(row);

                    //Add table to the DIV
                    $table.appendTo($('#mainExportContainer'));

                    $("#mainExportContainer table tr td:first-child").css('background-color', 'grey');
                    $("#mainExportContainer img").remove();
                    var htmlData = '<html xmlns:office="urn:schemas-microsoft-com:office:office" xmlns:word="urn:schemas-microsoft-com:office:word" xmlns="http://www.w3.org/TR/REC-html40"><head><xml><word:WordDocument><word:View>Print</word:View><word:Zoom>90</word:Zoom><word:DoNotOptimizeForBrowser/></word:WordDocument></head><body>' + document.getElementById('mainExportContainer').innerHTML + "</body></html>";
                    exportElementToWord(htmlData);
                });
            }
        }
    });
}
//////////////////////////////////////////////////////////////
function getListItem(listName, listID) {
    var queryUrl = _spPageContextInfo.webAbsoluteUrl + "/_api/web/lists/getbytitle('" + listName + "')/items?$orderby=ID desc&$filter=(ID eq '" + listID + "')";
    $.ajax({
        url: queryUrl,
        type: "GET",
        async: false,
        headers: {
            "Accept": "application/json;odata=verbose"
        },
        success: function(data) {
            if (data.d.results.length > 0) {
                $.each(data.d.results, function(index, item) {
                    console.log(item.Title);
                    var $table;
                    $('<h2 align="left">' + item.Title + '</h2>').appendTo('#mainExportContainer');
                    //Create table
                    $table = $('<table></table>');
                    $table.attr('id', item.ID);
                    $("<thead><tr><td><b>Column Name</b></td><td><b>Column Value</b></td><tr></thead>").appendTo($table);
                    //Add field name row
                    row = $('<tr></tr>');
                    rowData = $('<td></td>').addClass('fieldName').text("Title");
                    row.append(rowData);
                    //Add field value row
                    rowData = $('<td></td>').addClass('fieldValue').text(item.Title);
                    row.append(rowData);
                    $table.append(row);

                    //Add table to the DIV
                    $table.appendTo($('#mainExportContainer'));

                    $("#mainExportContainer table tr td:first-child").css('background-color', 'grey');
                    $("#mainExportContainer img").remove();
                    var htmlData = '<html xmlns:office="urn:schemas-microsoft-com:office:office" xmlns:word="urn:schemas-microsoft-com:office:word" xmlns="http://www.w3.org/TR/REC-html40"><head><xml><word:WordDocument><word:View>Print</word:View><word:Zoom>90</word:Zoom><word:DoNotOptimizeForBrowser/></word:WordDocument></head><body>' + document.getElementById('mainExportContainer').innerHTML + "</body></html>";
                    exportElementToWord(htmlData);
                });
            }
        },
        error: function(errorMsg) {
            console.log(errorMsg.responseText);
        }
    });
}

function onQuerySucceeded(sender, args) {
    var listItemInfo = '';
    var listItemEnumerator = collListItem.getEnumerator();
    while (listItemEnumerator.moveNext()) {
        var oListItem = listItemEnumerator.get_current();
        listItemInfo += '\nID: ' + oListItem.get_id() +
            '\nTitle: ' + oListItem.get_item('Title');
    }
    alert(listItemInfo.toString());
}

function onQueryFailed(sender, args) {
    alert('Request failed. ' + args.get_message() + '\n' + args.get_stackTrace());
}


function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function exportElementToWord(html) {
    if (navigator.appName === "Microsoft Internet Explorer") {
        var iframe = document.getElementById('htmlDownloadFrame');
        iframe = iframe.contentWindow || iframe.contentDocument;
        iframe.document.open("text/html", "replace");
        iframe.document.write(html);
        iframe.document.close();
        iframe.focus();
        iframe.document.execCommand('SaveAs', true, 'Word.doc');
    } else {
        if (console && console.log) {
            console.log('Trying to call getCsvFileForIE with non IE browser.');
        }
    }
}