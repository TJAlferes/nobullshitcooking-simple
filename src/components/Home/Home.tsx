import React from 'react';

import Feed from '../Feed/Feed';
import LeftNav from '../LeftNav/LeftNav';
import Suggestions from '../Suggestions/Suggestions';
import './home.css';

export function Home(): JSX.Element {
  return (
    <div className="home">
      <div className="home--desktop">
        <LeftNav />
        <Feed />
        <Suggestions />
      </div>
      <div className="home--mobile">
        <Feed />
        <Suggestions />
      </div>
    </div>
  );
}