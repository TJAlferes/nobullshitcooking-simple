import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DropTarget } from 'react-dnd';

import MobilePlannerRecipe from '../MobilePlannerRecipe/MobilePlannerRecipe';
import { plannerClickDay, plannerAddRecipeToDay } from '../../../store/actions/index';

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

class MobilePlannerExpandedDay extends Component {
  handleClickDay = () => {
    const { day } = this.props;
    this.props.plannerClickDay(day);
  }

  render() {
    const { list, expanded, day, expandedDay } = this.props;
    const { canDrop, isOver, connectDropTarget } = this.props;
    let color = (isOver && canDrop) ? "mobile_planner_day_green" : "mobile_planner_day_white";
    return expanded
    ? connectDropTarget(
      <div className={`mobile_planner_expanded_day ${color}`} onClick={this.handleClickDay}>
        <span className="mobile_the_date">{day}</span>
        {list.map((recipe, i) => (
          <MobilePlannerRecipe
            className="mobile_planner_recipe"
            key={recipe.key}
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
  }
}

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
  )(MobilePlannerExpandedDay)
);