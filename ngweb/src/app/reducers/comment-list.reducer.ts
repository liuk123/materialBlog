import * as actions from '../actions/article.action';
import { Comment } from '../domain';

export interface State {
    
};

export const initialState: State = [];

export function reducer(state = initialState, action: actions.Actions ): State {
    switch (action.type) {
        case actions.ActionTypes.COMMENT_LIST_SCCESS: {
            return <Comment[]>action.payload
        }
        case actions.ActionTypes.COMMENT_LIST_FAIL: {
            return initialState
        }
        default: {
            return state;
        }
    }
}