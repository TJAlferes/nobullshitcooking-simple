import {
  dataInit,

  dataGetInitialData,
  dataGetInitialDataSucceeded,
  dataGetInitialDataFailed,
  dataGetContent,
  dataGetContentSucceeded,
  dataGetContentFailed,
  dataGetContentTypes,
  dataGetContentTypesSucceeded,
  dataGetContentTypesFailed,
  dataGetCuisines,
  dataGetCuisinesSucceeded,
  dataGetCuisinesFailed,
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
  dataGetMeasurements,
  dataGetMeasurementsSucceeded,
  dataGetMeasurementsFailed,
  dataGetMethods,
  dataGetMethodsSucceeded,
  dataGetMethodsFailed,
  dataGetProducts,
  dataGetProductsSucceeded,
  dataGetProductsFailed,
  dataGetProductCategories,
  dataGetProductCategoriesSucceeded,
  dataGetProductCategoriesFailed,
  dataGetProductTypes,
  dataGetProductTypesSucceeded,
  dataGetProductTypesFailed,
  dataGetRecipes,
  dataGetRecipesSucceeded,
  dataGetRecipesFailed,
  dataGetRecipeTypes,
  dataGetRecipeTypesSucceeded,
  dataGetRecipeTypesFailed,
  
  dataGetInitialUserData,
  dataGetInitialUserDataSucceeded,
  dataGetInitialUserDataFailed,
  dataGetMyContent,
  dataGetMyContentSucceeded,
  dataGetMyContentFailed,
  dataGetMyFavoriteRecipes,
  dataGetMyFavoriteRecipesSucceeded,
  dataGetMyFavoriteRecipesFailed,
  dataGetMyFriendships,
  dataGetMyFriendshipsSucceeded,
  dataGetMyFriendshipsFailed,
  dataGetMyPlans,
  dataGetMyPlansSucceeded,
  dataGetMyPlansFailed,
  dataGetMyPrivateEquipments,
  dataGetMyPrivateEquipmentsSucceeded,
  dataGetMyPrivateEquipmentsFailed,
  dataGetMyPrivateIngredients,
  dataGetMyPrivateIngredientsSucceeded,
  dataGetMyPrivateIngredientsFailed,
  dataGetMyPrivateRecipes,
  dataGetMyPrivateRecipesSucceeded,
  dataGetMyPrivateRecipesFailed,
  dataGetMyPublicRecipes,
  dataGetMyPublicRecipesSucceeded,
  dataGetMyPublicRecipesFailed,
  dataGetMySavedRecipes,
  dataGetMySavedRecipesSucceeded,
  dataGetMySavedRecipesFailed
} from './actions';
import {
  DATA_INIT,

  DATA_GET_INITIAL_DATA,
  DATA_GET_INITIAL_DATA_SUCCEEDED,
  DATA_GET_INITIAL_DATA_FAILED,
  DATA_GET_CONTENT,
  DATA_GET_CONTENT_SUCCEEDED,
  DATA_GET_CONTENT_FAILED,
  DATA_GET_CONTENT_TYPES,
  DATA_GET_CONTENT_TYPES_SUCCEEDED,
  DATA_GET_CONTENT_TYPES_FAILED,
  DATA_GET_CUISINES,
  DATA_GET_CUISINES_SUCCEEDED,
  DATA_GET_CUISINES_FAILED,
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
  DATA_GET_MEASUREMENTS,
  DATA_GET_MEASUREMENTS_SUCCEEDED,
  DATA_GET_MEASUREMENTS_FAILED,
  DATA_GET_METHODS,
  DATA_GET_METHODS_SUCCEEDED,
  DATA_GET_METHODS_FAILED,
  DATA_GET_PRODUCTS,
  DATA_GET_PRODUCTS_SUCCEEDED,
  DATA_GET_PRODUCTS_FAILED,
  DATA_GET_PRODUCT_CATEGORIES,
  DATA_GET_PRODUCT_CATEGORIES_SUCCEEDED,
  DATA_GET_PRODUCT_CATEGORIES_FAILED,
  DATA_GET_PRODUCT_TYPES,
  DATA_GET_PRODUCT_TYPES_SUCCEEDED,
  DATA_GET_PRODUCT_TYPES_FAILED,
  DATA_GET_RECIPES,
  DATA_GET_RECIPES_SUCCEEDED,
  DATA_GET_RECIPES_FAILED,
  DATA_GET_RECIPE_TYPES,
  DATA_GET_RECIPE_TYPES_SUCCEEDED,
  DATA_GET_RECIPE_TYPES_FAILED,

  DATA_GET_INITIAL_USER_DATA,
  DATA_GET_INITIAL_USER_DATA_SUCCEEDED,
  DATA_GET_INITIAL_USER_DATA_FAILED,
  DATA_GET_MY_CONTENT,
  DATA_GET_MY_CONTENT_SUCCEEDED,
  DATA_GET_MY_CONTENT_FAILED,
  DATA_GET_MY_FAVORITE_RECIPES,
  DATA_GET_MY_FAVORITE_RECIPES_SUCCEEDED,
  DATA_GET_MY_FAVORITE_RECIPES_FAILED,
  DATA_GET_MY_FRIENDSHIPS,
  DATA_GET_MY_FRIENDSHIPS_SUCCEEDED,
  DATA_GET_MY_FRIENDSHIPS_FAILED,
  DATA_GET_MY_PLANS,
  DATA_GET_MY_PLANS_SUCCEEDED,
  DATA_GET_MY_PLANS_FAILED,
  DATA_GET_MY_PRIVATE_EQUIPMENTS,
  DATA_GET_MY_PRIVATE_EQUIPMENTS_SUCCEEDED,
  DATA_GET_MY_PRIVATE_EQUIPMENTS_FAILED,
  DATA_GET_MY_PRIVATE_INGREDIENTS,
  DATA_GET_MY_PRIVATE_INGREDIENTS_SUCCEEDED,
  DATA_GET_MY_PRIVATE_INGREDIENTS_FAILED,
  DATA_GET_MY_PRIVATE_RECIPES,
  DATA_GET_MY_PRIVATE_RECIPES_SUCCEEDED,
  DATA_GET_MY_PRIVATE_RECIPES_FAILED,
  DATA_GET_MY_PUBLIC_RECIPES,
  DATA_GET_MY_PUBLIC_RECIPES_SUCCEEDED,
  DATA_GET_MY_PUBLIC_RECIPES_FAILED,
  DATA_GET_MY_SAVED_RECIPES,
  DATA_GET_MY_SAVED_RECIPES_SUCCEEDED,
  DATA_GET_MY_SAVED_RECIPES_FAILED
} from './types';

describe('dataInit action creator', () => {
  it('returns the correct action type', () => {
    expect(dataInit().type).toEqual(DATA_INIT);
  });
});

describe ('dataGetInitialData action creator', () => {
  const initialData = {
    officialContent: [],
    contentTypes: [{id: 1, parent_id: 0, name: "Page", path: "/page"}],
    cuisines: [{"id": 1, "name": "Russian", "nation": "Russia"}],
    officialEquipment: [
      {
        id: 1,
        equipment_type_id: 4,
        owner_id: 1,
        name: "Chopstick",
        equipment_type_name: "Dining",
        description: "It works.",
        image: "nobsc-chopstick"
      }
    ],
    equipmentTypes: [{"id": 1, "name": "Cleaning"}],
    officialIngredients: [
      {
        id: 1,
        ingredient_type_id: 1,
        owner_id: 1,
        ingredient_type_name: "Fish",
        brand: null,
        variety: "Chilean",
        name: "Salmon",
        description: "Tasty.",
        image: "nobsc-salmon"
      }
    ],
    ingredientTypes: [{"id": 1, "name": "Fish"}],
    measurements: [{"id": 1, "name": "teaspoon"}],
    methods: [{"id": 1, "name": "No-Cook"}],
    products: [],
    productCategories: [],
    productTypes: [],
    officialRecipes: [
      {
        id: 1,
        owner_id: 1,
        recipe_type_id: 1,
        cuisine_id: 1,
        title: "Tasty",
        recipe_image: "nobsc-tasty"
      }
    ],
    recipeTypes: [{"id": 1, "name": "Drink"}]
  };

  it('returns the correct action type', () => {
    expect(dataGetInitialData(initialData).type).toEqual(DATA_GET_INITIAL_DATA);
  });

  it('returns the correct initialData', () => {
    expect(dataGetInitialData(initialData).initialData).toEqual(initialData);
  });
});

describe('dataGetInitialDataSucceeded action creator', () => {
  it('returns the correct action type', () => {
    expect(dataGetInitialDataSucceeded().type)
      .toEqual(DATA_GET_INITIAL_DATA_SUCCEEDED);
  });
});

describe('dataGetInitialDataFailed action creator', () => {
  it('returns the correct action type', () => {
    expect(dataGetInitialDataFailed().type)
      .toEqual(DATA_GET_INITIAL_DATA_FAILED);
  });
});

describe('dataGetContent action creator', () => {
  const content = [
    {
      id: 1,
      title: "How To",
      author: "NOBSC",
      image: "nobsc-grilling",
      //snippet: "Blah..."
    }
  ];

  it('returns the correct action type', () => {
    expect(dataGetContent(content).type).toEqual(DATA_GET_CONTENT);
  });

  it('returns the correct equipment', () => {
    expect(dataGetContent(content).content).toEqual(content);
  });
});

describe('dataGetContentSucceeded action creator', () => {
  it('returns the correct action type', () => {
    expect(dataGetContentSucceeded().type).toEqual(DATA_GET_CONTENT_SUCCEEDED);
  });
});

describe('dataGetContentFailed action creator', () => {
  it('returns the correct action type', () => {
    expect(dataGetContentFailed().type).toEqual(DATA_GET_CONTENT_FAILED);
  });
});

describe ('dataGetContentTypes action creator', () => {
  const contentTypes = [
    {id: 1, parent_id: 0, name: "Page", path: "/page"},
    {id: 2, parent_id: 0, name: "Post", path: "/post"}
  ];

  it('returns the correct action type', () => {
    expect(dataGetContentTypes(contentTypes).type)
      .toEqual(DATA_GET_CONTENT_TYPES);
  });

  it('returns the correct contentTypes', () => {
    expect(dataGetContentTypes(contentTypes).contentTypes)
      .toEqual(contentTypes);
  });
});

describe('dataGetContentTypesSucceeded action creator', () => {
  it('returns the correct action type', () => {
    expect(dataGetContentTypesSucceeded().type)
      .toEqual(DATA_GET_CONTENT_TYPES_SUCCEEDED);
  });
});

describe('dataGetContentTypesFailed action creator', () => {
  it('returns the correct action type', () => {
    expect(dataGetContentTypesFailed().type)
      .toEqual(DATA_GET_CONTENT_TYPES_FAILED);
  });
});

describe('dataGetCuisines action creator', () => {
  const cuisines = [
    {"id": 1, "name": "Russian", "nation": "Russia"},
    {"id": 2, "name": "German", "nation": "Germany"}
  ];

  it('returns the correct action type', () => {
    expect(dataGetCuisines(cuisines).type).toEqual(DATA_GET_CUISINES);
  });

  it('returns the correct cuisines', () => {
    expect(dataGetCuisines(cuisines).cuisines).toEqual(cuisines);
  });
});

describe('dataGetCuisinesSucceeded action creator', () => {
  it('returns the correct action type', () => {
    expect(dataGetCuisinesSucceeded().type)
      .toEqual(DATA_GET_CUISINES_SUCCEEDED);
  });
});

describe('dataGetCuisinesFailed action creator', () => {
  it('returns the correct action type', () => {
    expect(dataGetCuisinesFailed().type).toEqual(DATA_GET_CUISINES_FAILED);
  });
});

describe('dataGetEquipments action creator', () => {
  const equipment = [
    {
      id: 1,
      equipment_type_id: 4,
      owner_id: 1,
      name: "Chopstick",
      equipment_type_name: "Dining",
      description: "It works.",
      image: "nobsc-chopstick"
    }
  ];

  it('returns the correct action type', () => {
    expect(dataGetEquipments(equipment).type).toEqual(DATA_GET_EQUIPMENTS);
  });

  it('returns the correct equipment', () => {
    expect(dataGetEquipments(equipment).equipment).toEqual(equipment);
  });
});

describe('dataGetEquipmentsSucceeded action creator', () => {
  it('returns the correct action type', () => {
    expect(dataGetEquipmentsSucceeded().type)
      .toEqual(DATA_GET_EQUIPMENTS_SUCCEEDED);
  });
});

describe('dataGetEquipmentsFailed action creator', () => {
  it('returns the correct action type', () => {
    expect(dataGetEquipmentsFailed().type).toEqual(DATA_GET_EQUIPMENTS_FAILED);
  });
});

describe('dataGetEquipmentTypes action creator', () => {
  const equipmentTypes = [
    {"id": 1, "name": "Cleaning"},
    {"id": 2, "name": "Preparing"}
  ];

  it('returns the correct action type', () => {
    expect(dataGetEquipmentTypes(equipmentTypes).type)
      .toEqual(DATA_GET_EQUIPMENT_TYPES);
  });

  it('returns the correct equipmentTypes', () => {
    expect(dataGetEquipmentTypes(equipmentTypes).equipmentTypes)
      .toEqual(equipmentTypes);
  });
});

describe('dataGetEquipmentTypesSucceeded action creator', () => {
  it('returns the correct action type', () => {
    expect(dataGetEquipmentTypesSucceeded().type)
      .toEqual(DATA_GET_EQUIPMENT_TYPES_SUCCEEDED);
  });
});

describe('dataGetEquipmentTypesFailed action creator', () => {
  it('returns the correct action type', () => {
    expect(dataGetEquipmentTypesFailed().type)
      .toEqual(DATA_GET_EQUIPMENT_TYPES_FAILED);
  });
});

describe('dataGetIngredients action creator', () => {
  const ingredients = [
    {
      id: 1,
      ingredient_type_id: 1,
      owner_id: 1,
      ingredient_type_name: "Fish",
      brand: null,
      variety: "Chilean",
      name: "Salmon",
      description: "Tasty.",
      image: "nobsc-salmon"
    }
  ];

  it('returns the correct action type', () => {
    expect(dataGetIngredients(ingredients).type).toEqual(DATA_GET_INGREDIENTS);
  });

  it('returns the correct ingredients', () => {
    expect(dataGetIngredients(ingredients).ingredients).toEqual(ingredients);
  });
});

describe('dataGetIngredientsSucceeded action creator', () => {
  it('returns the correct action type', () => {
    expect(dataGetIngredientsSucceeded().type)
      .toEqual(DATA_GET_INGREDIENTS_SUCCEEDED);
  });
});

describe('dataGetIngredientsFailed action creator', () => {
  it('returns the correct action type', () => {
    expect(dataGetIngredientsFailed().type)
      .toEqual(DATA_GET_INGREDIENTS_FAILED);
  });
});

describe('dataGetIngredientTypes action creator', () => {
  const ingredientTypes = [
    {"id": 1, "name": "Fish"},
    {"id": 2, "name": "Shellfish"}
  ];

  it('returns the correct action type', () => {
    expect(dataGetIngredientTypes(ingredientTypes).type)
      .toEqual(DATA_GET_INGREDIENT_TYPES);
  });

  it('returns the correct ingredientTypes', () => {
    expect(dataGetIngredientTypes(ingredientTypes).ingredientTypes)
      .toEqual(ingredientTypes);
  });
});

describe('dataGetIngredientTypesSucceeded action creator', () => {
  it('returns the correct action type', () => {
    expect(dataGetIngredientTypesSucceeded().type)
      .toEqual(DATA_GET_INGREDIENT_TYPES_SUCCEEDED);
  });
});

describe('dataGetIngredientTypesFailed action creator', () => {
  it('returns the correct action type', () => {
    expect(dataGetIngredientTypesFailed().type)
      .toEqual(DATA_GET_INGREDIENT_TYPES_FAILED);
  });
});

describe('dataGetMeasurements action creator', () => {
  const measurements = [
    {"id": 1, "name": "teaspoon"},
    {"id": 2, "name": "Tablespoon"}
  ];

  it('returns the correct action type', () => {
    expect(dataGetMeasurements(measurements).type)
      .toEqual(DATA_GET_MEASUREMENTS);
  });

  it('returns the correct measurements', () => {
    expect(dataGetMeasurements(measurements).measurements)
      .toEqual(measurements);
  });
});

describe('dataGetMeasurementsSucceeded action creator', () => {
  it('returns the correct action type', () => {
    expect(dataGetMeasurementsSucceeded().type)
      .toEqual(DATA_GET_MEASUREMENTS_SUCCEEDED);
  });
});

describe('dataGetMeasurementsFailed action creator', () => {
  it('returns the correct action type', () => {
    expect(dataGetMeasurementsFailed().type)
      .toEqual(DATA_GET_MEASUREMENTS_FAILED);
  });
});

describe('dataGetMethods action creator', () => {
  const methods = [
    {"id": 1, "name": "No-Cook"},
    {"id": 2, "name": "Chill"}
  ];

  it('returns the correct action type', () => {
    expect(dataGetMethods(methods).type).toEqual(DATA_GET_METHODS);
  });

  it('returns the correct methods', () => {
    expect(dataGetMethods(methods).methods).toEqual(methods);
  });
});

describe('dataGetMethodsSucceeded action creator', () => {
  it('returns the correct action type', () => {
    expect(dataGetMethodsSucceeded().type).toEqual(DATA_GET_METHODS_SUCCEEDED);
  });
});

describe('dataGetMethodsFailed action creator', () => {
  it('returns the correct action type', () => {
    expect(dataGetMethodsFailed().type).toEqual(DATA_GET_METHODS_FAILED);
  });
});

describe('dataGetProducts action creator', () => {
  const products = [
    {
      id: 1,
      product_category_id: 1,
      product_type_id: 1,
      brand: null,
      variety: "Chilean",
      name: "Salmon",
      fullname: "Chilean Salmon",
      description: "Tasty.",
      specs: {},
      image: "nobsc-salmon"
    }
  ];

  it('returns the correct action type', () => {
    expect(dataGetProducts(products).type).toEqual(DATA_GET_PRODUCTS);
  });

  it('returns the correct products', () => {
    expect(dataGetProducts(products).products).toEqual(products);
  });
});

describe('dataGetProductsSucceeded action creator', () => {
  it('returns the correct action type', () => {
    expect(dataGetProductsSucceeded().type)
      .toEqual(DATA_GET_PRODUCTS_SUCCEEDED);
  });
});

describe('dataGetProductsFailed action creator', () => {
  it('returns the correct action type', () => {
    expect(dataGetProductsFailed().type).toEqual(DATA_GET_PRODUCTS_FAILED);
  });
});

describe('dataGetProductCategories action creator', () => {
  const productCategories = [
    {"id": 1, "name": "Men"},
    {"id": 2, "name": "Women"}
  ];

  it('returns the correct action type', () => {
    expect(dataGetProductCategories(productCategories).type)
      .toEqual(DATA_GET_PRODUCT_CATEGORIES);
  });

  it('returns the correct productCategories', () => {
    expect(dataGetProductCategories(productCategories).productCategories)
      .toEqual(productCategories);
  });
});

describe('dataGetProductCategoriesSucceeded action creator', () => {
  it('returns the correct action type', () => {
    expect(dataGetProductCategoriesSucceeded().type)
      .toEqual(DATA_GET_PRODUCT_CATEGORIES_SUCCEEDED);
  });
});

describe('dataGetProductCategoriesFailed action creator', () => {
  it('returns the correct action type', () => {
    expect(dataGetProductCategoriesFailed().type)
      .toEqual(DATA_GET_PRODUCT_CATEGORIES_FAILED);
  });
});

describe('dataGetProductTypes action creator', () => {
  const productTypes = [
    {"id": 1, "name": "Long Sleeve"},
    {"id": 2, "name": "Short Sleeve"}
  ];

  it('returns the correct action type', () => {
    expect(dataGetProductTypes(productTypes).type)
      .toEqual(DATA_GET_PRODUCT_TYPES);
  });

  it('returns the correct productTypes', () => {
    expect(dataGetProductTypes(productTypes).productTypes)
      .toEqual(productTypes);
  });
});

describe('dataGetProductTypesSucceeded action creator', () => {
  it('returns the correct action type', () => {
    expect(dataGetProductTypesSucceeded().type)
      .toEqual(DATA_GET_PRODUCT_TYPES_SUCCEEDED);
  });
});

describe('dataGetProductTypesFailed action creator', () => {
  it('returns the correct action type', () => {
    expect(dataGetProductTypesFailed().type)
      .toEqual(DATA_GET_PRODUCT_TYPES_FAILED);
  });
});

describe('dataGetRecipes action creator', () => {
  const recipes = [
    {
      id: 1,
      owner_id: 1,
      recipe_type_id: 1,
      cuisine_id: 1,
      title: "Tasty",
      recipe_image: "nobsc-tasty"
    }
  ];

  it('returns the correct action type', () => {
    expect(dataGetRecipes(recipes).type).toEqual(DATA_GET_RECIPES);
  });

  it('returns the correct recipes', () => {
    expect(dataGetRecipes(recipes).recipes).toEqual(recipes);
  });
});

describe('dataGetRecipesSucceeded action creator', () => {
  it('returns the correct action type', () => {
    expect(dataGetRecipesSucceeded().type).toEqual(DATA_GET_RECIPES_SUCCEEDED);
  });
});

describe('dataGetRecipesFailed action creator', () => {
  it('returns the correct action type', () => {
    expect(dataGetRecipesFailed().type).toEqual(DATA_GET_RECIPES_FAILED);
  });
});

describe('dataGetRecipeTypes action creator', () => {
  const recipeTypes = [
    {"id": 1, "name": "Drink"},
    {"id": 2, "name": "Appetizer"}
  ];

  it('returns the correct action type', () => {
    expect(dataGetRecipeTypes(recipeTypes).type).toEqual(DATA_GET_RECIPE_TYPES);
  });

  it('returns the correct recipeTypes', () => {
    expect(dataGetRecipeTypes(recipeTypes).recipeTypes).toEqual(recipeTypes);
  });
});

describe('dataGetRecipeTypesSucceeded action creator', () => {
  it('returns the correct action type', () => {
    expect(dataGetRecipeTypesSucceeded().type)
      .toEqual(DATA_GET_RECIPE_TYPES_SUCCEEDED);
  });
});

describe('dataGetRecipeTypesFailed action creator', () => {
  it('returns the correct action type', () => {
    expect(dataGetRecipeTypesFailed().type)
      .toEqual(DATA_GET_RECIPE_TYPES_FAILED);
  });
});



//describe('dataGetInitialUserData action creator', () => {});

describe('dataGetMyContent action creator', () => {
  const myContent =
    [{id: 1, title: "Title", author: "Person", image: "image"}];

  it('returns the correct action type', () => {
    expect(dataGetMyContent(myContent).type).toEqual(DATA_GET_MY_CONTENT);
  });

  it('returns the correct equipment', () => {
    expect(dataGetMyContent(myContent).myContent).toEqual(myContent);
  });
});

describe('dataGetMyContentSucceeded action creator', () => {
  it('returns the correct action type', () => {
    expect(dataGetMyContentSucceeded().type)
      .toEqual(DATA_GET_MY_CONTENT_SUCCEEDED);
  });
});

describe('dataGetMyContentFailed action creator', () => {
  it('returns the correct action type', () => {
    expect(dataGetMyContentFailed().type).toEqual(DATA_GET_MY_CONTENT_FAILED);
  });
});

describe('dataGetMyFavoriteRecipes action creator', () => {
  const myFavoriteRecipes = [
    {
      id: 1,
      owner_id: 1,
      recipe_type_id: 1,
      cuisine_id: 1,
      title: "Tasty",
      recipe_image: "nobsc-tasty"
    }
  ];

  it('returns the correct action type', () => {
    expect(dataGetMyFavoriteRecipes(myFavoriteRecipes).type)
      .toEqual(DATA_GET_MY_FAVORITE_RECIPES);
  });

  it('returns the correct myFavoriteRecipes', () => {
    expect(dataGetMyFavoriteRecipes(myFavoriteRecipes).myFavoriteRecipes)
      .toEqual(myFavoriteRecipes);
  });
});

describe('dataGetMyFavoriteRecipesSucceeded action creator', () => {
  it('returns the correct action type', () => {
    expect(dataGetMyFavoriteRecipesSucceeded().type)
      .toEqual(DATA_GET_MY_FAVORITE_RECIPES_SUCCEEDED);
  });
});

describe('dataGetMyFavoriteRecipesFailed action creator', () => {
  it('returns the correct action type', () => {
    expect(dataGetMyFavoriteRecipesFailed().type)
      .toEqual(DATA_GET_MY_FAVORITE_RECIPES_FAILED);
  });
});

describe('dataGetMyFriendships action creator', () => {
  const myFriendships = [
    {
      user_id: 1749,
      username: "SnowboarderMike",
      avatar: "SnowboarderMike",
      status: "accepted"
    }
  ];

  it('returns the correct action type', () => {
    expect(dataGetMyFriendships(myFriendships).type)
      .toEqual(DATA_GET_MY_FRIENDSHIPS);
  });

  it('returns the correct ', () => {
    expect(dataGetMyFriendships(myFriendships).myFriendships)
      .toEqual(myFriendships);
  });
});

describe('dataGetMyFriendshipsSucceeded action creator', () => {
  it('returns the correct action type', () => {
    expect(dataGetMyFriendshipsSucceeded().type)
      .toEqual(DATA_GET_MY_FRIENDSHIPS_SUCCEEDED);
  });
});

describe('dataGetMyFriendshipsFailed action creator', () => {
  it('returns the correct action type', () => {
    expect(dataGetMyFriendshipsFailed().type)
      .toEqual(DATA_GET_MY_FRIENDSHIPS_FAILED);
  });
});

describe('dataGetMyPlans action creator', () => {
  const myPlans = [
    {
      id: 98234,
      name: "Plan A",
      data: {
        1: [],  2: [],  3: [],  4: [],  5: [],  6: [],  7: [],
        8: [],  9: [], 10: [], 11: [], 12: [], 13: [], 14: [],
       15: [], 16: [], 17: [], 18: [], 19: [], 20: [], 21: [],
       22: [], 23: [], 24: [], 25: [], 26: [], 27: [], 28: []
      }
    }
  ];

  it('returns the correct action type', () => {
    expect(dataGetMyPlans(myPlans).type).toEqual(DATA_GET_MY_PLANS);
  });

  it('returns the correct ', () => {
    expect(dataGetMyPlans(myPlans).myPlans).toEqual(myPlans);
  });
});

describe('dataGetMyPlansSucceeded action creator', () => {
  it('returns the correct action type', () => {
    expect(dataGetMyPlansSucceeded().type).toEqual(DATA_GET_MY_PLANS_SUCCEEDED);
  });
});

describe('dataGetMyPlansFailed action creator', () => {
  it('returns the correct action type', () => {
    expect(dataGetMyPlansFailed().type).toEqual(DATA_GET_MY_PLANS_FAILED);
  });
});

describe('dataGetMyPrivateEquipments action creator', () => {
  const myPrivateEquipment = [
    {
      id: 1,
      equipment_type_id: 3,
      owner_id: 3908,
      name: "My Teapot",
      equipment_type_name: "Dining",
      description: "From grandmother.",
      image: "my-teapot"
    }
  ];

  it('returns the correct action type', () => {
    expect(dataGetMyPrivateEquipments(myPrivateEquipment).type)
      .toEqual(DATA_GET_MY_PRIVATE_EQUIPMENTS);
  });

  it('returns the correct myPrivateEquipment', () => {
    expect(
      dataGetMyPrivateEquipments(myPrivateEquipment).myPrivateEquipment
    ).toEqual(myPrivateEquipment);
  });
});

describe('dataGetMyPrivateEquipmentsSucceeded action creator', () => {
  it('returns the correct action type', () => {
    expect(dataGetMyPrivateEquipmentsSucceeded().type)
      .toEqual(DATA_GET_MY_PRIVATE_EQUIPMENTS_SUCCEEDED);
  });
});

describe('dataGetMyPrivateEquipmentsFailed action creator', () => {
  it('returns the correct action type', () => {
    expect(dataGetMyPrivateEquipmentsFailed().type)
      .toEqual(DATA_GET_MY_PRIVATE_EQUIPMENTS_FAILED);
  });
});

describe('dataGetMyPrivateIngredients action creator', () => {
  const myPrivateIngredients = [
    {
      id: 8927,
      ingredient_type_id: 18,
      owner_id: 1,
      ingredient_type_name: "Product",
      brand: "Uncle Bob",
      variety: "DOUBLE HOT",
      name: "HOT Sauce",
      description: "From Uncle Bob.",
      image: "hot-sauce"
    }
  ];

  it('returns the correct action type', () => {
    expect(dataGetMyPrivateIngredients(myPrivateIngredients).type)
      .toEqual(DATA_GET_MY_PRIVATE_INGREDIENTS);
  });

  it('returns the correct myPrivateIngredients', () => {
    expect(
      dataGetMyPrivateIngredients(myPrivateIngredients).myPrivateIngredients
    ).toEqual(myPrivateIngredients);
  });
});

describe('dataGetMyPrivateIngredientsSucceeded action creator', () => {
  it('returns the correct action type', () => {
    expect(dataGetMyPrivateIngredientsSucceeded().type)
      .toEqual(DATA_GET_MY_PRIVATE_INGREDIENTS_SUCCEEDED);
  });
});

describe('dataGetMyPrivateIngredientsFailed action creator', () => {
  it('returns the correct action type', () => {
    expect(dataGetMyPrivateIngredientsFailed().type)
      .toEqual(DATA_GET_MY_PRIVATE_INGREDIENTS_FAILED);
  });
});

describe('dataGetMyPrivateRecipes action creator', () => {
  const myPrivateRecipes = [
    {
      id: 841,
      owner_id: 3908,
      recipe_type_id: 1,
      cuisine_id: 1,
      title: "Tasty",
      recipe_image: "nobsc-tasty"
    }
  ];

  it('returns the correct action type', () => {
    expect(dataGetMyPrivateRecipes(myPrivateRecipes).type)
      .toEqual(DATA_GET_MY_PRIVATE_RECIPES);
  });

  it('returns the correct myPrivateRecipes', () => {
    expect(dataGetMyPrivateRecipes(myPrivateRecipes).myPrivateRecipes)
      .toEqual(myPrivateRecipes);
  });
});

describe('dataGetMyPrivateRecipesSucceeded action creator', () => {
  it('returns the correct action type', () => {
    expect(dataGetMyPrivateRecipesSucceeded().type)
      .toEqual(DATA_GET_MY_PRIVATE_RECIPES_SUCCEEDED);
  });
});

describe('dataGetMyPrivateRecipesFailed action creator', () => {
  it('returns the correct action type', () => {
    expect(dataGetMyPrivateRecipesFailed().type)
      .toEqual(DATA_GET_MY_PRIVATE_RECIPES_FAILED);
  });
});

describe('dataGetMyPublicRecipes action creator', () => {
  const myPublicRecipes = [
    {
      id: 841,
      owner_id: 3908,
      recipe_type_id: 1,
      cuisine_id: 1,
      title: "Tasty",
      recipe_image: "nobsc-tasty"
    }
  ];

  it('returns the correct action type', () => {
    expect(dataGetMyPublicRecipes(myPublicRecipes).type)
      .toEqual(DATA_GET_MY_PUBLIC_RECIPES);
  });

  it('returns the correct myPublicRecipes', () => {
    expect(dataGetMyPublicRecipes(myPublicRecipes).myPublicRecipes)
      .toEqual(myPublicRecipes);
  });
});

describe('dataGetMyPublicRecipesSucceeded action creator', () => {
  it('returns the correct action type', () => {
    expect(dataGetMyPublicRecipesSucceeded().type)
      .toEqual(DATA_GET_MY_PUBLIC_RECIPES_SUCCEEDED);
  });
});

describe('dataGetMyPublicRecipesFailed action creator', () => {
  it('returns the correct action type', () => {
    expect(dataGetMyPublicRecipesFailed().type)
      .toEqual(DATA_GET_MY_PUBLIC_RECIPES_FAILED);
  });
});

describe('dataGetMySavedRecipes action creator', () => {
  const mySavedRecipes = [
    {
      id: 1,
      owner_id: 1,
      recipe_type_id: 1,
      cuisine_id: 1,
      title: "Tasty",
      recipe_image: "nobsc-tasty"
    }
  ];

  it('returns the correct action type', () => {
    expect(dataGetMySavedRecipes(mySavedRecipes).type)
      .toEqual(DATA_GET_MY_SAVED_RECIPES);
  });

  it('returns the correct mySavedRecipes', () => {
    expect(dataGetMySavedRecipes(mySavedRecipes).mySavedRecipes)
      .toEqual(mySavedRecipes);
  });
});

describe('dataGetMySavedRecipesSucceeded action creator', () => {
  it('returns the correct action type', () => {
    expect(dataGetMySavedRecipesSucceeded().type)
      .toEqual(DATA_GET_MY_SAVED_RECIPES_SUCCEEDED);
  });
});

describe('dataGetMySavedRecipesFailed action creator', () => {
  it('returns the correct action type', () => {
    expect(dataGetMySavedRecipesFailed().type)
      .toEqual(DATA_GET_MY_SAVED_RECIPES_FAILED);
  });
});