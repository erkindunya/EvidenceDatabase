import 'airbnb-browser-shims';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Datasheet} from './Datasheet/Datasheet';
import DatasheetComp from './Datasheet/DatasheetComp';
import { DatasheetsRepository } from './Datasheet/DatasheetsRepository';
import { EvidenceBite } from './EvidenceBite/EvidenceBite';
import EvidenceBiteComp from './EvidenceBite/EvidenceBiteComp';
import { EvidenceBiteRepository } from './EvidenceBite/EvidenceBiteRepository';

interface IState {
  parameter: IFields[];
  dataBites: EvidenceBite;
  dataItems: Datasheet;
  isLoaded: boolean;
}

interface IProps {
  parameter: IFields[];
  dataBites: EvidenceBite;
  dataItems: Datasheet;
  isLoaded: boolean;
}

interface IFields{
  curPath: string;
  biteList: string;
}
async function queryData(biteList:any,listId:number, dataList:string, sheet: Datasheet,bite: EvidenceBite, callback: (s: Datasheet,b: EvidenceBite) => void) : Promise<any> {
  const datasheetRepo = new DatasheetsRepository();
  const evidenceBiteRepo = new EvidenceBiteRepository();
  try {
    sheet = await datasheetRepo.getByIdAsync(dataList,listId);
    bite = await evidenceBiteRepo.getByIdAsync('Project Evidence Bites',listId);
    const title = sheet.Title;
    console.log(title);
    callback(sheet,bite);
    return title;
  } catch (error) {
    return error;
  }
}
function exportElementToWord(title:string):void {
  const html = document.getElementById('mainExportContainer').innerHTML;
  if (!window.Blob) {
    alert('Your legacy browser does not support this action.');
    return;
  }
  let link;
  const blob = new Blob(['\ufeff',  html], {
    type: 'application/msword',
  });
  const url = URL.createObjectURL(blob);
  link = document.createElement('A');
  link.href = url;
  link.download = title;   
  document.body.appendChild(link);
  if (navigator.msSaveOrOpenBlob) 
    navigator.msSaveOrOpenBlob(blob, `${title}.doc`); // IE10-11
  else link.click();  // other browsers
  document.body.removeChild(link);
}
class App extends React.Component<IState, IProps> {
  private dataList:string;
  private itemId;

  constructor(props: IProps) {
    super(props); 
    const path = this.props.parameter[0].curPath;
    this.dataList = path.substring(path.lastIndexOf('/Lists/') + 7, path.lastIndexOf('/'));
    this.itemId = +this.getParameterByName('ID', path);
    this.state = { 
      parameter: props.parameter,
      dataBites: props.dataBites,
      dataItems: props.dataItems,
      isLoaded: false,
    };
  }

  private getParameterByName(name, url) {
    if (!url) url === window.location.href;
    const nameTrimmed = name.replace(/[\[\]]/g, '\\$&');
    const regex = new RegExp(`[?&]${nameTrimmed}(=([^&#]*)|&|#|$)`);
    const results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
  }

  public componentDidMount() {
    const sheet = new Datasheet();
    const bite = new EvidenceBite();
    const biteList = this.props.parameter[0].biteList;
    queryData(biteList,this.itemId,this.dataList,sheet, bite, (s, b) => {
      this.setState({
      dataBites: b,
      dataItems: s,
      isLoaded: true,
      });
    }).then(title => {
      exportElementToWord(title);
    });
  }
  
  public render() {     
    const {dataItems,dataBites,isLoaded} = this.state; 
    if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      //document.getElementById("mainExportContainer").innerHTML = "";
      //document.getElementById('mainExportContainer').hidden = true;
      return (
        <div>
          <DatasheetComp dataSheetItems={dataItems}/>
          <EvidenceBiteComp evidenceItems={dataBites}/>
        </div>
      );
    }
  }
}

export async function exportToWord(path:string,list:string) {
  const parameters = [{
    curPath: path, 
    biteList: list,
  }];
  const bite = new EvidenceBite();
  const sheet = new Datasheet();
  ReactDOM.render(
    <App parameter={parameters} dataBites={bite} dataItems={sheet} isLoaded={false}/>,
    document.getElementById('mainExportContainer') as HTMLElement,
  );
}
