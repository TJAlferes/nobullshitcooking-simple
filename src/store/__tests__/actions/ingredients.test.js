import {
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCEEDED,
  GET_INGREDIENTS_FAILED
} from '../../actions/actionTypes';

import {
  getIngredientsRequest,
  getIngredientsSucceeded,
  getIngredientsFailed
} from '../../actions/ingredients';

// SWITCH TO GHERKIN ?

describe('the getIngredientsRequest action creator', () => {
  it('returns the correct type', () => {
    const actual = getIngredientsRequest().type;
    const expected = GET_INGREDIENTS_REQUEST;
    expect(actual).toEqual(expected);
  });

  it('returns the correct payload', () => {
    const actual = getIngredientsRequest('apple').payload;
    const expected = 'apple';
    expect(actual).toEqual(expected);
  });
});

describe('the getIngredientsSucceeded action creator', () => {
  it('returns the correct type', () => {
    const actual = getIngredientsSucceeded().type;
    const expected = GET_INGREDIENTS_SUCCEEDED;
    expect(actual).toEqual(expected);
  });
});

describe('the getIngredientsFailed action creator', () => {
  it('returns the correct type', () => {
    const actual = getIngredientsFailed().type;
    const expected = GET_INGREDIENTS_FAILED;
    expect(actual).toEqual(expected);
  });
});