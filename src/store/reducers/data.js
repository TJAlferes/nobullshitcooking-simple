import * as actionTypes from '../actions/actionTypes';

// eventually split up into types, recipes, ings, equ, plans, friends

const initialState = {
  measurements: [],
  equipment: [],
  equipmentTypes: [],
  ingredients: [],
  ingredientTypes: [],
  recipes: [],
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

  myFriendships: [],

  viewMainIngredients: [],
  viewMainIngredientTypesChecked: [],
  viewMainIngredientsDisplay: 25,
  viewMainIngredientsPages: 1,
  viewMainIngredientsStarting: 0,

  viewMainEquipment: [],
  viewMainEquipmentTypesChecked: [],
  viewMainEquipmentDisplay: 25,
  viewMainEquipmentPages: 1,
  viewMainEquipmentStarting: 0
};

const viewMainIngredients = (state, action) => {
  if (action.types.length) {
    let view = [];
    action.types.forEach(ingredientType => {
      view = view.concat(state.ingredients.filter(ing => ing.ingredient_type_id == ingredientType));
    });
    let finalView = view.slice(action.start, (action.start + action.display));
    let pages = (view.length > action.display) ? Math.ceil(view.length / action.display) : 1;
    return {
      ...state,
      ...{
        viewMainIngredients: finalView,
        viewMainIngredientTypesChecked: action.types,
        viewMainIngredientsDisplay: action.display,
        viewMainIngredientsPages: pages,
        viewMainIngredientsStarting: action.start
      }
    };
  } else {
    let finalView = state.ingredients.slice(action.start, (action.start + action.display));
    return {
      ...state,
      ...{
        viewMainIngredients: finalView,
        viewMainIngredientTypesChecked: action.types,
        viewMainIngredientsDisplay: action.display,
        viewMainIngredientsPages: Math.ceil(state.ingredients.length / action.display),
        viewMainIngredientsStarting: action.start
      }
    };
  }
};

const viewMainEquipment = (state, action) => {
  if (action.types.length) {
    let view = [];
    action.types.forEach(equipmentType => {
      view = view.concat(state.equipment.filter(equ => equ.equipment_type_id === equipmentType));
    });
    let finalView = view.slice(action.start, (action.start + action.display));
    let pages = (view.length > action.display) ? Math.ceil(view.length / action.display) : 1;
    return {
      ...state,
      ...{
        viewMainEquipment: finalView,
        viewMainEquipmentTypesChecked: action.types,
        viewMainEquipmentDisplay: action.display,
        viewMainEquipmentPages: pages,
        viewMainEquipmentStarting: action.start
      }
    };
  } else {
    let finalView = state.equipment.slice(action.start, (action.start + action.display));
    return {
      ...state,
      ...{
        viewMainEquipment: finalView,
        viewMainEquipmentTypesChecked: action.types,
        viewMainEquipmentDisplay: action.display,
        viewMainEquipmentPages: Math.ceil(state.equipment.length / action.display),
        viewMainEquipmentStarting: action.start
      }
    };
  }
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

    case actionTypes.VIEW_GET_INGREDIENTS: return viewMainIngredients(state, action);
    case actionTypes.VIEW_GET_EQUIPMENT: return viewMainEquipment(state, action);
  }
  return state;
};

export default dataReducer;