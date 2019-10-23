import React from 'react';

import './plannerRecipe.css';  // use BEM

const PlannerRecipe = ({ recipe }) => (
  <div className="planner_recipe">
    <div className="planner_recipe_image">
      <img src={`https://nobsc-user-recipe.s3.amazonaws.com/${recipe.image}-tiny`} />
    </div>
    <div className="planner_recipe_text">{recipe.text}</div>
  </div>
);

export default PlannerRecipe; 