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

class ProductTable extends React.Component<PersonTableProps, PersonTableState> {
  render() {
    const rows = (
      <tr>
        <td>{}</td>
        <td></td>
      </tr>
    );
    return (
      <table>
        <thead>
          <tr>
            <th>Datasheet ID</th>
            <th>Name</th>
            <th>Job Title</th>
            <th>Email</th>
          </tr>
        </thead>
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

const Person = [
  {DatasheetID: 12, name: 'James', jobTitle: 'Manager', email: 'test@test.com'}
];

ReactDOM.render(     
<App products={Person} />,
    document.getElementById('root')        
);
