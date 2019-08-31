import React, { createRef, useEffect, useState } from 'react';
import { connect } from 'react-redux';

import {
  messengerConnect,
  messengerDisconnect,
  messengerChangeChannel,
  messengerSendMessage
} from '../../../store/actions/index';
import LeftNav from '../../LeftNav/LeftNav';
import './userMessenger.css';

const UserMessenger = props => {
  const [ feedback, setFeedback ] = useState("");
  const [ loading, setLoading ] = useState(false);
  //console.log(props);
  //const messagesRef = useRef(null);  //
  const messagesRef = createRef();
  //useImperativeHandle(ref, () => ({getNode: () => messagesRef.current}));
  const [ tab, setTab ] = useState("Room");

  useEffect(() => {
    let isSubscribed = true;
    if (isSubscribed) {
      if (props.feedback !== "") window.scrollTo(0,0);
      setFeedback(props.feedback);
    }
    return () => isSubscribed = false;
  }, [props.feedback]);

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

  const handleConnect = () => props.messengerConnect();

  const handleDisconnect = () => props.messengerDisconnect();

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

        <p className="error-message">{feedback}</p>

        <div className="messenger-room">
          <div className="messenger-connect-disconnect-container">
            <button
              className="messenger-connect-disconnect"
              onClick={props.status === "Connected" ? handleDisconnect : handleConnect}
            >
              {(props.status == "Connected") ? "Disconnect" : "Connect"}
            </button>
          </div>
          <span className="messenger-channel-switch">Room:</span>
          <span>5067</span>
          <input
            className="messenger-channel-input"
            type="text"
            name="channel-input"
            defaultValue={props.channel}
            onKeyUp={(e) => handleChannelChange(e)}
          />
          <button>Enter</button>
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
              <button
                className={(tab === "Room") ? "messenger-people-tab chat-nav-current" : "messenger-people-tab"}
                onClick={handleUsersInRoomTabClick}
              >
                Room
              </button>
              <button
                className={(tab === "Friends") ? "messenger-people-tab chat-nav-current" : "messenger-people-tab"}
                onClick={handleFriendsTabClick}
              >
                Friends
              </button>
            </div>
            {tab === "Room" && (
              <ul className="messenger-users-in-room">
                {props.users && props.users.map(user => (
                  <li className="messenger-user-in-room">
                    <img src={`https://s3.aws.com/nobscsomething/users/avatars/${user.avatar}`} />
                    <span>{user.username}</span>
                  </li>
                ))}
              </ul>
            )}
            {tab === "Friends" && (
              <ul className="messenger-friends">
                {props.friends && props.friends.map(friend => (
                  <li className="messenger-friend">
                    <img src={`https://s3.aws.com/nobscsomething/users/avatars/${friend.avatar}`} />
                    <span>{friend.username}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>

        </div>

      </section>

    </div>
  );
};

const mapStateToProps = state => ({
  authname: state.auth.authname,
  feedback: state.user.message,
  status: state.messenger.status,
  channel: state.messenger.channel,
  messages: state.messenger.messages,
  users: state.messenger.users
});

const mapDispatchToProps = dispatch => ({
  messengerConnect: () => dispatch(messengerConnect()),
  messengerDisconnect: () => dispatch(messengerDisconnect()),
  messengerChangeChannel: (channel) => dispatch(messengerChangeChannel(channel)),
  messengerSendMessage: (message) => dispatch(messengerSendMessage(message))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserMessenger);