import React, { forwardRef, useRef, useImperativeHandle } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import {
  DragSource,
  DragSourceConnector,
  DragSourceMonitor,
  DropTarget,
  DropTargetConnector,
  DropTargetMonitor
} from 'react-dnd';

import {
  plannerRemoveRecipeFromDay,
  plannerReorderRecipeInDay
} from '../../../../../store/planner/actions';
import './recipe.css';

const Types = {PLANNER_RECIPE: 'PLANNER_RECIPE'};

const plannerRecipeSource = {
  beginDrag(props: Props) {
    return {
      id: props.id,
      index: props.index,
      listId: props.listId,
      recipe: props.recipe,
      day: props.day,
      key: props.recipe.key
    };
  },
  endDrag(props: Props, monitor) {
    const item = monitor.getItem();
    if (item.day === "0") return;  // to copy from rather than remove from PlannerRecipesList
    const dropResult = monitor.getDropResult();
    if (dropResult && (dropResult.listId !== item.day)) {
      props.plannerRemoveRecipeFromDay(item.day, item.index);
    }
  }
};

const plannerRecipeTarget = {
  hover(props: Props, monitor: DropTargetMonitor, component) {
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

    props.plannerReorderRecipeInDay(dragIndex, hoverIndex);

    monitor.getItem().index = hoverIndex;
  }
};

function collectDragSource(
  connect: DragSourceConnector,
  monitor: DragSourceMonitor
) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
}

function collectDropTarget(connect: DropTargetConnector) {
  return {connectDropTarget: connect.dropTarget()};
}

const Recipe = forwardRef(
  ({ recipe, connectDragSource, connectDropTarget }, ref) => {
    const elementRef = useRef(null);

    connectDragSource(elementRef);
    connectDropTarget(elementRef);
    
    useImperativeHandle(ref, () => ({getNode: () => elementRef.current}));

    return (
      <div className="planner_recipe" ref={elementRef}>
        <div className="planner_recipe_image">
          <img src={`https://s3.amazonaws.com/nobsc-user-recipe/${recipe.recipe_image}-tiny`} />
        </div>
        <div className="planner_recipe_text">{recipe.title}</div>
      </div>
    );
  }
);

export interface INewPlanRecipe {
  key: string;
  recipe_id: number;
  title: string;
  recipe_image: string;
  owner_id: number;
}

type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux & {
  key: string;
  day: number;
  expandedDay: number;
  index: number;
  listId: number;
  recipe: INewPlanRecipe;
};

const mapDispatchToProps = {
  plannerRemoveRecipeFromDay: (day: number, index: number) =>
    plannerRemoveRecipeFromDay(day, index),
  plannerReorderRecipeInDay: (dragIndex: number, hoverIndex: number) =>
    plannerReorderRecipeInDay(dragIndex, hoverIndex)
};

const connector = connect(null, mapDispatchToProps);

export default connector(
  DropTarget(
    Types.PLANNER_RECIPE,
    plannerRecipeTarget,
    collectDropTarget
  )(
    DragSource(
      Types.PLANNER_RECIPE,
      plannerRecipeSource,
      collectDragSource
    )(Recipe)
  )
);