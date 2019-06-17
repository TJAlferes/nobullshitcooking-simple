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
Planner -- save and load the user's plan to and from MySQL database
*/

export const plannerLoad = () => ({
  type: actionTypes.PLANNER_LOAD
});

export const plannerSave = () => ({
  type: actionTypes.PLANNER_SAVE
});



export const plannerLoadSucceeded = () => ({
  type: actionTypes.PLANNER_LOAD_SUCCEEDED
});

export const plannerLoadFailed = error => ({
  type: actionTypes.PLANNER_LOAD_FAILED,
  error
});

export const plannerSaveSucceeded = () => ({
  type: actionTypes.PLANNER_SAVE_SUCCEEDED
});

export const plannerSaveFailed = error => ({
  type: actionTypes.PLANNER_SAVE_FAILED,
  error
});
