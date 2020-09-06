import { searchReducer } from '../../../src/store/search/reducer';
import { SEARCH_SET_INDEX } from '../../../src/store/search/types';

describe('search reducer', () => {
  it('returns initial state', () => {
    expect(searchReducer(undefined, {
      type: SEARCH_SET_INDEX,
      index: "recipes"
    })).toEqual({currentIndex: "recipes"});
  });

  it('handles actions of type SEARCH_SET_INDEX', () => {
    const initialState = {currentIndex: "recipes"};
    
    expect(searchReducer(initialState, {
      type: SEARCH_SET_INDEX,
      index: "ingredients"
    })).toEqual({currentIndex: "ingredients"});
  });
});