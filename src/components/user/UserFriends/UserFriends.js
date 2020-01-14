import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import {
  userRequestFriendship,
  userAcceptFriendship,
  userRejectFriendship,
  userDeleteFriendship,
  userBlockUser,
  userUnblockUser
} from '../../../store/actions/index';

import UserFriendsView from './UserFriendsView';

export const UserFriends = ({
  twoColumnATheme,
  message,
  authname,
  dataMyFriendships,
  userRequestFriendship,
  userAcceptFriendship,
  userRejectFriendship,
  userDeleteFriendship,
  userBlockUser,
  userUnblockUser
}) => {
  const [ feedback, setFeedback ] = useState("");
  const [ loading, setLoading ] = useState(false);
  const [ tab, setTab ] = useState("accepted");
  const [ userToFind, setUsertoFind ] = useState("");

  useEffect(() => {
    let isSubscribed = true;
    if (isSubscribed) {
      if (message !== "") window.scrollTo(0,0);
      setFeedback(message);
    }
    return () => isSubscribed = false;
  }, [message]);

  const handleCurrentTabClick = () => setTab("accepted");

  const handlePendingTabClick = () => setTab("pending-received");

  const handleBlockedTabClick = () => setTab("blocked");

  const handleFindUserInputChange = e => setUsertoFind(e.target.value);

  const handleFriendRequestClick = () => {
    const friendName = userToFind.trim();
    setLoading(true);
    try {
      if (friendName === authname) return;
      userRequestFriendship(friendName);
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
      userAcceptFriendship(friendName);
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
      userRejectFriendship(friendName);
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
      userDeleteFriendship(friendName);
    } catch(err) {
      setLoading(false);
      console.log(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleUserBlockClick = () => {
    const friendName = userToFind.trim();
    setLoading(true);
    try {
      if (friendName === authname) return;
      userBlockUser(friendName);
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
      userUnblockUser(friendName);
    } catch(err) {
      setLoading(false);
      console.log(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <UserFriendsView
      twoColumnATheme={twoColumnATheme}
      feedback={feedback}
      loading={loading}
      dataMyFriendships={dataMyFriendships}
      handleCurrentTabClick={handleCurrentTabClick}
      handlePendingTabClick={handlePendingTabClick}
      handleBlockedTabClick={handleBlockedTabClick}
      handleFindUserInputChange={handleFindUserInputChange}
      handleFriendRequestClick={handleFriendRequestClick}
      handleFriendAcceptClick={handleFriendAcceptClick}
      handleFriendRejectClick={handleFriendRejectClick}
      handleFriendDeleteClick={handleFriendDeleteClick}
      handleUserBlockClick={handleUserBlockClick}
      handleUserUnblockClick={handleUserUnblockClick}
    />
  );
};

const mapStateToProps = state => ({
  message: state.user.message,
  authname: state.auth.authname,
  dataMyFriendships: state.data.myFriendships
});

const mapDispatchToProps = dispatch => ({
  userRequestFriendship: (friendName) => dispatch(userRequestFriendship(friendName)),
  userAcceptFriendship: (friendName) => dispatch(userAcceptFriendship(friendName)),
  userRejectFriendship: (friendName) => dispatch(userRejectFriendship(friendName)),
  userDeleteFriendship: (friendName) => dispatch(userDeleteFriendship(friendName)),
  userBlockUser: (friendName) => dispatch(userBlockUser(friendName)),
  userUnblockUser: (friendName) => dispatch(userUnblockUser(friendName))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserFriends);