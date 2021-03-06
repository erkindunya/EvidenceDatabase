import * as React from 'react';
import {Style} from '../../styles/style';

const EvidenceBiteComp = (props:any) => {
    const style = new Style();
    let items = props.evidenceItems;
    if (!Array.isArray(items)) {
        const array = [];
        array[0] = items;
        items = array;
    } 
    return (
        <table style={style.table}>
            {items.map((item:any, index:number) =>
                <tbody key={'edb_'+index}>
                    <tr style={style.tableTr} key={'edb_evidenceBite_'+index}>
                        <td style={style.tableRowPurple} key={'edb_evidenceBite_td_'+index} colSpan={2}>Evidence bite</td>
                    </tr>
                    <tr style={style.tableTr} key={'edb_evidenceBiteHeading_'+index}>
                        <td style={style.tableRowBlue} key={'edb_evidenceBiteHeading_td_'+index} colSpan={2}>Evidence bite heading (insert here)</td>
                    </tr>
                    <tr style={style.tableTr} key={'edb_description_'+index}>
                        <td style={style.tableTdFirstChild} key={'edb_description_td_'+index}>Description</td>
                        <td style={style.tableTd} key={'edb_description_td2_'+index}>{item.Evidence_x0020_Bite_x0020_Descri}</td>
                    </tr>
                    <tr style={style.tableTr} key={'edb_benefit_'+index}>
                        <td style={style.tableTdFirstChild} key={'edb_benefit_td_'+index} >Benefit</td>
                        <td style={style.tableTd} key={'edb_benefit_td2_'+index}>{item.Evidence_x0020_Bite_x0020_Benefi}</td>
                    </tr>
                    <tr style={style.tableTr} key={'edb_function_'+index}>
                        <td style={style.tableRowBlue} key={'edb_function_td_'+index} colSpan={2}>Function/Topic/Category</td>
                    </tr>
                    <tr style={style.tableTr} key={'edb_businessFuntion_'+index}>
                        <td style={style.tableTdFirstChild} key={'edb_businessFuntion_td_'+index}>Business Function</td>
                        <td style={style.tableTd} key={'edb_businessFuntion_td2'+index}>{item.Business_x0020_FunctionTerm}</td>
                    </tr>
                    <tr style={style.tableTr} key={'edb_topic_'+index}>
                        <td style={style.tableTdFirstChild} key={'edb_topic_td_'+index}>Topic</td>
                        <td style={style.tableTd} key={'edb_topic_td2_'+index}>{item.TopicTerm}</td>
                    </tr>
                    {item.Business_x0020_Categories.results.map((term:any,i:number) => 
                        <tr style={style.tableTr} key={'edb_category_'+index+'_'+i}>
                            <td style={style.tableTdFirstChild} key={'edb_category_td_'+index+'_'+i}>Category {i+1}</td>
                            <td style={style.tableTd} key={'edb_category_td2'+index+'_'+i}>{term.Label}</td>
                        </tr>
                    )
                    }
                    <tr style={style.tableTr} key={'edb_emptyRow_'+index}>
                        <td style={style.tableRowEmpty} key={'edb_emptyRow_td_'+index} colSpan={2}/>
                    </tr>
                </tbody>
            )}
        </table>
    )
};

export default EvidenceBiteComp;