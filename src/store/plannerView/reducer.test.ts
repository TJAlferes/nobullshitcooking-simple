import { PLANNER_VIEW_CLICK_DAY, PLANNER_VIEW_LOAD } from './types';

import plannerViewReducer from './reducer';

const initialState = {
  isLoading: false,

  expanded: false,
  expandedDay: "none",
  planName: "",
  recipeListsInsideDays: {
    1: [],  2: [],  3: [],  4: [],  5: [],  6: [],  7: [],
    8: [],  9: [], 10: [], 11: [], 12: [], 13: [], 14: [],
   15: [], 16: [], 17: [], 18: [], 19: [], 20: [], 21: [],
   22: [], 23: [], 24: [], 25: [], 26: [], 27: [], 28: []
  }
};

describe('the plannerView reducer', () => {
  it('returns initial state', () => {
    const actual = plannerViewReducer(undefined, {});
    const expected = initialState;
    expect(actual).toEqual(expected);
  });



  it('handles actions of type PLANNER_VIEW_CLICK_DAY on a day', () => {
    const actual = plannerViewReducer(initialState, {
      type: PLANNER_VIEW_CLICK_DAY,
      day: 1
    });
    const expected = {
      isLoading: false,
    
      expanded: true,
      expandedDay: 1,
      planName: "",
      recipeListsInsideDays: {
        1: [],  2: [],  3: [],  4: [],  5: [],  6: [],  7: [],
        8: [],  9: [], 10: [], 11: [], 12: [], 13: [], 14: [],
       15: [], 16: [], 17: [], 18: [], 19: [], 20: [], 21: [],
       22: [], 23: [], 24: [], 25: [], 26: [], 27: [], 28: []
      }
    };
    expect(actual).toEqual(expected);
  });



  it('handles actions of type PLANNER_VIEW_CLICK_DAY on the expanded day', () => {
    const beforeState = {
      isLoading: false,
    
      expanded: true,
      expandedDay: 1,
      planName: "",
      recipeListsInsideDays: {
        1: [],  2: [],  3: [],  4: [],  5: [],  6: [],  7: [],
        8: [],  9: [], 10: [], 11: [], 12: [], 13: [], 14: [],
       15: [], 16: [], 17: [], 18: [], 19: [], 20: [], 21: [],
       22: [], 23: [], 24: [], 25: [], 26: [], 27: [], 28: []
      }
    };
    const actual = plannerViewReducer(beforeState, {
      type: PLANNER_VIEW_CLICK_DAY,
      day: 1
    });
    const expected = initialState;
    expect(actual).toEqual(expected);
  });



  it('handles actions of type PLANNER_PRIVATE_LOAD', () => {
    const actual = plannerViewReducer(initialState, {
      type: PLANNER_VIEW_LOAD,
      planName: "My Plan",
      planData: {
        1: [{id: 1, title: "Pumpkin Soup"}],
        2: [],
        3: [],
        4: [],
        5: [{id: 503, title: "Pho"}],
        6: [],  7: [],
        8: [],  9: [], 10: [], 11: [], 12: [], 13: [], 14: [],
       15: [], 16: [], 17: [], 18: [], 19: [], 20: [], 21: [],
       22: [], 23: [], 24: [], 25: [], 26: [], 27: [], 28: []
      }
    });
    const expected = {
      isLoading: false,
    
      expanded: false,
      expandedDay: "none",
      planName: "My Plan",
      recipeListsInsideDays: {
        1: [{id: 1, title: "Pumpkin Soup"}],
        2: [],
        3: [],
        4: [],
        5: [{id: 503, title: "Pho"}],
        6: [],  7: [],
        8: [],  9: [], 10: [], 11: [], 12: [], 13: [], 14: [],
       15: [], 16: [], 17: [], 18: [], 19: [], 20: [], 21: [],
       22: [], 23: [], 24: [], 25: [], 26: [], 27: [], 28: []
      }
    };
    expect(actual).toEqual(expected);
  });
});