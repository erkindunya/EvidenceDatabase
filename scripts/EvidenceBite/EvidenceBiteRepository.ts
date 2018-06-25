import { EvidenceBite } from './EvidenceBite';
import { getQueryAttributes } from '../lib/Field';
import { Web, Util } from '../lib/sp';

export class EvidenceBiteRepository {
  private web: Web;
  private terms = {
    businessFunction :<string>'',
    topic: <string>'',
  };
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
        resolve(this.getMetaData(results) as EvidenceBite[]);
      })
      .catch((e) => {
        reject(e);
      });
    });
  }

  private getMetaData(results:any):any[] { 
    const itemsCollector = [];
    results.map((result) => {
      this.terms = {
        businessFunction :<string>'',
        topic: <string>'',
      };
      const terms = this.getTerms(result);
      itemsCollector.push(Util.extend(result, {
        Business_x0020_FunctionTerm: terms.businessFunction,
        TopicTerm : terms.topic,
      }));
    });
    return itemsCollector as EvidenceBite[];
  }
  private getTerms(result:any) {
    for (const item of result.TaxCatchAll.results) {
      if (item.ID === (result.Business_x0020_Function ?
        result.Business_x0020_Function.WssId : '')) {
        this.terms.businessFunction = item.Term;
      } else if ((item.ID === (result.Topic ? result.Topic.WssId : ''))) {
        this.terms.topic = item.Term;
      } 
    }
    return this.terms;
  }
}

