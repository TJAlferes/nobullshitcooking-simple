import React, { FC, useRef } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import {
  ConnectDragSource,
  ConnectDropTarget,
  //DragSource,
  //DragSourceConnector,
  DragSourceMonitor,
  //DropTarget,
  //DropTargetConnector,
  DropTargetMonitor,
  useDrag,
  useDrop
} from 'react-dnd';
import { XYCoord } from 'dnd-core';

import { IPlannerRecipe } from '../../../../../store/planner/types';
import {
  plannerRemoveRecipeFromDay,
  plannerReorderRecipeInDay
} from '../../../../../store/planner/actions';
import './recipe.css';

const Types = {PLANNER_RECIPE: 'PLANNER_RECIPE'};

/*const plannerRecipeSource = {
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
  endDrag(props: Props, monitor: DragSourceMonitor) {
    const item = monitor.getItem();
    // to copy from rather than remove from PlannerRecipesList
    if (item.day === "0") return;

    const dropResult = monitor.getDropResult();
    if (dropResult && (dropResult.listId !== item.day)) {
      props.plannerRemoveRecipeFromDay(item.day, item.index);
    }
  }
};

const plannerRecipeTarget = {
  hover(props: Props, monitor: DropTargetMonitor, component: IRecipeInstance) {
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
    const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top;
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
}*/

const Recipe: FC<Props> = ({
  key,
  id,
  day,
  expanded,
  expandedDay,
  index,
  listId,
  recipe,
  plannerRemoveRecipeFromDay,
  plannerReorderRecipeInDay
  //connectDragSource: ConnectDragSource,
  //connectDropTarget: ConnectDropTarget
}: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  const [ { isDragging }, drag ] = useDrag({
    item: {
      type: Types.PLANNER_RECIPE,
      id,
      index,
      listId,
      recipe,
      day,
      key: recipe.key
    },
    end: (dropResult: any, monitor: DragSourceMonitor) => {
      const item = monitor.getItem();
      if (item.day === 0) return;
      if (dropResult && (dropResult.listId !== item.day)) {
        plannerRemoveRecipeFromDay(item.day, item.index);
      }
    },
    collect: (monitor: any) => ({isDragging: monitor.isDragging()}),
  });

  const [ , drop ] = useDrop({
    accept: Types.PLANNER_RECIPE,
    hover: (item: IDragItem, monitor: DropTargetMonitor) => {
      if(!item) return;  // ?
      if (!ref.current) return;
      if (day !== expandedDay) return;
      const sourceDay = monitor.getItem().day;  //item.day;
      if (sourceDay !== expandedDay) return;
      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) return;
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top;
      if ((dragIndex < hoverIndex) && (hoverClientY < hoverMiddleY)) return;
      if ((dragIndex > hoverIndex) && (hoverClientY > hoverMiddleY)) return;
      plannerReorderRecipeInDay(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
    //collect: (monitor: any, ) => ({})
  });

  drag(drop(ref));
  //drop(drag(ref));

  return (
    <div className="planner_recipe" ref={ref}>
      <div className="planner_recipe_image">
        <img src={`https://s3.amazonaws.com/nobsc-user-recipe/${recipe.recipe_image}-tiny`} />
      </div>
      <div className="planner_recipe_text">{recipe.title}</div>
    </div>
  );
};

interface IDragItem {
  index: number;
  id: string;
  type: string;
}

/*interface IRecipeInstance {
	getNode(): HTMLDivElement|null;
}*/

type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux & {
  key: string;
  id: string;
  day: number;
  expanded: boolean;
  expandedDay: number | null;
  index: number;
  listId: number;
  recipe: IPlannerRecipe;
  //connectDragSource: ConnectDragSource;
  //connectDropTarget: ConnectDropTarget;
};

const mapDispatchToProps = {
  plannerRemoveRecipeFromDay: (day: number, index: number) =>
    plannerRemoveRecipeFromDay(day, index),
  plannerReorderRecipeInDay: (dragIndex: number, hoverIndex: number) =>
    plannerReorderRecipeInDay(dragIndex, hoverIndex)
};

const connector = connect(null, mapDispatchToProps);

export default connector(Recipe);