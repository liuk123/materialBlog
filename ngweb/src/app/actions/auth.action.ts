import { Action } from '@ngrx/store'
import { User } from '../domain'

export enum ActionTypes {
    LOGIN = '[Auth] Login',
    LOGIN_SCCESS = '[Auth] Login success',
    LOGIN_FAIL = '[Auth] Login fail',

    REGISTER = '[Auth] Register',
    REGISTER_SCCESS = '[Auth] Register success',
    REGISTER_FAIL = '[Auth] Register fail',
    
    LOGOUT = '[Auth] Logout',

    USERCARD = '[UserCard] user-card',
    USERCARD_SCCESS = '[UserCard] user-card success',
    USERCARD_FAIL = '[UserCard] user-card fail',

    USERCENTER = '[UserCenter] user-center',
    USERCENTER_SCCESS = '[UserCenter] user-center success',
    USERCENTER_FAIL = '[UserCenter] user-center fail',
};

//登录注册退出
export class LoginAction implements Action {
    readonly type = ActionTypes.LOGIN;

    constructor(public payload: {userName: string; password: string}) { }
}
export class LoginSuccessAction implements Action {
    readonly type = ActionTypes.LOGIN_SCCESS;

    constructor(public payload: User) { }
}
export class LoginFailAction implements Action {
    readonly type = ActionTypes.LOGIN_FAIL;

    constructor(public payload: null) { }
}

export class RegisterAction implements Action {
    readonly type = ActionTypes.REGISTER;

    constructor(public payload: User) { }
}
export class RegisterSuccessAction implements Action {
    readonly type = ActionTypes.REGISTER_SCCESS;

    constructor(public payload: User) { }
}
export class RegisterFailAction implements Action {
    readonly type = ActionTypes.REGISTER_FAIL;

    constructor(public payload: null) { }
}

export class LogoutAction implements Action {
    readonly type = ActionTypes.LOGOUT;

    constructor(public payload: null) { }
}

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

    constructor(public payload: string) { }
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
    = LoginAction
    | LoginSuccessAction
    | LoginFailAction
    | RegisterSuccessAction
    | RegisterFailAction
    | RegisterSuccessAction
    | LogoutAction

    | UserCardAction
    | UserCardSuccessAction
    | UserCardFailAction

    | UserCenterAction
    | UserCenterSuccessAction
    | UserCenterFailAction

