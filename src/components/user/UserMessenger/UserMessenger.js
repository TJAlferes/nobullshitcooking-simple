import React from 'react';
import { connect } from 'react-redux';

import {
  messengerChangeChannel,
  messengerSendMessage
} from '../../../store/actions/index';
import LeftNav from '../../LeftNav/LeftNav';
import './userMessenger.css';

// These will be from the users' respective AWS S3 buckets:
import ChatAvatarExample from '../../../assets/images/chat-avatar-example.png';
import ChatAvatarExample2 from '../../../assets/images/chat-avatar-example-2.png';
import ChatAvatarExample3 from '../../../assets/images/chat-avatar-example-3.png';
import ChatAvatarExample4 from '../../../assets/images/chat-avatar-example-4.png';

const UserMessenger = props => {
  const handleChannelChange = e => {
    e.preventDefault();
    if (e.key === "Enter") props.messengerChangeChannel(e.target.value);
  };

  const handleMessageSend = e => {
    e.preventDefault();
    if (e.key === "Enter") props.messengerSendMessage(e.target.value);
  };

  return (
    <div className={`messenger two-column-a ${props.twoColumnATheme}`}>

        <LeftNav />

        <section>

          <h1>Messenger</h1>

          <div className="messenger-room">
            <button>Room</button>
            <input
              type="text"
              name="channel-input"
              defaultValue={props.channel}
              onKeyUp={(e) => handleChannelChange(e)}
            />
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
              <div className="messenger-chat-input">
                <input type="text" name="chat-input" onKeyUp={(e) => handleMessageSend(e)} />
              </div>
            </div>

            <div className="messenger-friends">
              <div className="chat-nav"><span className="chat-nav-current">Room</span><span>Friends</span></div>
              <ul>
                {/*{
                  room.users.map(user => {
                    <li><img src={ChatAvatarExample} /><span>TJAlferes</span></li>
                  })
                }*/}
                <li><img src={ChatAvatarExample3} /><span>KennyBoy93</span></li>
                <li><img src={ChatAvatarExample2} /><span>Thomas</span></li>
                <li><img src={ChatAvatarExample} /><span>TJAlferes</span></li>
                <li><img src={ChatAvatarExample4} /><span>Ozleo</span></li>
              </ul>
            </div>

          </div>

        </section>

    </div>
  );
};

const mapStateToProps = state = ({
  channel: state.messenger.channel,
  messages: state.messenger.messages,
  users: state.messenger.users
});

const mapDispatchToProps = dispatch => ({
  messengerChangeChannel: (channel) => dispatch(messengerChangeChannel(channel)),
  messengerSendMessage: (message) => dispatch(messengerSendMessage(message))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserMessenger);