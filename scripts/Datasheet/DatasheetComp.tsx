import * as React from 'react';
import {Style} from '../../styles/style';
import {formatUkDate} from '../lib/Field';

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
                <td style={style.tableTd}>{item.Champion.Title}</td>
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
                <td style={style.tableTd}>{item.Otherwise_x0020_known_x0020_as}</td>
            </tr>
            <tr style={style.tableTr}>
                <td style={style.tableTdFirstChild}>Contract/CRM number</td>
                <td style={style.tableTd}>{item.Contract_x0020_Number}</td>
            </tr>
            <tr style={style.tableTr}>
                <td style={style.tableTdFirstChild}>Client</td>
                <td style={style.tableTd}>{item.Client}</td>
            </tr>
            <tr style={style.tableTr}>
                <td style={style.tableTdFirstChild}>Kier delivery region</td>
                <td style={style.tableTd}>{item.Kier_x0020_Delivery_x0020_RegionTerm}</td>
            </tr>
            <tr style={style.tableTr}>
                <td style={style.tableTdFirstChild}>External JV</td>
                <td style={style.tableTd}>{item.IsExternalJV === false ? "No":"Yes" }</td>
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
                <td style={style.tableTd}>
                    {item.Sector.results.length > 1?
                    <ul>{
                        item.Sector.results
                        .sort((a, b) => {
                            var nameA = a.Label.toUpperCase(); // ignore upper and lowercase
                            var nameB = b.Label.toUpperCase(); // ignore upper and lowercase
                            if (nameA < nameB) {
                            return -1;
                            }
                            if (nameA > nameB) {
                            return 1;
                            }
                            // names must be equal
                            return 0;
                        })
                        .map((term:any,i:number) => 
                            <li key={'edbSECTOR_'+i}>{term.Label}</li>)
                        }
                    </ul>:item.Sector.results.length == 1 && item.Sector.results[0].Label}
                </td>
            </tr>
            <tr style={style.tableTr}>
                <td style={style.tableTdFirstChild}>Sub-Sector</td>
                <td style={style.tableTd}>
                {item.Subsector.results.length > 1?
                    <ul>{
                        item.Subsector.results
                        .sort((a, b) => {
                            var nameA = a.Label.toUpperCase(); // ignore upper and lowercase
                            var nameB = b.Label.toUpperCase(); // ignore upper and lowercase
                            if (nameA < nameB) {
                            return -1;
                            }
                            if (nameA > nameB) {
                            return 1;
                            }
                            // names must be equal
                            return 0;
                        })
                        .map((term:any,i:number) => 
                            <li key={'edbSubsector_'+i}>{term.Label}</li>    
                    )}
                   </ul>:item.Subsector.results.length == 1 && item.Subsector.results[0].Label}
                </td>
            </tr>
            <tr style={style.tableTr}>
                <td style={style.tableTdFirstChild}>Funding Sector</td>
                <td style={style.tableTd}>
                {item.Funding_x0020_Sector.results.length > 1?
                    <ul>{
                        item.Funding_x0020_Sector.results
                        .sort((a, b) => {
                            var nameA = a.Label.toUpperCase(); // ignore upper and lowercase
                            var nameB = b.Label.toUpperCase(); // ignore upper and lowercase
                            if (nameA < nameB) {
                            return -1;
                            }
                            if (nameA > nameB) {
                            return 1;
                            }
                            // names must be equal
                            return 0;
                        })
                        .map((term:any,i:number) => 
                            <li key={'edbfundingSec_'+i}>{term.Label}</li>    
                    )}
                    </ul>:item.Funding_x0020_Sector.results.length == 1 && item.Funding_x0020_Sector.results[0].Label}
                </td>
            </tr>
            <tr style={style.tableTr}>
                <td style={style.tableTdFirstChild}>Form of procurement</td>
                <td style={style.tableTd}>
                {item.Form_x0020_of_x0020_Procurement.results.length > 1?
                    <ul>{
                        item.Form_x0020_of_x0020_Procurement.results
                        .sort((a, b) => {
                            var nameA = a.Label.toUpperCase(); // ignore upper and lowercase
                            var nameB = b.Label.toUpperCase(); // ignore upper and lowercase
                            if (nameA < nameB) {
                            return -1;
                            }
                            if (nameA > nameB) {
                            return 1;
                            }
                            // names must be equal
                            return 0;
                        })
                        .map((term:any,i:number) => 
                            <li key={'edbFormOfProc_'+i}>{term.Label}</li>    
                    )}
                    </ul>:item.Form_x0020_of_x0020_Procurement.results.length == 1 && item.Form_x0020_of_x0020_Procurement.results[0].Label}
                </td>
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
                <td style={style.tableTd}>{item.Value_x0020_at_x0020_award? `£${item.Value_x0020_at_x0020_award.toLocaleString('en')}`:''}</td>
            </tr>
            <tr style={style.tableTr}>
                <td style={style.tableTdFirstChild}>Value at Contract completion</td>
                <td style={style.tableTd}>{item.Value_x0020_at_x0020_completion?`£${item.Value_x0020_at_x0020_completion.toLocaleString('en')}`:''}</td>
            </tr>
            <tr style={style.tableTr}>
                <td style={style.tableTdFirstChild}>Reason for agreed change</td>
                <td style={style.tableTd}>{item.Reason_x0020_for_x0020_agreed_x0}</td>
            </tr>
            <tr style={style.tableTr}>
                <td style={style.tableTdFirstChild}>Planned start on site date</td>
                <td style={style.tableTd}>{formatUkDate(item.Planned_x0020_start_x0020_on_x00)}</td>
            </tr>
            <tr style={style.tableTr}>
                <td style={style.tableTdFirstChild}>Planned completion date</td>
                <td style={style.tableTd}>{formatUkDate(item.Planned_x0020_completion_x0020_d)}</td>
            </tr>
            <tr style={style.tableTr}>
                <td style={style.tableTdFirstChild}>Actual start on site date</td>
                <td style={style.tableTd}>{formatUkDate(item.Actual_x0020_start_x0020_on_x002)}</td>
            </tr>
            <tr style={style.tableTr}>
                <td style={style.tableTdFirstChild}>Actual completion date</td>
                <td style={style.tableTd}>{formatUkDate(item.Actual_x0020_completion_x0020_da)}</td>
            </tr>
            <tr style={style.tableTr}>
                <td style={style.tableTdFirstChild}>Pre-construction duration</td>
                <td style={style.tableTd}>{item.Pre_x002d_Construction_x0020_Dur}</td>
            </tr>
            <tr style={style.tableTr}>
                <td style={style.tableRowEmpty} colSpan={2}/>
            </tr>
            <tr style={style.tableTr}>
                <td style={style.tableRowGreen}  colSpan={2}>Project Description</td>
            </tr>
            <tr style={style.tableTr}>
                <td style={style.tableTdFirstChild}>Project Description</td>
                <td style={style.tableTd}>{item.Project_x0020_Description}</td>
            </tr>
            <tr style={style.tableTr}>
                <td style={style.tableTdFirstChild}>Work Description</td>
                <td style={style.tableTd}>
                {item.Work_x0020_Description.results.length > 1?
                    <ul>{
                    item.Work_x0020_Description.results
                    .sort((a, b) => {
                        var nameA = a.Label.toUpperCase(); // ignore upper and lowercase
                        var nameB = b.Label.toUpperCase(); // ignore upper and lowercase
                        if (nameA < nameB) {
                          return -1;
                        }
                        if (nameA > nameB) {
                          return 1;
                        }
                        // names must be equal
                        return 0;
                    })
                    .map((term:any,i:number) => 
                        <li  key={'edbWD_'+i}>{term.Label}</li>
                    )}
                </ul>:item.Work_x0020_Description.results[0].Label}
                <div style={style.removeStyle}>&nbsp;</div>
                </td>
            </tr>
            <tr style={style.tableTr}>
                <td style={style.tableRowEmpty} colSpan={2}/>
            </tr>
            <tr style={style.tableTr}>
                <td style={style.tableRowGreen}  colSpan={2}>The Team</td>
            </tr>
            <tr style={style.tableTr}>
                <td style={style.tableTdFirstChild}>Bid Lead</td>
                <td style={style.tableTd}>{item.Bid_x0020_Lead.Title}</td>
            </tr>
            <tr style={style.tableTr}>
                <td style={style.tableTdFirstChild}>QS / Commercial Manager</td>
                <td style={style.tableTd}>{item.QS_x0020__x002F__x0020_Commercia.Title}</td>
            </tr>
            <tr style={style.tableTr}>
                <td style={style.tableTdFirstChild}>Project Contracts Manager</td>
                <td style={style.tableTd}>{item.Project_x0020__x002F__x0020_Cont.Title}</td>
            </tr>
            <tr style={style.tableTr}>
                <td style={style.tableTdFirstChild}>Design Manager</td>
                <td style={style.tableTd}>{item.Design_x0020_Manager.Title}</td>
            </tr>
            <tr style={style.tableTr}>
                <td style={style.tableTdFirstChild}>Scope of Kier involvement</td>
                <td style={style.tableTd}>
                {item.Scope_x0020_of_x0020_Kier_x0020_.results.length > 1?
                    <ul>{
                        item.Scope_x0020_of_x0020_Kier_x0020_.results
                        .sort((a, b) => {
                            var nameA = a.Label.toUpperCase(); // ignore upper and lowercase
                            var nameB = b.Label.toUpperCase(); // ignore upper and lowercase
                            if (nameA < nameB) {
                            return -1;
                            }
                            if (nameA > nameB) {
                            return 1;
                            }
                            // names must be equal
                            return 0;
                        })
                        .map((term:any,i:number) => 
                            <li key={'edbSOKI_'+i}>{term.Label}</li>    
                    )}
                    </ul>:item.Scope_x0020_of_x0020_Kier_x0020_.results.length == 1 && item.Scope_x0020_of_x0020_Kier_x0020_.results[0].Label}
                </td>
            </tr>
            <tr style={style.tableTr}>
                <td style={style.tableRowGrey} colSpan={2}>Designers / Supply Chain</td>
            </tr>
            <tr style={style.tableTr}>
                <td style={style.tableTdFirstChild} >Architect</td>
                <td style={style.tableTd}>{item.Architect}</td>
            </tr>
            <tr style={style.tableTr}>
                <td style={style.tableTdFirstChild}>Acoustician</td>
                <td style={style.tableTd}>{item.Acoustician}</td>
            </tr>
            <tr style={style.tableTr}>
                <td style={style.tableTdFirstChild}>Structural & Civil Engineer</td>
                <td style={style.tableTd}>{item.Structural_x0020__x0026__x0020_C1}</td>
            </tr>
            <tr style={style.tableTr}>
                <td style={style.tableTdFirstChild}>FF&E</td>
                <td style={style.tableTd}>{item.FF_x002B_E}</td>
            </tr>
            <tr style={style.tableTr}>
                <td style={style.tableTdFirstChild}>M+E Engineering</td>
                <td style={style.tableTd}>{item.M_x002B_E_x0020_Engineering}</td>
            </tr>
            <tr style={style.tableTr}>
                <td style={style.tableTdFirstChild}>ICT</td>
                <td style={style.tableTd}>{item.ICT}</td>
            </tr>
            <tr style={style.tableTr}>
                <td style={style.tableTdFirstChild}>Cost Advisors</td>
                <td style={style.tableTd}>{item.Cost_x0020_Advisiors}</td>
            </tr>
            <tr style={style.tableTr}>
                <td style={style.tableTdFirstChild}>Planning Consultant</td>
                <td style={style.tableTd}>{item.Planning_x0020_Consultant}</td>
            </tr>
            <tr style={style.tableTr}>
                <td style={style.tableTdFirstChild}>M+E Installers</td>
                <td style={style.tableTd}>{item.M_x002B_E_x0020_Installers}</td>
            </tr>
            <tr style={style.tableTr}>
                <td style={style.tableTdFirstChild}>Environmental</td>
                <td style={style.tableTd}>{item.Environmental}</td>
            </tr>
            <tr style={style.tableTr}>
                <td style={style.tableTdFirstChild}>Project Management</td>
                <td style={style.tableTd}>{item.Project_x0020_Management}</td>
            </tr>
            <tr style={style.tableTr}>
                <td style={style.tableTdFirstChild}>Landscape</td>
                <td style={style.tableTd}>{item.Landscape}</td>
            </tr>
            <tr style={style.tableTr}>
                <td style={style.tableTdFirstChild}>Specialist adviser</td>
                <td style={style.tableTd}>{item.Specialist_x0020_adviser}</td>
            </tr>
            <tr style={style.tableTr}>
                <td style={style.tableRowEmpty} colSpan={2}/>
            </tr>
            <tr style={style.tableTr}>
                <td style={style.tableRowGreen}  colSpan={2}>Project Data</td>
            </tr>
            <tr style={style.tableTr}>
                <td style={style.tableTdFirstChild}>Building Area</td>
                <td style={style.tableTd}>{item.Building_x0020_Area}</td>
            </tr>
            <tr style={style.tableTr}>
                <td style={style.tableTdFirstChild}>Number of RIDDOR reportable accidents</td>
                <td style={style.tableTd}>{item.Health_x0020__x0026__x0020_Safet}</td>
            </tr>
            <tr style={style.tableTr}>
                <td style={style.tableTdFirstChild}>Accident Free Man Hours</td>
                <td style={style.tableTd}>{item.Accident_x0020_free_x0020_man_x0}</td>
            </tr>
            <tr style={style.tableTr}>
                <td style={style.tableTdFirstChild}>Considerate Constructors Score</td>
                <td style={style.tableTd}>{item.Considerate_x0020_constructors_x}</td>
            </tr>
            <tr style={style.tableTr}>
                <td style={style.tableRowGrey} colSpan={2}>KPIs</td>
            </tr>
            <tr style={style.tableTr}>
                <td style={style.tableTdFirstChild}>% Deviation from cost estimate</td>
                <td style={style.tableTd}>{item.Cost_x0020_Predictability} %</td>
            </tr>
            <tr style={style.tableTr}>
                <td style={style.tableTdFirstChild}>% Deviation from time estimate</td>
                <td style={style.tableTd}>{item.Time_x0020_Predictability} %</td>
            </tr>
            <tr style={style.tableTr}>
                <td style={style.tableTdFirstChild}>Defects</td>
                <td style={style.tableTd}>{item.Defects} %</td>
            </tr>
            <tr style={style.tableTr}>
                <td style={style.tableTdFirstChild}>Client Satisfaction- Product</td>
                <td style={style.tableTd}>{item.Client_x0020_Satisfaction_x0020_} %</td>
            </tr>
            <tr style={style.tableTr}>
                <td style={style.tableTdFirstChild}>Client Satisfaction- Service</td>
                <td style={style.tableTd}>{item.Client_x0020_Satisfaction_x0020_0} %</td>
            </tr>
            <tr style={style.tableTr}>
                <td style={style.tableTdFirstChild}>Pre-Construction BREEAM/DREAM rating</td>
                <td style={style.tableTd}>{item.Pre_x002d_Construction_x0020_BRE0Term}</td>
            </tr>
            <tr style={style.tableTr}>
                <td style={style.tableTdFirstChild}>Score</td>
                <td style={style.tableTd}>{item.Pre_x002d_Construction_x0020_BRE}</td>
            </tr>
            <tr style={style.tableTr}>
                <td style={style.tableTdFirstChild}>Handover BREEAM/DREAM rating</td>
                <td style={style.tableTd}>{item.Handover_x0020_BREEAM_x002F_DREA0Term}</td>
            </tr>
            <tr style={style.tableTr}>
                <td style={style.tableTdFirstChild}>Score</td>
                <td style={style.tableTd}>{item.Handover_x0020_BREEAM_x002F_DREA}</td>
            </tr>
            <tr style={style.tableTr}>
                <td style={style.tableTdFirstChild}>CEEQUAL rating</td>
                <td style={style.tableTd}>{item.CEEQUAL_x0020_RatingTerm}</td>
            </tr>
            <tr style={style.tableTr}>
                <td style={style.tableTdFirstChild}>Score</td>
                <td style={style.tableTd}>{item.CEEQUAL_x0020_Score}</td>
            </tr>
            <tr style={style.tableTr}>
                <td style={style.tableTdFirstChild}>Kier apprentices employed</td>
                <td style={style.tableTd}>{item.Kier_x0020_Apprentices_x0020_Emp}</td>
            </tr>
            <tr style={style.tableTr}>
                <td style={style.tableTdFirstChild}>Supply chain apprentices</td>
                <td style={style.tableTd}>{item.Supply_x0020_chain_x0020_Apprent}</td>
            </tr>
            <tr style={style.tableTr}>
                <td style={style.tableTdFirstChild}>EPC rating</td>
                <td style={style.tableTd}>{item.EPC_x0020_RatingTerm}</td>
            </tr>
            <tr style={style.tableTr}>
                <td style={style.tableRowGrey} colSpan={2}>Local Spend (% of project spend)</td>
            </tr>
            <tr style={style.tableTr}>
                <td style={style.tableTdFirstChild}>{less}20 miles</td>
                <td style={style.tableTd}>{item.Local_x0020_spend_x0020_within_x} %</td>
            </tr>
            <tr style={style.tableTr}>
                <td style={style.tableTdFirstChild}>Within 40 miles</td>
                <td style={style.tableTd}>{item.Local_x0020_spend_x0020_within_x0} %</td>
            </tr>
            <tr style={style.tableTr}>
                <td style={style.tableRowEmpty} colSpan={2}/>
            </tr>
            <tr style={style.tableTr}>
                <td style={style.tableRowGreen}  colSpan={2}>Testimonials</td>
            </tr>
            <tr style={style.tableTr}>
                <td style={style.tableTdFirstChild}>Are client references available on request?</td>
                <td style={style.tableTd}>{item.Client_x0020_Reference_x0020_ava ? "Yes": "No"}</td>
            </tr>
            <tr style={style.tableTr}>
                <td style={style.tableTdFirstChild}>Testimonial 1</td>
                <td style={style.tableTd}>{item.Testimonial1}</td>
            </tr>
            <tr style={style.tableTr}>
                <td style={style.tableTdFirstChild}>Source 1</td>
                <td style={style.tableTd}>{item.Source_x0020_1}</td>
            </tr>
            <tr style={style.tableTr}>
                <td style={style.tableTdFirstChild}>Testimonial 2</td>
                <td style={style.tableTd}>{item.Testimonial2}</td>
            </tr>
            <tr style={style.tableTr}>
                <td style={style.tableTdFirstChild}>Source 2</td>
                <td style={style.tableTd}>{item.Source_x0020_2}</td>
            </tr>
            <tr style={style.tableTr}>
                <td style={style.tableTdFirstChild}>Testimonial 3</td>
                <td style={style.tableTd}>{item.Testimonial_x0020_3}</td>
            </tr>
            <tr style={style.tableTr}>
                <td style={style.tableTdFirstChild}>Source 3</td>
                <td style={style.tableTd}>{item.Source_x0020_3}</td>
            </tr>
            <tr style={style.tableTr}>
                <td style={style.tableTdFirstChild}>Testimonial 4</td>
                <td style={style.tableTd}>{item.Testimonial4}</td>
            </tr>
            <tr style={style.tableTr}>
                <td style={style.tableTdFirstChild}>Source 4</td>
                <td style={style.tableTd}>{item.Source_x0020_4}</td>
            </tr>
            <tr style={style.tableTr}>
                <td style={style.tableTdFirstChild}>Testimonial 5</td>
                <td style={style.tableTd}>{item.Testimonial5}</td>
            </tr>
            <tr style={style.tableTr}>
                <td style={style.tableTdFirstChild}>Source 5</td>
                <td style={style.tableTd}>{item.Source_x0020_5}</td>
            </tr>
            <tr style={style.tableTr}>
                <td style={style.tableRowEmpty} colSpan={2}/>
            </tr>
            <tr style={style.tableTr}>
                <td style={style.tableRowGreen}  colSpan={2}>Awards and link to the Kier Album</td>
            </tr>
            <tr style={style.tableTr}>
                <td style={style.tableTdFirstChild}>Awards</td>
                <td style={style.tableTd}>{item.Award_x0020_1}</td>
            </tr>
            <tr style={style.tableTr}>
                <td style={style.tableTdFirstChild}>Link to the Kier Album</td>
                <td style={style.tableTd}>{item.Kier_x0020_album_x0020_link}</td>
            </tr>
            <tr style={style.tableTr}>
                <td style={style.tableRowEmpty} colSpan={2}/>
            </tr>
        </tbody>
    </table>
)};

export default DatasheetComp;