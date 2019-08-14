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
  recipeMethods: [],
  recipeEquipment: [],
  recipeIngredients: [],
  recipeSubrecipes: []
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
  }
  return state;
};

export default dataReducer;