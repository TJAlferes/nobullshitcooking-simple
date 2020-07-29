import { shallow } from 'enzyme';
import React from 'react';

import { OptionsView } from './OptionsView';

const handleChannelChange = jest.fn();
const handleConnect = jest.fn();
const handleDisconnect = jest.fn();
const handleRoomInputChange = jest.fn();

const initialProps = {
  channel: "5067",
  handleChannelChange,
  handleConnect,
  handleDisconnect,
  handleRoomInputChange,
  loading: false,
  roomToEnter: "5068"
};

afterEach(() => {
  jest.clearAllMocks();
});

describe('OptionsView', () => {
  const wrapper = shallow(
    <OptionsView status="Connected" {...initialProps} />
  );

  it(`
      displays a span element
      with className messenger-channel-switch and
      with text '5067'
  `, () => {
    expect(wrapper.find('span.messenger-channel-switch').text())
    .toEqual('Current Room:');
  });

  it(`
      displays a span element
      with className messenger-channel-current and
      with text '5067'
  `, () => {
    expect(wrapper.find('span.messenger-channel-current').text())
    .toEqual('5067');
  });

  it(`
      displays an input element
      with className messenger-channel-input and
      with value '5068'
  `, () => {
    expect(wrapper.find('input.messenger-channel-input').prop('value'))
    .toEqual('5068');
  });

  it(`
      displays a button element
      with className messenger-channel-button and
      with text 'Enter'
  `, () => {
    expect(wrapper.find('button.messenger-channel-button').text())
    .toEqual('Enter');
  });

  describe('when status is Connected', () => {
    it(`
      displays a button element
      with className messenger-connect-disconnect and
      with text 'Disconnect'
    `, () => {
      const wrapper = shallow(
        <OptionsView status="Connected" {...initialProps} />
      );
      expect(wrapper.find('button.messenger-connect-disconnect').text())
      .toEqual('Disconnect');
    });
  });

  describe('when status is Disconnected', () => {
    it(`
      displays a button element
      with className messenger-connect-disconnect and
      with text 'Connect'
    `, () => {
      const wrapper = shallow(
        <OptionsView status="Disconnected" {...initialProps} />
      );
      expect(wrapper.find('button.messenger-connect-disconnect').text())
      .toEqual('Connect');
    });
  });
});