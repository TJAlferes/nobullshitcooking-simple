import React from 'react';
import { connect } from 'react-redux';

import { IngredientBreadcrumbs } from '../../../../routing/breadcrumbs/Breadcrumbs';
import './ingredient.css';

const Ingredient = props => {

  // TODO: Redirect them to Ingredients if they only navigate to /ingredient (if there is no /:id)

  const { id } = props.match.params;
  const ingredient = props.dataIngredients.find(ing => ing.ingredient_id === id);

  return (
    <div>
      <div>
        {
          (Object.keys(ingredient).length > 1) &&
          <IngredientBreadcrumbs ingredient={ingredient} />
        }
      </div>
      <div id="page">
        <div className="view-ingredient">
          <div className="ingredient-name">{ingredient.ingredient_name}</div>
          <div className="ingredient-image">
            <img src={`https://s3.amazonaws.com/nobsc-images-01/ingredients/${ingredient.ingredient_image}.jpg`} />
          </div>
          <div className="ingredient-type-name">
            Ingredient Type: {ingredient.ingredient_type_name}
          </div>
          <p>Nutrition: Coming soon.</p>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  dataIngredients: state.data.ingredients
});

export default connect(mapStateToProps)(Ingredient);