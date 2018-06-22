import React, { Component } from 'react';

import LeftNav from '../../components/LeftNav/LeftNav';
import Styles from './Styles';

// this would be from the user's s3 bucket:
import ChatAvatarExample from '../../assets/images/chat-avatar-example.png';
import ChatAvatarExample2 from '../../assets/images/chat-avatar-example-2.png';
import ChatAvatarExample3 from '../../assets/images/chat-avatar-example-3.png';
import ChatAvatarExample4 from '../../assets/images/chat-avatar-example-4.png';

class Messenger extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Styles>
        <div id="page">

          <LeftNav />

          <article>
            <h1>Messenger</h1>
            <div id="room">
              <button>Room</button><span>5067 (4)</span>
            </div>
            <div id="container">
              <div id="chat">
                <div id="messages">
                  <p><span className="chat-display-admin">Joining Room: 5067</span></p>
                  <p><span className="chat-display-username-self">TJAlferes: </span>hey, did you guys try that steak recipe?</p>
                  <p><span className="chat-display-username-other">Thomas: </span>yes, we made it last night, it was excellent</p>
                  <p><span className="chat-display-admin">KennyBoy93 has joined the room.</span></p>
                  <p><span className="chat-display-username-other">KennyBoy93: </span>sup</p>
                  <p><span className="chat-display-admin">Ozleo has joined the room.</span></p>
                </div>
                <div id="message-input">
                  <input type="text" />
                </div>
              </div>
              <div id="friends">
                <div id="chat-nav"><span className="chat-nav-current">Room</span><span>Friends</span></div>
                <ul>
                  {/*{
                    room.users.map(user => {
                      <li><img src={ChatAvatarExample} /><span>TJAlferes</span></li>
                    })
                  }*/}
                  <li><img src={ChatAvatarExample} /><span>TJAlferes</span></li>
                  <li><img src={ChatAvatarExample2} /><span>Thomas</span></li>
                  <li><img src={ChatAvatarExample3} /><span>KennyBoy93</span></li>
                  <li><img src={ChatAvatarExample4} /><span>Ozleo</span></li>
                </ul>
              </div>
            </div>
          </article>

        </div>
      </Styles>
    );
  }
}

export default Messenger;