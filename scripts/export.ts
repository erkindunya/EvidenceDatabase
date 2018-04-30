import 'airbnb-browser-shims';
import { sp, Web } from './lib/sp';
import * as $ from 'jquery';

const web = sp.web;

export async function exportToWord(curPath:string,biteList:string) {
  const dataList:string = curPath.substring(curPath.lastIndexOf('/Lists/') + 7, curPath.lastIndexOf('/'));
  const itemID:number = +getParameterByName('ID', curPath);
  let dataItems;
  let dataFields;
  let biteItems;
  let biteFields;
  if (biteList !== '') {
    [dataItems, dataFields, biteItems, biteFields] = await Promise.all([
      getDataListItems(dataList,itemID),
      getFields(dataList),
      getBiteListItems(biteList,itemID),
      getFields(biteList)]);
  } else {
    [dataItems, dataFields] = await Promise.all([
      getDataListItems(dataList,itemID),
      getFields(dataList)]);
  }
  const htmlData:string = populateTableforWord(dataItems,dataFields, biteItems, biteFields,dataList,biteList);
  exportElementToWord(htmlData);
}

function populateTableforWord(dataItems:any,dataFields:any,biteItems:any,biteFields:any,dataList:string,biteList:string): string {
  const h3 = $('<h2 align="left">' + dataList + '</h2></br>');
  const h2 = $('<h2 align="left">' + dataItems.Title + '</h2>');
  h3.appendTo('#mainExportContainer');
  h2.appendTo('#mainExportContainer');
  createTable(dataFields,dataItems);

  if (biteItems && biteFields) {
    const h3 = $('</br><h2 align="left">' + biteList + '</h2></br>');
    h3.appendTo('#mainExportContainer');
    for (const i in biteItems) {
      createTable(biteFields,biteItems[i]);
    }
  }
  const htmlData = '<html xmlns:office="urn:schemas-microsoft-com:office:office" \
  xmlns:word="urn:schemas-microsoft-com:office:word" xmlns="http://www.w3.org/TR/REC-html40"> \
  <head><xml><word:WordDocument><word:View>Print</word:View> \
  <word:Zoom>90</word:Zoom><word:DoNotOptimizeForBrowser/></word:WordDocument></head> \
  <body>' + document.getElementById('mainExportContainer').innerHTML + '</body></html>';
  return htmlData;
}

function createTable(fields,items) {
  let row;
  let rowData;
  const $table = $('<table></table>');
  $table.attr('id', items.ID);
  $('<thead><tr><td><b>Column Name</b></td><td><b> \
  Column Value</b></td><tr></thead>').appendTo($table);

  fields.forEach((field, index) => {
    const rowType = getEvenOddRows(index);
    const itemValue = getFieldValue(items,field);
    row = $(`<tr></tr>`).addClass(rowType);
    rowData = $('<td></td>').text(field.Title);
    row.append(rowData);
    rowData = $('<td></td>').text(itemValue);
    row.append(rowData);
    $table.append(row);
  });
  $table.appendTo($('#mainExportContainer'));
}

function getEvenOddRows(rowIndex:number):string {
  let rowClass:string;
  if (rowIndex % 2) {
    rowClass = 'odd';
  } else {
    rowClass = 'even';
  }
  return rowClass;
}

function getFieldValue(listItem:any,field:any): string {
  let itemValue = listItem[field.InternalName];
  if (field.TypeAsString === 'DateTime') {
    itemValue = formatUkDate(itemValue);
  } else if (field.TypeAsString === 'TaxonomyFieldType') {
    const term = listItem[field.InternalName];   
    if (term) {
      itemValue = getMetaDataLabel(listItem['TaxCatchAll'],term.WssId);       
    } else {
      itemValue = '';
    }
  } else if (field.TypeAsString === 'TaxonomyFieldTypeMulti') {
    const termlabelsArr:any[] = itemValue['results'];
    let termLabelColl: string = '';
    for (const termLabel of termlabelsArr) {
      termLabelColl += `${termLabel.Label},`;
    }
    itemValue = termLabelColl.slice(0, -1);
  } else if (field.TypeAsString === 'User') {
    const userID = listItem[`${field.InternalName}Id`]; 
    if (userID) {
      itemValue = itemValue.Title;
    } else {
      itemValue = '';
    }
  } else if (field.TypeAsString === 'Currency') {
    if (itemValue)
      itemValue = `£${itemValue.toLocaleString('en')}.00`;
  }
  return itemValue;
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

async function getDataListItems(listName: string, listID: number): Promise<any> {
  const [expand,select] = getQueryAttributes();
  return web.lists.getByTitle(listName).items.getById(listID)
  .select(select).expand(expand).get();
}

async function getBiteListItems(listName: string, listID: number): Promise<any> {
  const [expand,select] = getQueryAttributes();
  return web.lists.getByTitle(listName).items
  .filter(`ProjectDatasheetID eq ${listID}`)
  .select(select).expand(expand).get();
}

function getQueryAttributes():string[] {
  const queryAttrs:string[] = [
    'TaxCatchAll,Author,Bid_x0020_Lead,Design_x0020_Manager, \
    Project_x0020__x002F__x0020_Cont,Champion,CRM_x0020_Opportunity_x0020_Auth, \
    QS_x0020__x002F__x0020_Commercia,Reviewer,Editor',
    '*,TaxCatchAll/ID,TaxCatchAll/Term,Author/Id,Author/Title,Bid_x0020_Lead/ \
    Id,Bid_x0020_Lead/Title,Design_x0020_Manager/Id,Design_x0020_Manager \
    /Title,Project_x0020__x002F__x0020_Cont/Id,Project_x0020__x002F__x0020_Cont\
    /Title,Champion/Id,Champion/Title, \
    CRM_x0020_Opportunity_x0020_Auth/Id,CRM_x0020_Opportunity_x0020_Auth/Title \
    ,QS_x0020__x002F__x0020_Commercia/Id,QS_x0020__x002F__x0020_Commercia/Title, \
    Reviewer/Id,Reviewer/Title,Editor/Id,Editor/Title'];
  return queryAttrs;
}

async function getFields(listName: string): Promise<any> {
  return web.lists.getByTitle(listName).fields.filter('Hidden eq false').get();
}
function exportElementToWord(html) {
  if (!window.Blob) {
    alert('Your legacy browser does not support this action.');
    return;
  }
  let link;

  const  css = (
    '<style>' +
    '@page WordSection1{size: 841.95pt 595.35pt;mso-page-orientation: landscape;}' +
    'div.WordSection1 {page: WordSection1;}' +
    'table{border-collapse:collapse;}td{border:1px gray solid;width:5em;padding:2px;}' +
    '</style>'
  );
  const blob = new Blob(['\ufeff',  html], {
    type: 'application/msword',
  });
  const url = URL.createObjectURL(blob);
  link = document.createElement('A');
  link.href = url;
  link.download = 'Document';   
  document.body.appendChild(link);
  if (navigator.msSaveOrOpenBlob) 
    navigator.msSaveOrOpenBlob(blob, 'Document.doc'); // IE10-11
  else link.click();  // other browsers
  document.body.removeChild(link);
}

function formatUkDate(dateStr:string):string {
  let dateUK:string;
  if (dateStr) {
    const date:string[] = dateStr.split('T');
    const dateArray:string[] = date[0].split('-');
    dateUK = `${dateArray[2]}/${dateArray[1]}/${dateArray[0]}`;  
  } else {
    dateUK = '';
  }
  return dateUK;
}

function getMetaDataLabel(listItem, termID): string {
  const termlabelsArr:any[] = listItem['results'];
  const termLabel = termlabelsArr.find(termlabelsArr => termlabelsArr.ID === termID);
  let termlLablelValue:string;
  if (termLabel)
    termlLablelValue = termLabel.Term;
  else 
    termlLablelValue = '';
  return termlLablelValue;
}
