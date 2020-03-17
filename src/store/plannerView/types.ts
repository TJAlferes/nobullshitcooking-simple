export const PLANNER_VIEW_CLICK_DAY = 'PLANNER_VIEW_CLICK_DAY' as const;
export const PLANNER_VIEW_LOAD = 'PLANNER_VIEW_LOAD' as const;

export interface PlannerViewState {
  isLoading: boolean
  expanded: boolean
  expandedDay: string|number
  planName: string
  recipeListsInsideDays: PlannerViewData
}

export interface PlannerViewData {
  1: PlannerViewRecipe[],
  2: PlannerViewRecipe[],
  3: PlannerViewRecipe[],
  4: PlannerViewRecipe[],
  5: PlannerViewRecipe[],
  6: PlannerViewRecipe[],
  7: PlannerViewRecipe[],
  8: PlannerViewRecipe[],
  9: PlannerViewRecipe[],
  10: PlannerViewRecipe[],
  11: PlannerViewRecipe[],
  12: PlannerViewRecipe[],
  13: PlannerViewRecipe[],
  14: PlannerViewRecipe[],
  15: PlannerViewRecipe[],
  16: PlannerViewRecipe[],
  17: PlannerViewRecipe[],
  18: PlannerViewRecipe[],
  19: PlannerViewRecipe[],
  20: PlannerViewRecipe[],
  21: PlannerViewRecipe[],
  22: PlannerViewRecipe[],
  23: PlannerViewRecipe[],
  24: PlannerViewRecipe[],
  25: PlannerViewRecipe[],
  26: PlannerViewRecipe[],
  27: PlannerViewRecipe[],
  28: PlannerViewRecipe[]
}

// url
export interface PlannerViewRecipe {
  key: string
  image: string
  text: string
}

export type PlannerViewActions = PlannerViewClickDay | PlannerViewLoad;

export interface PlannerViewClickDay {
  type: typeof PLANNER_VIEW_CLICK_DAY
  day: number
}

interface PlannerViewLoad {
  type: typeof PLANNER_VIEW_LOAD
  planName: string
  planData: PlannerViewData
}