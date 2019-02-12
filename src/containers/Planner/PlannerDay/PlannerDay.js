import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DropTarget } from 'react-dnd';

import PlannerRecipe from '../PlannerRecipe/PlannerRecipe';
import { plannerClickDay, plannerAddRecipeToDay } from '../../../store/actions/index';

const Types = {PLANNER_RECIPE: 'PLANNER_RECIPE'};

const plannerDayTarget = {
  drop(props, monitor) {
    const { day } = props;
    const draggedRecipe = monitor.getItem();
    if (day !== draggedRecipe.listId) props.plannerAddRecipeToDay(day, draggedRecipe.recipe)
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

class PlannerDay extends Component {
  handleClickDay = () => {
    const { day } = this.props;
    this.props.plannerClickDay(day);
  }

  render() {
    const { list, expanded, day, expandedDay } = this.props;
    const { canDrop, isOver, connectDropTarget } = this.props;
    let size = (expanded && (day === expandedDay)) ? "planner_day_expanded" : "planner_day_collapsed";
    let color = (isOver && canDrop) ? "planner_day_green" : "planner_day_white";
    return connectDropTarget(
      <div className={`${color} ${size}`} onClick={this.handleClickDay}>
        <span className="the_date">{day}</span>
        {/*
        careful,
        there's both key and index here,
        and recipe.id can't be key because they should be able to have multiple
        instances of a recipe, so you need a dynamic instance id too
        */}
        {list.map((recipe, i) => (
          <PlannerRecipe
            className="planner_recipe"
            key={recipe.id}
            index={i}
            listId={this.props.id}
            recipe={recipe}
            expanded={expanded}
            day={day}
            expandedDay={expandedDay}
          />
        ))}
      </div>
    );
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
    plannerDayTarget,
    collect
  )(PlannerDay)
);