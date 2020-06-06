import {
  dataInit,
  dataGetContentTypes,
  dataGetContentTypesSucceeded,
  dataGetContentTypesFailed,
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
import {
  DATA_INIT,
  DATA_GET_CONTENT_TYPES,
  DATA_GET_CONTENT_TYPES_SUCCEEDED,
  DATA_GET_CONTENT_TYPES_FAILED,
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

describe('the dataInit action creator', () => {
  it('returns the correct action type', () => {
    const actual = dataInit().type;
    const expected = DATA_INIT;
    expect(actual).toEqual(expected);
  });
});

describe ('the dataGetContentTypes action creator', () => {
  const contentTypes = [
    {
      content_type_id: 1,
      parent_id: 0,
      content_type_name: "Page",
      content_type_path: "/page"
    },
    {
      content_type_id: 2,
      parent_id: 0,
      content_type_name: "Post",
      content_type_path: "/post"
    }
  ];
  it('returns the correct action type', () => {
    const actual = dataGetContentTypes(contentTypes).type;
    const expected = DATA_GET_CONTENT_TYPES;
    expect(actual).toEqual(expected);
  });
  it('returns the correct contentTypes', () => {
    const actual = dataGetContentTypes(contentTypes).contentTypes;
    const expected = contentTypes;
    expect(actual).toEqual(expected);
  });
});

describe('the dataGetContentTypesSucceeded action creator', () => {
  it('returns the correct action type', () => {
    const actual = dataGetContentTypesSucceeded().type;
    const expected = DATA_GET_CONTENT_TYPES_SUCCEEDED;
    expect(actual).toEqual(expected);
  });
});

describe('the dataGetContentTypesFailed action creator', () => {
  it('returns the correct action type', () => {
    const actual = dataGetContentTypesFailed().type;
    const expected = DATA_GET_CONTENT_TYPES_FAILED;
    expect(actual).toEqual(expected);
  });
});

describe('the dataGetMeasurements action creator', () => {
  const measurements = [
    {"measurement_id": 1, "measurement_name": "teaspoon"},
    {"measurement_id": 2, "measurement_name": "Tablespoon"}
  ];
  it('returns the correct action type', () => {
    const actual = dataGetMeasurements(measurements).type;
    const expected = DATA_GET_MEASUREMENTS;
    expect(actual).toEqual(expected);
  });
  it('returns the correct measurements', () => {
    const actual = dataGetMeasurements(measurements).measurements;
    const expected = measurements;
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
  const equipment = [
    {
      equipment_id: 1,
      equipment_type_id: 4,
      owner_id: 1,
      equipment_name: "Chopstick",
      equipment_type_name: "Dining",
      equipment_description: "It works.",
      equipment_image: "nobsc-chopstick"
    }
  ];
  it('returns the correct action type', () => {
    const actual = dataGetEquipments(equipment).type;
    const expected = DATA_GET_EQUIPMENTS;
    expect(actual).toEqual(expected);
  });
  it('returns the correct equipment', () => {
    const actual = dataGetEquipments(equipment).equipment;
    const expected = equipment;
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
  const equipmentTypes = [
    {"equipment_type_id": 1, "equipment_type_name": "Cleaning"},
    {"equipment_type_id": 2, "equipment_type_name": "Preparing"}
  ];
  it('returns the correct action type', () => {
    const actual = dataGetEquipmentTypes(equipmentTypes).type;
    const expected = DATA_GET_EQUIPMENT_TYPES;
    expect(actual).toEqual(expected);
  });
  it('returns the correct equipmentTypes', () => {
    const actual = dataGetEquipmentTypes(equipmentTypes).equipmentTypes;
    const expected = equipmentTypes;
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
  const ingredients = [
    {
      ingredient_id: 1,
      ingredient_type_id: 1,
      owner_id: 1,
      ingredient_type_name: "Fish",
      ingredient_name: "Salmon",
      ingredient_description: "Tasty.",
      ingredient_image: "nobsc-salmon"
    }
  ];
  it('returns the correct action type', () => {
    const actual = dataGetIngredients(ingredients).type;
    const expected = DATA_GET_INGREDIENTS;
    expect(actual).toEqual(expected);
  });
  it('returns the correct ingredients', () => {
    const actual = dataGetIngredients(ingredients).ingredients;
    const expected = ingredients;
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
  const ingredientTypes = [
    {"ingredient_type_id": 1, "ingredient_type_name": "Fish"},
    {"ingredient_type_id": 2, "ingredient_type_name": "Shellfish"}
  ];
  it('returns the correct action type', () => {
    const actual = dataGetIngredientTypes(ingredientTypes).type;
    const expected = DATA_GET_INGREDIENT_TYPES;
    expect(actual).toEqual(expected);
  });
  it('returns the correct ingredientTypes', () => {
    const actual = dataGetIngredientTypes(ingredientTypes).ingredientTypes;
    const expected = ingredientTypes;
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
  const recipes = [
    {
      recipe_id: 1,
      owner_id: 1,
      recipe_type_id: 1,
      cuisine_id: 1,
      title: "Tasty",
      recipe_image: "nobsc-tasty"
    }
  ];
  it('returns the correct action type', () => {
    const actual = dataGetRecipes(recipes).type;
    const expected = DATA_GET_RECIPES;
    expect(actual).toEqual(expected);
  });
  it('returns the correct recipes', () => {
    const actual = dataGetRecipes(recipes).recipes;
    const expected = recipes;
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
  const recipeTypes = [
    {"recipe_type_id": 1, "recipe_type_name": "Drink"},
    {"recipe_type_id": 2, "recipe_type_name": "Appetizer"}
  ];
  it('returns the correct action type', () => {
    const actual = dataGetRecipeTypes(recipeTypes).type;
    const expected = DATA_GET_RECIPE_TYPES;
    expect(actual).toEqual(expected);
  });
  it('returns the correct recipeTypes', () => {
    const actual = dataGetRecipeTypes(recipeTypes).recipeTypes;
    const expected = recipeTypes;
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
  const cuisines = [
    {"cuisine_id": 1, "cuisine_name": "Russian", "cuisine_nation": "Russia"},
    {"cuisine_id": 2, "cuisine_name": "German", "cuisine_nation": "Germany"}
  ];
  it('returns the correct action type', () => {
    const actual = dataGetCuisines(cuisines).type;
    const expected = DATA_GET_CUISINES;
    expect(actual).toEqual(expected);
  });
  it('returns the correct cuisines', () => {
    const actual = dataGetCuisines(cuisines).cuisines;
    const expected = cuisines;
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
  const methods = [
    {"method_id": 1, "method_name": "No-Cook"},
    {"method_id": 2, "method_name": "Chill"}
  ];
  it('returns the correct action type', () => {
    const actual = dataGetMethods(methods).type;
    const expected = DATA_GET_METHODS;
    expect(actual).toEqual(expected);
  });
  it('returns the correct methods', () => {
    const actual = dataGetMethods(methods).methods;
    const expected = methods;
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
  const myPublicRecipes = [
    {
      recipe_id: 841,
      owner_id: 3908,
      recipe_type_id: 1,
      cuisine_id: 1,
      title: "Tasty",
      recipe_image: "nobsc-tasty"
    }
  ];
  it('returns the correct action type', () => {
    const actual = dataGetMyPublicRecipes(myPublicRecipes).type;
    const expected = DATA_GET_MY_PUBLIC_RECIPES;
    expect(actual).toEqual(expected);
  });
  it('returns the correct myPublicRecipes', () => {
    const actual = dataGetMyPublicRecipes(myPublicRecipes).myPublicRecipes;
    const expected = myPublicRecipes;
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
  const myPrivateEquipment = [
    {
      equipment_id: 1,
      equipment_type_id: 3,
      owner_id: 3908,
      equipment_name: "My Teapot",
      equipment_type_name: "Dining",
      equipment_description: "From grandmother.",
      equipment_image: "my-teapot"
    }
  ];
  it('returns the correct action type', () => {
    const actual = dataGetMyPrivateEquipments(myPrivateEquipment).type;
    const expected = DATA_GET_MY_PRIVATE_EQUIPMENTS;
    expect(actual).toEqual(expected);
  });
  it('returns the correct myPrivateEquipment', () => {
    const actual = dataGetMyPrivateEquipments(myPrivateEquipment)
    .myPrivateEquipment;
    const expected = myPrivateEquipment;
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
  const myPrivateIngredients = [
    {
      ingredient_id: 8927,
      ingredient_type_id: 18,
      owner_id: 1,
      ingredient_type_name: "Product",
      ingredient_name: "HOT Sauce",
      ingredient_description: "From Uncle Bob.",
      ingredient_image: "hot-sauce"
    }
  ];
  it('returns the correct action type', () => {
    const actual = dataGetMyPrivateIngredients(myPrivateIngredients).type;
    const expected = DATA_GET_MY_PRIVATE_INGREDIENTS;
    expect(actual).toEqual(expected);
  });
  it('returns the correct myPrivateIngredients', () => {
    const actual = dataGetMyPrivateIngredients(myPrivateIngredients)
    .myPrivateIngredients;
    const expected = myPrivateIngredients;
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
  const myPrivateRecipes = [
    {
      recipe_id: 841,
      owner_id: 3908,
      recipe_type_id: 1,
      cuisine_id: 1,
      title: "Tasty",
      recipe_image: "nobsc-tasty"
    }
  ];
  it('returns the correct action type', () => {
    const actual = dataGetMyPrivateRecipes(myPrivateRecipes).type;
    const expected = DATA_GET_MY_PRIVATE_RECIPES;
    expect(actual).toEqual(expected);
  });
  it('returns the correct myPrivateRecipes', () => {
    const actual = dataGetMyPrivateRecipes(myPrivateRecipes).myPrivateRecipes;
    const expected = myPrivateRecipes;
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
  const myFavoriteRecipes = [
    {
      recipe_id: 1,
      owner_id: 1,
      recipe_type_id: 1,
      cuisine_id: 1,
      title: "Tasty",
      recipe_image: "nobsc-tasty"
    }
  ];
  it('returns the correct action type', () => {
    const actual = dataGetMyFavoriteRecipes(myFavoriteRecipes).type;
    const expected = DATA_GET_MY_FAVORITE_RECIPES;
    expect(actual).toEqual(expected);
  });
  it('returns the correct myFavoriteRecipes', () => {
    const actual = dataGetMyFavoriteRecipes(myFavoriteRecipes)
    .myFavoriteRecipes;
    const expected = myFavoriteRecipes;
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
  const mySavedRecipes = [
    {
      recipe_id: 1,
      owner_id: 1,
      recipe_type_id: 1,
      cuisine_id: 1,
      title: "Tasty",
      recipe_image: "nobsc-tasty"
    }
  ];
  it('returns the correct action type', () => {
    const actual = dataGetMySavedRecipes(mySavedRecipes).type;
    const expected = DATA_GET_MY_SAVED_RECIPES;
    expect(actual).toEqual(expected);
  });
  it('returns the correct mySavedRecipes', () => {
    const actual = dataGetMySavedRecipes(mySavedRecipes).mySavedRecipes;
    const expected = mySavedRecipes;
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
  const myPlans = [
    {
      plan_id: 98234,
      plan_name: "Plan A",
      plan_data: {
        1: [],  2: [],  3: [],  4: [],  5: [],  6: [],  7: [],
        8: [],  9: [], 10: [], 11: [], 12: [], 13: [], 14: [],
       15: [], 16: [], 17: [], 18: [], 19: [], 20: [], 21: [],
       22: [], 23: [], 24: [], 25: [], 26: [], 27: [], 28: []
      }
    }
  ];
  it('returns the correct action type', () => {
    const actual = dataGetMyPlans(myPlans).type;
    const expected = DATA_GET_MY_PLANS;
    expect(actual).toEqual(expected);
  });
  it('returns the correct ', () => {
    const actual = dataGetMyPlans(myPlans).myPlans;
    const expected = myPlans;
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
  const myFriendships = [
    {
      user_id: 1749,
      username: "SnowboarderMike",
      avatar: "SnowboarderMike",
      status: "accepted"
    }
  ];
  it('returns the correct action type', () => {
    const actual = dataGetMyFriendships(myFriendships).type;
    const expected = DATA_GET_MY_FRIENDSHIPS;
    expect(actual).toEqual(expected);
  });
  it('returns the correct ', () => {
    const actual = dataGetMyFriendships(myFriendships).myFriendships;
    const expected = myFriendships;
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