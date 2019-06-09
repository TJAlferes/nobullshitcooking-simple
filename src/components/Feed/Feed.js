import React from 'react';
import { connect } from 'react-redux';

import './feed.css';

const Feed = props => (
  <div className={`feed ${props.theme}`}>
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
);

const mapStateToProps = state => ({
  theme: state.theme.feedTheme
});

export default connect(mapStateToProps)(Feed);