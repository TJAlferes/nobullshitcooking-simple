import React from 'react';
import { DropTarget, DropTargetConnector, DropTargetMonitor } from 'react-dnd';
import { connect, ConnectedProps } from 'react-redux';

import { IPlannerRecipe } from '../../../../../store/planner/types';
import {
  plannerClickDay,
  plannerAddRecipeToDay
} from '../../../../../store/planner/actions';
import Recipe from '../Recipe/Recipe';

const Types = {PLANNER_RECIPE: 'PLANNER_RECIPE'};

const plannerDayTarget = {
  drop(props: Props, monitor: DropTargetMonitor) {
    const { day } = props;
    const draggedRecipe = monitor.getItem();

    if (day !== draggedRecipe.day) {
      props.plannerAddRecipeToDay(day, draggedRecipe.recipe);
    }
    
    return {listId: day};
  }
};

function collect(connect: DropTargetConnector, monitor: DropTargetMonitor) {
  return {
    canDrop: monitor.canDrop(),
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  };
}

export function Day({
  canDrop,
  day,
  expanded,
  expandedDay,
  isOver,
  list,
  plannerClickDay,
}: Props): JSX.Element | null {
  const handleClickDay = () => plannerClickDay(day);

  let color = (isOver && canDrop) ? "planner_day_green" : "planner_day_white";

  return (!expanded || (day !== expandedDay))
  ? (
    <div
      className={`planner_day_collapsed ${color}`}
      onClick={handleClickDay}
      //ref={connectDropTarget}
    >
      <span className="the_date">{day}</span>
      {list.map((recipe, i) => (
        <Recipe
          day={day}
          expanded={expanded}
          expandedDay={expandedDay}
          id={recipe.key}
          index={i}
          key={recipe.key}
          listId={day}
          recipe={recipe}
        />
      ))}
    </div>
  )
  : null;
}

type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux & {
  canDrop: boolean;
  day: number;
  expanded: boolean;
  expandedDay: number | null;
  isOver: boolean;
  list: IPlannerRecipe[];
};

const mapDispatchToProps = {
  plannerAddRecipeToDay: (day: number, recipe: IPlannerRecipe) =>
    plannerAddRecipeToDay(day, recipe),
  plannerClickDay: (day: number) => plannerClickDay(day)
};

const connector = connect(null, mapDispatchToProps);

export default connector(
  DropTarget(
    Types.PLANNER_RECIPE,
    plannerDayTarget,
    collect
  )(Day)
);