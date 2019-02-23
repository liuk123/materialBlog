export interface User {
  _id?: string;
  userName?: string;
  password?: string;
  introduce?: string;
  avatar?: string;
  categories?: Category[];
  collect?: string[],
  collectUser?:string[],
  theme?:string,
  label?: string[];
  role?: number;
  phone?: number;
  meta?: Meta;
}
export interface Category {
  title: string;
  number: number;
}

export interface Meta {
  createAt:Date;
  updateAt:Date;
}