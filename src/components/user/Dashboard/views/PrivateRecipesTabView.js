import React from 'react';
import { Link } from 'react-router-dom';
import AriaModal from 'react-aria-modal';

const PrivateRecipesTabView = ({
  deleteRecipeModalActive,
  deactivateDeleteRecipeModal,
  getApplicationNode,
  deleteRecipeName,
  handleDeletePrivateRecipe,
  myPrivateRecipes,
  activateDeleteRecipeModal
}) => (
  <div className="dashboard-content">
    <h2>Private Recipes</h2>
    <Link className="create-new-entity" to="/user/recipes/private/submit">
      Create New Private Recipe
    </Link>
    {
      deleteRecipeModalActive
      ? (
        <AriaModal
          dialogClass="recipe-delete-modal"
          titleText="Cancel?"
          onExit={deactivateDeleteRecipeModal}
          focusDialog="true"
          getApplicationNode={getApplicationNode}
          focusTrapOptions={{returnFocusOnDeactivate: false}}
          underlayClickExits={false}
        >
          <p className="recipe-delete-prompt">
            {'Delete Recipe: '}{deleteRecipeName}{' ?'}
          </p>
          <button
            className="recipe-delete-cancel-button"
            onClick={deactivateDeleteRecipeModal}
          >
            No
          </button>
          <button
            className="recipe-delete-button"
            onClick={handleDeletePrivateRecipe}
          >
            Yes, Delete Recipe
          </button>
        </AriaModal>
      )
      : false
    }
    {
      myPrivateRecipes.length
      ? myPrivateRecipes.map(recipe => (
        <div className="dashboard-content-item" key={recipe.recipe_id}>
          <span className="dashboard-content-item-tiny">
            {
              recipe.recipe_image !== "nobsc-recipe-default"
              ? <img src={`https://s3.amazonaws.com/nobsc-user-recipe/${recipe.recipe_image}-tiny`} />
              : <div className="image-default-28-18"></div>
            }
          </span>
          <span className="dashboard-content-item-name">
            <Link to={`/user/recipes/${recipe.recipe_id}`}>
              {recipe.title}
            </Link>
          </span>
          <span className="dashboard-content-item-action">
            <Link to={`/user/recipes/private/edit/${recipe.recipe_id}`}>
              Edit
            </Link>
          </span>
          <span
            className="dashboard-content-item-delete"
            onClick={() => activateDeleteRecipeModal(recipe.recipe_id, recipe.title)}
          >
            Delete
          </span>
        </div>
      ))
      : (
        <div className="dashboard-content-none">
          You haven't created any private recipes yet.
        </div>
      )
    }
  </div>
);

export default PrivateRecipesTabView;