import React, { useReducer } from 'react';
import { StateContext } from '..';

interface IProvider {
  reducer: any;
  initialState: object;
  children: React.ReactElement | React.ReactNode;
}

const Provider: React.FC<IProvider> = ({ reducer, initialState, children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StateContext.Provider value={{ dispatch, state }}>
      {children}
    </StateContext.Provider>
  );
};

export default Provider;
