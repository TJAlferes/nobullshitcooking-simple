import React from 'react';

import { IMessage, IWhisper, IUser } from '../../../../store/messenger/types';
import { ChatView } from './mobile/ChatView'
import OptionsView from './mobile/OptionsView';
import PeopleView from './mobile/PeopleView';
import './mobileMessenger.css';

export function MobileMessengerView({
  authname,
  feedback,
  loading,
  status,
  handleConnect,
  handleDisconnect,
  channel,
  roomToEnter,
  handleRoomInputChange,
  handleChannelChange,
  messagesRef,
  messages,
  messageToSend,
  handleMessageInputChange,
  handleMessageSendTouch,
  mobileTab,
  peopleTab,
  users,
  onlineFriends,
  handlePeopleTabChange,
  handleMobileTabChange
}: Props): JSX.Element {
  return (
    <div className="mobile-messenger">

      {/*<h1>Messenger</h1>*/}

      {/*<p className="mobile-messenger__error-message">{feedback}</p>*/}

      <div className="mobile-messenger__top-tabs">
        <button
          className={(mobileTab === "Options")
            ? "mobile-messenger__top-tab chat-top-nav-current"
            : "mobile-messenger__top-tab"
          }
          onTouchEnd={() => handleMobileTabChange("Options")}
        >
          Options
        </button>
        <button
          className={(mobileTab === "Chat")
            ? "mobile-messenger__top-tab chat-top-nav-current"
            : "mobile-messenger__top-tab"
          }
          onTouchEnd={() => handleMobileTabChange("Chat")}
        >
          Chat
        </button>
        <button
          className={(mobileTab === "People")
            ? "mobile-messenger__top-tab chat-top-nav-current"
            : "mobile-messenger__top-tab"
          }
          onTouchEnd={() => handleMobileTabChange("People")}
        >
          People
        </button>
      </div>

      <div className="mobile-messenger__views">

        {mobileTab === "Options" && (
          <OptionsView
            loading={loading}
            status={status}
            channel={channel}
            roomToEnter={roomToEnter}
            handleRoomInputChange={handleRoomInputChange}
            handleChannelChange={handleChannelChange}
            handleConnect={handleConnect}
            handleDisconnect={handleDisconnect}
          />
        )}

        {mobileTab === "Chat" && (
          <ChatView
            authname={authname}
            status={status}
            messagesRef={messagesRef}
            messages={messages}
            messageToSend={messageToSend}
            handleMessageInputChange={handleMessageInputChange}
            handleMessageSendTouch={handleMessageSendTouch}
          />
        )}

        {mobileTab === "People" && (
          <PeopleView
            users={users}
            onlineFriends={onlineFriends}
            peopleTab={peopleTab}
            handlePeopleTabChange={handlePeopleTabChange}
          />
        )}
      </div>

    </div>
  );
}

type Props = {
  authname: string;
  feedback: string;
  loading: boolean;
  status: string;
  handleConnect(): void;
  handleDisconnect(): void;
  channel: string;
  roomToEnter: string;
  handleRoomInputChange(e: React.SyntheticEvent<EventTarget>): void;
  handleChannelChange(): void;
  messagesRef: React.RefObject<HTMLUListElement>;
  messages: Array<IMessage | IWhisper>;
  messageToSend: string;
  handleMessageInputChange(e: React.SyntheticEvent<EventTarget>): void;
  handleMessageSendTouch(e: React.TouchEvent): void;
  mobileTab: string;
  peopleTab: string;
  users: IUser[];
  onlineFriends: IUser[];
  handlePeopleTabChange(value: string): void;
  handleMobileTabChange(value: string): void;
};