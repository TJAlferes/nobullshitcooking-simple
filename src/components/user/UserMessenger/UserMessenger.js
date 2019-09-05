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
  const messagesRef = createRef();
  const [ tab, setTab ] = useState("Room");
  const [ roomToEnter, setRoomToEnter ] = useState("")

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
      const newestMessage = messagesRef.current.lastElementChild;
      const newestMessageHeight = newestMessage.offsetHeight + parseInt(
        getComputedStyle(newestMessage).marginBottom
      );
      const containerHeight = messagesRef.current.scrollHeight;
      const scrollOffset = messagesRef.current.scrollTop + messagesRef.current.offsetHeight;
      // cancel autoscroll if user is scrolling up through older messages
      if ((containerHeight - newestMessageHeight) <= scrollOffset) {
        messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
      }
    };
    autoScroll();
  }, [props.messages]);

  const handleConnect = () => {
    setLoading(true);
    try {
      props.messengerConnect();
    } catch(err) {
      setLoading(false);
      setMessage(err.message);
      console.log(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDisconnect = () => {
    setLoading(true);
    try {
      props.messengerDisconnect();
    } catch(err) {
      setLoading(false);
      setMessage(err.message);
      console.log(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleRoomInputChange = e => setRoomToEnter(e.target.value);

  const handleChannelChange = () => {
    setLoading(true);
    try {
      props.messengerChangeChannel(roomToEnter);
    } catch(err) {
      setLoading(false);
      setMessage(err.message);
      console.log(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleMessageSend = e => {
    e.stopPropagation();
    e.preventDefault();
    if (e.key && (e.key !== "Enter")) return;
    setLoading(true);
    try {
      props.messengerSendMessage(e.target.value);
    } catch(err) {
      setLoading(false);
      setMessage(err.message);
      console.log(err.message);
    } finally {
      setLoading(false);
    }
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
            {
              props.status === "Connected"
              ? (
                <button
                  className="messenger-connect-disconnect"
                  onClick={handleDisconnect}
                >
                  Disconnect
                </button>
              )
              : (
                <button
                  className="messenger-connect-disconnect"
                  onClick={handleConnect}
                >
                  Connect
                </button>
              )
            }
          </div>
          <span className="messenger-channel-switch">Current Room:</span>
          <span className="messenger-channel-current">{props.channel}</span>
          <span className="messenger-channel-label">Go To Room:</span>
          <input
            className="messenger-channel-input"
            type="text"
            name="channel-input"
            defaultValue={props.channel}
            onChange={handleRoomInputChange}
          />
          <div className="messenger-channel-button-container">
            <button
              className="messenger-channel-button"
              onClick={handleChannelChange}
            >
              Enter
            </button>
          </div>
        </div>

        <div className="messenger-main">

          <div className="messenger-chat">
            <ul className="messenger-chat-messages" ref={messagesRef}>
              <li className="messenger-chat-message">
                <span className="chat-display-admin">COOK EAT WIN REPEAT</span>
              </li>
              {
                props.messages && props.messages.map(message => (
                  message.user.user === "messengerstatus"
                  ? (
                    <li className="messenger-chat-message" key={message.ts}>
                      <span className="chat-display-admin">{message.message}</span>
                    </li>
                  )
                  : (
                    props.authname === message.user.user
                    ? (
                      <li className="messenger-chat-message" key={message.ts}>
                        <span className="chat-display-username-self">{message.user.user}: </span>
                        {message.message}
                      </li>
                    )
                    : (
                      <li className="messenger-chat-message" key={message.ts}>
                        <span className="chat-display-username-other">{message.user.user}: </span>
                        {message.message}
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
                  <li className="messenger-user-in-room" key={user.user}>
                    <img src={`https://nobsc-user-avatars.s3.amazonaws.com/${user.user}-tiny`} />
                    <span>{user.user}</span>
                  </li>
                ))}
              </ul>
            )}
            {tab === "Friends" && (
              <ul className="messenger-friends">
                {props.friends && props.friends.map(friend => (
                  <li className="messenger-friend" key={friend.user}>
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