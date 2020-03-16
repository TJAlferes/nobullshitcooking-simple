import {
  PLANNER_VIEW_CLICK_DAY,
  PLANNER_VIEW_LOAD,
  PlannerViewState,
  PlannerViewActions,
  PlannerViewClickDay
} from './types';

const initialState: PlannerViewState = {
  isLoading: false,
  expanded: false,
  expandedDay: "none",
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
  state: PlannerViewState,
  action: PlannerViewClickDay
): PlannerViewState => {
  const { expandedDay } = state;
  const { day } = action;
  if (day === expandedDay) {
    return {...state, ...{
      expanded: false,
      expandedDay: "none"
    }};
  } else {
    return {...state, ...{
      expanded: true,
      expandedDay: action.day
    }};
  }
};

const plannerViewReducer = (
  state = initialState,
  action: PlannerViewActions
): PlannerViewState => {
  switch (action.type) {
    case PLANNER_VIEW_CLICK_DAY:
      return clickDay(state, action);

    case PLANNER_VIEW_LOAD:
      return {
        ...state,
        ...{planName: action.planName, recipeListsInsideDays: action.planData}
      };
    default: return state;
  }
};

export default plannerViewReducer;