import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DropTarget } from 'react-dnd';

import PlannerRecipe from '../PlannerRecipe/PlannerRecipe';
import { plannerClickDay, plannerAddRecipeToDay } from '../../../store/actions/index';

const Types = {PLANNER_RECIPE: 'PLANNER_RECIPE'};

const plannerExpandedDayTarget = {
  drop(props, monitor, component) {
    const { day } = props;
    const draggedRecipe = monitor.getItem();
    const dropResult = monitor.getDropResult();
    //console.log('in plannerExpandedDayTarget', draggedRecipe);
    //if (day === draggedRecipe.day) props.plannerRemoveRecipeFromDay(day, dropResult.index);
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

class PlannerExpandedDay extends Component {
  handleClickDay = () => {
    const { day } = this.props;
    this.props.plannerClickDay(day);
  }

  // move to dnd spec (but only for expandedday?)
  /*
  handleReorderRecipeInDay = () => {
    const { day, dragIndex, hoverIndex, dragRecipe, plannerReorderRecipeInDay } = this.props;
    plannerReorderRecipeInDay(day, dragIndex, hoverIndex, dragRecipe);
  }

  moveRecipe = async (dragIndex, hoverIndex) => {
    const { recipes } = this.state; // !!!!!!! or list from props?
    const { day, expandedDay, onReorderRecipe } = this.props;
    const dragRecipe = recipes[dragIndex];
    // only allow reordering/moving of recipes within currently expanded day
    if (day !== expandedDay) return;
    await onReorderRecipe(day, dragIndex, hoverIndex, dragRecipe);
  }
  */

  render() {
    const { list, expanded, day, expandedDay } = this.props;
    const { canDrop, isOver, connectDropTarget } = this.props;
    //let size = (expanded && (day === expandedDay)) ? "planner_day_expanded" : "planner_day_collapsed";
    let color = (isOver && canDrop) ? "planner_day_green" : "planner_day_white";
    return expanded
    ? connectDropTarget(
      <div
        className={`planner_expanded_day ${color}`}
        ref={this.setSelfRef}
        onClick={this.handleClickDay}
      >
        <span className="the_date">{day}</span>
        {/*
        careful,
        there's both key and index here,
        and recipe.id can't be key because they should be able to have multiple
        instances of a recipe, so you need a dynamic instance id too

        key={recipe.id}
        */}
        {list.map((recipe, i) => (
          recipe 
          ? (
            <PlannerRecipe
              className="planner_recipe"
              key={recipe && recipe.key}
              index={i}
              listId={this.props.id}
              recipe={recipe}
              expanded={expanded}
              day={day}
              expandedDay={expandedDay}
            />
          )
          : false
        ))}
      </div>
    )
    : false;
  }
}

const mapDispatchToProps = dispatch => ({
  plannerClickDay: (day) => dispatch(plannerClickDay(day)),
  plannerAddRecipeToDay: (day, recipe) => dispatch(plannerAddRecipeToDay(day, recipe))
  //plannerRemoveRecipeFromDay: (day, index) => dispatch(plannerRemoveRecipeFromDay(day, index))
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