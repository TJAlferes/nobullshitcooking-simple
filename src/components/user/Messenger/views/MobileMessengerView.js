import React from 'react';

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

  tab,
  topTab,
  users,
  onlineFriends,
  handleUsersInRoomTabClick,
  handleFriendsTabClick,
  handleOptionsTopTabClick,
  handleChatTopTabClick,
  handlePeopleTopTabClick
}) => (
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
                  <img src={`https://s3.amazonaws.com/nobsc-user-avatars${user.user}-tiny`} />
                  <span>{user.user}</span>
                </li>
              ))}
            </ul>
          )}

          {tab === "Friends" && (
            <ul className="mobile-messenger__friends">
              {props.onlineFriends && props.onlineFriends.map(online => (
                <li className="mobile-messenger__friend" key={online.user}>
                  <img src={`https://s3.amazonaws.com/nobsc-user-avatars${online.user}-tiny`} />
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

export default MobileMessengerView;