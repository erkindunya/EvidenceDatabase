import * as React from 'react';
import '../../styles/export.css'; 

const DatasheetComp = (props:any) => {
    const item = props.dataSheetItems;
    const less:string = "<";
    return (
    <table>
        <thead>
            <tr>
                <th colSpan={2}>{item.Title}</th>
            </tr>      
        </thead>
        <tbody>
            <tr>
                <td className="TableRowHeader" colSpan={2}>Author and project stage</td>
            </tr>
            <tr>
                <td>Author</td>
                <td>{item.Id}</td>
            </tr>
            <tr>
                <td>Stage of Project</td>
                <td>{item.Title}</td>
            </tr>
            <tr>
                <td className="TableRowEmpty" colSpan={2}/>
            </tr>
            <tr>
                <td className="TableRowHeader" colSpan={2}>Project Information</td>
            </tr>
            <tr>
                <td>Otherwise known as</td>
                <td>{item.Id}</td>
            </tr>
            <tr>
                <td>Contract/CRM number</td>
                <td>{item.Title}</td>
            </tr>
            <tr>
                <td>Client</td>
                <td>{item.Id}</td>
            </tr>
            <tr>
                <td>Kier delivery region</td>
                <td>{item.Title}</td>
            </tr>
            <tr>
                <td>External JV</td>
                <td>{item.Id}</td>
            </tr>
            <tr>
                <td>Internal JV</td>
                <td>{item.Title}</td>
            </tr>
            <tr>
                <td className="TableRowGrey" colSpan={2}>Project Location</td>
            </tr>
            <tr>
                <td>Region</td>
                <td>{item.Id}</td>
            </tr>
            <tr>
                <td>Area</td>
                <td>{item.Title}</td>
            </tr>
            <tr>
                <td>Location</td>
                <td>{item.Id}</td>
            </tr>
            <tr>
                <td>Sector</td>
                <td>{item.Title}</td>
            </tr>
            <tr>
                <td>Sub-Sector</td>
                <td>{item.Id}</td>
            </tr>
            <tr>
                <td>Funding Sector</td>
                <td>{item.Title}</td>
            </tr>
            <tr>
                <td>Form of procurement</td>
                <td>{item.Id}</td>
            </tr>
            <tr>
                <td>Procurement subtype</td>
                <td>{item.Title}</td>
            </tr>
            <tr>
                <td>Form of Contract</td>
                <td>{item.Id}</td>
            </tr>
            <tr>
                <td>Design stage at appointment</td>
                <td>{item.Title}</td>
            </tr>
            <tr>
                <td className="TableRowEmpty" colSpan={2}/>
            </tr>
            <tr>
                <td className="TableRowHeader" colSpan={2}>Value and Contract Dates</td>
            </tr>
            <tr>
                <td>Value at contract award</td>
                <td>{item.Id}</td>
            </tr>
            <tr>
                <td>Value at Contract completion</td>
                <td>{item.Title}</td>
            </tr>
            <tr>
                <td>Reason for aggred change</td>
                <td>{item.Id}</td>
            </tr>
            <tr>
                <td>Planned start on site date</td>
                <td>{item.Title}</td>
            </tr>
            <tr>
                <td>Planned completion date</td>
                <td>{item.Title}</td>
            </tr>
            <tr>
                <td>Actual start on site date</td>
                <td>{item.Id}</td>
            </tr>
            <tr>
                <td>Actual completion date</td>
                <td>{item.Title}</td>
            </tr>
            <tr>
                <td>Pre-construction duration</td>
                <td>{item.Title}</td>
            </tr>
            <tr>
                <td className="TableRowEmpty" colSpan={2}/>
            </tr>
            <tr>
                <td className="TableRowHeader" colSpan={2}>Project Description</td>
            </tr>
            <tr>
                <td>Project Description</td>
                <td>{item.Title}</td>
            </tr>
            <tr>
                <td>Work Description</td>
                <td>{item.Title}</td>
            </tr>
            <tr>
                <td className="TableRowEmpty" colSpan={2}/>
            </tr>
            <tr>
                <td className="TableRowHeader" colSpan={2}>The Team</td>
            </tr>
            <tr>
                <td>Bid Lead</td>
                <td>{item.Title}</td>
            </tr>
            <tr>
                <td>QS / Commercial Manager</td>
                <td>{item.Title}</td>
            </tr>
            <tr>
                <td>Project Contracts Manager</td>
                <td>{item.Title}</td>
            </tr>
            <tr>
                <td>Design Manager</td>
                <td>{item.Title}</td>
            </tr>
            <tr>
                <td>Scope of Kier involvement</td>
                <td>{item.Title}</td>
            </tr>
            <tr>
                <td className="TableRowGrey" colSpan={2}>Designers / Supply Chain</td>
            </tr>
            <tr>
                <td >Architect</td>
                <td>{item.Title}</td>
            </tr>
            <tr>
                <td>Acoustician</td>
                <td>{item.Title}</td>
            </tr>
            <tr>
                <td>Structural & Civil Engineer</td>
                <td>{item.Title}</td>
            </tr>
            <tr>
                <td>FF&E</td>
                <td>{item.Title}</td>
            </tr>
            <tr>
                <td>M+E Engineering</td>
                <td>{item.Title}</td>
            </tr>
            <tr>
                <td>ICT</td>
                <td>{item.Title}</td>
            </tr>
            <tr>
                <td>Cost Advisors</td>
                <td>{item.Title}</td>
            </tr>
            <tr>
                <td>Planning Consultant</td>
                <td>{item.Title}</td>
            </tr>
            <tr>
                <td>M+E Installers</td>
                <td>{item.Title}</td>
            </tr>
            <tr>
                <td>Environmental</td>
                <td>{item.Title}</td>
            </tr>
            <tr>
                <td>Project Management</td>
                <td>{item.Title}</td>
            </tr>
            <tr>
                <td>Landscape</td>
                <td>{item.Title}</td>
            </tr>
            <tr>
                <td>Specialist adviser</td>
                <td>{item.Title}</td>
            </tr>
            <tr>
                <td className="TableRowEmpty" colSpan={2}/>
            </tr>
            <tr>
                <td className="TableRowHeader" colSpan={2}>Project Data</td>
            </tr>
            <tr>
                <td>Building Area</td>
                <td>{item.Title}</td>
            </tr>
            <tr>
                <td>Number of RIDDOR reportable accidents</td>
                <td>{item.Title}</td>
            </tr>
            <tr>
                <td>Accident Free Man Hours</td>
                <td>{item.Title}</td>
            </tr>
            <tr>
                <td>Considerate Constructors Score</td>
                <td>{item.Title}</td>
            </tr>
            <tr>
                <td className="TableRowGrey" colSpan={2}>KPIs</td>
            </tr>
            <tr>
                <td>% Deviation from cost estimate</td>
                <td>{item.Title}</td>
            </tr>
            <tr>
                <td>% Deviation from time estimate</td>
                <td>{item.Title}</td>
            </tr>
            <tr>
                <td>Defects</td>
                <td>{item.Title}</td>
            </tr>
            <tr>
                <td>Client Satisfaction- Product</td>
                <td>{item.Title}</td>
            </tr>
            <tr>
                <td>Client Satisfaction- Service</td>
                <td>{item.Title}</td>
            </tr>
            <tr>
                <td>Pre-Construction BREEAM/DREAM rating</td>
                <td>{item.Title}</td>
            </tr>
            <tr>
                <td>Score</td>
                <td>{item.Title}</td>
            </tr>
            <tr>
                <td>Handover BREEAM/DREAM rating</td>
                <td>{item.Title}</td>
            </tr>
            <tr>
                <td>Score</td>
                <td>{item.Title}</td>
            </tr>
            <tr>
                <td>CEEQUAL rating</td>
                <td>{item.Title}</td>
            </tr>
            <tr>
                <td>Score</td>
                <td>{item.Title}</td>
            </tr>
            <tr>
                <td>Kier apprentices employed</td>
                <td>{item.Title}</td>
            </tr>
            <tr>
                <td>Supply chain apprentices</td>
                <td>{item.Title}</td>
            </tr>
            <tr>
                <td>EPC rating</td>
                <td>{item.Title}</td>
            </tr>
            <tr>
                <td className="TableRowGrey" colSpan={2}>Local Spend (% of project spend)</td>
            </tr>
            <tr>
                <td>{less}20 miles</td>
                <td>{item.Title}</td>
            </tr>
            <tr>
                <td>Within 40 miles</td>
                <td>{item.Title}</td>
            </tr>
            <tr>
                <td className="TableRowEmpty" colSpan={2}/>
            </tr>
            <tr>
                <td className="TableRowHeader" colSpan={2}>Testimonials</td>
            </tr>
            <tr>
                <td>Are client references available on request?</td>
                <td>{item.Title}</td>
            </tr>
            <tr>
                <td>Testimonial 1</td>
                <td>{item.Title}</td>
            </tr>
            <tr>
                <td>Source 1</td>
                <td>{item.Title}</td>
            </tr>
            <tr>
                <td>Testimonial 2</td>
                <td>{item.Title}</td>
            </tr>
            <tr>
                <td>Source 2</td>
                <td>{item.Title}</td>
            </tr>
            <tr>
                <td>Testimonial 3</td>
                <td>{item.Title}</td>
            </tr>
            <tr>
                <td>Source 3</td>
                <td>{item.Title}</td>
            </tr>
            <tr>
                <td>Testimonial 4</td>
                <td>{item.Title}</td>
            </tr>
            <tr>
                <td>Source 4</td>
                <td>{item.Title}</td>
            </tr>
            <tr>
                <td>Testimonial 5</td>
                <td>{item.Title}</td>
            </tr>
            <tr>
                <td>Source 5</td>
                <td>{item.Title}</td>
            </tr>
            <tr>
                <td className="TableRowEmpty" colSpan={2}/>
            </tr>
            <tr>
                <td className="TableRowHeader" colSpan={2}>Awards and link to the Kier Album</td>
            </tr>
            <tr>
                <td>Awards</td>
                <td>{item.Title}</td>
            </tr>
            <tr>
                <td>Link to the Kier Album</td>
                <td>{item.Title}</td>
            </tr>
            <tr>
                <td className="TableRowEmpty" colSpan={2}/>
            </tr>
        </tbody>
    </table>
)};

export default DatasheetComp;