import React from 'react';


const Validate = (props) => {

    const value = props.len < 5 ? 'TOO SHORT' : 'long enough';

    return (
        <p>
          {value}
        </p>
    )
}

export default Validate;