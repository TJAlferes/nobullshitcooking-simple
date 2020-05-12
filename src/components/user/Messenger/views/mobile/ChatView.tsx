import React from 'react';

import { IMessage, IWhisper } from '../../../../../store/messenger/types';

export function ChatView({
  authname,
  status,
  messagesRef,
  messages,
  messageToSend,
  handleMessageInputChange,
  handleMessageSendTouch
}: Props): JSX.Element {
  const displayMessage = (message: IMessage) => {
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
    <div className="mobile-messenger__view">
      <div className="messenger-chat">
        <ul className="messenger-chat-messages" ref={messagesRef}>
          <li className="messenger-chat-message">
            <span className="chat-display-admin">COOK EAT WIN REPEAT</span>
          </li>
          {
            messages && messages.map((message) => {
              const messageIntersection = message as MessageIntersection;
              if (messageIntersection.chatMessageId) {
                return displayMessage(messageIntersection);
              }
              if (messageIntersection.whisperId) {
                return displayWhisper(messageIntersection);
              }
            })
          }
        </ul>
        <div className="messenger-chat-input">
          <input
            type="text" name="chat-input"
            value={messageToSend}
            onChange={handleMessageInputChange}
            onTouchEnd={(e) => handleMessageSendTouch(e)}
            disabled={status !== "Connected"}
          />
        </div>
      </div>
    </div>
  );
}
type MessageIntersection = IMessage & IWhisper;

type Props = {
  authname: string;
  status: string;
  messagesRef: React.RefObject<HTMLUListElement>;
  messages: Array<IMessage|IWhisper>;
  messageToSend: string;
  handleMessageInputChange(e: React.SyntheticEvent<EventTarget>): void;
  handleMessageSendTouch(e: React.TouchEvent): void;
};