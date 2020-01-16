import React from 'react';

import LeftNav from '../../../LeftNav/LeftNav';

import './userMessenger.css';

const UserMessengerView = ({
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

  tab,
  users,
  onlineFriends,
  handleUsersInRoomTabClick,
  handleFriendsTabClick
}) => (
  <div className={`messenger two-column-a ${twoColumnATheme}`}>

    <LeftNav />

    <section>

      <h1>Messenger</h1>

      <p className="error-message">{feedback}</p>

      <div className="messenger-room">
        <div className="messenger-connect-disconnect-outer">
          <div className="messenger-connect-disconnect-container">
            {
              status === "Connected"
              ? (
                <button
                  className="messenger-connect-disconnect"
                  onClick={handleDisconnect}
                  disabled={loading}
                >
                  Disconnect
                </button>
              )
              : (
                <button
                  className="messenger-connect-disconnect"
                  onClick={handleConnect}
                  disabled={loading}
                >
                  Connect
                </button>
              )
            }
          </div>
          <span className="messenger-connect-disconnect-mobile-spacer"></span>
        </div>

        <div className="messenger-current-container">
          <span className="messenger-channel-switch">Current Room:</span>
          <span className="messenger-channel-current">{channel}</span>
        </div>

        <div className="messenger-go-container">
          <span className="messenger-channel-label">Go To Room:</span>
          <input
            className="messenger-channel-input"
            type="text"
            name="channel-input"
            value={roomToEnter}
            onChange={handleRoomInputChange}
            disabled={(status !== "Connected") || loading}
          />
          <div className="messenger-channel-button-container">
            <button
              className="messenger-channel-button"
              onClick={handleChannelChange}
              disabled={(status !== "Connected") || loading}
            >
              Enter
            </button>
          </div>
        </div>
      </div>



      <div className="messenger-main">

        <div className="messenger-chat">
          <ul className="messenger-chat-messages" ref={messagesRef}>
            <li className="messenger-chat-message">
              <span className="chat-display-admin">COOK EAT WIN REPEAT</span>
            </li>
            {
              messages && messages.map(message => (
                message.user.user === "messengerstatus"
                ? (
                  <li className="messenger-chat-message" key={message.id}>
                    <span className="chat-ts">{message.ts}{' '}</span>
                    <span className="chat-display-admin">
                      {message.message}
                    </span>
                  </li>
                )
                : (
                  authname === message.user.user
                  ? (
                    message.whisper
                    ? (
                      <li className="messenger-chat-message" key={message.id}>
                        <span className="chat-ts">{message.ts}{' '}</span>
                        <span className="chat-display-username-self">
                          You whisper to{' '}{message.to}:{' '}
                        </span>
                        <span className="chat-whisper">{message.whisper}</span>
                      </li>
                    )
                    : (
                      <li className="messenger-chat-message" key={message.id}>
                        <span className="chat-ts">{message.ts}{' '}</span>
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
                      <li className="messenger-chat-message" key={message.id}>
                        <span className="chat-ts">{message.ts}{' '}</span>
                        <span className="chat-display-username-other">
                          {message.user.user}{' '}whispers to you:{' '}
                        </span>
                        <span className="chat-whisper">{message.whisper}</span>
                      </li>
                    )
                    : (
                      <li className="messenger-chat-message" key={message.id}>
                        <span className="chat-ts">{message.ts}{' '}</span>
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
              disabled={status !== "Connected"}
            />
          </div>
        </div>



        <div className="messenger-people">
          <div className="messenger-people-tabs">
            <button
              className={(tab === "Room")
                ? "messenger-people-tab chat-nav-current"
                : "messenger-people-tab"
              }
              onClick={handleUsersInRoomTabClick}
            >
              Room
            </button>
            <button
              className={(tab === "Friends")
                ? "messenger-people-tab chat-nav-current"
                : "messenger-people-tab"
              }
              onClick={handleFriendsTabClick}
            >
              Friends
            </button>
          </div>
          {tab === "Room" && (
            <ul className="messenger-users-in-room">
              {users && users.map(user => (
                <li className="messenger-user-in-room" key={user.user}>
                  <img src={`https://s3.amazonaws.com/nobsc-user-avatars/${user.avatar}-tiny`} />
                  <span>{user.user}</span>
                </li>
              ))}
            </ul>
          )}
          {tab === "Friends" && (
            <ul className="messenger-friends">
              {onlineFriends && onlineFriends.map(online => (
                <li className="messenger-friend" key={online.user}>
                  <img src={`https://s3.amazonaws.com/nobsc-user-avatars/${online.avatar}-tiny`} />
                  <span>{online.user}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

      </div>

    </section>

  </div>
);

export default UserMessengerView;