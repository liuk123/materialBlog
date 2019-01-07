import { Meta } from "./user";

export interface Comment {
  _id?: string;
  title?: string;
  from?: User;
  reply?: Reply;
  content?: string;
  meta?: Meta;
}

export interface Reply {
  from: User;
  to: User;
  content: string;
}
interface User {
  userName?: string,
  _id: string
}