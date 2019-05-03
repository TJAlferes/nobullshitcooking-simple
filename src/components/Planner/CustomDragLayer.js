import React, { Component } from 'react';
import { DragLayer } from 'react-dnd';

// item type
const Types = {PLANNER_RECIPE: 'PLANNER_RECIPE'};

const PlannerRecipePreview = () => <div>While dragging.</div>;

const layerStyles = {
	position: 'fixed',
	pointerEvents: 'none',
	zIndex: 100,
	left: 0,
	top: 0,
	width: '100%',
	height: '100%',
};

const itemStyles = {
  borderColor: 'orange',
  borderWidth: '10px',
  opacity: 1
};

class CustomDragLayer extends Component {
  render() {
    const { itemType, isDragging } = this.props;
    function renderItem() {
      if (itemType === Types.PLANNER_RECIPE) return <PlannerRecipePreview />;
      return null;
    }
    if (!isDragging) return null;
    return (
      <div style={layerStyles}>
        <div style={itemStyles}>
          {renderItem()}
        </div>
      </div>
    );
  }
}

export default DragLayer(
  monitor => ({
    item: monitor.getItem(),
	  itemType: monitor.getItemType(),
	  isDragging: monitor.isDragging()
  })
)(CustomDragLayer);