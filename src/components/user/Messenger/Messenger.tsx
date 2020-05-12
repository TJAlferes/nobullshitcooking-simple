import React, { createRef, useEffect, useRef, useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';

import { IMessage, IWhisper, IUser } from '../../../store/messenger/types';
import {
  messengerConnect,
  messengerDisconnect,
  messengerChangeChannel,
  messengerSendMessage,
  messengerSendWhisper
} from '../../../store/messenger/actions';
import MobileMessengerView from './views/MobileMessengerView';
import { MessengerView } from './views/MessengerView';

// TO DO: fix no longer auto scrolling after spam debounce

export function Messenger({
  twoColumnATheme,
  messengerView,
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
}: Props): JSX.Element {
  const [ feedback, setFeedback ] = useState("");
  const [ loading, setLoading ] = useState(false);
  const [ debounced, setDebounced ] = useState(false);
  const [ spamCount, setSpamCount ] = useState(1);
  const [ peopleTab, setPeopleTab ] = useState("Room");
  const [ mobileTab, setMobileTab ] = useState("Options");
  const [ roomToEnter, setRoomToEnter ] = useState("");
  const [ messageToSend, setMessageToSend ] = useState("");
  //const [ currentFriend, setCurrentFriend ] = useState("");

  //const messagesRef = createRef();
  const messagesRef = useRef<HTMLDivElement>();

  useEffect(() => {
    let isSubscribed = true;
    if (isSubscribed) {
      if (message !== "") window.scrollTo(0,0);
      setFeedback(message);
      setLoading(false);
    }
    return () => {
      isSubscribed = false;
    };
  }, [message]);

  useEffect(() => {
    const setAlertFavicon = () => {
      const nobscFavicon = document.getElementById('nobsc-favicon');
      nobscFavicon.href = "/nobsc-alert-favicon.png";
    };

    // TO DO: fix no longer auto scrolling after spam debounce
    const autoScroll = () => {
      if (!messagesRef || !messagesRef.current) return;
      const newestMessage = messagesRef.current.lastElementChild;

      // see Menu for example how to fix this!
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

  const preventSpam = () => {
    setSpamCount((prev) => prev + 1);
    setTimeout(() => setSpamCount((prev) => prev - 1), 2000);
    if (spamCount > 2) {
      setDebounced(true);
      setTimeout(() => setDebounced(false), 6000);
    }
  };

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

  const handleRoomInputChange = (e: React.SyntheticEvent<EventTarget>) => {
    setRoomToEnter((e.target as HTMLInputElement).value.trim());
  };

  const handleMessageInputChange = (e: React.SyntheticEvent<EventTarget>) => {
    setMessageToSend((e.target as HTMLInputElement).value.trim());
  };

  const handleChannelChange = () => {
    if (loading) return;
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

    setLoading(true);

    //setCurrentFriend("");
    messengerChangeChannel(trimmedRoom);
    setRoomToEnter("");
    preventSpam();
    setLoading(false);
  };

  const handleMessageSend = (e: React.KeyboardEvent) => {
    e.stopPropagation();  // needed?
    e.preventDefault();  // needed?
    if (e.key && (e.key !== "Enter")) return;
    if (loading) return;
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

    setLoading(true);

    const whispering = trimmedMessage.slice(0, 3) === "/w ";
    if (whispering) {
      // TO DO: MESS AROUND AGAIN WITH "WRONG" WHITESPACES, if return here, or clean
      const trimmedWhisper = trimmedMessage.replace(/^([\S]+\s){2}/, '');
      const userToWhisper = trimmedMessage.match(/^(\S+? \S+?) ([\s\S]+?)$/);
      const trimmedUserToWhisper = userToWhisper[1].substring(3);  // probably what caused the bug
      messengerSendWhisper(trimmedWhisper, trimmedUserToWhisper);
    } else {
      messengerSendMessage(trimmedMessage);
    }
    /*else if (currentFriend !== "") {
      const trimmedFriend = currentFriend.trim();
      messengerSendWhisper(trimmedMessage, trimmedFriend);
    }*/
    setMessageToSend("");
    preventSpam();
    setLoading(false);
  };

  const handleMobileTabChange = (value: string) => setMobileTab(value);

  const handlePeopleTabChange = (value: string) => setPeopleTab(value);

  //const handleFriendClick = () => setCurrentFriend(e.target.id);
  
  return (messengerView === "mobile")
  ? (
    <MobileMessengerView
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
      users={users}
      onlineFriends={onlineFriends}
      peopleTab={peopleTab}
      mobileTab={mobileTab}
      handlePeopleTabChange={handlePeopleTabChange}
      handleMobileTabChange={handleMobileTabChange}
    />
  )
  : (
    <MessengerView
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
      users={users}
      onlineFriends={onlineFriends}
      peopleTab={peopleTab}
      mobileTab={mobileTab}
      handlePeopleTabChange={handlePeopleTabChange}
      handleMobileTabChange={handleMobileTabChange}
    />
  );
}

interface RootState {
  nobscapp: {
    windowFocused: boolean;
  };
  auth: {
    authname: string;
  };
  user: {
    message: string;
  };
  messenger: {
    status: string;
    channel: string;
    messages: Array<IMessage | IWhisper>;
    users: IUser[];
    onlineFriends: IUser[];
  };
}

type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux & {
  twoColumnATheme: string;
  messengerView: string;
};

const mapStateToProps = (state: RootState) => ({
  windowFocused: state.nobscapp.windowFocused,
  authname: state.auth.authname,
  message: state.user.message,
  status: state.messenger.status,
  channel: state.messenger.channel,
  messages: state.messenger.messages,
  users: state.messenger.users,
  onlineFriends: state.messenger.onlineFriends
});

const mapDispatchToProps = {
  messengerConnect: () => messengerConnect(),
  messengerDisconnect: () => messengerDisconnect(),
  messengerChangeChannel: (channel: string) =>
    messengerChangeChannel(channel),
  messengerSendMessage: (message: string) => messengerSendMessage(message),
  messengerSendWhisper: (whisper: string, to: string) =>
    messengerSendWhisper(whisper, to)
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(Messenger);