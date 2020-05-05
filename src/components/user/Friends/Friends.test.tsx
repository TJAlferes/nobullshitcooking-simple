import { mount, ReactWrapper } from 'enzyme';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import { Friends } from './Friends';

const myFriendships = [
  {
    user_id: 1,
    username: "Jack",
    avatar: "Jack",
    status: "accepted"
  },
  {
    user_id: 2,
    username: "Jill",
    avatar: "Jill",
    status: "accepted"
  }
];
const userRequestFriendship = jest.fn();
const userAcceptFriendship = jest.fn();
const userRejectFriendship = jest.fn();
const userDeleteFriendship = jest.fn();
const userBlockUser = jest.fn();
const userUnblockUser = jest.fn();

let wrapper: ReactWrapper;

beforeEach(() => {
  wrapper = mount(
    <MemoryRouter>
      <Friends
        twoColumnATheme="light"
        message="Some message."
        authname="Person"
        dataMyFriendships={myFriendships}
        userRequestFriendship={userRequestFriendship}
        userAcceptFriendship={userAcceptFriendship}
        userRejectFriendship={userRejectFriendship}
        userDeleteFriendship={userDeleteFriendship}
        userBlockUser={userBlockUser}
        userUnblockUser={userUnblockUser}
      />
    </MemoryRouter>
  );
});

afterEach(() => {
  //jest.resetModules();
  jest.clearAllMocks();
});

describe('Friends', () => {
  it('should record and display changes to the user to find', () => {
    wrapper.find('input[name="friends-find-user"]')
    .simulate('change', {target: {name: "friends-find-user", value: "Person2"}});

    expect(wrapper.find('input[name="friends-find-user"]').props().value)
    .toEqual("Person2");
  });

  it('should submit user to request', () => {
    wrapper.find('input[name="friends-find-user"]')
    .simulate('change', {target: {name: "friends-find-user", value: "Person2"}});

    wrapper.find('button[name="friends-find-request"]').at(1).simulate('click');

    expect(userRequestFriendship).toBeCalledTimes(1);
  });

  it ('should not send request when no user is given', () => {
    wrapper.find('input[name="friends-find-user"]')
    .simulate('change', {target: {name: "friends-find-user", value: ""}});

    wrapper.find('button[name="friends-find-request"]').at(1).simulate('click');

    expect(userRequestFriendship).toBeCalledTimes(0);
  });

  it ('should not send request when user given is self', () => {
    wrapper.find('input[name="friends-find-user"]')
    .simulate('change', {target: {name: "friends-find-user", value: "Person"}});

    wrapper.find('button[name="friends-find-request"]').at(1).simulate('click');

    expect(userRequestFriendship).toBeCalledTimes(0);
  });

  it('should submit user to block', () => {
    wrapper.find('input[name="friends-find-user"]')
    .simulate('change', {target: {name: "friends-find-user", value: "Person2"}});

    wrapper.find('button[name="friends-find-block"]').at(1).simulate('click');

    expect(userBlockUser).toBeCalledTimes(1);
  });

  it ('should not block when no user is given', () => {
    wrapper.find('input[name="friends-find-user"]')
    .simulate('change', {target: {name: "friends-find-user", value: ""}});

    wrapper.find('button[name="friends-find-block"]').at(1).simulate('click');

    expect(userBlockUser).toBeCalledTimes(0);
  });

  it ('should not block when user given is self', () => {
    wrapper.find('input[name="friends-find-user"]')
    .simulate('change', {target: {name: "friends-find-user", value: "Person"}});

    wrapper.find('button[name="friends-find-block"]').at(1).simulate('click');

    expect(userBlockUser).toBeCalledTimes(0);
  });
});