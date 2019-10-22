import update from 'immutability-helper';

import * as actionTypes from '../actions/actionTypes';
import convertPlannerToUrl from '../../utils/publicPlanner/convertPlannerToUrl';
//import { convertUrlToPlannerv2 } from '../../utils/publicPlanner/convertUrlToPlanner';

// WRITE UNIT TESTS FOR REDUCERS AND ACTION CREATORS

// IMPLEMENT AS KIND OF "FINITE STATE MACHINE"

// flatten this (?)
const initialState = {
  isLoading: false,
  creating: false,

  editingId: "",
  publicUrl: "",

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



const publicLoadFromUrl = (state, action) => {
  const { preLoadedPlan } = action;
  return {...state, ...{recipeListsInsideDays: preLoadedPlan}};
};

const publicSaveToUrl = (state, action) => {
  const { recipeListsInsideDays } = state;
  const newPublicUrl = convertPlannerToUrl(recipeListsInsideDays);
  return {...state, ...{publicUrl: newPublicUrl}}
};



const clearWork = (state, action) => ({...state, ...initialState});

const setCreating = (state, action) => ({...state, ...{creating: true}});

const setPlanName = (state, action) => ({...state, ...{planName: action.name}});

const setEditingId = (state, action) => ({...state, ...{editingId: action.id}});

const setPlanData = (state, action) => ({
  ...state,
  ...{recipeListsInsideDays: action.data}
});



// remember Nir Kofman's actions patterns
const plannerReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PLANNER_CLICK_DAY: return clickDay(state, action);
    case actionTypes.PLANNER_ADD_RECIPE_TO_DAY: return addRecipeToDay(state, action);
    case actionTypes.PLANNER_REMOVE_RECIPE_FROM_DAY: return removeRecipeFromDay(state, action);
    case actionTypes.PLANNER_REORDER_RECIPE_IN_DAY: return reorderRecipeInDay(state, action);

    case actionTypes.PLANNER_PUBLIC_LOAD_FROM_URL: return publicLoadFromUrl(state, action);
    case actionTypes.PLANNER_PUBLIC_SAVE_TO_URL: return publicSaveToUrl(state, action);

    case actionTypes.PLANNER_CLEAR_WORK: return clearWork(state, action);
    case actionTypes.PLANNER_SET_CREATING: return setCreating(state, action);
    case actionTypes.PLANNER_SET_PLAN_NAME: return setPlanName(state, action);
    case actionTypes.PLANNER_SET_EDITING_ID: return setEditingId(state, action);
    case actionTypes.PLANNER_SET_PLAN_DATA: return setPlanData(state, action);
  }
  return state;
};

export default plannerReducer;