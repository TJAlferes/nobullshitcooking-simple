import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { IngredientBreadcrumbs } from '../../../../routing/breadcrumbs/Breadcrumbs';
import './ingredient.css';
 
const Ingredient = props => {
  const [ ingredient, setIngredient ] = useState({});

  useEffect(() => {
    const { id } = props.match.params;
    //if (!id) Redirect them to Ingredients *****
    const localIngredient = (
      props.dataIngredients.find(ing => ing.ingredient_id === id) ||
      (props.dataMyPrivateIngredients && props.dataMyPrivateIngredients.find(ing => ing.ingredient_id === id))
    );
    if (localIngredient) {
      setIngredient(localIngredient);
    } else {
      //Redirect them to Ingredients
    }
  }, []);

  return (
    <div className="view-ingredient">
      <div>
        {
          (Object.keys(ingredient).length > 1) &&
          <IngredientBreadcrumbs ingredient={ingredient} />
        }
      </div>
      <div className="ingredient">
        <div className="ingredient-name">{ingredient.ingredient_name}</div>
        <div className="ingredient-image">
          {
            (props.dataMyPrivateIngredients && props.dataMyPrivateIngredients.find(ing => ing.ingredient_id === ingredient.ingredient_id))
            ? <img src={`https://s3.amazonaws.com/nobsc-user-ingredients/${ingredient.ingredient_image}`} />
            : <img src={`https://s3.amazonaws.com/nobsc-images-01/ingredients/${ingredient.ingredient_image}.jpg`} />
          }
          {/* props.privateImage */}
        </div>
        <div className="ingredient-type-name">
          Ingredient Type: {ingredient.ingredient_type_name}
        </div>
        <div className="ingredient-description">{ingredient.ingredient_description}</div>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  dataIngredients: state.data.ingredients,
  dataMyPrivateIngredients: state.data.myPrivateIngredients,
  isAuthenticated: state.auth.isAuthenticated
});

export default withRouter(connect(mapStateToProps)(Ingredient));