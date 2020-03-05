import React from 'react';
import { Link } from 'react-router-dom';

import SubtabsView from './SubtabsView';

const SavedRecipesTabView = ({
  mySavedRecipes,
  handleUnsaveRecipe,
  subTab,
  handleSubTabClick
}) => (
  <div className="dashboard-content">
    <h2 className="dashboard-content-heading--tall">Saved Recipes</h2>

    <SubtabsView subTab={subTab} handleSubTabClick={handleSubTabClick} />

    {
      mySavedRecipes.length
      ? mySavedRecipes.map(recipe => (
        <div className="dashboard-content-item" key={recipe.recipe_id}>
          <span className="dashboard-content-item-tiny">
            {
              recipe.recipe_image !== "nobsc-recipe-default"
              ? <img src={`https://s3.amazonaws.com/nobsc-user-recipe/${recipe.recipe_image}-tiny`} />
              : <div className="image-default-28-18"></div>
            }
          </span>
          <span className="dashboard-content-item-name">
            <Link to={`/recipes/${recipe.recipe_id}`}>
              {recipe.title}
            </Link>
          </span>
          <span
            className="dashboard-content-item-delete"
            onClick={() => handleUnsaveRecipe(recipe.recipe_id)}
          >
            Unsave
          </span>
        </div>
      ))
      : (
        <div className="dashboard-content-none">
          You haven't saved any recipes yet.
        </div>
      )
    }
  </div>
);

export default SavedRecipesTabView;