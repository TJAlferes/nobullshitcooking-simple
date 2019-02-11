import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DropTarget } from 'react-dnd';

import PlannerRecipe from '../PlannerRecipe/PlannerRecipe';
import { plannerClickDay } from '../../../store/actions/index';

const Types = {PLANNER_RECIPE: 'PLANNER_RECIPE'};

const plannerDayTarget = {
  drop(props, monitor, component) {
    const { day } = props;
    const draggedRecipe = monitor.getItem();
    if (day !== draggedRecipe.listId) component.props.onAddRecipeToDay(draggedRecipe.recipe);
    return {listId: day};
  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop()
  };
}

class PlannerDay extends Component {

  handleClickDay = () => {
    const { day } = this.props;
    console.log(day + ' clicked.');
    this.props.plannerClickDay(day);
  }

  render() {
    const { list, expanded, day, expandedDay, } = this.props;
    /*
    should these be passed down as props
    or
    should PlannerDay (and PlannerRecipe?)
    use connect() also?
    */
    const { onAddRecipeToDay, onRemoveRecipeFromDay } = this.props;
    const { canDrop, isOver, connectDropTarget } = this.props;

    let size = (expanded && (day === expandedDay)) ? "planner_day_expanded" : "planner_day_collapsed";
    let color = (isOver && canDrop) ? "planner_day_green" : "planner_day_white";
    /*ref={this.setSelfRef}*/
    return connectDropTarget(
      <div className={`${color} ${size}`} onClick={this.handleClickDay}>
        <span className="the_date">{day}</span>
        {/*
        careful,
        there's both key and index here,
        and recipe.id can't be key because they should be able to have multiple
        instances of a recipe, so you need a dynamic instance id too
        */}
        {list.map((recipe, i) => (
          <PlannerRecipe
            key={recipe.id}
            index={i}
            listId={this.props.id}
            recipe={recipe}
            pushRecipe={onAddRecipeToDay}
            removeRecipe={onRemoveRecipeFromDay}
            moveRecipe={this.moveRecipe}
            expanded={expanded}
            day={day}
            expandedDay={expandedDay}
            className="planner_recipe"
          />
        ))}
      </div>
    );
  }
}


const mapDispatchToProps = dispatch => ({
  plannerClickDay: (day) => dispatch(plannerClickDay(day))
});

// move to separate wrapper file in this same folder,
// like you would with react-redux's connect()
export default connect(
  null,
  mapDispatchToProps
)(
  DropTarget(
    Types.PLANNER_RECIPE,
    plannerDayTarget,
    collect
  )(PlannerDay)
);