import { AnyAction, Action } from 'react-state-lib';

export enum ACTIONS {
  LOGIN = 'LOGIN',
  LOGOUT = 'LOGOUT'
}

interface IUserLogin {
  name?: string,
  email?: string
}

export const userLoginAction = (payload: IUserLogin): AnyAction => ({
  type: ACTIONS.LOGIN,
  payload
})

export const userLogoutAction = (): Action => ({ type: ACTIONS.LOGOUT })
