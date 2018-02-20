import 'airbnb-browser-shims';
import { sp, Web } from './lib/sp';
import * as $ from 'jquery';
import * as toastr from 'toastr';
import { SharePointDataTable, SharePointDataTableColumn } from './lib/table';
import { SharePointPopup, SharePointPopupField,
         SharePointPopupFieldType } from './lib/popup';
import { ItemAddResult, ItemUpdateResult } from 'sp-pnp-js/lib/pnp';

const web = new Web('https://uat-ext.kier.co.uk/sites/projects');

toastr.info('Loading...');

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



const fields: SharePointPopupField[] = [
  {
    title: 'Project Name*',
    placeholder: 'Project Name',
    type: SharePointPopupFieldType.Text,
    column: 'Title',
    required: true,
  },
  {
    title: 'Business Unit',
    type: SharePointPopupFieldType.Select,
    column: 'Business_x0020_Unit',
    options: [
      { title: 'Construction South - Southern' },
      { title: 'Construction South - Major Projects' },
    ],
  },
  {
    title: 'Project Number',
    placeholder: 'Project Number',
    type: SharePointPopupFieldType.Text,
    column: 'ProjectNumber',
  },
  {
    title: 'Tender Number',
    placeholder: 'Tender Number',
    type: SharePointPopupFieldType.Text,
    column: 'Tender_x0020_Number',
  },
  {
    title: 'Opportunity Number',
    placeholder: 'Opportunity Number',
    type: SharePointPopupFieldType.Text,
    column: 'OracleNumber',
  },
];

const createProjectPopup = new SharePointPopup('create-project',
                                               web.lists.getByTitle('projects').items,
                                               fields);
$('.js-popup-create-project').click(() => {
  createProjectPopup.show();
});

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
    title: 'Edit',
    renderer: (row) => {
      return `<a href="#" class="edit-project" data-id="${row.Id}">Edit</a>`;
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


$('.js-main-table').on('click', '.edit-project', (event) => {
  event.preventDefault();
  const id: number = $(event.currentTarget).data('id');
  createProjectPopup.show(id);
});

$('#mainTablePageSize').change(function () {
  table.setPageSize(<number>$(this).val());
});

createProjectPopup.onCreated(async (result: ItemAddResult) => {
  table.updatePageCollection();
});

createProjectPopup.onUpdated((result: ItemUpdateResult) => {
  table.updatePageCollection();
});

