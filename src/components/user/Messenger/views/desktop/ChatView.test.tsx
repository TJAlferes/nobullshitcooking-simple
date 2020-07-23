import { shallow } from 'enzyme';
import React, { useRef } from 'react';

import {
  KMessage,
  KWhisper
} from '../../../../../store/messenger/types';
import { ChatView } from './ChatView';

jest.mock('react', () => {
  const originalModule = jest.requireActual('react');
  const mockUseRef = jest.fn();
  return {...originalModule, useRef: mockUseRef};
});

const messagesRef = useRef<HTMLUListElement>(null);
const handleMessageInputChange = jest.fn();
const handleMessageSend = jest.fn();
const initialProps = {
  authname: "Person",
  status: "Online",
  messagesRef,
  messages: [
    {
      kind: KMessage,
      chatMessageId: "1",
      chatMessageText: "Some status.",
      room: "5067",
      user: {
        userId: "1",
        username: "messengerstatus",
        avatar: "messengerstatus"
      },
      ts: "sometime"
    },
    {
      kind: KMessage,
      chatMessageId: "2",
      chatMessageText: "Hey all!",
      room: "5067",
      user: {
        userId: "150",
        username: "Person",
        avatar: "Person"
      },
      ts: "sometime"
    },
    {
      kind: KMessage,
      chatMessageId: "3",
      chatMessageText: "Hey there!",
      room: "5067",
      user: {
        userId: "149",
        username: "Person2",
        avatar: "Person2"
      },
      ts: "sometime"
    },
    {
      kind: KWhisper,
      whisperId: "4",
      whisperText: "You good?",
      to: "Person2",
      user: {
        userId: "150",
        username: "Person",
        avatar: "Person"
      },
      ts: "sometime"
    },
    {
      kind: KWhisper,
      whisperId: "5",
      whisperText: "Yes",
      to: "Person",
      user: {
        userId: "149",
        username: "Person2",
        avatar: "Person2"
      },
      ts: "sometime"
    }
  ],
  messageToSend: "brb real quick",
  handleMessageInputChange,
  handleMessageSend
};

afterEach(() => {
  jest.clearAllMocks();
});

describe('MessengerView', () => {
  const wrapper = shallow(<ChatView {...initialProps} />);

  it(`
    displays a ul element
    with className messenger-chat-messages and
    with messagesRef as ref
  `, () => {
    expect(wrapper.find('ul.messenger-chat-messages').prop('ref'))
    .toEqual(messagesRef);
  });

  describe('when messages contain a status message', () => {
    it(`
      displays a span
      with className chat-display-admin and
      with text Some status.
    `, () => {
      expect(wrapper.find('span.chat-display-admin').text())
      .toEqual('Some status.');
    });
  });

  describe('when messages contain a sent message', () => {
    it(`
      displays a span element
      with className chat-display-username-self and
      with text 'Person: '
    `, () => {
      expect(wrapper.find('span.chat-display-username-self').at(0).text())
      .toEqual('Person: ');
    });

    it(`
      displays an li element
      with className messenger-chat-message
      with text 'Hey all!'
    `, () => {
      expect(wrapper.find('li.messenger-chat-message').at(0).text())
      .toEqual('Hey all!');
    });
  });

  describe('when messages contain a received message', () => {
    it(`
      displays a span element
      with className chat-display-username-other and
      with text 'Person2: '
    `, () => {
      expect(wrapper.find('span.chat-display-username-other').at(0).text())
      .toEqual('Person2: ');
    });

    it(`
      displays an li element
      with className messenger-chat-message
      with text 'Hey there!'
    `, () => {
      expect(wrapper.find('li.messenger-chat-message').at(1).text())
      .toEqual('Hey there!');
    });
  });

  describe('when messages contain a sent whisper', () => {
    it(`
      displays a span element
      with className chat-display-username-self
      and text 'You whisper to Person2: '
    `, () => {
      expect(wrapper.find('span.chat-display-username-self').at(1).text())
      .toEqual('You whisper to Person2: ');
    });

    it('displays a span with className chat-whisper and text You good?', () => {
      expect(wrapper.find('span.chat-whisper').at(0).text())
      .toEqual('You good?');
    });
  });

  describe('when messages contain a received whisper', () => {
    it(`
      displays a span element
      with className chat-display-username-other
      with text 'Person2 whispers to you: '
    `, () => {
      expect(wrapper.find('span.chat-display-username-other').at(1).text())
      .toEqual('Person2 whispers to you: ');
    });

    it('displays a span with className chat-whisper and text Yes', () => {
      expect(wrapper.find('span.chat-whisper').at(1).text()).toEqual('Yes');
    });
  });

  it('displays an input element with value brb real quick', () => {
    expect(wrapper.find('input').prop('value')).toEqual('brb real quick');
  });
});