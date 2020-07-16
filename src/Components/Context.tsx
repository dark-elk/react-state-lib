import { createContext } from 'use-context-selector';

interface IContext {
  state: any;
  dispatch: any;
}

export default createContext<IContext>({
  state: {},
  dispatch: () => {}
});
