import {
  DATA_INIT,

  DATA_GET_MEASUREMENTS,
  DATA_GET_MEASUREMENTS_SUCCEEDED,
  DATA_GET_MEASUREMENTS_FAILED,

  DATA_GET_EQUIPMENTS,
  DATA_GET_EQUIPMENTS_SUCCEEDED,
  DATA_GET_EQUIPMENTS_FAILED,

  DATA_GET_EQUIPMENT_TYPES,
  DATA_GET_EQUIPMENT_TYPES_SUCCEEDED,
  DATA_GET_EQUIPMENT_TYPES_FAILED,

  DATA_GET_INGREDIENTS,
  DATA_GET_INGREDIENTS_SUCCEEDED,
  DATA_GET_INGREDIENTS_FAILED,

  DATA_GET_INGREDIENT_TYPES,
  DATA_GET_INGREDIENT_TYPES_SUCCEEDED,
  DATA_GET_INGREDIENT_TYPES_FAILED,

  DATA_GET_RECIPES,
  DATA_GET_RECIPES_SUCCEEDED,
  DATA_GET_RECIPES_FAILED,

  DATA_GET_RECIPE_TYPES,
  DATA_GET_RECIPE_TYPES_SUCCEEDED,
  DATA_GET_RECIPE_TYPES_FAILED,

  DATA_GET_CUISINES,
  DATA_GET_CUISINES_SUCCEEDED,
  DATA_GET_CUISINES_FAILED,

  DATA_GET_METHODS,
  DATA_GET_METHODS_SUCCEEDED,
  DATA_GET_METHODS_FAILED,

  DATA_GET_MY_PUBLIC_RECIPES,
  DATA_GET_MY_PUBLIC_RECIPES_SUCCEEDED,
  DATA_GET_MY_PUBLIC_RECIPES_FAILED,

  DATA_GET_MY_PRIVATE_EQUIPMENTS,
  DATA_GET_MY_PRIVATE_EQUIPMENTS_SUCCEEDED,
  DATA_GET_MY_PRIVATE_EQUIPMENTS_FAILED,

  DATA_GET_MY_PRIVATE_INGREDIENTS,
  DATA_GET_MY_PRIVATE_INGREDIENTS_SUCCEEDED,
  DATA_GET_MY_PRIVATE_INGREDIENTS_FAILED,

  DATA_GET_MY_PRIVATE_RECIPES,
  DATA_GET_MY_PRIVATE_RECIPES_SUCCEEDED,
  DATA_GET_MY_PRIVATE_RECIPES_FAILED,

  DATA_GET_MY_FAVORITE_RECIPES,
  DATA_GET_MY_FAVORITE_RECIPES_SUCCEEDED,
  DATA_GET_MY_FAVORITE_RECIPES_FAILED,

  DATA_GET_MY_SAVED_RECIPES,
  DATA_GET_MY_SAVED_RECIPES_SUCCEEDED,
  DATA_GET_MY_SAVED_RECIPES_FAILED,

  DATA_GET_MY_PLANS,
  DATA_GET_MY_PLANS_SUCCEEDED,
  DATA_GET_MY_PLANS_FAILED,

  DATA_GET_MY_FRIENDSHIPS,
  DATA_GET_MY_FRIENDSHIPS_SUCCEEDED,
  DATA_GET_MY_FRIENDSHIPS_FAILED
} from './actionTypes';



// init (when user first visits website)
export const dataInit = () => ({type: DATA_INIT});



export const dataGetMeasurements = measurements => ({
  type: DATA_GET_MEASUREMENTS,
  measurements
});
export const dataGetMeasurementsSucceeded = () => ({type: DATA_GET_MEASUREMENTS_SUCCEEDED});
export const dataGetMeasurementsFailed = () => ({type: DATA_GET_MEASUREMENTS_FAILED});



// NOTE: MAY NOT NEED, NOW THAT WE USE ELASTICSEARCH ***********************************************************************
export const dataGetEquipments = equipment => ({
  type: DATA_GET_EQUIPMENTS,
  equipment
});
export const dataGetEquipmentsSucceeded = () => ({type: DATA_GET_EQUIPMENTS_SUCCEEDED});
export const dataGetEquipmentsFailed = () => ({type: DATA_GET_EQUIPMENTS_FAILED});



export const dataGetEquipmentTypes = equipmentTypes => ({
  type: DATA_GET_EQUIPMENT_TYPES,
  equipmentTypes
});
export const dataGetEquipmentTypesSucceeded = () => ({type: DATA_GET_EQUIPMENT_TYPES_SUCCEEDED});
export const dataGetEquipmentTypesFailed = () => ({type: DATA_GET_EQUIPMENT_TYPES_FAILED});



// NOTE: MAY NOT NEED, NOW THAT WE USE ELASTICSEARCH ***********************************************************************
export const dataGetIngredients = ingredients => ({
  type: DATA_GET_INGREDIENTS,
  ingredients
});
export const dataGetIngredientsSucceeded = () => ({type: DATA_GET_INGREDIENTS_SUCCEEDED});
export const dataGetIngredientsFailed = () => ({type: DATA_GET_INGREDIENTS_FAILED});



export const dataGetIngredientTypes = ingredientTypes => ({
  type: DATA_GET_INGREDIENT_TYPES,
  ingredientTypes
});
export const dataGetIngredientTypesSucceeded = () => ({type: DATA_GET_INGREDIENT_TYPES_SUCCEEDED});
export const dataGetIngredientTypesFailed = () => ({type: DATA_GET_INGREDIENT_TYPES_FAILED});



// NOTE: MAY NOT NEED, NOW THAT WE USE ELASTICSEARCH ***********************************************************************
export const dataGetRecipes = recipes => ({
  type: DATA_GET_RECIPES,
  recipes
});
export const dataGetRecipesSucceeded = () => ({type: DATA_GET_RECIPES_SUCCEEDED});
export const dataGetRecipesFailed = () => ({type: DATA_GET_RECIPES_FAILED});



export const dataGetRecipeTypes = recipeTypes => ({
  type: DATA_GET_RECIPE_TYPES,
  recipeTypes
});
export const dataGetRecipeTypesSucceeded = () => ({type: DATA_GET_RECIPE_TYPES_SUCCEEDED});
export const dataGetRecipeTypesFailed = () => ({type: DATA_GET_RECIPE_TYPES_FAILED});



export const dataGetCuisines = cuisines => ({
  type: DATA_GET_CUISINES,
  cuisines
});
export const dataGetCuisinesSucceeded = () => ({type: DATA_GET_CUISINES_SUCCEEDED});
export const dataGetCuisinesFailed = () => ({type: DATA_GET_CUISINES_FAILED});



export const dataGetMethods = methods => ({
  type: DATA_GET_METHODS,
  methods
});
export const dataGetMethodsSucceeded = () => ({type: DATA_GET_METHODS_SUCCEEDED});
export const dataGetMethodsFailed = () => ({type: DATA_GET_METHODS_FAILED});



export const dataGetMyPublicRecipes = myPublicRecipes => ({
  type: DATA_GET_MY_PUBLIC_RECIPES,
  myPublicRecipes
});
export const dataGetMyPublicRecipesSucceeded = () => ({type: DATA_GET_MY_PUBLIC_RECIPES_SUCCEEDED});
export const dataGetMyPublicRecipesFailed = () => ({type: DATA_GET_MY_PUBLIC_RECIPES_FAILED});



export const dataGetMyPrivateEquipments = myPrivateEquipment => ({
  type: DATA_GET_MY_PRIVATE_EQUIPMENTS,
  myPrivateEquipment
});
export const dataGetMyPrivateEquipmentsSucceeded = () => ({type: DATA_GET_MY_PRIVATE_EQUIPMENTS_SUCCEEDED});
export const dataGetMyPrivateEquipmentsFailed = () => ({type: DATA_GET_MY_PRIVATE_EQUIPMENTS_FAILED});



export const dataGetMyPrivateIngredients = myPrivateIngredients => ({
  type: DATA_GET_MY_PRIVATE_INGREDIENTS,
  myPrivateIngredients
});
export const dataGetMyPrivateIngredientsSucceeded = () => ({type: DATA_GET_MY_PRIVATE_INGREDIENTS_SUCCEEDED});
export const dataGetMyPrivateIngredientsFailed = () => ({type: DATA_GET_MY_PRIVATE_INGREDIENTS_FAILED});



export const dataGetMyPrivateRecipes = myPrivateRecipes => ({
  type: DATA_GET_MY_PRIVATE_RECIPES,
  myPrivateRecipes
});
export const dataGetMyPrivateRecipesSucceeded = () => ({type: DATA_GET_MY_PRIVATE_RECIPES_SUCCEEDED});
export const dataGetMyPrivateRecipesFailed = () => ({type: DATA_GET_MY_PRIVATE_RECIPES_FAILED});



export const dataGetMyFavoriteRecipes = myFavoriteRecipes => ({
  type: DATA_GET_MY_FAVORITE_RECIPES,
  myFavoriteRecipes
});
export const dataGetMyFavoriteRecipesSucceeded = () => ({type: DATA_GET_MY_FAVORITE_RECIPES_SUCCEEDED});
export const dataGetMyFavoriteRecipesFailed = () => ({type: DATA_GET_MY_FAVORITE_RECIPES_FAILED});



export const dataGetMySavedRecipes = mySavedRecipes => ({
  type: DATA_GET_MY_SAVED_RECIPES,
  mySavedRecipes
});
export const dataGetMySavedRecipesSucceeded = () => ({type: DATA_GET_MY_SAVED_RECIPES_SUCCEEDED});
export const dataGetMySavedRecipesFailed = () => ({type: DATA_GET_MY_SAVED_RECIPES_FAILED});



export const dataGetMyPlans = myPlans => ({
  type: DATA_GET_MY_PLANS,
  myPlans
});
export const dataGetMyPlansSucceeded = () => ({type: DATA_GET_MY_PLANS_SUCCEEDED});
export const dataGetMyPlansFailed = () => ({type: DATA_GET_MY_PLANS_FAILED});



export const dataGetMyFriendships = myFriendships => ({
  type: DATA_GET_MY_FRIENDSHIPS,
  myFriendships
});
export const dataGetMyFriendshipsSucceeded = () => ({type: DATA_GET_MY_FRIENDSHIPS_SUCCEEDED});
export const dataGetMyFriendshipsFailed = () => ({type: DATA_GET_MY_FRIENDSHIPS_FAILED});