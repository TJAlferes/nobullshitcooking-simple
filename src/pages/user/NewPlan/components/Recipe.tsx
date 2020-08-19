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
} from '../../../../store/planner/actions';
import { IPlannerRecipe } from '../../../../store/planner/types';

const Types = {PLANNER_RECIPE: 'PLANNER_RECIPE'};

const Recipe: FC<Props> = ({
  day,
  expanded,
  expandedDay,
  id,
  index,
  key,
  listId,
  plannerRemoveRecipeFromDay,
  plannerReorderRecipeInDay,
  recipe
}: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  const [ , drag ] = useDrag({
    collect: (monitor: any) => ({isDragging: monitor.isDragging()}),
    end: (dropResult: any, monitor: DragSourceMonitor) => {
      const item = monitor.getItem();
      if (item.day === 0) return;
      if (dropResult && (dropResult.listId !== item.day)) {
        plannerRemoveRecipeFromDay(item.day, item.index);
      }
    },
    item: {
      day,
      id,
      index,
      key: recipe.key,
      listId,
      recipe,
      type: Types.PLANNER_RECIPE
    }
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
    <div className="planner__recipe" ref={ref}>
      <div className="planner__recipe-image">
        <img src={`https://s3.amazonaws.com/nobsc-user-recipe/${recipe.recipe_image}-tiny`} />
      </div>
      <div className="planner__recipe-text">{recipe.title}</div>
    </div>
  );
};

interface IDragItem {
  id: string;
  index: number;
  type: string;
}

type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux & {
  day: number;
  expanded: boolean;
  expandedDay: number | null;
  id: string;
  index: number;
  key: string;
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