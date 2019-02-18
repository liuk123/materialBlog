
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import * as actions from '../actions/label.action';
import { LabelService } from '../services/label.service';
import { catchError, map, mergeMap } from 'rxjs/operators';

@Injectable()
export class LabelEffects {

    @Effect()
    quote$: Observable<Action> = this.actions$.pipe(
        ofType(actions.ActionTypes.LABEL),
        mergeMap(_ => this.service$.label().pipe(
            map(q => new actions.LabelSuccessAction(q.data)),
            catchError(err => of(new actions.LabelFailAction(err)))
        ))
    )
        
    constructor(private actions$: Actions, private service$: LabelService){}
}