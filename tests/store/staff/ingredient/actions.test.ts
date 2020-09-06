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
} from '../../../../src/store/staff/ingredient/actions';
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
} from '../../../../src/store/staff/ingredient/types';

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
    expect(staffCreateNewIngredient(creatingIngredientInfo).type)
      .toEqual(STAFF_CREATE_NEW_INGREDIENT);
  });

  it('returns the correct ingredientInfo', () => {
    expect(staffCreateNewIngredient(creatingIngredientInfo).ingredientInfo)
      .toEqual(creatingIngredientInfo);
  });
});

describe('staffCreateNewIngredientSucceeded action creator', () => {
  it('returns the correct action type', () => {
    expect(staffCreateNewIngredientSucceeded('OK.').type)
      .toEqual(STAFF_CREATE_NEW_INGREDIENT_SUCCEEDED);
  });

  it('returns the correct message', () => {
    expect(staffCreateNewIngredientSucceeded('OK.').message).toEqual('OK.');
  });
});

describe('staffCreateNewIngredientFailed action creator', () => {
  it('returns the correct action type', () => {
    expect(staffCreateNewIngredientFailed('Try again.').type)
      .toEqual(STAFF_CREATE_NEW_INGREDIENT_FAILED);
  });

  it('returns the correct message', () => {
    expect(staffCreateNewIngredientFailed('Try again.').message)
      .toEqual('Try again.');
  });
});

describe('staffEditIngredient action creator', () => {
  it('returns the correct action type', () => {
    expect(staffEditIngredient(editingIngredientInfo).type)
      .toEqual(STAFF_EDIT_INGREDIENT);
  });

  it('returns the correct ingredientInfo', () => {
    expect(staffEditIngredient(editingIngredientInfo).ingredientInfo)
      .toEqual(editingIngredientInfo);
  });
});

describe('staffEditIngredientSucceeded action creator', () => {
  it('returns the correct action type', () => {
    expect(staffEditIngredientSucceeded('OK.').type)
      .toEqual(STAFF_EDIT_INGREDIENT_SUCCEEDED);
  });

  it('returns the correct message', () => {
    expect(staffEditIngredientSucceeded('OK.').message).toEqual('OK.');
  });
});

describe('staffEditIngredientFailed action creator', () => {
  it('returns the correct action type', () => {
    expect(staffEditIngredientFailed('Try again.').type)
      .toEqual(STAFF_EDIT_INGREDIENT_FAILED);
  });

  it('returns the correct message', () => {
    expect(staffEditIngredientFailed('Try again.').message)
      .toEqual('Try again.');
  });
});

describe('staffDeleteIngredient action creator', () => {
  it('returns the correct action type', () => {
    expect(staffDeleteIngredient(7).type).toEqual(STAFF_DELETE_INGREDIENT);
  });

  it('returns the correct ingredientId', () => {
    expect(staffDeleteIngredient(7).id).toEqual(7);
  });
});

describe('staffDeleteIngredientSucceeded action creator', () => {
  it('returns the correct action type', () => {
    expect(staffDeleteIngredientSucceeded('OK.').type)
      .toEqual(STAFF_DELETE_INGREDIENT_SUCCEEDED);
  });

  it('returns the correct message', () => {
    expect(staffDeleteIngredientSucceeded('OK.').message).toEqual('OK.');
  });
});

describe('staffDeleteIngredientFailed action creator', () => {
  it('returns the correct action type', () => {
    expect(staffDeleteIngredientFailed('Try again.').type)
      .toEqual(STAFF_DELETE_INGREDIENT_FAILED);
  });

  it('returns the correct message', () => {
    expect(staffDeleteIngredientFailed('Try again.').message)
      .toEqual('Try again.');
  });
});