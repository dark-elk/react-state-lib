import StateProvider from './Components/Provider';
import StateContext from './Components/Context';
import combineReducers from './utils/combineReducers';
import useSelector from './hooks/useSelector';
import useDispatch from './hooks/useDispatch';

export interface Action<T = any> {
  type: T;
}

export interface AnyAction extends Action {
  [payload: string]: any;
}

export {
  StateProvider,
  StateContext,
  combineReducers,
  useSelector,
  useDispatch
};
