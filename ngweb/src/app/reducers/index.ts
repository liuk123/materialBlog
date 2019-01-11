import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import * as fromQuote from './quote.reducer';
import * as fromAuth from './auth.reducer';
import * as fromUser from './user.reducer';
import * as fromArticleDetail from './article-detail.reducer';
import * as fromArticleList from './article-list.reducer';
import * as fromCommentList from './comment-list.reducer';
import * as fromArticleOp from './article.reducer';

import { createSelector } from '@ngrx/store';
import { User, Article, Comment } from '../domain';

export interface State {
    quote: fromQuote.State;
    auth: User;//用户的信息
    user: User;//文章作者的信息

    articleDetail: Article;
    articleList: Article[];
    commentList: Comment[]
    articleOp: fromArticleOp.State
   
};

const reducers = {
    quote: fromQuote.reducer,
    auth: fromAuth.reducer,
    user: fromUser.reducer,

    articleList: fromArticleList.reducer,
    articleDetail: fromArticleDetail.reducer,
    commentList: fromCommentList.reducer,
    articleOp: fromArticleOp.reducer
}

export const getQuoteState = (state: State) => state.quote;
export const getAuthState = (state: State) => state.auth;
export const getUserState = (state: State) => state.user;

export const getAuthCardState = (state: State) => state.auth;
export const getArticleListState = (state: State) => state.articleList;
export const getArticleDetailState = (state: State) => state.articleDetail;
export const getCommentListState = (state: State) => state.commentList;

export const getArticleOpState = (state: State) => state.articleOp;

export const getQuote = createSelector(getQuoteState, fromQuote.getQuote);
export const getLike = createSelector(getArticleOpState, fromArticleOp.getLike);
export const getDelete = createSelector(getArticleOpState, fromArticleOp.getDelete);

@NgModule({
    imports: [
        StoreModule.forRoot(reducers),
        StoreRouterConnectingModule.forRoot(),
        StoreDevtoolsModule.instrument(),
    ],
})
export class AppStoreModule {}