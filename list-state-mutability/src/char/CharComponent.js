import React from 'react';
import './CharComponent.css';

const CharComponent = (props) => {

    return (
        <p className='char' onClick={props.clicked}>
          {props.text}
        </p>
    )
}

export default CharComponent;