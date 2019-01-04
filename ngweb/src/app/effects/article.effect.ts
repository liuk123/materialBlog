
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import * as actions from '../actions/article.action';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { ArticleService } from '../services/article.service';

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
            map(v => new actions.DeleteArticleSuccessAction(null)),
            catchError(err => of(new actions.DeleteArticleFailAction(err)))
        ))
    )

    @Effect()
    like$: Observable<Action> = this.actions$.pipe(
        ofType(actions.ActionTypes.LIKE),
        mergeMap((u:actions.LikeAction) => this.service$.like(u.payload).pipe(
            map(v => new actions.LikeSuccessAction(null)),
            catchError(err => of(new actions.LikeFailAction(err)))
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
    constructor(private actions$: Actions, private service$: ArticleService){}
}