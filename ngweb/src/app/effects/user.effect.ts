
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
        mergeMap((u:actions.UserCardAction) => this.service$.userCard(u.payload).pipe(
            map(user => new actions.UserCardSuccessAction(user.data)),
            catchError(err => of(new actions.UserCardFailAction(err)))
        ))
    )

    @Effect()
    authCard$: Observable<Action> = this.actions$.pipe(
        ofType(actions.ActionTypes.AUTHCARD),
        mergeMap((u:actions.AuthCardAction) => this.service$.userCard(u.payload).pipe(
            map(user => new actions.AuthCardSuccessAction(user.data)),
            catchError(err => of(new actions.AuthCardFailAction(err)))
        ))
    )
    constructor(private actions$: Actions, private service$: UserService){}
}