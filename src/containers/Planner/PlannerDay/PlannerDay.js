import React, { Component } from 'react';
import { DropTarget } from 'react-dnd';
import update from 'immutability-helper';

import { GreenColor, RedColor } from './Styles';
import PlannerRecipe from '../PlannerRecipe/PlannerRecipe';

const Types = {PLANNER_RECIPE: 'PLANNER_RECIPE'};  // is this definition necessary here since we imported?

// should this be named plannerRecipeTarget?
const plannerDayTarget = {
  drop(props, monitor, component) {
    const { day } = props;
    const draggedRecipe = monitor.getItem();

    if (day !== draggedRecipe.listId) {
      component.pushRecipe(draggedRecipe.recipe);
    }

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

class PlannerDay extends Component {
  constructor(props) {
    super(props);
    this.state = {recipes: props.list};
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
    const { recipes } = this.state;
    const dragRecipe = recipes[dragIndex];

    this.setState(update(this.state, {
      recipes: {$splice: [[dragIndex, 1], [hoverIndex, 0, dragRecipe]]}
    }));
  }

  render() {
    const { recipes } = this.state;
    const { canDrop, isOver, connectDropTarget } = this.props;

    return connectDropTarget(
      <td className="planner_day">
        {isOver && canDrop && <GreenColor />}
        {isOver && !canDrop && <RedColor />}
        {recipes.map((recipe, i) => (
          <PlannerRecipe
          key={recipe.id}
          index={i}
          listId={this.props.id}
          recipe={recipe}
          removeRecipe={this.removeRecipe}
          moveRecipe={this.moveRecipe}
          />
        ))}
      </td>
    );
  }
}

export default DropTarget(Types.PLANNER_RECIPE, plannerDayTarget, collect)(PlannerDay);