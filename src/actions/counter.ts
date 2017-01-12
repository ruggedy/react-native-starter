import { type } from '../util';

export const ActionTypes = {
    INCREMENT: type('[Counter] Increment'),
    DECREMENT: type('[Counter] Decerement')
}


export function Increment() {
    return {
        type: ActionTypes.INCREMENT
    }
}

export function Decrement() {
    return {
        type: ActionTypes.DECREMENT
    }
}