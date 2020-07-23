import React from 'react';

import {
  Message,
  IMessage,
  IWhisper
} from '../../../../../store/messenger/types';

export function ChatView({
  authname,
  status,
  messagesRef,
  messages,
  messageToSend,
  handleMessageInputChange,
  handleMessageSend
}: Props): JSX.Element {
  const displayMessage = (message: IMessage) => {
    // status message
    if (message.user.username === "messengerstatus") {
      return (
        <li className="messenger-chat-message" key={message.chatMessageId}>
          <span className="chat-ts">{message.ts}{' '}</span>
          <span className="chat-display-admin">
            {message.chatMessageText}
          </span>
        </li>
      );
    }

    // sent message
    if (authname === message.user.username) {
      return (
        <li className="messenger-chat-message" key={message.chatMessageId}>
          <span className="chat-ts">{message.ts}{' '}</span>
          <span className="chat-display-username-self">
            {message.user.username}:{' '}
          </span>
          {message.chatMessageText}
        </li>
      );
    }

    // received message
    return (
      <li className="messenger-chat-message" key={message.chatMessageId}>
        <span className="chat-ts">{message.ts}{' '}</span>
        <span className="chat-display-username-other">
          {message.user.username}:{' '}
        </span>
        {message.chatMessageText}
      </li>
    );
  };

  const displayWhisper = (message: IWhisper) => {
    // sent whisper
    if (authname === message.user.username) {
      return (
        <li className="messenger-chat-message" key={message.whisperId}>
          <span className="chat-ts">{message.ts}{' '}</span>
          <span className="chat-display-username-self">
            You whisper to{' '}{message.to}:{' '}
          </span>
          <span className="chat-whisper">{message.whisperText}</span>
        </li>
      );
    }

    // received whisper
    return (
      <li className="messenger-chat-message" key={message.whisperId}>
        <span className="chat-ts">{message.ts}{' '}</span>
        <span className="chat-display-username-other">
          {message.user.username}{' '}whispers to you:{' '}
        </span>
        <span className="chat-whisper">{message.whisperText}</span>
      </li>
    );
  };

  return (
    <div className="messenger-chat">

      <ul className="messenger-chat-messages" ref={messagesRef}>
        <li className="messenger-chat-message">
          <span className="chat-display-admin">COOK EAT WIN REPEAT</span>
        </li>
        {messages && messages.map(message => {
          if (message.kind === "message") return displayMessage(message);
          if (message.kind === "whisper") return displayWhisper(message);
        })}
      </ul>

      <div className="messenger-chat-input">
        <input
          type="text"
          name="chat-input"
          value={messageToSend}
          onChange={handleMessageInputChange}
          onKeyUp={(e) => handleMessageSend(e)}
          disabled={status !== "Connected"}
        />
      </div>

    </div>
  );
}

type Props = {
  authname: string;
  status: string;
  messagesRef: React.RefObject<HTMLUListElement>;
  messages: Message[];
  messageToSend: string;
  handleMessageInputChange(e: React.SyntheticEvent<EventTarget>): void;
  handleMessageSend(e: React.KeyboardEvent): void;
};