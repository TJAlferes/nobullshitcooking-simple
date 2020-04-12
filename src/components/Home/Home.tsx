import React from 'react';

import LeftNav from '../../LeftNav/LeftNav';
import Feed from '../../Feed/Feed';
import Suggestions from '../../Suggestions/Suggestions';

import './home.css';

export default function Home() {
  return (
    <div className="home">
      <div className="home-desktop-tablet">
        <LeftNav />
        <Feed />
        <Suggestions />
      </div>
      <div className="home-mobile">
        <Feed />
        <Suggestions />
      </div>
    </div>
  );
};