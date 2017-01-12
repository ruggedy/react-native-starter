import * as actions from '../actions/counter';

export interface State {
    counter: number;
}

const initialState: State = {
    counter: 0
}

export default function counterReducer (state= initialState, action) {
    switch(action.type) {
        case actions.ActionTypes.INCREMENT:
            return { ...state, counter: state.counter+1};
        case actions.ActionTypes.DECREMENT:
            return { ...state, counter: state.counter-1};
        default:
            return state;
    }
}