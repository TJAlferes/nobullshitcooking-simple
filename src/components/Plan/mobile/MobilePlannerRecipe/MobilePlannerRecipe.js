import React, { forwardRef, useRef, useImperativeHandle } from 'react';
import { connect } from 'react-redux';
import { DragSource, DropTarget } from 'react-dnd-cjs';

import {
  plannerRemoveRecipeFromDay,
  plannerReorderRecipeInDay,
  plannerPublicSaveToUrl
} from '../../../../store/actions/index';
import './mobilePlannerRecipe.css';  // use BEM

const Types = {PLANNER_RECIPE: 'PLANNER_RECIPE'};

async function removeThenUpdate(props, item) {
  await props.plannerRemoveRecipeFromDay(item.day, item.index);
  props.plannerPublicSaveToUrl();
}

async function reorderThenUpdate(props, dragIndex, hoverIndex) {
  await props.plannerReorderRecipeInDay(dragIndex, hoverIndex);
  props.plannerPublicSaveToUrl();
}

const plannerRecipeSource = {
  beginDrag(props) {
    return {
      id: props.id,
      index: props.index,
      listId: props.listId,
      recipe: props.recipe,
      day: props.day,
      key: props.recipe.key
    };
  },
  endDrag(props, monitor) {
    const item = monitor.getItem();
    if (item.day === "0") return;  // to copy rather than remove from mobileplannerrecipeslist
    const dropResult = monitor.getDropResult();
    if (dropResult && (dropResult.listId !== item.day)) removeThenUpdate(props, item);
  }
};

// be sure to explain this well, so that others easily understand it
const plannerRecipeTarget = {
  hover(props, monitor, component) {
    if (!component) return null;
    const node = component.getNode();
    if (!node) return null;
    const { day, expandedDay } = props;
    if (day !== expandedDay) return;
    const sourceDay = monitor.getItem().day;
    if (sourceDay !== expandedDay) return;
    const dragIndex = monitor.getItem().index;
    const hoverIndex = props.index;
    if (dragIndex === hoverIndex) return;
    const hoverBoundingRect = node.getBoundingClientRect();
    const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
    const clientOffset = monitor.getClientOffset();
    const hoverClientY = clientOffset.y - hoverBoundingRect.top;
    if ((dragIndex < hoverIndex) && (hoverClientY < hoverMiddleY)) return;
    if ((dragIndex > hoverIndex) && (hoverClientY > hoverMiddleY)) return;
    reorderThenUpdate(props, dragIndex, hoverIndex);
    monitor.getItem().index = hoverIndex;
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

const MobilePlannerRecipe = forwardRef(
  ({ recipe, connectDragSource, connectDropTarget }, ref) => {
    const elementRef = useRef(null);
    connectDragSource(elementRef);
    connectDropTarget(elementRef);
    useImperativeHandle(ref, () => ({getNode: () => elementRef.current}));

    return (
      <div className="mobile_planner_recipe" ref={elementRef}>
        <div className="mobile_planner_recipe_image"><img src={recipe.image} /></div>
        <div className="mobile_planner_recipe_text">{recipe.text}</div>
      </div>
    );
  }
);

const mapDispatchToProps = dispatch => ({
  plannerRemoveRecipeFromDay: (day, index) => dispatch(plannerRemoveRecipeFromDay(day, index)),
  plannerReorderRecipeInDay: (dragIndex, hoverIndex) => dispatch(plannerReorderRecipeInDay(dragIndex, hoverIndex)),
  plannerPublicSaveToUrl: () => dispatch(plannerPublicSaveToUrl())
});

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
    )(MobilePlannerRecipe)
  )
);