import React, { Component } from 'react';
import { DragSource } from 'react-dnd';

import { Styles } from './Styles';

// types
const Types = {PLANNER_RECIPE: 'PLANNER_RECIPE'};

// spec
const plannerRecipeSource = {
  beginDrag(props) {
    return {
      id: props.id,
      name: props.name
    };
  },
  endDrag(props, monitor) {
    const item = monitor.getItem();
    const dropResult = monitor.getDropResult();
    if (dropResult) {
      alert(`${item.name} on Day ${dropResult.day}, nice.`);
    }
    //CardActions.moveCardToList(item.id, dropResult.listId);
  }
};

// collect
function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
}

//

// recipe the user may drag
class PlannerRecipe extends Component {
  render() {
    const { name } = this.props;
    const { isDragging, isDropped, connectDragSource } = this.props;
    let toggleDisplay;
    if (isDragging) {
      toggleDisplay = <div>!!!</div>;
    }
    if (!isDropped) {
      toggleDisplay = <Styles>{name}</Styles>;
    }
    return connectDragSource(
      <div>
        {
          (isDragging && <p></p>) ||
          (<Styles>{name}</Styles>)
        }
      </div>);
  }
}

export default DragSource(Types.PLANNER_RECIPE, plannerRecipeSource, collect)(PlannerRecipe);