import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DropTarget } from 'react-dnd';

import MobilePlannerRecipe from '../MobilePlannerRecipe/MobilePlannerRecipe';
import {
  plannerAddRecipeToDay,
  plannerRemoveRecipeFromDay
} from '../../../store/actions/index';
import './mobilePlannerRecipesList.css';  // use BEM

const Types = {PLANNER_RECIPE: 'PLANNER_RECIPE'};  // is this definition necessary here since we imported?

const plannerRecipesListTarget = {
  drop(props, monitor) {
    const { day } = props;
    const draggedRecipe = monitor.getItem();
    const dropResult = monitor.getDropResult();
    if (dropResult === null) {
      props.plannerRemoveRecipeFromDay(draggedRecipe.day, draggedRecipe.index);
      return {listId: day};
    }
    if (day !== draggedRecipe.listId) props.plannerAddRecipeToDay(day, draggedRecipe.recipe);
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

class MobilePlannerRecipesList extends Component {
  render() {
    const { day, list, connectDropTarget } = this.props;
    return connectDropTarget(
      <div id="mobile_planner_recipes_list">
        {list.map((recipe, i) => (
          <MobilePlannerRecipe
            className="mobile_planner_recipe"
            key={recipe.key}
            index={i}
            listId={day}
            recipe={recipe}
            day={day}
          />
        ))}
      </div>
    );
  }
}

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
  )(MobilePlannerRecipesList)
);