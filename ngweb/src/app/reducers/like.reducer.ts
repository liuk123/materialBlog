import * as actions from '../actions/article.action';

export interface State {
    
};
export const initialState: State = -1;

export function reducer(state = initialState, action: actions.Actions ): State {
    switch (action.type) {
        case actions.ActionTypes.LIKE_SCCESS:{
            return action.payload;
        }
        case actions.ActionTypes.LIKE_FAIL:{
            return initialState
        }
        default: {
            return state;
        }
    }
}