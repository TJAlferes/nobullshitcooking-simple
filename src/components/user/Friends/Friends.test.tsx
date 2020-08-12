import { mount, ReactWrapper } from 'enzyme';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import { Friends } from './Friends';

const dataMyFriendships = [
  {user_id: 1, username: "Jack", avatar: "Jack", status: "accepted"},
  {user_id: 2, username: "Jill", avatar: "Jill", status: "accepted"}
];

const userAcceptFriendship = jest.fn();
const userBlockUser = jest.fn();
const userDeleteFriendship = jest.fn();
const userRejectFriendship = jest.fn();
const userRequestFriendship = jest.fn();
const userUnblockUser = jest.fn();

const initialProps = {
  authname: "Person",
  dataMyFriendships,
  message: "Some message.",
  twoColumnATheme: "light",
  userAcceptFriendship,
  userBlockUser,
  userDeleteFriendship,
  userRejectFriendship,
  userRequestFriendship,
  userUnblockUser
};

window.scrollTo = jest.fn();

jest.mock('../../LeftNav/LeftNav');

let wrapper: ReactWrapper;

beforeEach(() => {
  wrapper = mount(<MemoryRouter><Friends {...initialProps} /></MemoryRouter>);
});

afterEach(() => {
  jest.clearAllMocks();
});

describe('Friends', () => {
  it('should record and display changes to the user to find', () => {
    wrapper.find('input[name="friends-find-input"]')
    .simulate('change', {target: {name: "friends-find-input", value: "Person2"}});

    expect(wrapper.find('input[name="friends-find-input"]').props().value)
    .toEqual("Person2");
  });

  it('should submit user to request', () => {
    wrapper.find('input[name="friends-find-input"]')
    .simulate('change', {target: {name: "friends-find-input", value: "Person2"}});

    wrapper.find('button[name="friends-find-request"]').simulate('click');

    expect(userRequestFriendship).toBeCalledTimes(1);
  });

  it ('should not send request when no user is given', () => {
    wrapper.find('input[name="friends-find-input"]')
    .simulate('change', {target: {name: "friends-find-input", value: ""}});

    wrapper.find('button[name="friends-find-request"]').simulate('click');

    expect(userRequestFriendship).toBeCalledTimes(0);
  });

  it ('should not send request when user given is self', () => {
    wrapper.find('input[name="friends-find-input"]')
    .simulate('change', {target: {name: "friends-find-input", value: "Person"}});

    wrapper.find('button[name="friends-find-request"]').simulate('click');

    expect(userRequestFriendship).toBeCalledTimes(0);
  });

  it('should submit user to block', () => {
    wrapper.find('input[name="friends-find-input"]')
    .simulate('change', {target: {name: "friends-find-input", value: "Person2"}});

    wrapper.find('button[name="friends-find-block"]').simulate('click');

    expect(userBlockUser).toBeCalledTimes(1);
  });

  it ('should not block when no user is given', () => {
    wrapper.find('input[name="friends-find-input"]')
    .simulate('change', {target: {name: "friends-find-input", value: ""}});

    wrapper.find('button[name="friends-find-block"]').simulate('click');

    expect(userBlockUser).toBeCalledTimes(0);
  });

  it ('should not block when user given is self', () => {
    wrapper.find('input[name="friends-find-input"]')
    .simulate('change', {target: {name: "friends-find-input", value: "Person"}});

    wrapper.find('button[name="friends-find-block"]').simulate('click');

    expect(userBlockUser).toBeCalledTimes(0);
  });
});