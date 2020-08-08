import { mount } from 'enzyme';
import React from 'react';

import { ChatView } from './views/desktop/ChatView';
import { PeopleView } from './views/desktop/PeopleView';
import { Messenger } from './Messenger';

window.scrollTo = jest.fn();

jest.mock('../../LeftNav/LeftNav');

const messengerChangeChannel = jest.fn();
const messengerConnect = jest.fn();
const messengerDisconnect = jest.fn();
const messengerSendMessage = jest.fn();
const messengerSendWhisper = jest.fn();

const initialProps = {
  authname: "Person",
  channel: "5067",
  message: "Some message.",
  messages: [],
  messengerChangeChannel,
  messengerConnect,
  messengerDisconnect,
  messengerSendMessage,
  messengerSendWhisper,
  //messengerView,
  onlineFriends: [{id: "151", username: "Person2", avatar: "Person2"}],
  status: "Connected",
  twoColumnATheme: "light",
  users: [
    {id: "150", username: "Person", avatar: "Person"},
    {id: "151", username: "Person2", avatar: "Person2"},
    {id: "152", username: "Person3", avatar: "Person3"}
  ],
  windowFocused: true,
};

afterEach(() => {
  jest.clearAllMocks();
});

describe('Messenger', () => {
  const wrapper = mount(<Messenger {...initialProps} />);

  it('should record and display changes to roomToEnter', () => {
    wrapper.find('input[name="channel-input"]')
    .simulate('change', {target: {name: "channel-input", value: "5068"}});

    expect(wrapper.find('input[name="channel-input"]').props().value)
    .toEqual("5068");
  });

  it('should submit roomToEnter', () => {
    wrapper.find('input[name="channel-input"]')
    .simulate('change', {target: {name: "channel-input", value: "5068"}});

    wrapper.find('button.messenger-channel-button').simulate('click');

    expect(messengerChangeChannel).toHaveBeenCalledTimes(1);
    expect(messengerChangeChannel).toHaveBeenCalledWith("5068");
  });

  it('should not submit roomToEnter when no room provided', () => {
    wrapper.find('input[name="channel-input"]')
    .simulate('change', {target: {name: "channel-input", value: ""}});

    wrapper.find('button.messenger-channel-button').simulate('click');

    expect(messengerChangeChannel).not.toHaveBeenCalled();
  });

  it('should record and display changes to messageToSend', () => {
    wrapper.find('input[name="chat-input"]')
    .simulate('change', {target: {name: "chat-input", value: "BBQ tonight!"}});

    expect(wrapper.find('input[name="chat-input"]').props().value)
    .toEqual("BBQ tonight!");
  });

  it('should submit messageToSend', () => {
    wrapper.find('input[name="chat-input"]')
    .simulate('change', {target: {name: "chat-input", value: "BBQ tonight!"}});

    wrapper.find('input[name="chat-input"]').simulate('keyUp', {key: 'Enter'});

    expect(messengerSendMessage).toHaveBeenCalledTimes(1);
    expect(messengerSendMessage).toHaveBeenCalledWith("BBQ tonight!");
  });

  it('should submit messageToSend when whispering', () => {
    wrapper.find('input[name="chat-input"]')
    .simulate(
      'change',
      {target: {name: "chat-input", value: "/w Person2 BBQ tonight?"}}
    );

    wrapper.find('input[name="chat-input"]').simulate('keyUp', {key: 'Enter'});

    expect(messengerSendWhisper).toHaveBeenCalledTimes(1);
    expect(messengerSendWhisper)
    .toHaveBeenCalledWith("BBQ tonight?", "Person2");
  });

  it('should not submit messageToSend when no message provided', () => {
    wrapper.find('input[name="chat-input"]')
    .simulate('change', {target: {name: "chat-input", value: ""}});

    wrapper.find('input[name="chat-input"]').simulate('keyUp', {key: 'Enter'});

    expect(messengerSendMessage).not.toHaveBeenCalled();
  });

  it('should change peopleTab when clicked', () => {
    expect(wrapper.find(PeopleView).prop("peopleTab")).toEqual("Room");

    wrapper.find('button.messenger-people-tab').at(1).simulate('click');

    expect(wrapper.find(PeopleView).prop("peopleTab")).toEqual("Friends");

    wrapper.find('button.messenger-people-tab').at(0).simulate('click');

    expect(wrapper.find(PeopleView).prop("peopleTab")).toEqual("Room");
  });

  it('should not focus user in room if self', () => {
    wrapper.find('li.messenger-user-in-room').at(0).simulate('click');

    expect(wrapper.find(PeopleView).prop("focusedUser")).toEqual(null);
  });

  it('should focus user in room', () => {
    wrapper.find('li.messenger-user-in-room').at(1).simulate('click');

    expect(wrapper.find(PeopleView).prop("focusedUser"))
    .toEqual({userId: "151", username: "Person2", avatar: "Person2"});
  });

  it('should focus online friend', () => {
    wrapper.find('button.messenger-people-tab').at(1).simulate('click');
    
    wrapper.find('li.messenger-friend').simulate('click');

    expect(wrapper.find(PeopleView).prop("focusedFriend"))
    .toEqual({userId: "151", username: "Person2", avatar: "Person2"});
  });

  it('should unfocus person and start whisper with their username', () => {
    wrapper.find('button.messenger-start-whisper').simulate('click');

    expect(wrapper.find(ChatView).prop("messageToSend")).toEqual("/w Person2");
  });
});