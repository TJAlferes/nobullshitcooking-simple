import React, { Component } from 'react';
import { DropTarget } from 'react-dnd';
import update from 'immutability-helper';

import PlannerRecipe from '../PlannerRecipe/PlannerRecipe';
import './plannerRecipesList.css';  // use BEM

const Types = {PLANNER_RECIPE: 'PLANNER_RECIPE'};  // is this definition necessary here since we imported?

const plannerRecipesListTarget = {
  drop(props, monitor, component) {
    const { day } = props;
    const draggedRecipe = monitor.getItem();
    if (day !== draggedRecipe.listId) component.pushRecipe(draggedRecipe.recipe);
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

//

class PlannerRecipesList extends Component {
  constructor(props) {
    super(props);
    this.state = {recipes: props.list};  // props instead (redux?)
  }

  //componentDidMount() {} ???

  pushRecipe = recipe => {
    this.setState(update(this.state, {
      recipes: {$push: [recipe]}
    }));
  }

  removeRecipe = index => {
    this.setState(update(this.state, {
      recipes: {$splice: [[index, 1]]}
    }));
  }

  moveRecipe = (dragIndex, hoverIndex) => {
    const { recipes } = this.state;  // props instead (redux?)
    const dragRecipe = recipes[dragIndex];
    this.setState(update(this.state, {
      recipes: {$splice: [[dragIndex, 1], [hoverIndex, 0, dragRecipe]]}
    }));
  }

  render() {
    const { recipes } = this.state;
    const { connectDropTarget } = this.props;
    return connectDropTarget(
      <div id="planner_recipes_list">
        {/*
        careful,
        there's both key and index here,
        and recipe.id can't be key because they should be able to have multiple
        instances of a recipe, so you need a dynamic instance id too
        */}
        {recipes.map((recipe, i) => (
          <PlannerRecipe
            key={recipe.id}
            index={i}
            listId={this.props.id}
            recipe={recipe}
            removeRecipe={this.removeRecipe}
            moveRecipe={this.moveRecipe}
            className="planner_recipe"
          />
        ))}
      </div>
    );
  }
}

// move to separate wrapper file in this same folder,
// like you would with react-redux's connect()
export default DropTarget(
  Types.PLANNER_RECIPE,
  plannerRecipesListTarget,
  collect
)(PlannerRecipesList);