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
  <div className="messenger-chat">
    <ul className="messenger-chat-messages" ref={messagesRef}>
      <li className="messenger-chat-message">
        <span className="chat-display-admin">COOK EAT WIN REPEAT</span>
      </li>
      {
        messages && messages.map(message => (
          message.user.username === "messengerstatus"
          ? (
            <li className="messenger-chat-message" key={message.chatMessageId}>
              <span className="chat-ts">{message.ts}{' '}</span>
              <span className="chat-display-admin">
                {message.chatMessageText}
              </span>
            </li>
          )
          : (
            authname === message.user.username
            ? (
              message.whisperText
              ? (
                <li className="messenger-chat-message" key={message.whisperId}>
                  <span className="chat-ts">{message.ts}{' '}</span>
                  <span className="chat-display-username-self">
                    You whisper to{' '}{message.to}:{' '}
                  </span>
                  <span className="chat-whisper">{message.whisperText}</span>
                </li>
              )
              : (
                <li className="messenger-chat-message" key={message.chatMessageId}>
                  <span className="chat-ts">{message.ts}{' '}</span>
                  <span className="chat-display-username-self">
                    {message.user.username}:{' '}
                  </span>
                  {message.chatMessageText}
                </li>
              )
            )
            : (
              message.whisperText
              ? (
                <li className="messenger-chat-message" key={message.whisperId}>
                  <span className="chat-ts">{message.ts}{' '}</span>
                  <span className="chat-display-username-other">
                    {message.user.username}{' '}whispers to you:{' '}
                  </span>
                  <span className="chat-whisper">{message.whisperText}</span>
                </li>
              )
              : (
                <li className="messenger-chat-message" key={message.chatMessageId}>
                  <span className="chat-ts">{message.ts}{' '}</span>
                  <span className="chat-display-username-other">
                    {message.user.username}:{' '}
                  </span>
                  {message.chatMessageText}
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
);

export default ChatView;