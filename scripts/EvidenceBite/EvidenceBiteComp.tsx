import * as React from 'react';
import '../../styles/export.css'; 

const EvidenceBiteComp = (props:any) => {
    let items = props.evidenceItems;
    if (!Array.isArray(items)) {
        const array = [];
        array[0] = items;
        items = array;
    } 
    return (
        <table>
            {items.map((item:any, index:number) =>
                <tbody key={'edb_'+index}>
                    <tr key={'edb_evidenceBite_'+index}>
                        <td key={'edb_evidenceBite_td_'+index} className="TableRowPurple" colSpan={2}>Evidence bite</td>
                    </tr>
                    <tr key={'edb_evidenceBiteHeading_'+index}>
                        <td key={'edb_evidenceBiteHeading_td_'+index} className="TableRowBlue" colSpan={2}>Evidence bite heading (insert here)</td>
                    </tr>
                    <tr key={'edb_description_'+index}>
                        <td key={'edb_description_td_'+index}>Description</td>
                        <td key={'edb_description_td2_'+index}>{item.Title}</td>
                    </tr>
                    <tr key={'edb_benefit_'+index}>
                        <td key={'edb_benefit_td_'+index} >Benefit</td>
                        <td key={'edb_benefit_td2_'+index}>{item.Title}</td>
                    </tr>
                    <tr key={'edb_function_'+index}>
                        <td key={'edb_function_td_'+index} className="TableRowBlue" colSpan={2}>Function/Topic/Category</td>
                    </tr>
                    <tr key={'edb_businessFuntion_'+index}>
                        <td key={'edb_businessFuntion_td_'+index}>Business Function</td>
                        <td key={'edb_businessFuntion_td2'+index}>{item.Title}</td>
                    </tr>
                    <tr key={'edb_topic_'+index}>
                        <td key={'edb_topic_td_'+index}>Topic</td>
                        <td key={'edb_topic_td2_'+index}>{item.Title}</td>
                    </tr>
                    <tr key={'edb_category_'+index}>
                        <td key={'edb_category_td_'+index}>Category 1</td>
                        <td key={'edb_category_td2'+index}>{item.Title}</td>
                    </tr>
                    <tr key={'edb_category2_'+index}>
                        <td key={'edb_category2_td_'+index}>Category 2</td>
                        <td key={'edb_category2_td2_'+index}>{item.Title}</td>
                    </tr>
                    <tr key={'edb_category3_'+index}>
                        <td key={'edb_category3_td_'+index}>Category 3</td>
                        <td key={'edb_category3_td2'+index}>{item.Title}</td>
                    </tr>
                    <tr key={'edb_emptyRow_'+index}>
                        <td key={'edb_emptyRow_td_'+index} className="TableRowEmpty" colSpan={2}/>
                    </tr>
                </tbody>
            )}
        </table>
    )
};

export default EvidenceBiteComp;