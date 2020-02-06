import React from 'react';

const PeopleView = ({
  users,
  onlineFriends,
  peopleTab,
  handlePeopleTabChange
}) => (
  <div className="mobile-messenger__view">
    <div className="mobile-messenger__people-tabs">
      <button
        className={(peopleTab === "Room")
          ? "mobile-messenger__people-tab chat-nav-current"
          : "mobile-messenger__people-tab"
        }
        onClick={() => handlePeopleTabChange("Room")}
      >
        Room
      </button>
      <button
        className={(peopleTab === "Friends")
          ? "mobile-messenger__people-tab chat-nav-current"
          : "mobile-messenger__people-tab"
        }
        onClick={() => handlePeopleTabChange("Friends")}
      >
        Friends
      </button>
    </div>

    {peopleTab === "Room" && (
      <ul className="mobile-messenger__users-in-room">
        {users && users.map(user => (
          <li className="mobile-messenger__user-in-room" key={user.user}>
            <img src={`https://s3.amazonaws.com/nobsc-user-avatars${user.user}-tiny`} />
            <span>{user.user}</span>
          </li>
        ))}
      </ul>
    )}

    {peopleTab === "Friends" && (
      <ul className="mobile-messenger__friends">
        {onlineFriends && onlineFriends.map(online => (
          <li className="mobile-messenger__friend" key={online.user}>
            <img src={`https://s3.amazonaws.com/nobsc-user-avatars${online.user}-tiny`} />
            <span>{online.user}</span>
          </li>
        ))}
      </ul>
    )}
  </div>
);

export default PeopleView;