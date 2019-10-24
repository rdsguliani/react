import React, { Component } from 'react';
import './App.css';
import Validate from './validate/Validate'
import CharComponent from './char/CharComponent';

class App extends Component {

  state = {
    charLength: 0,
    chars: null
  }

  changeHandler = (event) => {
    console.log(event.target.value)
    const len = event.target.value.toString().length;
    console.log(len);
    this.setState({charLength: len, chars: event.target.value})
  }

  charClicked = (event, index) => {
    const chars = [...this.state.chars];
    chars.splice(index,  1);
    this.setState({charLength: chars.length, chars: chars.join('')});
  }

  render() {

    let display = null;
    
    if(this.state.charLength) {
      display = (<Validate len={this.state.charLength} />)
    }

    let charList = null
    if(this.state.chars) {
      const list = [...this.state.chars]
      charList = list.map( (c, index) => {
        return <CharComponent text={c} key={index}  clicked={ (event) => this.charClicked(event, index)}/>
      })
    }


    return (
      <div className="App">
       <h1>LIST and STATE MUTABILITY !!</h1>

        <input onChange={this.changeHandler} value={this.state.chars} />

        {display}
        {charList}

      </div>
    );
  }
}

export default App;
