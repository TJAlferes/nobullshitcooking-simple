import React, { useEffect, useRef, useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';

import { Message, IUser } from '../../../store/messenger/types';
import {
  messengerChangeChannel,
  messengerConnect,
  messengerDisconnect,
  messengerSendMessage,
  messengerSendWhisper
} from '../../../store/messenger/actions';
//import { MobileMessengerView } from './views/MobileMessengerView';
import { MessengerView } from './views/MessengerView';

// TO DO: fix no longer auto scrolling after spam debounce

export function Messenger({
  authname,
  channel,
  message,
  messages,
  messengerChangeChannel,
  messengerConnect,
  messengerDisconnect,
  messengerSendMessage,
  messengerSendWhisper,
  //messengerView,
  onlineFriends,
  status,
  twoColumnATheme,
  users,
  windowFocused
}: Props): JSX.Element {
  const [ debounced, setDebounced ] = useState(false);
  const [ feedback, setFeedback ] = useState("");
  const [ focusedFriend, setFocusedFriend ] = useState<IUser | null>(null);
  const [ focusedUser, setFocusedUser ] = useState<IUser | null>(null);
  const [ loading, setLoading ] = useState(false);
  const [ messageToSend, setMessageToSend ] = useState("");
  //const [ mobileTab, setMobileTab ] = useState("Options");
  const [ peopleTab, setPeopleTab ] = useState("Room");
  const [ roomToEnter, setRoomToEnter ] = useState("");
  const [ spamCount, setSpamCount ] = useState(1);

  const messagesRef = useRef<HTMLUListElement>(null);

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
      const nobscFavicon: HTMLLinkElement =
        document.getElementById('nobsc-favicon') as HTMLLinkElement;
      nobscFavicon.href = "/nobsc-alert-favicon.png";
    };

    // TO DO: fix no longer auto scrolling after spam debounce
    const autoScroll = () => {
      if (!messagesRef || !messagesRef.current) return;

      const newestMessage: HTMLUListElement =
        messagesRef.current.lastElementChild as HTMLUListElement;

      if (!newestMessage) return;

      const newestMessageHeight = newestMessage.offsetHeight +
        parseInt(getComputedStyle(newestMessage).marginBottom);

      const containerHeight = messagesRef.current.scrollHeight;
      
      const scrollOffset =
        messagesRef.current.scrollTop + messagesRef.current.offsetHeight;

      // cancels autoscroll if user is scrolling up through older messages
      if ((containerHeight - newestMessageHeight) <= scrollOffset) {
        messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
      }
    };

    if (windowFocused === false) setAlertFavicon();

    autoScroll();
  }, [messages]);

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

  const handleFriendClick = (friend: IUser) => setFocusedFriend(friend);

  const handleMessageInputChange = (e: React.SyntheticEvent<EventTarget>) => {
    setMessageToSend((e.target as HTMLInputElement).value.trim());
  };

  const handleMessageSend = (e: React.KeyboardEvent) => {
    e.preventDefault();  // needed?
    e.stopPropagation();  // needed?

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

      if (!userToWhisper) return;

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
    preventSpam();
    setLoading(false);
  };

  const handleMessageSendTouch = (e: React.TouchEvent) => {
    e.preventDefault();  // needed?
    e.stopPropagation();  // needed?

    //if (e.key && (e.key !== "Enter")) return;

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

      if (!userToWhisper) return;

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
    preventSpam();
    setLoading(false);
  };

  //const handleMobileTabChange = (value: string) => setMobileTab(value);

  const handlePeopleTabChange = (value: string) => setPeopleTab(value);

  const handleRoomInputChange = (e: React.SyntheticEvent<EventTarget>) => {
    setRoomToEnter((e.target as HTMLInputElement).value.trim());
  };

  const handleUserClick = (user: IUser) =>
    user.username !== authname && setFocusedUser(user);
  
  const preventSpam = () => {
    setSpamCount((prev) => prev + 1);

    setTimeout(() => setSpamCount((prev) => prev - 1), 2000);

    if (spamCount > 2) {
      setDebounced(true);
      setTimeout(() => setDebounced(false), 6000);
    }
  };

  const startWhisper = (username: string) => {
    setFocusedFriend(null);
    setFocusedUser(null);
    setMessageToSend(`/w ${username}`);
  };
  
  /*return (messengerView === "mobile")
  ? (
    <MobileMessengerView
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
      handleMessageSendTouch={handleMessageSendTouch}
      users={users}
      onlineFriends={onlineFriends}
      peopleTab={peopleTab}
      mobileTab={mobileTab}
      handlePeopleTabChange={handlePeopleTabChange}
      handleMobileTabChange={handleMobileTabChange}
    />
  )
  :*/
  return (
    <MessengerView
      authname={authname}
      channel={channel}
      feedback={feedback}
      focusedFriend={focusedFriend}
      focusedUser={focusedUser}
      handleChannelChange={handleChannelChange}
      handleConnect={handleConnect}
      handleDisconnect={handleDisconnect}
      handleFriendClick={handleFriendClick}
      handleMessageInputChange={handleMessageInputChange}
      handleMessageSend={handleMessageSend}
      handlePeopleTabChange={handlePeopleTabChange}
      handleRoomInputChange={handleRoomInputChange}
      handleUserClick={handleUserClick}
      loading={loading}
      messages={messages}
      messagesRef={messagesRef}
      messageToSend={messageToSend}
      onlineFriends={onlineFriends}
      peopleTab={peopleTab}
      roomToEnter={roomToEnter}
      startWhisper={startWhisper}
      status={status}
      twoColumnATheme={twoColumnATheme}
      users={users}
    />
  );
}

interface RootState {
  auth: {
    authname: string;
  };
  messenger: {
    channel: string;
    messages: Message[];
    onlineFriends: IUser[];
    status: string;
    users: IUser[];
  };
  nobscapp: {
    windowFocused: boolean;
  };
  user: {
    message: string;
  };
}

type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux & {
  //messengerView: string;
  twoColumnATheme: string;
};

const mapStateToProps = (state: RootState) => ({
  authname: state.auth.authname,
  channel: state.messenger.channel,
  message: state.user.message,
  messages: state.messenger.messages,
  onlineFriends: state.messenger.onlineFriends,
  status: state.messenger.status,
  users: state.messenger.users,
  windowFocused: state.nobscapp.windowFocused
});

const mapDispatchToProps = {
  messengerChangeChannel: (channel: string) =>
    messengerChangeChannel(channel),
  messengerConnect: () => messengerConnect(),
  messengerDisconnect: () => messengerDisconnect(),
  messengerSendMessage: (message: string) => messengerSendMessage(message),
  messengerSendWhisper: (whisper: string, to: string) =>
    messengerSendWhisper(whisper, to)
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(Messenger);