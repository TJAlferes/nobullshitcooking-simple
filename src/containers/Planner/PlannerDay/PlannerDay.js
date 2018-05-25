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
      expanded: false,  // remove (lifted up)
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
    if ((this.state.shiftX !== 0) || (this.state.shiftY !== 0)) {
      return;
    }

    this.setState({shiftX: moveX, shiftY: moveY});
  }
  
  handleClick = e => {
    e.preventDefault();

    // lifted up, how do you handle this..?
    this.setState(prevState => ({
      expanded: !prevState.expanded
    }));
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
    const { recipes, expanded } = this.state;  // expanded would be in props instead of state
    const dragRecipe = recipes[dragIndex];

    if (expanded === false) {
      return;
    }

    this.setState(update(this.state, {
      recipes: {$splice: [[dragIndex, 1], [hoverIndex, 0, dragRecipe]]}
    }));
  }

  render() {
    const { recipes, expanded, shiftX, shiftY } = this.state;
    const { canDrop, isOver, connectDropTarget } = this.props;  // expanded would be here in props, rather than in state

    let size = expanded ? "planner_day_expanded" : "planner_day_collapsed";
    let location = {"--shiftX": `${shiftX}px`, "--shiftY": `${shiftY}px`};
    let color = (isOver && canDrop) ? "planner_day_green" : "planner_day_white";
    
    return connectDropTarget(
      <td className={`${size} ${color}`} ref={this.setSelfRef} onClick={this.handleClick} style={location}>
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