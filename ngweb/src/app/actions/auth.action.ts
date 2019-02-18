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
    LOGOUT_SCCESS = '[Auth] Logout success',
    LOGOUT_FAIL = '[Auth] Logout fail',

    USERCARD = '[UserCard] user-card',
    USERCARD_SCCESS = '[UserCard] user-card success',
    USERCARD_FAIL = '[UserCard] user-card fail',

    USERLIST = '[UserList] user-list',
    USERLIST_SCCESS = '[UserList] user-list success',
    USERLIST_FAIL = '[UserList] user-list fail',

    AUTHCARD = '[AuthCard] auth-card',
    AUTHCARD_SCCESS = '[AuthCard] auth-card success',
    AUTHCARD_FAIL = '[AuthCard] auth-card fail',

    UPDATE_AUTH = '[Auth] update-auth',
    UPDATE_AUTH_SCCESS = '[Auth] update-auth success',
    UPDATE_AUTH_FAIL = '[Auth] update-auth fail',

    DEL_CATEGORY = '[Category] del_category',
    DEL_CATEGORY_SCCESS = '[Category] del_category success',
    DEL_CATEGORY_FAIL = '[Category] del_category fail',
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

    constructor(public payload: string) { }
}
export class LogoutSuccessAction implements Action {
    readonly type = ActionTypes.LOGOUT_SCCESS;

    constructor(public payload: null) { }
}
export class LogoutFailAction implements Action {
    readonly type = ActionTypes.LOGOUT_FAIL;

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
//用户列表信息
export class UserListAction implements Action {
    readonly type = ActionTypes.USERLIST;

    constructor(public payload: object) { }
}
export class UserListSuccessAction implements Action {
    readonly type = ActionTypes.USERLIST_SCCESS;

    constructor(public payload: User[]) { }
}
export class UserListFailAction implements Action {
    readonly type = ActionTypes.USERLIST_FAIL;

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

export class UpdateAuthAction implements Action {
    readonly type = ActionTypes.UPDATE_AUTH;

    constructor(public payload: User) { }
}
export class UpdateAuthSuccessAction implements Action {
    readonly type = ActionTypes.UPDATE_AUTH_SCCESS;

    constructor(public payload: User) { }
}
export class UpdateAuthFailAction implements Action {
    readonly type = ActionTypes.UPDATE_AUTH_FAIL;

    constructor(public payload: null) { }
}


export class DelCategoryAction implements Action {
    readonly type = ActionTypes.DEL_CATEGORY;

    constructor(public payload: string) { }
}
export class DelCategorySuccessAction implements Action {
    readonly type = ActionTypes.DEL_CATEGORY_SCCESS;

    constructor(public payload: User) { }
}
export class DelCategoryFailAction implements Action {
    readonly type = ActionTypes.DEL_CATEGORY_FAIL;

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
    | LogoutFailAction
    | LogoutSuccessAction

    | UserCardAction
    | UserCardSuccessAction
    | UserCardFailAction

    | AuthCardAction
    | AuthCardSuccessAction
    | AuthCardFailAction

    | UpdateAuthAction
    | UpdateAuthSuccessAction
    | UpdateAuthFailAction

    | DelCategoryAction
    | DelCategorySuccessAction
    | DelCategoryFailAction

    | UserListAction
    | UserListSuccessAction
    | UserListFailAction

