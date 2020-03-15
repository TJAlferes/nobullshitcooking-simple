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
} from './types';

import {
  dataInit,

  dataGetMeasurements,
  dataGetMeasurementsSucceeded,
  dataGetMeasurementsFailed,

  dataGetEquipments,
  dataGetEquipmentsSucceeded,
  dataGetEquipmentsFailed,

  dataGetEquipmentTypes,
  dataGetEquipmentTypesSucceeded,
  dataGetEquipmentTypesFailed,

  dataGetIngredients,
  dataGetIngredientsSucceeded,
  dataGetIngredientsFailed,

  dataGetIngredientTypes,
  dataGetIngredientTypesSucceeded,
  dataGetIngredientTypesFailed,

  dataGetRecipes,
  dataGetRecipesSucceeded,
  dataGetRecipesFailed,

  dataGetRecipeTypes,
  dataGetRecipeTypesSucceeded,
  dataGetRecipeTypesFailed,

  dataGetCuisines,
  dataGetCuisinesSucceeded,
  dataGetCuisinesFailed,

  dataGetMethods,
  dataGetMethodsSucceeded,
  dataGetMethodsFailed,

  dataGetMyPublicRecipes,
  dataGetMyPublicRecipesSucceeded,
  dataGetMyPublicRecipesFailed,

  dataGetMyPrivateEquipments,
  dataGetMyPrivateEquipmentsSucceeded,
  dataGetMyPrivateEquipmentsFailed,

  dataGetMyPrivateIngredients,
  dataGetMyPrivateIngredientsSucceeded,
  dataGetMyPrivateIngredientsFailed,

  dataGetMyPrivateRecipes,
  dataGetMyPrivateRecipesSucceeded,
  dataGetMyPrivateRecipesFailed,

  dataGetMyFavoriteRecipes,
  dataGetMyFavoriteRecipesSucceeded,
  dataGetMyFavoriteRecipesFailed,

  dataGetMySavedRecipes,
  dataGetMySavedRecipesSucceeded,
  dataGetMySavedRecipesFailed,

  dataGetMyPlans,
  dataGetMyPlansSucceeded,
  dataGetMyPlansFailed,
  
  dataGetMyFriendships,
  dataGetMyFriendshipsSucceeded,
  dataGetMyFriendshipsFailed
} from './actions';



describe('the dataInit action creator', () => {
  it('returns the correct action type', () => {
    const actual = dataInit().type;
    const expected = DATA_INIT;
    expect(actual).toEqual(expected);
  });
});



describe('the dataGetMeasurements action creator', () => {
  it('returns the correct action type', () => {
    const actual = dataGetMeasurements([
      {"measurement_id": 1, "measurement_name": "teaspoon"},
      {"measurement_id": 2, "measurement_name": "Tablespoon"}
    ]).type;
    const expected = DATA_GET_MEASUREMENTS;
    expect(actual).toEqual(expected);
  });
  it('returns the correct measurements', () => {
    const actual = dataGetMeasurements([
      {"measurement_id": 1, "measurement_name": "teaspoon"},
      {"measurement_id": 2, "measurement_name": "Tablespoon"}
    ]).measurements;
    const expected = [
      {"measurement_id": 1, "measurement_name": "teaspoon"},
      {"measurement_id": 2, "measurement_name": "Tablespoon"}
    ];
    expect(actual).toEqual(expected);
  });
});

describe('the dataGetMeasurementsSucceeded action creator', () => {
  it('returns the correct action type', () => {
    const actual = dataGetMeasurementsSucceeded().type;
    const expected = DATA_GET_MEASUREMENTS_SUCCEEDED;
    expect(actual).toEqual(expected);
  });
});

describe('the dataGetMeasurementsFailed action creator', () => {
  it('returns the correct action type', () => {
    const actual = dataGetMeasurementsFailed().type;
    const expected = DATA_GET_MEASUREMENTS_FAILED;
    expect(actual).toEqual(expected);
  });
});



describe('the dataGetEquipments action creator', () => {
  it('returns the correct action type', () => {
    const actual = dataGetEquipments([
      {"equipment_id": 1, "equipment_name": "Chopstick"},
      {"equipment_id": 2, "equipment_name": "Fork"}
    ]).type;
    const expected = DATA_GET_EQUIPMENTS;
    expect(actual).toEqual(expected);
  });
  it('returns the correct equipment', () => {
    const actual = dataGetEquipments([
      {"equipment_id": 1, "equipment_name": "Chopstick"},
      {"equipment_id": 2, "equipment_name": "Fork"}
    ]).equipment;
    const expected = [
      {"equipment_id": 1, "equipment_name": "Chopstick"},
      {"equipment_id": 2, "equipment_name": "Fork"}
    ];
    expect(actual).toEqual(expected);
  });
});

describe('the dataGetEquipmentsSucceeded action creator', () => {
  it('returns the correct action type', () => {
    const actual = dataGetEquipmentsSucceeded().type;
    const expected = DATA_GET_EQUIPMENTS_SUCCEEDED;
    expect(actual).toEqual(expected);
  });
});

describe('the dataGetEquipmentsFailed action creator', () => {
  it('returns the correct action type', () => {
    const actual = dataGetEquipmentsFailed().type;
    const expected = DATA_GET_EQUIPMENTS_FAILED;
    expect(actual).toEqual(expected);
  });
});



describe('the dataGetEquipmentTypes action creator', () => {
  it('returns the correct action type', () => {
    const actual = dataGetEquipmentTypes([
      {"equipment_type_id": 1, "equipment_type_name": "Cleaning"},
      {"equipment_type_id": 2, "equipment_type_name": "Preparing"}
    ]).type;
    const expected = DATA_GET_EQUIPMENT_TYPES;
    expect(actual).toEqual(expected);
  });
  it('returns the correct equipmentTypes', () => {
    const actual = dataGetEquipmentTypes([
      {"equipment_type_id": 1, "equipment_type_name": "Cleaning"},
      {"equipment_type_id": 2, "equipment_type_name": "Preparing"}
    ]).equipmentTypes;
    const expected = [
      {"equipment_type_id": 1, "equipment_type_name": "Cleaning"},
      {"equipment_type_id": 2, "equipment_type_name": "Preparing"}
    ];
    expect(actual).toEqual(expected);
  });
});

describe('the dataGetEquipmentTypesSucceeded action creator', () => {
  it('returns the correct action type', () => {
    const actual = dataGetEquipmentTypesSucceeded().type;
    const expected = DATA_GET_EQUIPMENT_TYPES_SUCCEEDED;
    expect(actual).toEqual(expected);
  });
});

describe('the dataGetEquipmentTypesFailed action creator', () => {
  it('returns the correct action type', () => {
    const actual = dataGetEquipmentTypesFailed().type;
    const expected = DATA_GET_EQUIPMENT_TYPES_FAILED;
    expect(actual).toEqual(expected);
  });
});



describe('the dataGetIngredients action creator', () => {
  it('returns the correct action type', () => {
    const actual = dataGetIngredients([
      {"ingredient_id": 1, "ingredient_name": "Salmon"},
      {"ingredient_id": 2, "ingredient_name": "Tuna"}
    ]).type;
    const expected = DATA_GET_INGREDIENTS;
    expect(actual).toEqual(expected);
  });
  it('returns the correct ingredients', () => {
    const actual = dataGetIngredients([
      {"ingredient_id": 1, "ingredient_name": "Salmon"},
      {"ingredient_id": 2, "ingredient_name": "Tuna"}
    ]).ingredients;
    const expected = [
      {"ingredient_id": 1, "ingredient_name": "Salmon"},
      {"ingredient_id": 2, "ingredient_name": "Tuna"}
    ];
    expect(actual).toEqual(expected);
  });
});

describe('the dataGetIngredientsSucceeded action creator', () => {
  it('returns the correct action type', () => {
    const actual = dataGetIngredientsSucceeded().type;
    const expected = DATA_GET_INGREDIENTS_SUCCEEDED;
    expect(actual).toEqual(expected);
  });
});

describe('the dataGetIngredientsFailed action creator', () => {
  it('returns the correct action type', () => {
    const actual = dataGetIngredientsFailed().type;
    const expected = DATA_GET_INGREDIENTS_FAILED;
    expect(actual).toEqual(expected);
  });
});



describe('the dataGetIngredientTypes action creator', () => {
  it('returns the correct action type', () => {
    const actual = dataGetIngredientTypes([
      {"ingredient_type_id": 1, "ingredient_type_name": "Fish"},
      {"ingredient_type_id": 2, "ingredient_type_name": "Shellfish"}
    ]).type;
    const expected = DATA_GET_INGREDIENT_TYPES;
    expect(actual).toEqual(expected);
  });
  it('returns the correct ingredientTypes', () => {
    const actual = dataGetIngredientTypes([
      {"ingredient_type_id": 1, "ingredient_type_name": "Fish"},
      {"ingredient_type_id": 2, "ingredient_type_name": "Shellfish"}
    ]).ingredientTypes;
    const expected = [
      {"ingredient_type_id": 1, "ingredient_type_name": "Fish"},
      {"ingredient_type_id": 2, "ingredient_type_name": "Shellfish"}
    ];
    expect(actual).toEqual(expected);
  });
});

describe('the dataGetIngredientTypesSucceeded action creator', () => {
  it('returns the correct action type', () => {
    const actual = dataGetIngredientTypesSucceeded().type;
    const expected = DATA_GET_INGREDIENT_TYPES_SUCCEEDED;
    expect(actual).toEqual(expected);
  });
});

describe('the dataGetIngredientTypesFailed action creator', () => {
  it('returns the correct action type', () => {
    const actual = dataGetIngredientTypesFailed().type;
    const expected = DATA_GET_INGREDIENT_TYPES_FAILED;
    expect(actual).toEqual(expected);
  });
});



describe('the dataGetRecipes action creator', () => {
  it('returns the correct action type', () => {
    const actual = dataGetRecipes([
      {"recipe_id": 1, "title": "Tasty"},
      {"recipe_id": 2, "title": "Yummy"}
    ]).type;
    const expected = DATA_GET_RECIPES;
    expect(actual).toEqual(expected);
  });
  it('returns the correct recipes', () => {
    const actual = dataGetRecipes([
      {"recipe_id": 1, "title": "Tasty"},
      {"recipe_id": 2, "title": "Yummy"}
    ]).recipes;
    const expected = [
      {"recipe_id": 1, "title": "Tasty"},
      {"recipe_id": 2, "title": "Yummy"}
    ];
    expect(actual).toEqual(expected);
  });
});

describe('the dataGetRecipesSucceeded action creator', () => {
  it('returns the correct action type', () => {
    const actual = dataGetRecipesSucceeded().type;
    const expected = DATA_GET_RECIPES_SUCCEEDED;
    expect(actual).toEqual(expected);
  });
});

describe('the dataGetRecipesFailed action creator', () => {
  it('returns the correct action type', () => {
    const actual = dataGetRecipesFailed().type;
    const expected = DATA_GET_RECIPES_FAILED;
    expect(actual).toEqual(expected);
  });
});



describe('the dataGetRecipeTypes action creator', () => {
  it('returns the correct action type', () => {
    const actual = dataGetRecipeTypes([
      {"recipe_type_id": 1, "recipe_type_name": "Drink"},
      {"recipe_type_id": 2, "recipe_type_name": "Appetizer"}
    ]).type;
    const expected = DATA_GET_RECIPE_TYPES;
    expect(actual).toEqual(expected);
  });
  it('returns the correct recipeTypes', () => {
    const actual = dataGetRecipeTypes([
      {"recipe_type_id": 1, "recipe_type_name": "Drink"},
      {"recipe_type_id": 2, "recipe_type_name": "Appetizer"}
    ]).recipeTypes;
    const expected = [
      {"recipe_type_id": 1, "recipe_type_name": "Drink"},
      {"recipe_type_id": 2, "recipe_type_name": "Appetizer"}
    ];
    expect(actual).toEqual(expected);
  });
});

describe('the dataGetRecipeTypesSucceeded action creator', () => {
  it('returns the correct action type', () => {
    const actual = dataGetRecipeTypesSucceeded().type;
    const expected = DATA_GET_RECIPE_TYPES_SUCCEEDED;
    expect(actual).toEqual(expected);
  });
});

describe('the dataGetRecipeTypesFailed action creator', () => {
  it('returns the correct action type', () => {
    const actual = dataGetRecipeTypesFailed().type;
    const expected = DATA_GET_RECIPE_TYPES_FAILED;
    expect(actual).toEqual(expected);
  });
});



describe('the dataGetCuisines action creator', () => {
  it('returns the correct action type', () => {
    const actual = dataGetCuisines([
      {"cuisine_id": 1, "cuisine_name": "Russian"},
      {"cuisine_id": 2, "cuisine_name": "German"}
    ]).type;
    const expected = DATA_GET_CUISINES;
    expect(actual).toEqual(expected);
  });
  it('returns the correct cuisines', () => {
    const actual = dataGetCuisines([
      {"cuisine_id": 1, "cuisine_name": "Russian"},
      {"cuisine_id": 2, "cuisine_name": "German"}
    ]).cuisines;
    const expected = [
      {"cuisine_id": 1, "cuisine_name": "Russian"},
      {"cuisine_id": 2, "cuisine_name": "German"}
    ];
    expect(actual).toEqual(expected);
  });
});

describe('the dataGetCuisinesSucceeded action creator', () => {
  it('returns the correct action type', () => {
    const actual = dataGetCuisinesSucceeded().type;
    const expected = DATA_GET_CUISINES_SUCCEEDED;
    expect(actual).toEqual(expected);
  });
});

describe('the dataGetCuisinesFailed action creator', () => {
  it('returns the correct action type', () => {
    const actual = dataGetCuisinesFailed().type;
    const expected = DATA_GET_CUISINES_FAILED;
    expect(actual).toEqual(expected);
  });
});



describe('the dataGetMethods action creator', () => {
  it('returns the correct action type', () => {
    const actual = dataGetMethods([
      {"method_id": 1, "method_name": "No-Cook"},
      {"method_id": 2, "method_name": "Chill"}
    ]).type;
    const expected = DATA_GET_METHODS;
    expect(actual).toEqual(expected);
  });
  it('returns the correct methods', () => {
    const actual = dataGetMethods([
      {"method_id": 1, "method_name": "No-Cook"},
      {"method_id": 2, "method_name": "Chill"}
    ]).methods;
    const expected = [
      {"method_id": 1, "method_name": "No-Cook"},
      {"method_id": 2, "method_name": "Chill"}
    ];
    expect(actual).toEqual(expected);
  });
});

describe('the dataGetMethodsSucceeded action creator', () => {
  it('returns the correct action type', () => {
    const actual = dataGetMethodsSucceeded().type;
    const expected = DATA_GET_METHODS_SUCCEEDED;
    expect(actual).toEqual(expected);
  });
});

describe('the dataGetMethodsFailed action creator', () => {
  it('returns the correct action type', () => {
    const actual = dataGetMethodsFailed().type;
    const expected = DATA_GET_METHODS_FAILED;
    expect(actual).toEqual(expected);
  });
});



describe('the dataGetMyPublicRecipes action creator', () => {
  it('returns the correct action type', () => {
    const actual = dataGetMyPublicRecipes([
      {recipeId: 841, title: "Tasty"}
    ]).type;
    const expected = DATA_GET_MY_PUBLIC_RECIPES;
    expect(actual).toEqual(expected);
  });
  it('returns the correct myPublicRecipes', () => {
    const actual = dataGetMyPublicRecipes([
      {recipeId: 841, title: "Tasty"}
    ]).myPublicRecipes;
    const expected = [
      {recipeId: 841, title: "Tasty"}
    ];
    expect(actual).toEqual(expected);
  });
});

describe('the dataGetMyPublicRecipesSucceeded action creator', () => {
  it('returns the correct action type', () => {
    const actual = dataGetMyPublicRecipesSucceeded().type;
    const expected = DATA_GET_MY_PUBLIC_RECIPES_SUCCEEDED;
    expect(actual).toEqual(expected);
  });
});

describe('the dataGetMyPublicRecipesFailed action creator', () => {
  it('returns the correct action type', () => {
    const actual = dataGetMyPublicRecipesFailed().type;
    const expected = DATA_GET_MY_PUBLIC_RECIPES_FAILED;
    expect(actual).toEqual(expected);
  });
});



describe('the dataGetMyPrivateEquipments action creator', () => {
  it('returns the correct action type', () => {
    const actual = dataGetMyPrivateEquipments([
      {equipment_id: 9829, equipment_name: "My Teapot"}
    ]).type;
    const expected = DATA_GET_MY_PRIVATE_EQUIPMENTS;
    expect(actual).toEqual(expected);
  });
  it('returns the correct myPrivateEquipment', () => {
    const actual = dataGetMyPrivateEquipments([
      {equipment_id: 9829, equipment_name: "My Teapot"}
    ]).myPrivateEquipment;
    const expected = [
      {equipment_id: 9829, equipment_name: "My Teapot"}
    ];
    expect(actual).toEqual(expected);
  });
});

describe('the dataGetMyPrivateEquipmentsSucceeded action creator', () => {
  it('returns the correct action type', () => {
    const actual = dataGetMyPrivateEquipmentsSucceeded().type;
    const expected = DATA_GET_MY_PRIVATE_EQUIPMENTS_SUCCEEDED;
    expect(actual).toEqual(expected);
  });
});

describe('the dataGetMyPrivateEquipmentsFailed action creator', () => {
  it('returns the correct action type', () => {
    const actual = dataGetMyPrivateEquipmentsFailed().type;
    const expected = DATA_GET_MY_PRIVATE_EQUIPMENTS_FAILED;
    expect(actual).toEqual(expected);
  });
});



describe('the dataGetMyPrivateIngredients action creator', () => {
  it('returns the correct action type', () => {
    const actual = dataGetMyPrivateIngredients([
      {ingredient_id: 8927, ingredient_name: "My Basil"}
    ]).type;
    const expected = DATA_GET_MY_PRIVATE_INGREDIENTS;
    expect(actual).toEqual(expected);
  });
  it('returns the correct myPrivateIngredients', () => {
    const actual = dataGetMyPrivateIngredients([
      {ingredient_id: 8927, ingredient_name: "My Basil"}
    ]).myPrivateIngredients;
    const expected = [
      {ingredient_id: 8927, ingredient_name: "My Basil"}
    ];
    expect(actual).toEqual(expected);
  });
});

describe('the dataGetMyPrivateIngredientsSucceeded action creator', () => {
  it('returns the correct action type', () => {
    const actual = dataGetMyPrivateIngredientsSucceeded().type;
    const expected = DATA_GET_MY_PRIVATE_INGREDIENTS_SUCCEEDED;
    expect(actual).toEqual(expected);
  });
});

describe('the dataGetMyPrivateIngredientsFailed action creator', () => {
  it('returns the correct action type', () => {
    const actual = dataGetMyPrivateIngredientsFailed().type;
    const expected = DATA_GET_MY_PRIVATE_INGREDIENTS_FAILED;
    expect(actual).toEqual(expected);
  });
});



describe('the dataGetMyPrivateRecipes action creator', () => {
  it('returns the correct action type', () => {
    const actual = dataGetMyPrivateRecipes([
      {recipeId: 841, title: "Tasty"}
    ]).type;
    const expected = DATA_GET_MY_PRIVATE_RECIPES;
    expect(actual).toEqual(expected);
  });
  it('returns the correct myPrivateRecipes', () => {
    const actual = dataGetMyPrivateRecipes([
      {recipeId: 841, title: "Tasty"}
    ]).myPrivateRecipes;
    const expected = [
      {recipeId: 841, title: "Tasty"}
    ];
    expect(actual).toEqual(expected);
  });
});

describe('the dataGetMyPrivateRecipesSucceeded action creator', () => {
  it('returns the correct action type', () => {
    const actual = dataGetMyPrivateRecipesSucceeded().type;
    const expected = DATA_GET_MY_PRIVATE_RECIPES_SUCCEEDED;
    expect(actual).toEqual(expected);
  });
});

describe('the dataGetMyPrivateRecipesFailed action creator', () => {
  it('returns the correct action type', () => {
    const actual = dataGetMyPrivateRecipesFailed().type;
    const expected = DATA_GET_MY_PRIVATE_RECIPES_FAILED;
    expect(actual).toEqual(expected);
  });
});



describe('the dataGetMyFavoriteRecipes action creator', () => {
  it('returns the correct action type', () => {
    const actual = dataGetMyFavoriteRecipes([
      {recipeId: 841, title: "Tasty"}
    ]).type;
    const expected = DATA_GET_MY_FAVORITE_RECIPES;
    expect(actual).toEqual(expected);
  });
  it('returns the correct myFavoriteRecipes', () => {
    const actual = dataGetMyFavoriteRecipes([
      {recipeId: 841, title: "Tasty"}
    ]).myFavoriteRecipes;
    const expected = [
      {recipeId: 841, title: "Tasty"}
    ];
    expect(actual).toEqual(expected);
  });
});

describe('the dataGetMyFavoriteRecipesSucceeded action creator', () => {
  it('returns the correct action type', () => {
    const actual = dataGetMyFavoriteRecipesSucceeded().type;
    const expected = DATA_GET_MY_FAVORITE_RECIPES_SUCCEEDED;
    expect(actual).toEqual(expected);
  });
});

describe('the dataGetMyFavoriteRecipesFailed action creator', () => {
  it('returns the correct action type', () => {
    const actual = dataGetMyFavoriteRecipesFailed().type;
    const expected = DATA_GET_MY_FAVORITE_RECIPES_FAILED;
    expect(actual).toEqual(expected);
  });
});



describe('the dataGetMySavedRecipes action creator', () => {
  it('returns the correct action type', () => {
    const actual = dataGetMySavedRecipes([
      {recipeId: 841, title: "Tasty"}
    ]).type;
    const expected = DATA_GET_MY_SAVED_RECIPES;
    expect(actual).toEqual(expected);
  });
  it('returns the correct mySavedRecipes', () => {
    const actual = dataGetMySavedRecipes([
      {recipeId: 841, title: "Tasty"}
    ]).mySavedRecipes;
    const expected = [
      {recipeId: 841, title: "Tasty"}
    ];
    expect(actual).toEqual(expected);
  });
});

describe('the dataGetMySavedRecipesSucceeded action creator', () => {
  it('returns the correct action type', () => {
    const actual = dataGetMySavedRecipesSucceeded().type;
    const expected = DATA_GET_MY_SAVED_RECIPES_SUCCEEDED;
    expect(actual).toEqual(expected);
  });
});

describe('the dataGetMySavedRecipesFailed action creator', () => {
  it('returns the correct action type', () => {
    const actual = dataGetMySavedRecipesFailed().type;
    const expected = DATA_GET_MY_SAVED_RECIPES_FAILED;
    expect(actual).toEqual(expected);
  });
});



describe('the dataGetMyPlans action creator', () => {
  it('returns the correct action type', () => {
    const actual = dataGetMyPlans([
      {plan_id: 98234, plan_name: "Plan A"}
    ]).type;
    const expected = DATA_GET_MY_PLANS;
    expect(actual).toEqual(expected);
  });
  it('returns the correct ', () => {
    const actual = dataGetMyPlans([
      {plan_id: 98234, plan_name: "Plan A"}
    ]).myPlans;
    const expected = [
      {plan_id: 98234, plan_name: "Plan A"}
    ];
    expect(actual).toEqual(expected);
  });
});

describe('the dataGetMyPlansSucceeded action creator', () => {
  it('returns the correct action type', () => {
    const actual = dataGetMyPlansSucceeded().type;
    const expected = DATA_GET_MY_PLANS_SUCCEEDED;
    expect(actual).toEqual(expected);
  });
});

describe('the dataGetMyPlansFailed action creator', () => {
  it('returns the correct action type', () => {
    const actual = dataGetMyPlansFailed().type;
    const expected = DATA_GET_MY_PLANS_FAILED;
    expect(actual).toEqual(expected);
  });
});



describe('the dataGetMyFriendships action creator', () => {
  it('returns the correct action type', () => {
    const actual = dataGetMyFriendships([
      {friend_id: 1749, friend_name: "SnowboarderMike"}
    ]).type;
    const expected = DATA_GET_MY_FRIENDSHIPS;
    expect(actual).toEqual(expected);
  });
  it('returns the correct ', () => {
    const actual = dataGetMyFriendships([
      {friend_id: 1749, friend_name: "SnowboarderMike"}
    ]).myFriendships;
    const expected = [
      {friend_id: 1749, friend_name: "SnowboarderMike"}
    ];
    expect(actual).toEqual(expected);
  });
});

describe('the dataGetMyFriendshipsSucceeded action creator', () => {
  it('returns the correct action type', () => {
    const actual = dataGetMyFriendshipsSucceeded().type;
    const expected = DATA_GET_MY_FRIENDSHIPS_SUCCEEDED;
    expect(actual).toEqual(expected);
  });
});

describe('the dataGetMyFriendshipsFailed action creator', () => {
  it('returns the correct action type', () => {
    const actual = dataGetMyFriendshipsFailed().type;
    const expected = DATA_GET_MY_FRIENDSHIPS_FAILED;
    expect(actual).toEqual(expected);
  });
});