import { ACTIONS } from './actions';
import { IArticle } from '../../store/types';

export const initialState = [];

export const reducer = (state: any, action: any) => {
  switch (action.type) {
    case ACTIONS.POST:
      return [
        {
          id: Math.random(),
          title: action.payload.title,
          text: action.payload.text,
          author: action.payload.author,
        },
        ...state
      ]
    case ACTIONS.DESTROY:
      return [
        ...state.filter((article: IArticle) => article.id !== action.id)
      ]
    default:
      return state
  }
}
