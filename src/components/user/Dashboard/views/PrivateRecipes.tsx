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
      <h2 className="dashboard-content__heading">Private Recipes</h2>
      <Link className="new-entity" to="/user-recipes/private/submit">
        Create New Private Recipe
      </Link>
      {
        modalActive
        ? (
          <AriaModal
            dialogClass="dashboard-content__modal"
            focusDialog={true}
            focusTrapOptions={{returnFocusOnDeactivate: false}}
            getApplicationNode={getApplicationNode}
            onExit={deactivateModal}
            titleText="Cancel?"
            underlayClickExits={false}
          >
            <p className="dashboard-content__prompt">
              {'Delete Recipe: '}{deleteName}{' ?'}
            </p>

            <button
              className="dashboard-content__modal-cancel-button"
              onClick={deactivateModal}
            >
              No
            </button>

            <button
              className="dashboard-content__modal-action-button"
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
        ? myPrivateRecipes.map(r => (
          <div className="dashboard-content__item" key={r.id}>
            <span className="dashboard-content__item-tiny">
              {
                r.recipe_image !== "nobsc-recipe-default"
                ? <img src={`https://s3.amazonaws.com/nobsc-user-recipe/${r.recipe_image}-tiny`} />
                : <div className="image-default-28-18"></div>
              }
            </span>

            <span className="dashboard-content__item-name">
              <Link to={`/user-recipe/${r.id}`}>{r.title}</Link>
            </span>

            <span className="dashboard-content__item-action">
              <Link to={`/user-recipe/private/edit/${r.id}`}>Edit</Link>
            </span>

            <span
              className="dashboard-content__item-delete"
              onClick={() => activateModal(r.id, r.title)}
            >
              Delete
            </span>
          </div>
        ))
        : (
          <div className="dashboard-content__none">
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