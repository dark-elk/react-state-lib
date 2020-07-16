import React from 'react';
import { IArticle } from '../../store/types';
import { useDispatch } from 'react-state-lib';
import { destroyArticleAction } from '../../Modules/Blog/actions';

const Article = ({ author, title, text, id }: IArticle) => {
  const dispatch = useDispatch();

  const handleDeleteClick = () => dispatch(destroyArticleAction(id))

  return (
    <div style={{ border: '1px solid black', marginTop: '20px', backgroundColor: '#' + String(Math.random()).slice(-6) }}>
      {author && <>Author: {author} <br /></> }
      {title && <>Title: {title} <br /></> }
      {text && <>Text: {text} <br /></> }
      <button onClick={handleDeleteClick}>Delete</button>
    </div>
  )
}

export default React.memo(Article);
