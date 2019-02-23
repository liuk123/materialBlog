
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import * as actions from '../actions/article.action';
import * as authActions from '../actions/auth.action';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { ArticleService } from '../services/article.service';
import * as RouterActions from '../actions/router.action';
import { MatSnackBar } from '@angular/material';


@Injectable()
export class ArticleEffects {

    @Effect()
    update$: Observable<Action> = this.actions$.pipe(
        ofType(actions.ActionTypes.EDITE_ARTICLE),
        mergeMap((u:actions.EditeArticleAction) => this.service$.update(u.payload).pipe(
            map(v => new actions.EditeArticleSuccessAction(null)),
            catchError(err => of(new actions.EditeArticleFailAction(err)))
        ))
    )

    @Effect()
    create$: Observable<Action> = this.actions$.pipe(
        ofType(actions.ActionTypes.CREATE_ARTICLE),
        mergeMap((u:actions.CreateArticleAction) => this.service$.create(u.payload).pipe(
            map(v => new actions.CreateArticleSuccessAction(null)),
            catchError(err => of(new actions.CreateArticleFailAction(err)))
        ))
    )

    @Effect()
    delete$: Observable<Action> = this.actions$.pipe(
        ofType(actions.ActionTypes.DELETE_ARTICLE),
        mergeMap((u:actions.DeleteArticleAction) => this.service$.delete(u.payload).pipe(
            map(v => new actions.DeleteArticleSuccessAction(true)),
            catchError(err => of(new actions.DeleteArticleFailAction(err)))
        ))
    )

    @Effect()
    like$: Observable<Action> = this.actions$.pipe(
        ofType(actions.ActionTypes.LIKE),
        mergeMap((u:actions.LikeAction) => this.service$.like(u.payload).pipe(
            map(v => {
                this.snackBar.open(v.msg, '关闭', {duration: 4000})
                return new actions.LikeSuccessAction(v.data)}),
            catchError(err => of(new actions.LikeFailAction(err)))
        ))
    )
    @Effect()
    collectArticle$: Observable<Action> = this.actions$.pipe(
        ofType(actions.ActionTypes.COLLECT_ARTICLE),
        mergeMap((u:actions.CollectArticleSuccessAction) => this.service$.collectArticle(u.payload).pipe(
            map(v => {
                this.snackBar.open(v.msg, '关闭', {duration: 4000})
                return new authActions.AuthCardAction('')}),
            catchError(err => of(new actions.CollectArticleFailAction(err)))
        ))
    )

    @Effect()
    collectUser$: Observable<Action> = this.actions$.pipe(
        ofType(actions.ActionTypes.COLLECT_USER),
        mergeMap((u:actions.CollectUserSuccessAction) => this.service$.collectUser(u.payload).pipe(
            map(v => {
                this.snackBar.open(v.msg, '关闭', {duration: 4000})
                return new authActions.AuthCardAction('')}),
            catchError(err => of(new actions.CollectUserFailAction(err)))
        ))
    )


    @Effect()
    get_list$: Observable<Action> = this.actions$.pipe(
        ofType(actions.ActionTypes.ARTICLE_LIST),
        mergeMap((u:actions.ArticleListAction) => this.service$.get_list(u.payload).pipe(
            map(v => new actions.ArticleListSuccessAction(v.data)),
            catchError(err => of(new actions.ArticleListFailAction(err)))
        ))
    )

    @Effect()
    get_detail$: Observable<Action> = this.actions$.pipe(
        ofType(actions.ActionTypes.ARTICLE_DETAIL),
        mergeMap((u:actions.ArticleDetailAction) => this.service$.get_detail(u.payload).pipe(
            map(v => new actions.ArticleDetailSuccessAction(v.data)),
            catchError(err => of(new actions.ArticleDetailFailAction(err)))
        ))
    )

    @Effect()
    get_comment$: Observable<Action> = this.actions$.pipe(
        ofType(actions.ActionTypes.COMMENT_LIST),
        mergeMap((u:actions.CommentListAction) => this.service$.get_comment(u.payload).pipe(
            map(v => new actions.CommentListSuccessAction(v.data)),
            catchError(err => of(new actions.CommentListFailAction(err)))
        ))
    )
    
    @Effect()
    reply$: Observable<Action> = this.actions$.pipe(
        ofType(actions.ActionTypes.COMMENT),
        mergeMap((u:actions.CommentAction) => this.service$.reply(u.payload).pipe(
            map(v => new actions.CommentSuccessAction(v.data)),
            catchError(err => of(new actions.CommentFailAction(err)))
        ))
    )

    @Effect()
    updateAndNavigate$: Observable<Action> = this.actions$.pipe(
        ofType(actions.ActionTypes.EDITE_ARTICLE_SCCESS),
        map(_ => new RouterActions.Back())
    )

    @Effect()
    createAndNavigate$: Observable<Action> = this.actions$.pipe(
        ofType(actions.ActionTypes.CREATE_ARTICLE_SCCESS),
        map(_ => new RouterActions.Go({
            path: ['/homepage'],
            query: { page: 1 },
            extras: { replaceUrl: false }
        }))
    )
    constructor(private actions$: Actions, private service$: ArticleService, private snackBar: MatSnackBar){}
}