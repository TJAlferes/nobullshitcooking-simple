export const PLANNER_CLICK_DAY = 'PLANNER_CLICK_DAY' as const;
export const PLANNER_ADD_RECIPE_TO_DAY = 'PLANNER_ADD_RECIPE_TO_DAY' as const;
export const PLANNER_REMOVE_RECIPE_FROM_DAY = 'PLANNER_REMOVE_RECIPE_FROM_DAY' as const;
export const PLANNER_REORDER_RECIPE_IN_DAY = 'PLANNER_REORDER_RECIPE_IN_DAY' as const;
//export const PLANNER_PUBLIC_SAVE_TO_URL = 'PLANNER_PUBLIC_SAVE_TO_URL';
//export const PLANNER_PUBLIC_LOAD_FROM_URL = 'PLANNER_PUBLIC_LOAD_FROM_URL';
export const PLANNER_CLEAR_WORK = 'PLANNER_CLEAR_WORK' as const;
export const PLANNER_SET_CREATING = 'PLANNER_SET_CREATING' as const;
export const PLANNER_SET_EDITING_ID = 'PLANNER_SET_EDITING_ID' as const;
export const PLANNER_SET_PLAN_NAME = 'PLANNER_SET_PLAN_NAME' as const;
export const PLANNER_SET_PLAN_DATA = 'PLANNER_SET_PLAN_DATA' as const;

export interface IPlannerState {
  isLoading: boolean;
  creating: boolean;
  editingId: number | null;
  publicUrl: string;
  expanded: boolean;
  expandedDay: number | null;
  planName: string;
  recipeListsInsideDays: IPlannerData;
}

export interface IPlannerData {
  [index: number]: any;
  1: IPlannerRecipe[],
  2: IPlannerRecipe[],
  3: IPlannerRecipe[],
  4: IPlannerRecipe[],
  5: IPlannerRecipe[],
  6: IPlannerRecipe[],
  7: IPlannerRecipe[],
  8: IPlannerRecipe[],
  9: IPlannerRecipe[],
  10: IPlannerRecipe[],
  11: IPlannerRecipe[],
  12: IPlannerRecipe[],
  13: IPlannerRecipe[],
  14: IPlannerRecipe[],
  15: IPlannerRecipe[],
  16: IPlannerRecipe[],
  17: IPlannerRecipe[],
  18: IPlannerRecipe[],
  19: IPlannerRecipe[],
  20: IPlannerRecipe[],
  21: IPlannerRecipe[],
  22: IPlannerRecipe[],
  23: IPlannerRecipe[],
  24: IPlannerRecipe[],
  25: IPlannerRecipe[],
  26: IPlannerRecipe[],
  27: IPlannerRecipe[],
  28: IPlannerRecipe[]
}

export interface IPlannerRecipe {
  key: string;
  recipe_id: number;
  title: string;
  recipe_image: string;
  owner_id: number;
}

export type PlannerActions =
IPlannerClickDay |
IPlannerAddRecipeToDay |
IPlannerRemoveRecipeFromDay |
IPlannerReorderRecipeInDay |
IPlannerClearWork |
IPlannerSetCreating |
IPlannerSetEditingId |
IPlannerSetPlanName |
IPlannerSetPlanData;

export interface IPlannerClickDay {
  type: typeof PLANNER_CLICK_DAY
  day: number
}

export interface IPlannerAddRecipeToDay {
  type: typeof PLANNER_ADD_RECIPE_TO_DAY
  day: number
  recipe: IPlannerRecipe
}

export interface IPlannerRemoveRecipeFromDay {
  type: typeof PLANNER_REMOVE_RECIPE_FROM_DAY
  day: number
  index: number
}

export interface IPlannerReorderRecipeInDay {
  type: typeof PLANNER_REORDER_RECIPE_IN_DAY
  dragIndex: number
  hoverIndex: number
}

/*interface IPlanner {
  type: typeof PLANNER_
}*/

/*interface IPlanner {
  type: typeof PLANNER_
}*/

interface IPlannerClearWork {
  type: typeof PLANNER_CLEAR_WORK
}

interface IPlannerSetCreating {
  type: typeof PLANNER_SET_CREATING
}

interface IPlannerSetEditingId {
  type: typeof PLANNER_SET_EDITING_ID
  id: number | null
}

interface IPlannerSetPlanName {
  type: typeof PLANNER_SET_PLAN_NAME
  name: string
}

interface IPlannerSetPlanData {
  type: typeof PLANNER_SET_PLAN_DATA
  data: IPlannerData
}