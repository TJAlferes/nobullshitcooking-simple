import React from 'react';
import { DropTarget } from 'react-dnd';

import MobilePlannerRecipe from '../MobilePlannerRecipe/MobilePlannerRecipe';
import './mobilePlannerRecipesList.css';  // use BEM

const Types = {PLANNER_RECIPE: 'PLANNER_RECIPE'};

const plannerRecipesListTarget = {
  drop(props) {
    const { day } = props;
    return {listId: day};
  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop()
  };
}

const MobilePlannerRecipesList = ({ day, list, connectDropTarget }) => (
  <div id="mobile_planner_recipes_list" ref={connectDropTarget}>
    {list.map((recipe, i) => (
      <MobilePlannerRecipe
        className="mobile_planner_recipe"
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

export default DropTarget(
  Types.PLANNER_RECIPE,
  plannerRecipesListTarget,
  collect
)(MobilePlannerRecipesList);