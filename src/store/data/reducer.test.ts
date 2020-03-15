import {
  DATA_GET_MEASUREMENTS,
  DATA_GET_EQUIPMENTS,  // official
  DATA_GET_EQUIPMENT_TYPES,
  DATA_GET_INGREDIENTS,  // official
  DATA_GET_INGREDIENT_TYPES,
  DATA_GET_RECIPES,  // official
  DATA_GET_RECIPE_TYPES,
  DATA_GET_CUISINES,
  DATA_GET_METHODS,

  DATA_GET_MY_PUBLIC_RECIPES,
  
  DATA_GET_MY_PRIVATE_EQUIPMENTS,
  DATA_GET_MY_PRIVATE_INGREDIENTS,
  DATA_GET_MY_PRIVATE_RECIPES,

  DATA_GET_MY_FAVORITE_RECIPES,
  DATA_GET_MY_SAVED_RECIPES,

  DATA_GET_MY_PLANS,

  DATA_GET_MY_FRIENDSHIPS
} from './types';

import dataReducer from './reducer';

const initialState = {
  measurements: [],
  equipment: [],  // official
  equipmentTypes: [],
  ingredients: [],  // official
  ingredientTypes: [],
  recipes: [],  // official
  recipeTypes: [],
  cuisines: [],
  methods: [],

  myPublicRecipes: [],

  myPrivateEquipment: [],
  myPrivateIngredients: [],
  myPrivateRecipes: [],

  myFavoriteRecipes: [],
  mySavedRecipes: [],

  myPlans: [],

  myFriendships: []
};

describe('the data reducer', () => {
  it('returns initial state', () => {
    const actual = dataReducer(undefined, {});
    const expected = initialState;
    expect(actual).toEqual(expected);
  });

  it('handles actions of type DATA_GET_MEASUREMENTS', () => {
    const act = dataReducer(initialState, {
      type: DATA_GET_MEASUREMENTS,
      measurements: [
        {"measurement_id": 1, "measurement_name": "teaspoon"},
        {"measurement_id": 2, "measurement_name": "Tablespoon"}
      ]
    });
    const actual = act.measurements;
    const expected = [
      {"measurement_id": 1, "measurement_name": "teaspoon"},
      {"measurement_id": 2, "measurement_name": "Tablespoon"}
    ];
    expect(actual).toEqual(expected);
  });

  it('handles actions of type DATA_GET_EQUIPMENTS', () => {
    const act = dataReducer(initialState, {
      type: DATA_GET_EQUIPMENTS,
      equipment: [
        {"equipment_id": 1, "equipment_name": "Chopstick"},
        {"equipment_id": 2, "equipment_name": "Fork"}
      ]
    });
    const actual = act.equipment;
    const expected = [
      {"equipment_id": 1, "equipment_name": "Chopstick"},
      {"equipment_id": 2, "equipment_name": "Fork"}
    ];
    expect(actual).toEqual(expected);
  });

  it('handles actions of type DATA_GET_EQUIPMENT_TYPES', () => {
    const act = dataReducer(initialState, {
      type: DATA_GET_EQUIPMENT_TYPES,
      equipmentTypes: [
        {"equipment_type_id": 1, "equipment_type_name": "Cleaning"},
        {"equipment_type_id": 2, "equipment_type_name": "Preparing"}
      ]
    });
    const actual = act.equipmentTypes;
    const expected = [
      {"equipment_type_id": 1, "equipment_type_name": "Cleaning"},
      {"equipment_type_id": 2, "equipment_type_name": "Preparing"}
    ];
    expect(actual).toEqual(expected);
  });

  it('handles actions of type DATA_GET_INGREDIENTS', () => {
    const act = dataReducer(initialState, {
      type: DATA_GET_INGREDIENTS,
      ingredients: [
        {"ingredient_id": 1, "ingredient_name": "Salmon"},
        {"ingredient_id": 2, "ingredient_name": "Tuna"}
      ]
    });
    const actual = act.ingredients;
    const expected = [
      {"ingredient_id": 1, "ingredient_name": "Salmon"},
      {"ingredient_id": 2, "ingredient_name": "Tuna"}
    ];
    expect(actual).toEqual(expected);
  });

  it('handles actions of type DATA_GET_INGREDIENT_TYPES', () => {
    const act = dataReducer(initialState, {
      type: DATA_GET_INGREDIENT_TYPES,
      ingredientTypes: [
        {"ingredient_type_id": 1, "ingredient_type_name": "Fish"},
        {"ingredient_type_id": 2, "ingredient_type_name": "Shellfish"}
      ]
    });
    const actual = act.ingredientTypes;
    const expected = [
      {"ingredient_type_id": 1, "ingredient_type_name": "Fish"},
      {"ingredient_type_id": 2, "ingredient_type_name": "Shellfish"}
    ];
    expect(actual).toEqual(expected);
  });

  it('handles actions of type DATA_GET_RECIPES', () => {
    const act = dataReducer(initialState, {
      type: DATA_GET_RECIPES,
      recipes: [
        {"recipe_id": 1, "title": "Tasty"},
        {"recipe_id": 2, "title": "Yummy"}
      ]
    });
    const actual = act.recipes;
    const expected = [
      {"recipe_id": 1, "title": "Tasty"},
      {"recipe_id": 2, "title": "Yummy"}
    ];
    expect(actual).toEqual(expected);
  });

  it('handles actions of type DATA_GET_RECIPE_TYPES', () => {
    const act = dataReducer(initialState, {
      type: DATA_GET_RECIPE_TYPES,
      recipeTypes: [
        {"recipe_type_id": 1, "recipe_type_name": "Drink"},
        {"recipe_type_id": 2, "recipe_type_name": "Appetizer"}
      ]
    });
    const actual = act.recipeTypes;
    const expected = [
      {"recipe_type_id": 1, "recipe_type_name": "Drink"},
      {"recipe_type_id": 2, "recipe_type_name": "Appetizer"}
    ];
    expect(actual).toEqual(expected);
  });

  it('handles actions of type DATA_GET_CUISINES', () => {
    const act = dataReducer(initialState, {
      type: DATA_GET_CUISINES,
      cuisines: [
        {"cuisine_id": 1, "cuisine_name": "Russian"},
        {"cuisine_id": 2, "cuisine_name": "German"}
      ]
    });
    const actual = act.cuisines;
    const expected = [
      {"cuisine_id": 1, "cuisine_name": "Russian"},
      {"cuisine_id": 2, "cuisine_name": "German"}
    ];
    expect(actual).toEqual(expected);
  });

  it('handles actions of type DATA_GET_METHODS', () => {
    const act = dataReducer(initialState, {
      type: DATA_GET_METHODS,
      methods: [
        {"method_id": 1, "method_name": "No-Cook"},
        {"method_id": 2, "method_name": "Chill"}
      ]
    });
    const actual = act.methods;
    const expected = [
      {"method_id": 1, "method_name": "No-Cook"},
      {"method_id": 2, "method_name": "Chill"}
    ];
    expect(actual).toEqual(expected);
  });



  it('handles actions of type DATA_GET_MY_PUBLIC_RECIPES', () => {
    const act = dataReducer(initialState, {
      type: DATA_GET_MY_PUBLIC_RECIPES,
      myPublicRecipes: [{recipeId: 841, title: "Tasty"}]
    });
    const actual = act.myPublicRecipes;
    const expected = [{recipeId: 841, title: "Tasty"}];
    expect(actual).toEqual(expected);
  });



  it('handles actions of type DATA_GET_MY_PRIVATE_EQUIPMENTS', () => {
    const act = dataReducer(initialState, {
      type: DATA_GET_MY_PRIVATE_EQUIPMENTS,
      myPrivateEquipment: [{equipment_id: 9829, equipment_name: "My Teapot"}]
    });
    const actual = act.myPrivateEquipment;
    const expected = [{equipment_id: 9829, equipment_name: "My Teapot"}];
    expect(actual).toEqual(expected);
  });

  it('handles actions of type DATA_GET_MY_PRIVATE_INGREDIENTS', () => {
    const act = dataReducer(initialState, {
      type: DATA_GET_MY_PRIVATE_INGREDIENTS,
      myPrivateIngredients: [{ingredient_id: 8927, ingredient_name: "My Basil"}]
    });
    const actual = act.myPrivateIngredients;
    const expected = [{ingredient_id: 8927, ingredient_name: "My Basil"}];
    expect(actual).toEqual(expected);
  });

  it('handles actions of type DATA_GET_MY_PRIVATE_RECIPES', () => {
    const act = dataReducer(initialState, {
      type: DATA_GET_MY_PRIVATE_RECIPES,
      myPrivateRecipes: [{recipeId: 841, title: "Tasty"}]
    });
    const actual = act.myPrivateRecipes;
    const expected = [{recipeId: 841, title: "Tasty"}];
    expect(actual).toEqual(expected);
  });



  it('handles actions of type DATA_GET_MY_FAVORITE_RECIPES', () => {
    const act = dataReducer(initialState, {
      type: DATA_GET_MY_FAVORITE_RECIPES,
      myFavoriteRecipes: [{recipeId: 841, title: "Tasty"}]
    });
    const actual = act.myFavoriteRecipes;
    const expected = [{recipeId: 841, title: "Tasty"}];
    expect(actual).toEqual(expected);
  });

  it('handles actions of type DATA_GET_MY_SAVED_RECIPES', () => {
    const act = dataReducer(initialState, {
      type: DATA_GET_MY_SAVED_RECIPES,
      mySavedRecipes: [{recipeId: 841, title: "Tasty"}]
    });
    const actual = act.mySavedRecipes;
    const expected = [{recipeId: 841, title: "Tasty"}];
    expect(actual).toEqual(expected);
  });



  it('handles actions of type DATA_GET_MY_PLANS', () => {
    const act = dataReducer(initialState, {
      type: DATA_GET_MY_PLANS,
      myPlans: [{plan_id: 98234, plan_name: "Plan A"}]
    });
    const actual = act.myPlans;
    const expected = [{plan_id: 98234, plan_name: "Plan A"}];
    expect(actual).toEqual(expected);
  });



  it('handles actions of type DATA_GET_MY_FRIENDSHIPS', () => {
    const act = dataReducer(initialState, {
      type: DATA_GET_MY_FRIENDSHIPS,
      myFriendships: [{friend_id: 1749, friend_name: "SnowboarderMike"}]
    });
    const actual = act.myFriendships;
    const expected = [{friend_id: 1749, friend_name: "SnowboarderMike"}];
    expect(actual).toEqual(expected);
  });
});