import 'airbnb-browser-shims';
import { sp, Web } from './lib/sp';
import * as $ from 'jquery';
import sweetalert2 from 'sweetalert2';
import * as toastr from 'toastr';
import { SharePointDataTable, SharePointDataTableColumn } from './lib/table';

const swal = sweetalert2;

const web = new Web('https://uat-ext.kier.co.uk/sites/projects');

$('.js-red-text').css('color', 'red');

swal('Any fool can use a computer');

toastr.info('Hello');

let sites: any[] = null;

async function getSiteTitle(url: string): Promise<string> {
  if (sites == null) {
    sites = await web.webs.select('title', 'ServerRelativeUrl').top(30000).get();
  }
  const result = sites.filter((value) => {
    return value.ServerRelativeUrl === url;
  });
  if (result.length > 0) return result[0].Title;
  return null;
}

const columns: SharePointDataTableColumn[] = [
  {
    title: 'Title',
    renderer: async (row) => {
      let title = row.Title;
      if (row.URL !== null) {
        const url = row.URL.Url;
        const urlSub = url.substring(url.indexOf('/sites/'));
        const result: string = await getSiteTitle(urlSub);
        if (result != null) {
          title = result;
        }
      }
      return `<a href="${row.URL ? row.URL.Url : 'javascript:Showpopup();'}">${title}</a>`;
    },
  },
  {
    title: 'Business Unit',
    renderer: row => row.Business_x0020_Unit,
    orderByColumn: 'Business_x0020_Unit',
  },
  {
    title: 'Project Number',
    renderer: row => row.ProjectNumber,
    orderByColumn: 'ProjectNumber',
  },
  {
    title: 'Tender Number',
    renderer: row => row.Tender_x0020_Number,
  },
  {
    title: 'Date',
    renderer: (row) => {
      const date = new Date(row.Created);
      const day = date.getDate();
      // January is 0!
      const month = date.getMonth() + 1;
      const yyyy = date.getFullYear();
      const dd = day < 10 ? '0' + day : day;
      const mm = month < 10 ? '0' + month : month;
      const formatedDate = dd + '/' + mm + '/' + yyyy;
      return formatedDate;
    },
  },
  {
    title: '',
    renderer: (row) => {
      return row.Status;
    },
  },
  {
    title: '',
    renderer: (row) => {
      return '';
    },
  },
];

const table = new SharePointDataTable(
  web.lists.getByTitle('projects').items.select('*', 'Author/Title').expand('Author'),
  columns,
  $('.js-main-table'),
  $('.js-main-table-next'),
  $('.js-main-table-previous'),
  $('#mainTableFilter'),
  10);

$('#mainTablePageSize').change(function () {
  table.setPageSize(<number>$(this).val());
});

