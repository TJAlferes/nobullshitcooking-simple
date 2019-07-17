import React from 'react';

import LeftNav from '../../LeftNav/LeftNav';
import './messenger.css';

// These will be from the users' respective AWS S3 buckets:
const s3Path = "https://s3.amazonaws.com/nobsc-images-01/content/demos/messenger/";

const Messenger = props => (
  <div className={`messenger two-column-a ${props.twoColumnATheme}`}>

    <LeftNav />

    <section>
      <span className="demo-only-notice">
        This page is for demonstration purposes only.
        To use an actual messenger, please create an account.
      </span>

      <h1>Messenger</h1>

      <div className="messenger-room">
        <button>Room</button><span>5067 (4)</span>
      </div>

      <div className="messenger-main">

        <div className="messenger-chat">
          <div className="messenger-chat-messages">
            <p><span className="chat-display-admin">Joining Room: 5067</span></p>
            <p><span className="chat-display-username-self">TJAlferes: </span>hey, did you guys try that steak recipe?</p>
            <p><span className="chat-display-username-other">Thomas: </span>yes, we made it last night, it was excellent</p>
            <p><span className="chat-display-admin">KennyBoy93 has joined the room.</span></p>
            <p><span className="chat-display-username-other">KennyBoy93: </span>sup</p>
            <p><span className="chat-display-admin">Ozleo has joined the room.</span></p>
          </div>
          <div className="messenger-chat-input"><input type="text" /></div>
        </div>

        <div className="messenger-friends">
          <div className="chat-nav"><span className="chat-nav-current">Room</span><span>Friends</span></div>
          <ul>
            <li><img src={`${s3Path}chat-avatar-example.png`} /><span>KennyBoy93</span></li>
            <li><img src={`${s3Path}chat-avatar-example-2.png`} /><span>Thomas</span></li>
            <li><img src={`${s3Path}chat-avatar-example-3.png`} /><span>TJAlferes</span></li>
            <li><img src={`${s3Path}chat-avatar-example-4.png`} /><span>Ozleo</span></li>
          </ul>
        </div>

      </div>

    </section>

  </div>
);

export default Messenger;