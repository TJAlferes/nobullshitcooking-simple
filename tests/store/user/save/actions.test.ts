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

describe('userSaveRecipe action creator', () => {
  it('returns the correct action type', () => {
    expect(userSaveRecipe(4).type).toEqual(USER_SAVE_RECIPE);
  });

  it('returns the correct recipeId', () => {
    expect(userSaveRecipe(4).recipeId).toEqual(4);
  });
});

describe('userSaveRecipeSucceeded action creator', () => {
  it('returns the correct action type', () => {
    expect(userSaveRecipeSucceeded('OK.').type)
      .toEqual(USER_SAVE_RECIPE_SUCCEEDED);
  });

  it('returns the correct message', () => {
    expect(userSaveRecipeSucceeded('OK.').message).toEqual('OK.');
  });
});

describe('userSaveRecipeFailed action creator', () => {
  it('returns the correct action type', () => {
    expect(userSaveRecipeFailed('Try again.').type)
      .toEqual(USER_SAVE_RECIPE_FAILED);
  });

  it('returns the correct message', () => {
    expect(userSaveRecipeFailed('Try again.').message).toEqual('Try again.');
  });
});

describe('userUnsaveRecipe action creator', () => {
  it('returns the correct action type', () => {
    expect(userUnsaveRecipe(4).type).toEqual(USER_UNSAVE_RECIPE);
  });

  it('returns the correct recipeId', () => {
    expect(userUnsaveRecipe(4).recipeId).toEqual(4);
  });
});

describe('userUnsaveRecipeSucceeded action creator', () => {
  it('returns the correct action type', () => {
    expect(userUnsaveRecipeSucceeded('OK.').type)
      .toEqual(USER_UNSAVE_RECIPE_SUCCEEDED);
  });

  it('returns the correct message', () => {
    expect(userUnsaveRecipeSucceeded('OK.').message).toEqual('OK.');
  });
});

describe('userUnsaveRecipeFailed action creator', () => {
  it('returns the correct action type', () => {
    expect(userUnsaveRecipeFailed('Try again.').type)
      .toEqual(USER_UNSAVE_RECIPE_FAILED);
  });

  it('returns the correct message', () => {
    expect(userUnsaveRecipeFailed('Try again.').message).toEqual('Try again.');
  });
});