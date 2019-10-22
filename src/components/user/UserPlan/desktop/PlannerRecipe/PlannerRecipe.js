import React from 'react';

import './plannerRecipe.css';  // use BEM

const PlannerRecipe = ({ recipe }) => (
  <div className="planner_recipe">
    <div className="planner_recipe_image"><img src={recipe.image} /></div>
    <div className="planner_recipe_text">{recipe.text}</div>
  </div>
);

export default PlannerRecipe;