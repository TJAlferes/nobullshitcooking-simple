import React from 'react';

import LeftNav from '../../LeftNav/LeftNav';
import Feed from '../../Feed/Feed';
import Suggestions from '../../Suggestions/Suggestions';
import './home.css';

const Home = props => (
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

export default Home;