import { StateContext } from '..';
import { useContextSelector } from 'use-context-selector';

const useDispatch = () => {
  const dispatch = useContextSelector(StateContext, (ctx) => ctx.dispatch);

  return (action: any) => {
    if (typeof action === 'function') {
      action(dispatch);
    } else {
      dispatch(action);
    }
  };
};

export default useDispatch;
