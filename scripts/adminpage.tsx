import 'airbnb-browser-shims';
import * as $ from 'jquery';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Datasheet from './Datasheet/Datasheet'


interface PersonTableProps{
  person: Person[];
};

interface PersonTableState{
  person: Person[];
};

interface Person{
  datasheetID: number;
  name: string;
  jobTitle: boolean;
  email: string;
};

class PersonTable extends React.Component<PersonTableProps, PersonTableState> {
  constructor(props){
    super(props);
    this.state = {person:props};
  };
  render() {
    const rows = (
      <tr>
        <td>{this.props.person[0]}</td>
        <td></td>
      </tr>
    );
    return (
      <table>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}
function App(props) {
  return (  
    <div>{this.props.category}</div>
  );
}

const PersonFieldNames = [
  {DatasheetID: 'DatasheetID', name: 'Name', jobTitle: 'Job Title', email: 'Email'}
];

const PERSON = [
  {DatasheetID: 12, name: 'James', jobTitle: 'Manager', email: 'test@test.com'}
];

ReactDOM.render(     
<App person={PERSON} />,
    document.getElementById('root')        
);
