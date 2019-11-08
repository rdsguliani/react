import * as ActionTypes from './actionTypes';

export const increment = () => {
    return {
        type: ActionTypes.INCREMENT
    }
}

export const decrement = () => {
    return {
        type: ActionTypes.DECREMENT
    }
}

export const add = (by) => {
    console.log('creator')
    return {
        type: ActionTypes.ADD,
        by
    }
}

export const sub = (by) => {
    console.log('creator')
    return {
        type: ActionTypes.SUB,
        by
    }
}