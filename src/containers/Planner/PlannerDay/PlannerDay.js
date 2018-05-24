import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import { DropTarget } from 'react-dnd';
import update from 'immutability-helper';

import PlannerRecipe from '../PlannerRecipe/PlannerRecipe';

const Types = {PLANNER_RECIPE: 'PLANNER_RECIPE'};  // is this definition necessary here since we imported?

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

//

class PlannerDay extends Component {
  constructor(props) {
    super(props);
    this.day = null;
    this.setSelfRef = element => {
      this.day = element;
    };
    this.state = {
      recipes: props.list,
      expanded: false,
      shiftX: 0,
      shiftY: 0
    };
  }
  
  componentDidUpdate() {
    // if this works, see if there is somewhere else in the lifecycle or some other way so that it does not repeat needlessly
    
    //const { shiftX, shiftY } = this.state;
    //style.setProperty('--shiftX', shiftX + 'px');
    //style.setProperty('--shiftY', shiftY + 'px');
    
    const dayClicked = this.day.getBoundingClientRect();
    //const dayClicked = this.day;
    const topCoords = dayClicked.top + pageYOffset;  // is the offset needed?
    const leftCoords = dayClicked.left + pageXOffset;  // is the offset needed?

    const { tRef } = this.props;
    //console.log(tRef);
    //console.log(findDOMNode(tRef.current));
    const tablePos = findDOMNode(tRef.current).getBoundingClientRect();
    //const moveY = tRef.top - topCoords;
    //const moveX = (tRef.right + 10) - leftCoords;
    const moveY = (tablePos.top + pageYOffset) - topCoords;
    const moveX = (tablePos.right + pageXOffset + 10) - leftCoords;
    console.log(this.state.shiftX);
    // CANT DO THIS HERE, LOOPS FOREVER AND EVER
    // Wrong. Hold my beer...
    if ((this.state.shiftX !== 0) || (this.state.shiftY !== 0)) {
      return;
    }
    this.setState({shiftX: moveX, shiftY: moveY});
  }
  
  handleClick = e => {
    /*
    MAYBE JUST USE PROMISES HERE!!!!!!!!!!!!!!!!!!
    const dayClicked = e.target.getBoundingClientRect();
    const topCoords = dayClicked.top + pageYOffset;  // is the offset needed?
    const leftCoords = dayClicked.left + pageXOffset;  // is the offset needed?
    const { tRef } = this.props; // or findDOMNode?
    console.log(tRef);
    console.log(findDOMNode(tRef.current));
    const tablePos = findDOMNode(tRef.current).getBoundingClientRect();
    //const moveY = tRef.top - topCoords;
    //const moveX = (tRef.right + 10) - leftCoords;
    const moveY = (tablePos.top + pageYOffset) - topCoords;
    const moveX = (tablePos.right+ pageXOffset + 10) - leftCoords;
    */
    e.preventDefault();
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
    const { recipes, expanded } = this.state;
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
    const { canDrop, isOver, connectDropTarget } = this.props;

    let size = expanded ? "planner_day_expanded" : "planner_day_collapsed";
    //let location = expanded ? ({"transform": "translateX(30px) translateY(90px)"}) : ({"transform": "none"});
    let location = {"--shiftX": `${shiftX}px`, "--shiftY": `${shiftY}px`};
    //setProperty('--shiftX', shiftX + 'px') setProperty('--shiftX', shiftX + 'px')
    /*
    const setShift = (shiftX, shiftY) => {
      style.setProperty('--shiftX', shiftX + 'px');
      style.setProperty('--shiftY', shiftY + 'px');
    };
    */
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
          />
        ))}
      </td>
    );
  }
}

export default DropTarget(Types.PLANNER_RECIPE, plannerDayTarget, collect)(PlannerDay);