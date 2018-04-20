import 'airbnb-browser-shims';
import { sp, Web } from './lib/sp';
import * as $ from 'jquery';

const web = sp.web;

export async function exportToWord(curPath:string,biteList:string) {
  const dataList = curPath.substring(curPath.lastIndexOf('/Lists/') + 7, curPath.lastIndexOf('/'));
  const itemID = +getParameterByName('ID', curPath);
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
  const title = populateTableforWord(dataItems,dataFields, biteItems, biteFields,dataList,biteList);
  applyStyle(); // Without the CSS injection the style doesn't display in MS Word
  exportElementToWord(title);
}

function populateTableforWord(dataItems,dataFields,biteItems,biteFields,dataList:string,biteList:string): string {
  $('#mainExportContainer').html('');
  $('#mainExportContainer').hide();
  const h2 = $(`<h2 align="left">${dataList} Export - ${getCurrentDate()} </h2></br>`);
  h2.appendTo('#mainExportContainer');

  createTable(dataFields,dataItems);

  if (biteItems && biteFields) {
    const h3 = $('<h2 align="left">' + biteList + '</h2></br>');
    h3.appendTo('#mainExportContainer');
    for (const biteItem in biteItems) {
      createTable(biteFields,biteItems[biteItem]);
    }
  }
  return dataItems.Title;
}

function createTable(fields,items) {
  let row;
  let rowData;
  const $table = $('<table></table>');
  $table.attr('id', items.ID);
  $(`<thead><tr><th colspan="2"><b>${items.Title}</b></th><tr></thead><tbody>`).appendTo($table);
  fields.forEach((field, index) => {
    const rowType = getEvenOddRows(index);
    const itemValue = getFieldValue(items,field);
    row = $('<tr></tr>').addClass(rowType);
    rowData = $('<td></td>').addClass('fieldName').text(field.Title);
    row.append(rowData);
    rowData = $('<td></td>').addClass('fieldValue').text(itemValue);
    row.append(rowData);
    $table.append(row);
  });
  $table.append('</tbody>'); 
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

function exportElementToWord(title:string):void {
  const html = document.getElementById('mainExportContainer').innerHTML;
  if (!window.Blob) {
    alert('Your legacy browser does not support this action.');
    return;
  }
  let link;
  const blob = new Blob(['\ufeff',  html], {
    type: 'application/msword',
  });
  const url = URL.createObjectURL(blob);
  link = document.createElement('A');
  link.href = url;
  link.download = title;   
  document.body.appendChild(link);
  if (navigator.msSaveOrOpenBlob) 
    navigator.msSaveOrOpenBlob(blob, `${title}.doc`); // IE10-11
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
function getCurrentDate():string {
  const d = new Date();
  return [d.getDate(), d.getMonth() + 1, d.getFullYear()].join('/');
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

function applyStyle():void {
  const styles = [
    { // table
      width:'100%',
      'font-family':'Arial, Helvetica, sans-serif',
      'font-size':'12px',
      'text-shadow': '1px 1px 0px #fff',
      background:'#eaebec',
      border:'#ccc 1px solid',
    },
    { // thead
      'text-align': 'left',
      'padding-left':'20px',
    },
    { // thead tr
      'font-size': '18px',
      color: '#eb8f00',
      padding:'15px 15px 15px 15px',
      'border-top':'1px solid #eb8f00',
      'border-bottom':'1px solid #eb8f00',
      background: '#ededed',
      'text-align': 'left',
    },
    { // thead tr
      padding:'15px',
      'border-top': '1px solid #ffffff',
      'border-bottom':'1px solid #e0e0e0',
      'border-left': '1px solid #e0e0e0',
    },
    { // thead th
      color: '#eb8f00',
      padding:'21px 25px 22px 25px',
      'border-top':'1px solid #fafafa',
      'border-bottom':'1px solid #eb8f00',
      background: '#ededed',
    },
    { // thead th:first-child
      'text-align': 'left',
      'padding-left':'20px',
    },
    { // thead tr:first-child th:last-child
      'border-top-right-radius':'3px',
    },
    { // thead tr:first-child th:last-child
      background: '#f6f6f6',
    },
    { // thead tr:first-child th:last-child
      background: '#fafafa',
    },
  ];

  $('#mainExportContainer table').css(styles[0]);
  $('#mainExportContainer thead').css(styles[1]);
  $('#mainExportContainer tbody tr').css(styles[1]);
  $('#mainExportContainer thead tr').css(styles[2]);
  $('#mainExportContainer thead th').css(styles[4]);
  $('#mainExportContainer thead th:first-child').css(styles[5]);
  $('#mainExportContainer thead tr:first-child th:last-child').css(styles[6]);
  $('#mainExportContainer table td').css(styles[3]);
  $('#mainExportContainer tbody tr.even').css(styles[7]);
  $('#mainExportContainer tbody tr.odd').css(styles[8]);
  $('#mainExportContainer h2').css('font-family','Arial, Helvetica, sans-serif');
}
