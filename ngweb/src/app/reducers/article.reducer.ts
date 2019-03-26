import * as actions from '../actions/article.action';
import { CollectObj } from '../domain';

export interface State {
    like: number;
    delete: boolean;
    collectArticle: CollectObj;
    collectUser:CollectObj

};
export const initialState: State = {
    like:0,
    delete:false,
    collectArticle:{},
    collectUser:{}
};

export function reducer(state = initialState, action: actions.Actions ): State {
    switch (action.type) {
        //喜欢
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
        // 收藏
        case actions.ActionTypes.COLLECT_ARTICLE_SCCESS: {
            return Object.assign(state, {collectArticle: action.payload});
        }
        case actions.ActionTypes.COLLECT_ARTICLE_FAIL: {
            return Object.assign(state, {collectArticle: action.payload});
        }
        // 关注
        case actions.ActionTypes.COLLECT_USER_SCCESS: {
            return Object.assign(state, {collectUser: action.payload});
        }
        case actions.ActionTypes.COLLECT_USER_FAIL: {
            return Object.assign(state, {collectUser: action.payload});
        }
        default: {
            return state;
        }
    }
}
export const getLike = (state: State) => state.like;
export const getDelete = (state: State) => state.delete;
export const getCollectArticle = (state: State) => state.collectArticle;

export const getCollectUser = (state: State) => state.collectUser;