import { SEARCH_SET_INDEX } from './actionTypes';
import { searchSetIndex } from './search';

describe('the searchSetIndex action creator', () => {
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