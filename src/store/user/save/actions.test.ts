import {
  userSaveRecipe,
  userSaveRecipeSucceeded,
  userSaveRecipeFailed,
  userUnsaveRecipe,
  userUnsaveRecipeSucceeded,
  userUnsaveRecipeFailed
} from './actions';
import {
  USER_SAVE_RECIPE,
  USER_SAVE_RECIPE_SUCCEEDED,
  USER_SAVE_RECIPE_FAILED,
  USER_UNSAVE_RECIPE,
  USER_UNSAVE_RECIPE_SUCCEEDED,
  USER_UNSAVE_RECIPE_FAILED
} from './types';

describe('the userSaveRecipe action creator', () => {
  it('returns the correct action type', () => {
    const actual = userSaveRecipe(4).type;
    const expected = USER_SAVE_RECIPE;
    expect(actual).toEqual(expected);
  });
  it('returns the correct recipeId', () => {
    const actual = userSaveRecipe(4).recipeId;
    const expected = 4;
    expect(actual).toEqual(expected);
  });
});
describe('the userSaveRecipeSucceeded action creator', () => {
  it('returns the correct action type', () => {
    const actual = userSaveRecipeSucceeded('OK.').type;
    const expected = USER_SAVE_RECIPE_SUCCEEDED;
    expect(actual).toEqual(expected);
  });
  it('returns the correct message', () => {
    const actual = userSaveRecipeSucceeded('OK.').message;
    const expected = 'OK.';
    expect(actual).toEqual(expected);
  });
});
describe('the userSaveRecipeFailed action creator', () => {
  it('returns the correct action type', () => {
    const actual = userSaveRecipeFailed('Try again.').type;
    const expected = USER_SAVE_RECIPE_FAILED;
    expect(actual).toEqual(expected);
  });
  it('returns the correct message', () => {
    const actual = userSaveRecipeFailed('Try again.').message;
    const expected = 'Try again.';
    expect(actual).toEqual(expected);
  });
});


describe('the userUnsaveRecipe action creator', () => {
  it('returns the correct action type', () => {
    const actual = userUnsaveRecipe(4).type;
    const expected = USER_UNSAVE_RECIPE;
    expect(actual).toEqual(expected);
  });
  it('returns the correct recipeId', () => {
    const actual = userUnsaveRecipe(4).recipeId;
    const expected = 4;
    expect(actual).toEqual(expected);
  });
});
describe('the userUnsaveRecipeSucceeded action creator', () => {
  it('returns the correct action type', () => {
    const actual = userUnsaveRecipeSucceeded('OK.').type;
    const expected = USER_UNSAVE_RECIPE_SUCCEEDED;
    expect(actual).toEqual(expected);
  });
  it('returns the correct message', () => {
    const actual = userUnsaveRecipeSucceeded('OK.').message;
    const expected = 'OK.';
    expect(actual).toEqual(expected);
  });
});
describe('the userUnsaveRecipeFailed action creator', () => {
  it('returns the correct action type', () => {
    const actual = userUnsaveRecipeFailed('Try again.').type;
    const expected = USER_UNSAVE_RECIPE_FAILED;
    expect(actual).toEqual(expected);
  });
  it('returns the correct message', () => {
    const actual = userUnsaveRecipeFailed('Try again.').message;
    const expected = 'Try again.';
    expect(actual).toEqual(expected);
  });
});