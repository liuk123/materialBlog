import { Action } from '@ngrx/store'
import { Label } from '../domain';

export enum ActionTypes {
    //标签
    LABEL = '[Label] Label article',
    LABEL_SCCESS = '[Label] Label success',
    LABEL_FAIL = '[Label] Label fail',
};

//标签
export class LabelAction implements Action {
    readonly type = ActionTypes.LABEL;

    constructor(public payload: null) { }
}
export class LabelSuccessAction implements Action {
    readonly type = ActionTypes.LABEL_SCCESS;

    constructor(public payload: Label[]) { }
}
export class LabelFailAction implements Action {
    readonly type = ActionTypes.LABEL_FAIL;

    constructor(public payload: null) { }
}


export type Actions
    = LabelAction
    | LabelSuccessAction
    | LabelFailAction
