import {
  DATA_GET_POSTS,
  DATA_GET_POST_PREVIEWS,
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
  DATA_GET_MY_FRIENDSHIPS,
  IDataState,
  DataActions
} from './types';

const initialState: IDataState = {
  posts: [],
  postPreviews: [],
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

const dataReducer = (state = initialState, action: DataActions): IDataState => {
  switch (action.type) {
    case DATA_GET_POSTS:
      return {...state, ...{posts: action.posts}};

    case DATA_GET_POST_PREVIEWS:
      return {...state, ...{postPreviews: action.postPreviews}};

    case DATA_GET_MEASUREMENTS:
      return {...state, ...{measurements: action.measurements}};

    case DATA_GET_EQUIPMENTS:
      return {...state, ...{equipment: action.equipment}};

    case DATA_GET_EQUIPMENT_TYPES:
      return {...state, ...{equipmentTypes: action.equipmentTypes}};

    case DATA_GET_INGREDIENTS:
      return {...state, ...{ingredients: action.ingredients}};

    case DATA_GET_INGREDIENT_TYPES:
      return {...state, ...{ingredientTypes: action.ingredientTypes}};

    case DATA_GET_RECIPES:
      return {...state, ...{recipes: action.recipes}};

    case DATA_GET_RECIPE_TYPES:
      return {...state, ...{recipeTypes: action.recipeTypes}};

    case DATA_GET_CUISINES:
      return {...state, ...{cuisines: action.cuisines}};

    case DATA_GET_METHODS:
      return {...state, ...{methods: action.methods}};

    case DATA_GET_MY_PUBLIC_RECIPES:
      return {...state, ...{myPublicRecipes: action.myPublicRecipes}};

    case DATA_GET_MY_PRIVATE_EQUIPMENTS:
      return {...state, ...{myPrivateEquipment: action.myPrivateEquipment}};

    case DATA_GET_MY_PRIVATE_INGREDIENTS:
      return {...state, ...{myPrivateIngredients: action.myPrivateIngredients}};

    case DATA_GET_MY_PRIVATE_RECIPES:
      return {...state, ...{myPrivateRecipes: action.myPrivateRecipes}};

    case DATA_GET_MY_FAVORITE_RECIPES:
      return {...state, ...{myFavoriteRecipes: action.myFavoriteRecipes}};

    case DATA_GET_MY_SAVED_RECIPES:
      return {...state, ...{mySavedRecipes: action.mySavedRecipes}};

    case DATA_GET_MY_PLANS:
      return {...state, ...{myPlans: action.myPlans}};

    case DATA_GET_MY_FRIENDSHIPS:
      return {...state, ...{myFriendships: action.myFriendships}};

    default: return state;
  }
};

export default dataReducer;