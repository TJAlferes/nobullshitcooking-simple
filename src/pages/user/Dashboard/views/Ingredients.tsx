import React from 'react';
import { Link } from 'react-router-dom';

import { IIngredient } from '../../../../store/data/types';

export function Ingredients({
  handleDeletePrivateIngredient,
  myPrivateIngredients
}: Props): JSX.Element {
  return (
    <div className="dashboard-content">
      <h2 className="dashboard-content__heading">Private Ingredients</h2>

      <Link className="new-entity" to="/user-ingredients/submit">
        Create New Ingredient
      </Link>

      {
        myPrivateIngredients.length
        ? myPrivateIngredients.map(i => (
          <div className="dashboard-content__item" key={i.id}>
            <span className="dashboard-content__item-tiny">
              {
                i.image !== "nobsc-ingredient-default"
                ? <img src={`https://s3.amazonaws.com/nobsc-user-ingredients/${i.image}-tiny`} />
                : <div className="image-default-28-18"></div>
              }
            </span>

            <span className="dashboard-content__item-name">
              <Link to={`/user-ingredient/${i.id}`}>{i.name}</Link>
            </span>

            <span className="dashboard-content__item-action">
              <Link to={`/user-ingredient/edit/${i.id}`}>Edit</Link>
            </span>

            <span
              className="dashboard-content__item-delete"
              onClick={() => handleDeletePrivateIngredient(i.id)}
            >
              Delete
            </span>
          </div>
        ))
        : (
          <div className="dashboard-content__none">
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