
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import * as actions from '../actions/quote.action';
import { QuoteService } from '../services/quote.service';
import { catchError, map, mergeMap } from 'rxjs/operators';

@Injectable()
export class QuoteEffects {

    @Effect()
    quote$: Observable<Action> = this.actions$.pipe(
        ofType(actions.ActionTypes.LOAD),
        mergeMap(_ => this.service$.getAuote().pipe(
            map(q => new actions.LoadSuccessAction(q)),
            catchError(err => of(new actions.LoadFailAction(err)))
        ))
    )
        
    constructor(private actions$: Actions, private service$: QuoteService){}
}