//import '../../utils/publicPlanner/convertPlannerToUrl';

import {
  PLANNER_CLICK_DAY,
  PLANNER_ADD_RECIPE_TO_DAY,
  PLANNER_REMOVE_RECIPE_FROM_DAY,
  PLANNER_REORDER_RECIPE_IN_DAY,

  PLANNER_PUBLIC_LOAD_FROM_URL,
  PLANNER_PUBLIC_SAVE_TO_URL,

  PLANNER_VIEW_CLICK_DAY,
  PLANNER_PRIVATE_LOAD,
  PLANNER_CLEAR_WORK,
  PLANNER_SET_CREATING,
  PLANNER_SET_EDITING_ID,
  PLANNER_SET_PLAN_NAME,
  PLANNER_SET_PLAN_DATA
} from './actionTypes';



export const plannerClickDay = day => ({
  type: PLANNER_CLICK_DAY,
  day
});

export const plannerAddRecipeToDay = (day, recipe) => ({
  type: PLANNER_ADD_RECIPE_TO_DAY,
  day,
  recipe
});

export const plannerRemoveRecipeFromDay = (day, index) => ({
  type: PLANNER_REMOVE_RECIPE_FROM_DAY,
  day,
  index
});

export const plannerReorderRecipeInDay = (dragIndex, hoverIndex) => ({
  type: PLANNER_REORDER_RECIPE_IN_DAY,
  dragIndex,
  hoverIndex
});



// NOTE: Be careful that these two don't trigger an unterminating loop.

export const plannerPublicLoadFromUrl = preLoadedPlan => ({
  type: PLANNER_PUBLIC_LOAD_FROM_URL,
  preLoadedPlan
});

export const plannerPublicSaveToUrl = () => ({type: PLANNER_PUBLIC_SAVE_TO_URL});



export const plannerViewClickDay = day => ({
  type: PLANNER_VIEW_CLICK_DAY,
  day
});

export const plannerPrivateLoad = (planName, planData) => ({
  type: PLANNER_PRIVATE_LOAD,
  planName,
  planData
});

export const plannerClearWork = () => ({type: PLANNER_CLEAR_WORK});

export const plannerSetCreating = () => ({type: PLANNER_SET_CREATING});

export const plannerSetEditingId = id => ({
  type: PLANNER_SET_EDITING_ID,
  id
});

export const plannerSetPlanName = name => ({
  type: PLANNER_SET_PLAN_NAME,
  name
});

export const plannerSetPlanData = data => ({
  type: PLANNER_SET_PLAN_DATA,
  data
});