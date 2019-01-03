import { Action } from '@ngrx/store'
import { User, Result } from '../domain'

export enum ActionTypes {

    USERCARD = '[UserCard] user-card',
    USERCARD_SCCESS = '[UserCard] user-card success',
    USERCARD_FAIL = '[UserCard] user-card fail',
    USERCENTER = '[UserCenter] user-center',
    USERCENTER_SCCESS = '[UserCenter] user-center success',
    USERCENTER_FAIL = '[UserCenter] user-center fail',
};

//用户信息
export class UserCardAction implements Action {
    readonly type = ActionTypes.USERCARD;

    constructor(public payload: string) { }
}
export class UserCardSuccessAction implements Action {
    readonly type = ActionTypes.USERCARD_SCCESS;

    constructor(public payload: User) { }
}
export class UserCardFailAction implements Action {
    readonly type = ActionTypes.USERCARD_FAIL;

    constructor(public payload: string) { }
}

export class UserCenterAction implements Action {
    readonly type = ActionTypes.USERCENTER;

    constructor(public payload: null) { }
}
export class UserCenterSuccessAction implements Action {
    readonly type = ActionTypes.USERCENTER_SCCESS;

    constructor(public payload: User) { }
}
export class UserCenterFailAction implements Action {
    readonly type = ActionTypes.USERCENTER_FAIL;

    constructor(public payload: string) { }
}

export type Actions
    = UserCardAction
    | UserCardSuccessAction
    | UserCardFailAction

    | UserCenterAction
    | UserCenterSuccessAction
    | UserCenterFailAction
