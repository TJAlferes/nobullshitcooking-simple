import React from 'react';

import LeftNav from '../../LeftNav/LeftNav';
import './home.css';

const Home = props => (
  <div id="home">

    <LeftNav />

    <article id="feed">
      <div id="container">
        <div className="news_item">
          <h1>Here Is a Sample News Article Title Text</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...</p>
        </div>
        <div className="news_item">
          <h1>Here Is a Sample News Article Title Text</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...</p>
        </div>
        <div className="news_item">
          <h1>Here Is a Sample News Article Title Text</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...</p>
        </div>
        <div className="news_item">
          <h1>Here Is a Sample News Article Title Text</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...</p>
        </div>
      </div>
    </article>

    <aside id="suggestions">
      <span>Growers &amp; Ranchers</span>
      <hr />
      <span>Stores &amp; Butchers</span>
      <hr />
      <span>Popular Now</span>
      <hr />
      <span>Suggested for You</span>
    </aside>

  </div>
);

export default Home;