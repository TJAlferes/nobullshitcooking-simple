import React from 'react';
import { Link } from 'react-router-dom';

import LeftNav from '../../LeftNav/LeftNav';

import './userFriends.css';

const UserFriendsView = ({
  twoColumnATheme,
  feedback,
  loading,
  dataMyFriendships,
  userToFind,
  handleCurrentTabClick,
  handlePendingTabClick,
  handleBlockedTabClick,
  handleFindUserInputChange,
  handleFriendRequestClick,
  handleFriendAcceptClick,
  handleFriendRejectClick,
  handleFriendDeleteClick,
  handleUserBlockClick,
  handleUserUnblockClick
}) => (
  <div className={`friends two-column-a ${twoColumnATheme}`}>

    <LeftNav />

    <section>

      <h1>Friends</h1>

      <p className="error-message">{feedback}</p>

      <div className="friends-find">
        <label className="friends-find-label" htmlFor="friends-find-user">
          Username:
        </label>
        <input
          className="friends-find-user"
          name="friends-find-user"
          value={userToFind}
          onChange={handleFindUserInputChange}
        />
        <button
          className="friends-find-request"
          disabled={loading}
          onClick={handleFriendRequestClick}
        >
          Send Friend Request
        </button>
        <button
          className="friends-find-block"
          disabled={loading}
          onClick={handleUserBlockClick}
        >
          Block User
        </button>
      </div>

      <hr className="friends-hr" />

      <div className="friends-list-menu-tabs">
        <button
          className={
            (tab === "accepted")
            ? "friends-list-menu-tab active"
            : "friends-list-menu-tab inactive"
          }
          onClick={handleCurrentTabClick}
        >
          Current
        </button>
        <button
          className={
            (tab === "pending-received")
            ? "friends-list-menu-tab active"
            : "friends-list-menu-tab inactive"
          }
          onClick={handlePendingTabClick}
        >
          Pending
        </button>
        <button
          className={
            (tab === "blocked")
            ? "friends-list-menu-tab active"
            : "friends-list-menu-tab inactive"
          }
          onClick={handleBlockedTabClick}
        >
          Blocked
        </button>
      </div>

      <div className="friends-list">
        {
          dataMyFriendships
          .filter(friend => friend.status === tab)
          .map(friend => (
            <div className="friends-list-item" key={friend.username}>
              <span className="friends-list-item-avatar">
                <img src={`https://nobsc-user-avatars.s3.amazonaws.com/${friend.avatar}-tiny`} />
              </span>
              <span className="friends-list-item-username">
                <Link to={`/user/profile/${friend.username}`}>{friend.username}</Link>
              </span>
              {
                (friend.status === "pending-received") &&
                <button
                  className="friends-list-item-action"
                  disabled={loading}
                  value={friend.username}
                  onClick={handleFriendAcceptClick}
                >
                  Accept
                </button>
              }
              {
                (friend.status === "pending-received") &&
                <button
                  className="friends-list-item-delete"
                  disabled={loading}
                  value={friend.username}
                  onClick={handleFriendRejectClick}
                >
                  Reject
                </button>
              }
              {
                (friend.status === "accepted") &&
                <button
                  className="friends-list-item-delete"
                  disabled={loading}
                  value={friend.username}
                  onClick={handleFriendDeleteClick}
                >
                  Unfriend
                </button>
              }
              {
                (friend.status === "blocked") &&
                <button
                  className="friends-list-item-delete"
                  disabled={loading}
                  value={friend.username}
                  onClick={handleUserUnblockClick}
                >
                  Unblock
                </button>
              }
            </div>
          ))
        }
      </div>
    </section>

  </div>
);

export default UserFriendsView;