import { dataReducer } from './reducer';
import {
  DATA_GET_INITIAL_DATA,
  DATA_GET_CONTENT,  // official
  DATA_GET_CONTENT_TYPES,
  DATA_GET_CUISINES,
  DATA_GET_EQUIPMENTS,  // official
  DATA_GET_EQUIPMENT_TYPES,
  DATA_GET_INGREDIENTS,  // official
  DATA_GET_INGREDIENT_TYPES,
  DATA_GET_MEASUREMENTS,
  DATA_GET_METHODS,
  DATA_GET_RECIPES,  // official
  DATA_GET_RECIPE_TYPES,

  DATA_GET_INITIAL_USER_DATA,
  DATA_GET_MY_CONTENT,
  DATA_GET_MY_FAVORITE_RECIPES,
  DATA_GET_MY_FRIENDSHIPS,
  DATA_GET_MY_PLANS,
  DATA_GET_MY_PRIVATE_EQUIPMENTS,
  DATA_GET_MY_PRIVATE_INGREDIENTS,
  DATA_GET_MY_PRIVATE_RECIPES,
  DATA_GET_MY_PUBLIC_RECIPES,
  DATA_GET_MY_SAVED_RECIPES,

  IDataState
} from './types';

const initialState: IDataState = {
  officialContent: [],
  contentTypes: [],
  cuisines: [],
  officialEquipment: [],
  equipmentTypes: [],
  officialIngredients: [],
  ingredientTypes: [],
  measurements: [],
  methods: [],
  officialRecipes: [],
  recipeTypes: [],

  myContent: [],
  myFavoriteRecipes: [],
  myFriendships: [],
  myPlans: [],
  myPrivateEquipment: [],
  myPrivateIngredients: [],
  myPrivateRecipes: [],
  myPublicRecipes: [],
  mySavedRecipes: []
};

describe('data reducer', () => {
  it('returns initial state', () => {
    const actual = dataReducer(undefined, {
      type: DATA_GET_MEASUREMENTS,
      measurements: []
    });
    const expected = initialState;
    expect(actual).toEqual(expected);
  });

  it('handles actions of type DATA_GET_INITIAL_DATA', () => {
    const initialData = {
      officialContent: [],
      contentTypes: [
        {
          content_type_id: 1,
          parent_id: 0,
          content_type_name: "Page",
          content_type_path: "/page"
        }
      ],
      cuisines: [
        {"cuisine_id": 1, "cuisine_name": "Russian", "cuisine_nation": "Russia"}
      ],
      officialEquipment: [
        {
          equipment_id: 1,
          equipment_type_id: 4,
          owner_id: 1,
          equipment_name: "Chopstick",
          equipment_type_name: "Dining",
          equipment_description: "It works.",
          equipment_image: "nobsc-chopstick"
        }
      ],
      equipmentTypes: [
        {"equipment_type_id": 1, "equipment_type_name": "Cleaning"}
      ],
      officialIngredients: [
        {
          ingredient_id: 1,
          ingredient_type_id: 1,
          owner_id: 1,
          ingredient_type_name: "Fish",
          ingredient_brand: null,
          ingredient_variety: "Chilean",
          ingredient_name: "Salmon",
          ingredient_description: "Tasty.",
          ingredient_image: "nobsc-salmon"
        }
      ],
      ingredientTypes: [
        {"ingredient_type_id": 1, "ingredient_type_name": "Fish"}
      ],
      measurements: [
        {"measurement_id": 1, "measurement_name": "teaspoon"}
      ],
      methods: [
        {"method_id": 1, "method_name": "No-Cook"}
      ],
      officialRecipes: [
        {
          recipe_id: 1,
          owner_id: 1,
          recipe_type_id: 1,
          cuisine_id: 1,
          title: "Tasty",
          recipe_image: "nobsc-tasty"
        }
      ],
      recipeTypes: [
        {"recipe_type_id": 1, "recipe_type_name": "Drink"}
      ]
    };
    const actual = dataReducer(initialState, {
      type: DATA_GET_INITIAL_DATA,
      initialData
    });
    expect(actual.officialContent).toEqual(initialData.officialContent);
    expect(actual.contentTypes).toEqual(initialData.contentTypes);
    expect(actual.cuisines).toEqual(initialData.cuisines);
    expect(actual.officialEquipment).toEqual(initialData.officialEquipment);
    expect(actual.equipmentTypes).toEqual(initialData.equipmentTypes);
    expect(actual.officialIngredients).toEqual(initialData.officialIngredients);
    expect(actual.ingredientTypes).toEqual(initialData.ingredientTypes);
    expect(actual.measurements).toEqual(initialData.measurements);
    expect(actual.methods).toEqual(initialData.methods);
    expect(actual.officialRecipes).toEqual(initialData.officialRecipes);
    expect(actual.recipeTypes).toEqual(initialData.recipeTypes);
  });

  it('handles actions of type DATA_GET_CONTENT', () => {
    const officialContent = [{content_id: 1, title: "Title"}];
    const actual = dataReducer(initialState, {
      type: DATA_GET_CONTENT,
      officialContent
    }).officialContent;
    const expected = officialContent;
    expect(actual).toEqual(expected);
  });

  it('handles actions of type DATA_GET_CONTENT_TYPES', () => {
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
    const actual = dataReducer(initialState, {
      type: DATA_GET_CONTENT_TYPES,
      contentTypes
    }).contentTypes;
    const expected = contentTypes;
    expect(actual).toEqual(expected);
  });

  it('handles actions of type DATA_GET_CUISINES', () => {
    const cuisines = [
      {"cuisine_id": 1, "cuisine_name": "Russian", "cuisine_nation": "Russia"},
      {"cuisine_id": 2, "cuisine_name": "German", "cuisine_nation": "Germany"}
    ];
    const actual = dataReducer(initialState, {
      type: DATA_GET_CUISINES,
      cuisines
    }).cuisines;
    const expected = cuisines;
    expect(actual).toEqual(expected);
  });

  it('handles actions of type DATA_GET_EQUIPMENTS', () => {
    const officialEquipment = [
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
    const actual = dataReducer(initialState, {
      type: DATA_GET_EQUIPMENTS,
      officialEquipment
    }).officialEquipment;
    const expected = officialEquipment;
    expect(actual).toEqual(expected);
  });

  it('handles actions of type DATA_GET_EQUIPMENT_TYPES', () => {
    const equipmentTypes = [
      {"equipment_type_id": 1, "equipment_type_name": "Cleaning"},
      {"equipment_type_id": 2, "equipment_type_name": "Preparing"}
    ];
    const actual = dataReducer(initialState, {
      type: DATA_GET_EQUIPMENT_TYPES,
      equipmentTypes
    }).equipmentTypes;
    const expected = equipmentTypes;
    expect(actual).toEqual(expected);
  });

  it('handles actions of type DATA_GET_INGREDIENTS', () => {
    const officialIngredients = [
      {
        ingredient_id: 1,
        ingredient_type_id: 1,
        owner_id: 1,
        ingredient_type_name: "Fish",
        ingredient_brand: null,
        ingredient_variety: "Chilean",
        ingredient_name: "Salmon",
        ingredient_description: "Tasty.",
        ingredient_image: "nobsc-salmon"
      }
    ];
    const actual = dataReducer(initialState, {
      type: DATA_GET_INGREDIENTS,
      officialIngredients
    }).officialIngredients;
    const expected = officialIngredients;
    expect(actual).toEqual(expected);
  });

  it('handles actions of type DATA_GET_INGREDIENT_TYPES', () => {
    const ingredientTypes = [
      {"ingredient_type_id": 1, "ingredient_type_name": "Fish"},
      {"ingredient_type_id": 2, "ingredient_type_name": "Shellfish"}
    ];
    const actual = dataReducer(initialState, {
      type: DATA_GET_INGREDIENT_TYPES,
      ingredientTypes: [
        {"ingredient_type_id": 1, "ingredient_type_name": "Fish"},
        {"ingredient_type_id": 2, "ingredient_type_name": "Shellfish"}
      ]
    }).ingredientTypes;
    const expected = ingredientTypes;
    expect(actual).toEqual(expected);
  });

  it('handles actions of type DATA_GET_MEASUREMENTS', () => {
    const measurements = [
      {"measurement_id": 1, "measurement_name": "teaspoon"},
      {"measurement_id": 2, "measurement_name": "Tablespoon"}
    ];
    const actual = dataReducer(initialState, {
      type: DATA_GET_MEASUREMENTS,
      measurements
    }).measurements;
    const expected = measurements;
    expect(actual).toEqual(expected);
  });

  it('handles actions of type DATA_GET_METHODS', () => {
    const methods = [
      {"method_id": 1, "method_name": "No-Cook"},
      {"method_id": 2, "method_name": "Chill"}
    ];
    const actual = dataReducer(initialState, {
      type: DATA_GET_METHODS,
      methods
    }).methods;
    const expected = methods;
    expect(actual).toEqual(expected);
  });

  it('handles actions of type DATA_GET_RECIPES', () => {
    const officialRecipes = [
      {
        recipe_id: 1,
        owner_id: 1,
        recipe_type_id: 1,
        cuisine_id: 1,
        title: "Tasty",
        recipe_image: "nobsc-tasty"
      }
    ];
    const actual = dataReducer(initialState, {
      type: DATA_GET_RECIPES,
      officialRecipes
    }).officialRecipes;
    const expected = officialRecipes;
    expect(actual).toEqual(expected);
  });

  it('handles actions of type DATA_GET_RECIPE_TYPES', () => {
    const recipeTypes = [
      {"recipe_type_id": 1, "recipe_type_name": "Drink"},
      {"recipe_type_id": 2, "recipe_type_name": "Appetizer"}
    ];
    const actual = dataReducer(initialState, {
      type: DATA_GET_RECIPE_TYPES,
      recipeTypes
    }).recipeTypes;
    const expected = recipeTypes;
    expect(actual).toEqual(expected);
  });



  it('handles actions of type DATA_GET_INITIAL_USER_DATA', () => {
    const initialUserData = {
      myContent: [],
      myFavoriteRecipes: [],
      myFriendships: [],
      myPlans: [],
      myPrivateEquipment: [
        {
          equipment_id: 1988,
          equipment_type_id: 4,
          owner_id: 150,
          equipment_name: "My Chopstick",
          equipment_type_name: "Dining",
          equipment_description: "It works.",
          equipment_image: "my-chopstick"
        }
      ],
      myPrivateIngredients: [
        {
          ingredient_id: 1,
          ingredient_type_id: 1,
          owner_id: 1,
          ingredient_type_name: "Fish",
          ingredient_brand: null,
          ingredient_variety: "Chilean",
          ingredient_name: "Salmon",
          ingredient_description: "Tasty.",
          ingredient_image: "nobsc-salmon"
        }
      ],
      myPrivateRecipes: [
        {
          recipe_id: 1,
          owner_id: 150,
          recipe_type_id: 1,
          cuisine_id: 1,
          title: "My Tasty",
          recipe_image: "my-tasty"
        }
      ],
      myPublicRecipes: [],
      mySavedRecipes: []
    };
    const actual = dataReducer(initialState, {
      type: DATA_GET_INITIAL_USER_DATA,
      initialUserData
    });
    expect(actual.myContent).toEqual(initialUserData.myContent);
    expect(actual.myFavoriteRecipes).toEqual(initialUserData.myFavoriteRecipes);
    expect(actual.myFriendships).toEqual(initialUserData.myFriendships);
    expect(actual.myPlans).toEqual(initialUserData.myPlans);
    expect(actual.myPrivateEquipment)
    .toEqual(initialUserData.myPrivateEquipment);
    expect(actual.myPrivateIngredients)
    .toEqual(initialUserData.myPrivateIngredients);
    expect(actual.myPrivateRecipes).toEqual(initialUserData.myPrivateRecipes);
    expect(actual.myPublicRecipes).toEqual(initialUserData.myPublicRecipes);
    expect(actual.mySavedRecipes).toEqual(initialUserData.mySavedRecipes);
  });

  it('handles actions of type DATA_GET_MY_CONTENT', () => {
    const myContent = [{content_id: 1, title: "Title"}];
    const actual = dataReducer(initialState, {
      type: DATA_GET_MY_CONTENT,
      myContent
    }).myContent;
    const expected = myContent;
    expect(actual).toEqual(expected);
  });

  it('handles actions of type DATA_GET_MY_FAVORITE_RECIPES', () => {
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
    const actual = dataReducer(initialState, {
      type: DATA_GET_MY_FAVORITE_RECIPES,
      myFavoriteRecipes
    }).myFavoriteRecipes;
    const expected = myFavoriteRecipes;
    expect(actual).toEqual(expected);
  });

  it('handles actions of type DATA_GET_MY_FRIENDSHIPS', () => {
    const myFriendships = [
      {
        user_id: 1749,
        username: "SnowboarderMike",
        avatar: "SnowboarderMike",
        status: "accepted"
      }
    ];
    const actual = dataReducer(initialState, {
      type: DATA_GET_MY_FRIENDSHIPS,
      myFriendships
    }).myFriendships;
    const expected = myFriendships;
    expect(actual).toEqual(expected);
  });

  it('handles actions of type DATA_GET_MY_PLANS', () => {
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
    const actual = dataReducer(initialState, {
      type: DATA_GET_MY_PLANS,
      myPlans
    }).myPlans;
    const expected = myPlans;
    expect(actual).toEqual(expected);
  });

  it('handles actions of type DATA_GET_MY_PRIVATE_EQUIPMENTS', () => {
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
    const actual = dataReducer(initialState, {
      type: DATA_GET_MY_PRIVATE_EQUIPMENTS,
      myPrivateEquipment
    }).myPrivateEquipment;
    const expected = myPrivateEquipment;
    expect(actual).toEqual(expected);
  });

  it('handles actions of type DATA_GET_MY_PRIVATE_INGREDIENTS', () => {
    const myPrivateIngredients = [
      {
        ingredient_id: 8927,
        ingredient_type_id: 18,
        owner_id: 1,
        ingredient_type_name: "Product",
        ingredient_brand: "Uncle Bob",
        ingredient_variety: "DOUBLE HOT",
        ingredient_name: "HOT Sauce",
        ingredient_description: "From Uncle Bob.",
        ingredient_image: "hot-sauce"
      }
    ];
    const actual = dataReducer(initialState, {
      type: DATA_GET_MY_PRIVATE_INGREDIENTS,
      myPrivateIngredients
    }).myPrivateIngredients;
    const expected = myPrivateIngredients;
    expect(actual).toEqual(expected);
  });

  it('handles actions of type DATA_GET_MY_PRIVATE_RECIPES', () => {
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
    const actual = dataReducer(initialState, {
      type: DATA_GET_MY_PRIVATE_RECIPES,
      myPrivateRecipes
    }).myPrivateRecipes;
    const expected = myPrivateRecipes;
    expect(actual).toEqual(expected);
  });

  it('handles actions of type DATA_GET_MY_PUBLIC_RECIPES', () => {
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
    const actual = dataReducer(initialState, {
      type: DATA_GET_MY_PUBLIC_RECIPES,
      myPublicRecipes
    }).myPublicRecipes;
    const expected = myPublicRecipes;
    expect(actual).toEqual(expected);
  });

  it('handles actions of type DATA_GET_MY_SAVED_RECIPES', () => {
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
    const actual = dataReducer(initialState, {
      type: DATA_GET_MY_SAVED_RECIPES,
      mySavedRecipes
    }).mySavedRecipes;
    const expected = mySavedRecipes;
    expect(actual).toEqual(expected);
  });
});