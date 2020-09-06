import {
  USER_SUBMIT_AVATAR_SUCCEEDED,
  USER_SUBMIT_AVATAR_FAILED
} from '../../../src/store/user/avatar/types';
import {
  USER_CREATE_NEW_CONTENT_SUCCEEDED,
  USER_CREATE_NEW_CONTENT_FAILED,
  USER_EDIT_CONTENT_SUCCEEDED,
  USER_EDIT_CONTENT_FAILED,
  USER_DELETE_CONTENT_SUCCEEDED,
  USER_DELETE_CONTENT_FAILED,
} from '../../../src/store/user/content/types';
import {
  USER_CREATE_NEW_PRIVATE_EQUIPMENT_SUCCEEDED,
  USER_CREATE_NEW_PRIVATE_EQUIPMENT_FAILED,
  USER_EDIT_PRIVATE_EQUIPMENT_SUCCEEDED,
  USER_EDIT_PRIVATE_EQUIPMENT_FAILED,
  USER_DELETE_PRIVATE_EQUIPMENT_SUCCEEDED,
  USER_DELETE_PRIVATE_EQUIPMENT_FAILED
} from '../../../src/store/user/equipment/types';
import {
  USER_FAVORITE_RECIPE_SUCCEEDED,
  USER_FAVORITE_RECIPE_FAILED,
  USER_UNFAVORITE_RECIPE_SUCCEEDED,
  USER_UNFAVORITE_RECIPE_FAILED
} from '../../../src/store/user/favorite/types';
import {
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
  USER_UNBLOCK_USER_FAILED
} from '../../../src/store/user/friendship/types';
import {
  USER_CREATE_NEW_PRIVATE_INGREDIENT_SUCCEEDED,
  USER_CREATE_NEW_PRIVATE_INGREDIENT_FAILED,
  USER_EDIT_PRIVATE_INGREDIENT_SUCCEEDED,
  USER_EDIT_PRIVATE_INGREDIENT_FAILED,
  USER_DELETE_PRIVATE_INGREDIENT_SUCCEEDED,
  USER_DELETE_PRIVATE_INGREDIENT_FAILED
} from '../../../src/store/user/ingredient/types';
import {
  USER_CREATE_NEW_PLAN_SUCCEEDED,
  USER_CREATE_NEW_PLAN_FAILED,
  USER_EDIT_PLAN_SUCCEEDED,
  USER_EDIT_PLAN_FAILED,
  USER_DELETE_PLAN_SUCCEEDED,
  USER_DELETE_PLAN_FAILED
} from '../../../src/store/user/plan/types';
import {
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
  USER_DISOWN_PUBLIC_RECIPE_FAILED
} from '../../../src/store/user/recipe/types';
import {
  USER_SAVE_RECIPE_SUCCEEDED,
  USER_SAVE_RECIPE_FAILED,
  USER_UNSAVE_RECIPE_SUCCEEDED,
  USER_UNSAVE_RECIPE_FAILED
} from '../../../src/store/user/save/types';
import { userReducer } from '../../../src/store/user/reducer';
import { USER_MESSAGE_CLEAR } from '../../../src/store/user/types';

const message = 'Message.';

const initialState = {message: ''};

describe('user reducer', () => {
  it('returns initial state', () => {
    expect(userReducer(undefined, {
      type: USER_CREATE_NEW_PRIVATE_EQUIPMENT_SUCCEEDED,
      message
    })).toEqual({message});
  });

  /*

  Avatar

  */

  it('handles actions of type USER_SUBMIT_AVATAR_SUCCEEDED', () => {
    expect(userReducer(initialState, {
      type: USER_SUBMIT_AVATAR_SUCCEEDED,
      message
    })).toEqual({message});
  });

  it('handles actions of type USER_SUBMIT_AVATAR_FAILED', () => {
    expect(userReducer(initialState, {
      type: USER_SUBMIT_AVATAR_FAILED,
      message
    })).toEqual({message});
  });

  /*

  Content

  */

  it('handles actions of type USER_CREATE_NEW_CONTENT_SUCCEEDED', () => {
    expect(userReducer(initialState, {
      type: USER_CREATE_NEW_CONTENT_SUCCEEDED,
      message
    })).toEqual({message});
  });

  it('handles actions of type USER_CREATE_NEW_CONTENT_FAILED', () => {
    expect(userReducer(initialState, {
      type: USER_CREATE_NEW_CONTENT_FAILED,
      message
    })).toEqual({message});
  });

  it('handles actions of type USER_EDIT_CONTENT_SUCCEEDED', () => {
    expect(userReducer(initialState, {
      type: USER_EDIT_CONTENT_SUCCEEDED,
      message
    })).toEqual({message});
  });

  it('handles actions of type USER_EDIT_CONTENT_FAILED', () => {
    expect(userReducer(initialState, {
      type: USER_EDIT_CONTENT_FAILED,
      message
    })).toEqual({message});
  });

  it('handles actions of type USER_DELETE_CONTENT_SUCCEEDED', () => {
    expect(userReducer(initialState, {
      type: USER_DELETE_CONTENT_SUCCEEDED,
      message
    })).toEqual({message});
  });

  it('handles actions of type USER_DELETE_CONTENT_FAILED', () => {
    expect(userReducer(initialState, {
      type: USER_DELETE_CONTENT_FAILED,
      message
    })).toEqual({message});
  });

  /*

  Equipment

  */

  it('handles actions of type USER_CREATE_NEW_PRIVATE_EQUIPMENT_SUCCEEDED', () => {
    expect(userReducer(initialState, {
      type: USER_CREATE_NEW_PRIVATE_EQUIPMENT_SUCCEEDED,
      message
    })).toEqual({message});
  });

  it('handles actions of type USER_CREATE_NEW_PRIVATE_EQUIPMENT_FAILED', () => {
    expect(userReducer(initialState, {
      type: USER_CREATE_NEW_PRIVATE_EQUIPMENT_FAILED,
      message
    })).toEqual({message});
  });

  it('handles actions of type USER_EDIT_PRIVATE_EQUIPMENT_SUCCEEDED', () => {
    expect(userReducer(initialState, {
      type: USER_EDIT_PRIVATE_EQUIPMENT_SUCCEEDED,
      message
    })).toEqual({message});
  });

  it('handles actions of type USER_EDIT_PRIVATE_EQUIPMENT_FAILED', () => {
    expect(userReducer(initialState, {
      type: USER_EDIT_PRIVATE_EQUIPMENT_FAILED,
      message
    })).toEqual({message});
  });

  it('handles actions of type USER_DELETE_PRIVATE_EQUIPMENT_SUCCEEDED', () => {
    expect(userReducer(initialState, {
      type: USER_DELETE_PRIVATE_EQUIPMENT_SUCCEEDED,
      message
    })).toEqual({message});
  });

  it('handles actions of type USER_DELETE_PRIVATE_EQUIPMENT_FAILED', () => {
    expect(userReducer(initialState, {
      type: USER_DELETE_PRIVATE_EQUIPMENT_FAILED,
      message
    })).toEqual({message});
  });

  /*

  Favorite

  */
  
  it('handles actions of type USER_FAVORITE_RECIPE_SUCCEEDED', () => {
    expect(userReducer(initialState, {
      type: USER_FAVORITE_RECIPE_SUCCEEDED,
      message
    })).toEqual({message});
  });

  it('handles actions of type USER_FAVORITE_RECIPE_FAILED', () => {
    expect(userReducer(initialState, {
      type: USER_FAVORITE_RECIPE_FAILED,
      message
    })).toEqual({message});
  });

  it('handles actions of type USER_UNFAVORITE_RECIPE_SUCCEEDED', () => {
    expect(userReducer(initialState, {
      type: USER_UNFAVORITE_RECIPE_SUCCEEDED,
      message
    })).toEqual({message});
  });

  it('handles actions of type USER_UNFAVORITE_RECIPE_FAILED', () => {
    expect(userReducer(initialState, {
      type: USER_UNFAVORITE_RECIPE_FAILED,
      message
    })).toEqual({message});
  });

  /*

  Friendship
  
  */

  it('handles actions of type USER_REQUEST_FRIENDSHIP_SUCCEEDED', () => {
    expect(userReducer(initialState, {
      type: USER_REQUEST_FRIENDSHIP_SUCCEEDED,
      message
    })).toEqual({message});
  });

  it('handles actions of type USER_REQUEST_FRIENDSHIP_FAILED', () => {
    expect(userReducer(initialState, {
      type: USER_REQUEST_FRIENDSHIP_FAILED,
      message
    })).toEqual({message});
  });

  it('handles actions of type USER_ACCEPT_FRIENDSHIP_SUCCEEDED', () => {
    expect(userReducer(initialState, {
      type: USER_ACCEPT_FRIENDSHIP_SUCCEEDED,
      message
    })).toEqual({message});
  });

  it('handles actions of type USER_ACCEPT_FRIENDSHIP_FAILED', () => {
    expect(userReducer(initialState, {
      type: USER_ACCEPT_FRIENDSHIP_FAILED,
      message
    })).toEqual({message});
  });

  it('handles actions of type USER_REJECT_FRIENDSHIP_SUCCEEDED', () => {
    expect(userReducer(initialState, {
      type: USER_REJECT_FRIENDSHIP_SUCCEEDED,
      message
    })).toEqual({message});
  });

  it('handles actions of type USER_REJECT_FRIENDSHIP_FAILED', () => {
    expect(userReducer(initialState, {
      type: USER_REJECT_FRIENDSHIP_FAILED,
      message
    })).toEqual({message});
  });

  it('handles actions of type USER_DELETE_FRIENDSHIP_SUCCEEDED', () => {
    expect(userReducer(initialState, {
      type: USER_DELETE_FRIENDSHIP_SUCCEEDED,
      message
    })).toEqual({message});
  });

  it('handles actions of type USER_DELETE_FRIENDSHIP_FAILED', () => {
    expect(userReducer(initialState, {
      type: USER_DELETE_FRIENDSHIP_FAILED,
      message
    })).toEqual({message});
  });

  it('handles actions of type USER_BLOCK_USER_SUCCEEDED', () => {
    expect(userReducer(initialState, {
      type: USER_BLOCK_USER_SUCCEEDED,
      message
    })).toEqual({message});
  });

  it('handles actions of type USER_BLOCK_USER_FAILED', () => {
    expect(userReducer(initialState, {
      type: USER_BLOCK_USER_FAILED,
      message
    })).toEqual({message});
  });

  it('handles actions of type USER_UNBLOCK_USER_SUCCEEDED', () => {
    expect(userReducer(initialState, {
      type: USER_UNBLOCK_USER_SUCCEEDED,
      message
    })).toEqual({message});
  });

  it('handles actions of type USER_UNBLOCK_USER_FAILED', () => {
    expect(userReducer(initialState, {
      type: USER_UNBLOCK_USER_FAILED,
      message
    })).toEqual({message});
  });

  /*

  Ingredient
  
  */

  it('handles actions of type USER_CREATE_NEW_PRIVATE_INGREDIENT_SUCCEEDED', () => {
    expect(userReducer(initialState, {
      type: USER_CREATE_NEW_PRIVATE_INGREDIENT_SUCCEEDED,
      message
    })).toEqual({message});
  });

  it('handles actions of type USER_CREATE_NEW_PRIVATE_INGREDIENT_FAILED', () => {
    expect(userReducer(initialState, {
      type: USER_CREATE_NEW_PRIVATE_INGREDIENT_FAILED,
      message
    })).toEqual({message});
  });

  it('handles actions of type USER_EDIT_PRIVATE_INGREDIENT_SUCCEEDED', () => {
    expect(userReducer(initialState, {
      type: USER_EDIT_PRIVATE_INGREDIENT_SUCCEEDED,
      message
    })).toEqual({message});
  });

  it('handles actions of type USER_EDIT_PRIVATE_INGREDIENT_FAILED', () => {
    expect(userReducer(initialState, {
      type: USER_EDIT_PRIVATE_INGREDIENT_FAILED,
      message
    })).toEqual({message});
  });

  it('handles actions of type USER_DELETE_PRIVATE_INGREDIENT_SUCCEEDED', () => {
    expect(userReducer(initialState, {
      type: USER_DELETE_PRIVATE_INGREDIENT_SUCCEEDED,
      message
    })).toEqual({message});
  });

  it('handles actions of type USER_DELETE_PRIVATE_INGREDIENT_FAILED', () => {
    expect(userReducer(initialState, {
      type: USER_DELETE_PRIVATE_INGREDIENT_FAILED,
      message
    })).toEqual({message});
  });

  /*

  Plan

  */

  it('handles actions of type USER_CREATE_NEW_PLAN_SUCCEEDED', () => {
    expect(userReducer(initialState, {
      type: USER_CREATE_NEW_PLAN_SUCCEEDED,
      message
    })).toEqual({message});
  });

  it('handles actions of type USER_CREATE_NEW_PLAN_FAILED', () => {
    expect(userReducer(initialState, {
      type: USER_CREATE_NEW_PLAN_FAILED,
      message
    })).toEqual({message});
  });

  it('handles actions of type USER_EDIT_PLAN_SUCCEEDED', () => {
    expect(userReducer(initialState, {
      type: USER_EDIT_PLAN_SUCCEEDED,
      message
    })).toEqual({message});
  });

  it('handles actions of type USER_EDIT_PLAN_FAILED', () => {
    expect(userReducer(initialState, {
      type: USER_EDIT_PLAN_FAILED,
      message
    })).toEqual({message});
  });

  it('handles actions of type USER_DELETE_PLAN_SUCCEEDED', () => {
    expect(userReducer(initialState, {
      type: USER_DELETE_PLAN_SUCCEEDED,
      message
    })).toEqual({message});
  });

  it('handles actions of type USER_DELETE_PLAN_FAILED', () => {
    expect(userReducer(initialState, {
      type: USER_DELETE_PLAN_FAILED,
      message
    })).toEqual({message});
  });

  /*

  Recipe

  */

  it('handles actions of type USER_CREATE_NEW_PRIVATE_RECIPE_SUCCEEDED', () => {
    expect(userReducer(initialState, {
      type: USER_CREATE_NEW_PRIVATE_RECIPE_SUCCEEDED,
      message
    })).toEqual({message});
  });

  it('handles actions of type USER_CREATE_NEW_PRIVATE_RECIPE_FAILED', () => {
    expect(userReducer(initialState, {
      type: USER_CREATE_NEW_PRIVATE_RECIPE_FAILED,
      message
    })).toEqual({message});
  });

  it('handles actions of type USER_EDIT_PRIVATE_RECIPE_SUCCEEDED', () => {
    expect(userReducer(initialState, {
      type: USER_EDIT_PRIVATE_RECIPE_SUCCEEDED,
      message
    })).toEqual({message});
  });

  it('handles actions of type USER_EDIT_PRIVATE_RECIPE_FAILED', () => {
    expect(userReducer(initialState, {
      type: USER_EDIT_PRIVATE_RECIPE_FAILED,
      message
    })).toEqual({message});
  });

  it('handles actions of type USER_DELETE_PRIVATE_RECIPE_SUCCEEDED', () => {
    expect(userReducer(initialState, {
      type: USER_DELETE_PRIVATE_RECIPE_SUCCEEDED,
      message
    })).toEqual({message});
  });

  it('handles actions of type USER_DELETE_PRIVATE_RECIPE_FAILED', () => {
    expect(userReducer(initialState, {
      type: USER_DELETE_PRIVATE_RECIPE_FAILED,
      message
    })).toEqual({message});
  });

  

  it('handles actions of type USER_CREATE_NEW_PUBLIC_RECIPE_SUCCEEDED', () => {
    expect(userReducer(initialState, {
      type: USER_CREATE_NEW_PUBLIC_RECIPE_SUCCEEDED,
      message
    })).toEqual({message});
  });

  it('handles actions of type USER_CREATE_NEW_PUBLIC_RECIPE_FAILED', () => {
    expect(userReducer(initialState, {
      type: USER_CREATE_NEW_PUBLIC_RECIPE_FAILED,
      message
    })).toEqual({message});
  });

  it('handles actions of type USER_EDIT_PUBLIC_RECIPE_SUCCEEDED', () => {
    expect(userReducer(initialState, {
      type: USER_EDIT_PUBLIC_RECIPE_SUCCEEDED,
      message
    })).toEqual({message});
  });

  it('handles actions of type USER_EDIT_PUBLIC_RECIPE_FAILED', () => {
    expect(userReducer(initialState, {
      type: USER_EDIT_PUBLIC_RECIPE_FAILED,
      message
    })).toEqual({message});
  });

  it('handles actions of type USER_DISOWN_PUBLIC_RECIPE_SUCCEEDED', () => {
    expect(userReducer(initialState, {
      type: USER_DISOWN_PUBLIC_RECIPE_SUCCEEDED,
      message
    })).toEqual({message});
  });

  it('handles actions of type USER_DISOWN_PUBLIC_RECIPE_FAILED', () => {
    expect(userReducer(initialState, {
      type: USER_DISOWN_PUBLIC_RECIPE_FAILED,
      message
    })).toEqual({message});
  });

  /*

  Save

  */

  it('handles actions of type USER_SAVE_RECIPE_SUCCEEDED', () => {
    expect(userReducer(initialState, {
      type: USER_SAVE_RECIPE_SUCCEEDED,
      message
    })).toEqual({message});
  });

  it('handles actions of type USER_SAVE_RECIPE_FAILED', () => {
    expect(userReducer(initialState, {
      type: USER_SAVE_RECIPE_FAILED,
      message
    })).toEqual({message});
  });

  it('handles actions of type USER_UNSAVE_RECIPE_SUCCEEDED', () => {
    expect(userReducer(initialState, {
      type: USER_UNSAVE_RECIPE_SUCCEEDED,
      message
    })).toEqual({message});
  });

  it('handles actions of type USER_UNSAVE_RECIPE_FAILED', () => {
    expect(userReducer(initialState, {
      type: USER_UNSAVE_RECIPE_FAILED,
      message
    })).toEqual({message});
  });

  /*

  Clear User Feedback Message

  */

  it('handles action of type USER_MESSAGE_CLEAR', () => {
    const beforeState = {message};

    expect(userReducer(beforeState, {type: USER_MESSAGE_CLEAR}))
      .toEqual(initialState);
  });
});