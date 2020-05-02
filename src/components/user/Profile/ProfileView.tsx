import React from 'react';
import { Link } from 'react-router-dom';

import { IFriendship, IWorkRecipe } from '../../../store/data/types';
import './profile.css';

export function ProfileView({
  username,
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
  handleTabChange
}: Props): JSX.Element {
  return (
    <div className="profile-view">

      <div>
        <span>
          <Link to="/home">Home</Link>
          <i> > </i>
        </span>
        <span>{username}</span>
      </div>

      <div className={`profile one-column-a ${oneColumnATheme}`}>
        <h1>{username}</h1>

        <p className="profile-feedback">{feedback}</p>

        {
          userAvatar !== "nobsc-user-default" &&
          <img src={`https://s3.amazonaws.com/nobsc-user-avatars/${userAvatar}`} />
        }
        
        <div className="friend-request-outer">
          {
            isAuthenticated && username !== authname
            ? (
              dataMyFriendships
              .find((friend: IFriendship) => friend.username === username)
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
            onClick={() => handleTabChange("public")}
          >
            Public
          </button>
          <button
            className={
              (tab === "favorite")
              ? "profile-list-menu-tab active"
              : "profile-list-menu-tab inactive"
            }
            onClick={() => handleTabChange("favorite")}
          >
            Favorite
          </button>
        </div>

        <div className="profile-list">
          {
            tab === "favorite" && (
              userFavoriteRecipes.length
              ? (
                userFavoriteRecipes.map((recipe: IWorkRecipe) => (
                  <div className="profile-list-item" key={recipe.recipe_id}>
                    <span className="profile-list-item-tiny">
                      {
                        recipe.recipe_image !== "nobsc-recipe-default"
                        ? <img src={`https://s3.amazonaws.com/nobsc-user-recipe/${recipe.recipe_image}-tiny`} />
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
                  {username} hasn't favorited any recipes yet.
                </div>
              )
            )
          }
          {
            tab === "public" && (
              userPublicRecipes.length
              ? (
                  userPublicRecipes.map((recipe: IWorkRecipe) => (
                  <div className="profile-list-item" key={recipe.recipe_id}>
                    <span className="profile-list-item-tiny">
                      {
                        recipe.recipe_image !== "nobsc-recipe-default"
                        ? <img src={`https://s3.amazonaws.com/nobsc-user-recipe/${recipe.recipe_image}-tiny`} />
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
                  {username} hasn't published any recipes yet.
                </div>
              )
            )
          }
        </div>
      </div>

    </div>
  );
}

type Props = {
  username: string;
  oneColumnATheme: string;
  feedback: string;
  loading: boolean;
  isAuthenticated: boolean;
  authname: string;
  dataMyFriendships: IFriendship[];
  clicked: boolean;
  tab: string;
  userAvatar: string;
  userPublicRecipes: IWorkRecipe[];
  userFavoriteRecipes: IWorkRecipe[];
  handleFriendRequestClick(): void;
  handleTabChange(value: string): void;
};