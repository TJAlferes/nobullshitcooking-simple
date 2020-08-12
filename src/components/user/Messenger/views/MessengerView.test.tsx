import { shallow } from 'enzyme';
import React, { useRef } from 'react';

import { ChatView } from './desktop/ChatView/ChatView';
import { OptionsView } from './desktop/OptionsView/OptionsView';
import { PeopleView } from './desktop/PeopleView/PeopleView';
import { MessengerView } from './MessengerView';

jest.mock('react', () => {
  const originalModule = jest.requireActual('react');
  const mockUseRef = jest.fn();
  return {...originalModule, useRef: mockUseRef};
});

const handleConnect = jest.fn();
const handleDisconnect = jest.fn();
const handleRoomInputChange = jest.fn();
const handleChannelChange = jest.fn();
const handleMessageInputChange = jest.fn();
const handleMessageSend = jest.fn();
const handlePeopleTabChange = jest.fn();
const handleFriendClick = jest.fn();
const handleUserClick = jest.fn();
const messagesRef = useRef<HTMLUListElement>(null);
const startWhisper = jest.fn();

const initialProps = {
  authname: "Person",
  channel: "5067",
  feedback: "Some message.",
  focusedFriend: null,
  focusedUser: null,
  handleChannelChange,
  handleConnect,
  handleDisconnect,
  handleFriendClick,
  handleMessageInputChange,
  handleMessageSend,
  handlePeopleTabChange,
  handleRoomInputChange,
  handleUserClick,
  loading: false,
  messages: [],
  messagesRef,
  messageToSend: "How goes it?",
  onlineFriends: [],
  peopleTab: "Room",
  roomToEnter: "",
  startWhisper,
  status: "Disconnected",
  twoColumnATheme: "light",
  users: []
};

afterEach(() => {
  jest.clearAllMocks();
});

describe('MessengerView', () => {
  const wrapper = shallow(<MessengerView {...initialProps} />);

  it('displays feedback', () => {
    expect(wrapper.find('p.messenger__feedback').text())
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