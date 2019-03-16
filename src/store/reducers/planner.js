import * as actionTypes from '../actions/actionTypes';
import update from 'immutability-helper';

// WRITE UNIT TESTS FOR REDUCERS AND ACTION CREATORS

// FLATTEN!!!
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

const clickDay = (state, action) => {
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

const addRecipeToDay = (state, action) => {
  const { day, recipe } = action;
  return update(state, {
    recipeListsInsideDays: {
      [day]: {
        $push: [recipe]
      }
    }
  });
};

const removeRecipeFromDay = (state, action) => {
  const { day, index } = action;
  return update(state, {
    recipeListsInsideDays: {
      [day]: {
        $splice: [[index, 1]]
      }
    }
  });
};

const reorderRecipeInDay = (state, action) => {
  const { expandedDay, recipeListsInsideDays } = state;
  const { dragIndex, hoverIndex } = action;
  const draggedRecipe = recipeListsInsideDays[expandedDay][dragIndex];
  return update(state, {
    recipeListsInsideDays: {
      [expandedDay]: {
        $splice: [[dragIndex, 1], [hoverIndex, 0, draggedRecipe]]
      }
    }
  });
};

// remember Nir Kofman's actions patterns
const plannerReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PLANNER_CLICK_DAY: return clickDay(state, action);
    case actionTypes.PLANNER_ADD_RECIPE_TO_DAY: return addRecipeToDay(state, action);
    case actionTypes.PLANNER_REMOVE_RECIPE_FROM_DAY: return removeRecipeFromDay(state, action);
    case actionTypes.PLANNER_REORDER_RECIPE_IN_DAY: return reorderRecipeInDay(state, action);
  }
  return state;
};

export default plannerReducer;