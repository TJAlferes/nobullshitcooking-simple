import React from 'react';

import PlannerRecipe from '../PlannerRecipe/PlannerRecipe';

import './plannerRecipesList.css';  // use BEM

const PlannerRecipesList = ({ day, list }) => (
  <div id="planner_recipes_list">
    {list.map((recipe, i) => (
      <PlannerRecipe
        className="planner_recipe"
        key={recipe.key}
        id={recipe.key}
        index={i}
        listId={day}
        recipe={recipe}
        day={day}
      />
    ))}
  </div>
);

export default PlannerRecipesList;