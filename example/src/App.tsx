import React from 'react'
import User from './Components/User';
import Blog from './Components/Blog';
import { getUser, getBlogArticles } from './store/selectors';
import { useDispatch, useSelector } from 'react-state-lib';

const App = () => {
  const dispatch = useDispatch();
  const user = useSelector(getUser);
  const articles = useSelector(getBlogArticles);

  return (
    <>
      <User user={user} dispatch={dispatch} />
      <Blog userName={user.name} dispatch={dispatch} articles={articles} />
    </>
  )
}

export default App
