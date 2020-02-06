import React from 'react';

import LeftNav from '../../../LeftNav/LeftNav';

import ChatView from './desktop/ChatView';
import OptionsView from './desktop/OptionsView';
import PeopleView from './desktop/PeopleView';

import './messenger.css';
import OptionsView from './desktop/OptionsView';

const MessengerView = ({
  twoColumnATheme,
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

  users,
  onlineFriends,

  peopleTab,
  handlePeopleTabChange
}) => (
  <div className={`messenger two-column-a ${twoColumnATheme}`}>

    <LeftNav />

    <section>

      <h1>Messenger</h1>

      <p className="error-message">{feedback}</p>

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

      <div className="messenger-main">

        <ChatView
          authname={authname}
          status={status}
          messagesRef={messagesRef}
          messages={messages}
          messageToSend={messageToSend}
          handleMessageInputChange={handleMessageInputChange}
          handleMessageSend={handleMessageSend}
        />

        <PeopleView
          users={users}
          onlineFriends={onlineFriends}
          peopleTab={peopleTab}
          handlePeopleTabChange={handlePeopleTabChange}
        />

      </div>

    </section>

  </div>
);

export default MessengerView;