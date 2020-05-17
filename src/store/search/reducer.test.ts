import { SEARCH_SET_INDEX } from './types';

import searchReducer from './reducer';

describe('the search reducer', () => {
  it('returns initial state', () => {
    const actual = searchReducer(undefined, {
      type: SEARCH_SET_INDEX,
      index: "recipes"
    });
    const expected = {currentIndex: "recipes"};
    expect(actual).toEqual(expected);
  });

  it('handles actions of type SEARCH_SET_INDEX', () => {
    const initialState = {currentIndex: "recipes"};
    const actual = searchReducer(initialState, {
      type: SEARCH_SET_INDEX,
      index: "ingredients"
    });
    const expected = {currentIndex: "ingredients"};
    expect(actual).toEqual(expected);
  });
});