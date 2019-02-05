import * as actionTypes from '../actions/actionTypes';
import updateObject from '../../utils/updateObject';

// TO DO ASAP: normalize this!
const initialState = {
  isSaving: false,
  expanded: false,
  expandedDay: "none",
  recipeLists: [
    {
      day: 1,
      list: []
    },
    {
      day: 2,
      list: []
    },
    {
      day: 3,
      list: []
    },
    {
      day: 4,
      list: []
    },
    {
      day: 5,
      list: []
    },
    {
      day: 6,
      list: []
    },
    {
      day: 7,
      list: []
    },
  
    {
      day: 8,
      list: []
    },
    {
      day: 9,
      list: []
    },
    {
      day: 10,
      list: []
    },
    {
      day: 11,
      list: []
    },
    {
      day: 12,
      list: []
    },
    {
      day: 13,
      list: []
    },
    {
      day: 14,
      list: []
    },
  
    {
      day: 15,
      list: []
    },
    {
      day: 16,
      list: []
    },
    {
      day: 17,
      list: []
    },
    {
      day: 18,
      list: []
    },
    {
      day: 19,
      list: []
    },
    {
      day: 20,
      list: []
    },
    {
      day: 21,
      list: []
    },
  
    {
      day: 22,
      list: []
    },
    {
      day: 23,
      list: []
    },
    {
      day: 24,
      list: []
    },
    {
      day: 25,
      list: []
    },
    {
      day: 26,
      list: []
    },
    {
      day: 27,
      list: []
    },
    {
      day: 28,
      list: []
    }
  ]
};

const plannerClickDay = (state, action) => {
  return updateObject(state, {day: action.day});
};

const plannerAddRecipeToDay = (state, action) => {
  return updateObject(state, {});
};

const plannerRemoveRecipeFromDay = (state, action) => {
  return updateObject(state, {});
};

const plannerReorderRecipeInDay = (state, action) => {
  return updateObject(state, {});
};

// remember Nir Kofman's actions patterns
const plannerReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case actionTypes.PLANNER_CLICK_DAY: return plannerClickDay(state, action);
    case actionTypes.PLANNER_ADD_RECIPE_TO_DAY: return plannerAddRecipeToDay(state, action);
    case actionTypes.PLANNER_REMOVE_RECIPE_FROM_DAY: return plannerRemoveRecipeFromDay(state, action);
    case actionTypes.PLANNER_REORDER_RECIPE_IN_DAY: return plannerReorderRecipeInDay(state, action);
    default: return state;
  }
};

export default plannerReducer;