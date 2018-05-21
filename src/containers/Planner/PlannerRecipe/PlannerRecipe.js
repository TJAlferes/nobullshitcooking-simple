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
  /*
  beginDrag(props) {
    return {
      id: props.id,
      name: props.name
    };
  },
  endDrag(props, monitor) {
    const item = monitor.getItem();
    const dropResult = monitor.getDropResult();
    if (dropResult) {
      alert(`${item.name} on Day ${dropResult.day}, nice.`);
    }
    //CardActions.moveCardToList(item.id, dropResult.listId);
  }
  */
};

// where most of the magic happens
// document/explain this well so people understand it easily
const plannerRecipeTarget = {
  hover(props, monitor, component) {
    const dragIndex = monitor.getItem().index;
    const hoverIndex = props.index;
    const sourceListId = monitor.getItem().listId;

    if (dragIndex === hoverIndex) {
      return;
    }

    // use ref instead?
    const hoverBoundingRect = findDOMNode(component).getBoundingClientRect();
    const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
    const clientOffset = monitor.getClientOffset();
    const hoverClientY = clientOffset.y - hoverBoundingRect.top;

    if ((dragIndex < hoverIndex) && (hoverClientY < hoverMiddleY)) {
      return;
    }

    if ((dragIndex > hoverIndex) && (hoverClientY > hoverMiddleY)) {
      return;
    }

    if (props.listId === sourceListId) {
      props.moveRecipe(dragIndex, hoverIndex);
      monitor.getItem().index = hoverIndex;
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
    /*
    return connectDragSource(connectDropTarget(
      <div>{(isDragging && <p></p>) || (<Styles>{recipe.text}</Styles>)}</div>
    ));
    */
  }
}

export default flow(
  DropTarget(Types.PLANNER_RECIPE, plannerRecipeTarget, collectDropTarget),
  DragSource(Types.PLANNER_RECIPE, plannerRecipeSource, collectDragSource)
)(PlannerRecipe);