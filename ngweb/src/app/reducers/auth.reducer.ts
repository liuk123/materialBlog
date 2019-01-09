import * as actions from '../actions/auth.action';
import { User } from '../domain';

export interface State {
    
};

export const initialState: State = {
    
};

export function reducer(state = initialState, action: actions.Actions ): State {
    switch (action.type) {
        case actions.ActionTypes.USERCARD_SCCESS:
        case actions.ActionTypes.USERCENTER_SCCESS:
        case actions.ActionTypes.REGISTER_SCCESS:
        case actions.ActionTypes.LOGIN_SCCESS:{
            return <User>action.payload;
        }
        case actions.ActionTypes.USERCARD_FAIL:
        case actions.ActionTypes.USERCENTER_FAIL:
        case actions.ActionTypes.REGISTER_FAIL:
        case actions.ActionTypes.LOGIN_FAIL: {
            return initialState
        }
        default: {
            return state;
        }
    }
}