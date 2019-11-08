

const initialState = {
    counter: 0
}


const reducer = (state = initialState, action) => {
    console.log('in reducer')
    switch (action.type) {
        case 'INCREMENT':
            return {
                ...state,
                counter: state.counter + 1
            }
        case 'DECREMENT':
            return {
                ...state,
                counter: state.counter - 1
            }
        case 'ADD':
            return {
                ...state,
                counter: state.counter + action.by
            }
        case 'SUB':
            return {
                ...state,
                counter: state.counter - action.by
            }
    }
   
    return state;
}


export default reducer;

