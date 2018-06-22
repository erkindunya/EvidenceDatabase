import 'airbnb-browser-shims';
// import { Datasheet } from './Datasheet';
import { Web, Util }  from '../lib/sp';

export class DatasheetsRepository {
  public getByIdAsync(listName: string, id: number): Promise<any> {
    return new Promise((resolve, reject) => {
       const web = new Web('');
       const itemsCollector = [];
       const queryAttrs = this.getQueryAttributes(listName);
       const items:any = web.lists.getByTitle(listName).items.getById(id);
       const query:any = items.select.apply(items,queryAttrs.select).expand.apply(items,queryAttrs.expand);
       query.get().then((results) => {
        let stageOfProject = '';
        let kierDeliveryRegion = '';
        let projectRegion = '';
        let projectArea = '';
        let projectLocation = '';
        let sector = '';
        let subSector = '';
        let fundingSector = '';
        let formOfProcuremnet = '';
        let formOfProcuremnetSubType = '';
        let formOfContract = '';
        let designStageAtAppointment = '';
        for (let item of results.TaxCatchAll.results) {
          switch (item.ID) {
            case results.Stage_x0020_of_x0020_Project.WssId:
              stageOfProject = item.Term;
            break;
            case results.Kier_x0020_Delivery_x0020_Region.WssId:
              kierDeliveryRegion = item.Term;
            break;
            case results.Project_x0020_Region.WssId:
              projectRegion = item.Term;
            break;
            case results.Project_x0020_Area.WssId:
              projectArea = item.Term;
            break;
            case results.Project_x0020_Location.WssId:
              projectLocation = item.Term;
            break;
            case results.Project_x0020_Location.WssId:
              projectLocation = item.Term;
            break;
            case results.Sector.WssId:
              sector = item.Term;
            break;
            case results.Subsector.WssId:
              subSector = item.Term;
            break;
            case results.Funding_x0020_Sector.WssId:
              fundingSector = item.Term;
            break;
            case results.Form_x0020_of_x0020_Procurement.WssId:
              formOfProcuremnet = item.Term;
            break;
            case results.FormofProcurementSubType.WssId:
              formOfProcuremnetSubType = item.Term;
            break;
            case results.Form_x0020_of_x0020_Contract.WssId:
              formOfContract = item.Term;
            break;
            case results.Design_x0020_Stage_x0020_at_x002.WssId:
              designStageAtAppointment = item.Term;
            break;
          }
        }
        itemsCollector.push(Util.extend(results, {
          Stage_x0020_of_x0020_ProjectTerm: stageOfProject,
          Kier_x0020_Delivery_x0020_RegionTerm: kierDeliveryRegion,
          Project_x0020_RegionTerm: projectRegion,
          Project_x0020_AreaTerm: projectArea,
          Project_x0020_LocationTerm: projectLocation,
          SectorTerm: sector,
          SubsectorTerm: subSector,
          Funding_x0020_SectorTerm: fundingSector,
          Form_x0020_of_x0020_ProcurementTerm: formOfProcuremnet,
          FormofProcurementSubTypeTerm: formOfProcuremnetSubType,
          Form_x0020_of_x0020_ContractTerm: formOfContract,
          Design_x0020_Stage_x0020_at_x002Term: designStageAtAppointment,
        }));
        resolve(itemsCollector[0]);
      }).catch(e => {
          reject(e);
      });
    });
  }
  private getQueryAttributes(listName:string):any {
    const queryAttrs = {
      select:<string[]> [],
      expand:<string[]> [],
    }
    if (listName === 'Project Datasheet') { 
      queryAttrs.select = [
        "*",
        "TaxCatchAll/ID",
        "TaxCatchAll/Term",
        "Author/Id",
        "Author/Title",
        "Bid_x0020_Lead/Id",
        "Bid_x0020_Lead/Title",
        "Design_x0020_Manager/Id",
        "Design_x0020_Manager/Title",
        "Project_x0020__x002F__x0020_Cont/Id",
        "Project_x0020__x002F__x0020_Cont/Title",
        "Champion/Id",
        "Champion/Title",
        "CRM_x0020_Opportunity_x0020_Auth/Id",
        "CRM_x0020_Opportunity_x0020_Auth/Title",
        "QS_x0020__x002F__x0020_Commercia/Id",
        "QS_x0020__x002F__x0020_Commercia/Title",
        "Reviewer/Id","Reviewer/Title","Editor/Id","Editor/Title"
      ];
      queryAttrs.expand = [
        "TaxCatchAll",
        "Author",
        "Bid_x0020_Lead",
        "Design_x0020_Manager",
        "Project_x0020__x002F__x0020_Cont",
        "Champion","CRM_x0020_Opportunity_x0020_Auth",
        "QS_x0020__x002F__x0020_Commercia","Reviewer","Editor"
      ];
    } else {
      queryAttrs.select = [
        "Title",
        "EvidenceProjectStage",
        "Business_x0020_Function",
        "Topic",
        "Evidence_x0020_Bite_x0020_Headli",
        "Evidence_x0020_Bite_x0020_Descri",
        "Evidence_x0020_Bite_x0020_Benefi",
        "TaxCatchAll",
        "TaxCatchAll/ID",
        "TaxCatchAll/Term"
      ];
      queryAttrs.expand = ["TaxCatchAll"];
    }
    return queryAttrs;
  }
}
