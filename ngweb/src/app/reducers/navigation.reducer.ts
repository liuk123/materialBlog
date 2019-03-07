import * as actions from '../actions/navigation.action';
import { Navigation } from '../domain';

export interface State {
    
};

export const initialState: State = [];

export function reducer(state = initialState, action: actions.Actions ): State {
    switch (action.type) {
        case actions.ActionTypes.RECOMMEND_NAVIGATION_SCCUESS: {
            return <Navigation[]>action.payload;
        }
        case actions.ActionTypes.RECOMMEND_NAVIGATION_FAIL:
        default: {
            return state;
        }
    }
}
