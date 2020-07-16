import React, { useRef } from 'react';
import { postArticleAction } from '../../Modules/Blog/actions';
import { IArticle } from '../../store/types';
import Article from './Article';

interface IBlog {
  dispatch: any;
  articles: IArticle[];
  userName: string;
}

const Blog: React.FC<IBlog> = ({
  dispatch,
  articles,
  userName
}) => {
  const titleInputRef = useRef<HTMLInputElement>(null);
  const textInputRef = useRef<HTMLInputElement>(null);

  const handlePostClick = () => {
    dispatch(postArticleAction({
      title: titleInputRef.current?.value,
      text: textInputRef.current?.value,
      author: userName
    }))

    if (titleInputRef.current) titleInputRef.current.value = '';
    if (textInputRef.current) textInputRef.current.value = '';
  }

  return (
    <div>
      <br />
      <input ref={titleInputRef} placeholder='title' />
      <input ref={textInputRef} placeholder='text' />
      <button onClick={handlePostClick}>Post</button>
      <br />
      {articles.map((article: IArticle) =>
        <Article {...article} key={article.id} />
      )}
    </div>
  )
}

export default React.memo(Blog);
