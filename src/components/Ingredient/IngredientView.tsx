import React from 'react';

import { IngredientBreadcrumbs } from '../../routing/breadcrumbs/Breadcrumbs';
import { IIngredient } from '../../store/data/types';
import './ingredient.css';

export function IngredientView({
  breadCrumbsTheme,
  twoColumnBTheme,
  ingredient,
  dataMyPrivateIngredients
}: Props): JSX.Element {
  return (
  <div className="ingredient">

    <div>
      {IngredientBreadcrumbs({
        breadCrumbsTheme,
        ingredientId: ingredient.ingredient_id,
        ingredientName: ingredient.ingredient_name
      })}
    </div>

    <div
      className={`ingredient-view two-column-b ${twoColumnBTheme}`}
      data-test="ingredient-view"
    >

      <div className="left-column">
        <div className="ingredient-details">
          <div className="ingredient-details-name">
            <h1>{ingredient.ingredient_name}</h1>
          </div>
          <div className="ingredient-details-image">
            {
              dataMyPrivateIngredients.find(
                ing => ing.ingredient_id === ingredient.ingredient_id
              )
              ? <img src={`https://s3.amazonaws.com/nobsc-user-ingredients/${ingredient.ingredient_image}`} />
              : <img src={`https://s3.amazonaws.com/nobsc-images-01/ingredients/${ingredient.ingredient_image}`} />
            }
          </div>
          <div className="ingredient-details-type">
            <b>Ingredient Type:</b>{' '}{ingredient.ingredient_type_name}
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
  breadCrumbsTheme: string;
  twoColumnBTheme: string;
  ingredient: IIngredient;
  dataMyPrivateIngredients: IIngredient[];
}