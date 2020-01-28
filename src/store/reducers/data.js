import * as actionTypes from '../actions/actionTypes';

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

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.DATA_GET_MEASUREMENTS: return {...state, ...{measurements: action.measurements}};
    case actionTypes.DATA_GET_EQUIPMENTS: return {...state, ...{equipment: action.equipment}};
    case actionTypes.DATA_GET_EQUIPMENT_TYPES: return {...state, ...{equipmentTypes: action.equipmentTypes}};
    case actionTypes.DATA_GET_INGREDIENTS: return {...state, ...{ingredients: action.ingredients}};
    case actionTypes.DATA_GET_INGREDIENT_TYPES: return {...state, ...{ingredientTypes: action.ingredientTypes}};
    case actionTypes.DATA_GET_RECIPES: return {...state, ...{recipes: action.recipes}};
    case actionTypes.DATA_GET_RECIPE_TYPES: return {...state, ...{recipeTypes: action.recipeTypes}};
    case actionTypes.DATA_GET_CUISINES: return {...state, ...{cuisines: action.cuisines}};
    case actionTypes.DATA_GET_METHODS: return {...state, ...{methods: action.methods}};

    case actionTypes.DATA_GET_MY_PUBLIC_RECIPES: return {...state, ...{myPublicRecipes: action.myPublicRecipes}};
    
    case actionTypes.DATA_GET_MY_PRIVATE_EQUIPMENTS: return {...state, ...{myPrivateEquipment: action.myPrivateEquipment}};
    case actionTypes.DATA_GET_MY_PRIVATE_INGREDIENTS: return {...state, ...{myPrivateIngredients: action.myPrivateIngredients}};
    case actionTypes.DATA_GET_MY_PRIVATE_RECIPES: return {...state, ...{myPrivateRecipes: action.myPrivateRecipes}};

    case actionTypes.DATA_GET_MY_FAVORITE_RECIPES: return {...state, ...{myFavoriteRecipes: action.myFavoriteRecipes}};
    case actionTypes.DATA_GET_MY_SAVED_RECIPES: return {...state, ...{mySavedRecipes: action.mySavedRecipes}};

    case actionTypes.DATA_GET_MY_PLANS: return {...state, ...{myPlans: action.myPlans}};

    case actionTypes.DATA_GET_MY_FRIENDSHIPS: return {...state, ...{myFriendships: action.myFriendships}};
  }
  return state;
};

export default dataReducer;