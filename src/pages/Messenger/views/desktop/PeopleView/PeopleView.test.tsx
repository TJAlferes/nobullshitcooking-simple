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
      with className people__tab--current and
      with text 'Room'
    `, () => {
      expect(wrapper.find('button.people__tab--current').text())
      .toEqual('Room');
    });

    it(`
      displays a ul element
      with className messenger__persons and
    `, () => {
      expect(wrapper.find('ul.messenger__persons')).toHaveLength(1);
    });

    it(`
      displays a li element
      with className messenger__person and
      with key 'Person'
    `, () => {
      expect(wrapper.find('li.messenger__person').at(0).key())
      .toEqual('Person');
    });

    it(`
      displays a li element
      with className messenger__person and
      with key 'Person2'
    `, () => {
      expect(wrapper.find('li.messenger__person').at(1).key())
      .toEqual('Person2');
    });

    it(`
      displays a li element
      with className messenger__person and
      with key 'Person3'
    `, () => {
      expect(wrapper.find('li.messenger__person').at(2).key())
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
        with className person-tooltip__start-whisper and
        with text 'Whisper'
      `, () => {
        expect(wrapper.find('button.person-tooltip__start-whisper').text())
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
      with className people__tab--current and
      with text 'Friends'
    `, () => {
      expect(wrapper.find('button.people__tab--current').text()).toEqual('Friends');
    });

    it(`
      displays a ul element
      with className messenger__persons and
    `, () => {
      expect(wrapper.find('ul.messenger__persons')).toHaveLength(1);
    });

    it(`
      displays a li element
      with className messenger__person and
      with key 'Person2'
    `, () => {
      expect(wrapper.find('li.messenger__person').key()).toEqual('Person2');
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
        with className person-tooltip__start-whisper and
        with text 'Whisper'
      `, () => {
        expect(wrapper.find('button.person-tooltip__start-whisper').text())
        .toEqual('Whisper');
      });
    });

  });

});