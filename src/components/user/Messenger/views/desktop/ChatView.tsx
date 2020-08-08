import React from 'react';

import {
  Message,
  IMessage,
  IWhisper
} from '../../../../../store/messenger/types';

export function ChatView({
  authname,
  handleMessageInputChange,
  handleMessageSend,
  messages,
  messagesRef,
  messageToSend,
  status
}: Props): JSX.Element {
  const displayMessage = (message: IMessage) => {
    // status message
    if (message.user.username === "messengerstatus") {
      return (
        <li className="messenger-chat-message" key={message.id}>
          <span className="chat-ts">{message.ts}{' '}</span>
          <span className="chat-display-admin">{message.text}</span>
        </li>
      );
    }

    // sent message
    if (authname === message.user.username) {
      return (
        <li className="messenger-chat-message" key={message.id}>
          <span className="chat-ts">{message.ts}{' '}</span>
          <span className="chat-display-username-self">
            {message.user.username}:{' '}
          </span>
          {message.text}
        </li>
      );
    }

    // received message
    return (
      <li className="messenger-chat-message" key={message.id}>
        <span className="chat-ts">{message.ts}{' '}</span>
        <span className="chat-display-username-other">
          {message.user.username}:{' '}
        </span>
        {message.text}
      </li>
    );
  };

  const displayWhisper = (message: IWhisper) => {
    // sent whisper
    if (authname === message.user.username) {
      return (
        <li className="messenger-chat-message" key={message.id}>
          <span className="chat-ts">{message.ts}{' '}</span>
          <span className="chat-display-username-self">
            You whisper to{' '}{message.to}:{' '}
          </span>
          <span className="chat-whisper">{message.text}</span>
        </li>
      );
    }

    // received whisper
    return (
      <li className="messenger-chat-message" key={message.id}>
        <span className="chat-ts">{message.ts}{' '}</span>
        <span className="chat-display-username-other">
          {message.user.username}{' '}whispers to you:{' '}
        </span>
        <span className="chat-whisper">{message.text}</span>
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
          disabled={status !== "Connected"}
          name="chat-input"
          onChange={handleMessageInputChange}
          onKeyUp={(e) => handleMessageSend(e)}
          type="text"
          value={messageToSend}
        />
      </div>

    </div>
  );
}

type Props = {
  authname: string;
  handleMessageInputChange(e: React.SyntheticEvent<EventTarget>): void;
  handleMessageSend(e: React.KeyboardEvent): void;
  messages: Message[];
  messagesRef: React.RefObject<HTMLUListElement>;
  messageToSend: string;
  status: string;
};