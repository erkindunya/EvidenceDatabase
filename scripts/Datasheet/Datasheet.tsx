import * as React from 'react';

import './Datasheet.css';

const datasheet = ( props ) => {
    return (
        <div className="Datasheet">
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    )
};

export default datasheet;