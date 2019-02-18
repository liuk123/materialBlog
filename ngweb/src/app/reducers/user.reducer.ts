import * as actions from '../actions/auth.action';
import { User } from '../domain';

export interface State {
    
};

export const initialState: State = {
    
};

export function reducer(state = initialState, action: actions.Actions ): State {
    switch (action.type) {
        case actions.ActionTypes.USERCARD_SCCESS: {
            return <User>action.payload;
        }
        case actions.ActionTypes.USERCARD_FAIL: {
            return initialState
        }
        default: {
            return state;
        }
    }
}

export function userListReducer(state = [], action: actions.Actions ) {
    switch (action.type) {
        case actions.ActionTypes.USERLIST_SCCESS: {
            return <User[]>action.payload;
        }
        case actions.ActionTypes.USERLIST_FAIL: {
            return initialState
        }
        default: {
            return state;
        }
    }
}