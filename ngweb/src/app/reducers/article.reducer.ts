import * as actions from '../actions/article.action';

export interface State {
    like: number;
    delete: boolean;

};
export const initialState: State = {
    like:0,
    delete:false,
};

export function reducer(state = initialState, action: actions.Actions ): State {
    switch (action.type) {
        //
        case actions.ActionTypes.LIKE_SCCESS:{
            return Object.assign(state, {like: action.payload});
        }
        case actions.ActionTypes.LIKE_FAIL:{
            return initialState
        }
        //删除
        case actions.ActionTypes.DELETE_ARTICLE_SCCESS: {
            return Object.assign(state, {delete: action.payload});
        }
        case actions.ActionTypes.DELETE_ARTICLE_FAIL: {
            return action.payload;
        }
        default: {
            return state;
        }
    }
}
export const getLike = (state: State) => state.like;
export const getDelete = (state: State) => state.delete;