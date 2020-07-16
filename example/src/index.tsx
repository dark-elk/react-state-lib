import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { initialState, reducer } from './store/reducer';
import { StateProvider } from 'react-state-lib';

ReactDOM.render(
  <StateProvider {...{ reducer, initialState }}>
    <App />
  </StateProvider>,
  document.getElementById('root')
);
