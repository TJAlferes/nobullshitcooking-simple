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

import FriendsView from './FriendsView';

// TO DO: SERVER SENT EVENTS HTTP2

export const Friends = ({
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
      setLoading(false);
    }
    return () => isSubscribed = false;
  }, [message]);

  const handleTabChange = value => setTab(value);

  const handleFindUserInputChange = e => setUsertoFind(e.target.value);

  const handleFriendRequestClick = () => {
    const friendName = userToFind.trim();
    if (friendName === authname) return;
    setLoading(true);
    userRequestFriendship(friendName);
    setUsertoFind("");
  };

  const handleFriendAcceptClick = e => {
    const friendName = e.target.value;
    setLoading(true);
    userAcceptFriendship(friendName);
  };

  const handleFriendRejectClick = e => {
    const friendName = e.target.value;
    setLoading(true);
    userRejectFriendship(friendName);
  }

  const handleFriendDeleteClick = e => {
    const friendName = e.target.value;
    setLoading(true);
    userDeleteFriendship(friendName);
  };

  const handleUserBlockClick = () => {
    const friendName = userToFind.trim();
    if (friendName === authname) return;
    setLoading(true);
    userBlockUser(friendName);
    setUsertoFind("");
  };

  const handleUserUnblockClick = e => {
    const friendName = e.target.value;
    setLoading(true);
    userUnblockUser(friendName);
  };

  return (
    <FriendsView
      twoColumnATheme={twoColumnATheme}
      feedback={feedback}
      loading={loading}
      dataMyFriendships={dataMyFriendships}
      userToFind={userToFind}
      tab={tab}
      handleTabChange={handleTabChange}
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
  userRequestFriendship: (friendName) =>
    dispatch(userRequestFriendship(friendName)),
  userAcceptFriendship: (friendName) =>
    dispatch(userAcceptFriendship(friendName)),
  userRejectFriendship: (friendName) =>
    dispatch(userRejectFriendship(friendName)),
  userDeleteFriendship: (friendName) =>
    dispatch(userDeleteFriendship(friendName)),
  userBlockUser: (friendName) => dispatch(userBlockUser(friendName)),
  userUnblockUser: (friendName) => dispatch(userUnblockUser(friendName))
});

export default connect(mapStateToProps, mapDispatchToProps)(Friends);