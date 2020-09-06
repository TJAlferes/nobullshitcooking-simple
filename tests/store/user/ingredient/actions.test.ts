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
} from '../../../../src/store/user/ingredient/actions';
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
} from '../../../../src/store/user/ingredient/types';

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
    expect(userCreateNewPrivateIngredient(creatingIngredientInfo).type)
      .toEqual(USER_CREATE_NEW_PRIVATE_INGREDIENT);
  });

  it('returns the correct ingredientInfo', () => {
    expect(
      userCreateNewPrivateIngredient(creatingIngredientInfo).ingredientInfo
    ).toEqual(creatingIngredientInfo);
  });
});

describe('userCreateNewPrivateIngredientSucceeded action creator', () => {
  it('returns the correct action type', () => {
    expect(userCreateNewPrivateIngredientSucceeded('OK.').type)
      .toEqual(USER_CREATE_NEW_PRIVATE_INGREDIENT_SUCCEEDED);
  });

  it('returns the correct message', () => {
    expect(userCreateNewPrivateIngredientSucceeded('OK.').message)
      .toEqual('OK.');
  });
});

describe('userCreateNewPrivateIngredientFailed action creator', () => {
  it('returns the correct action type', () => {
    expect(userCreateNewPrivateIngredientFailed('Try again.').type)
      .toEqual(USER_CREATE_NEW_PRIVATE_INGREDIENT_FAILED);
  });

  it('returns the correct message', () => {
    expect(userCreateNewPrivateIngredientFailed('Try again.').message)
      .toEqual('Try again.');
  });
});

describe('userEditPrivateIngredient action creator', () => {
  it('returns the correct action type', () => {
    expect(userEditPrivateIngredient(editingIngredientInfo).type)
      .toEqual(USER_EDIT_PRIVATE_INGREDIENT);
  });

  it('returns the correct ingredientInfo', () => {
    expect(userEditPrivateIngredient(editingIngredientInfo).ingredientInfo)
      .toEqual(editingIngredientInfo);
  });
});

describe('userEditPrivateIngredientSucceeded action creator', () => {
  it('returns the correct action type', () => {
    expect(userEditPrivateIngredientSucceeded('OK.').type)
      .toEqual(USER_EDIT_PRIVATE_INGREDIENT_SUCCEEDED);
  });

  it('returns the correct message', () => {
    expect(userEditPrivateIngredientSucceeded('OK.').message).toEqual('OK.');
  });
});

describe('userEditPrivateIngredientFailed action creator', () => {
  it('returns the correct action type', () => {
    expect(userEditPrivateIngredientFailed('Try again.').type)
      .toEqual(USER_EDIT_PRIVATE_INGREDIENT_FAILED);
  });

  it('returns the correct message', () => {
    expect(userEditPrivateIngredientFailed('Try again.').message)
      .toEqual('Try again.');
  });
});

describe('userDeletePrivateIngredient action creator', () => {
  it('returns the correct action type', () => {
    expect(userDeletePrivateIngredient(7).type)
      .toEqual(USER_DELETE_PRIVATE_INGREDIENT);
  });

  it('returns the correct id', () => {
    expect(userDeletePrivateIngredient(7).id).toEqual(7);
  });
});

describe('userDeletePrivateIngredientSucceeded action creator', () => {
  it('returns the correct action type', () => {
    expect(userDeletePrivateIngredientSucceeded('OK.').type)
      .toEqual(USER_DELETE_PRIVATE_INGREDIENT_SUCCEEDED);
  });

  it('returns the correct message', () => {
    expect(userDeletePrivateIngredientSucceeded('OK.').message).toEqual('OK.');
  });
});

describe('userDeletePrivateIngredientFailed action creator', () => {
  it('returns the correct action type', () => {
    expect(userDeletePrivateIngredientFailed('Try again.').type)
      .toEqual(USER_DELETE_PRIVATE_INGREDIENT_FAILED);
  });

  it('returns the correct message', () => {
    expect(userDeletePrivateIngredientFailed('Try again.').message)
      .toEqual('Try again.');
  });
});