import * as actionTypes from '../../actions/actionTypes';

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
  //recipeMethods: [],
  //recipeEquipment: [],
  //recipeIngredients: [],
  //recipeSubrecipes: [],

  publicRecipes: [],
  //publicRecipeMethods: [],
  //publicRecipeEquipment: [],
  //publicRecipeIngredients: [],
  //publicRecipeSubrecipes: [],

  privateEquipment: [],
  privateIngredients: [],
  privateRecipes: [],
  //privateRecipeMethods: [],
  //privateRecipeEquipment: [],
  //privateRecipeIngredients: [],
  //privateRecipeSubrecipes: []
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

    case actionTypes.DATA_PUBLIC_GET_RECIPES: return {...state, ...{publicRecipes: action.publicRecipes}};
    case actionTypes.DATA_PRIVATE_GET_EQUIPMENTS: return {...state, ...{privateEquipment: action.privateEquipment}};
    case actionTypes.DATA_PRIVATE_GET_INGREDIENTS: return {...state, ...{privateIngredients: action.privateIngredients}};
    case actionTypes.DATA_PRIVATE_GET_RECIPES: return {...state, ...{privateRecipes: action.privateRecipes}};
  }
  return state;
};

export default dataReducer;