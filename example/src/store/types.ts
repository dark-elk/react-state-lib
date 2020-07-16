export interface IUser {
  authed: boolean,
  name: string,
  email: string,
}

export interface IArticle {
  id: number;
  title: string;
  text: string;
  author: string;
}

export type IBlog = IArticle[];

export interface IState {
  user: IUser;
  blog: IBlog;
}
