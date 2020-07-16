import React from 'react';

import { IngredientBreadcrumbs } from '../../routing/breadcrumbs/Breadcrumbs';
import { IIngredient } from '../../store/data/types';
import './ingredient.css';

export function IngredientView({
  twoColumnBTheme,
  ingredient,
  dataMyPrivateIngredients
}: Props): JSX.Element {
  return (
  <div className="ingredient">

    <IngredientBreadcrumbs
      ingredientId={ingredient.ingredient_id}
      ingredientName={ingredient.ingredient_name}
    />

    <div
      className={`ingredient-view two-column-b ${twoColumnBTheme}`}
      data-test="ingredient-view"
    >

      <div className="left-column">

        <div className="ingredient-details">

          <h1 className="ingredient-name">{ingredient.ingredient_name}</h1>

          <div className="ingredient-image">
            {
              dataMyPrivateIngredients.find(
                ing => ing.ingredient_id === ingredient.ingredient_id
              )
              ? <img src={`https://s3.amazonaws.com/nobsc-user-ingredients/${ingredient.ingredient_image}`} />
              : <img src={`https://s3.amazonaws.com/nobsc-images-01/ingredients/${ingredient.ingredient_image}.jpg`} />
            }
          </div>

          <div className="ingredient-type-outer">
            <b>Ingredient Type:</b>
            {' '}
            <span className="ingredient-type">
              {ingredient.ingredient_type_name}
            </span>
          </div>

          <div className="equipment-description-outer">
            <b>Ingredient Description:</b>
            {' '}
            <div className="ingredient-description">
              {ingredient.ingredient_description}
            </div>
          </div>

        </div>

      </div>

      <div className="right-column">
      </div>

    </div>

  </div>
);
}

type Props = {
  twoColumnBTheme: string;
  ingredient: IIngredient;
  dataMyPrivateIngredients: IIngredient[];
}