import * as actions from '../actions/auth.action';
import { User } from '../domain';

export interface State {
    
};

export const initialState: State = {
    
};

export function reducer(state = initialState, action: actions.Actions ): State {
    switch (action.type) {
        case actions.ActionTypes.UPDATE_AUTH_SCCESS:
        case actions.ActionTypes.AUTHCARD_SCCESS:
        case actions.ActionTypes.REGISTER_SCCESS:
        case actions.ActionTypes.LOGIN_SCCESS:{
            return <User>action.payload;
        }
        case actions.ActionTypes.UPDATE_AUTH_FAIL:
        case actions.ActionTypes.AUTHCARD_FAIL:
        case actions.ActionTypes.REGISTER_FAIL:
        case actions.ActionTypes.LOGIN_FAIL: {
            return initialState
        }
        
        case actions.ActionTypes.LOGOUT_SCCESS:{
            return {}
        }
        // case actions.ActionTypes.LOGOUT_FAIL:{
        //     return false
        // }
        default: {
            return state;
        }
    }
}