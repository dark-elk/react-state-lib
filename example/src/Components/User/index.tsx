import React, { useRef } from 'react';
import { userLoginAction, userLogoutAction } from '../../Modules/User/actions';
import { IUser } from '../../store/types';

interface IUserForm {
  dispatch: any;
  user: IUser;
}

const User: React.FC<IUserForm> = ({
  dispatch,
  user: { authed, name, email }
}) => {
  const nameInputRef = useRef<HTMLInputElement>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);

  const handleLoginClick = () =>
    dispatch(userLoginAction({
      name: nameInputRef.current?.value,
      email: emailInputRef.current?.value
    }))

  const handleLogoutClick = () => dispatch(userLogoutAction())

  return (
    <div>
      {authed ? (
        <>
          Name: {name}
          <br />
          Email: {email}
          <br />
          <button onClick={handleLogoutClick}>Logout</button>
        </>
      ) : (
        <>
          <input ref={nameInputRef} placeholder='name' />
          <input ref={emailInputRef} placeholder='email' />
          <button onClick={handleLoginClick}>Login</button>
        </>
      )}
    </div>
  )
}

export default React.memo(User);
