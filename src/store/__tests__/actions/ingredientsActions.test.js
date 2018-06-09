import {
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,
  GET_INGREDIENTS_FAIL
} from '../../actions/actionTypes';

import {
  getIngredientsRequest,
  getIngredientsSuccess,
  getIngredientsFail
} from '../../actions/ingredientsActions';

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

describe('the getIngredientsSuccess action creator', () => {

  it('returns the correct type', () => {
    const actual = getIngredientsSuccess().type;
    const expected = GET_INGREDIENTS_SUCCESS;

    expect(actual).toEqual(expected);
  });

  /*it('returns the correct payload', () => {
    const actual = getIngredientsSuccess('apple').payload;  // change
    const expected = 'apple';  // change

    expect(actual).toEqual(expected);
  });*/

});

describe('the getIngredientsFail action creator', () => {

  it('returns the correct type', () => {
    const actual = getIngredientsFail().type;
    const expected = GET_INGREDIENTS_FAIL;

    expect(actual).toEqual(expected);
  });

  /*it('returns the correct payload', () => {
    const actual = getIngredientsFail('apple').payload;  // change
    const expected = 'apple';  // change

    expect(actual).toEqual(expected);
  });*/

});