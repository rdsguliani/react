import React, {useRef, useEffect, useContext} from 'react';
import PropTypes from 'prop-types';

import './Person.css';
import classes from './Person.css'
import withClass from './../../../containers/hoc/withClass';
import Aux from '../../../containers/hoc/Aux';
import AuthContext from '../../../context/auth-context';
const person = ( props ) => {

    const inputRef = useRef(null);
    const authContext = useContext(AuthContext);
    
    console.log(authContext.authenticated)

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    return (
        <Aux>
                { authContext.authenticated ? <p> authenticated !</p> : <p>please login</p> }
            <p onClick={props.click}>
                I'm {props.name} and I am {props.age} years old!
            </p>
            <p>
                {props.children}
            </p>
            <input 
                ref={inputRef}
                // ref={(inputEl) => {inputElement = inputEl}}
                type="text" 
                onChange={props.changed} 
                value={props.name} />
        </Aux>
    )
};

person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
}

export default withClass(person, classes.Person);