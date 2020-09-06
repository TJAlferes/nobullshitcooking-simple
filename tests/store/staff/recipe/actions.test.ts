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
} from '../../../../src/store/staff/recipe/actions';
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
} from '../../../../src/store/staff/recipe/types';

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
    expect(staffCreateNewRecipe(creatingRecipeInfo).type)
      .toEqual(STAFF_CREATE_NEW_RECIPE);
  });

  it('returns the correct recipeInfo', () => {
    expect(staffCreateNewRecipe(creatingRecipeInfo).recipeInfo)
      .toEqual(creatingRecipeInfo);
  });
});

describe('staffCreateNewRecipeSucceeded action creator', () => {
  it('returns the correct action type', () => {
    expect(staffCreateNewRecipeSucceeded('OK.').type)
      .toEqual(STAFF_CREATE_NEW_RECIPE_SUCCEEDED);
  });

  it('returns the correct message', () => {
    expect(staffCreateNewRecipeSucceeded('OK.').message).toEqual('OK.');
  });
});

describe('staffCreateNewRecipeFailed action creator', () => {
  it('returns the correct action type', () => {
    expect(staffCreateNewRecipeFailed('Try again.').type)
      .toEqual(STAFF_CREATE_NEW_RECIPE_FAILED);
  });

  it('returns the correct message', () => {
    expect(staffCreateNewRecipeFailed('Try again.').message)
      .toEqual('Try again.');
  });
});

describe('staffEditRecipe action creator', () => {
  it('returns the correct action type', () => {
    expect(staffEditRecipe(editingRecipeInfo).type).toEqual(STAFF_EDIT_RECIPE);
  });

  it('returns the correct recipeInfo', () => {
    expect(staffEditRecipe(editingRecipeInfo).recipeInfo)
      .toEqual(editingRecipeInfo);
  });
});

describe('staffEditRecipeSucceeded action creator', () => {
  it('returns the correct action type', () => {
    expect(staffEditRecipeSucceeded('OK.').type)
      .toEqual(STAFF_EDIT_RECIPE_SUCCEEDED);
  });

  it('returns the correct message', () => {
    expect(staffEditRecipeSucceeded('OK.').message).toEqual('OK.');
  });
});

describe('staffEditRecipeFailed action creator', () => {
  it('returns the correct action type', () => {
    expect(staffEditRecipeFailed('Try again.').type)
      .toEqual(STAFF_EDIT_RECIPE_FAILED);
  });

  it('returns the correct message', () => {
    expect(staffEditRecipeFailed('Try again.').message).toEqual('Try again.');
  });
});

describe('staffDeleteRecipe action creator', () => {
  it('returns the correct action type', () => {
    expect(staffDeleteRecipe(7).type).toEqual(STAFF_DELETE_RECIPE);
  });

  it('returns the correct id', () => {
    expect(staffDeleteRecipe(7).id).toEqual(7);
  });
});

describe('staffDeleteRecipeSucceeded action creator', () => {
  it('returns the correct action type', () => {
    expect(staffDeleteRecipeSucceeded('OK.').type)
      .toEqual(STAFF_DELETE_RECIPE_SUCCEEDED);
  });

  it('returns the correct message', () => {
    expect(staffDeleteRecipeSucceeded('OK.').message).toEqual('OK.');
  });
});

describe('staffDeleteRecipeFailed action creator', () => {
  it('returns the correct action type', () => {
    expect(staffDeleteRecipeFailed('Try again.').type)
      .toEqual(STAFF_DELETE_RECIPE_FAILED);
  });

  it('returns the correct message', () => {
    expect(staffDeleteRecipeFailed('Try again.').message).toEqual('Try again.');
  });
});