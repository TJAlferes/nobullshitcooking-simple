import React from 'react';

import { IngredientBreadcrumbs } from '../../routing/breadcrumbs/Breadcrumbs';
import { IIngredient } from '../../store/data/types';
import './ingredient.css';

export function IngredientView({
  dataMyPrivateIngredients,
  ingredient,
  twoColumnBTheme
}: Props): JSX.Element {
  const { id, brand, variety, name, image, ingredient_type_name, description } =
    ingredient;

  return (
    <div className="ingredient">

      <IngredientBreadcrumbs id={id} name={name} />

      <div
        className={`ingredient-view two-column-b ${twoColumnBTheme}`}
        data-test="ingredient-view"
      >

        <div className="left-column">

          <div className="ingredient-details">

            <h1 className="ingredient__name">
              {brand && (brand + ' ')}
              {variety && (variety + ' ')}
              {name}
            </h1>

            <div className="ingredient__image">
              {
                dataMyPrivateIngredients.find(ing => ing.id === id)
                ? <img src={`https://s3.amazonaws.com/nobsc-user-ingredients/${image}`} />
                : <img src={`https://s3.amazonaws.com/nobsc-images-01/ingredients/${image}.jpg`} />
              }
            </div>

            <div className="ingredient__type-outer">
              <b>Ingredient Type:</b>
              {' '}
              <span className="ingredient__type">{ingredient_type_name}</span>
            </div>

            <div className="equipment__description-outer">
              <b>Ingredient Description:</b>
              {' '}
              <div className="ingredient__description">{description}</div>
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
  dataMyPrivateIngredients: IIngredient[];
  ingredient: IIngredient;
  twoColumnBTheme: string;
}