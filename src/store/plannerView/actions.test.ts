import { plannerViewClickDay, plannerViewLoad } from './actions'
import { PLANNER_VIEW_CLICK_DAY, PLANNER_VIEW_LOAD } from './types';

const recipeOne = {
  key: "ABC",
  id: 503,
  owner_id: 1,
  title: "Pho",
  recipe_image: "nobsc-pho"
};
const recipeTwo = {
  key: "XYZ",
  id: 821,
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
    expect(plannerViewClickDay(4).type).toEqual(PLANNER_VIEW_CLICK_DAY);
  });

  it('returns the correct day', () => {
    expect(plannerViewClickDay(4).day).toEqual(4);
  });
});

describe('plannerViewLoad action creator', () => {
  it('returns the correct action type', () => {
    expect(plannerViewLoad(planName, planData).type).toEqual(PLANNER_VIEW_LOAD);
  });

  it('returns the correct planName', () => {
    expect(plannerViewLoad(planName, planData).planName).toEqual(planName);
  });

  it('returns the correct planData', () => {
    expect(plannerViewLoad(planName, planData).planData).toEqual(planData);
  });
});