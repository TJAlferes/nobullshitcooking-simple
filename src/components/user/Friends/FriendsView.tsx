import React from 'react';
import { Link } from 'react-router-dom';

import { IFriendship } from '../../../store/data/types';
import LeftNav from '../../LeftNav/LeftNav';
import './friends.css';

export function FriendsView({
  dataMyFriendships,
  feedback,
  handleAcceptClick,
  handleBlockClick,
  handleDeleteClick,
  handleInputChange,
  handleRejectClick,
  handleRequestClick,
  handleTabChange,
  handleUnblockClick,
  loading,
  tab,
  twoColumnATheme,
  userToFind
}: Props): JSX.Element {
  return (
    <div className={`friends two-column-a ${twoColumnATheme}`}>

      <LeftNav />

      <section>

        <h1>Friends</h1>

        <p className="friends-feedback">{feedback}</p>

        <div className="friends-find">
          <label className="friends-find-label" htmlFor="friends-find-user">
            Username:
          </label>
          <input
            className="friends-find-user"
            name="friends-find-user"
            onChange={handleInputChange}
            value={userToFind}
          />
          <button
            className="friends-find-request"
            disabled={loading}
            name="friends-find-request"
            onClick={handleRequestClick}
          >
            Send Friend Request
          </button>
          <button
            className="friends-find-block"
            disabled={loading}
            name="friends-find-block"
            onClick={handleBlockClick}
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
            name="current"
            onClick={() => handleTabChange("accepted")}
          >
            Current
          </button>
          <button
            className={
              (tab === "pending-received")
              ? "friends-list-menu-tab active"
              : "friends-list-menu-tab inactive"
            }
            name="pending"
            onClick={() => handleTabChange("pending-received")}
          >
            Pending
          </button>
          <button
            className={
              (tab === "blocked")
              ? "friends-list-menu-tab active"
              : "friends-list-menu-tab inactive"
            }
            name="blocked"
            onClick={() => handleTabChange("blocked")}
          >
            Blocked
          </button>
        </div>

        <div className="friends-list">
          {
            dataMyFriendships
            .filter((friend: IFriendship) => friend.status === tab)
            .map((friend: IFriendship) => (
              <div className="friends-list-item" key={friend.username}>
                <span className="friends-list-item-avatar">
                  <img src={`https://s3.amazonaws.com/nobsc-user-avatars/${friend.avatar}-tiny`} />
                </span>
                <span className="friends-list-item-username">
                  <Link to={`/profile/${friend.username}`}>{friend.username}</Link>
                </span>
                {
                  (friend.status === "pending-received") &&
                  <button
                    className="friends-list-item-action"
                    disabled={loading}
                    name="accept"
                    onClick={handleAcceptClick}
                    value={friend.username}
                  >
                    Accept
                  </button>
                }
                {
                  (friend.status === "pending-received") &&
                  <button
                    className="friends-list-item-delete"
                    disabled={loading}
                    name="reject"
                    onClick={handleRejectClick}
                    value={friend.username}
                  >
                    Reject
                  </button>
                }
                {
                  (friend.status === "accepted") &&
                  <button
                    className="friends-list-item-delete"
                    disabled={loading}
                    name="unfriend"
                    onClick={handleDeleteClick}
                    value={friend.username}
                  >
                    Unfriend
                  </button>
                }
                {
                  (friend.status === "blocked") &&
                  <button
                    className="friends-list-item-delete"
                    disabled={loading}
                    name="unblock"
                    onClick={handleUnblockClick}
                    value={friend.username}
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
}

type Props = {
  dataMyFriendships: IFriendship[];
  feedback: string;
  handleAcceptClick(e: React.SyntheticEvent<EventTarget>): void;
  handleBlockClick(): void;
  handleDeleteClick(e: React.SyntheticEvent<EventTarget>): void;
  handleInputChange(e: React.SyntheticEvent<EventTarget>): void;
  handleRejectClick(e: React.SyntheticEvent<EventTarget>): void;
  handleRequestClick(): void;
  handleTabChange(value: string): void;
  handleUnblockClick(e: React.SyntheticEvent<EventTarget>): void;
  loading: boolean;
  tab: string;
  twoColumnATheme: string;
  userToFind: string;
};