import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import { userRequestFriendship } from '../../../store/actions/index';
import './userProfile.css';

import { NOBSCBackendAPIEndpointOne } from '../../../config/NOBSCBackendAPIEndpointOne';
const endpoint = NOBSCBackendAPIEndpointOne;

const UserProfile = props => {
  const [ loading, setLoading ] = useState(false);
  const [ clicked, setClicked ] = useState(false);
  const [ tab, setTab ] = useState("favorite");
  const [ userProfile, setUserProfile ] = useState({});

  // TODO: Redirect them to Home if they only navigate to /profile (if there is no /:username)

  useEffect(() => {
    const { username } = props.match.params;
    const getUserProfile = async (username) => {
      const res = await axios.get(`${endpoint}/user/profile/${username}`);
      setUserProfile(res.data);
    }
    getUserProfile(username);
  }, []);

  const handleFavoriteTabClick = () => setTab("favorite");

  const handlePublicTabClick = () => setTab("public");

  const handleFriendRequestClick = () => {
    const { username } = props.match.params;
    setLoading(true);
    try {
      props.userRequestFriendship(username);
    } catch(err) {
      setLoading(false);
      console.log(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`profile one-column-a ${props.oneColumnATheme}`}>
      <h1>{props.match.params.username}</h1>
      <img src={`https://s3.amazonaws.com/nobsc-images-01/user/${props.match.params.username}/avatar.jpg`} />
      
      {
        props.isAuthenticated &&
        props.dataMyFriendships.filter(friend => friend.username === props.match.params.username)
        ? <span>Friends</span>
        : (
          !clicked ? <button onClick={handleFriendRequestClick}>Send Friend Request</button>
          : <span>Friend Request Sent</span>
        )
      }

      <div className="profile-list-menu-tabs">
        <span
          className="profile-list-menu-tab"
          onClick={handleFavoriteTabClick}
        >
          Favorite Recipes
        </span>
        <span
          className="profile-list-menu-tab"
          onClick={handlePublicTabClick}
        >
          Public Recipes
        </span>
      </div>

      <div className="profile-list">
        {tab === "favorite" && userProfile.favoriteRecipes.map(recipe => (
          <div className="profile-list-item">
            <span className="profile-list-item-image">
              <img src={`https://s3.amazonaws.com/nobsc-images-01/user/${props.match.params.username}/avatar.jpg}`} />
            </span>
            <span className="profile-list-item-title">
              {recipe.title}
            </span>
          </div>
        ))}
        {tab === "public" && userProfile.publicRecipes.map(recipe => (
          <div className="profile-list-item">
            <span className="profile-list-item-image">
              <img src={`https://s3.amazonaws.com/nobsc-images-01/user/${props.match.params.username}/avatar.jpg}`} />
            </span>
            <span className="profile-list-item-title">
              {recipe.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  dataMyFriendships: state.data.myFriendships,
  userMessage: state.user.message
});

const mapDispatchToProps = dispatch => ({
  userRequestFriendship: friendName => dispatch(userRequestFriendship(friendName))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);