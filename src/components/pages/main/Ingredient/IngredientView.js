import React from 'react';

import { IngredientBreadcrumbs } from '../../../../routing/breadcrumbs/Breadcrumbs';

import './ingredient.css';

const IngredientView = ({
  twoColumnBTheme,
  ingredient,
  dataMyPrivateIngredients
}) => (
  <div className="ingredient">
    {ingredient && <div><IngredientBreadcrumbs ingredient={ingredient} /></div>}
    <div className={`view-ingredient two-column-b ${twoColumnBTheme}`}>
      <div className="left-column">
        {ingredient && (
          <div className="ingredient-details">
            <div className="ingredient-details__name">
              <h1>{ingredient.ingredient_name}</h1>
            </div>
            <div className="ingredient-details__image">
              {
                dataMyPrivateIngredients.find(
                  ing => ing.ingredient_id === ingredient.ingredient_id
                )
                ? <img src={`https://s3.amazonaws.com/nobsc-user-ingredients/${ingredient.ingredient_image}`} />
                : <img src={`https://s3.amazonaws.com/nobsc-images-01/ingredients/${ingredient.ingredient_image}.jpg`} />
              }
            </div>
            <div className="ingredient-details__type">
              <b>Ingredient Type:</b>{' '}{ingredient.ingredient_type_name}
            </div>
            {/*<div className="ingredient-details__description">
              {ingredient.ingredient_description}
            </div>*/}
          </div>
        )}
      </div>
      <div className="right-column">
      </div>
    </div>
  </div>
);

export default IngredientView;