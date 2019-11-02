import React, { createRef, useEffect, useState } from 'react';
import { connect } from 'react-redux';

import {
  messengerConnect,
  messengerDisconnect,
  messengerChangeChannel,
  messengerSendMessage,
  messengerSendWhisper
} from '../../../../store/actions/index';

import './mobileUserMessenger.css';

const UserMessenger = props => {
  const [ feedback, setFeedback ] = useState("");
  const [ loading, setLoading ] = useState(false);
  const [ debounced, setDebounced ] = useState(false);
  const [ spamCount, setSpamCount ] = useState(1);
  const [ tab, setTab ] = useState("Room");
  const [ topTab, setTopTab ] = useState("Options");
  const [ roomToEnter, setRoomToEnter ] = useState("");
  const [ messageToSend, setMessageToSend ] = useState("");

  const messagesRef = createRef();

  useEffect(() => {
    let isSubscribed = true;
    if (isSubscribed) {
      //if (props.feedback !== "") window.scrollTo(0,0);
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
      // cancels autoscroll if user is scrolling up through older messages
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
      console.log(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleRoomInputChange = e => setRoomToEnter(e.target.value);

  const handleMessageInputChange = e => setMessageToSend(e.target.value);

  const handleChannelChange = () => {
    if (loading) return;
    setLoading(true);
    try {
      if (debounced) {
        setFeedback("Slow down there partner...");
        setTimeout(() => setFeedback(""), 6000);
        return;
      }
      const trimmedRoom = roomToEnter.trim();
      if (trimmedRoom.length < 1 || trimmedRoom === "") return;
      if (trimmedRoom.length > 20) {
        setFeedback("Please limit room name length to 20 characters.");
        setTimeout(() => setFeedback(""), 4000);
        return;
      }
      props.messengerChangeChannel(trimmedRoom);
      setRoomToEnter("");
      setSpamCount((prev) => prev + 1);
      setTimeout(() => setSpamCount((prev) => prev - 1), 2000);
      if (spamCount > 2) {
        setDebounced(true);
        setTimeout(() => setDebounced(false), 6000);
      }
    } catch(err) {
      setLoading(false);
      console.log(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleMessageSend = e => {
    e.stopPropagation();
    e.preventDefault();
    if (e.key && (e.key !== "Enter")) return;
    if (loading) return;
    setLoading(true);
    try {
      if (debounced) {
        setFeedback("Slow down there partner...");
        setTimeout(() => setFeedback(""), 6000);
        return;
      }
      const trimmedMessage = messageToSend.trim();
      if (trimmedMessage.length < 1 || trimmedMessage === "") return;
      if (trimmedMessage.length > 4000) {
        setFeedback("Please limit message length to 4,000 characters.");
        setTimeout(() => setFeedback(""), 4000);
        return;
      }
      if (trimmedMessage.slice(0, 3) === "/w ") {
        // TO DO: MESS AROUND AGAIN WITH "WRONG" WHITESPACES, if return here, or clean
        const trimmedWhisper = trimmedMessage.replace(/^([\S]+\s){2}/, '');
        const userToWhisper = trimmedMessage.match(/^(\S+? \S+?) ([\s\S]+?)$/);
        const trimmedUserToWhisper = userToWhisper[1].substring(3);
        props.messengerSendWhisper(trimmedWhisper, trimmedUserToWhisper);
      } else {
        props.messengerSendMessage(trimmedMessage);
      }
      setMessageToSend("");
      setSpamCount((prev) => prev + 1);
      setTimeout(() => setSpamCount((prev) => prev - 1), 2000);
      if (spamCount > 4) {
        setDebounced(true);
        setTimeout(() => setDebounced(false), 6000);
      }
    } catch(err) {
      setLoading(false);
      console.log(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleOptionsTopTabClick = () => setTopTab("Options");

  const handleChatTopTabClick = () => setTopTab("Chat");

  const handlePeopleTopTabClick = () => setTopTab("People");

  const handleUsersInRoomTabClick = () => setTab("Room");

  const handleFriendsTabClick = () => setTab("Friends");
  
  return (
    <div className="mobile-messenger">

        {/*<h1>Messenger</h1>*/}

        {/*<p className="mobile-messenger__error-message">{feedback}</p>*/}

        <div className="mobile-messenger__top-tabs">
          <button
            className={(topTab === "Options")
              ? "mobile-messenger__top-tab chat-top-nav-current"
              : "mobile-messenger__top-tab"
            }
            onClick={handleOptionsTopTabClick}
          >
            Options
          </button>
          <button
            className={(topTab === "Chat")
              ? "mobile-messenger__top-tab chat-top-nav-current"
              : "mobile-messenger__top-tab"
            }
            onClick={handleChatTopTabClick}
          >
            Chat
          </button>
          <button
            className={(topTab === "People")
              ? "mobile-messenger__top-tab chat-top-nav-current"
              : "mobile-messenger__top-tab"
            }
            onClick={handlePeopleTopTabClick}
          >
            People
          </button>
        </div>

        <div className="mobile-messenger__views">
          {topTab === "Options" && (
            <div className="mobile-messenger__view">
              <div className="mobile-messenger__connect-disconnect-container">
                {
                  props.status === "Connected"
                  ? (
                    <button
                      className="mobile-messenger__connect-disconnect"
                      onClick={handleDisconnect}
                      disabled={loading}
                    >
                      Disconnect
                    </button>
                  )
                  : (
                    <button
                      className="mobile-messenger__connect-disconnect"
                      onClick={handleConnect}
                      disabled={loading}
                    >
                      Connect
                    </button>
                  )
                }
              </div>

              <div className="mobile-messenger__current-container">
                <span className="mobile-messenger__channel-switch">
                  Current Room:
                </span>
                <span className="mobile-messenger__channel-current">
                  {props.channel}
                </span>
              </div>

              <div className="mobile-messenger__go-container">
                <span className="mobile-messenger__channel-label">
                  Go To Room:
                </span>
                <input
                  className="mobile-messenger__channel-input"
                  type="text"
                  name="channel-input"
                  value={roomToEnter}
                  onChange={handleRoomInputChange}
                  disabled={(props.status !== "Connected") || loading}
                />
                <div className="mobile-messenger__channel-button-container">
                  <button
                    className="mobile-messenger__channel-button"
                    onClick={handleChannelChange}
                    disabled={(props.status !== "Connected") || loading}
                  >
                    Enter
                  </button>
                </div>
              </div>
            </div>
          )}

          {topTab === "Options" && (
            <div className="mobile-messenger__view">
              messages
              input
            </div>
          )}

          {topTab === "Options" && (
            <div className="mobile-messenger__view">
              <div className="mobile-messenger__people-tabs">
                <button
                  className={(tab === "Room")
                    ? "mobile-messenger__people-tab chat-nav-current"
                    : "mobile-messenger__people-tab"
                  }
                  onClick={handleUsersInRoomTabClick}
                >
                  Room
                </button>
                <button
                  className={(tab === "Friends")
                    ? "mobile-messenger__people-tab chat-nav-current"
                    : "mobile-messenger__people-tab"
                  }
                  onClick={handleFriendsTabClick}
                >
                  Friends
                </button>
              </div>

              {tab === "Room" && (
                <ul className="mobile-messenger__users-in-room">
                  {props.users && props.users.map(user => (
                    <li className="mobile-messenger__user-in-room" key={user.user}>
                      <img src={`https://nobsc-user-avatars.s3.amazonaws.com/${user.user}-tiny`} />
                      <span>{user.user}</span>
                    </li>
                  ))}
                </ul>
              )}

              {tab === "Friends" && (
                <ul className="mobile-messenger__friends">
                  {props.onlineFriends && props.onlineFriends.map(online => (
                    <li className="mobile-messenger__friend" key={online.user}>
                      <img src={`https://nobsc-user-avatars.s3.amazonaws.com/${online.user}-tiny`} />
                      <span>{online.user}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </div>



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
                      message.whisper
                      ? (
                        <li className="messenger-chat-message" key={message.ts}>
                          <span className="chat-display-username-self">
                            You whisper to{' '}{message.to}:{' '}
                          </span>
                          <span className="chat-whisper">{message.whisper}</span>
                        </li>
                      )
                      : (
                        <li className="messenger-chat-message" key={message.ts}>
                          <span className="chat-display-username-self">
                            {message.user.user}:{' '}
                          </span>
                          {message.message}
                        </li>
                      )
                    )
                    : (
                      message.whisper
                      ? (
                        <li className="messenger-chat-message" key={message.ts}>
                          <span className="chat-display-username-other">
                            {message.user.user}{' '}whispers to you:{' '}
                          </span>
                          <span className="chat-whisper">{message.whisper}</span>
                        </li>
                      )
                      : (
                        <li className="messenger-chat-message" key={message.ts}>
                          <span className="chat-display-username-other">
                            {message.user.user}:{' '}
                          </span>
                          {message.message}
                        </li>
                      )
                    )
                  )
                ))
              }
            </ul>
            <div className="messenger-chat-input">
              <input
                type="text" name="chat-input"
                value={messageToSend}
                onChange={handleMessageInputChange}
                onKeyUp={(e) => handleMessageSend(e)}
                disabled={props.status !== "Connected"}
              />
            </div>
          </div>

    </div>
  );
};

const mapStateToProps = state => ({
  authname: state.auth.authname,
  feedback: state.user.message,
  status: state.messenger.status,
  channel: state.messenger.channel,
  messages: state.messenger.messages,
  users: state.messenger.users,
  onlineFriends: state.messenger.onlineFriends
});

const mapDispatchToProps = dispatch => ({
  messengerConnect: () => dispatch(messengerConnect()),
  messengerDisconnect: () => dispatch(messengerDisconnect()),
  messengerChangeChannel: (channel) => dispatch(messengerChangeChannel(channel)),
  messengerSendMessage: (message) => dispatch(messengerSendMessage(message)),
  messengerSendWhisper: (whisper, to) => dispatch(messengerSendWhisper(whisper, to))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserMessenger);