import React from 'react';

import { IUser } from '../../../../../store/messenger/types';

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
    <div className="messenger-people">
      
      <div className="messenger-people-tabs">
        <button
          className={(peopleTab === "Room")
            ? "messenger-people-tab chat-nav-current"
            : "messenger-people-tab"
          }
          onClick={() => handlePeopleTabChange("Room")}
        >
          Room
        </button>
        <button
          className={(peopleTab === "Friends")
            ? "messenger-people-tab chat-nav-current"
            : "messenger-people-tab"
          }
          onClick={() => handlePeopleTabChange("Friends")}
        >
          Friends
        </button>
      </div>

      {peopleTab === "Room" && (
        <ul className="messenger-users-in-room">
          {users && users.map(user => (
            <li
              className="messenger-user-in-room"
              key={user.username}
              onClick={() => handleUserClick(user)}
            >
              <img src={`https://s3.amazonaws.com/nobsc-user-avatars/${user.avatar}-tiny`} />
              <span>{user.username}</span>
              {
                focusedUser && focusedUser.username === user.username &&
                <div className="messenger-focused-person">
                  <button
                    className="messenger-start-whisper"
                    onClick={() => startWhisper(user.username)}
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
        <ul className="messenger-friends">
          {onlineFriends && onlineFriends.map(online => (
            <li
              className="messenger-friend"
              key={online.username}
              onClick={() => handleFriendClick(online)}
            >
              <img src={`https://s3.amazonaws.com/nobsc-user-avatars/${online.avatar}-tiny`} />
              <span>{online.username}</span>
              {
                focusedFriend && focusedFriend.username === online.username &&
                <div className="messenger-focused-person">
                  <button
                    className="messenger-start-whisper"
                    onClick={() => startWhisper(online.username)}
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