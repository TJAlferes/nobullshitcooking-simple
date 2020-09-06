import { dataReducer } from '../../../src/store/data/reducer';
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
} from '../../../src/store/data/types';

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
  products: [],
  productCategories: [],
  productTypes: [],
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
    expect(
      dataReducer(undefined, {type: DATA_GET_MEASUREMENTS,measurements: []})
    ).toEqual(initialState);
  });

  it('handles actions of type DATA_GET_INITIAL_DATA', () => {
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
    expect(actual.products).toEqual(initialData.products);
    expect(actual.productCategories).toEqual(initialData.productCategories);
    expect(actual.productTypes).toEqual(initialData.productTypes);
    expect(actual.officialRecipes).toEqual(initialData.officialRecipes);
    expect(actual.recipeTypes).toEqual(initialData.recipeTypes);
  });

  it('handles actions of type DATA_GET_CONTENT', () => {
    const officialContent = [
      {id: 1, title: "Title", author: "Person", image: "image"}
    ];

    expect(dataReducer(initialState, {
      type: DATA_GET_CONTENT,
      officialContent
    }).officialContent).toEqual(officialContent);
  });

  it('handles actions of type DATA_GET_CONTENT_TYPES', () => {
    const contentTypes = [
      {id: 1, parent_id: 0, name: "Page", path: "/page"},
      {id: 2, parent_id: 0, name: "Post", path: "/post"}
    ];

    expect(dataReducer(initialState, {
      type: DATA_GET_CONTENT_TYPES,
      contentTypes
    }).contentTypes).toEqual(contentTypes);
  });

  it('handles actions of type DATA_GET_CUISINES', () => {
    const cuisines = [
      {"id": 1, "name": "Russian", "nation": "Russia"},
      {"id": 2, "name": "German", "nation": "Germany"}
    ];

    expect(dataReducer(initialState, {
      type: DATA_GET_CUISINES,
      cuisines
    }).cuisines).toEqual(cuisines);
  });

  it('handles actions of type DATA_GET_EQUIPMENTS', () => {
    const officialEquipment = [
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

    expect(dataReducer(initialState, {
      type: DATA_GET_EQUIPMENTS,
      officialEquipment
    }).officialEquipment).toEqual(officialEquipment);
  });

  it('handles actions of type DATA_GET_EQUIPMENT_TYPES', () => {
    const equipmentTypes = [
      {"id": 1, "name": "Cleaning"},
      {"id": 2, "name": "Preparing"}
    ];

    expect(dataReducer(initialState, {
      type: DATA_GET_EQUIPMENT_TYPES,
      equipmentTypes
    }).equipmentTypes).toEqual(equipmentTypes);
  });

  it('handles actions of type DATA_GET_INGREDIENTS', () => {
    const officialIngredients = [
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

    expect(dataReducer(initialState, {
      type: DATA_GET_INGREDIENTS,
      officialIngredients
    }).officialIngredients).toEqual(officialIngredients);
  });

  it('handles actions of type DATA_GET_INGREDIENT_TYPES', () => {
    const ingredientTypes = [
      {"id": 1, "name": "Fish"},
      {"id": 2, "name": "Shellfish"}
    ];

    expect(dataReducer(initialState, {
      type: DATA_GET_INGREDIENT_TYPES,
      ingredientTypes
    }).ingredientTypes).toEqual(ingredientTypes);
  });

  it('handles actions of type DATA_GET_MEASUREMENTS', () => {
    const measurements = [
      {"id": 1, "name": "teaspoon"},
      {"id": 2, "name": "Tablespoon"}
    ];

    expect(dataReducer(initialState, {
      type: DATA_GET_MEASUREMENTS,
      measurements
    }).measurements).toEqual(measurements);
  });

  it('handles actions of type DATA_GET_METHODS', () => {
    const methods = [
      {"id": 1, "name": "No-Cook"},
      {"id": 2, "name": "Chill"}
    ];

    expect(dataReducer(initialState, {
      type: DATA_GET_METHODS,
      methods
    }).methods).toEqual(methods);
  });

  it('handles actions of type DATA_GET_RECIPES', () => {
    const officialRecipes = [
      {
        id: 1,
        owner_id: 1,
        recipe_type_id: 1,
        cuisine_id: 1,
        title: "Tasty",
        recipe_image: "nobsc-tasty"
      }
    ];

    expect(dataReducer(initialState, {
      type: DATA_GET_RECIPES,
      officialRecipes
    }).officialRecipes).toEqual(officialRecipes);
  });

  it('handles actions of type DATA_GET_RECIPE_TYPES', () => {
    const recipeTypes = [
      {"id": 1, "name": "Drink"},
      {"id": 2, "name": "Appetizer"}
    ];
    
    expect(dataReducer(initialState, {
      type: DATA_GET_RECIPE_TYPES,
      recipeTypes
    }).recipeTypes).toEqual(recipeTypes);
  });



  it('handles actions of type DATA_GET_INITIAL_USER_DATA', () => {
    const initialUserData = {
      myContent: [],
      myFavoriteRecipes: [],
      myFriendships: [],
      myPlans: [],
      myPrivateEquipment: [
        {
          id: 1988,
          equipment_type_id: 4,
          owner_id: 150,
          name: "My Chopstick",
          equipment_type_name: "Dining",
          description: "It works.",
          image: "my-chopstick"
        }
      ],
      myPrivateIngredients: [
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
      myPrivateRecipes: [
        {
          id: 1,
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
    const myContent = [
      {id: 1, title: "Title", author: "Person", image: "image"}
    ];

    expect(dataReducer(initialState, {
      type: DATA_GET_MY_CONTENT,
      myContent
    }).myContent).toEqual(myContent);
  });

  it('handles actions of type DATA_GET_MY_FAVORITE_RECIPES', () => {
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

    expect(dataReducer(initialState, {
      type: DATA_GET_MY_FAVORITE_RECIPES,
      myFavoriteRecipes
    }).myFavoriteRecipes).toEqual(myFavoriteRecipes);
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

    expect(dataReducer(initialState, {
      type: DATA_GET_MY_FRIENDSHIPS,
      myFriendships
    }).myFriendships).toEqual(myFriendships);
  });

  it('handles actions of type DATA_GET_MY_PLANS', () => {
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

    expect(dataReducer(initialState, {
      type: DATA_GET_MY_PLANS,
      myPlans
    }).myPlans).toEqual(myPlans);
  });

  it('handles actions of type DATA_GET_MY_PRIVATE_EQUIPMENTS', () => {
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

    expect(dataReducer(initialState, {
      type: DATA_GET_MY_PRIVATE_EQUIPMENTS,
      myPrivateEquipment
    }).myPrivateEquipment).toEqual(myPrivateEquipment);
  });

  it('handles actions of type DATA_GET_MY_PRIVATE_INGREDIENTS', () => {
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

    expect(dataReducer(initialState, {
      type: DATA_GET_MY_PRIVATE_INGREDIENTS,
      myPrivateIngredients
    }).myPrivateIngredients).toEqual(myPrivateIngredients);
  });

  it('handles actions of type DATA_GET_MY_PRIVATE_RECIPES', () => {
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

    expect(dataReducer(initialState, {
      type: DATA_GET_MY_PRIVATE_RECIPES,
      myPrivateRecipes
    }).myPrivateRecipes).toEqual(myPrivateRecipes);
  });

  it('handles actions of type DATA_GET_MY_PUBLIC_RECIPES', () => {
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

    expect(dataReducer(initialState, {
      type: DATA_GET_MY_PUBLIC_RECIPES,
      myPublicRecipes
    }).myPublicRecipes).toEqual(myPublicRecipes);
  });

  it('handles actions of type DATA_GET_MY_SAVED_RECIPES', () => {
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

    expect(dataReducer(initialState, {
      type: DATA_GET_MY_SAVED_RECIPES,
      mySavedRecipes
    }).mySavedRecipes).toEqual(mySavedRecipes);
  });
});