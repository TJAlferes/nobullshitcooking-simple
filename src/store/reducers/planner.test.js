import {
  PLANNER_CLICK_DAY,
  PLANNER_ADD_RECIPE_TO_DAY,
  PLANNER_REMOVE_RECIPE_FROM_DAY,
  PLANNER_REORDER_RECIPE_IN_DAY,

  //PLANNER_PUBLIC_LOAD_FROM_URL,
  //PLANNER_PUBLIC_SAVE_TO_URL,

  PLANNER_CLEAR_WORK,
  PLANNER_SET_CREATING,
  PLANNER_SET_EDITING_ID,
  PLANNER_SET_PLAN_NAME,
  PLANNER_SET_PLAN_DATA
} from '../actions/actionTypes';

import plannerReducer from './planner';

const initialState = {
  isLoading: false,
  creating: false,
  editingId: "",
  publicUrl: "",
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

describe('the planner reducer', () => {
  it('returns initial state', () => {
    const actual = plannerReducer(undefined, {});
    const expected = initialState;
    expect(actual).toEqual(expected);
  });



  it('handles actions of type PLANNER_CLICK_DAY on a day', () => {
    const actual = plannerReducer(initialState, {
      type: PLANNER_CLICK_DAY,
      day: 1
    });
    const expected = {
      isLoading: false,
      creating: false,
      editingId: "",
      publicUrl: "",
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

  it('handles actions of type PLANNER_CLICK_DAY on the expanded day', () => {
    const beforeState = {
      isLoading: false,
      creating: false,
      editingId: "",
      publicUrl: "",
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
    const actual = plannerReducer(beforeState, {
      type: PLANNER_CLICK_DAY,
      day: 1
    });
    const expected = initialState;
    expect(actual).toEqual(expected);
  });



  it('handles actions of type PLANNER_ADD_RECIPE_TO_DAY', () => {
    const actual = plannerReducer(initialState, {
      type: PLANNER_ADD_RECIPE_TO_DAY,
      day: 2,
      recipe: {id: 503, title: "Pho"}
    });
    const expected = {
      isLoading: false,
      creating: false,
      editingId: "",
      publicUrl: "",
      expanded: false,
      expandedDay: "none",
      planName: "",
      recipeListsInsideDays: {
         1: [],
         2: [{id: 503, title: "Pho"}],
         3: [],  4: [],  5: [],  6: [],  7: [],
         8: [],  9: [], 10: [], 11: [], 12: [], 13: [], 14: [],
        15: [], 16: [], 17: [], 18: [], 19: [], 20: [], 21: [],
        22: [], 23: [], 24: [], 25: [], 26: [], 27: [], 28: []
      }
    };
    expect(actual).toEqual(expected);
  });

  it('handles actions of type PLANNER_REMOVE_RECIPE_FROM_DAY', () => {
    const beforeState = {
      isLoading: false,
      creating: false,
      editingId: "",
      publicUrl: "",
      expanded: false,
      expandedDay: "none",
      planName: "",
      recipeListsInsideDays: {
         1: [],
         2: [{id: 503, title: "Pho"}],
         3: [],  4: [],  5: [],  6: [],  7: [],
         8: [],  9: [], 10: [], 11: [], 12: [], 13: [], 14: [],
        15: [], 16: [], 17: [], 18: [], 19: [], 20: [], 21: [],
        22: [], 23: [], 24: [], 25: [], 26: [], 27: [], 28: []
      }
    };
    const actual = plannerReducer(beforeState, {
      type: PLANNER_REMOVE_RECIPE_FROM_DAY,
      day: 2,
      index: 0
    });
    const expected = initialState;
    expect(actual).toEqual(expected);
  });

  it('handles actions of type PLANNER_REORDER_RECIPE_IN_DAY', () => {
    const beforeState = {
      isLoading: false,
      creating: false,
      editingId: "",
      publicUrl: "",
      expanded: true,
      expandedDay: 2,
      planName: "",
      recipeListsInsideDays: {
         1: [],
         2: [{id: 503, title: "Pho"}, {id: 821, title: "Coffee Cake"}],
         3: [],  4: [],  5: [],  6: [],  7: [],
         8: [],  9: [], 10: [], 11: [], 12: [], 13: [], 14: [],
        15: [], 16: [], 17: [], 18: [], 19: [], 20: [], 21: [],
        22: [], 23: [], 24: [], 25: [], 26: [], 27: [], 28: []
      }
    };
    const actual = plannerReducer(beforeState, {
      type: PLANNER_REORDER_RECIPE_IN_DAY,
      dragIndex: 0,
      hoverIndex: 1
    });
    const expected = {
      isLoading: false,
      creating: false,
      editingId: "",
      publicUrl: "",
      expanded: true,
      expandedDay: 2,
      planName: "",
      recipeListsInsideDays: {
         1: [],
         2: [{id: 821, title: "Coffee Cake"}, {id: 503, title: "Pho"}],
         3: [],  4: [],  5: [],  6: [],  7: [],
         8: [],  9: [], 10: [], 11: [], 12: [], 13: [], 14: [],
        15: [], 16: [], 17: [], 18: [], 19: [], 20: [], 21: [],
        22: [], 23: [], 24: [], 25: [], 26: [], 27: [], 28: []
      }
    };
    expect(actual).toEqual(expected);
  });



  /*it('handles actions of type PLANNER_PUBLIC_LOAD_FROM_URL', () => {
    const actual = plannerReducer(, {
      type: PLANNER_PUBLIC_LOAD_FROM_URL
    });
    const expected = ;
    expect(actual).toEqual(expected);
  });

  it('handles actions of type PLANNER_PUBLIC_SAVE_TO_URL', () => {
    const actual = plannerReducer(, {
      type: PLANNER_PUBLIC_SAVE_TO_URL
    });
    const expected = ;
    expect(actual).toEqual(expected);
  });*/



  it('handles actions of type PLANNER_CLEAR_WORK', () => {
    const beforeState = {
      isLoading: false,
      creating: true,
      editingId: "",
      publicUrl: "",
      expanded: true,
      expandedDay: 2,
      planName: "",
      recipeListsInsideDays: {
         1: [],
         2: [{id: 503, title: "Pho"}, {id: 821, title: "Coffee Cake"}],
         3: [],  4: [],  5: [],  6: [],  7: [],
         8: [],  9: [], 10: [], 11: [], 12: [], 13: [], 14: [],
        15: [], 16: [], 17: [], 18: [], 19: [], 20: [], 21: [],
        22: [], 23: [], 24: [], 25: [], 26: [], 27: [], 28: []
      }
    };
    const actual = plannerReducer(beforeState, {type: PLANNER_CLEAR_WORK});
    const expected = initialState;
    expect(actual).toEqual(expected);
  });

  it('handles actions of type PLANNER_SET_CREATING', () => {
    const actual = plannerReducer(initialState, {type: PLANNER_SET_CREATING});
    const expected = {
      isLoading: false,
      creating: true,
      editingId: "",
      publicUrl: "",
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
    expect(actual).toEqual(expected);
  });

  it('handles actions of type PLANNER_SET_EDITING_ID', () => {
    const actual = plannerReducer(initialState, {
      type: PLANNER_SET_EDITING_ID,
      id: 1
    });
    const expected = {
      isLoading: false,
      creating: false,
      editingId: 1,
      publicUrl: "",
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
    expect(actual).toEqual(expected);
  });

  it('handles actions of type PLANNER_SET_PLAN_NAME', () => {
    const actual = plannerReducer(initialState, {
      type: PLANNER_SET_PLAN_NAME,
      name: "Plan B"
    });
    const expected = {
      isLoading: false,
      creating: false,
      editingId: "",
      publicUrl: "",
      expanded: false,
      expandedDay: "none",
      planName: "Plan B",
      recipeListsInsideDays: {
         1: [],  2: [],  3: [],  4: [],  5: [],  6: [],  7: [],
         8: [],  9: [], 10: [], 11: [], 12: [], 13: [], 14: [],
        15: [], 16: [], 17: [], 18: [], 19: [], 20: [], 21: [],
        22: [], 23: [], 24: [], 25: [], 26: [], 27: [], 28: []
      }
    };
    expect(actual).toEqual(expected);
  });

  it('handles actions of type PLANNER_SET_PLAN_DATA', () => {
    const actual = plannerReducer(initialState, {
      type: PLANNER_SET_PLAN_DATA,
      data: {
        1: [{id: 1, title: "Pumpkin Soup"}],
        2: [],  3: [],  4: [],  5: [],  6: [],  7: [],
        8: [],  9: [], 10: [], 11: [], 12: [], 13: [], 14: [],
       15: [], 16: [], 17: [], 18: [], 19: [], 20: [], 21: [],
       22: [], 23: [], 24: [], 25: [], 26: [], 27: [], 28: []
      }
    });
    const expected = {
      isLoading: false,
      creating: false,
      editingId: "",
      publicUrl: "",
      expanded: false,
      expandedDay: "none",
      planName: "",
      recipeListsInsideDays: {
        1: [{id: 1, title: "Pumpkin Soup"}],
        2: [],  3: [],  4: [],  5: [],  6: [],  7: [],
        8: [],  9: [], 10: [], 11: [], 12: [], 13: [], 14: [],
       15: [], 16: [], 17: [], 18: [], 19: [], 20: [], 21: [],
       22: [], 23: [], 24: [], 25: [], 26: [], 27: [], 28: []
      }
    };
    expect(actual).toEqual(expected);
  });
});