import { ACTIONS } from './actions';

export const initialState = {
  authed: false,
  name: '',
  email: '',
}

export const reducer = (state: any, action: any) => {
  switch (action.type) {
    case ACTIONS.LOGIN:
      return {
        ...state,
        ...action.payload,
        authed: true
      }
    case ACTIONS.LOGOUT:
      return {
        ...state,
        name: '',
        email: '',
        authed: false
      }
    default:
      return state
  }
}
