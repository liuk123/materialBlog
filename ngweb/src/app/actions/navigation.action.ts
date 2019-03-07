import { Action } from '@ngrx/store';
import { Navigation } from '../domain';


export enum ActionTypes {
    RECOMMEND_NAVIGATION = '[Nav] Recommend_navigation',
    RECOMMEND_NAVIGATION_SCCUESS = '[Nav] Recommend_navigation success',
    RECOMMEND_NAVIGATION_FAIL = '[Nav] Recommend_navigation fail'
};


export class RemmendNavAction implements Action {
    readonly type = ActionTypes.RECOMMEND_NAVIGATION;

    constructor(public payload: null) { }
}
export class RemmendNavSuccessAction implements Action {
    readonly type = ActionTypes.RECOMMEND_NAVIGATION_SCCUESS;

    constructor(public payload: Navigation[]) { }
}
export class RemmendNavFailAction implements Action {
    readonly type = ActionTypes.RECOMMEND_NAVIGATION_FAIL;

    constructor(public payload: null) { }
}


export type Actions
    = RemmendNavAction
    | RemmendNavSuccessAction
    | RemmendNavFailAction
