import React from 'react';
import { Link } from 'react-router-dom';

import LeftNav from '../../components/LeftNav/LeftNav';
import { IFriendship } from '../../store/data/types';
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

        <p className="friends__feedback">{feedback}</p>

        <div className="friends__find">
          <label className="friends__find-label" htmlFor="friends-find-input">
            Username:
          </label>

          <input
            className="friends__find-input"
            name="friends-find-input"
            onChange={handleInputChange}
            value={userToFind}
          />

          <button
            className="friends__find-request-button"
            disabled={loading}
            name="friends-find-request"
            onClick={handleRequestClick}
          >
            Send Friend Request
          </button>

          <button
            className="friends__find-block-button"
            disabled={loading}
            name="friends-find-block"
            onClick={handleBlockClick}
          >
            Block User
          </button>
        </div>

        <hr className="friends__hr" />

        <div className="friends__tabs">
          <button
            className={
              tab === "accepted" ? "friends__tab--active" : "friends__tab"
            }
            name="current"
            onClick={() => handleTabChange("accepted")}
          >
            Current
          </button>

          <button
            className={
              tab === "pending-received"
              ? "friends__tab--active"
              : "friends__tab"
            }
            name="pending"
            onClick={() => handleTabChange("pending-received")}
          >
            Pending
          </button>

          <button
            className={
              tab === "blocked" ? "friends__tab--active" : "friends__tab"
            }
            name="blocked"
            onClick={() => handleTabChange("blocked")}
          >
            Blocked
          </button>
        </div>

        <div className="friends__list">
          {
            dataMyFriendships
            .filter(f => f.status === tab)
            .map(f => (
              <div className="friends__list-item" key={f.username}>
                <span className="friends__list-item-avatar">
                  <img src={`https://s3.amazonaws.com/nobsc-user-avatars/${f.avatar}-tiny`} />
                </span>
                <span className="friends__list-item-username">
                  <Link to={`/profile/${f.username}`}>{f.username}</Link>
                </span>
                {
                  f.status === "pending-received" &&
                  <button
                    className="friends__list-item-action"
                    disabled={loading}
                    name="accept"
                    onClick={handleAcceptClick}
                    value={f.username}
                  >
                    Accept
                  </button>
                }
                {
                  f.status === "pending-received" &&
                  <button
                    className="friends__list-item-delete"
                    disabled={loading}
                    name="reject"
                    onClick={handleRejectClick}
                    value={f.username}
                  >
                    Reject
                  </button>
                }
                {
                  f.status === "accepted" &&
                  <button
                    className="friends__list-item-delete"
                    disabled={loading}
                    name="unfriend"
                    onClick={handleDeleteClick}
                    value={f.username}
                  >
                    Unfriend
                  </button>
                }
                {
                  f.status === "blocked" &&
                  <button
                    className="friends__list-item-delete"
                    disabled={loading}
                    name="unblock"
                    onClick={handleUnblockClick}
                    value={f.username}
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