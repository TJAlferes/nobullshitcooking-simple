import React from 'react';

import ChatView from './mobile/ChatView'
import OptionsView from './mobile/OptionsView';
import PeopleView from './mobile/PeopleView';

import './mobileMessenger.css';

const MobileMessengerView = ({
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
  handleMessageSend,

  mobileTab,
  users,
  onlineFriends,
  handlePeopleTabChange,
  handleMobileTabTouch
}) => (
  <div className="mobile-messenger">

    {/*<h1>Messenger</h1>*/}

    {/*<p className="mobile-messenger__error-message">{feedback}</p>*/}

    <div className="mobile-messenger__top-tabs">
      <button
        className={(mobileTab === "Options")
          ? "mobile-messenger__top-tab chat-top-nav-current"
          : "mobile-messenger__top-tab"
        }
        onClick={() => handleMobileTabTouch("Options")}
      >
        Options
      </button>
      <button
        className={(mobileTab === "Chat")
          ? "mobile-messenger__top-tab chat-top-nav-current"
          : "mobile-messenger__top-tab"
        }
        onClick={() => handleMobileTabTouch("Chat")}
      >
        Chat
      </button>
      <button
        className={(mobileTab === "People")
          ? "mobile-messenger__top-tab chat-top-nav-current"
          : "mobile-messenger__top-tab"
        }
        onClick={() => handleMobileTabTouch("People")}
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
          handleMessageSend={handleMessageSend}
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

export default MobileMessengerView;