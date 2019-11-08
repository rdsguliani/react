import * as ActionTypes from './actionTypes';

const results = (counter) => {
    return {
        type: ActionTypes.ADDSTORERESULTS,
        counter
    }
}

export const addStoreResults = (counter) => {
    return dispatch => {
        setTimeout( () => {
            dispatch(results(counter))
        }, 5000)
    }

}

export const removeStoreResults = (id) => {
    return {
        type: ActionTypes.REMOVESTORERESULTS,
        id
    }
}