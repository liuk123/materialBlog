import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import * as fromQuote from './quote.reducer';
import * as fromAuth from './auth.reducer';
import * as fromUser from './user.reducer';
import * as fromArticle from './article.reducer';
import * as fromArticleDetail from './article-detail.reducer';
import * as fromArticleList from './article-list.reducer';
//添加缓存
import { createSelector } from 'reselect';
import { User, Article, articleDetail } from '../domain';

export interface State {
    quote: fromQuote.State;
    auth: User;//用户登录退出注册
    user: User;//用户信息
    article: Article;
    articleDetail: articleDetail;
    articleList: Article[];
};

const reducers = {
    quote: fromQuote.reducer,
    auth: fromAuth.reducer,
    user: fromUser.reducer,
    article: fromArticle.reducer,
    articleList: fromArticleList.reducer,
    articleDetail: fromArticleDetail.reducer,
    
}

export const getQuoteState = (state: State) => state.quote;
export const getAuthState = (state: State) => state.auth;
export const getUserState = (state: State) => state.user;
export const getArticleState = (state: State) => state.article;
export const getArticleListState = (state: State) => state.articleList;
export const getArticleDetailState = (state: State) => state.articleDetail;

export const getQuote = createSelector(getQuoteState, fromQuote.getQuote);

@NgModule({
    imports: [
        StoreModule.forRoot(reducers),
        StoreRouterConnectingModule.forRoot(),
        StoreDevtoolsModule.instrument(),
    ],
})
export class AppStoreModule {}