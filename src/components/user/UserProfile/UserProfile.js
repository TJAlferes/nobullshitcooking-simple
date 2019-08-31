import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { userRequestFriendship } from '../../../store/actions/index';
import './userProfile.css';

import { NOBSCBackendAPIEndpointOne } from '../../../config/NOBSCBackendAPIEndpointOne';
const endpoint = NOBSCBackendAPIEndpointOne;

const UserProfile = props => {
  const [ message, setMessage ] = useState("");
  const [ loading, setLoading ] = useState(false);
  const [ clicked, setClicked ] = useState(false);
  const [ tab, setTab ] = useState("public");
  const [ userAvatar, setUserAvatar ] = useState("nobsc-user-default");
  const [ userPublicRecipes, setUserPublicRecipes ]= useState([]);
  const [ userFavoriteRecipes, setUserFavoriteRecipes ]= useState([]);

  useEffect(() => {
    let isSubscribed = true;
    if (isSubscribed) {
      if (props.message !== "") window.scrollTo(0,0);
      setMessage(props.message);
    }
    return () => isSubscribed = false;
  }, [props.message]);

  // TODO: Redirect them to Home if they only navigate to /profile (if there is no /:username)

  useEffect(() => {
    const { username } = props.match.params;
    const getUserProfile = async (username) => {
      const res = await axios.get(`${endpoint}/user/profile/${username}`);
      if (res.data.avatar !== "nobsc-user-default") setUserAvatar(username);
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
      window.scrollTo(0,0);
      setMessage(err.message);
    } finally {
      setClicked(true);
      setLoading(false);
    }
  };

  return (
    <div className={`profile one-column-a ${props.oneColumnATheme}`}>
      <h1>{props.match.params.username}</h1>

      <p className="error-message">{message}</p>

      {
        (userAvatar !== "nobsc-user-default")
        ? <img src={`https://nobsc-user-avatars.s3.amazonaws.com/${userAvatar}`} />
        : <img src="https://nobsc-user-avatars.s3.amazonaws.com/nobsc-user-default" />
      }
      
      {
        props.isAuthenticated && props.match.params.username !== props.authname
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

      <h2>Recipes</h2>
      
      <div className="profile-list-menu-tabs">
        <button
          className={(tab === "public") ? "profile-list-menu-tab active" : "profile-list-menu-tab inactive"}
          onClick={handlePublicTabClick}
        >
          Public
        </button>
        <button
          className={(tab === "favorite") ? "profile-list-menu-tab active" : "profile-list-menu-tab inactive"}
          onClick={handleFavoriteTabClick}
        >
          Favorite
        </button>
      </div>

      <div className="profile-list">
        {
          tab === "favorite" && (
            userFavoriteRecipes.length
            ? (
              userFavoriteRecipes.map(recipe => (
                <div className="profile-list-item" key={recipe.recipe_id}>
                  <span className="profile-list-item-image">
                    <img src={`https://nobsc-user-recipe.s3.amazonaws.com/${recipe.recipe_image}-tiny`} />
                  </span>
                  <span className="profile-list-item-title">
                    <Link to={`user/recipes/${recipe.recipe_id}`}>{recipe.title}</Link>
                  </span>
                </div>
              ))
            )
            : <div className="profile-content-none">{props.match.params.username} hasn't favorited any recipes yet.</div>
          )
        }
        {
          tab === "public" && (
            userPublicRecipes.length
            ? (
                userPublicRecipes.map(recipe => (
                <div className="profile-list-item" key={recipe.recipe_id}>
                  <span className="profile-list-item-tiny">
                    <img src={`https://nobsc-user-recipe.s3.amazonaws.com/${recipe.recipe_image}-tiny`} />
                  </span>
                  <span className="profile-list-item-name">
                    <Link to={`user/recipes/${recipe.recipe_id}`}>{recipe.title}</Link>
                  </span>
                </div>
              ))
            )
            : <div className="profile-content-none">{props.match.params.username} hasn't published any recipes yet.</div>
          )
        }
      </div>
    </div>
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