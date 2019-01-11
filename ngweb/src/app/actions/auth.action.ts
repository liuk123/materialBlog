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

    AUTHCARD = '[AuthCard] auth-card',
    AUTHCARD_SCCESS = '[AuthCard] auth-card success',
    AUTHCARD_FAIL = '[AuthCard] auth-card fail',
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

//用户信息
export class AuthCardAction implements Action {
    readonly type = ActionTypes.AUTHCARD;

    constructor(public payload: string) { }
}
export class AuthCardSuccessAction implements Action {
    readonly type = ActionTypes.AUTHCARD_SCCESS;

    constructor(public payload: User) { }
}
export class AuthCardFailAction implements Action {
    readonly type = ActionTypes.AUTHCARD_FAIL;

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

    | AuthCardAction
    | AuthCardSuccessAction
    | AuthCardFailAction

