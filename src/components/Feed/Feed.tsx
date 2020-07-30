import React from 'react';
import { connect, ConnectedProps } from 'react-redux';

import { IWorkContent } from '../../store/data/types';
import './feed.css';

export function Feed({
  myContent,
  officialContent,
  theme
}: Props): JSX.Element {
  return (
    <div className={`feed ${theme}`}>
      {officialContent && officialContent.map(c => (
        <div className="post-preview" key={c.content_id}>

          <h1 className="post-preview__title">{c.title}</h1>

          <span className="post-preview__author">{c.title}</span>

          <img
            className="post-preview__thumbnail"
            src={c.title}
          />
          
          <p className="post-preview__snippet">{c.title}</p>

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
    myContent: IWorkContent[];
    officialContent: IWorkContent[];
  };
}

type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux;

const mapStateToProps = (state: RootState) => ({
  myContent: state.data.myContent,
  officialContent: state.data.officialContent,
  theme: state.theme.feedTheme
});

const connector = connect(mapStateToProps, {});

export default connector(Feed);