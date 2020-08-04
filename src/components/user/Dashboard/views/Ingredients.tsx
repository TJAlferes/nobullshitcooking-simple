import React from 'react';
import { Link } from 'react-router-dom';

import { IIngredient } from '../../../../store/data/types';

export function Ingredients({
  handleDeletePrivateIngredient,
  myPrivateIngredients
}: Props): JSX.Element {
  return (
    <div className="dashboard-content">
      <h2 className="dashboard-content-heading">Private Ingredients</h2>
      <Link className="create-new-entity" to="/user-ingredients/submit">
        Create New Ingredient
      </Link>
      {
        myPrivateIngredients.length
        ? myPrivateIngredients.map(i => (
          <div className="dashboard-content-item" key={i.ingredient_id}>
            <span className="dashboard-content-item-tiny">
              {
                i.ingredient_image !== "nobsc-ingredient-default"
                ? <img src={`https://s3.amazonaws.com/nobsc-user-ingredients/${i.ingredient_image}-tiny`} />
                : <div className="image-default-28-18"></div>
              }
            </span>
            <span className="dashboard-content-item-name">
              <Link to={`/user-ingredient/${i.ingredient_id}`}>
                {i.ingredient_name}
              </Link>
            </span>
            <span className="dashboard-content-item-action">
              <Link to={`/user-ingredient/edit/${i.ingredient_id}`}>Edit</Link>
            </span>
            <span
              className="dashboard-content-item-delete"
              onClick={() => handleDeletePrivateIngredient(i.ingredient_id)}
            >
              Delete
            </span>
          </div>
        ))
        : (
          <div className="dashboard-content-none">
            You haven't created any private ingredients yet.
          </div>
        )
      }
    </div>
  );
}

type Props = {
  handleDeletePrivateIngredient(id: number): void;
  myPrivateIngredients: IIngredient[];
};