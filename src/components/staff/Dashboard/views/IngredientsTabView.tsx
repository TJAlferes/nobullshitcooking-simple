import React from 'react';
import { Link } from 'react-router-dom';

import { IIngredient } from '../../../../store/data/types';

export function IngredientsTabView({
  ingredients,
  handleDeleteIngredient
}: Props): JSX.Element {
  return (
    <div className="staff-dashboard-content">
      <h2 className="staff-dashboard-content-heading">Official Ingredients</h2>
      <Link className="create-new-entity" to="/ingredient/submit">
        Create New Ingredient
      </Link>
      {ingredients.map(ing => (
        <div
          className="staff-dashboard-content-item"
          key={ing.ingredient_id}
        >
          <span className="staff-dashboard-content-item-name">
            <Link to={`/ingredient/${ing.ingredient_id}`}>
              {ing.ingredient_name}
            </Link>
          </span>
          <span className="staff-dashboard-content-item-action">
            <Link to={`/ingredient/edit/${ing.ingredient_id}`}>
              Edit
            </Link>
          </span>
          <span
            className="staff-dashboard-content-item-delete"
            onClick={() => handleDeleteIngredient(ing.ingredient_id)}
          >
            Delete
          </span>
        </div>
      ))}
    </div>
  );
}

type Props = {
  ingredients: IIngredient[];
  handleDeleteIngredient(id: number): void;
};