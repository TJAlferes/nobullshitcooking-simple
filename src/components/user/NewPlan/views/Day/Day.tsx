import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { DropTarget, DropTargetConnector, DropTargetMonitor } from 'react-dnd';

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
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop()
  };
}

export function Day({
  day,
  list,
  expanded,
  expandedDay,
  plannerClickDay,
  canDrop,
  isOver,
  connectDropTarget
}: Props): JSX.Element|null {
  const handleClickDay = () => plannerClickDay(day);

  let color = (isOver && canDrop) ? "planner_day_green" : "planner_day_white";

  return (!expanded || (day !== expandedDay))
  ? (
    <div
      className={`planner_day_collapsed ${color}`}
      onClick={handleClickDay}
      ref={connectDropTarget}
    >
      <span className="the_date">{day}</span>
      {list.map((recipe, i) => (
        <Recipe
          key={recipe.key}
          id={recipe.key}
          index={i}
          day={day}
          recipe={recipe}
          expanded={expanded}
          expandedDay={expandedDay}
        />
      ))}
    </div>
  )
  : null;
}

type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux & {
  day: number;
  list: [];
  expanded: boolean;
  expandedDay: number;
  plannerClickDay(): void;
  canDrop: true;
  isOver: true;
  connectDropTarget
};

const mapDispatchToProps = {
  plannerClickDay: (day: number) => plannerClickDay(day),
  plannerAddRecipeToDay: (day: number, recipe: ) =>
    plannerAddRecipeToDay(day, recipe)
};

const connector = connect(null, mapDispatchToProps);

export default connector(
  DropTarget(
    Types.PLANNER_RECIPE,
    plannerDayTarget,
    collect
  )(Day)
);