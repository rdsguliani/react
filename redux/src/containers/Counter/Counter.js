import React, { Component } from 'react';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

import { connect } from 'react-redux'

class Counter extends Component {
    // state = {
    //     counter: 0
    // }

    // counterChangedHandler = ( action, value ) => {
    //     switch ( action ) {
    //         case 'inc':
    //             this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
    //             break;
    //         case 'dec':
    //             this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
    //             break;
    //         case 'add':
    //             this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
    //             break;
    //         case 'sub':
    //             this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
    //             break;
    //     }
    // }

    listItemClicked(event, id) {
        console.log(id)
        this.props.RemoveStoreResults(id);
    }

    render () {
        console.log(this.props)
        let list = null
        if(this.props.resultList.length > 0) {
            list = this.props.resultList.map( item => {
                return (
                    <li style={{textAlign: "left", cursor: "pointer"}} onClick={(event) => this.listItemClicked(event, item.id)} key={item.id}>{item.result}</li>
                )
            })
        }
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.Increment} />
                <CounterControl label="Decrement" clicked={this.props.Decrement}  />
                <CounterControl label="Add 5" clicked={this.props.Add}  />
                <CounterControl label="Subtract 5" clicked={this.props.Subtract}  />
                <hr/>
                <button onClick={() => this.props.AddStoreResults(this.props.ctr)}>Store results</button>
                <ul>
                   {list}
                </ul>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    console.log(state)
    return {
        ctr: state.reducer.counter,
        resultList: state.storeReducer.results
    }
}

const dispatchToProps = (dispatch) => {
    return {
        Increment: () => dispatch({type: 'INCREMENT'}),
        Decrement: () => dispatch({type: 'DECREMENT'}),
        Add: () => dispatch({type: 'ADD', by: 5}),
        Subtract: () => dispatch({type: 'SUB', by: 5}),
        AddStoreResults: (counter) => dispatch({type: 'ADDSTORERESULTS', counter}),
        RemoveStoreResults: (id) => dispatch({type: 'REMOVESTORERESULTS', id:id})
    }
}

export default connect(mapStateToProps, dispatchToProps)(Counter);