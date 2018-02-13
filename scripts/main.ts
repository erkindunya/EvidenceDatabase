import 'airbnb-browser-shims';
import { sp, Web } from './lib/sp';
import * as $ from 'jquery';

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
