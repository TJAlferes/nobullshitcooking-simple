export const PLANNER_VIEW_CLICK_DAY = 'PLANNER_VIEW_CLICK_DAY' as const;
export const PLANNER_VIEW_LOAD = 'PLANNER_VIEW_LOAD' as const;

/*

State

*/

export interface IPlannerViewState {
  isLoading: boolean;
  expanded: boolean;
  expandedDay: number | null;
  planName: string;
  recipeListsInsideDays: IPlannerViewData;
}

export interface IPlannerViewData {
  [index: number]: any;
  1: IPlannerViewRecipe[];
  2: IPlannerViewRecipe[];
  3: IPlannerViewRecipe[];
  4: IPlannerViewRecipe[];
  5: IPlannerViewRecipe[];
  6: IPlannerViewRecipe[];
  7: IPlannerViewRecipe[];
  8: IPlannerViewRecipe[];
  9: IPlannerViewRecipe[];
  10: IPlannerViewRecipe[];
  11: IPlannerViewRecipe[];
  12: IPlannerViewRecipe[];
  13: IPlannerViewRecipe[];
  14: IPlannerViewRecipe[];
  15: IPlannerViewRecipe[];
  16: IPlannerViewRecipe[];
  17: IPlannerViewRecipe[];
  18: IPlannerViewRecipe[];
  19: IPlannerViewRecipe[];
  20: IPlannerViewRecipe[];
  21: IPlannerViewRecipe[];
  22: IPlannerViewRecipe[];
  23: IPlannerViewRecipe[];
  24: IPlannerViewRecipe[];
  25: IPlannerViewRecipe[];
  26: IPlannerViewRecipe[];
  27: IPlannerViewRecipe[];
  28: IPlannerViewRecipe[];
}

// url
export interface IPlannerViewRecipe {
  key: string;
  recipe_id: number;
  owner_id: number;
  title: string;
  recipe_image: string;
}

/*

Actions

*/

export type PlannerViewActions = IPlannerViewClickDay | IPlannerViewLoad;

export interface IPlannerViewClickDay {
  type: typeof PLANNER_VIEW_CLICK_DAY;
  day: number;
}

interface IPlannerViewLoad {
  type: typeof PLANNER_VIEW_LOAD;
  planName: string;
  planData: IPlannerViewData;
}