import * as actions from '../actions/article.action';
import { Article } from '../domain';

export interface State {
    
};

export const initialState: State = [];

export function reducer(state = initialState, action: actions.Actions ): State {
    switch (action.type) {
        case actions.ActionTypes.EDITE_ARTICLE_SCCESS:
        case actions.ActionTypes.CREATE_ARTICLE_SCCESS:
        case actions.ActionTypes.DELETE_ARTICLE_SCCESS:
        case actions.ActionTypes.ARTICLE_LIST_SCCESS:
        case actions.ActionTypes.ARTICLE_DETAIL_SCCESS:
        case actions.ActionTypes.LIKE_SCCESS: {
            return <Article>action.payload;
        }
        case actions.ActionTypes.EDITE_ARTICLE_FAIL:
        case actions.ActionTypes.CREATE_ARTICLE_FAIL:
        case actions.ActionTypes.DELETE_ARTICLE_FAIL:
        case actions.ActionTypes.ARTICLE_LIST_FAIL:
        case actions.ActionTypes.ARTICLE_DETAIL_FAIL:
        case actions.ActionTypes.LIKE_FAIL: {
            return initialState
        }
        default: {
            return state;
        }
    }
}