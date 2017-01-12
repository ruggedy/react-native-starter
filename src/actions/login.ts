import { type } from '../util';


export const ActionTypes = {
    IS_LOGGED_IN: type('[Login] Is Logged In')
}


export function isLoggedIn({isLoggedIn}){
    return { 
        type: ActionTypes.IS_LOGGED_IN,
        isLoggedIn
    }
}

// export type Action
//     = 
//     |


