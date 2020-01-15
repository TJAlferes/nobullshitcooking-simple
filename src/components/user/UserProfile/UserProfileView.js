import React from 'react';
import { Link } from 'react-router-dom';

import './userProfile.css';

const UserProfileView = ({
  match,
  oneColumnATheme,
  feedback,
  loading,
  isAuthenticated,
  authname,
  dataMyFriendships,
  clicked,
  tab,
  userAvatar,
  userPublicRecipes,
  userFavoriteRecipes,
  handleFriendRequestClick,
  handlePublicTabClick,
  handleFavoriteTabClick
}) => (
  <div className={`profile one-column-a ${oneColumnATheme}`}>
    <h1>{match.params.username}</h1>

    <p className="error-message">{feedback}</p>

    {
      userAvatar !== "nobsc-user-default" &&
      <img src={`https://nobsc-user-avatars.s3.amazonaws.com/${userAvatar}`} />
    }
    
    <div className="friend-request-outer">
      {
        isAuthenticated && match.params.username !== authname
        ? (
          dataMyFriendships
          .find(friend => friend.username === match.params.username)
          ? <span>Friends</span>
          : (
            !clicked ? (
              <button onClick={handleFriendRequestClick} disabled={loading}>
                Send Friend Request
              </button>
            )
            : <span>Friend Request Sent</span>
          )
        )
        : false
      }
    </div>

    <h2>Recipes</h2>
    
    <div className="profile-list-menu-tabs">
      <button
        className={
          (tab === "public")
          ? "profile-list-menu-tab active"
          : "profile-list-menu-tab inactive"
        }
        onClick={handlePublicTabClick}
      >
        Public
      </button>
      <button
        className={
          (tab === "favorite")
          ? "profile-list-menu-tab active"
          : "profile-list-menu-tab inactive"
        }
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
                <span className="profile-list-item-tiny">
                  {
                    recipe.recipe_image !== "nobsc-recipe-default"
                    ? <img src={`https://nobsc-user-recipe.s3.amazonaws.com/${recipe.recipe_image}-tiny`} />
                    : <div className="image-default-28-18"></div>
                  }
                </span>
                <span className="profile-list-item-name">
                  <Link to={`/recipes/${recipe.recipe_id}`}>{recipe.title}</Link>
                </span>
              </div>
            ))
          )
          : (
            <div className="profile-content-none">
              {match.params.username} hasn't favorited any recipes yet.
            </div>
          )
        )
      }
      {
        tab === "public" && (
          userPublicRecipes.length
          ? (
              userPublicRecipes.map(recipe => (
              <div className="profile-list-item" key={recipe.recipe_id}>
                <span className="profile-list-item-tiny">
                  {
                    recipe.recipe_image !== "nobsc-recipe-default"
                    ? <img src={`https://nobsc-user-recipe.s3.amazonaws.com/${recipe.recipe_image}-tiny`} />
                    : <div className="image-default-28-18"></div>
                  }
                </span>
                <span className="profile-list-item-name">
                  <Link to={`/recipes/${recipe.recipe_id}`}>{recipe.title}</Link>
                </span>
              </div>
            ))
          )
          : (
            <div className="profile-content-none">
              {match.params.username} hasn't published any recipes yet.
            </div>
          )
        )
      }
    </div>
  </div>
);

export default UserProfileView;