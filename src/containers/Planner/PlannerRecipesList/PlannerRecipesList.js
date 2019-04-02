import React from 'react';
import { connect } from 'react-redux';
import { DropTarget } from 'react-dnd';

import PlannerRecipe from '../PlannerRecipe/PlannerRecipe';
import {
  plannerAddRecipeToDay,
  plannerRemoveRecipeFromDay
} from '../../../store/actions/index';
import './plannerRecipesList.css';  // use BEM

const Types = {PLANNER_RECIPE: 'PLANNER_RECIPE'};

const plannerRecipesListTarget = {
  drop(props, monitor) {
    const { day } = props;
    const draggedRecipe = monitor.getItem();
    const dropResult = monitor.getDropResult();
    if (dropResult === null) {
      props.plannerRemoveRecipeFromDay(draggedRecipe.day, draggedRecipe.index);  // this?
      return {listId: day};
    }
    if (day !== draggedRecipe.listId) props.plannerAddRecipeToDay(day, draggedRecipe.recipe);  // this?
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

const PlannerRecipesList = ({ day, list, connectDropTarget }) => (
  <div id="planner_recipes_list" ref={connectDropTarget}>
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

const mapDispatchToProps = dispatch => ({
  plannerAddRecipeToDay: (day, recipe) => dispatch(plannerAddRecipeToDay(day, recipe)),
  plannerRemoveRecipeFromDay: (day, index) => dispatch(plannerRemoveRecipeFromDay(day, index)),
});

export default connect(
  null,
  mapDispatchToProps
)(
  DropTarget(
    Types.PLANNER_RECIPE,
    plannerRecipesListTarget,
    collect
  )(PlannerRecipesList)
);