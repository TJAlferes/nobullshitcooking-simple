import React from 'react';
import { Link } from 'react-router-dom';
import AriaModal from 'react-aria-modal';

import { IWorkRecipe } from '../../../../store/data/types';
import { SubtabsView } from './SubtabsView';

export function PublicRecipesTabView({
  disownRecipeModalActive,
  deactivateDisownRecipeModal,
  getApplicationNode,
  disownRecipeName,
  handleDisownPublicRecipe,
  myPublicRecipes,
  activateDisownRecipeModal,
  subTab,
  handleSubTabClick
}: Props): JSX.Element {
  return (
    <div className="dashboard-content">
      <h2 className="dashboard-content-heading">Public Recipes</h2>
      <Link className="create-new-entity" to="/user-recipes/public/submit">
        Create New Public Recipe
      </Link>
      {
        disownRecipeModalActive
        ? (
          <AriaModal
            dialogClass="recipe-disown-modal"
            titleText="Cancel?"
            onExit={deactivateDisownRecipeModal}
            focusDialog={true}
            getApplicationNode={getApplicationNode}
            focusTrapOptions={{returnFocusOnDeactivate: false}}
            underlayClickExits={false}
          >
            <p className="recipe-disown-prompt">
              {'Disown Recipe: '}{disownRecipeName}{' ?'}
            </p>
            <button
              className="recipe-disown-cancel-button"
              onClick={deactivateDisownRecipeModal}
            >
              No
            </button>
            <button
              className="recipe-disown-button"
              onClick={handleDisownPublicRecipe}
            >
              Yes, Disown Recipe
            </button>
          </AriaModal>
        )
        : false
      }

      <SubtabsView subTab={subTab} handleSubTabClick={handleSubTabClick} />

      {
        myPublicRecipes.length
        ? myPublicRecipes.map(recipe => (
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
            <span className="dashboard-content-item-action">
              <Link to={`/user-recipes/public/edit/${recipe.recipe_id}`}>
                Edit
              </Link>
            </span>
            <span
              className="dashboard-content-item-delete"
              onClick={() => activateDisownRecipeModal(recipe.recipe_id, recipe.title)}
            >
              Disown
            </span>
          </div>
        ))
        : (
          <div className="dashboard-content-none">
            You haven't created any public recipes yet.
          </div>
        )
      }
    </div>
  );
}

type Props = {
  disownRecipeModalActive: boolean;
  deactivateDisownRecipeModal(): void;
  getApplicationNode(): Element | Node;
  disownRecipeName: string;
  handleDisownPublicRecipe(): void;
  myPublicRecipes: IWorkRecipe[];
  activateDisownRecipeModal(id: number, name: string): void;
  subTab: string;
  handleSubTabClick(e: React.SyntheticEvent<EventTarget>): void;
};