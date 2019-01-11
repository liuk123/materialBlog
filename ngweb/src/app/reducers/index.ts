import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import * as fromQuote from './quote.reducer';
import * as fromAuth from './auth.reducer';
import * as fromUser from './user.reducer';
// import * as fromArticle from './article.reducer';
import * as fromArticleDetail from './article-detail.reducer';
import * as fromArticleList from './article-list.reducer';
import * as fromCommentList from './comment-list.reducer';
// import * as fromComment from './comment.reducer';
//添加缓存
import { createSelector } from '@ngrx/store';
import { User, Article, Comment } from '../domain';

export interface State {
    quote: fromQuote.State;
    auth: User;//用户的信息
    user: User;//文章作者的信息

    articleDetail: Article;
    articleList: Article[];
    commentList: Comment[]
    // comment: Comment
};

const reducers = {
    quote: fromQuote.reducer,
    auth: fromAuth.reducer,
    user: fromUser.reducer,

    articleList: fromArticleList.reducer,
    articleDetail: fromArticleDetail.reducer,
    commentList: fromCommentList.reducer,
    // comment: fromComment.reducer,
}

export const getQuoteState = (state: State) => state.quote;
export const getAuthState = (state: State) => state.auth;
export const getUserState = (state: State) => state.user;

export const getAuthCardState = (state: State) => state.auth;
export const getArticleListState = (state: State) => state.articleList;
export const getArticleDetailState = (state: State) => state.articleDetail;
// export const getLikeState = (state: State) => state.like;
// export const getCommentState = (state: State) => state.comment;
export const getCommentListState = (state: State) => state.commentList;
export const getQuote = createSelector(getQuoteState, fromQuote.getQuote);

@NgModule({
    imports: [
        StoreModule.forRoot(reducers),
        StoreRouterConnectingModule.forRoot(),
        StoreDevtoolsModule.instrument(),
    ],
})
export class AppStoreModule {}