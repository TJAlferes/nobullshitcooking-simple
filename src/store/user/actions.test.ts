import {
  USER_MESSAGE_CLEAR,

  USER_CREATE_NEW_PRIVATE_EQUIPMENT,
  USER_CREATE_NEW_PRIVATE_EQUIPMENT_SUCCEEDED,
  USER_CREATE_NEW_PRIVATE_EQUIPMENT_FAILED,

  USER_EDIT_PRIVATE_EQUIPMENT,
  USER_EDIT_PRIVATE_EQUIPMENT_SUCCEEDED,
  USER_EDIT_PRIVATE_EQUIPMENT_FAILED,

  USER_DELETE_PRIVATE_EQUIPMENT,
  USER_DELETE_PRIVATE_EQUIPMENT_SUCCEEDED,
  USER_DELETE_PRIVATE_EQUIPMENT_FAILED,

  USER_CREATE_NEW_PRIVATE_INGREDIENT,
  USER_CREATE_NEW_PRIVATE_INGREDIENT_SUCCEEDED,
  USER_CREATE_NEW_PRIVATE_INGREDIENT_FAILED,

  USER_EDIT_PRIVATE_INGREDIENT,
  USER_EDIT_PRIVATE_INGREDIENT_SUCCEEDED,
  USER_EDIT_PRIVATE_INGREDIENT_FAILED,

  USER_DELETE_PRIVATE_INGREDIENT,
  USER_DELETE_PRIVATE_INGREDIENT_SUCCEEDED,
  USER_DELETE_PRIVATE_INGREDIENT_FAILED,

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

  USER_CREATE_NEW_PLAN,
  USER_CREATE_NEW_PLAN_SUCCEEDED,
  USER_CREATE_NEW_PLAN_FAILED,

  USER_EDIT_PLAN,
  USER_EDIT_PLAN_SUCCEEDED,
  USER_EDIT_PLAN_FAILED,

  USER_DELETE_PLAN,
  USER_DELETE_PLAN_SUCCEEDED,
  USER_DELETE_PLAN_FAILED,

  USER_FAVORITE_RECIPE,
  USER_FAVORITE_RECIPE_SUCCEEDED,
  USER_FAVORITE_RECIPE_FAILED,

  USER_UNFAVORITE_RECIPE,
  USER_UNFAVORITE_RECIPE_SUCCEEDED,
  USER_UNFAVORITE_RECIPE_FAILED,

  USER_SAVE_RECIPE,
  USER_SAVE_RECIPE_SUCCEEDED,
  USER_SAVE_RECIPE_FAILED,

  USER_UNSAVE_RECIPE,
  USER_UNSAVE_RECIPE_SUCCEEDED,
  USER_UNSAVE_RECIPE_FAILED,

  USER_REQUEST_FRIENDSHIP,
  USER_REQUEST_FRIENDSHIP_SUCCEEDED,
  USER_REQUEST_FRIENDSHIP_FAILED,

  USER_ACCEPT_FRIENDSHIP,
  USER_ACCEPT_FRIENDSHIP_SUCCEEDED,
  USER_ACCEPT_FRIENDSHIP_FAILED,

  USER_REJECT_FRIENDSHIP,
  USER_REJECT_FRIENDSHIP_SUCCEEDED,
  USER_REJECT_FRIENDSHIP_FAILED,

  USER_DELETE_FRIENDSHIP,
  USER_DELETE_FRIENDSHIP_SUCCEEDED,
  USER_DELETE_FRIENDSHIP_FAILED,

  USER_BLOCK_USER,
  USER_BLOCK_USER_SUCCEEDED,
  USER_BLOCK_USER_FAILED,

  USER_UNBLOCK_USER,
  USER_UNBLOCK_USER_SUCCEEDED,
  USER_UNBLOCK_USER_FAILED,

  USER_SUBMIT_AVATAR,
  USER_SUBMIT_AVATAR_SUCCEEDED,
  USER_SUBMIT_AVATAR_FAILED
} from './types';

import {
  userMessageClear,

  userCreateNewPrivateEquipment,
  userCreateNewPrivateEquipmentSucceeded,
  userCreateNewPrivateEquipmentFailed,
  userEditPrivateEquipment,
  userEditPrivateEquipmentSucceeded,
  userEditPrivateEquipmentFailed,
  userDeletePrivateEquipment,
  userDeletePrivateEquipmentSucceeded,
  userDeletePrivateEquipmentFailed,

  userCreateNewPrivateIngredient,
  userCreateNewPrivateIngredientSucceeded,
  userCreateNewPrivateIngredientFailed,
  userEditPrivateIngredient,
  userEditPrivateIngredientSucceeded,
  userEditPrivateIngredientFailed,
  userDeletePrivateIngredient,
  userDeletePrivateIngredientSucceeded,
  userDeletePrivateIngredientFailed,
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
  userDisownPublicRecipeFailed,
  userCreateNewPlan,
  userCreateNewPlanSucceeded,
  userCreateNewPlanFailed,
  userEditPlan,
  userEditPlanSucceeded,
  userEditPlanFailed,
  userDeletePlan,
  userDeletePlanSucceeded,
  userDeletePlanFailed,
  userFavoriteRecipe,
  userFavoriteRecipeSucceeded,
  userFavoriteRecipeFailed,
  userUnfavoriteRecipe,
  userUnfavoriteRecipeSucceeded,
  userUnfavoriteRecipeFailed,
  userSaveRecipe,
  userSaveRecipeSucceeded,
  userSaveRecipeFailed,
  userUnsaveRecipe,
  userUnsaveRecipeSucceeded,
  userUnsaveRecipeFailed,
  userRequestFriendship,
  userRequestFriendshipSucceeded,
  userRequestFriendshipFailed,
  userAcceptFriendship,
  userAcceptFriendshipSucceeded,
  userAcceptFriendshipFailed,
  userRejectFriendship,
  userRejectFriendshipSucceeded,
  userRejectFriendshipFailed,
  userDeleteFriendship,
  userDeleteFriendshipSucceeded,
  userDeleteFriendshipFailed,
  userBlockUser,
  userBlockUserSucceeded,
  userBlockUserFailed,
  userUnblockUser,
  userUnblockUserSucceeded,
  userUnblockUserFailed,
  userSubmitAvatar,
  userSubmitAvatarSucceeded,
  userSubmitAvatarFailed
} from './actions';





describe('the userMessageClear action creator', () => {
  it('returns the correct action type', () => {
    const actual = userMessageClear().type;
    const expected = USER_MESSAGE_CLEAR;
    expect(actual).toEqual(expected);
  });
});





describe('the userCreateNewPrivateEquipment action creator', () => {
  it('returns the correct action type', () => {
    const actual = userCreateNewPrivateEquipment({someKey: 'someValue'}).type;
    const expected = USER_CREATE_NEW_PRIVATE_EQUIPMENT;
    expect(actual).toEqual(expected);
  });
  it('returns the correct equipmentInfo', () => {
    const actual = userCreateNewPrivateEquipment({someKey: 'someValue'}).equipmentInfo;
    const expected = {someKey: 'someValue'};
    expect(actual).toEqual(expected);
  });
});
describe('the userCreateNewPrivateEquipmentSucceeded action creator', () => {
  it('returns the correct action type', () => {
    const actual = userCreateNewPrivateEquipmentSucceeded('OK.').type;
    const expected = USER_CREATE_NEW_PRIVATE_EQUIPMENT_SUCCEEDED;
    expect(actual).toEqual(expected);
  });
  it('returns the correct message', () => {
    const actual = userCreateNewPrivateEquipmentSucceeded('OK.').message;
    const expected = 'OK.';
    expect(actual).toEqual(expected);
  });
});
describe('the userCreateNewPrivateEquipmentFailed action creator', () => {
  it('returns the correct action type', () => {
    const actual = userCreateNewPrivateEquipmentFailed('Try again.').type;
    const expected = USER_CREATE_NEW_PRIVATE_EQUIPMENT_FAILED;
    expect(actual).toEqual(expected);
  });
  it('returns the correct message', () => {
    const actual = userCreateNewPrivateEquipmentFailed('Try again.').message;
    const expected = 'Try again.';
    expect(actual).toEqual(expected);
  });
});


describe('the userEditPrivateEquipment action creator', () => {
  it('returns the correct action type', () => {
    const actual = userEditPrivateEquipment({someKey: 'someValue'}).type;
    const expected = USER_EDIT_PRIVATE_EQUIPMENT;
    expect(actual).toEqual(expected);
  });
  it('returns the correct equipmentInfo', () => {
    const actual = userEditPrivateEquipment({someKey: 'someValue'}).equipmentInfo;
    const expected = {someKey: 'someValue'};
    expect(actual).toEqual(expected);
  });
});
describe('the userEditPrivateEquipmentSucceeded action creator', () => {
  it('returns the correct action type', () => {
    const actual = userEditPrivateEquipmentSucceeded('OK.').type;
    const expected = USER_EDIT_PRIVATE_EQUIPMENT_SUCCEEDED;
    expect(actual).toEqual(expected);
  });
  it('returns the correct message', () => {
    const actual = userEditPrivateEquipmentSucceeded('OK.').message;
    const expected = 'OK.';
    expect(actual).toEqual(expected);
  });
});
describe('the userEditPrivateEquipmentFailed action creator', () => {
  it('returns the correct action type', () => {
    const actual = userEditPrivateEquipmentFailed('Try again.').type;
    const expected = USER_EDIT_PRIVATE_EQUIPMENT_FAILED;
    expect(actual).toEqual(expected);
  });
  it('returns the correct message', () => {
    const actual = userEditPrivateEquipmentFailed('Try again.').message;
    const expected = 'Try again.';
    expect(actual).toEqual(expected);
  });
});


describe('the userDeletePrivateEquipment action creator', () => {
  it('returns the correct action type', () => {
    const actual = userDeletePrivateEquipment(7).type;
    const expected = USER_DELETE_PRIVATE_EQUIPMENT;
    expect(actual).toEqual(expected);
  });
  it('returns the correct equipmentId', () => {
    const actual = userDeletePrivateEquipment(7).equipmentId;
    const expected = 7;
    expect(actual).toEqual(expected);
  });
});
describe('the userDeletePrivateEquipmentSucceeded action creator', () => {
  it('returns the correct action type', () => {
    const actual = userDeletePrivateEquipmentSucceeded('OK.').type;
    const expected = USER_DELETE_PRIVATE_EQUIPMENT_SUCCEEDED;
    expect(actual).toEqual(expected);
  });
  it('returns the correct message', () => {
    const actual = userDeletePrivateEquipmentSucceeded('OK.').message;
    const expected = 'OK.';
    expect(actual).toEqual(expected);
  });
});
describe('the userDeletePrivateEquipmentFailed action creator', () => {
  it('returns the correct action type', () => {
    const actual = userDeletePrivateEquipmentFailed('Try again.').type;
    const expected = USER_DELETE_PRIVATE_EQUIPMENT_FAILED;
    expect(actual).toEqual(expected);
  });
  it('returns the correct message', () => {
    const actual = userDeletePrivateEquipmentFailed('Try again.').message;
    const expected = 'Try again.';
    expect(actual).toEqual(expected);
  });
});





describe('the userCreateNewPrivateIngredient action creator', () => {
  it('returns the correct action type', () => {
    const actual = userCreateNewPrivateIngredient({someKey: 'someValue'}).type;
    const expected = USER_CREATE_NEW_PRIVATE_INGREDIENT;
    expect(actual).toEqual(expected);
  });
  it('returns the correct ingredientInfo', () => {
    const actual = userCreateNewPrivateIngredient({someKey: 'someValue'}).ingredientInfo;
    const expected = {someKey: 'someValue'};
    expect(actual).toEqual(expected);
  });
});
describe('the userCreateNewPrivateIngredientSucceeded action creator', () => {
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
describe('the userCreateNewPrivateIngredientFailed action creator', () => {
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


describe('the userEditPrivateIngredient action creator', () => {
  it('returns the correct action type', () => {
    const actual = userEditPrivateIngredient({someKey: 'someValue'}).type;
    const expected = USER_EDIT_PRIVATE_INGREDIENT;
    expect(actual).toEqual(expected);
  });
  it('returns the correct ingredientInfo', () => {
    const actual = userEditPrivateIngredient({someKey: 'someValue'}).ingredientInfo;
    const expected = {someKey: 'someValue'};
    expect(actual).toEqual(expected);
  });
});
describe('the userEditPrivateIngredientSucceeded action creator', () => {
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
describe('the userEditPrivateIngredientFailed action creator', () => {
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


describe('the userDeletePrivateIngredient action creator', () => {
  it('returns the correct action type', () => {
    const actual = userDeletePrivateIngredient(7).type;
    const expected = USER_DELETE_PRIVATE_INGREDIENT;
    expect(actual).toEqual(expected);
  });
  it('returns the correct ingredientId', () => {
    const actual = userDeletePrivateIngredient(7).ingredientId;
    const expected = 7;
    expect(actual).toEqual(expected);
  });
});
describe('the userDeletePrivateIngredientSucceeded action creator', () => {
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
describe('the userDeletePrivateIngredientFailed action creator', () => {
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





describe('the userCreateNewPrivateRecipe action creator', () => {
  it('returns the correct action type', () => {
    const actual = userCreateNewPrivateRecipe({someKey: 'someValue'}).type;
    const expected = USER_CREATE_NEW_PRIVATE_RECIPE;
    expect(actual).toEqual(expected);
  });
  it('returns the correct recipeInfo', () => {
    const actual = userCreateNewPrivateRecipe({someKey: 'someValue'}).recipeInfo;
    const expected = {someKey: 'someValue'};
    expect(actual).toEqual(expected);
  });
});
describe('the userCreateNewPrivateRecipeSucceeded action creator', () => {
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
describe('the userCreateNewPrivateRecipeFailed action creator', () => {
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


describe('the userEditPrivateRecipe action creator', () => {
  it('returns the correct action type', () => {
    const actual = userEditPrivateRecipe({someKey: 'someValue'}).type;
    const expected = USER_EDIT_PRIVATE_RECIPE;
    expect(actual).toEqual(expected);
  });
  it('returns the correct recipeInfo', () => {
    const actual = userEditPrivateRecipe({someKey: 'someValue'}).recipeInfo;
    const expected = {someKey: 'someValue'};
    expect(actual).toEqual(expected);
  });
});
describe('the userEditPrivateRecipeSucceeded action creator', () => {
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
describe('the userEditPrivateRecipeFailed action creator', () => {
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


describe('the userDeletePrivateRecipe action creator', () => {
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
describe('the userDeletePrivateRecipeSucceeded action creator', () => {
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
describe('the userDeletePrivateRecipeFailed action creator', () => {
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





describe('the userCreateNewPublicRecipe action creator', () => {
  it('returns the correct action type', () => {
    const actual = userCreateNewPublicRecipe({someKey: 'someValue'}).type;
    const expected = USER_CREATE_NEW_PUBLIC_RECIPE;
    expect(actual).toEqual(expected);
  });
  it('returns the correct recipeInfo', () => {
    const actual = userCreateNewPublicRecipe({someKey: 'someValue'}).recipeInfo;
    const expected = {someKey: 'someValue'};
    expect(actual).toEqual(expected);
  });
});
describe('the userCreateNewPublicRecipeSucceeded action creator', () => {
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
describe('the userFailed action creator', () => {
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


describe('the userEditPublicRecipe action creator', () => {
  it('returns the correct action type', () => {
    const actual = userEditPublicRecipe({someKey: 'someValue'}).type;
    const expected = USER_EDIT_PUBLIC_RECIPE;
    expect(actual).toEqual(expected);
  });
  it('returns the correct recipeInfo', () => {
    const actual = userEditPublicRecipe({someKey: 'someValue'}).recipeInfo;
    const expected = {someKey: 'someValue'};
    expect(actual).toEqual(expected);
  });
});
describe('the userEditPublicRecipeSucceeded action creator', () => {
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
describe('the userEditPublicRecipeFailed action creator', () => {
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


describe('the userDisownPublicRecipe action creator', () => {
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
describe('the userDisownPublicRecipeSucceeded action creator', () => {
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
describe('the userDisownPublicRecipeFailed action creator', () => {
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





describe('the userCreateNewPlan action creator', () => {
  it('returns the correct action type', () => {
    const actual = userCreateNewPlan({someKey: 'someValue'}).type;
    const expected = USER_CREATE_NEW_PLAN;
    expect(actual).toEqual(expected);
  });
  it('returns the correct planInfo', () => {
    const actual = userCreateNewPlan({someKey: 'someValue'}).planInfo;
    const expected = {someKey: 'someValue'};
    expect(actual).toEqual(expected);
  });
});
describe('the userCreateNewPlanSucceeded action creator', () => {
  it('returns the correct action type', () => {
    const actual = userCreateNewPlanSucceeded('OK.').type;
    const expected = USER_CREATE_NEW_PLAN_SUCCEEDED;
    expect(actual).toEqual(expected);
  });
  it('returns the correct message', () => {
    const actual = userCreateNewPlanSucceeded('OK.').message;
    const expected = 'OK.';
    expect(actual).toEqual(expected);
  });
});
describe('the userCreateNewPlanFailed action creator', () => {
  it('returns the correct action type', () => {
    const actual = userCreateNewPlanFailed('Try again.').type;
    const expected = USER_CREATE_NEW_PLAN_FAILED;
    expect(actual).toEqual(expected);
  });
  it('returns the correct message', () => {
    const actual = userCreateNewPlanFailed('Try again.').message;
    const expected = 'Try again.';
    expect(actual).toEqual(expected);
  });
});


describe('the userEditPlan action creator', () => {
  it('returns the correct action type', () => {
    const actual = userEditPlan({someKey: 'someValue'}).type;
    const expected = USER_EDIT_PLAN;
    expect(actual).toEqual(expected);
  });
  it('returns the correct planInfo', () => {
    const actual = userEditPlan({someKey: 'someValue'}).planInfo;
    const expected = {someKey: 'someValue'};
    expect(actual).toEqual(expected);
  });
});
describe('the userEditPlanSucceeded action creator', () => {
  it('returns the correct action type', () => {
    const actual = userEditPlanSucceeded('OK.').type;
    const expected = USER_EDIT_PLAN_SUCCEEDED;
    expect(actual).toEqual(expected);
  });
  it('returns the correct message', () => {
    const actual = userEditPlanSucceeded('OK.').message;
    const expected = 'OK.';
    expect(actual).toEqual(expected);
  });
});
describe('the userEditPlanFailed action creator', () => {
  it('returns the correct action type', () => {
    const actual = userEditPlanFailed('Try again.').type;
    const expected = USER_EDIT_PLAN_FAILED;
    expect(actual).toEqual(expected);
  });
  it('returns the correct message', () => {
    const actual = userEditPlanFailed('Try again.').message;
    const expected = 'Try again.';
    expect(actual).toEqual(expected);
  });
});


describe('the userDeletePlan action creator', () => {
  it('returns the correct action type', () => {
    const actual = userDeletePlan(7).type;
    const expected = USER_DELETE_PLAN;
    expect(actual).toEqual(expected);
  });
  it('returns the correct planId', () => {
    const actual = userDeletePlan(7).planId;
    const expected = 7;
    expect(actual).toEqual(expected);
  });
});
describe('the userDeletePlanSucceeded action creator', () => {
  it('returns the correct action type', () => {
    const actual = userDeletePlanSucceeded('OK.').type;
    const expected = USER_DELETE_PLAN_SUCCEEDED;
    expect(actual).toEqual(expected);
  });
  it('returns the correct message', () => {
    const actual = userDeletePlanSucceeded('OK.').message;
    const expected = 'OK.';
    expect(actual).toEqual(expected);
  });
});
describe('the userDeletePlanFailed action creator', () => {
  it('returns the correct action type', () => {
    const actual = userDeletePlanFailed('Try again.').type;
    const expected = USER_DELETE_PLAN_FAILED;
    expect(actual).toEqual(expected);
  });
  it('returns the correct message', () => {
    const actual = userDeletePlanFailed('Try again.').message;
    const expected = 'Try again.';
    expect(actual).toEqual(expected);
  });
});





describe('the userFavoriteRecipe action creator', () => {
  it('returns the correct action type', () => {
    const actual = userFavoriteRecipe(4).type;
    const expected = USER_FAVORITE_RECIPE;
    expect(actual).toEqual(expected);
  });
  it('returns the correct recipeId', () => {
    const actual = userFavoriteRecipe(4).recipeId;
    const expected = 4;
    expect(actual).toEqual(expected);
  });
});
describe('the userFavoriteRecipeSucceeded action creator', () => {
  it('returns the correct action type', () => {
    const actual = userFavoriteRecipeSucceeded('OK.').type;
    const expected = USER_FAVORITE_RECIPE_SUCCEEDED;
    expect(actual).toEqual(expected);
  });
  it('returns the correct message', () => {
    const actual = userFavoriteRecipeSucceeded('OK.').message;
    const expected = 'OK.';
    expect(actual).toEqual(expected);
  });
});
describe('the userFavoriteRecipeFailed action creator', () => {
  it('returns the correct action type', () => {
    const actual = userFavoriteRecipeFailed('Try again.').type;
    const expected = USER_FAVORITE_RECIPE_FAILED;
    expect(actual).toEqual(expected);
  });
  it('returns the correct message', () => {
    const actual = userFavoriteRecipeFailed('Try again.').message;
    const expected = 'Try again.';
    expect(actual).toEqual(expected);
  });
});


describe('the userUnfavoriteRecipe action creator', () => {
  it('returns the correct action type', () => {
    const actual = userUnfavoriteRecipe(4).type;
    const expected = USER_UNFAVORITE_RECIPE;
    expect(actual).toEqual(expected);
  });
  it('returns the correct recipeId', () => {
    const actual = userUnfavoriteRecipe(4).recipeId;
    const expected = 4;
    expect(actual).toEqual(expected);
  });
});
describe('the userUnfavoriteRecipeSucceeded action creator', () => {
  it('returns the correct action type', () => {
    const actual = userUnfavoriteRecipeSucceeded('OK.').type;
    const expected = USER_UNFAVORITE_RECIPE_SUCCEEDED;
    expect(actual).toEqual(expected);
  });
  it('returns the correct message', () => {
    const actual = userUnfavoriteRecipeSucceeded('OK.').message;
    const expected = 'OK.';
    expect(actual).toEqual(expected);
  });
});
describe('the userUnfavoriteRecipeFailed action creator', () => {
  it('returns the correct action type', () => {
    const actual = userUnfavoriteRecipeFailed('Try again.').type;
    const expected = USER_UNFAVORITE_RECIPE_FAILED;
    expect(actual).toEqual(expected);
  });
  it('returns the correct message', () => {
    const actual = userUnfavoriteRecipeFailed('Try again.').message;
    const expected = 'Try again.';
    expect(actual).toEqual(expected);
  });
});





describe('the userSaveRecipe action creator', () => {
  it('returns the correct action type', () => {
    const actual = userSaveRecipe(4).type;
    const expected = USER_SAVE_RECIPE;
    expect(actual).toEqual(expected);
  });
  it('returns the correct recipeId', () => {
    const actual = userSaveRecipe(4).recipeId;
    const expected = 4;
    expect(actual).toEqual(expected);
  });
});
describe('the userSaveRecipeSucceeded action creator', () => {
  it('returns the correct action type', () => {
    const actual = userSaveRecipeSucceeded('OK.').type;
    const expected = USER_SAVE_RECIPE_SUCCEEDED;
    expect(actual).toEqual(expected);
  });
  it('returns the correct message', () => {
    const actual = userSaveRecipeSucceeded('OK.').message;
    const expected = 'OK.';
    expect(actual).toEqual(expected);
  });
});
describe('the userSaveRecipeFailed action creator', () => {
  it('returns the correct action type', () => {
    const actual = userSaveRecipeFailed('Try again.').type;
    const expected = USER_SAVE_RECIPE_FAILED;
    expect(actual).toEqual(expected);
  });
  it('returns the correct message', () => {
    const actual = userSaveRecipeFailed('Try again.').message;
    const expected = 'Try again.';
    expect(actual).toEqual(expected);
  });
});


describe('the userUnsaveRecipe action creator', () => {
  it('returns the correct action type', () => {
    const actual = userUnsaveRecipe(4).type;
    const expected = USER_UNSAVE_RECIPE;
    expect(actual).toEqual(expected);
  });
  it('returns the correct recipeId', () => {
    const actual = userUnsaveRecipe(4).recipeId;
    const expected = 4;
    expect(actual).toEqual(expected);
  });
});
describe('the userUnsaveRecipeSucceeded action creator', () => {
  it('returns the correct action type', () => {
    const actual = userUnsaveRecipeSucceeded('OK.').type;
    const expected = USER_UNSAVE_RECIPE_SUCCEEDED;
    expect(actual).toEqual(expected);
  });
  it('returns the correct message', () => {
    const actual = userUnsaveRecipeSucceeded('OK.').message;
    const expected = 'OK.';
    expect(actual).toEqual(expected);
  });
});
describe('the userUnsaveRecipeFailed action creator', () => {
  it('returns the correct action type', () => {
    const actual = userUnsaveRecipeFailed('Try again.').type;
    const expected = USER_UNSAVE_RECIPE_FAILED;
    expect(actual).toEqual(expected);
  });
  it('returns the correct message', () => {
    const actual = userUnsaveRecipeFailed('Try again.').message;
    const expected = 'Try again.';
    expect(actual).toEqual(expected);
  });
});





describe('the userRequestFriendship action creator', () => {
  it('returns the correct action type', () => {
    const actual = userRequestFriendship('Juan').type;
    const expected = USER_REQUEST_FRIENDSHIP;
    expect(actual).toEqual(expected);
  });
  it('returns the correct friendName', () => {
    const actual = userRequestFriendship('Juan').friendName;
    const expected = 'Juan';
    expect(actual).toEqual(expected);
  });
});
describe('the userRequestFriendshipSucceeded action creator', () => {
  it('returns the correct action type', () => {
    const actual = userRequestFriendshipSucceeded('OK.').type;
    const expected = USER_REQUEST_FRIENDSHIP_SUCCEEDED;
    expect(actual).toEqual(expected);
  });
  it('returns the correct message', () => {
    const actual = userRequestFriendshipSucceeded('OK.').message;
    const expected = 'OK.';
    expect(actual).toEqual(expected);
  });
});
describe('the userRequestFriendshipFailed action creator', () => {
  it('returns the correct action type', () => {
    const actual = userRequestFriendshipFailed('Try again.').type;
    const expected = USER_REQUEST_FRIENDSHIP_FAILED;
    expect(actual).toEqual(expected);
  });
  it('returns the correct message', () => {
    const actual = userRequestFriendshipFailed('Try again.').message;
    const expected = 'Try again.';
    expect(actual).toEqual(expected);
  });
});


describe('the userAcceptFriendship action creator', () => {
  it('returns the correct action type', () => {
    const actual = userAcceptFriendship('Juan').type;
    const expected = USER_ACCEPT_FRIENDSHIP;
    expect(actual).toEqual(expected);
  });
  it('returns the correct friendName', () => {
    const actual = userAcceptFriendship('Juan').friendName;
    const expected = 'Juan';
    expect(actual).toEqual(expected);
  });
});
describe('the userAcceptFriendshipSucceeded action creator', () => {
  it('returns the correct action type', () => {
    const actual = userAcceptFriendshipSucceeded('OK.').type;
    const expected = USER_ACCEPT_FRIENDSHIP_SUCCEEDED;
    expect(actual).toEqual(expected);
  });
  it('returns the correct message', () => {
    const actual = userAcceptFriendshipSucceeded('OK.').message;
    const expected = 'OK.';
    expect(actual).toEqual(expected);
  });
});
describe('the userAcceptFriendshipFailed action creator', () => {
  it('returns the correct action type', () => {
    const actual = userAcceptFriendshipFailed('Try again.').type;
    const expected = USER_ACCEPT_FRIENDSHIP_FAILED;
    expect(actual).toEqual(expected);
  });
  it('returns the correct message', () => {
    const actual = userAcceptFriendshipFailed('Try again.').message;
    const expected = 'Try again.';
    expect(actual).toEqual(expected);
  });
});


describe('the userRejectFriendship action creator', () => {
  it('returns the correct action type', () => {
    const actual = userRejectFriendship('Juan').type;
    const expected = USER_REJECT_FRIENDSHIP;
    expect(actual).toEqual(expected);
  });
  it('returns the correct friendName', () => {
    const actual = userRejectFriendship('Juan').friendName;
    const expected = 'Juan';
    expect(actual).toEqual(expected);
  });
});
describe('the userRejectFriendshipSucceeded action creator', () => {
  it('returns the correct action type', () => {
    const actual = userRejectFriendshipSucceeded('OK.').type;
    const expected = USER_REJECT_FRIENDSHIP_SUCCEEDED;
    expect(actual).toEqual(expected);
  });
  it('returns the correct message', () => {
    const actual = userRejectFriendshipSucceeded('OK.').message;
    const expected = 'OK.';
    expect(actual).toEqual(expected);
  });
});
describe('the userRejectFriendshipFailed action creator', () => {
  it('returns the correct action type', () => {
    const actual = userRejectFriendshipFailed('Try again.').type;
    const expected = USER_REJECT_FRIENDSHIP_FAILED;
    expect(actual).toEqual(expected);
  });
  it('returns the correct message', () => {
    const actual = userRejectFriendshipFailed('Try again.').message;
    const expected = 'Try again.';
    expect(actual).toEqual(expected);
  });
});


describe('the userDeleteFriendship action creator', () => {
  it('returns the correct action type', () => {
    const actual = userDeleteFriendship('Juan').type;
    const expected = USER_DELETE_FRIENDSHIP;
    expect(actual).toEqual(expected);
  });
  it('returns the correct friendName', () => {
    const actual = userDeleteFriendship('Juan').friendName;
    const expected = 'Juan';
    expect(actual).toEqual(expected);
  });
});
describe('the userDeleteFriendshipSucceeded action creator', () => {
  it('returns the correct action type', () => {
    const actual = userDeleteFriendshipSucceeded('OK.').type;
    const expected = USER_DELETE_FRIENDSHIP_SUCCEEDED;
    expect(actual).toEqual(expected);
  });
  it('returns the correct message', () => {
    const actual = userDeleteFriendshipSucceeded('OK.').message;
    const expected = 'OK.';
    expect(actual).toEqual(expected);
  });
});
describe('the userDeleteFriendshipFailed action creator', () => {
  it('returns the correct action type', () => {
    const actual = userDeleteFriendshipFailed('Try again.').type;
    const expected = USER_DELETE_FRIENDSHIP_FAILED;
    expect(actual).toEqual(expected);
  });
  it('returns the correct message', () => {
    const actual = userDeleteFriendshipFailed('Try again.').message;
    const expected = 'Try again.';
    expect(actual).toEqual(expected);
  });
});





describe('the userBlockUser action creator', () => {
  it('returns the correct action type', () => {
    const actual = userBlockUser('Juan').type;
    const expected = USER_BLOCK_USER;
    expect(actual).toEqual(expected);
  });
  it('returns the correct friendName', () => {
    const actual = userBlockUser('Juan').friendName;
    const expected = 'Juan';
    expect(actual).toEqual(expected);
  });
});
describe('the userBlockUserSucceeded action creator', () => {
  it('returns the correct action type', () => {
    const actual = userBlockUserSucceeded('OK.').type;
    const expected = USER_BLOCK_USER_SUCCEEDED;
    expect(actual).toEqual(expected);
  });
  it('returns the correct message', () => {
    const actual = userBlockUserSucceeded('OK.').message;
    const expected = 'OK.';
    expect(actual).toEqual(expected);
  });
});
describe('the userBlockUserFailed action creator', () => {
  it('returns the correct action type', () => {
    const actual = userBlockUserFailed('Try again.').type;
    const expected = USER_BLOCK_USER_FAILED;
    expect(actual).toEqual(expected);
  });
  it('returns the correct message', () => {
    const actual = userBlockUserFailed('Try again.').message;
    const expected = 'Try again.';
    expect(actual).toEqual(expected);
  });
});


describe('the userUnblockUser action creator', () => {
  it('returns the correct action type', () => {
    const actual = userUnblockUser().type;
    const expected = USER_UNBLOCK_USER;
    expect(actual).toEqual(expected);
  });
  it('returns the correct friendName', () => {
    const actual = userUnblockUser('Juan').friendName;
    const expected = 'Juan';
    expect(actual).toEqual(expected);
  });
});
describe('the userUnblockUserSucceeded action creator', () => {
  it('returns the correct action type', () => {
    const actual = userUnblockUserSucceeded('OK.').type;
    const expected = USER_UNBLOCK_USER_SUCCEEDED;
    expect(actual).toEqual(expected);
  });
  it('returns the correct message', () => {
    const actual = userUnblockUserSucceeded('OK.').message;
    const expected = 'OK.';
    expect(actual).toEqual(expected);
  });
});
describe('the userUnblockUserFailed action creator', () => {
  it('returns the correct action type', () => {
    const actual = userUnblockUserFailed('Try again.').type;
    const expected = USER_UNBLOCK_USER_FAILED;
    expect(actual).toEqual(expected);
  });
  it('returns the correct message', () => {
    const actual = userUnblockUserFailed('Try again.').message;
    const expected = 'Try again.';
    expect(actual).toEqual(expected);
  });
});





describe('the userSubmitAvatar action creator', () => {
  it('returns the correct action type', () => {
    const actual = userSubmitAvatar('some-url', 'some-other-url').type;
    const expected = USER_SUBMIT_AVATAR;
    expect(actual).toEqual(expected);
  });
  it('returns the correct fullAvatar', () => {
    const actual = userSubmitAvatar('some-url', 'some-other-url').fullAvatar;
    const expected = 'some-url';
    expect(actual).toEqual(expected);
  });
  it('returns the correct tinyAvatar', () => {
    const actual = userSubmitAvatar('some-url', 'some-other-url').tinyAvatar;
    const expected = 'some-other-url';
    expect(actual).toEqual(expected);
  });
});
describe('the userSubmitAvatarSucceeded action creator', () => {
  it('returns the correct action type', () => {
    const actual = userSubmitAvatarSucceeded('OK.').type;
    const expected = USER_SUBMIT_AVATAR_SUCCEEDED;
    expect(actual).toEqual(expected);
  });
  it('returns the correct message', () => {
    const actual = userSubmitAvatarSucceeded('OK.').message;
    const expected = 'OK.';
    expect(actual).toEqual(expected);
  });
});
describe('the userSubmitAvatarFailed action creator', () => {
  it('returns the correct action type', () => {
    const actual = userSubmitAvatarFailed('Try again.').type;
    const expected = USER_SUBMIT_AVATAR_FAILED;
    expect(actual).toEqual(expected);
  });
  it('returns the correct message', () => {
    const actual = userSubmitAvatarFailed('Try again.').message;
    const expected = 'Try again.';
    expect(actual).toEqual(expected);
  });
});