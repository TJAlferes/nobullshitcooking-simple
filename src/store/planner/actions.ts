//import '../../utils/publicPlanner/convertPlannerToUrl';

import {
  PLANNER_CLICK_DAY,
  PLANNER_ADD_RECIPE_TO_DAY,
  PLANNER_REMOVE_RECIPE_FROM_DAY,
  PLANNER_REORDER_RECIPE_IN_DAY,
  //PLANNER_PUBLIC_LOAD_FROM_URL,
  //PLANNER_PUBLIC_SAVE_TO_URL,
  PLANNER_VIEW_CLICK_DAY,
  PLANNER_PRIVATE_LOAD,
  PLANNER_CLEAR_WORK,
  PLANNER_SET_CREATING,
  PLANNER_SET_EDITING_ID,
  PLANNER_SET_PLAN_NAME,
  PLANNER_SET_PLAN_DATA,
  PlannerData,
  PlannerRecipe
} from './types';

export const plannerClickDay = (day: number) => ({
  type: PLANNER_CLICK_DAY,
  day
});

export const plannerAddRecipeToDay = (day: number, recipe: PlannerRecipe) => ({
  type: PLANNER_ADD_RECIPE_TO_DAY,
  day,
  recipe
});

export const plannerRemoveRecipeFromDay = (day: number, index: number) => ({
  type: PLANNER_REMOVE_RECIPE_FROM_DAY,
  day,
  index
});

export const plannerReorderRecipeInDay = (
  dragIndex: number,
  hoverIndex: number
) => ({
  type: PLANNER_REORDER_RECIPE_IN_DAY,
  dragIndex,
  hoverIndex
});

// NOTE: Be careful that this doesn't trigger an unterminating loop.
/*export const plannerPublicLoadFromUrl = preLoadedPlan => ({
  type: PLANNER_PUBLIC_LOAD_FROM_URL,
  preLoadedPlan
});*/

// NOTE: Be careful that this doesn't trigger an unterminating loop.
//export const plannerPublicSaveToUrl = () => ({type: PLANNER_PUBLIC_SAVE_TO_URL});

export const plannerViewClickDay = (day: number) => ({
  type: PLANNER_VIEW_CLICK_DAY,
  day
});

export const plannerPrivateLoad = (planName: string, planData: PlannerData) => ({
  type: PLANNER_PRIVATE_LOAD,
  planName,
  planData
});

export const plannerClearWork = () => ({type: PLANNER_CLEAR_WORK});

export const plannerSetCreating = () => ({type: PLANNER_SET_CREATING});

export const plannerSetEditingId = (id: string) => ({
  type: PLANNER_SET_EDITING_ID,
  id
});

export const plannerSetPlanName = (name: string) => ({
  type: PLANNER_SET_PLAN_NAME,
  name
});

export const plannerSetPlanData = (data: PlannerData) => ({
  type: PLANNER_SET_PLAN_DATA,
  data
});