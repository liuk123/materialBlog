import { Action } from '@ngrx/store';
import { Article } from '../domain';


export enum ActionTypes {
    NOTICE = '[Notice] Notice',
    NOTICE_SCCESS = '[Notice] Notice success',
    NOTICE_FAIL = '[Notice] Notice fail'
};


export class NoticeAction implements Action {
    readonly type = ActionTypes.NOTICE;

    constructor(public payload: null) { }
}
export class NoticeSuccessAction implements Action {
    readonly type = ActionTypes.NOTICE_SCCESS;

    constructor(public payload: Article[]) { }
}
export class NoticeFailAction implements Action {
    readonly type = ActionTypes.NOTICE_FAIL;

    constructor(public payload: null) { }
}


export type Actions
    = NoticeAction
    | NoticeSuccessAction
    | NoticeFailAction
