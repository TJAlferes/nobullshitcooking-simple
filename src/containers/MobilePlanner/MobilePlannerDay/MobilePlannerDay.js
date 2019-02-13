import React, { Component } from 'react';
import { DropTarget } from 'react-dnd';

import MobilePlannerRecipe from '../MobilePlannerRecipe/MobilePlannerRecipe';

const Types = {PLANNER_RECIPE: 'PLANNER_RECIPE'};

const plannerDayTarget = {
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

class MobilePlannerDay extends Component {
  constructor(props) {
    super(props);
    this.day = null;
    this.setSelfRef = element => {
      this.day = element;
    };
  }
  
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

  render() {
    const { list, expanded, day, expandedDay } = this.props;
    const { canDrop, isOver, connectDropTarget } = this.props;
    let color = (isOver && canDrop) ? "mobile_planner_day_green" : "mobile_planner_day_white";
    return (!expanded || (day !== expandedDay))
    ? connectDropTarget(
      <div
        className={`mobile_planner_day ${color}`}
        ref={this.setSelfRef}
        onClick={this.handleClick}
      >
        <span className="mobile_the_date">{day}</span>
        {/*
        careful,
        there's both key and index here,
        and recipe.id can't be key because they should be able to have multiple
        instances of a recipe, so you need a dynamic instance id too
        */}
        {list.map((recipe, i) => (
          <MobilePlannerRecipe
            key={recipe.id}
            index={i}
            listId={this.props.id}
            recipe={recipe}
            removeRecipe={this.removeRecipe}
            moveRecipe={this.moveRecipe}
            expanded={expanded}
            day={day}
            expandedDay={expandedDay}
            className="mobile_planner_recipe"
          />
        ))}
      </div>
    )
    : false;
  }
}

// move to separate wrapper file in this same folder,
// like you would with react-redux's connect()
export default DropTarget(
  Types.PLANNER_RECIPE,
  plannerDayTarget,
  collect
)(MobilePlannerDay);