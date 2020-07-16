import { IBlog, IState, IUser } from './types';

export const getUser = (state: IState): IUser => state.user;
export const getUserName = (state: IState): string => getUser(state).name;
export const getBlogArticles = (state: IState): IBlog => state.blog;
