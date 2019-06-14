import React from 'react';
import { connect } from 'react-redux';
import { DropTarget } from 'react-dnd';

import MobilePlannerRecipe from '../MobilePlannerRecipe/MobilePlannerRecipe';
import {
  plannerClickDay,
  plannerAddRecipeToDay,
  plannerUpdatePublicUrl
} from '../../../../store/actions/index';

const Types = {PLANNER_RECIPE: 'PLANNER_RECIPE'};

async function addThenUpdate(props, day, draggedRecipe) {
  await props.plannerAddRecipeToDay(day, draggedRecipe.recipe);  // or make thunk/saga
  props.plannerUpdatePublicUrl();  // or make thunk/saga
}

const plannerDayTarget = {
  drop(props, monitor) {
    const { day } = props;
    const draggedRecipe = monitor.getItem();
    if (day !== draggedRecipe.day) addThenUpdate(props, day, draggedRecipe);
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
  plannerAddRecipeToDay: (day, recipe) => dispatch(plannerAddRecipeToDay(day, recipe)),
  plannerUpdatePublicUrl: () => dispatch(plannerUpdatePublicUrl())
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