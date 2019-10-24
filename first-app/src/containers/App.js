import React, { Component } from 'react';
import classes from './App.css';
import Persons from './../components/Persons/Persons';
import Cockpit from './../components/Cockpit/Cockpit';
import withClass from './hoc/withClass';
import Aux from'./hoc/Aux';
import AuthContext from './../context/auth-context';

class App extends Component {
  state = {
    persons: [
      { id: 'asfa1', name: 'Max', age: 28 },
      { id: 'vasdf1', name: 'Manu', age: 29 },
      { id: 'asdf11', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false,
    changeCounter: 0,
    authenticated: false
  }

  nameChangedHandler = ( event, id ) => {
    const personIndex = this.state.persons.findIndex( p => {
      return p.id === id;
    } );

    const person = {
      ...this.state.persons[personIndex]
    };

    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( (prevState, props) => {
      return {
        persons: persons,
        changeCounter: prevState.changeCounter + 1
      }
    });
  }

  loginHandler = () => {
    this.setState({
      authenticated: true
    })
  }

  deletePersonHandler = ( personIndex ) => {
    // const persons = this.state.persons.slice();
    console.log(personIndex)
    const persons = [...this.state.persons];
    persons.splice( personIndex, 1 );
    this.setState( { persons: persons } );
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState( { showPersons: !doesShow } );
  }

  render () {
    let persons = null;
   

    if ( this.state.showPersons ) {
      persons =  <Persons persons={this.state.persons} 
                  clicked={this.deletePersonHandler}
                  changed={this.nameChangedHandler}
                  authenticated={this.state.authenticated}
                 ></Persons>
    }

    return (
        <Aux classes={classes.App}>
        <AuthContext.Provider value={{authenticated: this.state.authenticated, login: this.loginHandler}}>
          <Cockpit persons={this.state.persons}
                   showPersons={this.state.showPersons}
                   togglePersonsHandler={this.togglePersonsHandler}
          ></Cockpit>          
            {persons}
        </AuthContext.Provider>
        </Aux>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default withClass(App, classes.App);
