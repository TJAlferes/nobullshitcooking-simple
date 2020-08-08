import {
  userCreateNewPrivateIngredient,
  userCreateNewPrivateIngredientSucceeded,
  userCreateNewPrivateIngredientFailed,
  userEditPrivateIngredient,
  userEditPrivateIngredientSucceeded,
  userEditPrivateIngredientFailed,
  userDeletePrivateIngredient,
  userDeletePrivateIngredientSucceeded,
  userDeletePrivateIngredientFailed
} from './actions';
import {
  USER_CREATE_NEW_PRIVATE_INGREDIENT,
  USER_CREATE_NEW_PRIVATE_INGREDIENT_SUCCEEDED,
  USER_CREATE_NEW_PRIVATE_INGREDIENT_FAILED,
  USER_EDIT_PRIVATE_INGREDIENT,
  USER_EDIT_PRIVATE_INGREDIENT_SUCCEEDED,
  USER_EDIT_PRIVATE_INGREDIENT_FAILED,
  USER_DELETE_PRIVATE_INGREDIENT,
  USER_DELETE_PRIVATE_INGREDIENT_SUCCEEDED,
  USER_DELETE_PRIVATE_INGREDIENT_FAILED
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

describe('userCreateNewPrivateIngredient action creator', () => {
  it('returns the correct action type', () => {
    const actual = userCreateNewPrivateIngredient(creatingIngredientInfo).type;
    const expected = USER_CREATE_NEW_PRIVATE_INGREDIENT;
    expect(actual).toEqual(expected);
  });
  it('returns the correct ingredientInfo', () => {
    const actual = userCreateNewPrivateIngredient(creatingIngredientInfo).ingredientInfo;
    const expected = creatingIngredientInfo;
    expect(actual).toEqual(expected);
  });
});

describe('userCreateNewPrivateIngredientSucceeded action creator', () => {
  it('returns the correct action type', () => {
    const actual = userCreateNewPrivateIngredientSucceeded('OK.').type;
    const expected = USER_CREATE_NEW_PRIVATE_INGREDIENT_SUCCEEDED;
    expect(actual).toEqual(expected);
  });
  it('returns the correct message', () => {
    const actual = userCreateNewPrivateIngredientSucceeded('OK.').message;
    const expected = 'OK.';
    expect(actual).toEqual(expected);
  });
});

describe('userCreateNewPrivateIngredientFailed action creator', () => {
  it('returns the correct action type', () => {
    const actual = userCreateNewPrivateIngredientFailed('Try again.').type;
    const expected = USER_CREATE_NEW_PRIVATE_INGREDIENT_FAILED;
    expect(actual).toEqual(expected);
  });
  it('returns the correct message', () => {
    const actual = userCreateNewPrivateIngredientFailed('Try again.').message;
    const expected = 'Try again.';
    expect(actual).toEqual(expected);
  });
});

describe('userEditPrivateIngredient action creator', () => {
  it('returns the correct action type', () => {
    const actual = userEditPrivateIngredient(editingIngredientInfo).type;
    const expected = USER_EDIT_PRIVATE_INGREDIENT;
    expect(actual).toEqual(expected);
  });
  it('returns the correct ingredientInfo', () => {
    const actual = userEditPrivateIngredient(editingIngredientInfo).ingredientInfo;
    const expected = editingIngredientInfo;
    expect(actual).toEqual(expected);
  });
});

describe('userEditPrivateIngredientSucceeded action creator', () => {
  it('returns the correct action type', () => {
    const actual = userEditPrivateIngredientSucceeded('OK.').type;
    const expected = USER_EDIT_PRIVATE_INGREDIENT_SUCCEEDED;
    expect(actual).toEqual(expected);
  });
  it('returns the correct message', () => {
    const actual = userEditPrivateIngredientSucceeded('OK.').message;
    const expected = 'OK.';
    expect(actual).toEqual(expected);
  });
});

describe('userEditPrivateIngredientFailed action creator', () => {
  it('returns the correct action type', () => {
    const actual = userEditPrivateIngredientFailed('Try again.').type;
    const expected = USER_EDIT_PRIVATE_INGREDIENT_FAILED;
    expect(actual).toEqual(expected);
  });
  it('returns the correct message', () => {
    const actual = userEditPrivateIngredientFailed('Try again.').message;
    const expected = 'Try again.';
    expect(actual).toEqual(expected);
  });
});

describe('userDeletePrivateIngredient action creator', () => {
  it('returns the correct action type', () => {
    const actual = userDeletePrivateIngredient(7).type;
    const expected = USER_DELETE_PRIVATE_INGREDIENT;
    expect(actual).toEqual(expected);
  });
  it('returns the correct id', () => {
    const actual = userDeletePrivateIngredient(7).id;
    const expected = 7;
    expect(actual).toEqual(expected);
  });
});

describe('userDeletePrivateIngredientSucceeded action creator', () => {
  it('returns the correct action type', () => {
    const actual = userDeletePrivateIngredientSucceeded('OK.').type;
    const expected = USER_DELETE_PRIVATE_INGREDIENT_SUCCEEDED;
    expect(actual).toEqual(expected);
  });
  it('returns the correct message', () => {
    const actual = userDeletePrivateIngredientSucceeded('OK.').message;
    const expected = 'OK.';
    expect(actual).toEqual(expected);
  });
});

describe('userDeletePrivateIngredientFailed action creator', () => {
  it('returns the correct action type', () => {
    const actual = userDeletePrivateIngredientFailed('Try again.').type;
    const expected = USER_DELETE_PRIVATE_INGREDIENT_FAILED;
    expect(actual).toEqual(expected);
  });
  it('returns the correct message', () => {
    const actual = userDeletePrivateIngredientFailed('Try again.').message;
    const expected = 'Try again.';
    expect(actual).toEqual(expected);
  });
});