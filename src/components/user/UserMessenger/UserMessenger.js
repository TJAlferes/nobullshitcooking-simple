import React, { createRef, useEffect, useState } from 'react';
import { connect } from 'react-redux';

import {
  messengerChangeChannel,
  messengerSendMessage
} from '../../../store/actions/index';
import LeftNav from '../../LeftNav/LeftNav';
import './userMessenger.css';

const UserMessenger = props => {
  //console.log(props);
  //const messagesRef = useRef(null);  //
  const messagesRef = createRef();
  //useImperativeHandle(ref, () => ({getNode: () => messagesRef.current}));
  const [ tab, setTab ] = useState("Room");

  useEffect(() => {
    const autoScroll = () => {
      //console.log(messagesRef.current.lastElementChild);
      const newestMessage = messagesRef.current.lastElementChild;
      const newestMessageHeight = newestMessage.offsetHeight + parseInt(
        getComputedStyle(newestMessage).marginBottom
      );
      const containerHeight = messagesRef.scrollHeight;
      const scrollOffset = messagesRef.scrollTop + messagesRef.offsetHeight;
      // cancel autoscroll if user is scrolling up through older messages
      if ((containerHeight - newestMessageHeight) <= scrollOffset) {
        messagesRef.scrollTop = messagesRef.scrollHeight;
      }
    };
    autoScroll();
  });

  const handleChannelChange = e => {
    e.preventDefault();
    if (e.key === "Enter") props.messengerChangeChannel(e.target.value);
  };

  const handleMessageSend = e => {
    e.preventDefault();
    if (e.key === "Enter") props.messengerSendMessage(e.target.value);
  };

  const handleUsersInRoomTabClick = () => {
    setTab("Room");
  };

  const handleFriendsTabClick = () => {
    setTab("Friends");
  };

  return (
    <div className={`messenger two-column-a ${props.twoColumnATheme}`}>

        <LeftNav />

        <section>

          <h1>Messenger</h1>

          <div className="messenger-room">
            <button className="messenger-connect-disconnect">
              {(props.status == "Connected") ? "Disconnect" : "Connect"}
            </button>
            <label className="messenger-channel-switch" htmlFor="channel-input">Room</label>
            <input
              type="text"
              name="channel-input"
              defaultValue={props.channel}
              onKeyUp={(e) => handleChannelChange(e)}
            />
          </div>

          <div className="messenger-main">

            <div className="messenger-chat">
              <ul className="messenger-chat-messages" ref={messagesRef}>
                <li className="messenger-chat-message">
                  <span className="chat-display-admin">COOK EAT WIN REPEAT</span>
                </li>
                {
                  props.messages && props.messages.map(message => (
                    message.author === "messengerstatus"
                    ? (
                      <li className="messenger-chat-message">
                        <span className="chat-display-admin">{message.text}</span>
                      </li>
                    )
                    : (
                      props.authname === message.author
                      ? (
                        <li className="messenger-chat-message">
                          <span className="chat-display-username-self">{message.author}: </span>
                          {message.text}
                        </li>
                      )
                      : (
                        <li className="messenger-chat-message">
                          <span className="chat-display-username-other">{message.author}: </span>
                          {message.text}
                        </li>
                      )
                    )
                  ))
                }
              </ul>
              <div className="messenger-chat-input">
                <input type="text" name="chat-input" onKeyUp={(e) => handleMessageSend(e)} />
              </div>
            </div>

            <div className="messenger-people">
              <div className="messenger-people-tabs">
                <span
                  className={`messenger-people-tab ${tab === "Room" && 'chat-nav-current'}`}
                  onClick={handleUsersInRoomTabClick}
                >
                  Room
                </span>
                <span
                  className={`messenger-people-tab ${tab === "Friends" && 'chat-nav-current'}`}
                  onClick={handleFriendsTabClick}
                >
                  Friends
                </span>
              </div>
              <ul className="messenger-users-in-room">
                {
                  props.users && props.users.map(user => (
                    <li className="messenger-user-in-room">
                      <img src={`https://s3.aws.com/nobscsomething/users/avatars/${user.avatar}`} />
                      <span>{user.username}</span>
                    </li>
                  ))
                }
              </ul>
              <ul className="messenger-friends">
                {
                  props.friends && props.friends.map(friend => (
                    <li className="messenger-friend">
                      <img src={`https://s3.aws.com/nobscsomething/users/avatars/${friend.avatar}`} />
                      <span>{friend.username}</span>
                    </li>
                  ))
                }
              </ul>
            </div>

          </div>

        </section>

    </div>
  );
};

const mapStateToProps = state => ({
  authname: state.auth.authname,
  status: state.messenger.status,
  channel: state.messenger.channel,
  messages: state.messenger.messages,
  users: state.messenger.users
});

const mapDispatchToProps = dispatch => ({
  messengerChangeChannel: (channel) => dispatch(messengerChangeChannel(channel)),
  messengerSendMessage: (message) => dispatch(messengerSendMessage(message))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserMessenger);