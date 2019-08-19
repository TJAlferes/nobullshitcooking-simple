import React, { useState } from 'react';
import { connect } from 'react-redux';

import {
  userRequestFriendship,
  userAcceptFriendship,
  userRejectFriendship,
  userDeleteFriendship,
  userBlockUser,
  userUnblockUser
} from '../../../store/actions/index';
import LeftNav from '../../LeftNav/LeftNav';
import './userFriends.css';

const UserFriends = props => {
  const [ loading, setLoading ] = useState(false);
  const [ tab, setTab ] = useState("accepted");
  const [ userToFind, setUsertoFind ] = useState("");

  const handleCurrentTabClick = () => setTab("accepted");

  const handlePendingTabClick = () => setTab("pending");

  const handleBlockedTabClick = () => setTab("blocked");

  const handleFindUserInputChange = e => {
    const username = e.target.value;
    setUsertoFind(username);
  };

  const handleFriendRequestClick = () => {
    const friendName = userToFind;
    setLoading(true);
    try {
      props.userRequestFriendship(friendName);
    } catch(err) {
      setLoading(false);
      console.log(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleFriendAcceptClick = e => {
    const friendName = e.target.value;
    setLoading(true);
    try {
      props.userAcceptFriendship(friendName);
    } catch(err) {
      setLoading(false);
      console.log(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleFriendRejectClick = e => {
    const friendName = e.target.value;
    setLoading(true);
    try {
      props.userRejectFriendship(friendName);
    } catch(err) {
      setLoading(false);
      console.log(err.message);
    } finally {
      setLoading(false);
    }
  }

  const handleFriendDeleteClick = e => {
    const friendName = e.target.value;
    setLoading(true);
    try {
      props.userBlockUser(friendName);
    } catch(err) {
      setLoading(false);
      console.log(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleUserBlockClick = () => {
    const friendName = userToFind;
    setLoading(true);
    try {
      props.userBlockUser(friendName);
    } catch(err) {
      setLoading(false);
      console.log(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleUserUnblockClick = () => {
    const friendName = e.target.value;
    setLoading(true);
    try {
      props.userUnblockUser(friendName);
    } catch(err) {
      setLoading(false);
      console.log(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`friends two-column-a ${props.twoColumnATheme}`}>

      <LeftNav />

      <section>

        <h1>Friends</h1>

        <p className="error-message">{props.userMessage}</p>

        <div className="friends-find">
          <label htmlFor="friends-find-user">Username:</label>
          <input name="friends-find-user" value={userToFind} onChange={handleFindUserInputChange} />
          <button
            className="friends-find-action"
            disabled={loading}
            onClick={handleFriendRequestClick}
          >
            Send Friend Request
          </button>
          <button
            className="friends-find-action"
            disabled={loading}
            onClick={handleUserBlockClick}
          >
            Block User
          </button>
        </div>

        <div className="friends-list-menu-tabs">
          <span
            className="friends-list-menu-tab"
            onClick={handleCurrentTabClick}
          >
            Current
          </span>
          <span
            className="friends-list-menu-tab"
            onClick={handlePendingTabClick}
          >
            Pending
          </span>
          <span
            className="friends-list-menu-tab"
            onClick={handleBlockedTabClick}
          >
            Blocked
          </span>
        </div>

        <div className="friends-list">
          {
            props.dataMyFriendships
            .filter(friend => friend.status === tab)
            .map(friend => (
              <div className="friends-list-item">
                <span className="friends-list-item-avatar">
                  <img src={`https://AWS_S3_BUCKET/${friend.avatar}`} />
                </span>
                <span className="friends-list-item-username">
                  {friend.username}
                </span>
                {
                  (friend.status === "pending") &&
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
                  (friend.status === "pending") &&
                  <button
                    className="friends-list-item-action"
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
                    className="friends-list-item-action"
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
                    className="friends-list-item-action"
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
};

const mapStateToProps = state => ({
  dataMyFriendships: state.data.myFriendships,
  userMessage: state.user.message
});

const mapDispatchToProps = dispatch => ({
  userRequestFriendship: friendName => dispatch(userRequestFriendship(friendName)),
  userAcceptFriendship: friendName => dispatch(userAcceptFriendship(friendName)),
  userRejectFriendship: friendName => dispatch(userRejectFriendship(friendName)),
  userDeleteFriendship: friendName => dispatch(userDeleteFriendship(friendName)),
  userBlockUser: friendName => dispatch(userBlockUser(friendName)),
  userUnblockUser: friendName => dispatch(userUnblockUser(friendName))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserFriends);