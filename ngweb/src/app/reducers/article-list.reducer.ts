import * as actions from '../actions/article.action';
import { Article } from '../domain';

export interface State {
    
};
export const initialState: State = [];

export function reducer(state = initialState, action: actions.Actions ): State {
    switch (action.type) {
        case actions.ActionTypes.ARTICLE_LIST_SCCESS:{
            return action.payload;
        }
        case actions.ActionTypes.ARTICLE_LIST_FAIL:{
            return initialState
        }
        default: {
            return state;
        }
    }
}