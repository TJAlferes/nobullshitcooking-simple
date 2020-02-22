import React from 'react';
import { Link } from 'react-router-dom';

const FavoriteRecipesTabView = ({
  myFavoriteRecipes,
  handleUnfavoriteRecipe
}) => (
  <div className="dashboard-content">
    <h2>Favorite Recipes</h2>
    {
      myFavoriteRecipes.length
      ? myFavoriteRecipes.map(recipe => (
        <div className="dashboard-content-item" key={recipe.recipe_id}>
          <span className="dashboard-content-item-tiny">
            {
              recipe.recipe_image !== "nobsc-recipe-default"
              ? <img src={`https://s3.amazonaws.com/nobsc-user-recipe${recipe.recipe_image}-tiny`} />
              : <div className="image-default-28-18"></div>
            }
          </span>
          <span className="dashboard-content-item-name">
            <Link to={`/recipes/${recipe.recipe_id}`}>
              {recipe.title}
            </Link>
          </span>
          <span
            className="dashboard-content-item-unfavorite"
            onClick={() => handleUnfavoriteRecipe(recipe.recipe_id)}
          >
            Unfavorite
          </span>
        </div>
      ))
      : (
        <div className="dashboard-content-none">
          You haven't favorited any recipes yet.
        </div>
      )
    }
  </div>
);

export default FavoriteRecipesTabView;