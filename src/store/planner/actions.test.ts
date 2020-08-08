import {
  plannerClickDay,
  plannerAddRecipeToDay,
  plannerRemoveRecipeFromDay,
  plannerReorderRecipeInDay,
  //plannerPublicLoadFromUrl,
  //plannerPublicSaveToUrl,
  plannerClearWork,
  plannerSetCreating,
  plannerSetEditingId,
  plannerSetPlanName,
  plannerSetPlanData
} from './actions';
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
} from './types';

const recipeOne = {
  key: "ABC",
  id: 503,
  owner_id: 1,
  title: "Pho",
  recipe_image: "nobsc-pho"
};

describe('plannerClickDay action creator', () => {
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

describe('plannerAddRecipeToDay action creator', () => {
  it('returns the correct action type', () => {
    const actual = plannerAddRecipeToDay(5, recipeOne).type;
    const expected = PLANNER_ADD_RECIPE_TO_DAY;
    expect(actual).toEqual(expected);
  });
  it('returns the correct day', () => {
    const actual = plannerAddRecipeToDay(5, recipeOne).day;
    const expected = 5;
    expect(actual).toEqual(expected);
  });
  it('returns the correct recipe', () => {
    const actual = plannerAddRecipeToDay(5, recipeOne).recipe;
    const expected = recipeOne;
    expect(actual).toEqual(expected);
  });
});

describe('plannerRemoveRecipeFromDay action creator', () => {
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

describe('plannerReorderRecipeInDay action creator', () => {
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

describe('plannerClearWork action creator', () => {
  it('returns the correct action type', () => {
    const actual = plannerClearWork().type;
    const expected = PLANNER_CLEAR_WORK;
    expect(actual).toEqual(expected);
  });
});

describe('plannerSetCreating action creator', () => {
  it('returns the correct action type', () => {
    const actual = plannerSetCreating().type;
    const expected = PLANNER_SET_CREATING;
    expect(actual).toEqual(expected);
  });
});

describe('plannerSetEditingId action creator', () => {
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

describe('plannerSetPlanName action creator', () => {
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

describe('plannerSetPlanData action creator', () => {
  const dataToSet = {
    1: [],
    2: [recipeOne],
    3: [],  4: [],  5: [],  6: [],  7: [],
    8: [],  9: [], 10: [], 11: [], 12: [], 13: [], 14: [],
   15: [], 16: [], 17: [], 18: [], 19: [], 20: [], 21: [],
   22: [], 23: [], 24: [], 25: [], 26: [], 27: [], 28: []
 };
  it('returns the correct action type', () => {
    const actual = plannerSetPlanData(dataToSet).type;
    const expected = PLANNER_SET_PLAN_DATA;
    expect(actual).toEqual(expected);
  });
  it('returns the correct data', () => {
    const actual = plannerSetPlanData(dataToSet).data;
    const expected = dataToSet;
    expect(actual).toEqual(expected);
  });
});