import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import { IngredientBreadcrumbs } from '../../../../routing/breadcrumbs/Breadcrumbs';
import './ingredient.css';

import { NOBSCBackendAPIEndpointOne } from '../../../../config/NOBSCBackendAPIEndpointOne';
const endpoint = NOBSCBackendAPIEndpointOne;

const Ingredient = props => {
  const [ ingredient, setIngredient ] = useState({});

  useEffect(() => {
    const { id } = props.match.params;
    //if (!id) Redirect them to Ingredients
    const localIngredient = props.dataIngredients.find(ing => ing.ingredient_id === id);
    if (localIngredient) {
      setIngredient(localIngredient);
    } else {
      getIngredient(id);
    }
  }, []);

  const getIngredient = async (id) => {
    try {
      const res = await axios.get(`${endpoint}/ingredient/${id}`);  // also for private! /user/
      setIngredient(res.data);
    } catch (err) {
      console.error(err);
    }
  }

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
  dataIngredients: state.data.ingredients,
  dataMyPrivateIngredients: state.data.myPrivateIngredients,
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Ingredient);