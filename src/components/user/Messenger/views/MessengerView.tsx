import React from 'react';

import { Message, IUser } from '../../../../store/messenger/types';
import LeftNav from '../../../LeftNav/LeftNav';
import { ChatView } from './desktop/ChatView/ChatView';
import { OptionsView } from './desktop/OptionsView/OptionsView';
import { PeopleView } from './desktop/PeopleView/PeopleView';
import './messenger.css';

export function MessengerView({
  authname,
  channel,
  feedback,
  focusedFriend,
  focusedUser,
  handleChannelChange,
  handleConnect,
  handleDisconnect,
  handleFriendClick,
  handleMessageInputChange,
  handleMessageSend,
  handlePeopleTabChange,
  handleRoomInputChange,
  handleUserClick,
  loading,
  messages,
  messagesRef,
  messageToSend,
  onlineFriends,
  peopleTab,
  roomToEnter,
  startWhisper,
  status,
  twoColumnATheme,
  users
}: Props): JSX.Element {
  return (
    <div className={`messenger two-column-a ${twoColumnATheme}`}>

      <LeftNav />

      <section>

        <h1>Messenger</h1>

        <p className="messenger__feedback">{feedback}</p>

        <OptionsView
          channel={channel}
          handleChannelChange={handleChannelChange}
          handleConnect={handleConnect}
          handleDisconnect={handleDisconnect}
          handleRoomInputChange={handleRoomInputChange}
          loading={loading}
          roomToEnter={roomToEnter}
          status={status}
        />

        <div className="messenger__main">

          <ChatView
            authname={authname}
            handleMessageInputChange={handleMessageInputChange}
            handleMessageSend={handleMessageSend}
            messages={messages}
            messagesRef={messagesRef}
            messageToSend={messageToSend}
            status={status}
          />

          <PeopleView
            focusedFriend={focusedFriend}
            focusedUser={focusedUser}
            handleFriendClick={handleFriendClick}
            handlePeopleTabChange={handlePeopleTabChange}
            handleUserClick={handleUserClick}
            onlineFriends={onlineFriends}
            peopleTab={peopleTab}
            startWhisper={startWhisper}
            users={users}
          />

        </div>

      </section>

    </div>
  );
}

type Props = {
  authname: string;
  channel: string;
  feedback: string;
  focusedFriend: IUser | null;
  focusedUser: IUser | null;
  handleChannelChange(): void;
  handleConnect(): void;
  handleDisconnect(): void;
  handleFriendClick(friend: IUser): void;
  handleMessageInputChange(e: React.SyntheticEvent<EventTarget>): void;
  handleMessageSend(e: React.KeyboardEvent): void;
  handlePeopleTabChange(value: string): void;
  handleRoomInputChange(e: React.SyntheticEvent<EventTarget>): void;
  handleUserClick(user: IUser): void;
  loading: boolean;
  messages: Message[];
  messagesRef: React.RefObject<HTMLUListElement>;
  messageToSend: string;
  onlineFriends: IUser[];
  peopleTab: string;
  roomToEnter: string;
  startWhisper(username: string): void;
  status: string;
  twoColumnATheme: string;
  users: IUser[];
};