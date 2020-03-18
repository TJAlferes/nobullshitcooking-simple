import React from 'react';
import { Link } from 'react-router-dom';

import './recipe.css';  // use BEM

const Recipe = ({ recipe }) => (
  <div className="plan_recipe">
    <div className="planner_recipe_image">
      <img src={`https://s3.amazonaws.com/nobsc-user-recipe/${recipe.recipe_image}-tiny`} />
    </div>
    <div className="planner_recipe_text">
      <Link
        to={Number(recipe.owner_id) === 1
          ? `/recipes/${recipe.recipe_id}`
          : `/user-recipes/${recipe.recipe_id}`
        }
      >
        {recipe.title}
      </Link>
    </div>
  </div>
);

export default Recipe;