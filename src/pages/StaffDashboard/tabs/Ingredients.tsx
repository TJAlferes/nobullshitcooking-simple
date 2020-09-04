import React from 'react';
import { Link } from 'react-router-dom';

import { IIngredient } from '../../../store/data/types';

export function Ingredients({
  handleDeleteIngredient,
  ingredients
}: Props): JSX.Element {
  return (
    <div className="staff-dashboard-content">
      <h2 className="staff-dashboard-content-heading">Ingredients</h2>
      <Link className="create-new-entity" to="/ingredient/submit">
        Create New Ingredient
      </Link>
      {ingredients.map(i => (
        <div className="staff-dashboard-content-item" key={i.id}>
          <span className="staff-dashboard-content-item-name">
            <Link to={`/ingredient/${i.id}`}>{i.name}</Link>
          </span>
          <span className="staff-dashboard-content-item-action">
            <Link to={`/ingredient/edit/${i.id}`}>Edit</Link>
          </span>
          <span
            className="staff-dashboard-content-item-delete"
            onClick={() => handleDeleteIngredient(i.id)}
          >
            Delete
          </span>
        </div>
      ))}
    </div>
  );
}

type Props = {
  handleDeleteIngredient(id: number): void;
  ingredients: IIngredient[];
};