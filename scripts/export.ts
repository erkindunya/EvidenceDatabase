import 'airbnb-browser-shims';
import { sp, Web } from './lib/sp';
import * as $ from 'jquery';
import * as toastr from 'toastr';

export async function exportToWord(curItemId:any, curItemTitle:any, curPath:any) {
  sp.web.select('Title').get().then((w) => {
    alert(w.Title);
    console.log(w.Title);
  });
  const urlSub = 'https://uat-ext.kier.co.uk/sites/projects';
  const result: string = await getSiteTitle(urlSub);
  console.log(result);
}
const web = new Web('https://uat-ext.kier.co.uk/sites/projects');

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
