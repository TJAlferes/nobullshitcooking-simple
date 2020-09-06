import {
  userFavoriteRecipe,
  userFavoriteRecipeSucceeded,
  userFavoriteRecipeFailed,
  userUnfavoriteRecipe,
  userUnfavoriteRecipeSucceeded,
  userUnfavoriteRecipeFailed
} from './actions';
import {
  USER_FAVORITE_RECIPE,
  USER_FAVORITE_RECIPE_SUCCEEDED,
  USER_FAVORITE_RECIPE_FAILED,
  USER_UNFAVORITE_RECIPE,
  USER_UNFAVORITE_RECIPE_SUCCEEDED,
  USER_UNFAVORITE_RECIPE_FAILED
} from './types';

describe('userFavoriteRecipe action creator', () => {
  it('returns the correct action type', () => {
    expect(userFavoriteRecipe(4).type).toEqual(USER_FAVORITE_RECIPE);
  });

  it('returns the correct recipeId', () => {
    expect(userFavoriteRecipe(4).recipeId).toEqual(4);
  });
});

describe('userFavoriteRecipeSucceeded action creator', () => {
  it('returns the correct action type', () => {
    expect(userFavoriteRecipeSucceeded('OK.').type)
      .toEqual(USER_FAVORITE_RECIPE_SUCCEEDED);
  });

  it('returns the correct message', () => {
    expect(userFavoriteRecipeSucceeded('OK.').message).toEqual('OK.');
  });
});

describe('userFavoriteRecipeFailed action creator', () => {
  it('returns the correct action type', () => {
    expect(userFavoriteRecipeFailed('Try again.').type)
      .toEqual(USER_FAVORITE_RECIPE_FAILED);
  });

  it('returns the correct message', () => {
    expect(userFavoriteRecipeFailed('Try again.').message)
      .toEqual('Try again.');
  });
});

describe('userUnfavoriteRecipe action creator', () => {
  it('returns the correct action type', () => {
    expect(userUnfavoriteRecipe(4).type).toEqual(USER_UNFAVORITE_RECIPE);
  });

  it('returns the correct recipeId', () => {
    expect(userUnfavoriteRecipe(4).recipeId).toEqual(4);
  });
});

describe('userUnfavoriteRecipeSucceeded action creator', () => {
  it('returns the correct action type', () => {
    expect(userUnfavoriteRecipeSucceeded('OK.').type)
      .toEqual(USER_UNFAVORITE_RECIPE_SUCCEEDED);
  });

  it('returns the correct message', () => {
    expect(userUnfavoriteRecipeSucceeded('OK.').message).toEqual('OK.');
  });
});

describe('userUnfavoriteRecipeFailed action creator', () => {
  it('returns the correct action type', () => {
    expect(userUnfavoriteRecipeFailed('Try again.').type)
      .toEqual(USER_UNFAVORITE_RECIPE_FAILED);
  });

  it('returns the correct message', () => {
    expect(userUnfavoriteRecipeFailed('Try again.').message)
      .toEqual('Try again.');
  });
});