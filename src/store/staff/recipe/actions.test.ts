import {
  staffCreateNewRecipe,
  staffCreateNewRecipeSucceeded,
  staffCreateNewRecipeFailed,
  staffEditRecipe,
  staffEditRecipeSucceeded,
  staffEditRecipeFailed,
  staffDeleteRecipe,
  staffDeleteRecipeSucceeded,
  staffDeleteRecipeFailed
} from './actions';
import {
  STAFF_CREATE_NEW_RECIPE,
  STAFF_CREATE_NEW_RECIPE_SUCCEEDED,
  STAFF_CREATE_NEW_RECIPE_FAILED,
  STAFF_EDIT_RECIPE,
  STAFF_EDIT_RECIPE_SUCCEEDED,
  STAFF_EDIT_RECIPE_FAILED,
  STAFF_DELETE_RECIPE,
  STAFF_DELETE_RECIPE_SUCCEEDED,
  STAFF_DELETE_RECIPE_FAILED
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
  recipeFullImage: null,
  recipeThumbImage: null,
  recipeTinyImage: null,
  equipmentImage: null,
  equipmentFullImage: null,
  ingredientsImage: null,
  ingredientsFullImage: null,
  cookingImage: null,
  cookingFullImage: null
};

const editingRecipeInfo = {
  id: 888,
  recipePrevImage: "nobsc-recipe-default",
  equipmentPrevImage: "nobsc-recipe-equipment-default",
  ingredientsPrevImage: "nobsc-recipe-ingredients-default",
  cookingPrevImage: "nobsc-recipe-cooking-default",
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
  recipeFullImage: null,
  recipeThumbImage: null,
  recipeTinyImage: null,
  equipmentImage: null,
  equipmentFullImage: null,
  ingredientsImage: null,
  ingredientsFullImage: null,
  cookingImage: null,
  cookingFullImage: null
};

describe('staffCreateNewRecipe action creator', () => {
  it('returns the correct action type', () => {
    const actual = staffCreateNewRecipe(creatingRecipeInfo).type;
    const expected = STAFF_CREATE_NEW_RECIPE;
    expect(actual).toEqual(expected);
  });
  it('returns the correct recipeInfo', () => {
    const actual = staffCreateNewRecipe(creatingRecipeInfo).recipeInfo;
    const expected = creatingRecipeInfo;
    expect(actual).toEqual(expected);
  });
});

describe('staffCreateNewRecipeSucceeded action creator', () => {
  it('returns the correct action type', () => {
    const actual = staffCreateNewRecipeSucceeded('OK.').type;
    const expected = STAFF_CREATE_NEW_RECIPE_SUCCEEDED;
    expect(actual).toEqual(expected);
  });
  it('returns the correct message', () => {
    const actual = staffCreateNewRecipeSucceeded('OK.').message;
    const expected = 'OK.';
    expect(actual).toEqual(expected);
  });
});

describe('staffCreateNewRecipeFailed action creator', () => {
  it('returns the correct action type', () => {
    const actual = staffCreateNewRecipeFailed('Try again.').type;
    const expected = STAFF_CREATE_NEW_RECIPE_FAILED;
    expect(actual).toEqual(expected);
  });
  it('returns the correct message', () => {
    const actual = staffCreateNewRecipeFailed('Try again.').message;
    const expected = 'Try again.';
    expect(actual).toEqual(expected);
  });
});



describe('staffEditRecipe action creator', () => {
  it('returns the correct action type', () => {
    const actual = staffEditRecipe(editingRecipeInfo).type;
    const expected = STAFF_EDIT_RECIPE;
    expect(actual).toEqual(expected);
  });
  it('returns the correct recipeInfo', () => {
    const actual = staffEditRecipe(editingRecipeInfo).recipeInfo;
    const expected = editingRecipeInfo;
    expect(actual).toEqual(expected);
  });
});

describe('staffEditRecipeSucceeded action creator', () => {
  it('returns the correct action type', () => {
    const actual = staffEditRecipeSucceeded('OK.').type;
    const expected = STAFF_EDIT_RECIPE_SUCCEEDED;
    expect(actual).toEqual(expected);
  });
  it('returns the correct message', () => {
    const actual = staffEditRecipeSucceeded('OK.').message;
    const expected = 'OK.';
    expect(actual).toEqual(expected);
  });
});

describe('staffEditRecipeFailed action creator', () => {
  it('returns the correct action type', () => {
    const actual = staffEditRecipeFailed('Try again.').type;
    const expected = STAFF_EDIT_RECIPE_FAILED;
    expect(actual).toEqual(expected);
  });
  it('returns the correct message', () => {
    const actual = staffEditRecipeFailed('Try again.').message;
    const expected = 'Try again.';
    expect(actual).toEqual(expected);
  });
});



describe('staffDeleteRecipe action creator', () => {
  it('returns the correct action type', () => {
    const actual = staffDeleteRecipe(7).type;
    const expected = STAFF_DELETE_RECIPE;
    expect(actual).toEqual(expected);
  });
  it('returns the correct id', () => {
    const actual = staffDeleteRecipe(7).id;
    const expected = 7;
    expect(actual).toEqual(expected);
  });
});

describe('staffDeleteRecipeSucceeded action creator', () => {
  it('returns the correct action type', () => {
    const actual = staffDeleteRecipeSucceeded('OK.').type;
    const expected = STAFF_DELETE_RECIPE_SUCCEEDED;
    expect(actual).toEqual(expected);
  });
  it('returns the correct message', () => {
    const actual = staffDeleteRecipeSucceeded('OK.').message;
    const expected = 'OK.';
    expect(actual).toEqual(expected);
  });
});

describe('staffDeleteRecipeFailed action creator', () => {
  it('returns the correct action type', () => {
    const actual = staffDeleteRecipeFailed('Try again.').type;
    const expected = STAFF_DELETE_RECIPE_FAILED;
    expect(actual).toEqual(expected);
  });
  it('returns the correct message', () => {
    const actual = staffDeleteRecipeFailed('Try again.').message;
    const expected = 'Try again.';
    expect(actual).toEqual(expected);
  });
});