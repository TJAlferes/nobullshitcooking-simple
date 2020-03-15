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
  DATA_GET_MY_FRIENDSHIPS
} from '../actions/actionTypes';

export interface DataState {
  posts: Post[]
  postPreviews: PostPreview[]
  measurements: []
  equipment: []
  equipmentTypes: []
  ingredients: []
  ingredientTypes: []
  recipes: []
  recipeTypes: []
  cuisines: []
  methods: []
  myPublicRecipes: []
  myPrivateEquipment: []
  myPrivateIngredients: []
  myPrivateRecipes: []
  myFavoriteRecipes: []
  mySavedRecipes: []
  myPlans: []
  myFriendships: []
}

export interface Post {
  postId: string
  title: string
  author: string
  body: string
}

export interface PostPreview {
  postId: string
  title: string
  author: string
  snippet: string
}

export interface Measurements {

}

export interface Equipments {

}

export interface EquipmentTypes {

}

export interface Ingredients {

}

export interface IngredientTypes {

}

export interface Recipes {

}

export interface RecipeTypes {

}

export interface Cuisines {

}

export interface Methods {

}

export interface MyPlans {

}

export interface MyFriendships {

}

export type DataActions =
DataGetPosts |
DataGetPostPreviews |
DataGetMeasurements |
DataGetEquipments |
DataGetEquipmentTypes |
DataGetIngredients |
DataGetIngredientTypes |
DataGetRecipes |
DataGetRecipeTypes |
DataGetCuisines |
DataGetMethods |
DataGetMyPublicRecipes |
DataGetMyPrivateEquipments |
DataGetMyPrivateIngredients |
DataGetMyPrivateRecipes |
DataGetMyFavoriteRecipes |
DataGetMySavedRecipes |
DataGetMyPlans |
DataGetMyFriendships;

export interface DataGetPosts {
  type: typeof DATA_GET_POSTS
  posts: Post[]
}

export interface DataGetPostPreviews {
  type: typeof DATA_GET_POST_PREVIEWS

}

export interface DataGetMeasurements {
  type: typeof DATA_GET_MEASUREMENTS
  
}

export interface DataGetEquipments {
  type: typeof DATA_GET_EQUIPMENTS
  
}

export interface DataGetEquipmentTypes {
  type: typeof DATA_GET_EQUIPMENT_TYPES
  
}

export interface DataGetIngredients {
  type: typeof DATA_GET_INGREDIENTS
  
}

export interface DataGetIngredientTypes {
  type: typeof DATA_GET_INGREDIENT_TYPES
  
}

export interface DataGetRecipes {
  type: typeof DATA_GET_RECIPES
  
}

export interface DataGetRecipeTypes {
  type: typeof DATA_GET_RECIPE_TYPES
  
}

export interface DataGetCuisines {
  type: typeof DATA_GET_CUISINES
  
}

export interface DataGetMethods {
  type: typeof DATA_GET_METHODS
  
}

export interface DataGetMyPublicRecipes {
  type: typeof DATA_GET_MY_PUBLIC_RECIPES
  
}

export interface DataGetMyPrivateEquipments {
  type: typeof DATA_GET_MY_PRIVATE_EQUIPMENTS
  
}

export interface DataGetMyPrivateIngredients {
  type: typeof DATA_GET_MY_PRIVATE_INGREDIENTS
  
}

export interface DataGetMyPrivateRecipes {
  type: typeof DATA_GET_MY_PRIVATE_RECIPES
  
}

export interface DataGetMyFavoriteRecipes {
  type: typeof DATA_GET_MY_FAVORITE_RECIPES
  
}

export interface DataGetMySavedRecipes {
  type: typeof DATA_GET_MY_SAVED_RECIPES
  
}

export interface DataGetMyPlans {
  type: typeof DATA_GET_MY_PLANS
  
}

export interface DataGetMyFriendships {
  type: typeof DATA_GET_MY_FRIENDSHIPS
  
}