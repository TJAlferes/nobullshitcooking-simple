import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';  // use ref instead?
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

// explain this well so people understand it easily
const plannerRecipeTarget = {
  hover(props, monitor, component) {
    const dragIndex = monitor.getItem().index;
    const hoverIndex = props.index;
    const sourceListId = monitor.getItem().listId;
    // 1. conditional around here to determine if hovering over calendar or list to toggle vertical/horizontal
    // 2. and then, probably more challenging, solve the confusion between reordering within a day and moving between days
    // 3. and then, solve for dynamically created unique keys/ids
    // https://github.com/react-dnd/react-dnd/issues/591
    const hoverBoundingRect = findDOMNode(component).getBoundingClientRect();  // use ref instead?
    const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
    const clientOffset = monitor.getClientOffset();
    const hoverClientY = clientOffset.y - hoverBoundingRect.top;
    /*
    if (props.expanded === false) {
      return;
    }
    */
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

//

class PlannerRecipe extends Component {
  render() {
    const { recipe, connectDragSource, connectDropTarget } = this.props;

    return connectDragSource(connectDropTarget(
      <div><Styles>{recipe.text}</Styles></div>
    ));
  }
}

export default flow(
  DropTarget(Types.PLANNER_RECIPE, plannerRecipeTarget, collectDropTarget),
  DragSource(Types.PLANNER_RECIPE, plannerRecipeSource, collectDragSource)
)(PlannerRecipe);