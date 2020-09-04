import React from 'react';
import AriaModal from 'react-aria-modal';
import { Link } from 'react-router-dom';

import { IWorkRecipe } from '../../../store/data/types';

export function Recipes({
  activateModal,
  deactivateModal,
  deleteName,
  getApplicationNode,
  handleDeleteRecipe,
  modalActive,
  recipes
}: Props): JSX.Element {
  return (
    <div className="staff-dashboard-content">

      <h2 className="staff-dashboard-content-heading">Recipes</h2>

      <Link className="create-new-entity" to="/recipes/private/submit">
        Create New Recipe
      </Link>

      {modalActive ? (
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
          <button className="recipe-delete-button" onClick={handleDeleteRecipe}>
            Yes, Delete Recipe
          </button>
        </AriaModal>
      ) : false}

      {recipes.map(r => (
        <div className="staff-dashboard-content-item" key={r.id}>
          <span className="staff-dashboard-content-item-name">
            <Link to={`/user-recipe/${r.id}`}>{r.title}</Link>
          </span>
          <span className="staff-dashboard-content-item-action">
            <Link to={`/user-recipe/private/edit/${r.id}`}>Edit</Link>
          </span>
          <span
            className="staff-dashboard-content-item-delete"
            onClick={() => activateModal(r.id, r.title)}
          >
            Delete
          </span>
        </div>
      ))}

    </div>
  );
}

type Props = {
  activateModal(id: number, name: string): void;
  deactivateModal(): void;
  deleteName: string;
  getApplicationNode(): Element | Node;
  handleDeleteRecipe(): void;
  modalActive: boolean;
  recipes: IWorkRecipe[];
};