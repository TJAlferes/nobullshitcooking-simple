import * as actionTypes from '../actions/actionTypes';

// WRITE UNIT TESTS FOR REDUCERS AND ACTION CREATORS

const initialState = {
  message: ''
};

const userMessage = (state, action) => ({
  ...state,
  ...{message: action.message}
});

const userMessageClear = (state, action) => ({
  ...state,
  ...{message: ''}
});

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.USER_CREATE_NEW_PRIVATE_EQUIPMENT_SUCCEEDED: return userMessage(state, action);
    case actionTypes.USER_CREATE_NEW_PRIVATE_EQUIPMENT_FAILED: return userMessage(state, action);
    case actionTypes.USER_EDIT_PRIVATE_EQUIPMENT_SUCCEEDED: return userMessage(state, action);
    case actionTypes.USER_EDIT_PRIVATE_EQUIPMENT_FAILED: return userMessage(state, action);
    case actionTypes.USER_DELETE_PRIVATE_EQUIPMENT_SUCCEEDED: return userMessage(state, action);
    case actionTypes.USER_DELETE_PRIVATE_EQUIPMENT_FAILED: return userMessage(state, action);
    
    case actionTypes.USER_CREATE_NEW_PRIVATE_INGREDIENT_SUCCEEDED: return userMessage(state, action);
    case actionTypes.USER_CREATE_NEW_PRIVATE_INGREDIENT_FAILED: return userMessage(state, action);
    case actionTypes.USER_EDIT_PRIVATE_INGREDIENT_SUCCEEDED: return userMessage(state, action);
    case actionTypes.USER_EDIT_PRIVATE_INGREDIENT_FAILED: return userMessage(state, action);
    case actionTypes.USER_DELETE_PRIVATE_INGREDIENT_SUCCEEDED: return userMessage(state, action);
    case actionTypes.USER_DELETE_PRIVATE_INGREDIENT_FAILED: return userMessage(state, action);

    case actionTypes.USER_CREATE_NEW_PRIVATE_RECIPE_SUCCEEDED: return userMessage(state, action);
    case actionTypes.USER_CREATE_NEW_PRIVATE_RECIPE_FAILED: return userMessage(state, action);
    case actionTypes.USER_EDIT_PRIVATE_RECIPE_SUCCEEDED: return userMessage(state, action);
    case actionTypes.USER_EDIT_PRIVATE_RECIPE_FAILED: return userMessage(state, action);
    case actionTypes.USER_DELETE_PRIVATE_RECIPE_SUCCEEDED: return userMessage(state, action);
    case actionTypes.USER_DELETE_PRIVATE_RECIPE_FAILED: return userMessage(state, action);
    
    case actionTypes.USER_CREATE_NEW_PUBLIC_RECIPE_SUCCEEDED: return userMessage(state, action);
    case actionTypes.USER_CREATE_NEW_PUBLIC_RECIPE_FAILED: return userMessage(state, action);
    case actionTypes.USER_EDIT_PUBLIC_RECIPE_SUCCEEDED: return userMessage(state, action);
    case actionTypes.USER_EDIT_PUBLIC_RECIPE_FAILED: return userMessage(state, action);
    case actionTypes.USER_DISOWN_PUBLIC_RECIPE_SUCCEEDED: return userMessage(state, action);
    case actionTypes.USER_DISOWN_PUBLIC_RECIPE_FAILED: return userMessage(state, action);

    case actionTypes.USER_CREATE_NEW_PLAN_SUCCEEDED: return userMessage(state, action);
    case actionTypes.USER_CREATE_NEW_PLAN_FAILED: return userMessage(state, action);
    case actionTypes.USER_EDIT_PLAN_SUCCEEDED: return userMessage(state, action);
    case actionTypes.USER_EDIT_PLAN_FAILED: return userMessage(state, action);
    case actionTypes.USER_DELETE_PLAN_SUCCEEDED: return userMessage(state, action);
    case actionTypes.USER_DELETE_PLAN_FAILED: return userMessage(state, action);
    
    case actionTypes.USER_FAVORITE_RECIPE_SUCCEEDED: return userMessage(state, action);
    case actionTypes.USER_FAVORITE_RECIPE_FAILED: return userMessage(state, action);
    case actionTypes.USER_UNFAVORITE_RECIPE_SUCCEEDED: return userMessage(state, action);
    case actionTypes.USER_UNFAVORITE_RECIPE_FAILED: return userMessage(state, action);

    case actionTypes.USER_SAVE_RECIPE_SUCCEEDED: return userMessage(state, action);
    case actionTypes.USER_SAVE_RECIPE_FAILED: return userMessage(state, action);
    case actionTypes.USER_UNSAVE_RECIPE_SUCCEEDED: return userMessage(state, action);
    case actionTypes.USER_UNSAVE_RECIPE_FAILED: return userMessage(state, action);

    case actionTypes.USER_REQUEST_FRIENDSHIP_SUCCEEDED: return userMessage(state, action);
    case actionTypes.USER_REQUEST_FRIENDSHIP_FAILED: return userMessage(state, action);
    case actionTypes.USER_ACCEPT_FRIENDSHIP_SUCCEEDED: return userMessage(state, action);
    case actionTypes.USER_ACCEPT_FRIENDSHIP_FAILED: return userMessage(state, action);
    case actionTypes.USER_REJECT_FRIENDSHIP_SUCCEEDED: return userMessage(state, action);
    case actionTypes.USER_REJECT_FRIENDSHIP_FAILED: return userMessage(state, action);
    case actionTypes.USER_DELETE_FRIENDSHIP_SUCCEEDED: return userMessage(state, action);
    case actionTypes.USER_DELETE_FRIENDSHIP_FAILED: return userMessage(state, action);
    case actionTypes.USER_BLOCK_USER_SUCCEEDED: return userMessage(state, action);
    case actionTypes.USER_BLOCK_USER_FAILED: return userMessage(state, action);
    case actionTypes.USER_UNBLOCK_USER_SUCCEEDED: return userMessage(state, action);
    case actionTypes.USER_UNBLOCK_USER_FAILED: return userMessage(state, action);

    case actionTypes.USER_SUBMIT_AVATAR_SUCCEEDED: return userMessage(state, action);
    case actionTypes.USER_SUBMIT_AVATAR_FAILED: return userMessage(state, action);

    case actionTypes.USER_MESSAGE_CLEAR: return userMessageClear(state, action);
  }
  return state;
};

export default userReducer;