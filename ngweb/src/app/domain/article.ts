import { Meta } from "./user";

export interface Article {
  _id?: string;
  title: string;
  abstract?: string;
  author: string;
  category: string;
  label?:[];
  like: Like;
  commentNum: number;
  visitNum: number;
  content: string;
  meta?: Meta;
}


export interface Like {
  likeNum:number;
  likeUser:string[];
}

// export interface articleDetail {
//   articleResult: Article
//   commentResult: any
//   liked: number
// }
