import React from 'react';
import { Link } from 'react-router-dom';
import AriaModal from 'react-aria-modal';

import { IWorkRecipe } from '../../../../store/data/types';

export function RecipesTabView({
  deleteRecipeModalActive,
  deactivateDeleteRecipeModal,
  getApplicationNode,
  deleteRecipeName,
  handleDeleteRecipe,
  recipes,
  activateDeleteRecipeModal
}: Props): JSX.Element {
  return (
    <div className="staff-dashboard-content">

      <h2 className="staff-dashboard-content-heading">Official Recipes</h2>

      <Link className="create-new-entity" to="/recipes/private/submit">
        Create New Recipe
      </Link>

      {deleteRecipeModalActive ? (
        <AriaModal
          dialogClass="recipe-delete-modal"
          titleText="Cancel?"
          onExit={deactivateDeleteRecipeModal}
          focusDialog={true}
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
          <button className="recipe-delete-button" onClick={handleDeleteRecipe}>
            Yes, Delete Recipe
          </button>
        </AriaModal>
      ) : false}

      {recipes.map(rec => (
        <div className="staff-dashboard-content-item" key={rec.recipe_id}>
          <span className="staff-dashboard-content-item-name">
            <Link to={`/user-recipe/${rec.recipe_id}`}>{rec.title}</Link>
          </span>
          <span className="staff-dashboard-content-item-action">
            <Link to={`/user-recipe/private/edit/${rec.recipe_id}`}>Edit</Link>
          </span>
          <span
            className="staff-dashboard-content-item-delete"
            onClick={() => activateDeleteRecipeModal(rec.recipe_id, rec.title)}
          >
            Delete
          </span>
        </div>
      ))}

    </div>
  );
}

type Props = {
  deleteRecipeModalActive: boolean;
  deactivateDeleteRecipeModal(): void;
  getApplicationNode(): Element | Node;
  deleteRecipeName: string;
  handleDeleteRecipe(): void;
  recipes: IWorkRecipe[];
  activateDeleteRecipeModal(id: number, name: string): void;
};