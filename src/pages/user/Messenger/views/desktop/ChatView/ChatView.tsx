import React from 'react';

import {
  Message,
  IMessage,
  IWhisper
} from '../../../../../../store/messenger/types';
import './chatView.css';

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
      return <><span className="message__admin">{message.text}</span></>;
    }

    // sent message
    if (authname === message.user.username) {
      return (
        <>
          <span className="message__self">{message.user.username}:{' '}</span>
          {message.text}
        </>
      );
    }

    // received message
    return (
      <>
        <span className="message__other">{message.user.username}:{' '}</span>
        {message.text}
      </>
    );
  };

  const displayWhisper = (message: IWhisper) => {
    // sent whisper
    if (authname === message.user.username) {
      return (
        <>
          <span className="message__self">
            You whisper to{' '}{message.to}:{' '}
          </span>
          <span className="message__whisper">{message.text}</span>
        </>
      );
    }

    // received whisper
    return (
      <>
        <span className="message__other">
          {message.user.username}{' '}whispers to you:{' '}
        </span>
        <span className="message__whisper">{message.text}</span>
      </>
    );
  };

  return (
    <div className="messenger__chat">

      <ul className="chat__messages" ref={messagesRef}>
        <li className="chat__message">
          <span className="message__admin">COOK EAT WIN REPEAT</span>
        </li>
        {messages && messages.map(message => (
          <li className="chat__message" key={message.id}>
            <span className="message__ts">{message.ts}{' '}</span>
            {(message.kind === "message") && displayMessage(message)}
            {(message.kind === "whisper") && displayWhisper(message)}
          </li>
        ))}
      </ul>

      <div className="chat__input">
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