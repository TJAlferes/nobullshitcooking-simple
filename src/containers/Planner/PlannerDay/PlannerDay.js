import React, { Component } from 'react';
import { DropTarget } from 'react-dnd';

import { GreenColor, RedColor } from './Styles';

// types
const Types = {PLANNER_RECIPE: 'PLANNER_RECIPE'};

// spec
const plannerDayTarget = {
  drop(props, monitor) {
    const item = monitor.getItem();
    return {day: props.day};
  }
};

// collect
function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop()
  };
}

//

// day the user may drag recipe into
class PlannerDay extends Component {
  //componentDidMount() {}
  render() {
    const { isOver, canDrop, connectDropTarget } = this.props;
    return connectDropTarget(
      <td className="planner_day">
        {isOver && canDrop && <GreenColor />}
        {isOver && !canDrop && <RedColor />}
      </td>
    );
  }
}

export default DropTarget(Types.PLANNER_RECIPE, plannerDayTarget, collect)(PlannerDay);