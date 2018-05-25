import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import { DropTarget } from 'react-dnd';
import update from 'immutability-helper';

import PlannerRecipe from '../PlannerRecipe/PlannerRecipe';

const Types = {PLANNER_RECIPE: 'PLANNER_RECIPE'};

const plannerDayTarget = {
  drop(props, monitor, component) {
    const { day } = props;
    const draggedRecipe = monitor.getItem();

    if (day !== draggedRecipe.listId) {
      component.pushRecipe(draggedRecipe.recipe);
    }

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
  constructor(props) {
    super(props);

    this.day = null;

    this.setSelfRef = element => {
      this.day = element;
    };

    this.state = {
      recipes: props.list,
      shiftX: 0,
      shiftY: 0
    };
  }
  
  componentDidUpdate() {
    const dayClicked = this.day.getBoundingClientRect();
    const topCoords = dayClicked.top + pageYOffset;
    const leftCoords = dayClicked.left + pageXOffset;

    const { tRef } = this.props;
    const tablePos = findDOMNode(tRef.current).getBoundingClientRect();
    const moveY = (tablePos.top + pageYOffset) - topCoords;
    const moveX = (tablePos.right + pageXOffset + 10) - leftCoords;

    // without this conditional, setState would be called endlessly
    const { shiftX, shiftY } = this.state;
    if ((shiftX !== 0) || (shiftY !== 0)) {
      return;
    }

    this.setState({shiftX: moveX, shiftY: moveY});
  }
  
  handleClick = async (e) => {
    const { day, expandedDay, onDayClick } = this.props;

    e.preventDefault(); // stoppropagation or none?

    if (day === expandedDay) {
      await onDayClick("none");
      //collapse this one
    } else {
      await onDayClick(day);
      //collapse expandedDay, then expand this one
    }
    console.log("---test2---");
    console.log("Day clicked: " + this.props.day);
    console.log("Expanded? " + this.props.expanded);
    console.log("Expanded day: " + this.props.expandedDay);
  }
  
  pushRecipe = recipe => {
    this.setState(update(this.state, {
      recipes: {$push: [recipe]}
    }));
  }

  removeRecipe = index => {
    this.setState(update(this.state, {
      recipes: {$splice: [[index, 1]]}
    }));
  }

  moveRecipe = (dragIndex, hoverIndex) => {
    const { recipes } = this.state;
    const { day, expandedDay } = this.props;
    const dragRecipe = recipes[dragIndex];

    // only allow reordering/moving of recipes within currently expanded day
    if (day !== expandedDay) {
      return;
    }

    this.setState(update(this.state, {
      recipes: {$splice: [[dragIndex, 1], [hoverIndex, 0, dragRecipe]]}
    }));
  }

  render() {
    const { recipes, shiftX, shiftY } = this.state;
    const { expanded, day, expandedDay, canDrop, isOver, connectDropTarget } = this.props;

    let size = (expanded && (day === expandedDay)) ? "planner_day_expanded" : "planner_day_collapsed";
    let location = {"--shiftX": `${shiftX}px`, "--shiftY": `${shiftY}px`};
    let color = (isOver && canDrop) ? "planner_day_green" : "planner_day_white";
    
    return connectDropTarget(
      <td
      style={location}
      className={`${size} ${color}`}
      ref={this.setSelfRef}
      onClick={this.handleClick}
      >
        <span className="the_date">{this.props.day}</span>
        {recipes.map((recipe, i) => (
          <PlannerRecipe
          key={recipe.id}
          index={i}
          listId={this.props.id}
          recipe={recipe}
          removeRecipe={this.removeRecipe}
          moveRecipe={this.moveRecipe}
          expanded={expanded}
          className="planner_recipe"
          />
        ))}
      </td>
    );
  }
}

export default DropTarget(Types.PLANNER_RECIPE, plannerDayTarget, collect)(PlannerDay);