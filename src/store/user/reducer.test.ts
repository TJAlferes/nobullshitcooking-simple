import {
  USER_CREATE_NEW_PRIVATE_EQUIPMENT_SUCCEEDED,
  USER_CREATE_NEW_PRIVATE_EQUIPMENT_FAILED,
  USER_EDIT_PRIVATE_EQUIPMENT_SUCCEEDED,
  USER_EDIT_PRIVATE_EQUIPMENT_FAILED,
  USER_DELETE_PRIVATE_EQUIPMENT_SUCCEEDED,
  USER_DELETE_PRIVATE_EQUIPMENT_FAILED
} from './equipment/types';

import {
  USER_CREATE_NEW_PRIVATE_INGREDIENT_SUCCEEDED,
  USER_CREATE_NEW_PRIVATE_INGREDIENT_FAILED,
  USER_EDIT_PRIVATE_INGREDIENT_SUCCEEDED,
  USER_EDIT_PRIVATE_INGREDIENT_FAILED,
  USER_DELETE_PRIVATE_INGREDIENT_SUCCEEDED,
  USER_DELETE_PRIVATE_INGREDIENT_FAILED
} from './ingredient/types';

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
} from './recipe/types';

import {
  USER_CREATE_NEW_PLAN_SUCCEEDED,
  USER_CREATE_NEW_PLAN_FAILED,
  USER_EDIT_PLAN_SUCCEEDED,
  USER_EDIT_PLAN_FAILED,
  USER_DELETE_PLAN_SUCCEEDED,
  USER_DELETE_PLAN_FAILED
} from './plan/types';
  
import {
  USER_FAVORITE_RECIPE_SUCCEEDED,
  USER_FAVORITE_RECIPE_FAILED,
  USER_UNFAVORITE_RECIPE_SUCCEEDED,
  USER_UNFAVORITE_RECIPE_FAILED
} from './favorite/types';

import {
  USER_SAVE_RECIPE_SUCCEEDED,
  USER_SAVE_RECIPE_FAILED,
  USER_UNSAVE_RECIPE_SUCCEEDED,
  USER_UNSAVE_RECIPE_FAILED
} from './save/types';

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
} from './friendship/types';

import {
  USER_SUBMIT_AVATAR_SUCCEEDED,
  USER_SUBMIT_AVATAR_FAILED
} from './avatar/types';

import {
  USER_MESSAGE_CLEAR
} from './types';

import userReducer from './reducer';

const initialState = {message: ''};

// any way to DRY this up?

describe('the user reducer', () => {
  it('returns initial state', () => {
    const actual = userReducer(undefined, {
      type: USER_CREATE_NEW_PRIVATE_EQUIPMENT_SUCCEEDED,
      message: 'Message.'
    });
    const expected = {message: 'Message.'};
    expect(actual).toEqual(expected);
  });



  it('handles actions of type USER_CREATE_NEW_PRIVATE_EQUIPMENT_SUCCEEDED', () => {
    const actual = userReducer(initialState, {
      type: USER_CREATE_NEW_PRIVATE_EQUIPMENT_SUCCEEDED,
      message: 'Message.'
    });
    const expected = {message: 'Message.'};
    expect(actual).toEqual(expected);
  });

  it('handles actions of type USER_CREATE_NEW_PRIVATE_EQUIPMENT_FAILED', () => {
    const actual = userReducer(initialState, {
      type: USER_CREATE_NEW_PRIVATE_EQUIPMENT_FAILED,
      message: 'Message.'
    });
    const expected = {message: 'Message.'};
    expect(actual).toEqual(expected);
  });

  it('handles actions of type USER_EDIT_PRIVATE_EQUIPMENT_SUCCEEDED', () => {
    const actual = userReducer(initialState, {
      type: USER_EDIT_PRIVATE_EQUIPMENT_SUCCEEDED,
      message: 'Message.'
    });
    const expected = {message: 'Message.'};
    expect(actual).toEqual(expected);
  });

  it('handles actions of type USER_EDIT_PRIVATE_EQUIPMENT_FAILED', () => {
    const actual = userReducer(initialState, {
      type: USER_EDIT_PRIVATE_EQUIPMENT_FAILED,
      message: 'Message.'
    });
    const expected = {message: 'Message.'};
    expect(actual).toEqual(expected);
  });

  it('handles actions of type USER_DELETE_PRIVATE_EQUIPMENT_SUCCEEDED', () => {
    const actual = userReducer(initialState, {
      type: USER_DELETE_PRIVATE_EQUIPMENT_SUCCEEDED,
      message: 'Message.'
    });
    const expected = {message: 'Message.'};
    expect(actual).toEqual(expected);
  });

  it('handles actions of type USER_DELETE_PRIVATE_EQUIPMENT_FAILED', () => {
    const actual = userReducer(initialState, {
      type: USER_DELETE_PRIVATE_EQUIPMENT_FAILED,
      message: 'Message.'
    });
    const expected = {message: 'Message.'};
    expect(actual).toEqual(expected);
  });

  

  it('handles actions of type USER_CREATE_NEW_PRIVATE_INGREDIENT_SUCCEEDED', () => {
    const actual = userReducer(initialState, {
      type: USER_CREATE_NEW_PRIVATE_INGREDIENT_SUCCEEDED,
      message: 'Message.'
    });
    const expected = {message: 'Message.'};
    expect(actual).toEqual(expected);
  });

  it('handles actions of type USER_CREATE_NEW_PRIVATE_INGREDIENT_FAILED', () => {
    const actual = userReducer(initialState, {
      type: USER_CREATE_NEW_PRIVATE_INGREDIENT_FAILED,
      message: 'Message.'
    });
    const expected = {message: 'Message.'};
    expect(actual).toEqual(expected);
  });

  it('handles actions of type USER_EDIT_PRIVATE_INGREDIENT_SUCCEEDED', () => {
    const actual = userReducer(initialState, {
      type: USER_EDIT_PRIVATE_INGREDIENT_SUCCEEDED,
      message: 'Message.'
    });
    const expected = {message: 'Message.'};
    expect(actual).toEqual(expected);
  });

  it('handles actions of type USER_EDIT_PRIVATE_INGREDIENT_FAILED', () => {
    const actual = userReducer(initialState, {
      type: USER_EDIT_PRIVATE_INGREDIENT_FAILED,
      message: 'Message.'
    });
    const expected = {message: 'Message.'};
    expect(actual).toEqual(expected);
  });

  it('handles actions of type USER_DELETE_PRIVATE_INGREDIENT_SUCCEEDED', () => {
    const actual = userReducer(initialState, {
      type: USER_DELETE_PRIVATE_INGREDIENT_SUCCEEDED,
      message: 'Message.'
    });
    const expected = {message: 'Message.'};
    expect(actual).toEqual(expected);
  });

  it('handles actions of type USER_DELETE_PRIVATE_INGREDIENT_FAILED', () => {
    const actual = userReducer(initialState, {
      type: USER_DELETE_PRIVATE_INGREDIENT_FAILED,
      message: 'Message.'
    });
    const expected = {message: 'Message.'};
    expect(actual).toEqual(expected);
  });



  it('handles actions of type USER_CREATE_NEW_PRIVATE_RECIPE_SUCCEEDED', () => {
    const actual = userReducer(initialState, {
      type: USER_CREATE_NEW_PRIVATE_RECIPE_SUCCEEDED,
      message: 'Message.'
    });
    const expected = {message: 'Message.'};
    expect(actual).toEqual(expected);
  });

  it('handles actions of type USER_CREATE_NEW_PRIVATE_RECIPE_FAILED', () => {
    const actual = userReducer(initialState, {
      type: USER_CREATE_NEW_PRIVATE_RECIPE_FAILED,
      message: 'Message.'
    });
    const expected = {message: 'Message.'};
    expect(actual).toEqual(expected);
  });

  it('handles actions of type USER_EDIT_PRIVATE_RECIPE_SUCCEEDED', () => {
    const actual = userReducer(initialState, {
      type: USER_EDIT_PRIVATE_RECIPE_SUCCEEDED,
      message: 'Message.'
    });
    const expected = {message: 'Message.'};
    expect(actual).toEqual(expected);
  });

  it('handles actions of type USER_EDIT_PRIVATE_RECIPE_FAILED', () => {
    const actual = userReducer(initialState, {
      type: USER_EDIT_PRIVATE_RECIPE_FAILED,
      message: 'Message.'
    });
    const expected = {message: 'Message.'};
    expect(actual).toEqual(expected);
  });

  it('handles actions of type USER_DELETE_PRIVATE_RECIPE_SUCCEEDED', () => {
    const actual = userReducer(initialState, {
      type: USER_DELETE_PRIVATE_RECIPE_SUCCEEDED,
      message: 'Message.'
    });
    const expected = {message: 'Message.'};
    expect(actual).toEqual(expected);
  });

  it('handles actions of type USER_DELETE_PRIVATE_RECIPE_FAILED', () => {
    const actual = userReducer(initialState, {
      type: USER_DELETE_PRIVATE_RECIPE_FAILED,
      message: 'Message.'
    });
    const expected = {message: 'Message.'};
    expect(actual).toEqual(expected);
  });

  

  it('handles actions of type USER_CREATE_NEW_PUBLIC_RECIPE_SUCCEEDED', () => {
    const actual = userReducer(initialState, {
      type: USER_CREATE_NEW_PUBLIC_RECIPE_SUCCEEDED,
      message: 'Message.'
    });
    const expected = {message: 'Message.'};
    expect(actual).toEqual(expected);
  });

  it('handles actions of type USER_CREATE_NEW_PUBLIC_RECIPE_FAILED', () => {
    const actual = userReducer(initialState, {
      type: USER_CREATE_NEW_PUBLIC_RECIPE_FAILED,
      message: 'Message.'
    });
    const expected = {message: 'Message.'};
    expect(actual).toEqual(expected);
  });

  it('handles actions of type USER_EDIT_PUBLIC_RECIPE_SUCCEEDED', () => {
    const actual = userReducer(initialState, {
      type: USER_EDIT_PUBLIC_RECIPE_SUCCEEDED,
      message: 'Message.'
    });
    const expected = {message: 'Message.'};
    expect(actual).toEqual(expected);
  });

  it('handles actions of type USER_EDIT_PUBLIC_RECIPE_FAILED', () => {
    const actual = userReducer(initialState, {
      type: USER_EDIT_PUBLIC_RECIPE_FAILED,
      message: 'Message.'
    });
    const expected = {message: 'Message.'};
    expect(actual).toEqual(expected);
  });

  it('handles actions of type USER_DISOWN_PUBLIC_RECIPE_SUCCEEDED', () => {
    const actual = userReducer(initialState, {
      type: USER_DISOWN_PUBLIC_RECIPE_SUCCEEDED,
      message: 'Message.'
    });
    const expected = {message: 'Message.'};
    expect(actual).toEqual(expected);
  });

  it('handles actions of type USER_DISOWN_PUBLIC_RECIPE_FAILED', () => {
    const actual = userReducer(initialState, {
      type: USER_DISOWN_PUBLIC_RECIPE_FAILED,
      message: 'Message.'
    });
    const expected = {message: 'Message.'};
    expect(actual).toEqual(expected);
  });



  it('handles actions of type USER_CREATE_NEW_PLAN_SUCCEEDED', () => {
    const actual = userReducer(initialState, {
      type: USER_CREATE_NEW_PLAN_SUCCEEDED,
      message: 'Message.'
    });
    const expected = {message: 'Message.'};
    expect(actual).toEqual(expected);
  });

  it('handles actions of type USER_CREATE_NEW_PLAN_FAILED', () => {
    const actual = userReducer(initialState, {
      type: USER_CREATE_NEW_PLAN_FAILED,
      message: 'Message.'
    });
    const expected = {message: 'Message.'};
    expect(actual).toEqual(expected);
  });

  it('handles actions of type USER_EDIT_PLAN_SUCCEEDED', () => {
    const actual = userReducer(initialState, {
      type: USER_EDIT_PLAN_SUCCEEDED,
      message: 'Message.'
    });
    const expected = {message: 'Message.'};
    expect(actual).toEqual(expected);
  });

  it('handles actions of type USER_EDIT_PLAN_FAILED', () => {
    const actual = userReducer(initialState, {
      type: USER_EDIT_PLAN_FAILED,
      message: 'Message.'
    });
    const expected = {message: 'Message.'};
    expect(actual).toEqual(expected);
  });

  it('handles actions of type USER_DELETE_PLAN_SUCCEEDED', () => {
    const actual = userReducer(initialState, {
      type: USER_DELETE_PLAN_SUCCEEDED,
      message: 'Message.'
    });
    const expected = {message: 'Message.'};
    expect(actual).toEqual(expected);
  });

  it('handles actions of type USER_DELETE_PLAN_FAILED', () => {
    const actual = userReducer(initialState, {
      type: USER_DELETE_PLAN_FAILED,
      message: 'Message.'
    });
    const expected = {message: 'Message.'};
    expect(actual).toEqual(expected);
  });

  

  it('handles actions of type USER_FAVORITE_RECIPE_SUCCEEDED', () => {
    const actual = userReducer(initialState, {
      type: USER_FAVORITE_RECIPE_SUCCEEDED,
      message: 'Message.'
    });
    const expected = {message: 'Message.'};
    expect(actual).toEqual(expected);
  });

  it('handles actions of type USER_FAVORITE_RECIPE_FAILED', () => {
    const actual = userReducer(initialState, {
      type: USER_FAVORITE_RECIPE_FAILED,
      message: 'Message.'
    });
    const expected = {message: 'Message.'};
    expect(actual).toEqual(expected);
  });

  it('handles actions of type USER_UNFAVORITE_RECIPE_SUCCEEDED', () => {
    const actual = userReducer(initialState, {
      type: USER_UNFAVORITE_RECIPE_SUCCEEDED,
      message: 'Message.'
    });
    const expected = {message: 'Message.'};
    expect(actual).toEqual(expected);
  });

  it('handles actions of type USER_UNFAVORITE_RECIPE_FAILED', () => {
    const actual = userReducer(initialState, {
      type: USER_UNFAVORITE_RECIPE_FAILED,
      message: 'Message.'
    });
    const expected = {message: 'Message.'};
    expect(actual).toEqual(expected);
  });



  it('handles actions of type USER_SAVE_RECIPE_SUCCEEDED', () => {
    const actual = userReducer(initialState, {
      type: USER_SAVE_RECIPE_SUCCEEDED,
      message: 'Message.'
    });
    const expected = {message: 'Message.'};
    expect(actual).toEqual(expected);
  });

  it('handles actions of type USER_SAVE_RECIPE_FAILED', () => {
    const actual = userReducer(initialState, {
      type: USER_SAVE_RECIPE_FAILED,
      message: 'Message.'
    });
    const expected = {message: 'Message.'};
    expect(actual).toEqual(expected);
  });

  it('handles actions of type USER_UNSAVE_RECIPE_SUCCEEDED', () => {
    const actual = userReducer(initialState, {
      type: USER_UNSAVE_RECIPE_SUCCEEDED,
      message: 'Message.'
    });
    const expected = {message: 'Message.'};
    expect(actual).toEqual(expected);
  });

  it('handles actions of type USER_UNSAVE_RECIPE_FAILED', () => {
    const actual = userReducer(initialState, {
      type: USER_UNSAVE_RECIPE_FAILED,
      message: 'Message.'
    });
    const expected = {message: 'Message.'};
    expect(actual).toEqual(expected);
  });



  it('handles actions of type USER_REQUEST_FRIENDSHIP_SUCCEEDED', () => {
    const actual = userReducer(initialState, {
      type: USER_REQUEST_FRIENDSHIP_SUCCEEDED,
      message: 'Message.'
    });
    const expected = {message: 'Message.'};
    expect(actual).toEqual(expected);
  });

  it('handles actions of type USER_REQUEST_FRIENDSHIP_FAILED', () => {
    const actual = userReducer(initialState, {
      type: USER_REQUEST_FRIENDSHIP_FAILED,
      message: 'Message.'
    });
    const expected = {message: 'Message.'};
    expect(actual).toEqual(expected);
  });

  it('handles actions of type USER_ACCEPT_FRIENDSHIP_SUCCEEDED', () => {
    const actual = userReducer(initialState, {
      type: USER_ACCEPT_FRIENDSHIP_SUCCEEDED,
      message: 'Message.'
    });
    const expected = {message: 'Message.'};
    expect(actual).toEqual(expected);
  });

  it('handles actions of type USER_ACCEPT_FRIENDSHIP_FAILED', () => {
    const actual = userReducer(initialState, {
      type: USER_ACCEPT_FRIENDSHIP_FAILED,
      message: 'Message.'
    });
    const expected = {message: 'Message.'};
    expect(actual).toEqual(expected);
  });

  it('handles actions of type USER_REJECT_FRIENDSHIP_SUCCEEDED', () => {
    const actual = userReducer(initialState, {
      type: USER_REJECT_FRIENDSHIP_SUCCEEDED,
      message: 'Message.'
    });
    const expected = {message: 'Message.'};
    expect(actual).toEqual(expected);
  });

  it('handles actions of type USER_REJECT_FRIENDSHIP_FAILED', () => {
    const actual = userReducer(initialState, {
      type: USER_REJECT_FRIENDSHIP_FAILED,
      message: 'Message.'
    });
    const expected = {message: 'Message.'};
    expect(actual).toEqual(expected);
  });

  it('handles actions of type USER_DELETE_FRIENDSHIP_SUCCEEDED', () => {
    const actual = userReducer(initialState, {
      type: USER_DELETE_FRIENDSHIP_SUCCEEDED,
      message: 'Message.'
    });
    const expected = {message: 'Message.'};
    expect(actual).toEqual(expected);
  });

  it('handles actions of type USER_DELETE_FRIENDSHIP_FAILED', () => {
    const actual = userReducer(initialState, {
      type: USER_DELETE_FRIENDSHIP_FAILED,
      message: 'Message.'
    });
    const expected = {message: 'Message.'};
    expect(actual).toEqual(expected);
  });

  it('handles actions of type USER_BLOCK_USER_SUCCEEDED', () => {
    const actual = userReducer(initialState, {
      type: USER_BLOCK_USER_SUCCEEDED,
      message: 'Message.'
    });
    const expected = {message: 'Message.'};
    expect(actual).toEqual(expected);
  });

  it('handles actions of type USER_BLOCK_USER_FAILED', () => {
    const actual = userReducer(initialState, {
      type: USER_BLOCK_USER_FAILED,
      message: 'Message.'
    });
    const expected = {message: 'Message.'};
    expect(actual).toEqual(expected);
  });

  it('handles actions of type USER_UNBLOCK_USER_SUCCEEDED', () => {
    const actual = userReducer(initialState, {
      type: USER_UNBLOCK_USER_SUCCEEDED,
      message: 'Message.'
    });
    const expected = {message: 'Message.'};
    expect(actual).toEqual(expected);
  });

  it('handles actions of type USER_UNBLOCK_USER_FAILED', () => {
    const actual = userReducer(initialState, {
      type: USER_UNBLOCK_USER_FAILED,
      message: 'Message.'
    });
    const expected = {message: 'Message.'};
    expect(actual).toEqual(expected);
  });



  it('handles actions of type USER_SUBMIT_AVATAR_SUCCEEDED', () => {
    const actual = userReducer(initialState, {
      type: USER_SUBMIT_AVATAR_SUCCEEDED,
      message: 'Message.'
    });
    const expected = {message: 'Message.'};
    expect(actual).toEqual(expected);
  });

  it('handles actions of type USER_SUBMIT_AVATAR_FAILED', () => {
    const actual = userReducer(initialState, {
      type: USER_SUBMIT_AVATAR_FAILED,
      message: 'Message.'
    });
    const expected = {message: 'Message.'};
    expect(actual).toEqual(expected);
  });



  it('handles action of type USER_MESSAGE_CLEAR', () => {
    const beforeState = {message: 'Message.'}
    const actual = userReducer(beforeState, {type: USER_MESSAGE_CLEAR});
    const expected = initialState;
    expect(actual).toEqual(expected);
  });
});