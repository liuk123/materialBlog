
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import * as actions from '../actions/auth.action';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { UserService } from '../services/user.service';

@Injectable()
export class UserEffects {

    @Effect()
    userCard$: Observable<Action> = this.actions$.pipe(
        ofType(actions.ActionTypes.USERCARD),
        mergeMap((u:actions.UserCardAction) => this.service$.user_card(u.payload).pipe(
            map(user => new actions.UserCardSuccessAction(user.data)),
            catchError(err => of(new actions.UserCardFailAction(err)))
        ))
    )

    @Effect()
    authCard$: Observable<Action> = this.actions$.pipe(
        ofType(actions.ActionTypes.AUTHCARD),
        mergeMap((u:actions.AuthCardAction) => this.service$.user_card(u.payload).pipe(
            map(user => new actions.AuthCardSuccessAction(user.data)),
            catchError(err => of(new actions.AuthCardFailAction(err)))
        ))
    )

    @Effect()
    updateAuth$: Observable<Action> = this.actions$.pipe(
        ofType(actions.ActionTypes.UPDATE_AUTH),
        mergeMap((u:actions.UpdateAuthAction) => this.service$.update_auth(u.payload).pipe(
            map(user => new actions.UpdateAuthSuccessAction(user.data)),
            catchError(err => of(new actions.UpdateAuthFailAction(err)))
        ))
    )

    @Effect()
    delCategory$: Observable<Action> = this.actions$.pipe(
        ofType(actions.ActionTypes.DEL_CATEGORY),
        mergeMap((u:actions.DelCategoryAction) => this.service$.del_category(u.payload).pipe(
            map(user => new actions.DelCategorySuccessAction(user.data)),
            catchError(err => of(new actions.DelCategoryFailAction(err)))
        ))
    )
    constructor(private actions$: Actions, private service$: UserService){}
}