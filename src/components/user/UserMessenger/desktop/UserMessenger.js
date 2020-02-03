import React, { createRef, useEffect, useState } from 'react';
import { connect } from 'react-redux';

import {
  messengerConnect,
  messengerDisconnect,
  messengerChangeChannel,
  messengerSendMessage,
  messengerSendWhisper
} from '../../../../store/actions/index';

import UserMessengerView from './UserMessengerView';

// TO DO: fix no longer auto scrolling after spam debounce

export const UserMessenger = ({
  twoColumnATheme,
  windowFocused,
  authname,
  message,
  status,
  channel,
  messages,
  users,
  onlineFriends,
  messengerConnect,
  messengerDisconnect,
  messengerChangeChannel,
  messengerSendMessage,
  messengerSendWhisper
}) => {
  const [ feedback, setFeedback ] = useState("");
  const [ loading, setLoading ] = useState(false);
  const [ debounced, setDebounced ] = useState(false);
  const [ spamCount, setSpamCount ] = useState(1);
  const [ tab, setTab ] = useState("Room");
  const [ roomToEnter, setRoomToEnter ] = useState("");
  const [ messageToSend, setMessageToSend ] = useState("");
  //const [ currentFriend, setCurrentFriend ] = useState("");

  const messagesRef = createRef();

  useEffect(() => {
    let isSubscribed = true;
    if (isSubscribed) {
      if (message !== "") window.scrollTo(0,0);
      setFeedback(message);
      setLoading(false);
    }
    return () => isSubscribed = false;
  }, [message]);

  useEffect(() => {
    const setAlertFavicon = () => {
      const nobscFavicon = document.getElementById('nobsc-favicon');
      nobscFavicon.href = "/nobsc-alert-favicon.png";
    };

    // TO DO: fix no longer auto scrolling after spam debounce
    const autoScroll = () => {
      const newestMessage = messagesRef.current.lastElementChild;

      const newestMessageHeight = newestMessage.offsetHeight +
        parseInt(getComputedStyle(newestMessage).marginBottom);

      const containerHeight = messagesRef.current.scrollHeight;
      
      const scrollOffset = messagesRef.current.scrollTop +
        messagesRef.current.offsetHeight;

      // cancels autoscroll if user is scrolling up through older messages
      if ((containerHeight - newestMessageHeight) <= scrollOffset) {
        messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
      }
    };

    if (windowFocused === false) setAlertFavicon();

    autoScroll();
  }, [messages]);

  const handleConnect = () => {
    setLoading(true);
    messengerConnect();
    setLoading(false);
  };

  const handleDisconnect = () => {
    setLoading(true);
    messengerDisconnect();
    setLoading(false);
  };

  const handleRoomInputChange = e => setRoomToEnter(e.target.value);

  const handleMessageInputChange = e => setMessageToSend(e.target.value);

  const handleChannelChange = () => {
    if (loading) return;
    setLoading(true);
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
    //setCurrentFriend("");
    messengerChangeChannel(trimmedRoom);
    setRoomToEnter("");
    setSpamCount((prev) => prev + 1);
    setTimeout(() => setSpamCount((prev) => prev - 1), 2000);
    if (spamCount > 2) {
      setDebounced(true);
      setTimeout(() => setDebounced(false), 6000);
    }
    setLoading(false);
  };

  const handleMessageSend = e => {
    e.stopPropagation();
    e.preventDefault();
    if (e.key && (e.key !== "Enter")) return;
    if (loading) return;
    setLoading(true);
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
      messengerSendWhisper(trimmedWhisper, trimmedUserToWhisper);
    } else {
      messengerSendMessage(trimmedMessage);
    }
    /*else if (currentFriend !== "") {
      const trimmedFriend = currentFriend.trim();
      messengerSendWhisper(trimmedMessage, trimmedFriend);
    }*/
    setMessageToSend("");
    setSpamCount((prev) => prev + 1);
    setTimeout(() => setSpamCount((prev) => prev - 1), 2000);
    if (spamCount > 4) {
      setDebounced(true);
      setTimeout(() => setDebounced(false), 6000);
    }
    setLoading(false);
  };

  const handleUsersInRoomTabClick = () => setTab("Room");

  const handleFriendsTabClick = () => setTab("Friends");

  //const handleFriendClick = () => setCurrentFriend(e.target.id);
  
  return (
    <UserMessengerView
      twoColumnATheme={twoColumnATheme}
      authname={authname}
      feedback={feedback}
      loading={loading}

      status={status}
      handleConnect={handleConnect}
      handleDisconnect={handleDisconnect}

      channel={channel}
      roomToEnter={roomToEnter}
      handleRoomInputChange={handleRoomInputChange}
      handleChannelChange={handleChannelChange}

      messagesRef={messagesRef}
      messages={messages}
      messageToSend={messageToSend}
      handleMessageInputChange={handleMessageInputChange}
      handleMessageSend={handleMessageSend}

      tab={tab}
      users={users}
      onlineFriends={onlineFriends}
      handleUsersInRoomTabClick={handleUsersInRoomTabClick}
      handleFriendsTabClick={handleFriendsTabClick}
    />
  );
};

const mapStateToProps = state => ({
  windowFocused: state.nobscapp.windowFocused,
  authname: state.auth.authname,
  message: state.user.message,
  status: state.messenger.status,
  channel: state.messenger.channel,
  messages: state.messenger.messages,
  users: state.messenger.users,
  onlineFriends: state.messenger.onlineFriends
});

const mapDispatchToProps = dispatch => ({
  messengerConnect: () => dispatch(messengerConnect()),
  messengerDisconnect: () => dispatch(messengerDisconnect()),
  messengerChangeChannel: (channel) =>
    dispatch(messengerChangeChannel(channel)),
  messengerSendMessage: (message) => dispatch(messengerSendMessage(message)),
  messengerSendWhisper: (whisper, to) =>
    dispatch(messengerSendWhisper(whisper, to))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserMessenger);