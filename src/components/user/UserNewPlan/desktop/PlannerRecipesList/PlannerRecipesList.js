import React from 'react';
import { connect } from 'react-redux';
import { DropTarget } from 'react-dnd-cjs';

import {
  plannerAddRecipeToDay,
  plannerRemoveRecipeFromDay
} from '../../../../../store/actions/index';

import PlannerRecipe from '../PlannerRecipe/PlannerRecipe';

import './plannerRecipesList.css';

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

const PlannerRecipesList = ({ day, list, connectDropTarget }) => (
  <div className="planner-recipes-list" ref={connectDropTarget}>
    {list.map((recipe, i) => (
      <PlannerRecipe
        className="planner_recipe"
        key={recipe.key}
        id={recipe.key}
        index={i}
        listId={day}
        day={day}
        recipe={recipe}
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