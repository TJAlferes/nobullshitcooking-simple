import React from 'react';

const PeopleView = ({
  users,
  onlineFriends,
  peopleTab,
  handlePeopleTabChange
}) => (
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
          <li className="messenger-user-in-room" key={user.username}>
            <img src={`https://s3.amazonaws.com/nobsc-user-avatars/${user.avatar}-tiny`} />
            <span>{user.username}</span>
          </li>
        ))}
      </ul>
    )}
    {peopleTab === "Friends" && (
      <ul className="messenger-friends">
        {onlineFriends && onlineFriends.map(online => (
          <li className="messenger-friend" key={online.username}>
            <img src={`https://s3.amazonaws.com/nobsc-user-avatars/${online.avatar}-tiny`} />
            <span>{online.username}</span>
          </li>
        ))}
      </ul>
    )}
  </div>
);

export default PeopleView;