import React from 'react';
import AriaModal from 'react-aria-modal';
import { Link } from 'react-router-dom';

import { IWorkRecipe } from '../../../../store/data/types';
import { Subtabs } from './Subtabs';

export function PublicRecipes({
  activateModal,
  deactivateModal,
  deleteName,
  getApplicationNode,
  handleDisownPublicRecipe,
  handleSubTabClick,
  modalActive,
  myPublicRecipes,
  subTab
}: Props): JSX.Element {
  return (
    <div className="dashboard-content">
      <h2 className="dashboard-content-heading">Public Recipes</h2>
      <Link className="create-new-entity" to="/user-recipes/public/submit">
        Create New Public Recipe
      </Link>
      {
        modalActive
        ? (
          <AriaModal
            dialogClass="recipe-disown-modal"
            focusDialog={true}
            focusTrapOptions={{returnFocusOnDeactivate: false}}
            getApplicationNode={getApplicationNode}
            onExit={deactivateModal}
            titleText="Cancel?"
            underlayClickExits={false}
          >
            <p className="recipe-disown-prompt">
              {'Disown Recipe: '}{deleteName}{' ?'}
            </p>
            <button
              className="recipe-disown-cancel-button"
              onClick={deactivateModal}
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

      <Subtabs handleSubTabClick={handleSubTabClick} subTab={subTab} />

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
              <Link to={`/recipe/${recipe.recipe_id}`}>
                {recipe.title}
              </Link>
            </span>
            <span className="dashboard-content-item-action">
              <Link to={`/user-recipe/public/edit/${recipe.recipe_id}`}>
                Edit
              </Link>
            </span>
            <span
              className="dashboard-content-item-delete"
              onClick={() => activateModal(recipe.recipe_id, recipe.title)}
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
  activateModal(id: number, name: string): void;
  deactivateModal(): void;
  deleteName: string;
  getApplicationNode(): Element | Node;
  handleDisownPublicRecipe(): void;
  handleSubTabClick(e: React.SyntheticEvent<EventTarget>): void;
  myPublicRecipes: IWorkRecipe[];
  modalActive: boolean;
  subTab: string;
};