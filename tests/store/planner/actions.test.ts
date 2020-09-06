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
} from '../../../src/store/planner/actions';
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

describe('plannerClickDay action creator', () => {
  it('returns the correct action type', () => {
    expect(plannerClickDay(4).type).toEqual(PLANNER_CLICK_DAY);
  });

  it('returns the correct day', () => {
    expect(plannerClickDay(4).day).toEqual(4);
  });
});

describe('plannerAddRecipeToDay action creator', () => {
  it('returns the correct action type', () => {
    expect(plannerAddRecipeToDay(5, recipeOne).type)
      .toEqual(PLANNER_ADD_RECIPE_TO_DAY);
  });

  it('returns the correct day', () => {
    expect(plannerAddRecipeToDay(5, recipeOne).day).toEqual(5);
  });

  it('returns the correct recipe', () => {
    expect(plannerAddRecipeToDay(5, recipeOne).recipe).toEqual(recipeOne);
  });
});

describe('plannerRemoveRecipeFromDay action creator', () => {
  it('returns the correct action type', () => {
    expect(plannerRemoveRecipeFromDay(5, 0).type)
      .toEqual(PLANNER_REMOVE_RECIPE_FROM_DAY);
  });

  it('returns the correct day', () => {
    expect(plannerRemoveRecipeFromDay(5, 0).day).toEqual(5);
  });

  it('returns the correct index', () => {
    expect(plannerRemoveRecipeFromDay(5, 0).index).toEqual(0);
  });
});

describe('plannerReorderRecipeInDay action creator', () => {
  it('returns the correct action type', () => {
    expect(plannerReorderRecipeInDay(0, 2).type)
      .toEqual(PLANNER_REORDER_RECIPE_IN_DAY);
  });

  it('returns the correct dragIndex', () => {
    expect(plannerReorderRecipeInDay(0, 2).dragIndex).toEqual(0);
  });

  it('returns the correct hoverIndex', () => {
    expect(plannerReorderRecipeInDay(0, 2).hoverIndex).toEqual(2);
  });
});

describe('plannerClearWork action creator', () => {
  it('returns the correct action type', () => {
    expect(plannerClearWork().type).toEqual(PLANNER_CLEAR_WORK);
  });
});

describe('plannerSetCreating action creator', () => {
  it('returns the correct action type', () => {
    expect(plannerSetCreating().type).toEqual(PLANNER_SET_CREATING);
  });
});

describe('plannerSetEditingId action creator', () => {
  it('returns the correct action type', () => {
    expect(plannerSetEditingId(7544).type).toEqual(PLANNER_SET_EDITING_ID);
  });

  it('returns the correct id', () => {
    expect(plannerSetEditingId(7544).id).toEqual(7544);
  });
});

describe('plannerSetPlanName action creator', () => {
  it('returns the correct action type', () => {
    expect(plannerSetPlanName("A Great Plan").type)
      .toEqual(PLANNER_SET_PLAN_NAME);
  });

  it('returns the correct name', () => {
    expect(plannerSetPlanName("A Great Plan").name).toEqual("A Great Plan");
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
    expect(plannerSetPlanData(dataToSet).type).toEqual(PLANNER_SET_PLAN_DATA);
  });

  it('returns the correct data', () => {
    expect(plannerSetPlanData(dataToSet).data).toEqual(dataToSet);
  });
});