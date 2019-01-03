import { Meta } from "./user";

export interface Comment {
  id?: string;
  title: string;
  from: string;
  reply: Reply;
  content: string;
  meta: Meta;
}

export interface Reply {
  from: string;
  to: string;
  content: string;
}