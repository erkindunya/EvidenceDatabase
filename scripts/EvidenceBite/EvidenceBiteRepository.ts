import { EvidenceBite } from './EvidenceBite';
import {getQueryAttributes} from '../lib/Field';
import { Web, Util} from '../lib/sp';

export class EvidenceBiteRepository {
  private web: Web;
  constructor() {
    this.web = new Web('');
  }
  public getByIdAsync(listName: string, id: number): Promise<any> {
    // const [expand,select] = getQueryAttributes(listName);
    const queryAttrs = getQueryAttributes(listName);
    return new Promise((resolve,reject) => {
       this.web.lists.getByTitle(listName).items
      .filter(`ProjectDatasheetID eq ${id}`)
      .select(queryAttrs.select)
      .expand(queryAttrs.expand)
      .get()
      .then((results) => {
        resolve(this.getMetaData(results));
      })
      .catch(e => {
        reject(e);
      });
    });
  }


  private getMetaData(results:any):string[] { 
    const itemsCollector = [];
    let businessFunction = '';
    let topic = '';
    let businessCategories = [];
    results.map((result) => {
      for (let item of result.TaxCatchAll.results) {
        switch (item.ID) {
          case  result.Business_x0020_Function ? result.Business_x0020_Function.WssId : '' :
            businessFunction = item.Term;
          break;
          case  result.Topic ? result.Topic.WssId : '' :
            topic = item.Term;
          break;
          case  result.Business_x0020_Categories.results[0] ? result.Business_x0020_Categories.results[0].WssId : '' :
            for (let itemResult of result.Business_x0020_Categories.results) {
              businessCategories.push(itemResult.Term);
            }
          break;
        }
      }
      itemsCollector.push(Util.extend(result, {
        Business_x0020_FunctionTerm: businessFunction,
        TopicTerm : topic,
        Business_x0020_CategoriesTerm : businessCategories[0],
      }));
    });  
    return itemsCollector;
  }
}
