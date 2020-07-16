import { StateContext } from '..';
import { useContextSelector } from 'use-context-selector';

const useSelector = (selector: (state: any) => void): any => {
  const state = useContextSelector(StateContext, (ctx) => ctx.state);

  return selector(state);
};

export default useSelector;
