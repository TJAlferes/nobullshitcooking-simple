import { searchSetIndex } from './actions';
import { SEARCH_SET_INDEX } from './types';

describe('searchSetIndex action creator', () => {
  it('returns the correct action type', () => {
    const actual = searchSetIndex("Ingredients").type;
    const expected = SEARCH_SET_INDEX;
    expect(actual).toEqual(expected);
  });
  
  it('returns the correct index', () => {
    const actual = searchSetIndex("Ingredients").index;
    const expected = "Ingredients";
    expect(actual).toEqual(expected);
  });
});