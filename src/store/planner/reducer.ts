import update from 'immutability-helper';  // is this really needed?

import {
  PLANNER_CLICK_DAY,
  PLANNER_ADD_RECIPE_TO_DAY,
  PLANNER_REMOVE_RECIPE_FROM_DAY,
  PLANNER_REORDER_RECIPE_IN_DAY,
  //PLANNER_PUBLIC_LOAD_FROM_URL,
  //PLANNER_PUBLIC_SAVE_TO_URL,
  PLANNER_CLEAR_WORK,
  PLANNER_SET_CREATING,
  PLANNER_SET_PLAN_NAME,
  PLANNER_SET_EDITING_ID,
  PLANNER_SET_PLAN_DATA,
  IPlannerState,
  PlannerActions,
  IPlannerClickDay,
  IPlannerAddRecipeToDay,
  IPlannerRemoveRecipeFromDay,
  IPlannerReorderRecipeInDay
} from './types';

const initialState: IPlannerState = {
  isLoading: false,
  creating: false,
  editingId: null,
  publicUrl: "",
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
  state: IPlannerState,
  action: IPlannerClickDay
): IPlannerState => {
  const { expandedDay } = state;
  const { day } = action;
  if (day === expandedDay) {
    return {...state, ...{expanded: false, expandedDay: null}};
  } else {
    return {...state, ...{expanded: true, expandedDay: day}};
  }
};

const addRecipeToDay = (
  state: IPlannerState,
  action: IPlannerAddRecipeToDay
): IPlannerState => {
  const { day, recipe } = action;
  return update(state, {
    recipeListsInsideDays: {
      [day]: {
        $push: [recipe]
      }
    }
  });
};

const removeRecipeFromDay = (
  state: IPlannerState,
  action: IPlannerRemoveRecipeFromDay
): IPlannerState => {
  const { day, index } = action;
  return update(state, {
    recipeListsInsideDays: {
      [day]: {
        $splice: [[index, 1]]
      }
    }
  });
};

const reorderRecipeInDay = (
  state: IPlannerState,
  action: IPlannerReorderRecipeInDay
): IPlannerState => {
  const { expandedDay, recipeListsInsideDays } = state;
  const { dragIndex, hoverIndex } = action;
  if (!expandedDay) return state;
  const draggedRecipe = recipeListsInsideDays[expandedDay][dragIndex];
  return update(state, {
    recipeListsInsideDays: {
      [expandedDay]: {
        $splice: [[dragIndex, 1], [hoverIndex, 0, draggedRecipe]]
      }
    }
  });
};

/*const publicLoadFromUrl = (state, action) => {
  const { preLoadedPlan } = action;
  return {...state, ...{recipeListsInsideDays: preLoadedPlan}};
};*/

/*const publicSaveToUrl = (state, action) => {
  const { recipeListsInsideDays } = state;
  const newPublicUrl = convertPlannerToUrl(recipeListsInsideDays);
  return {...state, ...{publicUrl: newPublicUrl}}
};*/

export const plannerReducer = (
  state = initialState,
  action: PlannerActions
): IPlannerState => {
  switch (action.type) {
    case PLANNER_CLICK_DAY: return clickDay(state, action);

    case PLANNER_ADD_RECIPE_TO_DAY: return addRecipeToDay(state, action);

    case PLANNER_REMOVE_RECIPE_FROM_DAY:
      return removeRecipeFromDay(state, action);

    case PLANNER_REORDER_RECIPE_IN_DAY:
      return reorderRecipeInDay(state, action);

    //case PLANNER_PUBLIC_LOAD_FROM_URL: return publicLoadFromUrl(state, action);

    //case PLANNER_PUBLIC_SAVE_TO_URL: return publicSaveToUrl(state, action);

    case PLANNER_CLEAR_WORK: return {...state, ...initialState};

    case PLANNER_SET_CREATING: return {...state, ...{creating: true}};

    case PLANNER_SET_PLAN_NAME:
      return {...state, ...{planName: action.name}};

    case PLANNER_SET_EDITING_ID:
      return {...state, ...{editingId: action.id}};

    case PLANNER_SET_PLAN_DATA:
      return {
        ...state,
        ...{recipeListsInsideDays: action.data}
      };

    default: return state;
  }
};