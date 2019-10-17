import React from 'react';
import { connect } from 'react-redux';
import { DropTarget } from 'react-dnd-cjs';

import PlannerRecipe from '../PlannerRecipe/PlannerRecipe';
import {
  plannerClickDay,
  plannerAddRecipeToDay
} from '../../../../../store/actions/index';

const Types = {PLANNER_RECIPE: 'PLANNER_RECIPE'};

const plannerExpandedDayTarget = {
  drop(props, monitor) {
    const { day, expandedDay } = props;
    const draggedRecipe = monitor.getItem();
    if (expandedDay !== draggedRecipe.day) props.plannerAddRecipeToDay(day, draggedRecipe.recipe);
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

const PlannerExpandedDay = ({
  list, expanded, day, expandedDay, plannerClickDay, canDrop, isOver, connectDropTarget
}) => {
  const handleClickDay = () => {
    plannerClickDay(day);
  };
  let color = (isOver && canDrop) ? "planner_day_green" : "planner_day_white";
  return expanded
  ? (
    <div className={`planner_expanded_day ${color}`} onClick={handleClickDay} ref={connectDropTarget}>
      <span className="the_date">{day}</span>
      {list.map((recipe, i) => (
        <PlannerRecipe
          className="planner_recipe"
          key={recipe.key}
          id={recipe.key}
          index={i}
          recipe={recipe}
          expanded={expanded}
          day={day}
          expandedDay={expandedDay}
        />
      ))}
    </div>
  )
  : false;
};

const mapDispatchToProps = dispatch => ({
  plannerClickDay: (day) => dispatch(plannerClickDay(day)),
  plannerAddRecipeToDay: (day, recipe) => dispatch(plannerAddRecipeToDay(day, recipe))
});

export default connect(
  null,
  mapDispatchToProps
)(
  DropTarget(
    Types.PLANNER_RECIPE,
    plannerExpandedDayTarget,
    collect
  )(PlannerExpandedDay)
);