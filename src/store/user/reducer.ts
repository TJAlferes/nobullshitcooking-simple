import {
  USER_MESSAGE_CLEAR,

  USER_CREATE_NEW_PRIVATE_EQUIPMENT_SUCCEEDED,
  USER_CREATE_NEW_PRIVATE_EQUIPMENT_FAILED,

  USER_EDIT_PRIVATE_EQUIPMENT_SUCCEEDED,
  USER_EDIT_PRIVATE_EQUIPMENT_FAILED,

  USER_DELETE_PRIVATE_EQUIPMENT_SUCCEEDED,
  USER_DELETE_PRIVATE_EQUIPMENT_FAILED,

  USER_CREATE_NEW_PRIVATE_INGREDIENT_SUCCEEDED,
  USER_CREATE_NEW_PRIVATE_INGREDIENT_FAILED,

  USER_EDIT_PRIVATE_INGREDIENT_SUCCEEDED,
  USER_EDIT_PRIVATE_INGREDIENT_FAILED,

  USER_DELETE_PRIVATE_INGREDIENT_SUCCEEDED,
  USER_DELETE_PRIVATE_INGREDIENT_FAILED,

  USER_CREATE_NEW_PRIVATE_RECIPE_SUCCEEDED,
  USER_CREATE_NEW_PRIVATE_RECIPE_FAILED,

  USER_EDIT_PRIVATE_RECIPE_SUCCEEDED,
  USER_EDIT_PRIVATE_RECIPE_FAILED,

  USER_DELETE_PRIVATE_RECIPE_SUCCEEDED,
  USER_DELETE_PRIVATE_RECIPE_FAILED,

  USER_CREATE_NEW_PUBLIC_RECIPE_SUCCEEDED,
  USER_CREATE_NEW_PUBLIC_RECIPE_FAILED,

  USER_EDIT_PUBLIC_RECIPE_SUCCEEDED,
  USER_EDIT_PUBLIC_RECIPE_FAILED,

  USER_DISOWN_PUBLIC_RECIPE_SUCCEEDED,
  USER_DISOWN_PUBLIC_RECIPE_FAILED,

  USER_CREATE_NEW_PLAN_SUCCEEDED,
  USER_CREATE_NEW_PLAN_FAILED,

  USER_EDIT_PLAN_SUCCEEDED,
  USER_EDIT_PLAN_FAILED,

  USER_DELETE_PLAN_SUCCEEDED,
  USER_DELETE_PLAN_FAILED,

  USER_FAVORITE_RECIPE_SUCCEEDED,
  USER_FAVORITE_RECIPE_FAILED,

  USER_UNFAVORITE_RECIPE_SUCCEEDED,
  USER_UNFAVORITE_RECIPE_FAILED,

  USER_SAVE_RECIPE_SUCCEEDED,
  USER_SAVE_RECIPE_FAILED,

  USER_UNSAVE_RECIPE_SUCCEEDED,
  USER_UNSAVE_RECIPE_FAILED,

  USER_REQUEST_FRIENDSHIP_SUCCEEDED,
  USER_REQUEST_FRIENDSHIP_FAILED,

  USER_ACCEPT_FRIENDSHIP_SUCCEEDED,
  USER_ACCEPT_FRIENDSHIP_FAILED,

  USER_REJECT_FRIENDSHIP_SUCCEEDED,
  USER_REJECT_FRIENDSHIP_FAILED,

  USER_DELETE_FRIENDSHIP_SUCCEEDED,
  USER_DELETE_FRIENDSHIP_FAILED,

  USER_BLOCK_USER_SUCCEEDED,
  USER_BLOCK_USER_FAILED,

  USER_UNBLOCK_USER_SUCCEEDED,
  USER_UNBLOCK_USER_FAILED,

  USER_SUBMIT_AVATAR_SUCCEEDED,
  USER_SUBMIT_AVATAR_FAILED,

  UserState,
  UserActions
} from './types';

const initialState: UserState = {message: ''};

const userReducer = (state = initialState, action): UserState => {
  switch (action.type) {
    case USER_CREATE_NEW_PRIVATE_EQUIPMENT_SUCCEEDED:
    case USER_CREATE_NEW_PRIVATE_EQUIPMENT_FAILED:
    case USER_EDIT_PRIVATE_EQUIPMENT_SUCCEEDED:
    case USER_EDIT_PRIVATE_EQUIPMENT_FAILED:
    case USER_DELETE_PRIVATE_EQUIPMENT_SUCCEEDED:
    case USER_DELETE_PRIVATE_EQUIPMENT_FAILED:
    
    case USER_CREATE_NEW_PRIVATE_INGREDIENT_SUCCEEDED:
    case USER_CREATE_NEW_PRIVATE_INGREDIENT_FAILED:
    case USER_EDIT_PRIVATE_INGREDIENT_SUCCEEDED:
    case USER_EDIT_PRIVATE_INGREDIENT_FAILED:
    case USER_DELETE_PRIVATE_INGREDIENT_SUCCEEDED:
    case USER_DELETE_PRIVATE_INGREDIENT_FAILED:

    case USER_CREATE_NEW_PRIVATE_RECIPE_SUCCEEDED:
    case USER_CREATE_NEW_PRIVATE_RECIPE_FAILED:
    case USER_EDIT_PRIVATE_RECIPE_SUCCEEDED:
    case USER_EDIT_PRIVATE_RECIPE_FAILED:
    case USER_DELETE_PRIVATE_RECIPE_SUCCEEDED:
    case USER_DELETE_PRIVATE_RECIPE_FAILED:
    
    case USER_CREATE_NEW_PUBLIC_RECIPE_SUCCEEDED:
    case USER_CREATE_NEW_PUBLIC_RECIPE_FAILED:
    case USER_EDIT_PUBLIC_RECIPE_SUCCEEDED:
    case USER_EDIT_PUBLIC_RECIPE_FAILED:
    case USER_DISOWN_PUBLIC_RECIPE_SUCCEEDED:
    case USER_DISOWN_PUBLIC_RECIPE_FAILED:

    case USER_CREATE_NEW_PLAN_SUCCEEDED:
    case USER_CREATE_NEW_PLAN_FAILED:
    case USER_EDIT_PLAN_SUCCEEDED:
    case USER_EDIT_PLAN_FAILED:
    case USER_DELETE_PLAN_SUCCEEDED:
    case USER_DELETE_PLAN_FAILED:
    
    case USER_FAVORITE_RECIPE_SUCCEEDED:
    case USER_FAVORITE_RECIPE_FAILED:
    case USER_UNFAVORITE_RECIPE_SUCCEEDED:
    case USER_UNFAVORITE_RECIPE_FAILED:

    case USER_SAVE_RECIPE_SUCCEEDED:
    case USER_SAVE_RECIPE_FAILED:
    case USER_UNSAVE_RECIPE_SUCCEEDED:
    case USER_UNSAVE_RECIPE_FAILED:

    case USER_REQUEST_FRIENDSHIP_SUCCEEDED:
    case USER_REQUEST_FRIENDSHIP_FAILED:
    case USER_ACCEPT_FRIENDSHIP_SUCCEEDED:
    case USER_ACCEPT_FRIENDSHIP_FAILED:
    case USER_REJECT_FRIENDSHIP_SUCCEEDED:
    case USER_REJECT_FRIENDSHIP_FAILED:
    case USER_DELETE_FRIENDSHIP_SUCCEEDED:
    case USER_DELETE_FRIENDSHIP_FAILED:
    case USER_BLOCK_USER_SUCCEEDED:
    case USER_BLOCK_USER_FAILED:
    case USER_UNBLOCK_USER_SUCCEEDED:
    case USER_UNBLOCK_USER_FAILED:

    case USER_SUBMIT_AVATAR_SUCCEEDED:
    case USER_SUBMIT_AVATAR_FAILED:
      return { ...state, ...{message: action.message}};

    case USER_MESSAGE_CLEAR:
      return {...state, ...{message: ''}};

    default: return state;
  }
};

export default userReducer;