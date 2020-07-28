import React from 'react';
import {
  ConnectDropTarget,
  DropTarget,
  DropTargetConnector,
  DropTargetMonitor
} from 'react-dnd';
import { connect, ConnectedProps } from 'react-redux';

import { IPlannerRecipe } from '../../../../../store/planner/types';
import {
  plannerClickDay,
  plannerAddRecipeToDay
} from '../../../../../store/planner/actions';
import Recipe from '../Recipe/Recipe';

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
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop()
  };
}

const ExpandedDay = ({
  day,
  list,
  expanded,
  expandedDay,
  plannerClickDay,
  canDrop,
  isOver,
  //connectDropTarget
}: Props): JSX.Element|null => {
  const handleClickDay = () => plannerClickDay(day);

  let color = (isOver && canDrop) ? "planner_day_green" : "planner_day_white";

  return expanded
  ? (
    <div
      className={`planner_expanded_day ${color}`}
      onClick={handleClickDay}
      //ref={connectDropTarget}
    >
      <span className="the_date">{day}</span>
      {list.map((recipe: IPlannerRecipe, i) => (
        <Recipe
          key={recipe.key}
          id={recipe.key}
          listId={day}
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
};

type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux & {
  day: number;
  list: IPlannerRecipe[];
  expanded: boolean;
  expandedDay: number | null;
  canDrop: boolean;
  isOver: boolean;
  connectDropTarget: ConnectDropTarget;
};

const mapDispatchToProps = {
  plannerClickDay: (day: number) => plannerClickDay(day),
  plannerAddRecipeToDay: (day: number, recipe: IPlannerRecipe) =>
    plannerAddRecipeToDay(day, recipe)
};

const connector = connect(null, mapDispatchToProps);

export default connector(
  DropTarget(
    Types.PLANNER_RECIPE,
    plannerExpandedDayTarget,
    collect
  )(ExpandedDay)
);