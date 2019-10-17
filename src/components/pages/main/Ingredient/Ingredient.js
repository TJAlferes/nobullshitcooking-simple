import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { IngredientBreadcrumbs } from '../../../../routing/breadcrumbs/Breadcrumbs';
import './ingredient.css';

const Ingredient = props => {
  const [ ingredient, setIngredient ] = useState("");

  useEffect(() => {
    const { id } = props.match.params;
    if (!id) props.history.push('/home');
    const localIngredient = (
      props.dataIngredients.find(ing => ing.ingredient_id == id) ||
      props.dataMyPrivateIngredients.find(ing => ing.ingredient_id == id)
    );
    if (localIngredient) {
      const localIngredientType = props.dataIngredientTypes.find(
        ing => ing.ingredient_type_id == localIngredient.ingredient_type_id
      );
      localIngredient.ingredient_type_name = localIngredientType.ingredient_type_name;
      setIngredient(localIngredient);
    } else {
      //Redirect them to Ingredients
    }
  }, []);

  return (
    <div className="ingredient">
      {ingredient && <div><IngredientBreadcrumbs ingredient={ingredient} /></div>}
      <div className={`view-ingredient two-column-b ${props.twoColumnBTheme}`}>
        <div className="left-column">
          {ingredient && (
            <div className="ingredient-details">
              <div className="ingredient-details__name">
                <h1>{ingredient.ingredient_name}</h1>
              </div>
              <div className="ingredient-details__image">
                {
                  props.dataMyPrivateIngredients.find(
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
}

const mapStateToProps = state => ({
  dataIngredientTypes: state.data.ingredientTypes,
  dataIngredients: state.data.ingredients,
  dataMyPrivateIngredients: state.data.myPrivateIngredients
});

export default withRouter(connect(mapStateToProps)(Ingredient));