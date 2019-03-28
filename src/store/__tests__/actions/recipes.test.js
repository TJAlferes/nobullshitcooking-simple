import {
  GET_RECIPES_REQUEST,
  GET_RECIPES_SUCCEEDED,
  GET_RECIPES_FAILED
} from '../../actions/actionTypes';

import {
  getRecipesRequest,
  getRecipesSucceeded,
  getRecipesFailed
} from '../../actions/recipes';

// SWITCH TO GHERKIN ?

describe('the getRecipesRequest action creator', () => {
  it('returns the correct type', () => {
    const actual = getRecipesRequest().type;
    const expected = GET_RECIPES_REQUEST;
    expect(actual).toEqual(expected);
  });

  it('returns the correct payload', () => {
    const actual = getRecipesRequest('apple').payload;
    const expected = 'apple';
    expect(actual).toEqual(expected);
  });
});

describe('the getRecipesSucceeded action creator', () => {
  it('returns the correct type', () => {
    const actual = getRecipesSucceeded().type;
    const expected = GET_RECIPES_SUCCEEDED;
    expect(actual).toEqual(expected);
  });
});

describe('the getRecipesFailed action creator', () => {
  it('returns the correct type', () => {
    const actual = getRecipesFailed().type;
    const expected = GET_RECIPES_FAILED;
    expect(actual).toEqual(expected);
  });
});