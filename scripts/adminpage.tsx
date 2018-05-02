import 'airbnb-browser-shims';
import * as $ from 'jquery';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

class App extends React.Component {
    render() {
        return (
        <div className="App">
            <h1>Hello world!</h1>
        </div>
        );
    }
}
ReactDOM.render(     
<App />,
    document.getElementById('root')        
);
