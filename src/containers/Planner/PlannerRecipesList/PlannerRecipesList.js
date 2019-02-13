import React, { Component } from 'react';
import { connect } from 'react-redux';
/*
  I think you need TWO item types
  one for the initial drag from this list into the plan
  and one for the "copy" that can then be dragged between days
  each time you drag from this list it creates a new "copy"

*/
import { DropTarget } from 'react-dnd';
//import update from 'immutability-helper';

import PlannerRecipe from '../PlannerRecipe/PlannerRecipe';
import {
  plannerAddRecipeToDay,
  plannerRemoveRecipeFromDay
} from '../../../store/actions/index';
import './plannerRecipesList.css';  // use BEM

const Types = {PLANNER_RECIPE: 'PLANNER_RECIPE'};  // is this definition necessary here since we imported?

const plannerRecipesListTarget = {
  drop(props, monitor) {
    const { day } = props;
    const draggedRecipe = monitor.getItem();
    const dropResult = monitor.getDropResult();
    if (dropResult === null) {
      props.plannerRemoveRecipeFromDay(draggedRecipe.day, draggedRecipe.index);
      return {listId: day};
    }
    if (day !== draggedRecipe.listId) props.plannerAddRecipeToDay(day, draggedRecipe.recipe);
    return {listId: day};
    //return {day: props.day};
  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop()
  };
}

class PlannerRecipesList extends Component {
  /*  you shouldn't be able to reorder any recipe in the list
  moveRecipe = (dragIndex, hoverIndex) => {
    const { recipes } = this.state;  // props instead (redux?)
    const dragRecipe = recipes[dragIndex];
    this.setState(update(this.state, {
      recipes: {$splice: [[dragIndex, 1], [hoverIndex, 0, dragRecipe]]}
    }));
  }  */

  render() {
    const { day, list, connectDropTarget } = this.props;
    /*
      careful,
      there's both key and index here,
      and recipe.id can't be key because they should be able to have multiple
      instances of a recipe, so you need a dynamic instance id too

      you're technically not "removing" a recipe from here,
      you're making a new instance of it and adding that instance to the plan

      key={recipe.id}
    */
    return connectDropTarget(
      <div id="planner_recipes_list">
        {list.map((recipe, i) => (
          <PlannerRecipe
            className="planner_recipe"
            key={recipe.key}
            index={i}
            listId={day}
            recipe={recipe}
            day={day}
          />
        ))}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  plannerAddRecipeToDay: (day, recipe) => dispatch(plannerAddRecipeToDay(day, recipe)),
  plannerRemoveRecipeFromDay: (day, index) => dispatch(plannerRemoveRecipeFromDay(day, index)),
});

export default connect(
  null,
  mapDispatchToProps
)(
  DropTarget(
    Types.PLANNER_RECIPE,
    plannerRecipesListTarget,
    collect
  )(PlannerRecipesList)
);