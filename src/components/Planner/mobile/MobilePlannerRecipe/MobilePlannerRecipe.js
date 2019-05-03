import React, { forwardRef, useRef, useImperativeHandle } from 'react';
import { connect } from 'react-redux';
import { DragSource, DropTarget } from 'react-dnd';

import {
  plannerRemoveRecipeFromDay,
  plannerReorderRecipeInDay
} from '../../../store/actions/index';
import './mobilePlannerRecipe.css';  // use BEM

/*These 3 inlined images are just for quick sample viewing during dev for now.
In prod we would load external recipe images from a designated AWS S3 bucket.*/
import sp32 from '../../../assets/images/content/planner/sp32.png';
import sas32 from '../../../assets/images/content/planner/sas32.png';
import sps32 from '../../../assets/images/content/planner/sps32.png';

const Types = {PLANNER_RECIPE: 'PLANNER_RECIPE'};

const plannerRecipeSource = {
  beginDrag(props) {
    return {
      id: props.id,
      index: props.index,
      listId: props.listId,
      recipe: props.recipe,
      day: props.day,
      key: props.recipe.key
    };
  },
  endDrag(props, monitor) {
    const item = monitor.getItem();
    if (item.day === "0") return;  // to copy rather than remove from mobileplannerrecipeslist
    const dropResult = monitor.getDropResult();
    if (dropResult && (dropResult.listId !== item.day)) {
      props.plannerRemoveRecipeFromDay(item.day, item.index);
    }
  }
};

// be sure to explain this well, so that others easily understand it
const plannerRecipeTarget = {
  hover(props, monitor, component) {
    if (!component) return null;
    const node = component.getNode();
    if (!node) return null;
    const { day, expandedDay } = props;
    if (day !== expandedDay) return;
    const sourceDay = monitor.getItem().day;
    if (sourceDay !== expandedDay) return;
    const dragIndex = monitor.getItem().index;
    const hoverIndex = props.index;
    if (dragIndex === hoverIndex) return;
    const hoverBoundingRect = node.getBoundingClientRect();
    const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
    const clientOffset = monitor.getClientOffset();
    const hoverClientY = clientOffset.y - hoverBoundingRect.top;
    if ((dragIndex < hoverIndex) && (hoverClientY < hoverMiddleY)) return;
    if ((dragIndex > hoverIndex) && (hoverClientY > hoverMiddleY)) return;
    props.plannerReorderRecipeInDay(dragIndex, hoverIndex);
    monitor.getItem().index = hoverIndex;
  }
};

function collectDragSource(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
}

function collectDropTarget(connect) {
  return {connectDropTarget: connect.dropTarget()};
}

const MobilePlannerRecipe = forwardRef(
  ({ recipe, connectDragSource, connectDropTarget }, ref) => {
    const elementRef = useRef(null);
    connectDragSource(elementRef);
    connectDropTarget(elementRef);
    useImperativeHandle(ref, () => ({getNode: () => elementRef.current}));

    /*Again, this is just for quick sample image viewing during dev for now.
    In prod we will load external recipe images from a designated AWS S3 bucket
    and will set the src={} to the appropriate AWS S3 bucket image file URL.*/
    let miniSrc;
    if (recipe.id === 1) miniSrc = sp32;
    if (recipe.id === 2) miniSrc = sps32;
    if (recipe.id === 3) miniSrc = sas32;

    return (
      <div className="mobile_planner_recipe" ref={elementRef}>
        <div className="mobile_planner_recipe_image"><img src={miniSrc} /></div>
        <div className="mobile_planner_recipe_text">{recipe.text}</div>
      </div>
    );
  }
);

const mapDispatchToProps = dispatch => ({
  plannerRemoveRecipeFromDay: (day, index) => dispatch(plannerRemoveRecipeFromDay(day, index)),
  plannerReorderRecipeInDay: (dragIndex, hoverIndex) => dispatch(plannerReorderRecipeInDay(dragIndex, hoverIndex))
});

export default connect(
  null,
  mapDispatchToProps
)(
  DropTarget(
    Types.PLANNER_RECIPE,
    plannerRecipeTarget,
    collectDropTarget
  )(
    DragSource(
      Types.PLANNER_RECIPE,
      plannerRecipeSource,
      collectDragSource
    )(MobilePlannerRecipe)
  )
);