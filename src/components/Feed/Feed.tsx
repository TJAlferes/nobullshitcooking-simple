import React from 'react';
import { connect, ConnectedProps } from 'react-redux';

import { IPostPreview } from '../../store/data/types';
import './feed.css';

export function Feed({ theme, postPreviews }: Props): JSX.Element {
  return (
    <div className={`feed ${theme}`}>
      {postPreviews.map((postPreview: IPostPreview) => (
        <div className="feed__post-preview" key={postPreview.postId}>
          <h1 className="post-preview__title">{postPreview.title}</h1>
          <span className="post-preview__author">{postPreview.author}</span>
          <img src={postPreview.thumbnail} />
          <p className="post-preview__text">{postPreview.snippet}</p>
        </div>
      ))}
    </div>
  );
};

interface RootState {
  theme: {
    feedTheme: string;
  };
  data: {
    postPreviews: IPostPreview[];
  };
}

type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux;

const mapStateToProps = (state: RootState) => ({
  theme: state.theme.feedTheme,
  postPreviews: state.data.postPreviews
});

const connector = connect(mapStateToProps);

export default connector(Feed);