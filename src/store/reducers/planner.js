import * as actionTypes from '../actions/actionTypes';
import update from 'immutability-helper';

const initialState = {
  isSaving: false,
  expanded: false,
  expandedDay: "none",
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

const addRecipeToPlan = (state, action) => {
  /*return update(state, {

  });*/
  return state;
};

const removeRecipeFromPlan = (state, action) => {
  /*return update(state, {

  });*/
  return state;
};

const clickDay = (state, action) => {
  const { expandedDay } = state;
  if (day === expandedDay) {
    return update(state, {
      expanded: false,
      expandedDay: "none"
    });
  } else {
    return update(state, {
      expanded: true,
      expandedDay: action.day
    });
  }
};

const addRecipeToDay = (state, action) => {
  return update(state, {
    recipeListsInsideDays: {
      [action.day - 1]: {
        $push: [action.recipe]
      }
    }
  });
};

const removeRecipeFromDay = (state, action) => {
  return update(state, {
    recipeListsInsideDays: {
      [action.day - 1]: {
        $splice: [
          [action.index, 1]
        ]
      }
    }
  });
};

const reorderRecipeInDay = (state, action) => {
  return update(state, {
    recipeListsInsideDays: {
      [action.day - 1]: {
        $splice: [
          [action.dragIndex, 1],
          [action.hoverIndex, 0, action.dragRecipe]
        ]
      }
    }
  });
};

// remember Nir Kofman's actions patterns
const plannerReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PLANNER_ADD_RECIPE_TO_PLAN: return addRecipeToPlan(state, action);
    case actionTypes.PLANNER_REMOVE_RECIPE_FROM_PLAN: return removeRecipeFromPlan(state, action);
    case actionTypes.PLANNER_CLICK_DAY: return clickDay(state, action);
    case actionTypes.PLANNER_ADD_RECIPE_TO_DAY: return addRecipeToDay(state, action);
    case actionTypes.PLANNER_REMOVE_RECIPE_FROM_DAY: return removeRecipeFromDay(state, action);
    case actionTypes.PLANNER_REORDER_RECIPE_IN_DAY: return reorderRecipeInDay(state, action);
  }
  return state;
};

export default plannerReducer;