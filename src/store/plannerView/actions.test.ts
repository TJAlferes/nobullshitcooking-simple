import { plannerViewClickDay, plannerViewLoad } from './actions'
import { PLANNER_VIEW_CLICK_DAY, PLANNER_VIEW_LOAD } from './types';

const recipeOne = {
  key: "ABC",
  recipe_id: 503,
  owner_id: 1,
  title: "Pho",
  recipe_image: "nobsc-pho"
};
const recipeTwo = {
  key: "XYZ",
  recipe_id: 821,
  owner_id: 1,
  title: "Coffee Cake",
  recipe_image: "nobsc-coffee-cake"
};
const planName = "Plan C";
const planData = {
  1: [recipeTwo],
  2: [],
  3: [],
  4: [],
  5: [recipeOne],
  6: [],  7: [],
  8: [],  9: [], 10: [], 11: [], 12: [], 13: [], 14: [],
 15: [], 16: [], 17: [], 18: [], 19: [], 20: [], 21: [],
 22: [], 23: [], 24: [], 25: [], 26: [], 27: [], 28: []
};

describe('plannerViewClickDay action creator', () => {
  it('returns the correct action type', () => {
    const actual = plannerViewClickDay(4).type;
    const expected = PLANNER_VIEW_CLICK_DAY;
    expect(actual).toEqual(expected);
  });
  it('returns the correct day', () => {
    const actual = plannerViewClickDay(4).day;
    const expected = 4;
    expect(actual).toEqual(expected);
  });
});

describe('plannerViewLoad action creator', () => {
  it('returns the correct action type', () => {
    const actual = plannerViewLoad(planName, planData).type;
    const expected = PLANNER_VIEW_LOAD;
    expect(actual).toEqual(expected);
  });
  it('returns the correct planName', () => {
    const actual = plannerViewLoad(planName, planData).planName;
    const expected = planName;
    expect(actual).toEqual(expected);
  });
  it('returns the correct planData', () => {
    const actual = plannerViewLoad(planName, planData).planData;
    const expected = planData;
    expect(actual).toEqual(expected);
  });
});