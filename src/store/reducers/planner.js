import * as actionTypes from '../actions/actionTypes';
//import updateObject from '../../utils/updateObject';
import update from 'immutability-helper';

// TO DO ASAP: normalize this!
// TO DO: what if they want multiple plans? right now there's only one
const initialState = {
  planner: {
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
  }
};

const addRecipeToPlan = (state, action) => {
  // Object.create(Recipe);
  return update(state, {

  });
};

const removeRecipeFromPlan = (state, action) => {
  return update(state, {

  });
};

const clickDay = (state, action) => {
  const { expandedDay } = state.planner;
  if (day === expandedDay) {
    return update(state, {
      planner: {
        expanded: false,
        expandedDay: "none"
      }
    });
  } else {
    return update(state, {
      planner: {
        expanded: true,
        expandedDay: action.day
      }
    });
  }
};

const addRecipeToDay = (state, action) => {
  return update(state, {
    planner: {
      recipeLists: {
        [action.day - 1]: {
          list: {
            $push: [action.recipe]
          }
        }
      }
    }
  });
};

const removeRecipeFromDay = (state, action) => {
  return update(state, {
    planner: {
      recipeLists: {
        [action.day - 1]: {
          list: {
            $splice: [
              [action.index, 1]
            ]
          }
        }
      }
    }
  });
};

const reorderRecipeInDay = (state, action) => {
  return update(state, {
    planner: {
      recipeLists: {
        [action.day - 1]: {
          list: {
            $splice: [
              [action.dragIndex, 1],
              [action.hoverIndex, 0, action.dragRecipe]
            ]
          }
        }
      }
    }
  });
};

// remember Nir Kofman's actions patterns
const plannerReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case actionTypes.PLANNER_ADD_RECIPE_TO_PLAN: return addRecipeToPlan(state, action);
    case actionTypes.PLANNER_REMOVE_RECIPE_FROM_PLAN: return removeRecipeFromPlan(state, action);
    case actionTypes.PLANNER_CLICK_DAY: return clickDay(state, action);
    case actionTypes.PLANNER_ADD_RECIPE_TO_DAY: return addRecipeToDay(state, action);
    case actionTypes.PLANNER_REMOVE_RECIPE_FROM_DAY: return removeRecipeFromDay(state, action);
    case actionTypes.PLANNER_REORDER_RECIPE_IN_DAY: return reorderRecipeInDay(state, action);
    default: return state;
  }
};

export default plannerReducer;