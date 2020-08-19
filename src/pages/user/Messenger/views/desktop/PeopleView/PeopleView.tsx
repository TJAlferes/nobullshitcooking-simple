import React from 'react';

import { IUser } from '../../../../../../store/messenger/types';
import './peopleView.css';

export function PeopleView({
  focusedFriend,
  focusedUser,
  handleFriendClick,
  handlePeopleTabChange,
  handleUserClick,
  onlineFriends,
  peopleTab,
  startWhisper,
  users
}: Props): JSX.Element {
  return (
    <div className="messenger__people">
      
      <div className="people__tabs">
        <button
          className={
            (peopleTab === "Room") ? "people__tab--current" : "people__tab"
          }
          onClick={() => handlePeopleTabChange("Room")}
        >
          Room
        </button>
        <button
          className={
            (peopleTab === "Friends") ? "people__tab--current" : "people__tab"
          }
          onClick={() => handlePeopleTabChange("Friends")}
        >
          Friends
        </button>
      </div>

      {peopleTab === "Room" && (
        <ul className="messenger__persons">
          {users && users.map(u => (
            <li
              className="messenger__person"
              key={u.username}
              onClick={() => handleUserClick(u)}
            >
              <img src={`https://s3.amazonaws.com/nobsc-user-avatars/${u.avatar}-tiny`} />
              <span>{u.username}</span>
              {
                focusedUser && focusedUser.username === u.username &&
                <div className="messenger__person-tooltip">
                  <button
                    className="person-tooltip__start-whisper"
                    onClick={() => startWhisper(u.username)}
                  >
                    Whisper
                  </button>
                </div>
              }
            </li>
          ))}
        </ul>
      )}

      {peopleTab === "Friends" && (
        <ul className="messenger__persons">
          {onlineFriends && onlineFriends.map(f => (
            <li
              className="messenger__person"
              key={f.username}
              onClick={() => handleFriendClick(f)}
            >
              <img src={`https://s3.amazonaws.com/nobsc-user-avatars/${f.avatar}-tiny`} />
              <span>{f.username}</span>
              {
                focusedFriend && focusedFriend.username === f.username &&
                <div className="messenger__person-tooltip">
                  <button
                    className="person-tooltip__start-whisper"
                    onClick={() => startWhisper(f.username)}
                  >
                    Whisper
                  </button>
                </div>
              }
            </li>
          ))}
        </ul>
      )}

    </div>
  );
}

type Props = {
  focusedFriend: IUser | null;
  focusedUser: IUser | null;
  handleFriendClick(friend: IUser): void;
  handlePeopleTabChange(value: string): void;
  handleUserClick(user: IUser): void;
  onlineFriends: IUser[];
  peopleTab: string;
  startWhisper(username: string): void;
  users: IUser[];
};