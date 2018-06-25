export function formatUkDate(dateStr:string):string {
  let dateUK:string;
  if (dateStr) {
    const date:string[] = dateStr.split('T');
    const dateArray:string[] = date[0].split('-');
    dateUK = `${dateArray[2]}/${dateArray[1]}/${dateArray[0]}`;
  } else {
    dateUK = '';
  }
  return dateUK;
}

export function getQueryAttributes(listName:string):any {
  const queryAttrs = {
    select:[],
    expand:[],
  };
  if (listName === 'Project Datasheet') { 
    queryAttrs.select = [
      '*',
      'TaxCatchAll/ID',
      'TaxCatchAll/Term',
      'Author/Id',
      'Author/Title',
      'Bid_x0020_Lead/Id',
      'Bid_x0020_Lead/Title',
      'Design_x0020_Manager/Id',
      'Design_x0020_Manager/Title',
      'Project_x0020__x002F__x0020_Cont/Id',
      'Project_x0020__x002F__x0020_Cont/Title',
      'Champion/Id',
      'Champion/Title',
      'CRM_x0020_Opportunity_x0020_Auth/Id',
      'CRM_x0020_Opportunity_x0020_Auth/Title',
      'QS_x0020__x002F__x0020_Commercia/Id',
      'QS_x0020__x002F__x0020_Commercia/Title',
      'Reviewer/Id','Reviewer/Title','Editor/Id','Editor/Title',
    ];
    queryAttrs.expand = [
      'TaxCatchAll',
      'Author',
      'Bid_x0020_Lead',
      'Design_x0020_Manager',
      'Project_x0020__x002F__x0020_Cont',
      'Champion','CRM_x0020_Opportunity_x0020_Auth',
      'QS_x0020__x002F__x0020_Commercia','Reviewer','Editor',
    ];
  } else {
    queryAttrs.select = [
      'Title',
      'EvidenceProjectStage',
      'Business_x0020_Function',
      'Business_x0020_Categories',
      'Topic',
      'Evidence_x0020_Bite_x0020_Headli',
      'Evidence_x0020_Bite_x0020_Descri',
      'Evidence_x0020_Bite_x0020_Benefi',
      'TaxCatchAll',
      'TaxCatchAll/ID',
      'TaxCatchAll/Term',
    ];
    queryAttrs.expand = ['TaxCatchAll'];
  }
  return queryAttrs;
}
