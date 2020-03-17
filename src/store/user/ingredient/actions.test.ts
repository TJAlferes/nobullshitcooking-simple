import {
  USER_CREATE_NEW_PRIVATE_INGREDIENT,
  USER_CREATE_NEW_PRIVATE_INGREDIENT_SUCCEEDED,
  USER_CREATE_NEW_PRIVATE_INGREDIENT_FAILED,
  USER_EDIT_PRIVATE_INGREDIENT,
  USER_EDIT_PRIVATE_INGREDIENT_SUCCEEDED,
  USER_EDIT_PRIVATE_INGREDIENT_FAILED,
  USER_DELETE_PRIVATE_INGREDIENT,
  USER_DELETE_PRIVATE_INGREDIENT_SUCCEEDED,
  USER_DELETE_PRIVATE_INGREDIENT_FAILED
} from './types';

import {
  userCreateNewPrivateIngredient,
  userCreateNewPrivateIngredientSucceeded,
  userCreateNewPrivateIngredientFailed,
  userEditPrivateIngredient,
  userEditPrivateIngredientSucceeded,
  userEditPrivateIngredientFailed,
  userDeletePrivateIngredient,
  userDeletePrivateIngredientSucceeded,
  userDeletePrivateIngredientFailed
} from './actions';

describe('the userCreateNewPrivateIngredient action creator', () => {
  it('returns the correct action type', () => {
    const actual = userCreateNewPrivateIngredient({someKey: 'someValue'}).type;
    const expected = USER_CREATE_NEW_PRIVATE_INGREDIENT;
    expect(actual).toEqual(expected);
  });
  it('returns the correct ingredientInfo', () => {
    const actual = userCreateNewPrivateIngredient({someKey: 'someValue'}).ingredientInfo;
    const expected = {someKey: 'someValue'};
    expect(actual).toEqual(expected);
  });
});
describe('the userCreateNewPrivateIngredientSucceeded action creator', () => {
  it('returns the correct action type', () => {
    const actual = userCreateNewPrivateIngredientSucceeded('OK.').type;
    const expected = USER_CREATE_NEW_PRIVATE_INGREDIENT_SUCCEEDED;
    expect(actual).toEqual(expected);
  });
  it('returns the correct message', () => {
    const actual = userCreateNewPrivateIngredientSucceeded('OK.').message;
    const expected = 'OK.';
    expect(actual).toEqual(expected);
  });
});
describe('the userCreateNewPrivateIngredientFailed action creator', () => {
  it('returns the correct action type', () => {
    const actual = userCreateNewPrivateIngredientFailed('Try again.').type;
    const expected = USER_CREATE_NEW_PRIVATE_INGREDIENT_FAILED;
    expect(actual).toEqual(expected);
  });
  it('returns the correct message', () => {
    const actual = userCreateNewPrivateIngredientFailed('Try again.').message;
    const expected = 'Try again.';
    expect(actual).toEqual(expected);
  });
});


describe('the userEditPrivateIngredient action creator', () => {
  it('returns the correct action type', () => {
    const actual = userEditPrivateIngredient({someKey: 'someValue'}).type;
    const expected = USER_EDIT_PRIVATE_INGREDIENT;
    expect(actual).toEqual(expected);
  });
  it('returns the correct ingredientInfo', () => {
    const actual = userEditPrivateIngredient({someKey: 'someValue'}).ingredientInfo;
    const expected = {someKey: 'someValue'};
    expect(actual).toEqual(expected);
  });
});
describe('the userEditPrivateIngredientSucceeded action creator', () => {
  it('returns the correct action type', () => {
    const actual = userEditPrivateIngredientSucceeded('OK.').type;
    const expected = USER_EDIT_PRIVATE_INGREDIENT_SUCCEEDED;
    expect(actual).toEqual(expected);
  });
  it('returns the correct message', () => {
    const actual = userEditPrivateIngredientSucceeded('OK.').message;
    const expected = 'OK.';
    expect(actual).toEqual(expected);
  });
});
describe('the userEditPrivateIngredientFailed action creator', () => {
  it('returns the correct action type', () => {
    const actual = userEditPrivateIngredientFailed('Try again.').type;
    const expected = USER_EDIT_PRIVATE_INGREDIENT_FAILED;
    expect(actual).toEqual(expected);
  });
  it('returns the correct message', () => {
    const actual = userEditPrivateIngredientFailed('Try again.').message;
    const expected = 'Try again.';
    expect(actual).toEqual(expected);
  });
});


describe('the userDeletePrivateIngredient action creator', () => {
  it('returns the correct action type', () => {
    const actual = userDeletePrivateIngredient(7).type;
    const expected = USER_DELETE_PRIVATE_INGREDIENT;
    expect(actual).toEqual(expected);
  });
  it('returns the correct ingredientId', () => {
    const actual = userDeletePrivateIngredient(7).ingredientId;
    const expected = 7;
    expect(actual).toEqual(expected);
  });
});
describe('the userDeletePrivateIngredientSucceeded action creator', () => {
  it('returns the correct action type', () => {
    const actual = userDeletePrivateIngredientSucceeded('OK.').type;
    const expected = USER_DELETE_PRIVATE_INGREDIENT_SUCCEEDED;
    expect(actual).toEqual(expected);
  });
  it('returns the correct message', () => {
    const actual = userDeletePrivateIngredientSucceeded('OK.').message;
    const expected = 'OK.';
    expect(actual).toEqual(expected);
  });
});
describe('the userDeletePrivateIngredientFailed action creator', () => {
  it('returns the correct action type', () => {
    const actual = userDeletePrivateIngredientFailed('Try again.').type;
    const expected = USER_DELETE_PRIVATE_INGREDIENT_FAILED;
    expect(actual).toEqual(expected);
  });
  it('returns the correct message', () => {
    const actual = userDeletePrivateIngredientFailed('Try again.').message;
    const expected = 'Try again.';
    expect(actual).toEqual(expected);
  });
});