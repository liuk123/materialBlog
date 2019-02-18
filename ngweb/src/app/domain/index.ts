export * from './quote';
export * from './article';
export * from './comment';
export * from './user';

export interface Result<T>{
    code: number;
    msg: string;
    data?:T;
}
export interface Label{
    name:string,
    items:string[]
}