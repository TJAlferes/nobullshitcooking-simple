import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';

import { FriendsView } from './FriendsView';

const myFriendships = [
  {
    user_id: 2,
    username: "Jack",
    avatar: "Jack",
    status: "accepted"
  },
  {
    user_id: 3,
    username: "Jill",
    avatar: "Jill",
    status: "accepted"
  },
  {
    user_id: 4,
    username: "John",
    avatar: "John",
    status: "pending-received"
  },
  {
    user_id: 5,
    username: "Jane",
    avatar: "Jane",
    status: "blocked"
  }
];
const handleTabChange = jest.fn();
const handleFindUserInputChange = jest.fn();
const handleFriendRequestClick = jest.fn();
const handleFriendAcceptClick = jest.fn();
const handleFriendRejectClick = jest.fn();
const handleFriendDeleteClick = jest.fn();
const handleUserBlockClick = jest.fn();
const handleUserUnblockClick = jest.fn();

let wrapper: ShallowWrapper;

beforeEach(() => {
  wrapper = shallow(
    <FriendsView
      twoColumnATheme="light"
      feedback="Some message."
      loading={false}
      dataMyFriendships={myFriendships}
      userToFind="Person2"
      tab="accepted"
      handleTabChange={handleTabChange}
      handleFindUserInputChange={handleFindUserInputChange}
      handleFriendRequestClick={handleFriendRequestClick}
      handleFriendAcceptClick={handleFriendAcceptClick}
      handleFriendRejectClick={handleFriendRejectClick}
      handleFriendDeleteClick={handleFriendDeleteClick}
      handleUserBlockClick={handleUserBlockClick}
      handleUserUnblockClick={handleUserUnblockClick}
    />
  );
});

afterEach(() => {
  //jest.resetModules();
  jest.clearAllMocks();
});

describe('FriendsView', () => {
  it('displays feedback', () => {
    expect(wrapper.find('p.friends-feedback').text()).toEqual("Some message.");
  });

  it('displays a username input element', () => {
    expect(wrapper.find('input[name="friends-find-user"]')).toHaveLength(1);
  });

  it('displays a button element with text Send Friend Request', () => {
    expect(wrapper.find('button[name="friends-find-request"]').text())
    .toEqual("Send Friend Request");
  });

  it('displays a button element with text Block User', () => {
    expect(wrapper.find('button[name="friends-find-block"]').text())
    .toEqual("Block User");
  });

  it('displays a button element with text Current', () => {
    expect(wrapper.find('button[name="current"]').text())
    .toEqual("Current");
  });

  it('displays a button element with text Pending', () => {
    expect(wrapper.find('button[name="pending"]').text())
    .toEqual("Pending");
  });

  it('displays a button element with text Blocked', () => {
    expect(wrapper.find('button[name="blocked"]').text())
    .toEqual("Blocked");
  });

  it('displays an unfriend button element for each accepted friend', () => {
    expect(wrapper.find('button[name="unfriend"]')).toHaveLength(2);
  });

  it(
    'displays accept and reject button elements for each pending friend',
    () => {
      wrapper = shallow(
        <FriendsView
          twoColumnATheme="light"
          feedback="Some message."
          loading={false}
          dataMyFriendships={myFriendships}
          userToFind="Person2"
          tab="pending-received"
          handleTabChange={handleTabChange}
          handleFindUserInputChange={handleFindUserInputChange}
          handleFriendRequestClick={handleFriendRequestClick}
          handleFriendAcceptClick={handleFriendAcceptClick}
          handleFriendRejectClick={handleFriendRejectClick}
          handleFriendDeleteClick={handleFriendDeleteClick}
          handleUserBlockClick={handleUserBlockClick}
          handleUserUnblockClick={handleUserUnblockClick}
        />
      );
      expect(wrapper.find('button[name="accept"]')).toHaveLength(1);
      expect(wrapper.find('button[name="reject"]')).toHaveLength(1);
    }
  );
  
  it('displays an unblock button element for each blocked user', () => {
    wrapper = shallow(
      <FriendsView
        twoColumnATheme="light"
        feedback="Some message."
        loading={false}
        dataMyFriendships={myFriendships}
        userToFind="Person2"
        tab="blocked"
        handleTabChange={handleTabChange}
        handleFindUserInputChange={handleFindUserInputChange}
        handleFriendRequestClick={handleFriendRequestClick}
        handleFriendAcceptClick={handleFriendAcceptClick}
        handleFriendRejectClick={handleFriendRejectClick}
        handleFriendDeleteClick={handleFriendDeleteClick}
        handleUserBlockClick={handleUserBlockClick}
        handleUserUnblockClick={handleUserUnblockClick}
      />
    );
    expect(wrapper.find('button[name="unblock"]')).toHaveLength(1);
  });
});