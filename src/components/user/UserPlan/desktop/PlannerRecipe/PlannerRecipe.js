import React from 'react';
import { Link } from 'react-router-dom';

import './plannerRecipe.css';  // use BEM

const PlannerRecipe = ({ recipe }) => (
  <div className="planner_recipe">
    <div className="planner_recipe_image">
      <img src={`https://nobsc-user-recipe.s3.amazonaws.com/${recipe.image}-tiny`} />
    </div>
    <div className="planner_recipe_text">
      <Link
        to={Number(recipe.owner_id) === 1
          ? `/recipes/${recipe.recipe_id}`
          : `/user/recipes/${recipe.recipe_id}`
        }
      >
        {recipe.text}
      </Link>
    </div>
  </div>
);

export default PlannerRecipe; 