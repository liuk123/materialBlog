import * as actions from '../actions/article.action';

export interface State {
    
};
export const initialState: State = {};

export function reducer(state = initialState, action: actions.Actions ): State {
    switch (action.type) {
        case actions.ActionTypes.ARTICLE_DETAIL_SCCESS: {
            return action.payload;
        }
        case actions.ActionTypes.ARTICLE_DETAIL_FAIL:{
            return initialState
        }
        default: {
            return state;
        }
    }
}