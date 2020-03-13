import React from 'react';
import { connect, ConnectedProps } from 'react-redux';

import { RootState } from '../../store/reducers/index';

import './feed.css';

interface PostPreview {
  postId: string
  title: string
  author: string
  snippet: string
}

export function Feed({
  theme,
  postPreviews
}: PropsFromRedux): JSX.Element {
  return (
    <div className={`feed ${theme}`}>
      {postPreviews.map((postPreview: PostPreview) => (
        <div className="feed__post-preview" key={postPreview.postId}>
          <h1 className="post-preview__title">{postPreview.title}</h1>
          <span className="post-preview__author">{postPreview.author}</span>
          <p className="post-preview__text">{postPreview.snippet}</p>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state: RootState) => ({
  theme: state.theme.feedTheme,
  postPreviews: state.data.postPreviews
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(Feed);