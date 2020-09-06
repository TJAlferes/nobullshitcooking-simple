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
} from '../../../../src/store/user/recipe/actions';
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
} from '../../../../src/store/user/recipe/types';

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

describe('userCreateNewPrivateRecipe action creator', () => {
  it('returns the correct action type', () => {
    expect(userCreateNewPrivateRecipe(creatingRecipeInfo).type)
      .toEqual(USER_CREATE_NEW_PRIVATE_RECIPE);
  });

  it('returns the correct recipeInfo', () => {
    expect(userCreateNewPrivateRecipe(creatingRecipeInfo).recipeInfo).toEqual(creatingRecipeInfo);
  });
});

describe('userCreateNewPrivateRecipeSucceeded action creator', () => {
  it('returns the correct action type', () => {
    expect(userCreateNewPrivateRecipeSucceeded('OK.').type)
      .toEqual(USER_CREATE_NEW_PRIVATE_RECIPE_SUCCEEDED);
  });

  it('returns the correct message', () => {
    expect(userCreateNewPrivateRecipeSucceeded('OK.').message).toEqual('OK.');
  });
});

describe('userCreateNewPrivateRecipeFailed action creator', () => {
  it('returns the correct action type', () => {
    expect(userCreateNewPrivateRecipeFailed('Try again.').type)
      .toEqual(USER_CREATE_NEW_PRIVATE_RECIPE_FAILED);
  });

  it('returns the correct message', () => {
    expect(userCreateNewPrivateRecipeFailed('Try again.').message)
      .toEqual('Try again.');
  });
});

describe('userEditPrivateRecipe action creator', () => {
  it('returns the correct action type', () => {
    expect(userEditPrivateRecipe(editingRecipeInfo).type)
      .toEqual(USER_EDIT_PRIVATE_RECIPE);
  });

  it('returns the correct recipeInfo', () => {
    expect(userEditPrivateRecipe(editingRecipeInfo).recipeInfo)
      .toEqual(editingRecipeInfo);
  });
});

describe('userEditPrivateRecipeSucceeded action creator', () => {
  it('returns the correct action type', () => {
    expect(userEditPrivateRecipeSucceeded('OK.').type)
      .toEqual(USER_EDIT_PRIVATE_RECIPE_SUCCEEDED);
  });

  it('returns the correct message', () => {
    expect(userEditPrivateRecipeSucceeded('OK.').message).toEqual('OK.');
  });
});

describe('userEditPrivateRecipeFailed action creator', () => {
  it('returns the correct action type', () => {
    expect(userEditPrivateRecipeFailed('Try again.').type)
      .toEqual(USER_EDIT_PRIVATE_RECIPE_FAILED);
  });

  it('returns the correct message', () => {
    expect(userEditPrivateRecipeFailed('Try again.').message)
      .toEqual('Try again.');
  });
});

describe('userDeletePrivateRecipe action creator', () => {
  it('returns the correct action type', () => {
    expect(userDeletePrivateRecipe(7).type).toEqual(USER_DELETE_PRIVATE_RECIPE);
  });

  it('returns the correct id', () => {
    expect(userDeletePrivateRecipe(7).id).toEqual(7);
  });
});

describe('userDeletePrivateRecipeSucceeded action creator', () => {
  it('returns the correct action type', () => {
    expect(userDeletePrivateRecipeSucceeded('OK.').type)
      .toEqual(USER_DELETE_PRIVATE_RECIPE_SUCCEEDED);
  });

  it('returns the correct message', () => {
    expect(userDeletePrivateRecipeSucceeded('OK.').message).toEqual('OK.');
  });
});

describe('userDeletePrivateRecipeFailed action creator', () => {
  it('returns the correct action type', () => {
    expect(userDeletePrivateRecipeFailed('Try again.').type)
      .toEqual(USER_DELETE_PRIVATE_RECIPE_FAILED);
  });

  it('returns the correct message', () => {
    expect(userDeletePrivateRecipeFailed('Try again.').message)
      .toEqual('Try again.');
  });
});



describe('userCreateNewPublicRecipe action creator', () => {
  it('returns the correct action type', () => {
    expect(userCreateNewPublicRecipe(creatingRecipeInfo).type)
      .toEqual(USER_CREATE_NEW_PUBLIC_RECIPE);
  });

  it('returns the correct recipeInfo', () => {
    expect(userCreateNewPublicRecipe(creatingRecipeInfo).recipeInfo)
      .toEqual(creatingRecipeInfo);
  });
});

describe('userCreateNewPublicRecipeSucceeded action creator', () => {
  it('returns the correct action type', () => {
    expect(userCreateNewPublicRecipeSucceeded('OK.').type)
      .toEqual(USER_CREATE_NEW_PUBLIC_RECIPE_SUCCEEDED);
  });

  it('returns the correct message', () => {
    expect(userCreateNewPublicRecipeSucceeded('OK.').message).toEqual('OK.');
  });
});

describe('userFailed action creator', () => {
  it('returns the correct action type', () => {
    expect(userCreateNewPublicRecipeFailed('Try again.').type)
      .toEqual(USER_CREATE_NEW_PUBLIC_RECIPE_FAILED);
  });

  it('returns the correct message', () => {
    expect(userCreateNewPublicRecipeFailed('Try again.').message)
      .toEqual('Try again.');
  });
});

describe('userEditPublicRecipe action creator', () => {
  it('returns the correct action type', () => {
    expect(userEditPublicRecipe(editingRecipeInfo).type)
      .toEqual(USER_EDIT_PUBLIC_RECIPE);
  });

  it('returns the correct recipeInfo', () => {
    expect(userEditPublicRecipe(editingRecipeInfo).recipeInfo)
      .toEqual(editingRecipeInfo);
  });
});

describe('userEditPublicRecipeSucceeded action creator', () => {
  it('returns the correct action type', () => {
    expect(userEditPublicRecipeSucceeded('OK.').type)
      .toEqual(USER_EDIT_PUBLIC_RECIPE_SUCCEEDED);
  });

  it('returns the correct message', () => {
    expect(userEditPublicRecipeSucceeded('OK.').message).toEqual('OK.');
  });
});

describe('userEditPublicRecipeFailed action creator', () => {
  it('returns the correct action type', () => {
    expect(userEditPublicRecipeFailed('Try again.').type)
      .toEqual(USER_EDIT_PUBLIC_RECIPE_FAILED);
  });

  it('returns the correct message', () => {
    expect(userEditPublicRecipeFailed('Try again.').message)
      .toEqual('Try again.');
  });
});

describe('userDisownPublicRecipe action creator', () => {
  it('returns the correct action type', () => {
    expect(userDisownPublicRecipe(7).type).toEqual(USER_DISOWN_PUBLIC_RECIPE);
  });

  it('returns the correct id', () => {
    expect(userDisownPublicRecipe(7).id).toEqual(7);
  });
});

describe('userDisownPublicRecipeSucceeded action creator', () => {
  it('returns the correct action type', () => {
    expect(userDisownPublicRecipeSucceeded('OK.').type)
      .toEqual(USER_DISOWN_PUBLIC_RECIPE_SUCCEEDED);
  });

  it('returns the correct message', () => {
    expect(userDisownPublicRecipeSucceeded('OK.').message).toEqual('OK.');
  });
});

describe('userDisownPublicRecipeFailed action creator', () => {
  it('returns the correct action type', () => {
    expect(userDisownPublicRecipeFailed('Try again.').type)
      .toEqual(USER_DISOWN_PUBLIC_RECIPE_FAILED);
  });

  it('returns the correct message', () => {
    expect(userDisownPublicRecipeFailed('Try again.').message)
      .toEqual('Try again.');
  });
});