import { sp, Web } from './lib/sp';
import * as $ from 'jquery';

const web = sp.web;

export async function exportToWord(curItemId:string, curItemTitle:string, curPath:string) {
  const listName = curPath.substring(curPath.lastIndexOf('/Lists/') + 7, curPath.lastIndexOf('/'));
  const listID = +getParameterByName('ID', curPath);
  const listItem = await getListItems(listName,listID);
  const fields = await getFields(listName);
  console.log(fields);
  const htmlData = populateTableforWord(listItem,fields);

  exportElementToWord(htmlData);
}

function populateTableforWord(listItem:any,fields:any): string {
  const h2 = $('<h2 align="left">' + listItem.Title + '</h2>');
  h2.appendTo('#mainExportContainer');
  const $table = $('<table></table>');
  $table.attr('id', listItem.ID);
  $('<thead><tr><td><b>Column Name</b></td><td><b> \
  Column Value</b></td><tr></thead>').appendTo($table);

  fields.forEach((field, index) => {
    let itemValue = listItem[field.InternalName];
    if (field.TypeAsString === 'DateTime') {
      console.log(formatUkDate(itemValue));
    } 
    let row;
    let rowData;
    // Add field name row
    row = $('<tr></tr>');
    rowData = $('<td></td>').addClass('fieldName').text(field.Title);
    row.append(rowData);
    // Add field value row
    rowData = $('<td></td>').addClass('fieldValue').text(itemValue);
    row.append(rowData);
    $table.append(row);
  });
  // Add table to the DIV
  $table.appendTo($('#mainExportContainer'));
  // $('#mainExportContainer table tr td:first-child').css('background-color', 'grey');
  const htmlData = '<html xmlns:office="urn:schemas-microsoft-com:office:office" \
  xmlns:word="urn:schemas-microsoft-com:office:word" xmlns="http://www.w3.org/TR/REC-html40"> \
  <head><xml><word:WordDocument><word:View>Print</word:View> \
  <word:Zoom>90</word:Zoom><word:DoNotOptimizeForBrowser/></word:WordDocument></head> \
  <body>' + document.getElementById('mainExportContainer').innerHTML + '</body></html>';
  return htmlData;
}

function getParameterByName(name, url) {
  if (!url) url === window.location.href;
  const nameTrimmed = name.replace(/[\[\]]/g, '\\$&');
  const regex = new RegExp(`[?&]${nameTrimmed}(=([^&#]*)|&|#|$)`);
  const results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

async function getListItems(listName: string, listID: number): Promise<any> {
  return web.lists.getByTitle(listName).items.getById(listID).get();
}

async function getFields(listName: string): Promise<any> {
  return web.lists.getByTitle(listName).fields.filter('Hidden eq false').get();
}

function exportElementToWord(html) {
  if (navigator.appName === 'Microsoft Internet Explorer') {
    let iframe = document.getElementById('htmlDownloadFrame') as any;
    iframe = iframe.contentWindow || iframe.contentDocument;
    iframe.document.open('text/html', 'replace');
    iframe.document.write(html);
    iframe.document.close();
    iframe.focus();
    iframe.document.execCommand('SaveAs', true, 'Word.doc');
  } else {
    if (console && console.log) {
      console.log('Please use an IE Browser.');
    }
  }
}

// function parseDate(dateStr) {
//   let formatedDate;
//   if (dateStr != null || dateStr !== '') {
//     const datetime = formatUkDate(dateStr);
//     let dd = datetime.getDate();
//     let mm = datetime.getMonth() + 1; // January is 0!
//     const yyyy = datetime.getFullYear();
//     if (dd < 10) {
//       dd = 0 + dd;
//     }
//     if (mm < 10) {
//       mm = 0 + mm;
//     }
//     formatedDate = mm + '/' + dd + '/' + yyyy;
//   } else {
//     formatedDate = null;
//   }
//   return formatedDate;
// }

function formatUkDate(dateStr:string):Date {
  const date:string[] = dateStr.split('T');
  const dateArray:string[] = date[0].split('-');
  return new Date(+dateArray[2], +dateArray[1] - 1, +dateArray[0]);
}
