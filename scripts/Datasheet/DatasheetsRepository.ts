import 'airbnb-browser-shims';
import { Web, Util }  from '../lib/sp';
import { getQueryAttributes } from '../lib/Field';

export class DatasheetsRepository {
  public getByIdAsync(listName: string, id: number): Promise<any> {
    return new Promise((resolve, reject) => {
      const web = new Web('');
      const queryAttrs = getQueryAttributes(listName);
      const items:any = web.lists.getByTitle(listName).items.getById(id);
      const query:any = items.select.apply(items,queryAttrs.select)
      .expand.apply(items,queryAttrs.expand);
      query.get().then((results) => {
        resolve(this.getMetaData(results));
      }).catch((e) => {
        reject(e);
      });
    });
  }
  private getMetaData(results:any):string[] {
    const itemsCollector = [];
    let stageOfProject = '';
    let kierDeliveryRegion = '';
    let projectRegion = '';
    let projectArea = '';
    let projectLocation = '';
    // let sector = '';
    // let subSector = '';
    // let fundingSector = '';
    // let formOfProcuremnet = '';
    let formOfProcuremnetSubType = '';
    let formOfContract = '';
    let designStageAtAppointment = '';
    // let workDescription = '';
    // let scopeOfKierInvolvement = '';
    let preConstructionBRREAM = '';
    let epcRating = '';
    let handoverBreeam = '';
    let ceequalRating = '';
    for (const item of results.TaxCatchAll.results) {
      switch (item.ID) {
        case  results.Stage_x0020_of_x0020_Project ? 
        results.Stage_x0020_of_x0020_Project.WssId : '' :
          stageOfProject = item.Term;
          break;
        case results.Kier_x0020_Delivery_x0020_Region ? results.Kier_x0020_Delivery_x0020_Region.WssId :'' :
          kierDeliveryRegion = item.Term;
          break;
        case results.Project_x0020_Region ? 
        results.Project_x0020_Region.WssId : '' :
          projectRegion = item.Term;
          break;
        case results.Project_x0020_Area ? 
        results.Project_x0020_Area.WssId : '' :
          projectArea = item.Term;
          break;
        case results.Project_x0020_Location ? 
        results.Project_x0020_Location.WssId : '' :
          projectLocation = item.Term;
          break;
        case results.Project_x0020_Location ? 
        results.Project_x0020_Location.WssId : '' :
          projectLocation = item.Term;
          break;
        // case results.Sector ? results.Sector.WssId : '': 
        //   sector = item.Term;
        //   break;
        // case results.Subsector ? results.Subsector.WssId : '' :
        //   subSector = item.Term;
        //   break;
        // case results.Funding_x0020_Sector ? 
        // results.Funding_x0020_Sector.WssId : '' :
        //   fundingSector = item.Term;
        //   break;
        // case results.Form_x0020_of_x0020_Procurement ? 
        // results.Form_x0020_of_x0020_Procurement.WssId : '' :
        //   formOfProcuremnet = item.Term;
        //   break;
        case results.FormofProcurementSubType ? 
        results.FormofProcurementSubType.WssId : '' :
          formOfProcuremnetSubType = item.Term;
          break;
        case results.Form_x0020_of_x0020_Contract ? 
        results.Form_x0020_of_x0020_Contract.WssId : '' :
          formOfContract = item.Term;
          break;
        case results.Design_x0020_Stage_x0020_at_x002 ? 
        results.Design_x0020_Stage_x0020_at_x002.WssId : '' :
          designStageAtAppointment = item.Term;
          break;
        // case results.Work_x0020_Description ? 
        // results.Work_x0020_Description.WssId : '':
        //   workDescription = item.Term;
        //   break;
        // case results.Scope_x0020_of_x0020_Kier_x0020_ ? 
        // results.Scope_x0020_of_x0020_Kier_x0020_.WssId : '' :
        //   scopeOfKierInvolvement = item.Term;
        //   break;
        case results.Pre_x002d_Construction_x0020_BRE0 ? 
        results.Pre_x002d_Construction_x0020_BRE0.WssId : '' :
          preConstructionBRREAM = item.Term;
          break;
        case results.EPC_x0020_Rating ? 
        results.EPC_x0020_Rating.WssId : '':
          epcRating = item.Term;
          break;
        case results.Handover_x0020_BREEAM_x002F_DREA0 ? 
        results.Handover_x0020_BREEAM_x002F_DREA0.WssId : '':
          handoverBreeam = item.Term;
          break;
        case results.CEEQUAL_x0020_Rating ? 
        results.CEEQUAL_x0020_Rating.WssId : '':
          ceequalRating = item.Term;
          break;
      }
    }
    itemsCollector.push(Util.extend(results, {
      Stage_x0020_of_x0020_ProjectTerm: stageOfProject,
      Kier_x0020_Delivery_x0020_RegionTerm: kierDeliveryRegion,
      Project_x0020_RegionTerm: projectRegion,
      Project_x0020_AreaTerm: projectArea,
      Project_x0020_LocationTerm: projectLocation,
      // SectorTerm: sector,
      // SubsectorTerm: subSector,
      // Funding_x0020_SectorTerm: fundingSector,
      // Form_x0020_of_x0020_ProcurementTerm: formOfProcuremnet,
      FormofProcurementSubTypeTerm: formOfProcuremnetSubType,
      Form_x0020_of_x0020_ContractTerm: formOfContract,
      Design_x0020_Stage_x0020_at_x002Term: designStageAtAppointment,
      // Work_x0020_DescriptionTerm: workDescription,
      // Scope_x0020_of_x0020_Kier_x0020_Term: scopeOfKierInvolvement,
      Pre_x002d_Construction_x0020_BRE0Term: preConstructionBRREAM,
      EPC_x0020_RatingTerm: epcRating,
      Handover_x0020_BREEAM_x002F_DREA0Term: handoverBreeam,
      CEEQUAL_x0020_RatingTerm: ceequalRating,
    }));
    return itemsCollector[0];
  }
}
