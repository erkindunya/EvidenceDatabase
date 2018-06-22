import * as React from 'react';
import '../../styles/style'; 
import {Style} from '../../styles/style';

const DatasheetComp = (props:any) => {
    const item = props.dataSheetItems;
    const less:string = "<";
    const style = new Style();
    return (
    <table style={style.table}>
        <thead style={style.tableThead}>
            <tr style={style.tableTr}>
                <th style={style.tableTheadTh} colSpan={2}>{item.Title}</th>
            </tr>      
        </thead>
        <tbody>
            <tr style={style.tableTr}>
                <td style={style.tableRowGreen}  colSpan={2}>Author and project stage</td>
            </tr>
            <tr style={style.tableTr}>
                <td style={style.tableTdFirstChild}>Author</td>
                <td style={style.tableTd}>{item.Author.Title}</td>
            </tr>
            <tr style={style.tableTr}>
                <td style={style.tableTdFirstChild}>Stage of Project</td>
                <td style={style.tableTd}>{item.Stage_x0020_of_x0020_ProjectTerm}</td>
            </tr>
            <tr style={style.tableTr}>
                <td style={style.tableRowEmpty} colSpan={2}/>
            </tr>
            <tr style={style.tableTr}>
                <td style={style.tableRowGreen} colSpan={2}>Project Information</td>
            </tr>
            <tr style={style.tableTr}>
                <td style={style.tableTdFirstChild}>Otherwise known as</td>
                <td style={style.tableTd}>{item.Otherwise_x0020_known_x0020_as.Title}</td>
            </tr>
            <tr style={style.tableTr}>
                <td style={style.tableTdFirstChild}>Contract/CRM number</td>
                <td style={style.tableTd}>{item.Contract_x0020_Number}</td>
            </tr>
            <tr style={style.tableTr}>
                <td style={style.tableTdFirstChild}>Client</td>
                <td style={style.tableTd}>{item.Id}</td>
            </tr>
            <tr style={style.tableTr}>
                <td style={style.tableTdFirstChild}>Kier delivery region</td>
                <td style={style.tableTd}>{item.Kier_x0020_Delivery_x0020_RegionTerm}</td>
            </tr>
            <tr style={style.tableTr}>
                <td style={style.tableTdFirstChild}>External JV</td>
                <td style={style.tableTd}>{item.External_x0020_JV}</td>
            </tr>
            <tr style={style.tableTr}>
                <td style={style.tableTdFirstChild}>Internal JV</td>
                <td style={style.tableTd}>{item.Internal_x0020_JV}</td>
            </tr>
            <tr style={style.tableTr}>
                <td style={style.tableRowGrey} colSpan={2}>Project Location</td>
            </tr>
            <tr style={style.tableTr}>
                <td style={style.tableTdFirstChild}>Region</td>
                <td style={style.tableTd}>{item.Project_x0020_RegionTerm}</td>
            </tr>
            <tr style={style.tableTr}>
                <td style={style.tableTdFirstChild}>Area</td>
                <td style={style.tableTd}>{item.Project_x0020_AreaTerm}</td>
            </tr>
            <tr style={style.tableTr}>
                <td style={style.tableTdFirstChild}>Location</td>
                <td style={style.tableTd}>{item.Project_x0020_LocationTerm}</td>
            </tr>
            <tr style={style.tableTr}>
                <td style={style.tableTdFirstChild}>Sector</td>
                <td style={style.tableTd}>{item.SectorTerm}</td>
            </tr>
            <tr style={style.tableTr}>
                <td style={style.tableTdFirstChild}>Sub-Sector</td>
                <td style={style.tableTd}>{item.SubsectorTerm}</td>
            </tr>
            <tr style={style.tableTr}>
                <td style={style.tableTdFirstChild}>Funding Sector</td>
                <td style={style.tableTd}>{item.Funding_x0020_SectorTerm}</td>
            </tr>
            <tr style={style.tableTr}>
                <td style={style.tableTdFirstChild}>Form of procurement</td>
                <td style={style.tableTd}>{item.Form_x0020_of_x0020_ProcurementTerm}</td>
            </tr>
            <tr style={style.tableTr}>
                <td style={style.tableTdFirstChild}>Procurement subtype</td>
                <td style={style.tableTd}>{item.FormofProcurementSubTypeTerm}</td>
            </tr>
            <tr style={style.tableTr}>
                <td style={style.tableTdFirstChild}>Form of Contract</td>
                <td style={style.tableTd}>{item.Form_x0020_of_x0020_ContractTerm}</td>
            </tr>
            <tr style={style.tableTr}>
                <td style={style.tableTdFirstChild}>Design stage at appointment</td>
                <td style={style.tableTd}>{item.Design_x0020_Stage_x0020_at_x002Term}</td>
            </tr>
            <tr style={style.tableTr}>
                <td style={style.tableRowEmpty} colSpan={2}/>
            </tr>
            <tr style={style.tableTr}>
                <td style={style.tableRowGreen}  colSpan={2}>Value and Contract Dates</td>
            </tr>
            <tr style={style.tableTr}>
                <td style={style.tableTdFirstChild}>Value at contract award</td>
                <td style={style.tableTd}>{`£${item.Value_x0020_at_x0020_award.toLocaleString('en')}.00`}</td>
            </tr>
            <tr style={style.tableTr}>
                <td style={style.tableTdFirstChild}>Value at Contract completion</td>
                <td style={style.tableTd}>{item.Title}</td>
            </tr>
            <tr style={style.tableTr}>
                <td style={style.tableTdFirstChild}>Reason for aggred change</td>
                <td style={style.tableTd}>{item.Id}</td>
            </tr>
            <tr style={style.tableTr}>
                <td style={style.tableTdFirstChild}>Planned start on site date</td>
                <td style={style.tableTd}>{item.Title}</td>
            </tr>
            <tr style={style.tableTr}>
                <td style={style.tableTdFirstChild}>Planned completion date</td>
                <td style={style.tableTd}>{item.Title}</td>
            </tr>
            <tr style={style.tableTr}>
                <td style={style.tableTdFirstChild}>Actual start on site date</td>
                <td style={style.tableTd}>{item.Id}</td>
            </tr>
            <tr style={style.tableTr}>
                <td style={style.tableTdFirstChild}>Actual completion date</td>
                <td style={style.tableTd}>{item.Title}</td>
            </tr>
            <tr style={style.tableTr}>
                <td style={style.tableTdFirstChild}>Pre-construction duration</td>
                <td style={style.tableTd}>{item.Title}</td>
            </tr>
            <tr style={style.tableTr}>
                <td style={style.tableRowEmpty} colSpan={2}/>
            </tr>
            <tr style={style.tableTr}>
                <td style={style.tableRowGreen}  colSpan={2}>Project Description</td>
            </tr>
            <tr style={style.tableTr}>
                <td style={style.tableTdFirstChild}>Project Description</td>
                <td style={style.tableTd}>{item.Title}</td>
            </tr>
            <tr style={style.tableTr}>
                <td style={style.tableTdFirstChild}>Work Description</td>
                <td style={style.tableTd}>{item.Title}</td>
            </tr>
            <tr style={style.tableTr}>
                <td style={style.tableRowEmpty} colSpan={2}/>
            </tr>
            <tr style={style.tableTr}>
                <td style={style.tableRowGreen}  colSpan={2}>The Team</td>
            </tr>
            <tr style={style.tableTr}>
                <td style={style.tableTdFirstChild}>Bid Lead</td>
                <td style={style.tableTd}>{item.Title}</td>
            </tr>
            <tr style={style.tableTr}>
                <td style={style.tableTdFirstChild}>QS / Commercial Manager</td>
                <td style={style.tableTd}>{item.Title}</td>
            </tr>
            <tr style={style.tableTr}>
                <td style={style.tableTdFirstChild}>Project Contracts Manager</td>
                <td style={style.tableTd}>{item.Title}</td>
            </tr>
            <tr style={style.tableTr}>
                <td style={style.tableTdFirstChild}>Design Manager</td>
                <td style={style.tableTd}>{item.Title}</td>
            </tr>
            <tr style={style.tableTr}>
                <td style={style.tableTdFirstChild}>Scope of Kier involvement</td>
                <td style={style.tableTd}>{item.Title}</td>
            </tr>
            <tr style={style.tableTr}>
                <td style={style.tableRowGrey} colSpan={2}>Designers / Supply Chain</td>
            </tr>
            <tr style={style.tableTr}>
                <td style={style.tableTdFirstChild} >Architect</td>
                <td style={style.tableTd}>{item.Title}</td>
            </tr>
            <tr style={style.tableTr}>
                <td style={style.tableTdFirstChild}>Acoustician</td>
                <td style={style.tableTd}>{item.Title}</td>
            </tr>
            <tr style={style.tableTr}>
                <td style={style.tableTdFirstChild}>Structural & Civil Engineer</td>
                <td style={style.tableTd}>{item.Title}</td>
            </tr>
            <tr style={style.tableTr}>
                <td style={style.tableTdFirstChild}>FF&E</td>
                <td style={style.tableTd}>{item.Title}</td>
            </tr>
            <tr style={style.tableTr}>
                <td style={style.tableTdFirstChild}>M+E Engineering</td>
                <td style={style.tableTd}>{item.Title}</td>
            </tr>
            <tr style={style.tableTr}>
                <td style={style.tableTdFirstChild}>ICT</td>
                <td style={style.tableTd}>{item.Title}</td>
            </tr>
            <tr style={style.tableTr}>
                <td style={style.tableTdFirstChild}>Cost Advisors</td>
                <td style={style.tableTd}>{item.Title}</td>
            </tr>
            <tr style={style.tableTr}>
                <td style={style.tableTdFirstChild}>Planning Consultant</td>
                <td style={style.tableTd}>{item.Title}</td>
            </tr>
            <tr style={style.tableTr}>
                <td style={style.tableTdFirstChild}>M+E Installers</td>
                <td style={style.tableTd}>{item.Title}</td>
            </tr>
            <tr style={style.tableTr}>
                <td style={style.tableTdFirstChild}>Environmental</td>
                <td style={style.tableTd}>{item.Title}</td>
            </tr>
            <tr style={style.tableTr}>
                <td style={style.tableTdFirstChild}>Project Management</td>
                <td style={style.tableTd}>{item.Title}</td>
            </tr>
            <tr style={style.tableTr}>
                <td style={style.tableTdFirstChild}>Landscape</td>
                <td style={style.tableTd}>{item.Title}</td>
            </tr>
            <tr style={style.tableTr}>
                <td style={style.tableTdFirstChild}>Specialist adviser</td>
                <td style={style.tableTd}>{item.Title}</td>
            </tr>
            <tr style={style.tableTr}>
                <td style={style.tableRowEmpty} colSpan={2}/>
            </tr>
            <tr style={style.tableTr}>
                <td style={style.tableRowGreen}  colSpan={2}>Project Data</td>
            </tr>
            <tr style={style.tableTr}>
                <td style={style.tableTdFirstChild}>Building Area</td>
                <td style={style.tableTd}>{item.Title}</td>
            </tr>
            <tr style={style.tableTr}>
                <td style={style.tableTdFirstChild}>Number of RIDDOR reportable accidents</td>
                <td style={style.tableTd}>{item.Title}</td>
            </tr>
            <tr style={style.tableTr}>
                <td style={style.tableTdFirstChild}>Accident Free Man Hours</td>
                <td style={style.tableTd}>{item.Title}</td>
            </tr>
            <tr style={style.tableTr}>
                <td style={style.tableTdFirstChild}>Considerate Constructors Score</td>
                <td style={style.tableTd}>{item.Title}</td>
            </tr>
            <tr style={style.tableTr}>
                <td style={style.tableRowGrey} colSpan={2}>KPIs</td>
            </tr>
            <tr style={style.tableTr}>
                <td style={style.tableTdFirstChild}>% Deviation from cost estimate</td>
                <td style={style.tableTd}>{item.Title}</td>
            </tr>
            <tr style={style.tableTr}>
                <td style={style.tableTdFirstChild}>% Deviation from time estimate</td>
                <td style={style.tableTd}>{item.Title}</td>
            </tr>
            <tr style={style.tableTr}>
                <td style={style.tableTdFirstChild}>Defects</td>
                <td style={style.tableTd}>{item.Title}</td>
            </tr>
            <tr style={style.tableTr}>
                <td style={style.tableTdFirstChild}>Client Satisfaction- Product</td>
                <td style={style.tableTd}>{item.Title}</td>
            </tr>
            <tr style={style.tableTr}>
                <td style={style.tableTdFirstChild}>Client Satisfaction- Service</td>
                <td style={style.tableTd}>{item.Title}</td>
            </tr>
            <tr style={style.tableTr}>
                <td style={style.tableTdFirstChild}>Pre-Construction BREEAM/DREAM rating</td>
                <td style={style.tableTd}>{item.Title}</td>
            </tr>
            <tr style={style.tableTr}>
                <td style={style.tableTdFirstChild}>Score</td>
                <td style={style.tableTd}>{item.Title}</td>
            </tr>
            <tr style={style.tableTr}>
                <td style={style.tableTdFirstChild}>Handover BREEAM/DREAM rating</td>
                <td style={style.tableTd}>{item.Title}</td>
            </tr>
            <tr style={style.tableTr}>
                <td style={style.tableTdFirstChild}>Score</td>
                <td style={style.tableTd}>{item.Title}</td>
            </tr>
            <tr style={style.tableTr}>
                <td style={style.tableTdFirstChild}>CEEQUAL rating</td>
                <td style={style.tableTd}>{item.Title}</td>
            </tr>
            <tr style={style.tableTr}>
                <td style={style.tableTdFirstChild}>Score</td>
                <td style={style.tableTd}>{item.Title}</td>
            </tr>
            <tr style={style.tableTr}>
                <td style={style.tableTdFirstChild}>Kier apprentices employed</td>
                <td style={style.tableTd}>{item.Title}</td>
            </tr>
            <tr style={style.tableTr}>
                <td style={style.tableTdFirstChild}>Supply chain apprentices</td>
                <td style={style.tableTd}>{item.Title}</td>
            </tr>
            <tr style={style.tableTr}>
                <td style={style.tableTdFirstChild}>EPC rating</td>
                <td style={style.tableTd}>{item.Title}</td>
            </tr>
            <tr style={style.tableTr}>
                <td style={style.tableRowGrey} colSpan={2}>Local Spend (% of project spend)</td>
            </tr>
            <tr style={style.tableTr}>
                <td style={style.tableTdFirstChild}>{less}20 miles</td>
                <td style={style.tableTd}>{item.Title}</td>
            </tr>
            <tr style={style.tableTr}>
                <td style={style.tableTdFirstChild}>Within 40 miles</td>
                <td style={style.tableTd}>{item.Title}</td>
            </tr>
            <tr style={style.tableTr}>
                <td style={style.tableRowEmpty} colSpan={2}/>
            </tr>
            <tr style={style.tableTr}>
                <td style={style.tableRowGreen}  colSpan={2}>Testimonials</td>
            </tr>
            <tr style={style.tableTr}>
                <td style={style.tableTdFirstChild}>Are client references available on request?</td>
                <td style={style.tableTd}>{item.Title}</td>
            </tr>
            <tr style={style.tableTr}>
                <td style={style.tableTdFirstChild}>Testimonial 1</td>
                <td style={style.tableTd}>{item.Title}</td>
            </tr>
            <tr style={style.tableTr}>
                <td style={style.tableTdFirstChild}>Source 1</td>
                <td style={style.tableTd}>{item.Title}</td>
            </tr>
            <tr style={style.tableTr}>
                <td style={style.tableTdFirstChild}>Testimonial 2</td>
                <td style={style.tableTd}>{item.Title}</td>
            </tr>
            <tr style={style.tableTr}>
                <td style={style.tableTdFirstChild}>Source 2</td>
                <td style={style.tableTd}>{item.Title}</td>
            </tr>
            <tr style={style.tableTr}>
                <td style={style.tableTdFirstChild}>Testimonial 3</td>
                <td style={style.tableTd}>{item.Title}</td>
            </tr>
            <tr style={style.tableTr}>
                <td style={style.tableTdFirstChild}>Source 3</td>
                <td style={style.tableTd}>{item.Title}</td>
            </tr>
            <tr style={style.tableTr}>
                <td style={style.tableTdFirstChild}>Testimonial 4</td>
                <td style={style.tableTd}>{item.Title}</td>
            </tr>
            <tr style={style.tableTr}>
                <td style={style.tableTdFirstChild}>Source 4</td>
                <td style={style.tableTd}>{item.Title}</td>
            </tr>
            <tr style={style.tableTr}>
                <td style={style.tableTdFirstChild}>Testimonial 5</td>
                <td style={style.tableTd}>{item.Title}</td>
            </tr>
            <tr style={style.tableTr}>
                <td style={style.tableTdFirstChild}>Source 5</td>
                <td style={style.tableTd}>{item.Title}</td>
            </tr>
            <tr style={style.tableTr}>
                <td style={style.tableRowEmpty} colSpan={2}/>
            </tr>
            <tr style={style.tableTr}>
                <td style={style.tableRowGreen}  colSpan={2}>Awards and link to the Kier Album</td>
            </tr>
            <tr style={style.tableTr}>
                <td style={style.tableTdFirstChild}>Awards</td>
                <td style={style.tableTd}>{item.Title}</td>
            </tr>
            <tr style={style.tableTr}>
                <td style={style.tableTdFirstChild}>Link to the Kier Album</td>
                <td style={style.tableTd}>{item.Title}</td>
            </tr>
            <tr style={style.tableTr}>
                <td style={style.tableRowEmpty} colSpan={2}/>
            </tr>
        </tbody>
    </table>
)};

export default DatasheetComp;