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

