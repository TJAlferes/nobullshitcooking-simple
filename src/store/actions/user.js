import * as actionTypes from './actionTypes';

// WRITE UNIT TESTS FOR REDUCERS AND ACTION CREATORS AND SELECTORS AND SAGAS

// create new (private) equipment
export const userCreateNewPrivateEquipment = equipmentInfo => ({
  type: actionTypes.USER_CREATE_NEW_PRIVATE_EQUIPMENT,
  equipmentInfo
});
export const userCreateNewPrivateEquipmentSucceeded = () => ({type: actionTypes.USER_CREATE_NEW_PRIVATE_EQUIPMENT_SUCCEEDED});
export const userCreateNewPrivateEquipmentFailed = () => ({type: actionTypes.USER_CREATE_NEW_PRIVATE_EQUIPMENT_FAILED});

// edit equipment
export const userEditPrivateEquipment = equipmentInfo => ({
  type: actionTypes.USER_EDIT_PRIVATE_EQUIPMENT,
  equipmentInfo
});
export const userEditPrivateEquipmentSucceeded = () => ({type: actionTypes.USER_EDIT_PRIVATE_EQUIPMENT_SUCCEEDED});
export const userEditPrivateEquipmentFailed = () => ({type: actionTypes.USER_EDIT_PRIVATE_EQUIPMENT_FAILED});

// delete equipment
export const userDeletePrivateEquipment = equipmentId => ({
  type: actionTypes.USER_DELETE_PRIVATE_EQUIPMENT,
  equipmentId
});
export const userDeletePrivateEquipmentSucceeded = () => ({type: actionTypes.USER_DELETE_PRIVATE_EQUIPMENT_SUCCEEDED});
export const userDeletePrivateEquipmentFailed = () => ({type: actionTypes.USER_DELETE_PRIVATE_EQUIPMENT_FAILED});



// create new (private) ingredient
export const userCreateNewPrivateIngredient = ingredientInfo => ({
  type: actionTypes.USER_CREATE_NEW_PRIVATE_INGREDIENT,
  ingredientInfo
});
export const userCreateNewPrivateIngredientSucceeded = () => ({type: actionTypes.USER_CREATE_NEW_PRIVATE_INGREDIENT_SUCCEEDED});
export const userCreateNewPrivateIngredientFailed = () => ({type: actionTypes.USER_CREATE_NEW_PRIVATE_INGREDIENT_FAILED});

// edit ingredient
export const userEditPrivateIngredient = ingredientInfo => ({
  type: actionTypes.USER_EDIT_PRIVATE_INGREDIENT,
  ingredientInfo
});
export const userEditPrivateIngredientSucceeded = () => ({type: actionTypes.USER_EDIT_PRIVATE_INGREDIENT_SUCCEEDED});
export const userEditPrivateIngredientFailed = () => ({type: actionTypes.USER_EDIT_PRIVATE_INGREDIENT_FAILED});

// delete ingredient
export const userDeletePrivateIngredient = ingredientId => ({
  type: actionTypes.USER_DELETE_PRIVATE_INGREDIENT,
  ingredientId
});
export const userDeletePrivateIngredientSucceeded = () => ({type: actionTypes.USER_DELETE_PRIVATE_INGREDIENT_SUCCEEDED});
export const userDeletePrivateIngredientFailed = () => ({type: actionTypes.USER_DELETE_PRIVATE_INGREDIENT_FAILED});



// create new (private) recipe
export const userCreateNewPrivateRecipe = recipeInfo => ({
  type: actionTypes.USER_CREATE_NEW_PRIVATE_RECIPE,
  recipeInfo
});
export const userCreateNewPrivateRecipeSucceeded = () => ({type: actionTypes.USER_CREATE_NEW_PRIVATE_RECIPE_SUCCEEDED});
export const userCreateNewPrivateRecipeFailed = () => ({type: actionTypes.USER_CREATE_NEW_PRIVATE_RECIPE_FAILED});

// edit recipe
export const userEditPrivateRecipe = recipeInfo => ({
  type: actionTypes.USER_EDIT_PRIVATE_RECIPE,
  recipeInfo
});
export const userEditPrivateRecipeSucceeded = () => ({type: actionTypes.USER_EDIT_PRIVATE_RECIPE_SUCCEEDED});
export const userEditPrivateRecipeFailed = () => ({type: actionTypes.USER_EDIT_PRIVATE_RECIPE_FAILED});

// delete recipe
export const userDeletePrivateRecipe = recipeId => ({
  type: actionTypes.USER_DELETE_PRIVATE_RECIPE,
  recipeId
});
export const userDeletePrivateRecipeSucceeded = () => ({type: actionTypes.USER_DELETE_PRIVATE_RECIPE_SUCCEEDED});
export const userDeletePrivateRecipeFailed = () => ({type: actionTypes.USER_DELETE_PRIVATE_RECIPE_FAILED});



// create new (public) recipe
export const userCreatePublicRecipe = recipeInfo => ({
  type: actionTypes.USER_CREATE_NEW_PUBLIC_RECIPE,
  recipeInfo
});
export const userCreatePublicRecipeSucceeded = () => ({type: actionTypes.USER_CREATE_NEW_PUBLIC_RECIPE_SUCCEEDED});
export const userCreatePublicRecipeFailed = () => ({type: actionTypes.USER_CREATE_NEW_PUBLIC_RECIPE_FAILED});

// edit recipe
export const userEditPubicRecipe = recipeInfo => ({
  type: actionTypes.USER_EDIT_PUBLIC_RECIPE,
  recipeInfo
});
export const userEditPubicRecipeSucceeded = () => ({type: actionTypes.USER_EDIT_PUBLIC_RECIPE_SUCCEEDED});
export const userEditPubicRecipeFailed = () => ({type: actionTypes.USER_EDIT_PUBLIC_RECIPE_FAILED});

// disown recipe
export const userDisownPublicRecipe = recipeId => ({
  type: actionTypes.USER_DISOWN_PUBLIC_RECIPE,
  recipeId
});
export const userDisownPublicRecipeSucceeded = () => ({type: actionTypes.USER_DISOWN_PUBLIC_RECIPE_SUCCEEDED});
export const userDisownPublicRecipeFailed = () => ({type: actionTypes.USER_DISOWN_PUBLIC_RECIPE_FAILED});



// create new plan
export const userCreateNewPlan = planInfo => ({
  type: actionTypes.USER_CREATE_NEW_PLAN,
  planInfo
});
export const userCreateNewPlanSucceeded = () => ({type: actionTypes.USER_CREATE_NEW_PLAN_SUCCEEDED});
export const userCreateNewPlanFailed = () => ({type: actionTypes.USER_CREATE_NEW_PLAN_FAILED});

// edit plan
export const userEditPlan = planInfo => ({
  type: actionTypes.USER_EDIT_PLAN,
  planInfo
});
export const userEditPlanSucceeded = () => ({type: actionTypes.USER_EDIT_PLAN_SUCCEEDED});
export const userEditPlanFailed = () => ({type: actionTypes.USER_EDIT_PLAN_FAILED});

// delete plan
export const userDeletePlan = planId => ({
  type: actionTypes.USER_DELETE_PLAN,
  planId
});
export const userDeletePlanSucceeded = () => ({type: actionTypes.USER_DELETE_PLAN_SUCCEEDED});
export const userDeletePlanFailed = () => ({type: actionTypes.USER_DELETE_PLAN_FAILED});
