import React from 'react';
import { Link } from 'react-router-dom';

import './plannerRecipe.css';  // use BEM

const PlannerRecipe = ({ recipe }) => (
  <div className="plan_recipe">
    <div className="planner_recipe_image">
      <img src={`https://nobsc-user-recipe.s3.amazonaws.com/${recipe.image}-tiny`} />
    </div>
    <div className="planner_recipe_text">
      <Link
        to={Number(recipe.owner) === 1
          ? `/recipes/${recipe.id}`
          : `/user/recipes/${recipe.id}`
        }
      >
        {recipe.text}
      </Link>
    </div>
  </div>
);

export default PlannerRecipe; 