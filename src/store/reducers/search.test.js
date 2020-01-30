import { SEARCH_SET_INDEX } from '../actions/actionTypes';

import searchReducer from './search';

const initialState = {currentIndex: "recipes"};

describe('the search reducer', () => {
  it('returns initial state', () => {
    const actual = searchReducer(undefined, {});
    const expected = initialState;
    expect(actual).toEqual(expected);
  });

  it('handles actions of type SEARCH_SET_INDEX', () => {
    const actual = searchReducer(initialState, {
      type: SEARCH_SET_INDEX,
      index: "ingredients"
    });
    const expected = {currentIndex: "ingredients"};
    expect(actual).toEqual(expected);
  });
});