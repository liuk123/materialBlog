import { Action } from '@ngrx/store';
import { Quote } from '../domain';


export enum ActionTypes {
    LOAD = '[Quote] Load',
    LOAD_SCCESS = '[Quote] Load success',
    LOAD_FAIL = '[Quote] Load fail'
};


export class LoadAction implements Action {
    readonly type = ActionTypes.LOAD;

    constructor(public payload: null) { }
}
export class LoadSuccessAction implements Action {
    readonly type = ActionTypes.LOAD_SCCESS;

    constructor(public payload: Quote) { }
}
export class LoadFailAction implements Action {
    readonly type = ActionTypes.LOAD_FAIL;

    constructor(public payload: string) { }
}


export type Actions
    = LoadAction
    | LoadSuccessAction
    | LoadFailAction
