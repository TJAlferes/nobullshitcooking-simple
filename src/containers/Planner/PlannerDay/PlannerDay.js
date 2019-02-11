import React, { Component } from 'react';
import { DropTarget } from 'react-dnd';

import PlannerRecipe from '../PlannerRecipe/PlannerRecipe';

const Types = {PLANNER_RECIPE: 'PLANNER_RECIPE'};

const plannerDayTarget = {
  drop(props, monitor, component) {
    const { day } = props;
    const draggedRecipe = monitor.getItem();
    if (day !== draggedRecipe.listId) component.props.onAddRecipeToDay(draggedRecipe.recipe);
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
  /*constructor(props) {
    super(props);
    this.day = null;
    this.setSelfRef = element => {
      this.day = element;
    };
  }*/
  
  /*
  we no longer need this, as we're using react-aria-modal instead of css transform
  ( //import { findDOMNode } from 'react-dom'; )
  componentDidUpdate() {
    // ********* JUST USE PORTALS INSTEAD??? **********
    // (would need to copy data / state over though)
    const dayClicked = this.day.getBoundingClientRect();
    //const topCoords = dayClicked.top + pageYOffset;
    //const leftCoords = dayClicked.left + pageXOffset;
    const topCoords = dayClicked.top;
    const leftCoords = dayClicked.left;
    const { tRef } = this.props;
    const tablePos = findDOMNode(tRef.current).getBoundingClientRect();
    //const moveY = (tablePos.top + pageYOffset) - topCoords;
    //const moveX = (tablePos.right + pageXOffset + 10) - leftCoords;
    const moveY = (tablePos.top) - topCoords;
    const moveX = (tablePos.right + 10) - leftCoords;

    console.log("===== update =====");
    console.log(tablePos.top);
    console.log(dayClicked.top);
    console.log(tablePos.right + 10);
    console.log(dayClicked.left);
    console.log(moveY);
    console.log(moveX);

    // without this conditional, setState would be called endlessly
    const { shiftX, shiftY } = this.state;
    if ((shiftX !== 0) || (shiftY !== 0)) return;  // issue is here I think... but maybe not... remember, it wasn't doing this before...
    this.setState({shiftX: moveX, shiftY: moveY});
  }
  */
  
  /*
  // 
  // we're moving all these to redux
  handleClick = async (e) => {
    const { day, expanded, expandedDay, onDayClick } = this.props;
    e.preventDefault(); // stoppropagation or none?
    await onDayClick(day);
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
    if (day !== expandedDay) return;
    this.setState(update(this.state, {
      recipes: {$splice: [[dragIndex, 1], [hoverIndex, 0, dragRecipe]]}
    }));
  }
  */

  render() {
    const { list, expanded, day, expandedDay, canDrop, isOver, connectDropTarget } = this.props;

    let size = (expanded && (day === expandedDay)) ? "planner_day_expanded" : "planner_day_collapsed";
    //let location = {"--shiftX": `${shiftX}px`, "--shiftY": `${shiftY}px`};
    let color = (isOver && canDrop) ? "planner_day_green" : "planner_day_white";
    
    return connectDropTarget(
      <div
        className={`${color} ${size}`}
        ref={this.setSelfRef}
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
            removeRecipe={this.removeRecipe}
            moveRecipe={this.moveRecipe}
            expanded={expanded}
            day={day}
            expandedDay={expandedDay}
            className="planner_recipe"
          />
        ))}
      </div>
    );
  }
}

// move to separate wrapper file in this same folder,
// like you would with react-redux's connect()
export default DropTarget(
  Types.PLANNER_RECIPE,
  plannerDayTarget,
  collect
)(PlannerDay);