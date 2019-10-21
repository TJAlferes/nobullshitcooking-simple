import * as actionTypes from './actionTypes';
//import '../../utils/publicPlanner/convertPlannerToUrl';

/*
Planner -- core functionality
*/

export const plannerClickDay = day => ({
  type: actionTypes.PLANNER_CLICK_DAY,
  day
});

export const plannerAddRecipeToDay = (day, recipe) => ({
  type: actionTypes.PLANNER_ADD_RECIPE_TO_DAY,
  day,
  recipe
});

export const plannerRemoveRecipeFromDay = (day, index) => ({
  type: actionTypes.PLANNER_REMOVE_RECIPE_FROM_DAY,
  day,
  index
});

export const plannerReorderRecipeInDay = (dragIndex, hoverIndex) => ({
  type: actionTypes.PLANNER_REORDER_RECIPE_IN_DAY,
  dragIndex,
  hoverIndex
});



/*
Planner -- publicly save and load to and from the URL
(DEV NOTE: Be careful that these two don't trigger an unterminating loop.)
*/

export const plannerPublicLoadFromUrl = preLoadedPlan => ({
  type: actionTypes.PLANNER_PUBLIC_LOAD_FROM_URL,
  preLoadedPlan
});

export const plannerPublicSaveToUrl = () => ({
  type: actionTypes.PLANNER_PUBLIC_SAVE_TO_URL
});


/*
Planner -- for logged in users
*/

export const plannerClearWork = () => ({type: actionTypes.PLANNER_CLEAR_WORK});

export const plannerSetEditingId = id => ({
  type: actionTypes.PLANNER_SET_EDITING_ID,
  id
});

export const plannerSetPlanName = name => ({
  type: actionTypes.PLANNER_SET_PLAN_NAME,
  name
});

export const plannerSetPlanData = data => ({
  type: actionTypes.PLANNER_SET_PLAN_DATA,
  data
});