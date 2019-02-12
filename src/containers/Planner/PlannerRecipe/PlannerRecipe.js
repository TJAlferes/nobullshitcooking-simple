import React from 'react';
import { findDOMNode } from 'react-dom';
import { connect } from 'react-redux';
import { DragSource, DropTarget } from 'react-dnd';
//import flow from 'lodash/fp/flow';

import {
  plannerRemoveRecipeFromDay,
  plannerReorderRecipeInDay
} from '../../../store/actions/index';
import './plannerRecipe.css';  // use BEM 

const Types = {PLANNER_RECIPE: 'PLANNER_RECIPE'};

const plannerRecipeSource = {
  beginDrag(props) {
    return {
      index: props.index,
      listId: props.listId,
      recipe: props.recipe,
      day: props.day
    };
  },
  endDrag(props, monitor) {
    const item = monitor.getItem();
    if (item.day === "0") return; // to copy rather than remove from plannerrecipeslist
    const dropResult = monitor.getDropResult();
    if (dropResult && (dropResult.listId !== item.listId)) {
      props.plannerRemoveRecipeFromDay(item.day, item.index);
    }
  }
};

// be sure to explain this well, so that others easily understand it
const plannerRecipeTarget = {
  hover(props, monitor, component) {
    const dragIndex = monitor.getItem().index;
    const hoverIndex = props.index;
    const sourceListId = monitor.getItem().listId;
    const day = props.day;
    // or
    //const day = monitor.getItem().day;
    // CHECK THAT THESE ARE CORRECT!
    //const dragRecipe = props.recipe;
    // or
    const dragRecipe = monitor.getItem().recipe;
    // 1. conditional around here to determine if hovering over calendar or list???
    // 3. and then, solve for dynamically created unique keys/ids
    // 4. clones and wrong deletions
    const hoverBoundingRect = findDOMNode(component).getBoundingClientRect();
    const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
    const clientOffset = monitor.getClientOffset();
    const hoverClientY = clientOffset.y - hoverBoundingRect.top;
    if (props.day !== props.expandedDay) return;
    if (dragIndex === hoverIndex) return;
    if ((dragIndex < hoverIndex) && (hoverClientY < hoverMiddleY)) return;
    if ((dragIndex > hoverIndex) && (hoverClientY > hoverMiddleY)) return;
    if (props.listId === sourceListId) {
      //console.log('dragRecipe: ', dragRecipe);
      //console.log(`${day}, ${dragIndex}, ${hoverIndex}`, dragRecipe);
      props.plannerReorderRecipeInDay(day, dragIndex, hoverIndex, dragRecipe);
      monitor.getItem().index = hoverIndex;  // mutation, but OK here(?)
    }
  }
};

function collectDragSource(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
}

function collectDropTarget(connect) {
  return {connectDropTarget: connect.dropTarget()};
}

const PlannerRecipe = props => {
  const { recipe, isDragging, connectDragSource, connectDropTarget } = props;
  //const borderColor = isDragging ? "#ffc3c3" : "#ffdec3";
  //const backgroundColor = isDragging ? "#666" : "#fff3cc";
  //const opacity = isDragging ? 0 : 1;
  return connectDragSource(connectDropTarget(
    <div className="planner_recipe">
      {recipe.text}
    </div>
  ));
}

const mapDispatchToProps = dispatch => ({
  plannerRemoveRecipeFromDay: (day, index) => dispatch(plannerRemoveRecipeFromDay(day, index)),
  plannerReorderRecipeInDay: (day, dragIndex, hoverIndex, dragRecipe) => dispatch(plannerReorderRecipeInDay(day, dragIndex, hoverIndex, dragRecipe))
});

/*export default flow(
  DropTarget(Types.PLANNER_RECIPE, plannerRecipeTarget, collectDropTarget),
  DragSource(Types.PLANNER_RECIPE, plannerRecipeSource, collectDragSource)
)(PlannerRecipe);*/

export default connect(
  null,
  mapDispatchToProps
)(
  DropTarget(
    Types.PLANNER_RECIPE,
    plannerRecipeTarget,
    collectDropTarget
  )(
    DragSource(
      Types.PLANNER_RECIPE,
      plannerRecipeSource,
      collectDragSource
    )(PlannerRecipe)
  )
);