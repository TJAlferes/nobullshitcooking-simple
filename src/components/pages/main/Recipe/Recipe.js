import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { RecipeBreadcrumbs } from '../../../../routing/breadcrumbs/Breadcrumbs';
import './recipe.css';

import { NOBSCBackendAPIEndpointOne } from '../../../../config/NOBSCBackendAPIEndpointOne';
const endpoint = NOBSCBackendAPIEndpointOne;

const Recipe = props => {
  const [ recipe, setRecipe ] = useState({});

  // TODO: Redirect them to Recipes if they only navigate to /recipe (if there is no /:id)

  const getRecipe = async (id) => {
    try {
      const res = await axios.get(`${endpoint}/recipe/${id}`);
      const row = res.data;
      setRecipe(row);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    const { id } = props.match.params;
    getRecipe(id);
  }, []);

  return (
    <div>
      <div>
        {
          (Object.keys(recipe).length > 1) &&
          <RecipeBreadcrumbs recipe={recipe} />
        }
      </div>
      <div id="page">
        <div className="view-recipe">
          <div className="title"><h1>{recipe.title}</h1></div>
          <div className="recipe-image">
            <img src={`https://s3.amazonaws.com/nobsc-images-01/recipes/recipe/${recipe.recipe_image}.png`} />
          </div>
          <div className="recipe-type-name">{recipe.recipe_type_name}</div>
          <div className="cuisine-name">{recipe.cuisine_name}</div>
          <div className="description">{recipe.description}</div>
          <div className="required-equipment">
            {recipe.required_equipment && recipe.required_equipment.map(equ => (
              <div key={equ.key}>{equ.amount}{' '}{equ.equipment}</div>
            ))}
          </div>
          <div className="required-ingredients">
            {recipe.required_ingredients && recipe.required_ingredients.map(ing => (
              <div key={ing.key}>{ing.amount}{ing.unit}{' '}{ing.ingredient}</div>
            ))}
          </div>
          <div className="required-subrecipes">
            {recipe.required_subrecipes && recipe.required_subrecipes.map(rec => (
              <div key={rec.key}>{rec.amount}{rec.unit}{' '}{rec.subrecipe}</div>
            ))}
          </div>
          <div className="directions">{recipe.directions}</div>
          <div className="equipment-image">
            <img src={`https://s3.amazonaws.com/nobsc-images-01/recipes/equipment/${recipe.equipment_image}.png`} />
          </div>
          <div className="ingredients-image">
            <img src={`https://s3.amazonaws.com/nobsc-images-01/recipes/ingredients/${recipe.ingredients_image}.png`} />
          </div>
          <div className="cooking-image">
            <img src={`https://s3.amazonaws.com/nobsc-images-01/recipes/cooking/${recipe.cooking_image}.png`} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Recipe;