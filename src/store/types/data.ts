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

export type DataActions =
DataGetPosts |
DataGetPostPreviews |
DataGetMeasurements |
DataGetEquipment |
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
  posts: 
}
DataGetPostPreviews
DataGetMeasurements
DataGetEquipment
DataGetEquipmentTypes
DataGetIngredients
DataGetIngredientTypes
DataGetRecipes
DataGetRecipeTypes
DataGetCuisines
DataGetMethods
DataGetMyPublicRecipes
DataGetMyPrivateEquipments
DataGetMyPrivateIngredients
DataGetMyPrivateRecipes
DataGetMyFavoriteRecipes
DataGetMySavedRecipes
DataGetMyPlans
DataGetMyFriendships