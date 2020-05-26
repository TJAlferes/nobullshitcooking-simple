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

describe('the staffCreateNewRecipe action creator', () => {
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

describe('the staffCreateNewRecipeSucceeded action creator', () => {
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

describe('the staffCreateNewRecipeFailed action creator', () => {
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



describe('the staffEditRecipe action creator', () => {
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

describe('the staffEditRecipeSucceeded action creator', () => {
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

describe('the staffEditRecipeFailed action creator', () => {
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



describe('the staffDeleteRecipe action creator', () => {
  it('returns the correct action type', () => {
    const actual = staffDeleteRecipe(7).type;
    const expected = STAFF_DELETE_RECIPE;
    expect(actual).toEqual(expected);
  });
  it('returns the correct ', () => {
    const actual = staffDeleteRecipe(7).recipeId;
    const expected = 7;
    expect(actual).toEqual(expected);
  });
});

describe('the staffDeleteRecipeSucceeded action creator', () => {
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

describe('the staffDeleteRecipeFailed action creator', () => {
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