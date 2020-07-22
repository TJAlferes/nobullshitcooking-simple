import {
  userCreateNewPrivateRecipe,
  userCreateNewPrivateRecipeSucceeded,
  userCreateNewPrivateRecipeFailed,
  userEditPrivateRecipe,
  userEditPrivateRecipeSucceeded,
  userEditPrivateRecipeFailed,
  userDeletePrivateRecipe,
  userDeletePrivateRecipeSucceeded,
  userDeletePrivateRecipeFailed,

  userCreateNewPublicRecipe,
  userCreateNewPublicRecipeSucceeded,
  userCreateNewPublicRecipeFailed,
  userEditPublicRecipe,
  userEditPublicRecipeSucceeded,
  userEditPublicRecipeFailed,
  userDisownPublicRecipe,
  userDisownPublicRecipeSucceeded,
  userDisownPublicRecipeFailed
} from './actions';
import {
  USER_CREATE_NEW_PRIVATE_RECIPE,
  USER_CREATE_NEW_PRIVATE_RECIPE_SUCCEEDED,
  USER_CREATE_NEW_PRIVATE_RECIPE_FAILED,
  USER_EDIT_PRIVATE_RECIPE,
  USER_EDIT_PRIVATE_RECIPE_SUCCEEDED,
  USER_EDIT_PRIVATE_RECIPE_FAILED,
  USER_DELETE_PRIVATE_RECIPE,
  USER_DELETE_PRIVATE_RECIPE_SUCCEEDED,
  USER_DELETE_PRIVATE_RECIPE_FAILED,

  USER_CREATE_NEW_PUBLIC_RECIPE,
  USER_CREATE_NEW_PUBLIC_RECIPE_SUCCEEDED,
  USER_CREATE_NEW_PUBLIC_RECIPE_FAILED,
  USER_EDIT_PUBLIC_RECIPE,
  USER_EDIT_PUBLIC_RECIPE_SUCCEEDED,
  USER_EDIT_PUBLIC_RECIPE_FAILED,
  USER_DISOWN_PUBLIC_RECIPE,
  USER_DISOWN_PUBLIC_RECIPE_SUCCEEDED,
  USER_DISOWN_PUBLIC_RECIPE_FAILED,
} from './types';

const creatingRecipeInfo = {
  ownership: "private",
  recipeTypeId: 1,
  cuisineId: 1,
  title: "My Secret Recipe",
  description: "Don't worry about it.",
  directions: "Do nothing.",
  requiredMethods: [{methodId: 1}, {methodId: 3}],
  requiredEquipment: [{amount: 1, equipment: 1}],
  requiredIngredients: [{amount: 1, unit: 1, ingredient: 1}],
  requiredSubrecipes: [],
  recipeImage: null,
  fullRecipeImage: null,
  thumbRecipeImage: null,
  tinyRecipeImage: null,
  recipeEquipmentImage: null,
  fullRecipeEquipmentImage: null,
  recipeIngredientsImage: null,
  fullRecipeIngredientsImage: null,
  recipeCookingImage: null,
  fullRecipeCookingImage: null
};
const editingRecipeInfo = {
  recipeId: 888,
  prevRecipeImage: "nobsc-recipe-default",
  prevEquipmentImage: "nobsc-recipe-equipment-default",
  prevIngredientsImage: "nobsc-recipe-ingredients-default",
  prevCookingImage: "nobsc-recipe-cooking-default",
  ownership: "private",
  recipeTypeId: 1,
  cuisineId: 1,
  title: "My Secret Recipe",
  description: "Don't worry about it.",
  directions: "Do nothing.",
  requiredMethods: [{methodId: 1}, {methodId: 3}],
  requiredEquipment: [{amount: 1, equipment: 1}],
  requiredIngredients: [{amount: 1, unit: 1, ingredient: 1}],
  requiredSubrecipes: [],
  recipeImage: null,
  fullRecipeImage: null,
  thumbRecipeImage: null,
  tinyRecipeImage: null,
  recipeEquipmentImage: null,
  fullRecipeEquipmentImage: null,
  recipeIngredientsImage: null,
  fullRecipeIngredientsImage: null,
  recipeCookingImage: null,
  fullRecipeCookingImage: null
};

describe('userCreateNewPrivateRecipe action creator', () => {
  it('returns the correct action type', () => {
    const actual = userCreateNewPrivateRecipe(creatingRecipeInfo).type;
    const expected = USER_CREATE_NEW_PRIVATE_RECIPE;
    expect(actual).toEqual(expected);
  });
  it('returns the correct recipeInfo', () => {
    const actual = userCreateNewPrivateRecipe(creatingRecipeInfo).recipeInfo;
    const expected = creatingRecipeInfo;
    expect(actual).toEqual(expected);
  });
});
describe('userCreateNewPrivateRecipeSucceeded action creator', () => {
  it('returns the correct action type', () => {
    const actual = userCreateNewPrivateRecipeSucceeded('OK.').type;
    const expected = USER_CREATE_NEW_PRIVATE_RECIPE_SUCCEEDED;
    expect(actual).toEqual(expected);
  });
  it('returns the correct message', () => {
    const actual = userCreateNewPrivateRecipeSucceeded('OK.').message;
    const expected = 'OK.';
    expect(actual).toEqual(expected);
  });
});
describe('userCreateNewPrivateRecipeFailed action creator', () => {
  it('returns the correct action type', () => {
    const actual = userCreateNewPrivateRecipeFailed('Try again.').type;
    const expected = USER_CREATE_NEW_PRIVATE_RECIPE_FAILED;
    expect(actual).toEqual(expected);
  });
  it('returns the correct message', () => {
    const actual = userCreateNewPrivateRecipeFailed('Try again.').message;
    const expected = 'Try again.';
    expect(actual).toEqual(expected);
  });
});


describe('userEditPrivateRecipe action creator', () => {
  it('returns the correct action type', () => {
    const actual = userEditPrivateRecipe(editingRecipeInfo).type;
    const expected = USER_EDIT_PRIVATE_RECIPE;
    expect(actual).toEqual(expected);
  });
  it('returns the correct recipeInfo', () => {
    const actual = userEditPrivateRecipe(editingRecipeInfo).recipeInfo;
    const expected = editingRecipeInfo;
    expect(actual).toEqual(expected);
  });
});
describe('userEditPrivateRecipeSucceeded action creator', () => {
  it('returns the correct action type', () => {
    const actual = userEditPrivateRecipeSucceeded('OK.').type;
    const expected = USER_EDIT_PRIVATE_RECIPE_SUCCEEDED;
    expect(actual).toEqual(expected);
  });
  it('returns the correct message', () => {
    const actual = userEditPrivateRecipeSucceeded('OK.').message;
    const expected = 'OK.';
    expect(actual).toEqual(expected);
  });
});
describe('userEditPrivateRecipeFailed action creator', () => {
  it('returns the correct action type', () => {
    const actual = userEditPrivateRecipeFailed('Try again.').type;
    const expected = USER_EDIT_PRIVATE_RECIPE_FAILED;
    expect(actual).toEqual(expected);
  });
  it('returns the correct message', () => {
    const actual = userEditPrivateRecipeFailed('Try again.').message;
    const expected = 'Try again.';
    expect(actual).toEqual(expected);
  });
});


describe('userDeletePrivateRecipe action creator', () => {
  it('returns the correct action type', () => {
    const actual = userDeletePrivateRecipe(7).type;
    const expected = USER_DELETE_PRIVATE_RECIPE;
    expect(actual).toEqual(expected);
  });
  it('returns the correct ', () => {
    const actual = userDeletePrivateRecipe(7).recipeId;
    const expected = 7;
    expect(actual).toEqual(expected);
  });
});
describe('userDeletePrivateRecipeSucceeded action creator', () => {
  it('returns the correct action type', () => {
    const actual = userDeletePrivateRecipeSucceeded('OK.').type;
    const expected = USER_DELETE_PRIVATE_RECIPE_SUCCEEDED;
    expect(actual).toEqual(expected);
  });
  it('returns the correct message', () => {
    const actual = userDeletePrivateRecipeSucceeded('OK.').message;
    const expected = 'OK.';
    expect(actual).toEqual(expected);
  });
});
describe('userDeletePrivateRecipeFailed action creator', () => {
  it('returns the correct action type', () => {
    const actual = userDeletePrivateRecipeFailed('Try again.').type;
    const expected = USER_DELETE_PRIVATE_RECIPE_FAILED;
    expect(actual).toEqual(expected);
  });
  it('returns the correct message', () => {
    const actual = userDeletePrivateRecipeFailed('Try again.').message;
    const expected = 'Try again.';
    expect(actual).toEqual(expected);
  });
});





describe('userCreateNewPublicRecipe action creator', () => {
  it('returns the correct action type', () => {
    const actual = userCreateNewPublicRecipe(creatingRecipeInfo).type;
    const expected = USER_CREATE_NEW_PUBLIC_RECIPE;
    expect(actual).toEqual(expected);
  });
  it('returns the correct recipeInfo', () => {
    const actual = userCreateNewPublicRecipe(creatingRecipeInfo).recipeInfo;
    const expected = creatingRecipeInfo;
    expect(actual).toEqual(expected);
  });
});
describe('userCreateNewPublicRecipeSucceeded action creator', () => {
  it('returns the correct action type', () => {
    const actual = userCreateNewPublicRecipeSucceeded('OK.').type;
    const expected = USER_CREATE_NEW_PUBLIC_RECIPE_SUCCEEDED;
    expect(actual).toEqual(expected);
  });
  it('returns the correct message', () => {
    const actual = userCreateNewPublicRecipeSucceeded('OK.').message;
    const expected = 'OK.';
    expect(actual).toEqual(expected);
  });
});
describe('userFailed action creator', () => {
  it('returns the correct action type', () => {
    const actual = userCreateNewPublicRecipeFailed('Try again.').type;
    const expected = USER_CREATE_NEW_PUBLIC_RECIPE_FAILED;
    expect(actual).toEqual(expected);
  });
  it('returns the correct message', () => {
    const actual = userCreateNewPublicRecipeFailed('Try again.').message;
    const expected = 'Try again.';
    expect(actual).toEqual(expected);
  });
});


describe('userEditPublicRecipe action creator', () => {
  it('returns the correct action type', () => {
    const actual = userEditPublicRecipe(editingRecipeInfo).type;
    const expected = USER_EDIT_PUBLIC_RECIPE;
    expect(actual).toEqual(expected);
  });
  it('returns the correct recipeInfo', () => {
    const actual = userEditPublicRecipe(editingRecipeInfo).recipeInfo;
    const expected = editingRecipeInfo;
    expect(actual).toEqual(expected);
  });
});
describe('userEditPublicRecipeSucceeded action creator', () => {
  it('returns the correct action type', () => {
    const actual = userEditPublicRecipeSucceeded('OK.').type;
    const expected = USER_EDIT_PUBLIC_RECIPE_SUCCEEDED;
    expect(actual).toEqual(expected);
  });
  it('returns the correct message', () => {
    const actual = userEditPublicRecipeSucceeded('OK.').message;
    const expected = 'OK.';
    expect(actual).toEqual(expected);
  });
});
describe('userEditPublicRecipeFailed action creator', () => {
  it('returns the correct action type', () => {
    const actual = userEditPublicRecipeFailed('Try again.').type;
    const expected = USER_EDIT_PUBLIC_RECIPE_FAILED;
    expect(actual).toEqual(expected);
  });
  it('returns the correct message', () => {
    const actual = userEditPublicRecipeFailed('Try again.').message;
    const expected = 'Try again.';
    expect(actual).toEqual(expected);
  });
});


describe('userDisownPublicRecipe action creator', () => {
  it('returns the correct action type', () => {
    const actual = userDisownPublicRecipe(7).type;
    const expected = USER_DISOWN_PUBLIC_RECIPE;
    expect(actual).toEqual(expected);
  });
  it('returns the correct recipeId', () => {
    const actual = userDisownPublicRecipe(7).recipeId;
    const expected = 7;
    expect(actual).toEqual(expected);
  });
});
describe('userDisownPublicRecipeSucceeded action creator', () => {
  it('returns the correct action type', () => {
    const actual = userDisownPublicRecipeSucceeded('OK.').type;
    const expected = USER_DISOWN_PUBLIC_RECIPE_SUCCEEDED;
    expect(actual).toEqual(expected);
  });
  it('returns the correct message', () => {
    const actual = userDisownPublicRecipeSucceeded('OK.').message;
    const expected = 'OK.';
    expect(actual).toEqual(expected);
  });
});
describe('userDisownPublicRecipeFailed action creator', () => {
  it('returns the correct action type', () => {
    const actual = userDisownPublicRecipeFailed('Try again.').type;
    const expected = USER_DISOWN_PUBLIC_RECIPE_FAILED;
    expect(actual).toEqual(expected);
  });
  it('returns the correct message', () => {
    const actual = userDisownPublicRecipeFailed('Try again.').message;
    const expected = 'Try again.';
    expect(actual).toEqual(expected);
  });
});