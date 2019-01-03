import { Action } from '@ngrx/store'
import { User, Result } from '../domain'

export enum ActionTypes {
    LOGIN = '[Auth] Login',
    LOGIN_SCCESS = '[Auth] Login success',
    LOGIN_FAIL = '[Auth] Login fail',
    REGISTER = '[Auth] Register',
    REGISTER_SCCESS = '[Auth] Register success',
    REGISTER_FAIL = '[Auth] Register fail',
    LOGOUT = '[Auth] Logout',
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

    constructor(public payload: string) { }
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

    constructor(public payload: string) { }
}

export class LogoutAction implements Action {
    readonly type = ActionTypes.LOGOUT;

    constructor(public payload: null) { }
}

export type Actions
    = LoginAction
    | LoginSuccessAction
    | LoginFailAction
    | RegisterSuccessAction
    | RegisterFailAction
    | RegisterSuccessAction
    | LogoutAction
