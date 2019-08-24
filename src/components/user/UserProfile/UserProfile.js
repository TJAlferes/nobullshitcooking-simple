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
  const [ userAvatar, setUserAvatar ] = useState("nobsc-user-default.png");
  const [ userPublicRecipes, setUserPublicRecipes ]= useState([]);
  const [ userFavoriteRecipes, setUserFavoriteRecipes ]= useState([]);

  // TODO: Redirect them to Home if they only navigate to /profile (if there is no /:username)

  useEffect(() => {
    const { username } = props.match.params;
    const getUserProfile = async (username) => {
      const res = await axios.get(`${endpoint}/user/profile/${username}`);
      setUserAvatar(res.data.avatar);
      setUserPublicRecipes(res.data.publicRecipes);
      setUserFavoriteRecipes(res.data.favoriteRecipes);
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
      setClicked(false);
      setLoading(false);
      console.log(err.message);
    } finally {
      setClicked(true);
      setLoading(false);
    }
  };

  return (
    <div className={`profile one-column-a ${props.oneColumnATheme}`}>
      <h1>{props.match.params.username}</h1>
      <img src={`https://nobsc-user-avatars.s3.amazonaws.com/${userAvatar}`} />
      
      {
        props.isAuthenticated
        ? (
          props.dataMyFriendships.filter(friend => friend.username === props.match.params.username)
          ? <span>Friends</span>
          : (
            !clicked ? <button onClick={handleFriendRequestClick} disabled={loading}>Send Friend Request</button>
            : <span>Friend Request Sent</span>
          )
        )
        : false
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
        {
          tab === "favorite" &&
          userFavoriteRecipes.length
          ? (
            userFavoriteRecipes.map(recipe => (
              <div className="profile-list-item">
                <span className="profile-list-item-image">
                  <img src={recipe.recipe_image} />
                </span>
                <span className="profile-list-item-title">
                  {recipe.title}
                </span>
              </div>
            ))
          )
          : <div>{props.match.params.username} hasn't favorited any recipes yet.</div>
        }
        {
          tab === "public" &&
          userPublicRecipes.length
          ? (
              userPublicRecipes.map(recipe => (
              <div className="profile-list-item">
                <span className="profile-list-item-image">
                  <img src={recipe.recipe_image} />
                </span>
                <span className="profile-list-item-title">
                  {recipe.title}
                </span>
              </div>
            ))
          )
          : <div>{props.match.params.username} hasn't published any recipes yet.</div>
        }
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