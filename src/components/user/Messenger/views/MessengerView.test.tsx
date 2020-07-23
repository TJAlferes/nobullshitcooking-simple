import { shallow } from 'enzyme';
import React, { useRef } from 'react';

import { ChatView } from './desktop/ChatView';
import { OptionsView } from './desktop/OptionsView';
import { PeopleView } from './desktop/PeopleView';
import { MessengerView } from './MessengerView';

jest.mock('react', () => {
  const originalModule = jest.requireActual('react');
  const mockUseRef = jest.fn();
  return {...originalModule, useRef: mockUseRef};
});

const messagesRef = useRef<HTMLUListElement>(null);
const handleConnect = jest.fn();
const handleDisconnect = jest.fn();
const handleRoomInputChange = jest.fn();
const handleChannelChange = jest.fn();
const handleMessageInputChange = jest.fn();
const handleMessageSend = jest.fn();
const handlePeopleTabChange = jest.fn();
const initialProps = {
  twoColumnATheme: "light",
  authname: "Person",
  feedback: "Some message.",
  loading: false,
  status: "Disconnected",
  handleConnect,
  handleDisconnect,
  channel: "5067",
  roomToEnter: "",
  handleRoomInputChange,
  handleChannelChange,
  messagesRef,
  messages: [],
  messageToSend: "How goes it?",
  handleMessageInputChange,
  handleMessageSend,
  users: [],
  onlineFriends: [],
  peopleTab: "Room",
  handlePeopleTabChange
};

afterEach(() => {
  jest.clearAllMocks();
});

describe('MessengerView', () => {
  const wrapper = shallow(<MessengerView {...initialProps} />);

  it('displays feedback', () => {
    expect(wrapper.find('p.messenger-feedback').text())
    .toEqual("Some message.");
  });

  it('displays OptionsView component', () => {
    expect(wrapper.find(OptionsView)).toHaveLength(1);
  });

  it('displays ChatView component', () => {
    expect(wrapper.find(ChatView)).toHaveLength(1);
  });

  it('displays PeopleView component', () => {
    expect(wrapper.find(PeopleView)).toHaveLength(1);
  });
});