import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';  // just use ref instead?  ht tps://github.com/react-dnd/react-dnd/issues/591
import { DragSource, DropTarget } from 'react-dnd';
import flow from 'lodash/fp/flow';

import { Styles } from './Styles';

const Types = {PLANNER_RECIPE: 'PLANNER_RECIPE'};

const plannerRecipeSource = {
  beginDrag(props) {
    return {
      index: props.index,
      listId: props.listId,
      recipe: props.recipe
    };
  },
  endDrag(props, monitor) {
    const item = monitor.getItem();
    const dropResult = monitor.getDropResult();

    if (dropResult && (dropResult.listId !== item.listId)) {
      props.removeRecipe(item.index);
    }
  }
};

// be sure to explain this well, so that others easily understand it
const plannerRecipeTarget = {
  hover(props, monitor, component) {
    const dragIndex = monitor.getItem().index;
    const hoverIndex = props.index;
    const sourceListId = monitor.getItem().listId;

    // 1. conditional around here to determine if hovering over calendar or list to toggle vertical/horizontal

    // 2. and then, probably more challenging, solve the confusion between reordering within a day and moving between days

    // 3. and then, solve for dynamically created unique keys/ids

    // 4. clones and wrong deletions

    // 5. tds height expanding from dragged in divs (use grid? change style of DnD wrapper?)

    const hoverBoundingRect = findDOMNode(component).getBoundingClientRect();  // just use ref instead?  ht tps://github.com/react-dnd/react-dnd/issues/591
    const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
    const clientOffset = monitor.getClientOffset();
    const hoverClientY = clientOffset.y - hoverBoundingRect.top;
    //console.log("day: " + props.day);
    //console.log("expandedDay: " + props.expandedDay);
    //console.log("hoverIndex: " + hoverIndex);
    if (props.day !== props.expandedDay) {
      return;
    }
    
    if (dragIndex === hoverIndex) {
      return;
    }
    if ((dragIndex < hoverIndex) && (hoverClientY < hoverMiddleY)) {
      return;
    }
    if ((dragIndex > hoverIndex) && (hoverClientY > hoverMiddleY)) {
      return;
    }
    if (props.listId === sourceListId) {
      props.moveRecipe(dragIndex, hoverIndex);
      monitor.getItem().index = hoverIndex;  // mutation, but OK here(?)
    }
  }
};

function collectDropTarget(connect) {
  return {connectDropTarget: connect.dropTarget()};
}

function collectDragSource(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
}

class PlannerRecipe extends Component {
  render() {
    const { recipe, isDragging, connectDragSource, connectDropTarget } = this.props;
    const opacity = isDragging ? 0 : 1;

    return connectDragSource(connectDropTarget(
      <div style={{ opacity }}><Styles>{recipe.text}</Styles></div>
    ));
  }
}

export default flow(
  DropTarget(Types.PLANNER_RECIPE, plannerRecipeTarget, collectDropTarget),
  DragSource(Types.PLANNER_RECIPE, plannerRecipeSource, collectDragSource)
)(PlannerRecipe);