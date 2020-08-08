import {
  staffCreateNewIngredient,
  staffCreateNewIngredientSucceeded,
  staffCreateNewIngredientFailed,
  staffEditIngredient,
  staffEditIngredientSucceeded,
  staffEditIngredientFailed,
  staffDeleteIngredient,
  staffDeleteIngredientSucceeded,
  staffDeleteIngredientFailed
} from './actions';
import {
  STAFF_CREATE_NEW_INGREDIENT,
  STAFF_CREATE_NEW_INGREDIENT_SUCCEEDED,
  STAFF_CREATE_NEW_INGREDIENT_FAILED,
  STAFF_EDIT_INGREDIENT,
  STAFF_EDIT_INGREDIENT_SUCCEEDED,
  STAFF_EDIT_INGREDIENT_FAILED,
  STAFF_DELETE_INGREDIENT,
  STAFF_DELETE_INGREDIENT_SUCCEEDED,
  STAFF_DELETE_INGREDIENT_FAILED
} from './types';

const creatingIngredientInfo = {
  ingredientTypeId: 3,
  name: "HOT Sauce",
  description: "From Uncle Bob.",
  image: "hot-sauce",
  fullImage: null,
  tinyImage: null
};

const editingIngredientInfo = {
  ingredientTypeId: 3,
  name: "HOT Sauce",
  description: "From Uncle Bob.",
  image: "hot-sauce",
  fullImage: null,
  tinyImage: null,
  id: 377,
  prevImage: "hot-sauce"
};

describe('staffCreateNewIngredient action creator', () => {
  it('returns the correct action type', () => {
    const actual = staffCreateNewIngredient(creatingIngredientInfo).type;
    const expected = STAFF_CREATE_NEW_INGREDIENT;
    expect(actual).toEqual(expected);
  });
  it('returns the correct ingredientInfo', () => {
    const actual = staffCreateNewIngredient(creatingIngredientInfo).ingredientInfo;
    const expected = creatingIngredientInfo;
    expect(actual).toEqual(expected);
  });
});

describe('staffCreateNewIngredientSucceeded action creator', () => {
  it('returns the correct action type', () => {
    const actual = staffCreateNewIngredientSucceeded('OK.').type;
    const expected = STAFF_CREATE_NEW_INGREDIENT_SUCCEEDED;
    expect(actual).toEqual(expected);
  });
  it('returns the correct message', () => {
    const actual = staffCreateNewIngredientSucceeded('OK.').message;
    const expected = 'OK.';
    expect(actual).toEqual(expected);
  });
});

describe('staffCreateNewIngredientFailed action creator', () => {
  it('returns the correct action type', () => {
    const actual = staffCreateNewIngredientFailed('Try again.').type;
    const expected = STAFF_CREATE_NEW_INGREDIENT_FAILED;
    expect(actual).toEqual(expected);
  });
  it('returns the correct message', () => {
    const actual = staffCreateNewIngredientFailed('Try again.').message;
    const expected = 'Try again.';
    expect(actual).toEqual(expected);
  });
});

describe('staffEditIngredient action creator', () => {
  it('returns the correct action type', () => {
    const actual = staffEditIngredient(editingIngredientInfo).type;
    const expected = STAFF_EDIT_INGREDIENT;
    expect(actual).toEqual(expected);
  });
  it('returns the correct ingredientInfo', () => {
    const actual = staffEditIngredient(editingIngredientInfo).ingredientInfo;
    const expected = editingIngredientInfo;
    expect(actual).toEqual(expected);
  });
});

describe('staffEditIngredientSucceeded action creator', () => {
  it('returns the correct action type', () => {
    const actual = staffEditIngredientSucceeded('OK.').type;
    const expected = STAFF_EDIT_INGREDIENT_SUCCEEDED;
    expect(actual).toEqual(expected);
  });
  it('returns the correct message', () => {
    const actual = staffEditIngredientSucceeded('OK.').message;
    const expected = 'OK.';
    expect(actual).toEqual(expected);
  });
});

describe('staffEditIngredientFailed action creator', () => {
  it('returns the correct action type', () => {
    const actual = staffEditIngredientFailed('Try again.').type;
    const expected = STAFF_EDIT_INGREDIENT_FAILED;
    expect(actual).toEqual(expected);
  });
  it('returns the correct message', () => {
    const actual = staffEditIngredientFailed('Try again.').message;
    const expected = 'Try again.';
    expect(actual).toEqual(expected);
  });
});

describe('staffDeleteIngredient action creator', () => {
  it('returns the correct action type', () => {
    const actual = staffDeleteIngredient(7).type;
    const expected = STAFF_DELETE_INGREDIENT;
    expect(actual).toEqual(expected);
  });
  it('returns the correct ingredientId', () => {
    const actual = staffDeleteIngredient(7).id;
    const expected = 7;
    expect(actual).toEqual(expected);
  });
});

describe('staffDeleteIngredientSucceeded action creator', () => {
  it('returns the correct action type', () => {
    const actual = staffDeleteIngredientSucceeded('OK.').type;
    const expected = STAFF_DELETE_INGREDIENT_SUCCEEDED;
    expect(actual).toEqual(expected);
  });
  it('returns the correct message', () => {
    const actual = staffDeleteIngredientSucceeded('OK.').message;
    const expected = 'OK.';
    expect(actual).toEqual(expected);
  });
});

describe('staffDeleteIngredientFailed action creator', () => {
  it('returns the correct action type', () => {
    const actual = staffDeleteIngredientFailed('Try again.').type;
    const expected = STAFF_DELETE_INGREDIENT_FAILED;
    expect(actual).toEqual(expected);
  });
  it('returns the correct message', () => {
    const actual = staffDeleteIngredientFailed('Try again.').message;
    const expected = 'Try again.';
    expect(actual).toEqual(expected);
  });
});