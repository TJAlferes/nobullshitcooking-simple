import {
  USER_FAVORITE_RECIPE,
  USER_FAVORITE_RECIPE_SUCCEEDED,
  USER_FAVORITE_RECIPE_FAILED,
  USER_UNFAVORITE_RECIPE,
  USER_UNFAVORITE_RECIPE_SUCCEEDED,
  USER_UNFAVORITE_RECIPE_FAILED
} from './types';

import {
  userFavoriteRecipe,
  userFavoriteRecipeSucceeded,
  userFavoriteRecipeFailed,
  userUnfavoriteRecipe,
  userUnfavoriteRecipeSucceeded,
  userUnfavoriteRecipeFailed
} from './actions';

describe('the userFavoriteRecipe action creator', () => {
  it('returns the correct action type', () => {
    const actual = userFavoriteRecipe(4).type;
    const expected = USER_FAVORITE_RECIPE;
    expect(actual).toEqual(expected);
  });
  it('returns the correct recipeId', () => {
    const actual = userFavoriteRecipe(4).recipeId;
    const expected = 4;
    expect(actual).toEqual(expected);
  });
});
describe('the userFavoriteRecipeSucceeded action creator', () => {
  it('returns the correct action type', () => {
    const actual = userFavoriteRecipeSucceeded('OK.').type;
    const expected = USER_FAVORITE_RECIPE_SUCCEEDED;
    expect(actual).toEqual(expected);
  });
  it('returns the correct message', () => {
    const actual = userFavoriteRecipeSucceeded('OK.').message;
    const expected = 'OK.';
    expect(actual).toEqual(expected);
  });
});
describe('the userFavoriteRecipeFailed action creator', () => {
  it('returns the correct action type', () => {
    const actual = userFavoriteRecipeFailed('Try again.').type;
    const expected = USER_FAVORITE_RECIPE_FAILED;
    expect(actual).toEqual(expected);
  });
  it('returns the correct message', () => {
    const actual = userFavoriteRecipeFailed('Try again.').message;
    const expected = 'Try again.';
    expect(actual).toEqual(expected);
  });
});


describe('the userUnfavoriteRecipe action creator', () => {
  it('returns the correct action type', () => {
    const actual = userUnfavoriteRecipe(4).type;
    const expected = USER_UNFAVORITE_RECIPE;
    expect(actual).toEqual(expected);
  });
  it('returns the correct recipeId', () => {
    const actual = userUnfavoriteRecipe(4).recipeId;
    const expected = 4;
    expect(actual).toEqual(expected);
  });
});
describe('the userUnfavoriteRecipeSucceeded action creator', () => {
  it('returns the correct action type', () => {
    const actual = userUnfavoriteRecipeSucceeded('OK.').type;
    const expected = USER_UNFAVORITE_RECIPE_SUCCEEDED;
    expect(actual).toEqual(expected);
  });
  it('returns the correct message', () => {
    const actual = userUnfavoriteRecipeSucceeded('OK.').message;
    const expected = 'OK.';
    expect(actual).toEqual(expected);
  });
});
describe('the userUnfavoriteRecipeFailed action creator', () => {
  it('returns the correct action type', () => {
    const actual = userUnfavoriteRecipeFailed('Try again.').type;
    const expected = USER_UNFAVORITE_RECIPE_FAILED;
    expect(actual).toEqual(expected);
  });
  it('returns the correct message', () => {
    const actual = userUnfavoriteRecipeFailed('Try again.').message;
    const expected = 'Try again.';
    expect(actual).toEqual(expected);
  });
});