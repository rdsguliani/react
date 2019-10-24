import React from 'react';
import classes from './Cockpit.css'
import AuthContext from '../../context/auth-context';

const cockpit = ( props ) => {

    const assignedClasses = [];
    if ( props.persons.length <= 2 ) {
      assignedClasses.push( classes.red ); // classes = ['red']
    }
    if ( props.persons.length <= 1 ) {
      assignedClasses.push( classes.bold ); // classes = ['red', 'bold']
    }

    let btnClass = '';
    if (props.showPersons) {
        btnClass = classes.Red;
    }

    return (
        <div>
            <h1>Hi, I'm a React App</h1>
              <p className={assignedClasses.join( ' ' )}>This is really working!</p>
              <button
                className={btnClass}
                onClick={props.togglePersonsHandler}>Toggle Persons</button>
            <AuthContext.Consumer>
            { context => (
            <button
                onClick={context.login}>Login</button>
            )}
            </AuthContext.Consumer>
            
        </div>
    )
}
    

export default cockpit;