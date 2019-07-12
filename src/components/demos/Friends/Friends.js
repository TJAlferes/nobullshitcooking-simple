import React from 'react';

import LeftNav from '../../LeftNav/LeftNav';
import './friends.css';

import ChatAvatarExample3 from '../../../assets/images/chat-avatar-example-3.png';
import ChatAvatarExample4 from '../../../assets/images/chat-avatar-example-4.png';

const Friends = props => (
  <div className={`friends two-column-a ${props.twoColumnATheme}`}>

    <LeftNav />

    <section>
      <span className="demo-only-notice">
        This page is for demonstration purposes only.
        To start an actual friends list, please create an account.
      </span>
      <h1>Friends</h1>
      <div className="friends-list-menu-tabs">
        <span className="friends-list-menu-tab">Current</span>
        <span className="friends-list-menu-tab">Pending</span>
        <span className="friends-list-menu-tab">Blocked</span>
      </div>
      <div className="friends-list">
        <div className="friends-list-item">
          <div className="friends-list-item-avatar">
            <img src={ChatAvatarExample3} />
          </div>
          <div className="friends-list-item-username">
            KennyBoy93
          </div>
        </div>
        <div className="friends-list-item">
          <div className="friends-list-item-avatar">
          <img src={ChatAvatarExample4} />
          </div>
          <div className="friends-list-item-username">
            Ozleo
          </div>
        </div>
      </div>
    </section>

  </div>
);

export default Friends;