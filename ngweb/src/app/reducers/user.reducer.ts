import * as actions from '../actions/user.action';
import { User } from '../domain';

export interface State {
    
};

export function reducer(state, action: actions.Actions ): State {
    switch (action.type) {
        case actions.ActionTypes.USERCARD_SCCESS:
        case actions.ActionTypes.USERCENTER_SCCESS:{
            return <User>action.payload;
        }
        case actions.ActionTypes.USERCARD_FAIL:
        case actions.ActionTypes.USERCENTER_FAIL: {
            return {};
        }
        default: {
            return state;
        }
    }
}