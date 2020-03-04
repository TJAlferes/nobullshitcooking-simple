import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useHistory, withRouter } from 'react-router-dom';
import axios from 'axios';

import { userRequestFriendship } from '../../../store/actions/index';

import {
  NOBSCBackendAPIEndpointOne
} from '../../../config/NOBSCBackendAPIEndpointOne';

const endpoint = NOBSCBackendAPIEndpointOne;

import ProfileView from './ProfileView';

export const Profile = ({
  match,
  oneColumnATheme,
  message,
  isAuthenticated,
  authname,
  dataMyFriendships,
  userRequestFriendship
}) => {
  const history = useHistory();

  const [ feedback, setFeedback ] = useState("");
  const [ loading, setLoading ] = useState(false);
  const [ clicked, setClicked ] = useState(false);
  const [ tab, setTab ] = useState("public");
  const [ userAvatar, setUserAvatar ] = useState("nobsc-user-default");
  const [ userPublicRecipes, setUserPublicRecipes ]= useState([]);
  const [ userFavoriteRecipes, setUserFavoriteRecipes ]= useState([]);

  useEffect(() => {
    let isSubscribed = true;
    if (isSubscribed) {
      if (message !== "") window.scrollTo(0,0);
      setFeedback(message);
    }
    return () => isSubscribed = false;
  }, [message]);

  useEffect(() => {
    const { username } = match.params;

    if (!username) {
      history.push('/');
      return;
    }

    const getUserProfile = async (username) => {
      const trimmed = username.trim();
      const res = await axios.get(`${endpoint}/user/profile/${trimmed}`);
      if (res.data.avatar !== "nobsc-user-default") setUserAvatar(trimmed);
      setUserPublicRecipes(res.data.publicRecipes);
      setUserFavoriteRecipes(res.data.favoriteRecipes);
    };

    getUserProfile(username);
  }, []);

  const handleTabChange = value => setTab(value);

  const handleFriendRequestClick = () => {
    const { username } = match.params;
    if (!username) return;
    setClicked(true);
    setLoading(true);
    userRequestFriendship(username);
  };

  return (
    <ProfileView
      match={match}
      oneColumnATheme={oneColumnATheme}
      feedback={feedback}
      loading={loading}
      isAuthenticated={isAuthenticated}
      authname={authname}
      dataMyFriendships={dataMyFriendships}
      clicked={clicked}
      tab={tab}
      userAvatar={userAvatar}
      userPublicRecipes={userPublicRecipes}
      userFavoriteRecipes={userFavoriteRecipes}
      handleFriendRequestClick={handleFriendRequestClick}
      handleTabChange={handleTabChange}
    />
  );
};

const mapStateToProps = state => ({
  message: state.user.message,
  isAuthenticated: state.auth.isAuthenticated,
  authname: state.auth.authname,
  dataMyFriendships: state.data.myFriendships
});

const mapDispatchToProps = dispatch => ({
  userRequestFriendship: friendName =>
    dispatch(userRequestFriendship(friendName))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Profile));