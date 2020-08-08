import { shallow } from 'enzyme';
import React from 'react';

import { PeopleView } from './PeopleView';

const handleFriendClick = jest.fn();
const handlePeopleTabChange = jest.fn();
const handleUserClick = jest.fn();
const startWhisper = jest.fn();

const initialProps = {
  handleFriendClick,
  handlePeopleTabChange,
  handleUserClick,
  onlineFriends: [{id: "151", username: "Person2", avatar: "Person2"}],
  startWhisper,
  users: [
    {id: "150", username: "Person", avatar: "Person"},
    {id: "151", username: "Person2", avatar: "Person2"},
    {id: "152", username: "Person3", avatar: "Person3"}
  ]
};

afterEach(() => {
  jest.clearAllMocks();
});

describe('PeopleView', () => {
  
  describe('when peopleTab is Room', () => {
    const wrapper = shallow(
      <PeopleView
        focusedFriend={null}
        focusedUser={null}
        peopleTab="Room"
        {...initialProps}
      />
    );

    it(`
      displays a button element
      with className chat-nav-current and
      with text 'Room'
    `, () => {
      expect(wrapper.find('button.chat-nav-current').text()).toEqual('Room');
    });

    it(`
      displays a ul element
      with className messenger-users-in-room and
    `, () => {
      expect(wrapper.find('ul.messenger-users-in-room')).toHaveLength(1);
    });

    it(`
      displays a li element
      with className messenger-user-in-room and
      with key 'Person'
    `, () => {
      expect(wrapper.find('li.messenger-user-in-room').at(0).key())
      .toEqual('Person');
    });

    it(`
      displays a li element
      with className messenger-user-in-room and
      with key 'Person2'
    `, () => {
      expect(wrapper.find('li.messenger-user-in-room').at(1).key())
      .toEqual('Person2');
    });

    it(`
      displays a li element
      with className messenger-user-in-room and
      with key 'Person3'
    `, () => {
      expect(wrapper.find('li.messenger-user-in-room').at(2).key())
      .toEqual('Person3');
    });

    describe('when user in room is focused', () => {
      const wrapper = shallow(
        <PeopleView
          focusedFriend={null}
          focusedUser={{id: "151", username: "Person2", avatar: "Person2"}}
          peopleTab="Room"
          {...initialProps}
        />
      );

      it(`
        displays a button element
        with className messenger-start-whisper and
        with text 'Whisper'
      `, () => {
        expect(wrapper.find('button.messenger-start-whisper').text())
        .toEqual('Whisper');
      });
    });

  });

  describe('when peopleTab is Friends', () => {
    const wrapper = shallow(
      <PeopleView
        focusedFriend={null}
        focusedUser={null}
        peopleTab="Friends"
        {...initialProps}
      />
    );

    it(`
      displays a button element
      with className chat-nav-current and
      with text 'Friends'
    `, () => {
      expect(wrapper.find('button.chat-nav-current').text()).toEqual('Friends');
    });

    it(`
      displays a ul element
      with className messenger-friends and
    `, () => {
      expect(wrapper.find('ul.messenger-friends')).toHaveLength(1);
    });

    it(`
      displays a li element
      with className messenger-friend and
      with key 'Person2'
    `, () => {
      expect(wrapper.find('li.messenger-friend').key()).toEqual('Person2');
    });

    describe('when online friend is focused', () => {
      const wrapper = shallow(
        <PeopleView
          focusedFriend={
            {id: "151", username: "Person2", avatar: "Person2"}
          }
          focusedUser={null}
          peopleTab="Friends"
          {...initialProps}
        />
      );

      it(`
        displays a button element
        with className messenger-start-whisper and
        with text 'Whisper'
      `, () => {
        expect(wrapper.find('button.messenger-start-whisper').text())
        .toEqual('Whisper');
      });
    });

  });

});