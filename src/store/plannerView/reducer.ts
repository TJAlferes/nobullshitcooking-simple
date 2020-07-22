import {
  PLANNER_VIEW_CLICK_DAY,
  PLANNER_VIEW_LOAD,
  IPlannerViewState,
  PlannerViewActions,
  IPlannerViewClickDay
} from './types';

const initialState: IPlannerViewState = {
  isLoading: false,
  expanded: false,
  expandedDay: null,
  planName: "",
  recipeListsInsideDays: {
    1: [],
    2: [],
    3: [],
    4: [],
    5: [],
    6: [],
    7: [],
    8: [],
    9: [],
    10: [],
    11: [],
    12: [],
    13: [],
    14: [],
    15: [],
    16: [],
    17: [],
    18: [],
    19: [],
    20: [],
    21: [],
    22: [],
    23: [],
    24: [],
    25: [],
    26: [],
    27: [],
    28: []
  }
};

const clickDay = (
  state: IPlannerViewState,
  action: IPlannerViewClickDay
): IPlannerViewState => {
  const { expandedDay } = state;
  const { day } = action;
  if (day === expandedDay) {
    return {...state, ...{expanded: false, expandedDay: null}};
  }
  return {...state, ...{expanded: true, expandedDay: action.day}};
};

export const plannerViewReducer = (
  state = initialState,
  action: PlannerViewActions
): IPlannerViewState => {
  switch (action.type) {
    case PLANNER_VIEW_CLICK_DAY: return clickDay(state, action);
    case PLANNER_VIEW_LOAD:
      return {
        ...state,
        ...{planName: action.planName, recipeListsInsideDays: action.planData}
      };
    default: return state;
  }
};