import { shallow } from 'enzyme';
import React from 'react';

import { OptionsView } from '../../../../../../src/pages/Messenger/views/desktop/OptionsView/OptionsView';

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
      with className current-room-label and
      with text 'Current Room:'
  `, () => {
    expect(wrapper.find('span.current-room-label').text())
    .toEqual('Current Room:');
  });

  it(`
      displays a span element
      with className current-room and
      with text '5067'
  `, () => {
    expect(wrapper.find('span.current-room').text())
    .toEqual('5067');
  });

  it(`
      displays an input element
      with className change-room-input and
      with value '5068'
  `, () => {
    expect(wrapper.find('input.change-room-input').prop('value'))
    .toEqual('5068');
  });

  it(`
      displays a button element
      with className change-room-button and
      with text 'Enter'
  `, () => {
    expect(wrapper.find('button.change-room-button').text())
    .toEqual('Enter');
  });

  describe('when status is Connected', () => {
    it(`
      displays a button element
      with className connection-button and
      with text 'Disconnect'
    `, () => {
      const wrapper = shallow(
        <OptionsView status="Connected" {...initialProps} />
      );
      expect(wrapper.find('button.connection-button').text())
      .toEqual('Disconnect');
    });
  });

  describe('when status is Disconnected', () => {
    it(`
      displays a button element
      with className connection-button and
      with text 'Connect'
    `, () => {
      const wrapper = shallow(
        <OptionsView status="Disconnected" {...initialProps} />
      );
      expect(wrapper.find('button.connection-button').text())
      .toEqual('Connect');
    });
  });
});