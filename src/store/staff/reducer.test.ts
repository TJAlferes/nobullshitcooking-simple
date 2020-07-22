import { staffReducer } from './reducer';
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
import { STAFF_MESSAGE_CLEAR } from './types';

const initialState = {message: ''};

describe('staff reducer', () => {
  it('returns initial state', () => {
    const actual = staffReducer(undefined, {
      type: STAFF_CREATE_NEW_EQUIPMENT_SUCCEEDED,
      message: 'Message.'
    });
    const expected = {message: 'Message.'};
    expect(actual).toEqual(expected);
  });

  /*

  Content

  */

  it('handles actions of type STAFF_CREATE_NEW_CONTENT_SUCCEEDED', () => {
    const actual = staffReducer(initialState, {
      type: STAFF_CREATE_NEW_CONTENT_SUCCEEDED,
      message: 'Message.'
    });
    const expected = {message: 'Message.'};
    expect(actual).toEqual(expected);
  });

  it('handles actions of type STAFF_CREATE_NEW_CONTENT_FAILED', () => {
    const actual = staffReducer(initialState, {
      type: STAFF_CREATE_NEW_CONTENT_FAILED,
      message: 'Message.'
    });
    const expected = {message: 'Message.'};
    expect(actual).toEqual(expected);
  });

  it('handles actions of type STAFF_EDIT_CONTENT_SUCCEEDED', () => {
    const actual = staffReducer(initialState, {
      type: STAFF_EDIT_CONTENT_SUCCEEDED,
      message: 'Message.'
    });
    const expected = {message: 'Message.'};
    expect(actual).toEqual(expected);
  });

  it('handles actions of type STAFF_EDIT_CONTENT_FAILED', () => {
    const actual = staffReducer(initialState, {
      type: STAFF_EDIT_CONTENT_FAILED,
      message: 'Message.'
    });
    const expected = {message: 'Message.'};
    expect(actual).toEqual(expected);
  });

  it('handles actions of type STAFF_DELETE_CONTENT_SUCCEEDED', () => {
    const actual = staffReducer(initialState, {
      type: STAFF_DELETE_CONTENT_SUCCEEDED,
      message: 'Message.'
    });
    const expected = {message: 'Message.'};
    expect(actual).toEqual(expected);
  });

  it('handles actions of type STAFF_DELETE_CONTENT_FAILED', () => {
    const actual = staffReducer(initialState, {
      type: STAFF_DELETE_CONTENT_FAILED,
      message: 'Message.'
    });
    const expected = {message: 'Message.'};
    expect(actual).toEqual(expected);
  });

  /*

  Equipment

  */

  it('handles actions of type STAFF_CREATE_NEW_EQUIPMENT_SUCCEEDED', () => {
    const actual = staffReducer(initialState, {
      type: STAFF_CREATE_NEW_EQUIPMENT_SUCCEEDED,
      message: 'Message.'
    });
    const expected = {message: 'Message.'};
    expect(actual).toEqual(expected);
  });

  it('handles actions of type STAFF_CREATE_NEW_EQUIPMENT_FAILED', () => {
    const actual = staffReducer(initialState, {
      type: STAFF_CREATE_NEW_EQUIPMENT_FAILED,
      message: 'Message.'
    });
    const expected = {message: 'Message.'};
    expect(actual).toEqual(expected);
  });

  it('handles actions of type STAFF_EDIT_EQUIPMENT_SUCCEEDED', () => {
    const actual = staffReducer(initialState, {
      type: STAFF_EDIT_EQUIPMENT_SUCCEEDED,
      message: 'Message.'
    });
    const expected = {message: 'Message.'};
    expect(actual).toEqual(expected);
  });

  it('handles actions of type STAFF_EDIT_EQUIPMENT_FAILED', () => {
    const actual = staffReducer(initialState, {
      type: STAFF_EDIT_EQUIPMENT_FAILED,
      message: 'Message.'
    });
    const expected = {message: 'Message.'};
    expect(actual).toEqual(expected);
  });

  it('handles actions of type STAFF_DELETE_EQUIPMENT_SUCCEEDED', () => {
    const actual = staffReducer(initialState, {
      type: STAFF_DELETE_EQUIPMENT_SUCCEEDED,
      message: 'Message.'
    });
    const expected = {message: 'Message.'};
    expect(actual).toEqual(expected);
  });

  it('handles actions of type STAFF_DELETE_EQUIPMENT_FAILED', () => {
    const actual = staffReducer(initialState, {
      type: STAFF_DELETE_EQUIPMENT_FAILED,
      message: 'Message.'
    });
    const expected = {message: 'Message.'};
    expect(actual).toEqual(expected);
  });

  /*

  Ingredient

  */

  it('handles actions of type STAFF_CREATE_NEW_INGREDIENT_SUCCEEDED', () => {
    const actual = staffReducer(initialState, {
      type: STAFF_CREATE_NEW_INGREDIENT_SUCCEEDED,
      message: 'Message.'
    });
    const expected = {message: 'Message.'};
    expect(actual).toEqual(expected);
  });

  it('handles actions of type STAFF_CREATE_NEW_INGREDIENT_FAILED', () => {
    const actual = staffReducer(initialState, {
      type: STAFF_CREATE_NEW_INGREDIENT_FAILED,
      message: 'Message.'
    });
    const expected = {message: 'Message.'};
    expect(actual).toEqual(expected);
  });

  it('handles actions of type STAFF_EDIT_INGREDIENT_SUCCEEDED', () => {
    const actual = staffReducer(initialState, {
      type: STAFF_EDIT_INGREDIENT_SUCCEEDED,
      message: 'Message.'
    });
    const expected = {message: 'Message.'};
    expect(actual).toEqual(expected);
  });

  it('handles actions of type STAFF_EDIT_INGREDIENT_FAILED', () => {
    const actual = staffReducer(initialState, {
      type: STAFF_EDIT_INGREDIENT_FAILED,
      message: 'Message.'
    });
    const expected = {message: 'Message.'};
    expect(actual).toEqual(expected);
  });

  it('handles actions of type STAFF_DELETE_INGREDIENT_SUCCEEDED', () => {
    const actual = staffReducer(initialState, {
      type: STAFF_DELETE_INGREDIENT_SUCCEEDED,
      message: 'Message.'
    });
    const expected = {message: 'Message.'};
    expect(actual).toEqual(expected);
  });

  it('handles actions of type STAFF_DELETE_INGREDIENT_FAILED', () => {
    const actual = staffReducer(initialState, {
      type: STAFF_DELETE_INGREDIENT_FAILED,
      message: 'Message.'
    });
    const expected = {message: 'Message.'};
    expect(actual).toEqual(expected);
  });

  /*

  Recipe

  */

  it('handles actions of type STAFF_CREATE_NEW_RECIPE_SUCCEEDED', () => {
    const actual = staffReducer(initialState, {
      type: STAFF_CREATE_NEW_RECIPE_SUCCEEDED,
      message: 'Message.'
    });
    const expected = {message: 'Message.'};
    expect(actual).toEqual(expected);
  });

  it('handles actions of type STAFF_CREATE_NEW_RECIPE_FAILED', () => {
    const actual = staffReducer(initialState, {
      type: STAFF_CREATE_NEW_RECIPE_FAILED,
      message: 'Message.'
    });
    const expected = {message: 'Message.'};
    expect(actual).toEqual(expected);
  });

  it('handles actions of type STAFF_EDIT_RECIPE_SUCCEEDED', () => {
    const actual = staffReducer(initialState, {
      type: STAFF_EDIT_RECIPE_SUCCEEDED,
      message: 'Message.'
    });
    const expected = {message: 'Message.'};
    expect(actual).toEqual(expected);
  });

  it('handles actions of type STAFF_EDIT_RECIPE_FAILED', () => {
    const actual = staffReducer(initialState, {
      type: STAFF_EDIT_RECIPE_FAILED,
      message: 'Message.'
    });
    const expected = {message: 'Message.'};
    expect(actual).toEqual(expected);
  });

  it('handles actions of type STAFF_DELETE_RECIPE_SUCCEEDED', () => {
    const actual = staffReducer(initialState, {
      type: STAFF_DELETE_RECIPE_SUCCEEDED,
      message: 'Message.'
    });
    const expected = {message: 'Message.'};
    expect(actual).toEqual(expected);
  });

  it('handles actions of type STAFF_DELETE_RECIPE_FAILED', () => {
    const actual = staffReducer(initialState, {
      type: STAFF_DELETE_RECIPE_FAILED,
      message: 'Message.'
    });
    const expected = {message: 'Message.'};
    expect(actual).toEqual(expected);
  });

  /*

  Clear Staff Feedback Message

  */

  it('handles action of type STAFF_MESSAGE_CLEAR', () => {
    const beforeState = {message: 'Message.'}
    const actual = staffReducer(beforeState, {type: STAFF_MESSAGE_CLEAR});
    const expected = initialState;
    expect(actual).toEqual(expected);
  });
});