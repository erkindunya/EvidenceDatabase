import 'airbnb-browser-shims';
import {sp, Web} from './lib/sp';

sp.web.lists.getByTitle('projects').items.select('*', 'Author/Title').expand('Author').get().then((results: any[]) => {
  // results go here
  console.log(results);
}).catch(function(error) {
  // don't forget to catch your errors!
  console.log(error);
});