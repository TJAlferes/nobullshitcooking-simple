import React from 'react';
import { findDOMNode } from 'react-dom';
import { connect } from 'react-redux';
import { DragSource, DropTarget } from 'react-dnd';
//import flow from 'lodash/fp/flow';
// why is the add in the days? shouldn't it be here also?
import {
  plannerRemoveRecipeFromDay,
  plannerReorderRecipeInDay
} from '../../../store/actions/index';
import './plannerRecipe.css';  // use BEM 

const Types = {PLANNER_RECIPE: 'PLANNER_RECIPE'};
// return id: props(.recipe).id and/or key: props(.recipe).key here also?
const plannerRecipeSource = {
  beginDrag(props) {
    return {
      index: props.index,
      //listId: props.listId,
      recipe: props.recipe,
      day: props.day,
      key: props.recipe.key
    };
  },
  endDrag(props, monitor) {
    // or should we remove old here?
    const item = monitor.getItem();
    if (item.day === "0") return; // to copy rather than remove from plannerrecipeslist
    const dropResult = monitor.getDropResult();
    //console.log(item.listId);
    console.log(item.day);
    //console.log(props.listId);
    //console.log(dropResult.listId);
    console.log(dropResult);
    console.log(dropResult.listId);
    //if (dropResult && (dropResult.listId !== item.listId)) {
    // problem of lingering recipe might be here?
    if (dropResult && (dropResult.listId !== item.day)) {
      props.plannerRemoveRecipeFromDay(item.day, item.index);
    }
  }
};

// be sure to explain this well, so that others easily understand it
const plannerRecipeTarget = {
  hover(props, monitor, component) {
    if (!component) return null;
    const { day, expandedDay } = props;
    if (day !== expandedDay) return;
    const dragIndex = monitor.getItem().index;
    const hoverIndex = props.index;
    if (dragIndex === hoverIndex) return;
    //const sourceListId = monitor.getItem().listId;
    //const dragRecipe = monitor.getItem().recipe;
    // 4. clones and wrong deletions
    const hoverBoundingRect = findDOMNode(component).getBoundingClientRect();
    const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
    const clientOffset = monitor.getClientOffset();
    const hoverClientY = clientOffset.y - hoverBoundingRect.top;
    //if (props.day !== props.expandedDay) return;
    //if (dragIndex === hoverIndex) return;
    if ((dragIndex < hoverIndex) && (hoverClientY < hoverMiddleY)) return;
    if ((dragIndex > hoverIndex) && (hoverClientY > hoverMiddleY)) return;
    props.plannerReorderRecipeInDay(dragIndex, hoverIndex);
    monitor.getItem().index = hoverIndex;
    /*if (props.listId === sourceListId) {
      //console.log('dragRecipe: ', dragRecipe);
      //console.log(`${day}, ${dragIndex}, ${hoverIndex}`, dragRecipe);
      //props.plannerReorderRecipeInDay(day, dragIndex, hoverIndex, dragRecipe);
      props.plannerReorderRecipeInDay(dragIndex, hoverIndex);
      // swap or move this?
      monitor.getItem().index = hoverIndex;  // mutation, but OK here(?)
    }*/
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
  plannerReorderRecipeInDay: (dragIndex, hoverIndex) => dispatch(plannerReorderRecipeInDay(dragIndex, hoverIndex))
  //plannerReorderRecipeInDay: (day, dragIndex, hoverIndex, dragRecipe) => dispatch(plannerReorderRecipeInDay(day, dragIndex, hoverIndex, dragRecipe))
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