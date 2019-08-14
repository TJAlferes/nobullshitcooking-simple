import * as actionTypes from './actionTypes';

// WRITE UNIT TESTS FOR REDUCERS AND ACTION CREATORS AND SELECTORS AND SAGAS

// measurements
export const dataGetMeasurements = measurements => ({
  type: actionTypes.DATA_GET_MEASUREMENTS,
  measurements
});
export const dataGetSucceeded = () => ({type: actionTypes.DATA_GET_MEASUREMENTS_SUCCEEDED});
export const dataGetFailed = () => ({type: actionTypes.DATA_GET_MEASUREMENTS_FAILED});

// equipment
export const dataGetEquipments = equipment => ({
  type: actionTypes.DATA_GET_EQUIPMENTS,
  equipment
});
export const dataGetEquipmentsSucceeded = () => ({type: actionTypes.DATA_GET_EQUIPMENTS_SUCCEEDED});
export const dataGetEquipmentsFailed = () => ({type: actionTypes.DATA_GET_EQUIPMENTS_FAILED});

// equipment types
export const dataGetEquipmentTypes = equipmentTypes => ({
  type: actionTypes.DATA_GET_EQUIPMENT_TYPES,
  equipmentTypes
});
export const dataGetEquipmentTypesSucceeded = () => ({type: actionTypes.DATA_GET_EQUIPMENT_TYPES_SUCCEEDED});
export const dataGetEquipmentTypesFailed = () => ({type: actionTypes.DATA_GET_EQUIPMENTS_FAILED});

// ingredients
export const dataGetIngredients = ingredients => ({
  type: actionTypes.DATA_GET_INGREDIENTS,
  ingredients
});
export const dataGetIngredientsSucceeded = () => ({type: actionTypes.DATA_GET_INGREDIENTS_SUCCEEDED});
export const dataGetIngredientsFailed = () => ({type: actionTypes.DATA_GET_INGREDIENTS_FAILED});

// ingredient types
export const dataGetIngredientTypes = ingredientTypes => ({
  type: actionTypes.DATA_GET_INGREDIENT_TYPES,
  ingredientTypes
});
export const dataGetIngredientTypesSucceeded = () => ({type: actionTypes.DATA_GET_INGREDIENT_TYPES_SUCCEEDED});
export const dataGetIngredientTypesFailed = () => ({type: actionTypes.DATA_GET_INGREDIENT_TYPES_FAILED});

// recipes
export const dataGetRecipes = recipes => ({
  type: actionTypes.DATA_GET_RECIPES,
  recipes
});
export const dataGetRecipesSucceeded = () => ({type: actionTypes.DATA_GET_RECIPES_SUCCEEDED});
export const dataGetRecipesFailed = () => ({type: actionTypes.DATA_GET_RECIPES_FAILED});

// recipe types
export const dataGetRecipeTypes = recipeTypes => ({
  type: actionTypes.DATA_GET_RECIPE_TYPES,
  recipeTypes
});
export const dataGetRecipeTypesSucceeded = () => ({type: actionTypes.DATA_GET_RECIPE_TYPES_SUCCEEDED});
export const dataGetRecipeTypesFailed = () => ({type: actionTypes.DATA_GET_RECIPE_TYPES_FAILED});

// cuisines
export const dataGetCuisines = cuisines => ({
  type: actionTypes.DATA_GET_CUISINES,
  cuisines
});
export const dataGetCuisinesSucceeded = () => ({type: actionTypes.DATA_GET_CUISINES_SUCCEEDED});
export const dataGetCuisinesFailed = () => ({type: actionTypes.DATA_GET_CUISINES_FAILED});

// methods
export const dataGetMethods = methods => ({
  type: actionTypes.DATA_GET_METHODS,
  methods
});
export const dataGetMethodsSucceeded = () => ({type: actionTypes.DATA_GET_METHODS_SUCCEEDED});
export const dataGetMethodsFailed = () => ({type: actionTypes.DATA_GET_METHODS_FAILED});