import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DropTarget } from 'react-dnd';

import PlannerRecipe from '../PlannerRecipe/PlannerRecipe';
import { plannerClickDay } from '../../../store/actions/index';

const Types = {PLANNER_RECIPE: 'PLANNER_RECIPE'};

const plannerExpandedDayTarget = {
  drop(props, monitor, component) {
    const { day } = props;
    const draggedRecipe = monitor.getItem();
    if (day !== draggedRecipe.listId) component.pushRecipe(draggedRecipe.recipe);
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
    console.log(day + ' clicked.');
    this.props.plannerClickDay(day);
  }
  /*constructor(props) {
    super(props);
    this.day = null;
    this.setSelfRef = element => {
      this.day = element;
    };
    this.state = {recipes: props.list};  // remove, use redux?
  }*/

  /*
  // we're moving all these to redux
  // send child back to its usual div
  handleClick = async (e) => {
    const { day, onDayClick } = this.props;
    e.preventDefault(); // stoppropagation or none?
    await onDayClick(day);
  }

  pushRecipe = async (recipe) => {
    const { day, onPushRecipe } = this.props;
    await onPushRecipe(day, recipe);
  }

  removeRecipe = async (index) => {
    const { day, onRemoveRecipe } = this.props;
    await onRemoveRecipe(day, index);
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
    const { onAddRecipeToDay, onRemoveRecipeFromDay, onReorderRecipeInDay } = this.props;
    const { canDrop, isOver, connectDropTarget } = this.props;
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
        */}
        {list.map((recipe, i) => (
          <PlannerRecipe
            key={recipe.id}
            index={i}
            listId={this.props.id}
            recipe={recipe}
            removeRecipe={onRemoveRecipeFromDay}
            moveRecipe={onReorderRecipeInDay}
            expanded={expanded}
            day={day}
            expandedDay={expandedDay}
            className="planner_recipe"
          />
        ))}
      </div>
    )
    : false;
  }
}

const mapDispatchToProps = dispatch => ({
  plannerClickDay: (day) => dispatch(plannerClickDay(day))
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