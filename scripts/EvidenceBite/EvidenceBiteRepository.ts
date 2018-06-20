import { EvidenceBite } from './EvidenceBite';
import { sp, Web } from '../lib/sp';

export class EvidenceBiteRepository {
  private web: any;
  constructor() {
    this.web = sp.web;
  }
  public getByIdAsync(listName: string, id: number): Promise<any> {
    const [expand,select] = this.getQueryAttributes(listName);
    const promise = new Promise((resolve) => {
      const evidenceBites = this.web.lists.getByTitle(listName).items
      .filter(`ProjectDatasheetID eq ${id}`)
      .select(select)
      .expand(expand).get() as EvidenceBite;
      resolve(evidenceBites);
    });
    return promise;
  }
  private getQueryAttributes(listName:string):string[] {
    let queryAttrs:string[] = [];
    if (listName === 'Project Datasheet') { 
      queryAttrs = [
        'TaxCatchAll,Author,Bid_x0020_Lead,Design_x0020_Manager, \
        Project_x0020__x002F__x0020_Cont,Champion,CRM_x0020_Opportunity_x0020_Auth, \
        QS_x0020__x002F__x0020_Commercia,Reviewer,Editor',
        '*,TaxCatchAll/ID,TaxCatchAll/Term,Author/Id,Author/Title,\
        Bid_x0020_Lead/Id,Bid_x0020_Lead/Title,Design_x0020_Manager/Id,Design_x0020_Manager/Title, \
        Project_x0020__x002F__x0020_Cont/Id,Project_x0020__x002F__x0020_Cont/Title,\
        Champion/Id,Champion/Title, \
        CRM_x0020_Opportunity_x0020_Auth/Id,CRM_x0020_Opportunity_x0020_Auth/Title, \
        QS_x0020__x002F__x0020_Commercia/Id,QS_x0020__x002F__x0020_Commercia/Title, \
        Reviewer/Id,Reviewer/Title,Editor/Id,Editor/Title'];
    } else {
      queryAttrs = [
        'TaxCatchAll',
        'Title,EvidenceProjectStage,Business_x0020_Function,Topic, \
        Evidence_x0020_Bite_x0020_Headli,Evidence_x0020_Bite_x0020_Descri, \
        Evidence_x0020_Bite_x0020_Benefi,TaxCatchAll,TaxCatchAll/ID,TaxCatchAll/Term'];
    }
    return queryAttrs;
  }
}
