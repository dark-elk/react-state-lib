import { AnyAction } from 'react-state-lib';

export enum ACTIONS {
  POST = 'POST',
  DESTROY = 'DESTROY'
}

interface IPostArticleAction {
  title?: string;
  text?: string;
  author?: string;
}

export const postArticleAction = (payload: IPostArticleAction): AnyAction => ({
  type: ACTIONS.POST,
  payload
})

export const destroyArticleAction = (id: number): AnyAction => ({
  type: ACTIONS.DESTROY,
  id
})
