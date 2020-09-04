import { 
  STAFF_CREATE_NEW_CONTENT_SUCCEEDED,
  STAFF_CREATE_NEW_CONTENT_FAILED,
  STAFF_EDIT_CONTENT_SUCCEEDED,
  STAFF_EDIT_CONTENT_FAILED,
  STAFF_DELETE_CONTENT_SUCCEEDED,
  STAFF_DELETE_CONTENT_FAILED
} from './content/types';
import {
  STAFF_CREATE_NEW_EQUIPMENT_SUCCEEDED,
  STAFF_CREATE_NEW_EQUIPMENT_FAILED,
  STAFF_EDIT_EQUIPMENT_SUCCEEDED,
  STAFF_EDIT_EQUIPMENT_FAILED,
  STAFF_DELETE_EQUIPMENT_SUCCEEDED,
  STAFF_DELETE_EQUIPMENT_FAILED
} from './equipment/types';
import {
  STAFF_CREATE_NEW_INGREDIENT_SUCCEEDED,
  STAFF_CREATE_NEW_INGREDIENT_FAILED,
  STAFF_EDIT_INGREDIENT_SUCCEEDED,
  STAFF_EDIT_INGREDIENT_FAILED,
  STAFF_DELETE_INGREDIENT_SUCCEEDED,
  STAFF_DELETE_INGREDIENT_FAILED,
} from './ingredient/types';
import {
  STAFF_CREATE_NEW_RECIPE_SUCCEEDED,
  STAFF_CREATE_NEW_RECIPE_FAILED,
  STAFF_EDIT_RECIPE_SUCCEEDED,
  STAFF_EDIT_RECIPE_FAILED,
  STAFF_DELETE_RECIPE_SUCCEEDED,
  STAFF_DELETE_RECIPE_FAILED,
} from './recipe/types';
import { staffReducer } from './reducer';
import { STAFF_MESSAGE_CLEAR } from './types';

const message = 'Message.';

const initialState = {message: ''};

describe('staff reducer', () => {
  it('returns initial state', () => {
    expect(staffReducer(undefined, {
      type: STAFF_CREATE_NEW_EQUIPMENT_SUCCEEDED,
      message
    })).toEqual({message});
  });

  /*

  Content

  */

  it('handles actions of type STAFF_CREATE_NEW_CONTENT_SUCCEEDED', () => {
    expect(staffReducer(initialState, {
      type: STAFF_CREATE_NEW_CONTENT_SUCCEEDED,
      message
    })).toEqual({message});
  });

  it('handles actions of type STAFF_CREATE_NEW_CONTENT_FAILED', () => {
    expect(staffReducer(initialState, {
      type: STAFF_CREATE_NEW_CONTENT_FAILED,
      message
    })).toEqual({message});
  });

  it('handles actions of type STAFF_EDIT_CONTENT_SUCCEEDED', () => {
    expect(staffReducer(initialState, {
      type: STAFF_EDIT_CONTENT_SUCCEEDED,
      message
    })).toEqual({message});
  });

  it('handles actions of type STAFF_EDIT_CONTENT_FAILED', () => {
    expect(staffReducer(initialState, {
      type: STAFF_EDIT_CONTENT_FAILED,
      message
    })).toEqual({message});
  });

  it('handles actions of type STAFF_DELETE_CONTENT_SUCCEEDED', () => {
    expect(staffReducer(initialState, {
      type: STAFF_DELETE_CONTENT_SUCCEEDED,
      message
    })).toEqual({message});
  });

  it('handles actions of type STAFF_DELETE_CONTENT_FAILED', () => {
    expect(staffReducer(initialState, {
      type: STAFF_DELETE_CONTENT_FAILED,
      message
    })).toEqual({message});
  });

  /*

  Equipment

  */

  it('handles actions of type STAFF_CREATE_NEW_EQUIPMENT_SUCCEEDED', () => {
    expect(staffReducer(initialState, {
      type: STAFF_CREATE_NEW_EQUIPMENT_SUCCEEDED,
      message
    })).toEqual({message});
  });

  it('handles actions of type STAFF_CREATE_NEW_EQUIPMENT_FAILED', () => {
    expect(staffReducer(initialState, {
      type: STAFF_CREATE_NEW_EQUIPMENT_FAILED,
      message
    })).toEqual({message});
  });

  it('handles actions of type STAFF_EDIT_EQUIPMENT_SUCCEEDED', () => {
    expect(staffReducer(initialState, {
      type: STAFF_EDIT_EQUIPMENT_SUCCEEDED,
      message
    })).toEqual({message});
  });

  it('handles actions of type STAFF_EDIT_EQUIPMENT_FAILED', () => {
    expect(staffReducer(initialState, {
      type: STAFF_EDIT_EQUIPMENT_FAILED,
      message
    })).toEqual({message});
  });

  it('handles actions of type STAFF_DELETE_EQUIPMENT_SUCCEEDED', () => {
    expect(staffReducer(initialState, {
      type: STAFF_DELETE_EQUIPMENT_SUCCEEDED,
      message
    })).toEqual({message});
  });

  it('handles actions of type STAFF_DELETE_EQUIPMENT_FAILED', () => {
    expect(staffReducer(initialState, {
      type: STAFF_DELETE_EQUIPMENT_FAILED,
      message
    })).toEqual({message});
  });

  /*

  Ingredient

  */

  it('handles actions of type STAFF_CREATE_NEW_INGREDIENT_SUCCEEDED', () => {
    expect(staffReducer(initialState, {
      type: STAFF_CREATE_NEW_INGREDIENT_SUCCEEDED,
      message
    })).toEqual({message});
  });

  it('handles actions of type STAFF_CREATE_NEW_INGREDIENT_FAILED', () => {
    expect(staffReducer(initialState, {
      type: STAFF_CREATE_NEW_INGREDIENT_FAILED,
      message
    })).toEqual({message});
  });

  it('handles actions of type STAFF_EDIT_INGREDIENT_SUCCEEDED', () => {
    expect(staffReducer(initialState, {
      type: STAFF_EDIT_INGREDIENT_SUCCEEDED,
      message
    })).toEqual({message});
  });

  it('handles actions of type STAFF_EDIT_INGREDIENT_FAILED', () => {
    expect(staffReducer(initialState, {
      type: STAFF_EDIT_INGREDIENT_FAILED,
      message
    })).toEqual({message});
  });

  it('handles actions of type STAFF_DELETE_INGREDIENT_SUCCEEDED', () => {
    expect(staffReducer(initialState, {
      type: STAFF_DELETE_INGREDIENT_SUCCEEDED,
      message
    })).toEqual({message});
  });

  it('handles actions of type STAFF_DELETE_INGREDIENT_FAILED', () => {
    expect(staffReducer(initialState, {
      type: STAFF_DELETE_INGREDIENT_FAILED,
      message
    })).toEqual({message});
  });

  /*

  Recipe

  */

  it('handles actions of type STAFF_CREATE_NEW_RECIPE_SUCCEEDED', () => {
    expect(staffReducer(initialState, {
      type: STAFF_CREATE_NEW_RECIPE_SUCCEEDED,
      message
    })).toEqual({message});
  });

  it('handles actions of type STAFF_CREATE_NEW_RECIPE_FAILED', () => {
    expect(staffReducer(initialState, {
      type: STAFF_CREATE_NEW_RECIPE_FAILED,
      message
    })).toEqual({message});
  });

  it('handles actions of type STAFF_EDIT_RECIPE_SUCCEEDED', () => {
    expect(staffReducer(initialState, {
      type: STAFF_EDIT_RECIPE_SUCCEEDED,
      message
    })).toEqual({message});
  });

  it('handles actions of type STAFF_EDIT_RECIPE_FAILED', () => {
    expect(staffReducer(initialState, {
      type: STAFF_EDIT_RECIPE_FAILED,
      message
    })).toEqual({message});
  });

  it('handles actions of type STAFF_DELETE_RECIPE_SUCCEEDED', () => {
    expect(staffReducer(initialState, {
      type: STAFF_DELETE_RECIPE_SUCCEEDED,
      message
    })).toEqual({message});
  });

  it('handles actions of type STAFF_DELETE_RECIPE_FAILED', () => {
    expect(staffReducer(initialState, {
      type: STAFF_DELETE_RECIPE_FAILED,
      message
    })).toEqual({message});
  });

  /*

  Clear Staff Feedback Message

  */

  it('handles action of type STAFF_MESSAGE_CLEAR', () => {
    const beforeState = {message};

    expect(staffReducer(beforeState, {type: STAFF_MESSAGE_CLEAR}))
      .toEqual(initialState);
  });
});