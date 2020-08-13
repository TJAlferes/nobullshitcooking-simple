import React from 'react';
import { DropTarget, DropTargetConnector, DropTargetMonitor } from 'react-dnd';
import { connect, ConnectedProps } from 'react-redux';

import {
  plannerAddRecipeToDay,
  plannerRemoveRecipeFromDay
} from '../../../../store/planner/actions';
import { IPlannerRecipe } from '../../../../store/planner/types';
import Recipe from './Recipe';

const Types = {PLANNER_RECIPE: 'PLANNER_RECIPE'};

const plannerRecipesTarget = {
  drop(props: Props) {
    const { day } = props;
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

const Recipes = ({
  day,
  expanded,
  expandedDay,
  recipes
}: Props): JSX.Element => (
  <div className="planner__recipes" /*ref={connectDropTarget}*/>
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
);

type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux & {
  day: number;
  expanded: boolean;
  expandedDay: number | null;
  recipes: IPlannerRecipe[];
};

const mapDispatchToProps = {
  plannerAddRecipeToDay: (day: number, recipe: IPlannerRecipe) =>
    plannerAddRecipeToDay(day, recipe),
  plannerRemoveRecipeFromDay: (day: number, index: number) =>
    plannerRemoveRecipeFromDay(day, index)
};

const connector = connect(null, mapDispatchToProps);

export default connector(
  DropTarget(
    Types.PLANNER_RECIPE,
    plannerRecipesTarget,
    collect
  )(Recipes)
);