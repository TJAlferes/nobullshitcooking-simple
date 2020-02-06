import React from 'react';

const ChatView = ({
  authname,
  status,
  messagesRef,
  messages,
  messageToSend,
  handleMessageInputChange,
  handleMessageSend
}) => (
  <div className="mobile-messenger__view">
    <div className="messenger-chat">
      <ul className="messenger-chat-messages" ref={messagesRef}>
        <li className="messenger-chat-message">
          <span className="chat-display-admin">COOK EAT WIN REPEAT</span>
        </li>
        {
          messages && messages.map(message => (
            message.user.user === "messengerstatus"
            ? (
              <li className="messenger-chat-message" key={message.ts}>
                <span className="chat-display-admin">{message.message}</span>
              </li>
            )
            : (
              authname === message.user.user
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
          disabled={status !== "Connected"}
        />
      </div>
    </div>
  </div>
);

export default ChatView;