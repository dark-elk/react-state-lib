import * as user from '../Modules/User/reducer';
import * as blog from '../Modules/Blog/reducer';
import { combineReducers } from 'react-state-lib';

export const initialState = {
  user: user.initialState,
  blog: blog.initialState
};

export const reducer = combineReducers({
  user: user.reducer,
  blog: blog.reducer
});
