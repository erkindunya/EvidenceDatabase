import 'airbnb-browser-shims';
import { sp, Web } from './lib/sp';
import * as $ from 'jquery';
import * as toastr from 'toastr';
import { SharePointDataTable, SharePointDataTableColumn } from './lib/table';


const web = new Web('https://uat-ext.kier.co.uk/sites/projects');

$('.js-red-text').css('color', 'red');


toastr.info('Hello');

