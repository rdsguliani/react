const initialState = {
    results: []
}


const storeReducer = (state = initialState, action) => {
    console.log('in store reducer')
    switch (action.type) {
        case 'ADDSTORERESULTS':
            const time = new Date().getTime();
            const result = {id:time, result: action.counter};
            // const res = [...state.results]
            // res.push(result);
            return {
                ...state,
                results: state.results.concat(result)
            }
        case 'REMOVESTORERESULTS':
            const id = action.id;
            // const result = {id:time, result: state.counter};
            const newResults = state.results.filter(item => {
                return item.id !== id;
            })
            // const res1 = [...state.results]
            // res1.splice(index, 1)
            return {
                ...state,
                results: newResults
            }
    }
   
    return state;
}


export default storeReducer;