import { XYCoord } from 'dnd-core';
import React, { FC, useRef } from 'react';
import {
  DragSourceMonitor,
  DropTargetMonitor,
  useDrag,
  useDrop
} from 'react-dnd';
import { connect, ConnectedProps } from 'react-redux';

import {
  plannerRemoveRecipeFromDay,
  plannerReorderRecipeInDay
} from '../../../../../store/planner/actions';
import { IPlannerRecipe } from '../../../../../store/planner/types';
import './recipe.css';

const Types = {PLANNER_RECIPE: 'PLANNER_RECIPE'};

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
}: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  const [ , drag ] = useDrag({
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
    }
  });

  drag(drop(ref));

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
};

const mapDispatchToProps = {
  plannerRemoveRecipeFromDay: (day: number, index: number) =>
    plannerRemoveRecipeFromDay(day, index),
  plannerReorderRecipeInDay: (dragIndex: number, hoverIndex: number) =>
    plannerReorderRecipeInDay(dragIndex, hoverIndex)
};

const connector = connect(null, mapDispatchToProps);

export default connector(Recipe);