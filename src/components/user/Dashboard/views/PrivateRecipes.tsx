import React from 'react';
import AriaModal from 'react-aria-modal';
import { Link } from 'react-router-dom';

import { IWorkRecipe } from '../../../../store/data/types';
import { Subtabs } from './Subtabs';

export function PrivateRecipes({
  activateModal,
  deactivateModal,
  deleteName,
  getApplicationNode,
  handleDeletePrivateRecipe,
  handleSubTabClick,
  modalActive,
  myPrivateRecipes,
  subTab,
}: Props): JSX.Element {
  return (
    <div className="dashboard-content">
      <h2 className="dashboard-content-heading">Private Recipes</h2>
      <Link className="create-new-entity" to="/user-recipes/private/submit">
        Create New Private Recipe
      </Link>
      {
        modalActive
        ? (
          <AriaModal
            dialogClass="recipe-delete-modal"
            focusDialog={true}
            focusTrapOptions={{returnFocusOnDeactivate: false}}
            getApplicationNode={getApplicationNode}
            onExit={deactivateModal}
            titleText="Cancel?"
            underlayClickExits={false}
          >
            <p className="recipe-delete-prompt">
              {'Delete Recipe: '}{deleteName}{' ?'}
            </p>
            <button
              className="recipe-delete-cancel-button"
              onClick={deactivateModal}
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

      <Subtabs handleSubTabClick={handleSubTabClick} subTab={subTab} />

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
              <Link to={`/user-recipe/${recipe.recipe_id}`}>
                {recipe.title}
              </Link>
            </span>
            <span className="dashboard-content-item-action">
              <Link to={`/user-recipe/private/edit/${recipe.recipe_id}`}>
                Edit
              </Link>
            </span>
            <span
              className="dashboard-content-item-delete"
              onClick={() => activateModal(recipe.recipe_id, recipe.title)}
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
}

type Props = {
  activateModal(id: number, name: string): void;
  deactivateModal(): void;
  deleteName: string;
  getApplicationNode(): Element | Node;
  handleDeletePrivateRecipe(): void;
  handleSubTabClick(e: React.SyntheticEvent<EventTarget>): void;
  modalActive: boolean;
  myPrivateRecipes: IWorkRecipe[];
  subTab: string;
};