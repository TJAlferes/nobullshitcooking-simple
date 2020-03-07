import React from 'react';
import { Link } from 'react-router-dom';

import './recipe.css';  // use BEM

const Recipe = ({ recipe }) => (
  <div className="plan_recipe">
    <div className="planner_recipe_image">
      <img src={`https://s3.amazonaws.com/nobsc-user-recipe/${recipe.image}-tiny`} />
    </div>
    <div className="planner_recipe_text">
      <Link
        to={Number(recipe.owner) === 1
          ? `/recipes/${recipe.id}`
          : `/user-recipes/${recipe.id}`
        }
      >
        {recipe.text}
      </Link>
    </div>
  </div>
);

export default Recipe;