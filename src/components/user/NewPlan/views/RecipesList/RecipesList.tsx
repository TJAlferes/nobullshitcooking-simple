import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { DropTarget, DropTargetConnector, DropTargetMonitor } from 'react-dnd';

import {
  plannerAddRecipeToDay,
  plannerRemoveRecipeFromDay
} from '../../../../../store/planner/actions';
import Recipe from '../Recipe/Recipe';
import './recipesList.css';

const Types = {PLANNER_RECIPE: 'PLANNER_RECIPE'};

const plannerRecipesListTarget = {
  drop(props: Props) {
    const { day } = props;
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

const RecipesList = ({
  day,
  list,
  connectDropTarget
}: Props): JSX.Element => (
  <div className="planner-recipes-list" ref={connectDropTarget}>
    {list.map((recipe, i) => (
      <Recipe
        key={recipe.key}
        id={recipe.key}
        index={i}
        listId={day}
        day={day}
        recipe={recipe}
      />
    ))}
  </div>
);

type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux & {
  day: number;
  list: [];
  connectDropTarget
};

const mapDispatchToProps = {
  plannerAddRecipeToDay: (day: , recipe: ) =>
    plannerAddRecipeToDay(day, recipe),
  plannerRemoveRecipeFromDay: (day: , index: ) =>
    plannerRemoveRecipeFromDay(day, index)
};

const connector = connect(null, mapDispatchToProps);

export default connector(
  DropTarget(
    Types.PLANNER_RECIPE,
    plannerRecipesListTarget,
    collect
  )(RecipesList)
);