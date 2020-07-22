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

  IDataState,
  DataActions
} from './types';

const initialState: IDataState = {
  officialContent: [],  // official
  contentTypes: [],
  cuisines: [],
  officialEquipment: [],  // official
  equipmentTypes: [],
  officialIngredients: [],  // official
  ingredientTypes: [],
  measurements: [],
  methods: [],
  officialRecipes: [],  // official
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

export const dataReducer = (
  state = initialState,
  action: DataActions
): IDataState => {
  switch (action.type) {
    case DATA_GET_INITIAL_DATA:
      return {
        ...state,
        ...{
          contentTypes: action.initialData.contentTypes,
          cuisines: action.initialData.cuisines,
          equipment: action.initialData.officialEquipment,
          equipmentTypes: action.initialData.equipmentTypes,
          ingredients: action.initialData.officialIngredients,
          ingredientTypes: action.initialData.ingredientTypes,
          measurements: action.initialData.measurements,
          methods: action.initialData.methods,
          recipes: action.initialData.officialRecipes,
          recipeTypes: action.initialData.recipeTypes
        }
      };
    
    case DATA_GET_CONTENT:
      return {...state, ...{officialContent: action.officialContent}};

    case DATA_GET_CONTENT_TYPES:
      return {...state, ...{contentTypes: action.contentTypes}};

    case DATA_GET_CUISINES:
      return {...state, ...{cuisines: action.cuisines}};

    case DATA_GET_EQUIPMENTS:
      return {...state, ...{officialEquipment: action.officialEquipment}};

    case DATA_GET_EQUIPMENT_TYPES:
      return {...state, ...{equipmentTypes: action.equipmentTypes}};

    case DATA_GET_INGREDIENTS:
      return {...state, ...{officialIngredients: action.officialIngredients}};

    case DATA_GET_INGREDIENT_TYPES:
      return {...state, ...{ingredientTypes: action.ingredientTypes}};

    case DATA_GET_MEASUREMENTS:
      return {...state, ...{measurements: action.measurements}};

      case DATA_GET_METHODS:
        return {...state, ...{methods: action.methods}};

    case DATA_GET_RECIPES:
      return {...state, ...{officialRecipes: action.officialRecipes}};

    case DATA_GET_RECIPE_TYPES:
      return {...state, ...{recipeTypes: action.recipeTypes}};


    
    case DATA_GET_INITIAL_USER_DATA:
      return {
        ...state,
        ...{
          myContent: action.initialUserData.myContent,
          myPublicRecipes: action.initialUserData.myPublicRecipes,
          myPrivateEquipment: action.initialUserData.myPrivateEquipment,
          myPrivateIngredients: action.initialUserData.myPrivateIngredients,
          myPrivateRecipes: action.initialUserData.myPrivateRecipes,
          myFavoriteRecipes: action.initialUserData.myFavoriteRecipes,
          mySavedRecipes: action.initialUserData.mySavedRecipes,
          myPlans: action.initialUserData.myPlans,
          myFriendships: action.initialUserData.myFriendships
        }
      };

    case DATA_GET_MY_CONTENT:
      return {...state, ...{myContent: action.myContent}};

    case DATA_GET_MY_FAVORITE_RECIPES:
      return {...state, ...{myFavoriteRecipes: action.myFavoriteRecipes}};

    case DATA_GET_MY_FRIENDSHIPS:
      return {...state, ...{myFriendships: action.myFriendships}};

    case DATA_GET_MY_PLANS:
      return {...state, ...{myPlans: action.myPlans}};

    case DATA_GET_MY_PRIVATE_EQUIPMENTS:
      return {...state, ...{myPrivateEquipment: action.myPrivateEquipment}};

    case DATA_GET_MY_PRIVATE_INGREDIENTS:
      return {...state, ...{myPrivateIngredients: action.myPrivateIngredients}};

    case DATA_GET_MY_PRIVATE_RECIPES:
      return {...state, ...{myPrivateRecipes: action.myPrivateRecipes}};

    case DATA_GET_MY_PUBLIC_RECIPES:
      return {...state, ...{myPublicRecipes: action.myPublicRecipes}};

    case DATA_GET_MY_SAVED_RECIPES:
      return {...state, ...{mySavedRecipes: action.mySavedRecipes}};
    
    default: return state;
  }
};