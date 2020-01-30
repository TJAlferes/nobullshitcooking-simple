import {
  PLANNER_CLICK_DAY,
  PLANNER_ADD_RECIPE_TO_DAY,
  PLANNER_REMOVE_RECIPE_FROM_DAY,
  PLANNER_REORDER_RECIPE_IN_DAY,

  //PLANNER_PUBLIC_LOAD_FROM_URL,
  //PLANNER_PUBLIC_SAVE_TO_URL,

  PLANNER_VIEW_CLICK_DAY,
  PLANNER_PRIVATE_LOAD,
  PLANNER_CLEAR_WORK,
  PLANNER_SET_CREATING,
  PLANNER_SET_EDITING_ID,
  PLANNER_SET_PLAN_NAME,
  PLANNER_SET_PLAN_DATA
} from './actionTypes';
import {
  plannerClickDay,
  plannerAddRecipeToDay,
  plannerRemoveRecipeFromDay,
  plannerReorderRecipeInDay,

  //plannerPublicLoadFromUrl,
  //plannerPublicSaveToUrl,

  plannerViewClickDay,
  plannerPrivateLoad,
  plannerClearWork,
  plannerSetCreating,
  plannerSetEditingId,
  plannerSetPlanName,
  plannerSetPlanData
} from './planner';



describe('the plannerClickDay action creator', () => {
  it('returns the correct action type', () => {
    const actual = plannerClickDay(4).type;
    const expected = PLANNER_CLICK_DAY;
    expect(actual).toEqual(expected);
  });
  it('returns the correct day', () => {
    const actual = plannerClickDay(4).day;
    const expected = 4;
    expect(actual).toEqual(expected);
  });
});

describe('the plannerAddRecipeToDay action creator', () => {
  it('returns the correct action type', () => {
    const actual = plannerAddRecipeToDay(5, {
      id: 30, title: "Chicken Noodle Soup"
    }).type;
    const expected = PLANNER_ADD_RECIPE_TO_DAY;
    expect(actual).toEqual(expected);
  });
  it('returns the correct day', () => {
    const actual = plannerAddRecipeToDay(5, {
      id: 30, title: "Chicken Noodle Soup"
    }).day;
    const expected = 5;
    expect(actual).toEqual(expected);
  });
  it('returns the correct recipe', () => {
    const actual = plannerAddRecipeToDay(5, {
      id: 30, title: "Chicken Noodle Soup"
    }).recipe;
    const expected = {id: 30, title: "Chicken Noodle Soup"};
    expect(actual).toEqual(expected);
  });
});

describe('the plannerRemoveRecipeFromDay action creator', () => {
  it('returns the correct action type', () => {
    const actual = plannerRemoveRecipeFromDay(5, 0).type;
    const expected = PLANNER_REMOVE_RECIPE_FROM_DAY;
    expect(actual).toEqual(expected);
  });
  it('returns the correct day', () => {
    const actual = plannerRemoveRecipeFromDay(5, 0).day;
    const expected = 5;
    expect(actual).toEqual(expected);
  });
  it('returns the correct index', () => {
    const actual = plannerRemoveRecipeFromDay(5, 0).index;
    const expected = 0;
    expect(actual).toEqual(expected);
  });
});

describe('the plannerReorderRecipeInDay action creator', () => {
  it('returns the correct action type', () => {
    const actual = plannerReorderRecipeInDay(0, 2).type;
    const expected = PLANNER_REORDER_RECIPE_IN_DAY;
    expect(actual).toEqual(expected);
  });
  it('returns the correct dragIndex', () => {
    const actual = plannerReorderRecipeInDay(0, 2).dragIndex;
    const expected = 0;
    expect(actual).toEqual(expected);
  });
  it('returns the correct hoverIndex', () => {
    const actual = plannerReorderRecipeInDay(0, 2).hoverIndex;
    const expected = 2;
    expect(actual).toEqual(expected);
  });
});



describe('the plannerViewClickDay action creator', () => {
  it('returns the correct action type', () => {
    const actual = plannerViewClickDay(14).type;
    const expected = PLANNER_VIEW_CLICK_DAY;
    expect(actual).toEqual(expected);
  });
  it('returns the correct day', () => {
    const actual = plannerViewClickDay(14).day;
    const expected = 14;
    expect(actual).toEqual(expected);
  });
});

describe('the plannerPrivateLoad action creator', () => {
  it('returns the correct action type', () => {
    const actual = plannerPrivateLoad("A Great Plan", {
       1: [],
       2: [{id: 503, title: "Pho"}],
       3: [],  4: [],  5: [],  6: [],  7: [],
       8: [],  9: [], 10: [], 11: [], 12: [], 13: [], 14: [],
      15: [], 16: [], 17: [], 18: [], 19: [], 20: [], 21: [],
      22: [], 23: [], 24: [], 25: [], 26: [], 27: [], 28: []
    }).type;
    const expected = PLANNER_PRIVATE_LOAD;
    expect(actual).toEqual(expected);
  });

  it('returns the correct planName', () => {
    const actual = plannerPrivateLoad("A Great Plan", {
       1: [],
       2: [{id: 503, title: "Pho"}],
       3: [],  4: [],  5: [],  6: [],  7: [],
       8: [],  9: [], 10: [], 11: [], 12: [], 13: [], 14: [],
      15: [], 16: [], 17: [], 18: [], 19: [], 20: [], 21: [],
      22: [], 23: [], 24: [], 25: [], 26: [], 27: [], 28: []
    }).planName;
    const expected = "A Great Plan";
    expect(actual).toEqual(expected);
  });

  it('returns the correct planData', () => {
    const actual = plannerPrivateLoad("A Great Plan", {
       1: [],
       2: [{id: 503, title: "Pho"}],
       3: [],  4: [],  5: [],  6: [],  7: [],
       8: [],  9: [], 10: [], 11: [], 12: [], 13: [], 14: [],
      15: [], 16: [], 17: [], 18: [], 19: [], 20: [], 21: [],
      22: [], 23: [], 24: [], 25: [], 26: [], 27: [], 28: []
    }).planData;
    const expected = {
       1: [],
       2: [{id: 503, title: "Pho"}],
       3: [],  4: [],  5: [],  6: [],  7: [],
       8: [],  9: [], 10: [], 11: [], 12: [], 13: [], 14: [],
      15: [], 16: [], 17: [], 18: [], 19: [], 20: [], 21: [],
      22: [], 23: [], 24: [], 25: [], 26: [], 27: [], 28: []
    };
    expect(actual).toEqual(expected);
  });
});

describe('the plannerClearWork action creator', () => {
  it('returns the correct action type', () => {
    const actual = plannerClearWork().type;
    const expected = PLANNER_CLEAR_WORK;
    expect(actual).toEqual(expected);
  });
});

describe('the plannerSetCreating action creator', () => {
  it('returns the correct action type', () => {
    const actual = plannerSetCreating().type;
    const expected = PLANNER_SET_CREATING;
    expect(actual).toEqual(expected);
  });
});

describe('the plannerSetEditingId action creator', () => {
  it('returns the correct action type', () => {
    const actual = plannerSetEditingId(7544).type;
    const expected = PLANNER_SET_EDITING_ID;
    expect(actual).toEqual(expected);
  });
  it('returns the correct id', () => {
    const actual = plannerSetEditingId(7544).id;
    const expected = 7544;
    expect(actual).toEqual(expected);
  });
});

describe('the plannerSetPlanName action creator', () => {
  it('returns the correct action type', () => {
    const actual = plannerSetPlanName("A Great Plan").type;
    const expected = PLANNER_SET_PLAN_NAME;
    expect(actual).toEqual(expected);
  });
  it('returns the correct name', () => {
    const actual = plannerSetPlanName("A Great Plan").name;
    const expected = "A Great Plan";
    expect(actual).toEqual(expected);
  });
});

describe('the plannerSetPlanData action creator', () => {
  it('returns the correct action type', () => {
    const actual = plannerSetPlanData({
       1: [],
       2: [{id: 503, title: "Pho"}],
       3: [],  4: [],  5: [],  6: [],  7: [],
       8: [],  9: [], 10: [], 11: [], 12: [], 13: [], 14: [],
      15: [], 16: [], 17: [], 18: [], 19: [], 20: [], 21: [],
      22: [], 23: [], 24: [], 25: [], 26: [], 27: [], 28: []
    }).type;
    const expected = PLANNER_SET_PLAN_DATA;
    expect(actual).toEqual(expected);
  });
  it('returns the correct data', () => {
    const actual = plannerSetPlanData({
       1: [],
       2: [{id: 503, title: "Pho"}],
       3: [],  4: [],  5: [],  6: [],  7: [],
       8: [],  9: [], 10: [], 11: [], 12: [], 13: [], 14: [],
      15: [], 16: [], 17: [], 18: [], 19: [], 20: [], 21: [],
      22: [], 23: [], 24: [], 25: [], 26: [], 27: [], 28: []
    }).data;
    const expected = {
       1: [],
       2: [{id: 503, title: "Pho"}],
       3: [],  4: [],  5: [],  6: [],  7: [],
       8: [],  9: [], 10: [], 11: [], 12: [], 13: [], 14: [],
      15: [], 16: [], 17: [], 18: [], 19: [], 20: [], 21: [],
      22: [], 23: [], 24: [], 25: [], 26: [], 27: [], 28: []
    };
    expect(actual).toEqual(expected);
  });
});