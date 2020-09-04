import React from 'react';
import { DropTarget, DropTargetConnector, DropTargetMonitor } from 'react-dnd';
import { connect, ConnectedProps } from 'react-redux';

import {
  plannerAddRecipeToDay,
  plannerClickDay
} from '../../../store/planner/actions';
import { IPlannerRecipe } from '../../../store/planner/types';
import Recipe from './Recipe';

const Types = {PLANNER_RECIPE: 'PLANNER_RECIPE'};

const plannerExpandedDayTarget = {
  drop(props: Props, monitor: DropTargetMonitor) {
    const { day, expandedDay } = props;
    const draggedRecipe = monitor.getItem();

    if (expandedDay !== draggedRecipe.day) {
      props.plannerAddRecipeToDay(day, draggedRecipe.recipe);
    }

    return {listId: day};  // WTF is this?
  }
};

function collect(connect: DropTargetConnector, monitor: DropTargetMonitor) {
  return {
    canDrop: monitor.canDrop(),
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  };
}

const ExpandedDay = ({
  canDrop,
  day,
  expanded,
  expandedDay,
  isOver,
  recipes,
  plannerClickDay
}: Props): JSX.Element | null => {
  const color = (isOver && canDrop) ? "--green" : "--white";

  const handleClickDay = () => plannerClickDay(day);

  return expanded
  ? (
    <div
      className={`planner__expanded-day${color}`}
      onClick={handleClickDay}
      //ref={connectDropTarget}
    >
      <span className="planner__date">{day}</span>
      {recipes.map((recipe, i) => (
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
};

type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux & {
  canDrop: boolean;
  day: number;
  expanded: boolean;
  expandedDay: number | null;
  isOver: boolean;
  recipes: IPlannerRecipe[];
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
    plannerExpandedDayTarget,
    collect
  )(ExpandedDay)
);