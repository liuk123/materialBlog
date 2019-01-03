export interface User {
  id?: string;
  userName: string;
  password?: string;
  introduce?: string;
  categories?: Category[];
  label?: [];
  role: number;
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