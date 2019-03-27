import { Action } from '@ngrx/store'
import { Article, Comment, ArticleListParam } from '../domain'

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
    //评论
    COMMENT = '[Comment] Comment',
    COMMENT_SCCESS = '[Comment] Comment success',
    COMMENT_FAIL = '[Comment] Comment fail',
    //喜欢
    LIKE = '[Article] Like',
    LIKE_SCCESS = '[Article] Like success',
    LIKE_FAIL = '[Article] Like fail',
    //收藏
    COLLECT_ARTICLE = '[Collect] Collect article',
    COLLECT_ARTICLE_SCCESS = '[Collect] Collect article success',
    COLLECT_ARTICLE_FAIL = '[Collect] Collect article fail',

   
    //关注
    COLLECT_USER = '[Collect] Collect user',
    COLLECT_USER_SCCESS = '[Collect] Collect user success',
    COLLECT_USER_FAIL = '[Collect] Collect user fail',
    
    //获取列表
    ARTICLE_LIST = '[Article] Article list',
    ARTICLE_LIST_SCCESS = '[Article] Article list success',
    ARTICLE_LIST_FAIL = '[Article] Article list fail',
    //获取详情
    ARTICLE_DETAIL = '[Article] Article detail',
    ARTICLE_DETAIL_SCCESS = '[Article] Article detail success',
    ARTICLE_DETAIL_FAIL = '[Article] Article detail fail',
    //获取评论
    COMMENT_LIST = '[Comment] Comment list',
    COMMENT_LIST_SCCESS = '[Comment] Comment list success',
    COMMENT_LIST_FAIL = '[Comment] Comment list fail',
   

};

//获取列表
export class ArticleListAction implements Action {
    readonly type = ActionTypes.ARTICLE_LIST;

    constructor(public payload: ArticleListParam) { }
}
export class ArticleListSuccessAction implements Action {
    readonly type = ActionTypes.ARTICLE_LIST_SCCESS;

    constructor(public payload: Article[]) { }
}
export class ArticleListFailAction implements Action {
    readonly type = ActionTypes.ARTICLE_LIST_FAIL;

    constructor(public payload: null) { }
}
//获取详情请
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
//新建
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
//编辑
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
//删除
export class DeleteArticleAction implements Action {
    readonly type = ActionTypes.DELETE_ARTICLE;

    constructor(public payload: {id: string, category: string}) { }
}
export class DeleteArticleSuccessAction implements Action {
    readonly type = ActionTypes.DELETE_ARTICLE_SCCESS;

    constructor(public payload: boolean) { }
}
export class DeleteArticleFailAction implements Action {
    readonly type = ActionTypes.DELETE_ARTICLE_FAIL;

    constructor(public payload: null) { }
}
//喜欢
export class LikeAction implements Action {
    readonly type = ActionTypes.LIKE;

    constructor(public payload: { articleId: string, likeId: string, liked: number}) { }
}
export class LikeSuccessAction implements Action {
    readonly type = ActionTypes.LIKE_SCCESS;

    constructor(public payload: number) { }
}
export class LikeFailAction implements Action {
    readonly type = ActionTypes.LIKE_FAIL;

    constructor(public payload: null) { }
}
//收藏
export class CollectArticleAction implements Action {
    readonly type = ActionTypes.COLLECT_ARTICLE;

    constructor(public payload: { id: string, isCollected: boolean }) { }
}
export class CollectArticleSuccessAction implements Action {
    readonly type = ActionTypes.COLLECT_ARTICLE_SCCESS;

    constructor(public payload: number) { }
}
export class CollectArticleFailAction implements Action {
    readonly type = ActionTypes.COLLECT_ARTICLE_FAIL;

    constructor(public payload: null) { }
}
//关注
export class CollectUserAction implements Action {
    readonly type = ActionTypes.COLLECT_USER;

    constructor(public payload: { id: string, isCollected: boolean }) { }
}
export class CollectUserSuccessAction implements Action {
    readonly type = ActionTypes.COLLECT_USER_SCCESS;

    constructor(public payload: number) { }
}
export class CollectUserFailAction implements Action {
    readonly type = ActionTypes.COLLECT_USER_FAIL;

    constructor(public payload: null) { }
}
//发表评论
export class CommentAction implements Action {
    readonly type = ActionTypes.COMMENT;

    constructor(public payload: Comment) { }
}
export class CommentSuccessAction implements Action {
    readonly type = ActionTypes.COMMENT_SCCESS;

    constructor(public payload: Comment) { }
}
export class CommentFailAction implements Action {
    readonly type = ActionTypes.COMMENT_FAIL;

    constructor(public payload: null) { }
}
//获取评论
export class CommentListAction implements Action {
    readonly type = ActionTypes.COMMENT_LIST;

    constructor(public payload: string) { }
}
export class CommentListSuccessAction implements Action {
    readonly type = ActionTypes.COMMENT_LIST_SCCESS;

    constructor(public payload: Comment[]) { }
}
export class CommentListFailAction implements Action {
    readonly type = ActionTypes.COMMENT_LIST_FAIL;

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

    | CommentAction
    | CommentSuccessAction
    | CommentFailAction

    | CommentListAction
    | CommentListSuccessAction
    | CommentListFailAction

    | CollectArticleAction
    | CollectArticleSuccessAction
    | CollectArticleFailAction

    | CollectUserAction
    | CollectUserSuccessAction
    | CollectUserFailAction
