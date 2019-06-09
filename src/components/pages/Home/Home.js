import React from 'react';

import LeftNav from '../../LeftNav/LeftNav';
import Feed from '../../Feed/Feed';
import Suggestions from '../../Suggestions/Suggestions';
import './home.css';

const Home = () => (
  <div className="home">
    <LeftNav />
    <Feed />
    <Suggestions />
  </div>
);

export default Home;