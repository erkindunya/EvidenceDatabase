import 'airbnb-browser-shims';
import { sp, Web } from './lib/sp';
import * as $ from 'jquery';
import sweetalert2 from 'sweetalert2';
import * as toastr from 'toastr';

const swal = sweetalert2;

const web = new Web('https://uat-ext.kier.co.uk/sites/projects');

web.lists.getByTitle('projects').items
  .select('*', 'Author/Title').expand('Author').get()
  .then((results: any[]) => {
    // results go here
    console.log(results);
  })
  .catch((error) => {
    // don't forget to catch your errors!
    console.log(error);
  });

$('.js-red-text').css('color', 'red');

swal('Any fool can use a computer');

toastr.info('Hello');
