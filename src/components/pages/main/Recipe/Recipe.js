import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { RecipeBreadcrumbs } from '../../../../routing/breadcrumbs/Breadcrumbs';
import './recipe.css';

let endpoint;
if (process.env.NODE_ENV === "production") {
  endpoint = 'http://nobullshitcookingapi-env-1.kjumrgwpyc.us-east-1.elasticbeanstalk.com';
} else {
  endpoint = 'http://localhost:3003';
}

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
      <div>{(Object.keys(recipe).length > 1) && <RecipeBreadcrumbs recipe={recipe} />}</div>
      <div id="page">
        {
          <div className="view-recipe">

            <div className="view-recipe-title"><h1>{recipe.title}</h1></div>

            <div className="view-recipe-recipe-image">
              <img src={`https://s3.amazonaws.com/nobsc-images-01/recipes/recipe/${recipe.recipe_image}.png`} />
            </div>

            <div className="view-recipe-type">{recipe.recipe_type_name}</div>
            <div className="view-recipe-cuisine">{recipe.cuisine_name}</div>
            <div className="view-recipe-">{recipe.description}</div>

            <div className="view-recipe-">
              {recipe.required_equipment && recipe.required_equipment.map(equ => (
                <div>{equ.amount}{' '}{equ.equipment}</div>
              ))}
            </div>
            <div className="view-recipe-">
              {recipe.required_ingredients && recipe.required_ingredients.map(ing => (
                <div>{ing.amount}{ing.unit}{' '}{ing.ingredient}</div>
              ))}
            </div>
            <div className="view-recipe-">
              {recipe.required_subrecipes && recipe.required_subrecipes.map(rec => (
                <div>{rec.amount}{rec.unit}{' '}{rec.subrecipe}</div>
              ))}
            </div>
            
            <div className="view-recipe-">{recipe.directions}</div>

            <div className="view-recipe-equipment-image">
              <img src={`https://s3.amazonaws.com/nobsc-images-01/recipes/equipment/${recipe.equipment_image}.png`} />
            </div>
            <div className="view-recipe-ingredients-image">
              <img src={`https://s3.amazonaws.com/nobsc-images-01/recipes/ingredients/${recipe.ingredients_image}.png`} />
            </div>
            <div className="view-recipe-cooking-image">
              <img src={`https://s3.amazonaws.com/nobsc-images-01/recipes/cooking/${recipe.cooking_image}.png`} />
            </div>

          </div>
        }
      </div>
    </div>
  );
}

export default Recipe;