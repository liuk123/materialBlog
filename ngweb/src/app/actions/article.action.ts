import { Action } from '@ngrx/store'
import { Article, Result } from '../domain'

export enum ActionTypes {
    //编辑
    EDITE_ARTICLE = '[Article] Edite article',
    EDITE_ARTICLE_SCCESS = '[Article] Edite article success',
    EDITE_ARTICLE_FAIL = '[Article] Edite article fail',
    //新建
    CREATE_ARTICLE = '[Article] Create article',
    CREATE_ARTICLE_SCCESS = '[Article] Create article success',
    CREATE_ARTICLE_FAIL = '[Article] Create article fail',
    //删除
    DELETE_ARTICLE = '[Article] delete article',
    DELETE_ARTICLE_SCCESS = '[Article] delete article success',
    DELETE_ARTICLE_FAIL = '[Article] delete article fail',
    //喜欢
    LIKE = '[Article] Like',
    LIKE_SCCESS = '[Article] Like success',
    LIKE_FAIL = '[Article] Like fail',
    //获取列表
    ARTICLE_LIST = '[Article] Article list',
    ARTICLE_LIST_SCCESS = '[Article] Article list success',
    ARTICLE_LIST_FAIL = '[Article] Article list fail',
    //获取详情
    ARTICLE_DETAIL = '[Article] Article list',
    ARTICLE_DETAIL_SCCESS = '[Article] Article list success',
    ARTICLE_DETAIL_FAIL = '[Article] Article list fail',

};

export class EditeArticleAction implements Action {
    readonly type = ActionTypes.EDITE_ARTICLE;

    constructor(public payload: Article) { }
}
export class EditeArticleSuccessAction implements Action {
    readonly type = ActionTypes.EDITE_ARTICLE_SCCESS;

    constructor(public payload: null) { }
}
export class EditeArticleFailAction implements Action {
    readonly type = ActionTypes.EDITE_ARTICLE_FAIL;

    constructor(public payload: null) { }
}

export class ArticleListAction implements Action {
    readonly type = ActionTypes.ARTICLE_LIST;

    constructor(public payload: string) { }
}
export class ArticleListSuccessAction implements Action {
    readonly type = ActionTypes.ARTICLE_LIST_SCCESS;

    constructor(public payload: Article[]) { }
}
export class ArticleListFailAction implements Action {
    readonly type = ActionTypes.ARTICLE_LIST_FAIL;

    constructor(public payload: null) { }
}

export class ArticleDetailAction implements Action {
    readonly type = ActionTypes.ARTICLE_DETAIL;

    constructor(public payload: string) { }
}
export class ArticleDetailSuccessAction implements Action {
    readonly type = ActionTypes.ARTICLE_DETAIL_SCCESS;

    constructor(public payload: Article) { }
}
export class ArticleDetailFailAction implements Action {
    readonly type = ActionTypes.ARTICLE_DETAIL_FAIL;

    constructor(public payload: null) { }
}

export class CreateArticleAction implements Action {
    readonly type = ActionTypes.CREATE_ARTICLE;

    constructor(public payload: Article) { }
}
export class CreateArticleSuccessAction implements Action {
    readonly type = ActionTypes.CREATE_ARTICLE_SCCESS;

    constructor(public payload: null) { }
}
export class CreateArticleFailAction implements Action {
    readonly type = ActionTypes.CREATE_ARTICLE_FAIL;

    constructor(public payload: null) { }
}

export class DeleteArticleAction implements Action {
    readonly type = ActionTypes.DELETE_ARTICLE;

    constructor(public payload: string) { }
}
export class DeleteArticleSuccessAction implements Action {
    readonly type = ActionTypes.DELETE_ARTICLE_SCCESS;

    constructor(public payload: null) { }
}
export class DeleteArticleFailAction implements Action {
    readonly type = ActionTypes.DELETE_ARTICLE_FAIL;

    constructor(public payload: null) { }
}

export class LikeAction implements Action {
    readonly type = ActionTypes.LIKE;

    constructor(public payload: string) { }
}
export class LikeSuccessAction implements Action {
    readonly type = ActionTypes.LIKE_SCCESS;

    constructor(public payload: null) { }
}
export class LikeFailAction implements Action {
    readonly type = ActionTypes.LIKE_FAIL;

    constructor(public payload: null) { }
}

export type Actions
    = EditeArticleAction
    | EditeArticleSuccessAction
    | EditeArticleFailAction

    | ArticleListAction
    | ArticleListSuccessAction
    | ArticleListFailAction

    | ArticleDetailAction
    | ArticleDetailSuccessAction
    | ArticleDetailFailAction
    
    | CreateArticleAction
    | CreateArticleSuccessAction
    | CreateArticleFailAction

    | DeleteArticleAction
    | DeleteArticleSuccessAction
    | DeleteArticleFailAction

    | LikeAction
    | LikeSuccessAction
    | LikeFailAction
