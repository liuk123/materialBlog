import { Type } from '@angular/core';

export * from './quote';
export * from './article';
export * from './comment';
export * from './user';
export * from './navigation';
export * from './adcomponent';

export interface Result<T>{
    code: number;
    msg: string;
    data?:T;
}
export interface Label{
    name:string,
    items:string[]
}
export class AdItem {
    constructor(public component: Type<any>, public data: any) {}
}