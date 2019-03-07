import { Meta } from "./user";

export interface Navigation {
  _id?: string;
  title: string;
  data: NavigationItem[];
  meta?: Meta;
}

export interface NavigationItem {
  _id?: string;
  name: string;
  desc: string;
  url: string;
  ico: string;
  visitName?: number;
}
