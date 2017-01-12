import { combineReducers } from 'redux';
import authState from './login';
import counter from './counter'

export default combineReducers({
    authState, 
    counter
})