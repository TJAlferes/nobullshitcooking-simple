import React from 'react';

import { IUser } from '../../../../../store/messenger/types';

export function PeopleView({
  users,
  onlineFriends,
  peopleTab,
  handlePeopleTabChange,
  focusedFriend,
  handleFriendClick,
  focusedUser,
  handleUserClick,
  startWhisper
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
  users: IUser[];
  onlineFriends: IUser[];
  peopleTab: string;
  handlePeopleTabChange(value: string): void;
  focusedFriend: IUser|null;
  handleFriendClick(friend: IUser): void;
  focusedUser: IUser|null;
  handleUserClick(user: IUser): void;
  startWhisper(username: string): void;
};