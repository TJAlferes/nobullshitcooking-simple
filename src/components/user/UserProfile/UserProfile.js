import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import axios from 'axios';

import { userRequestFriendship } from '../../../store/actions/index';

import { NOBSCBackendAPIEndpointOne } from '../../../config/NOBSCBackendAPIEndpointOne';
const endpoint = NOBSCBackendAPIEndpointOne;

import UserProfileView from './UserProfileView';

export const UserProfile = ({
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
    const { username } = match.params;  // withRouter?
    if (!username) history.push('/');  // change (to what?)

    const getUserProfile = async (username) => {
      const res = await axios.get(`${endpoint}/user/profile/${username}`);
      if (res.data.avatar !== "nobsc-user-default") setUserAvatar(username);
      setUserPublicRecipes(res.data.publicRecipes);
      setUserFavoriteRecipes(res.data.favoriteRecipes);
    };

    getUserProfile(username);
  }, []);

  const handleFavoriteTabClick = () => setTab("favorite");

  const handlePublicTabClick = () => setTab("public");

  const handleFriendRequestClick = () => {
    const { username } = match.params;
    if (!username) return;
    setClicked(true);
    setLoading(true);
    try {
      userRequestFriendship(username);
    } catch(err) {
      setClicked(false);
      setLoading(false);
      window.scrollTo(0,0);
    } finally {
      setLoading(false);
    }
  };

  return (
    <UserProfileView
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
      handlePublicTabClick={handlePublicTabClick}
      handleFavoriteTabClick={handleFavoriteTabClick}
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
  userRequestFriendship: friendName => dispatch(userRequestFriendship(friendName))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);