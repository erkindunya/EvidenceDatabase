import 'airbnb-browser-shims';
import * as $ from 'jquery';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Datasheet from './Datasheet/Datasheet'

class App extends React.Component {
    state = {
      persons: [
        { name: 'Max', age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 26 }
      ],
      otherState: 'some other value'
    }
  
    switchNameHandler = (newName) => {
      // console.log('Was clicked!');
      // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
      this.setState( {
        persons: [
          { name: newName, age: 28 },
          { name: 'Manu', age: 29 },
          { name: 'Stephanie', age: 27 }
        ]
      } )
    }
  
    nameChangedHandler = (event) => {
      this.setState( {
        persons: [
          { name: 'Max', age: 28 },
          { name: event.target.value, age: 29 },
          { name: 'Stephanie', age: 26 }
        ]
      } )
    }
  
    render () {
      const style = {
        backgroundColor: 'white',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer'
      };
  
      return (
        <div className="App">
          <p></p>
          <button 
            style={style}
            onClick={() => this.switchNameHandler('Maximilian!!')}>Switch Name</button>
          <Datasheet 
            name={this.state.persons[0].name} 
            age={this.state.persons[0].age} />
        </div>
      );
      // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
    }
  }

ReactDOM.render(     
<App />,
    document.getElementById('root')        
);
