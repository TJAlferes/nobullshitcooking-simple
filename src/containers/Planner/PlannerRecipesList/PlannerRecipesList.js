import React, { Component } from 'react';
// CHANGE ASAP: this should be a DragSource, NOT DropTarget
// actually, I think it should be neither

/*
  I think you need TWO item types
  one for the initial drag from this list into the plan
  and one for the "copy" that can then be dragged between days
  each time you drag from this list it creates a new "copy"

*/
//import { DropTarget } from 'react-dnd';
//import update from 'immutability-helper';

import PlannerRecipe from '../PlannerRecipe/PlannerRecipe';
import './plannerRecipesList.css';  // use BEM

//const Types = {PLANNER_RECIPE: 'PLANNER_RECIPE'};  // is this definition necessary here since we imported?
/*
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
*/
//

class PlannerRecipesList extends Component {
  /*constructor(props) {
    super(props);
    this.state = {recipes: props.list};  // props instead (redux?)
  }*/

  //componentDidMount() {} ???

  /*
  // you shouldn't be able to push a recipe because you shouldn't be able to remove one in the list
  pushRecipe = recipe => {
    this.setState(update(this.state, {
      recipes: {$push: [recipe]}
    }));
  }

  // you shouldn't be able to remove a recipe because you shouldn't be able to push one in the list
  removeRecipe = index => {
    this.setState(update(this.state, {
      recipes: {$splice: [[index, 1]]}
    }));
  }

  // you shouldn't be able to reorder any recipe in the list
  moveRecipe = (dragIndex, hoverIndex) => {
    const { recipes } = this.state;  // props instead (redux?)
    const dragRecipe = recipes[dragIndex];
    this.setState(update(this.state, {
      recipes: {$splice: [[dragIndex, 1], [hoverIndex, 0, dragRecipe]]}
    }));
  }
  */

  render() {
    //const { recipes } = this.state;
    const { list, connectDropTarget } = this.props;
    // umm, shouldn't this be drag source, not drop target? or both?
    /*
      careful,
      there's both key and index here,
      and recipe.id can't be key because they should be able to have multiple
      instances of a recipe, so you need a dynamic instance id too

      you're technically not "removing" a recipe from here,
      you're making a new instance of it and adding that instance to the plan
    */
    //return connectDropTarget();
    return (
      <div id="planner_recipes_list">
        {list.map((recipe, i) => (
          <PlannerRecipe
            key={recipe.id}
            index={i}
            listId={this.props.id}
            recipe={recipe}
            removeRecipe={this.removeRecipe}
            className="planner_recipe"
          />
        ))}
      </div>
    );
  }
}

// move to separate wrapper file in this same folder,
// like you would with react-redux's connect()
/*
export default DropTarget(
  Types.PLANNER_RECIPE,
  plannerRecipesListTarget,
  collect
)(PlannerRecipesList);
*/
export default PlannerRecipesList;