
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import * as actions from '../actions/navigation.action';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { NavigationService } from '../services/navigation.service';


@Injectable()
export class NavigationEffects {

    @Effect()
    remmend$: Observable<Action> = this.actions$.pipe(
        ofType(actions.ActionTypes.RECOMMEND_NAVIGATION),
        mergeMap(_ => this.service$.get_remmend().pipe(
            map(v => new actions.RemmendNavSuccessAction(v.data)),
            catchError(err => of(new actions.RemmendNavFailAction(err)))
        ))
    )
        
    constructor(private actions$: Actions, private service$: NavigationService){}
}