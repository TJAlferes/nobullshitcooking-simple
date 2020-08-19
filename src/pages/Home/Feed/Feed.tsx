import React from 'react';
import { connect, ConnectedProps } from 'react-redux';

import { IWorkContent } from '../../../store/data/types';
import './feed.css';

export function Feed({
  myContent,
  officialContent,
  theme
}: Props): JSX.Element {
  return (
    <div className={`feed ${theme}`}>
      {
        [...(myContent && myContent), ...(officialContent && officialContent)]
        .map(c => (
          <div className="feed-item" key={c.id}>
            <h1 className="feed-item__title">{c.title}</h1>
            <span className="feed-item__author">{c.author}</span>
            <img
              className="feed-item__thumbnail"
              src={`https://s3.amazonaws.com/nobsc-user-equipment/${c.image}-thumb`}
            />
            {/*<p className="feed-item__snippet">{c.title}</p>*/}
          </div>
        ))
      }
    </div>
  );
};

interface RootState {
  data: {
    myContent: IWorkContent[];
    officialContent: IWorkContent[];
  };
  theme: {
    feedTheme: string;
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