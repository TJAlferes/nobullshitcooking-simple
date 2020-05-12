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
  return (
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
            onKeyUp={(e) => handleMessageSendTouch(e)}
            disabled={status !== "Connected"}
          />
        </div>
      </div>
    </div>
  );
}

type Props = {
  authname: string;
  status: string;
  messagesRef: React.RefObject<HTMLUListElement>;
  messages: Array<IMessage | IWhisper>;
  messageToSend: string;
  handleMessageInputChange(e: React.SyntheticEvent<EventTarget>): void;
  handleMessageSendTouch(e: React.TouchEvent): void;
};