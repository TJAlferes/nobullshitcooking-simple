export const PLANNER_CLICK_DAY = 'PLANNER_CLICK_DAY';
export const PLANNER_ADD_RECIPE_TO_DAY = 'PLANNER_ADD_RECIPE_TO_DAY';
export const PLANNER_REMOVE_RECIPE_FROM_DAY = 'PLANNER_REMOVE_RECIPE_FROM_DAY';
export const PLANNER_REORDER_RECIPE_IN_DAY = 'PLANNER_REORDER_RECIPE_IN_DAY';
//export const PLANNER_PUBLIC_SAVE_TO_URL = 'PLANNER_PUBLIC_SAVE_TO_URL';
//export const PLANNER_PUBLIC_LOAD_FROM_URL = 'PLANNER_PUBLIC_LOAD_FROM_URL';
export const PLANNER_CLEAR_WORK = 'PLANNER_CLEAR_WORK';
export const PLANNER_SET_CREATING = 'PLANNER_SET_CREATING';
export const PLANNER_SET_EDITING_ID = 'PLANNER_SET_EDITING_ID';
export const PLANNER_SET_PLAN_NAME = 'PLANNER_SET_PLAN_NAME';
export const PLANNER_SET_PLAN_DATA = 'PLANNER_SET_PLAN_DATA';

export interface PlannerState {
  isLoading: boolean
  creating: boolean
  editingId: string
  publicUrl: string
  expanded: boolean
  expandedDay: string|number
  planName: string
  recipeListsInsideDays: PlannerData
}

export interface PlannerData {
  1: PlannerRecipe[],
  2: PlannerRecipe[],
  3: PlannerRecipe[],
  4: PlannerRecipe[],
  5: PlannerRecipe[],
  6: PlannerRecipe[],
  7: PlannerRecipe[],
  8: PlannerRecipe[],
  9: PlannerRecipe[],
  10: PlannerRecipe[],
  11: PlannerRecipe[],
  12: PlannerRecipe[],
  13: PlannerRecipe[],
  14: PlannerRecipe[],
  15: PlannerRecipe[],
  16: PlannerRecipe[],
  17: PlannerRecipe[],
  18: PlannerRecipe[],
  19: PlannerRecipe[],
  20: PlannerRecipe[],
  21: PlannerRecipe[],
  22: PlannerRecipe[],
  23: PlannerRecipe[],
  24: PlannerRecipe[],
  25: PlannerRecipe[],
  26: PlannerRecipe[],
  27: PlannerRecipe[],
  28: PlannerRecipe[]
}

export interface PlannerRecipe {
  key: string
  image: string
  text: string
}

export type PlannerActions =
PlannerClickDay |
PlannerAddRecipeToDay |
PlannerRemoveRecipeFromDay |
PlannerReorderRecipeInDay |
PlannerClearWork |
PlannerSetCreating |
PlannerSetEditingId |
PlannerSetPlanName |
PlannerSetPlanData;

export interface PlannerClickDay {
  type: typeof PLANNER_CLICK_DAY
  day: number
}

export interface PlannerAddRecipeToDay {
  type: typeof PLANNER_ADD_RECIPE_TO_DAY
  day: number
  recipe: PlannerRecipe
}

export interface PlannerRemoveRecipeFromDay {
  type: typeof PLANNER_REMOVE_RECIPE_FROM_DAY
  day: number
  index: number
}

export interface PlannerReorderRecipeInDay {
  type: typeof PLANNER_REORDER_RECIPE_IN_DAY
  dragIndex: number
  hoverIndex: number
}

/*interface Planner {
  type: typeof PLANNER_
}*/

/*interface Planner {
  type: typeof PLANNER_
}*/

interface PlannerClearWork {
  type: typeof PLANNER_CLEAR_WORK
}

interface PlannerSetCreating {
  type: typeof PLANNER_SET_CREATING
}

interface PlannerSetEditingId {
  type: typeof PLANNER_SET_EDITING_ID
  id: string
}

interface PlannerSetPlanName {
  type: typeof PLANNER_SET_PLAN_NAME
  name: string
}

interface PlannerSetPlanData {
  type: typeof PLANNER_SET_PLAN_DATA
  data: PlannerData
}