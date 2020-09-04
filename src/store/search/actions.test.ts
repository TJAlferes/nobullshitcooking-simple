import { searchSetIndex } from './actions';
import { SEARCH_SET_INDEX } from './types';

describe('searchSetIndex action creator', () => {
  it('returns the correct action type', () => {
    expect(searchSetIndex("Ingredients").type).toEqual(SEARCH_SET_INDEX);
  });
  
  it('returns the correct index', () => {
    expect(searchSetIndex("Ingredients").index).toEqual("Ingredients");
  });
});