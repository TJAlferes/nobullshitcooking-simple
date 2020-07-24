import { mount } from 'enzyme';
import React from 'react';

import { Messenger } from './Messenger';

window.scrollTo = jest.fn();

jest.mock('../../LeftNav/LeftNav');

const messengerConnect = jest.fn();
const messengerDisconnect = jest.fn();
const messengerChangeChannel = jest.fn();
const messengerSendMessage = jest.fn();
const messengerSendWhisper = jest.fn();
const initialProps = {
  twoColumnATheme: "light",
  //messengerView,
  windowFocused: true,
  authname: "Person",
  message: "Some message.",
  status: "Connected",
  channel: "5067",
  messages: [],
  users: [],
  onlineFriends: [],
  messengerConnect,
  messengerDisconnect,
  messengerChangeChannel,
  messengerSendMessage,
  messengerSendWhisper
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
});