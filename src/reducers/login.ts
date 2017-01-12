import * as actions from '../actions/login';

interface State {
    isLoggedIn: Boolean;
}
const initialState: State = {
    isLoggedIn: false
}

export default function loginReducer(state = initialState, action ) {
    switch(action.type) {
        case actions.ActionTypes.IS_LOGGED_IN:
            return { ...state, isLoggedIn: action.isLoggeIn };
        default:
            return state;
    }
}