import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

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
  const [ feedback, setFeedback ] = useState("");
  const [ loading, setLoading ] = useState(false);
  const [ tab, setTab ] = useState("accepted");
  const [ userToFind, setUsertoFind ] = useState("");

  useEffect(() => {
    let isSubscribed = true;
    if (isSubscribed) {
      if (props.feedback !== "") window.scrollTo(0,0);
      setFeedback(props.feedback);
    }
    return () => isSubscribed = false;
  }, [props.feedback]);

  const handleCurrentTabClick = () => setTab("accepted");

  const handlePendingTabClick = () => setTab("pending");

  const handleBlockedTabClick = () => setTab("blocked");

  const handleFindUserInputChange = e => setUsertoFind(e.target.value);

  const handleFriendRequestClick = () => {
    const friendName = userToFind;
    setLoading(true);
    try {
      props.userRequestFriendship(friendName);
      setUsertoFind("");
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
      props.userDeleteFriendship(friendName);
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
      setUsertoFind("");
    } catch(err) {
      setLoading(false);
      console.log(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleUserUnblockClick = e => {
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

        <p className="error-message">{feedback}</p>

        <div className="friends-find">
          <label htmlFor="friends-find-user">Username:</label>
          <input name="friends-find-user" value={userToFind} onChange={handleFindUserInputChange} />
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
            className={(tab === "accepted") ? "friends-list-menu-tab active" : "friends-list-menu-tab inactive"}
            onClick={handleCurrentTabClick}
          >
            Current
          </button>
          <button
            className={(tab === "pending") ? "friends-list-menu-tab active" : "friends-list-menu-tab inactive"}
            onClick={handlePendingTabClick}
          >
            Pending
          </button>
          <button
            className={(tab === "blocked") ? "friends-list-menu-tab active" : "friends-list-menu-tab inactive"}
            onClick={handleBlockedTabClick}
          >
            Blocked
          </button>
        </div>

        <div className="friends-list">
          {
            props.dataMyFriendships
            .filter(friend => friend.status === tab)
            .map(friend => (
              <div className="friends-list-item">
                <span className="friends-list-item-avatar">
                  <img src={`https://nobsc-user-avatars.s3.amazonaws.com/${friend.avatar}-tiny`} />
                </span>
                <span className="friends-list-item-username">
                  <Link to={`/user/profile/${friend.username}`}>{friend.username}</Link>
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
};

const mapStateToProps = state => ({
  dataMyFriendships: state.data.myFriendships,
  feedback: state.user.message
});

const mapDispatchToProps = dispatch => ({
  userRequestFriendship: friendName => dispatch(userRequestFriendship(friendName)),
  userAcceptFriendship: friendName => dispatch(userAcceptFriendship(friendName)),
  userRejectFriendship: friendName => dispatch(userRejectFriendship(friendName)),
  userDeleteFriendship: friendName => dispatch(userDeleteFriendship(friendName)),
  userBlockUser: friendName => dispatch(userBlockUser(friendName)),
  userUnblockUser: friendName => dispatch(userUnblockUser(friendName)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserFriends);