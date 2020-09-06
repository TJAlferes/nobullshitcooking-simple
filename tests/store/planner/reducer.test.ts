import { plannerReducer } from '../../../src/store/planner/reducer';
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
} from '../../../src/store/planner/types';

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
const empty = {
  1: [],  2: [],  3: [],  4: [],  5: [],  6: [],  7: [],
  8: [],  9: [], 10: [], 11: [], 12: [], 13: [], 14: [],
 15: [], 16: [], 17: [], 18: [], 19: [], 20: [], 21: [],
 22: [], 23: [], 24: [], 25: [], 26: [], 27: [], 28: []
};
const lists1 = {
  1: [],
  2: [recipeOne],
  3: [],  4: [],  5: [],  6: [],  7: [],
  8: [],  9: [], 10: [], 11: [], 12: [], 13: [], 14: [],
 15: [], 16: [], 17: [], 18: [], 19: [], 20: [], 21: [],
 22: [], 23: [], 24: [], 25: [], 26: [], 27: [], 28: []
};

const initialState = {
  isLoading: false,
  creating: false,
  editingId: null,
  publicUrl: "",
  expanded: false,
  expandedDay: null,
  planName: "",
  recipeListsInsideDays: empty
};

describe('planner reducer', () => {
  it('returns initial state', () => {
    expect(plannerReducer(undefined, {type: PLANNER_CLEAR_WORK}))
      .toEqual(initialState);
  });

  it('handles actions of type PLANNER_CLICK_DAY on a day', () => {
    expect(plannerReducer(initialState, {type: PLANNER_CLICK_DAY, day: 1}))
      .toEqual({
        isLoading: false,
        creating: false,
        editingId: null,
        publicUrl: "",
        expanded: true,
        expandedDay: 1,
        planName: "",
        recipeListsInsideDays: empty
      });
  });

  it('handles actions of type PLANNER_CLICK_DAY on the expanded day', () => {
    const beforeState = {
      isLoading: false,
      creating: false,
      editingId: null,
      publicUrl: "",
      expanded: true,
      expandedDay: 1,
      planName: "",
      recipeListsInsideDays: empty
    };

    expect(plannerReducer(beforeState, {type: PLANNER_CLICK_DAY, day: 1}))
      .toEqual(initialState);
  });

  it('handles actions of type PLANNER_ADD_RECIPE_TO_DAY', () => {
    expect(plannerReducer(initialState, {
      type: PLANNER_ADD_RECIPE_TO_DAY,
      day: 2,
      recipe: recipeOne
    })).toEqual({
      isLoading: false,
      creating: false,
      editingId: null,
      publicUrl: "",
      expanded: false,
      expandedDay: null,
      planName: "",
      recipeListsInsideDays: lists1
    });
  });

  it('handles actions of type PLANNER_REMOVE_RECIPE_FROM_DAY', () => {
    const beforeState = {
      isLoading: false,
      creating: false,
      editingId: null,
      publicUrl: "",
      expanded: false,
      expandedDay: null,
      planName: "",
      recipeListsInsideDays: lists1
    };

    expect(plannerReducer(beforeState, {
      type: PLANNER_REMOVE_RECIPE_FROM_DAY,
      day: 2,
      index: 0
    })).toEqual(initialState);
  });

  it('handles actions of type PLANNER_REORDER_RECIPE_IN_DAY', () => {
    const beforeState = {
      isLoading: false,
      creating: false,
      editingId: null,
      publicUrl: "",
      expanded: true,
      expandedDay: 2,
      planName: "",
      recipeListsInsideDays: {
         1: [],
         2: [recipeOne, recipeTwo],
         3: [],  4: [],  5: [],  6: [],  7: [],
         8: [],  9: [], 10: [], 11: [], 12: [], 13: [], 14: [],
        15: [], 16: [], 17: [], 18: [], 19: [], 20: [], 21: [],
        22: [], 23: [], 24: [], 25: [], 26: [], 27: [], 28: []
      }
    };

    expect(plannerReducer(beforeState, {
      type: PLANNER_REORDER_RECIPE_IN_DAY,
      dragIndex: 0,
      hoverIndex: 1
    })).toEqual({
      isLoading: false,
      creating: false,
      editingId: null,
      publicUrl: "",
      expanded: true,
      expandedDay: 2,
      planName: "",
      recipeListsInsideDays: {
         1: [],
         2: [recipeTwo, recipeOne],
         3: [],  4: [],  5: [],  6: [],  7: [],
         8: [],  9: [], 10: [], 11: [], 12: [], 13: [], 14: [],
        15: [], 16: [], 17: [], 18: [], 19: [], 20: [], 21: [],
        22: [], 23: [], 24: [], 25: [], 26: [], 27: [], 28: []
      }
    });
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
      editingId: null,
      publicUrl: "",
      expanded: true,
      expandedDay: 2,
      planName: "",
      recipeListsInsideDays: lists1
    };

    expect(plannerReducer(beforeState, {type: PLANNER_CLEAR_WORK}))
      .toEqual(initialState);
  });

  it('handles actions of type PLANNER_SET_CREATING', () => {
    expect(plannerReducer(initialState, {type: PLANNER_SET_CREATING})).toEqual({
      isLoading: false,
      creating: true,
      editingId: null,
      publicUrl: "",
      expanded: false,
      expandedDay: null,
      planName: "",
      recipeListsInsideDays: empty
    });
  });

  it('handles actions of type PLANNER_SET_EDITING_ID', () => {
    expect(plannerReducer(initialState, {type: PLANNER_SET_EDITING_ID, id: 1}))
      .toEqual({
        isLoading: false,
        creating: false,
        editingId: 1,
        publicUrl: "",
        expanded: false,
        expandedDay: null,
        planName: "",
        recipeListsInsideDays: empty
      });
  });

  it('handles actions of type PLANNER_SET_PLAN_NAME', () => {
    expect(plannerReducer(initialState, {
      type: PLANNER_SET_PLAN_NAME,
      name: "Plan B"
    })).toEqual({
      isLoading: false,
      creating: false,
      editingId: null,
      publicUrl: "",
      expanded: false,
      expandedDay: null,
      planName: "Plan B",
      recipeListsInsideDays: empty
    });
  });

  it('handles actions of type PLANNER_SET_PLAN_DATA', () => {
    expect(plannerReducer(initialState, {
      type: PLANNER_SET_PLAN_DATA,
      data: lists1
    })).toEqual({
      isLoading: false,
      creating: false,
      editingId: null,
      publicUrl: "",
      expanded: false,
      expandedDay: null,
      planName: "",
      recipeListsInsideDays: lists1
    });
  });
});