import React from 'react';
import { connect } from 'react-redux';
import { DropTarget } from 'react-dnd-cjs';

import MobilePlannerRecipe from '../MobilePlannerRecipe/MobilePlannerRecipe';
import { plannerClickDay, plannerAddRecipeToDay } from '../../../../../store/actions/index';

const Types = {PLANNER_RECIPE: 'PLANNER_RECIPE'};

const plannerDayTarget = {
  drop(props, monitor) {
    const { day } = props;
    const draggedRecipe = monitor.getItem();
    if (day !== draggedRecipe.day) props.plannerAddRecipeToDay(day, draggedRecipe.recipe);
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

const MobilePlannerDay = ({
  list, expanded, day, expandedDay, plannerClickDay, canDrop, isOver, connectDropTarget
}) => {
  const handleClickDay = () => {
    plannerClickDay(day);
  };
  let color = (isOver && canDrop) ? "mobile_planner_day_green" : "mobile_planner_day_white";
  return (!expanded || (day !== expandedDay))
  ? (
    <div className={`mobile_planner_day ${color}`} onClick={handleClickDay} ref={connectDropTarget}>
      <span className="mobile_the_date">{day}</span>
      {list.map((recipe, i) => (
        <MobilePlannerRecipe
          className="mobile_planner_recipe"
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
    plannerDayTarget,
    collect
  )(MobilePlannerDay)
);