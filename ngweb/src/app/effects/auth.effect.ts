
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import * as actions from '../actions/auth.action';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';
import * as RouterActions from '../actions/router.action';

@Injectable()
export class AuthEffects {

    @Effect()
    login$: Observable<Action> = this.actions$.pipe(
        ofType(actions.ActionTypes.LOGIN),
        mergeMap((u:actions.LoginAction) => this.service$.login(u.payload).pipe(
            map(auth => new actions.LoginSuccessAction(auth.data)),
            catchError(err => of(new actions.LoginFailAction(err)))
        ))
    )

    @Effect()
    register$: Observable<Action> = this.actions$.pipe(
        ofType(actions.ActionTypes.REGISTER),
        mergeMap((u:actions.RegisterAction) => this.service$.register(u.payload).pipe(
            map(auth => new actions.RegisterSuccessAction(auth.data)),
            catchError(err => of(new actions.RegisterFailAction(err)))
        ))
    )

    @Effect()
    logout$: Observable<Action> = this.actions$.pipe(
        ofType(actions.ActionTypes.LOGOUT),
        mergeMap((u:actions.LogoutAction) => this.service$.logout(u.payload).pipe(
            map(u => {
                new RouterActions.Go({
                    path: ['/login'],
                    query: { page: 1 },
                    extras: { replaceUrl: false }
                })
                return new actions.LogoutSuccessAction(null)
            }),
            catchError(err => of(new actions.LogoutFailAction(err)))
        ))
        
    )
    
    @Effect()
    loginAndNavigate$: Observable<Action> = this.actions$.pipe(
        ofType(actions.ActionTypes.LOGIN_SCCESS),
        map(_ => new RouterActions.Go({
            path: ['/'],
            query: { page: 1 },
            extras: { replaceUrl: false }
        }))
    )

    @Effect()
    registerAndNavigate$: Observable<Action> = this.actions$.pipe(
        ofType(actions.ActionTypes.REGISTER_SCCESS),
        map(_ => new RouterActions.Go({
            path: ['/'],
            query: { page: 1 },
            extras: { replaceUrl: false }
        }))
    )
    constructor(private actions$: Actions, private service$: AuthService){}
}