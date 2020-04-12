import { PlannerData } from '../planner/types';

export const DATA_INIT = 'DATA_INIT' as const;

export const DATA_GET_POSTS = 'DATA_GET_POSTS' as const;
export const DATA_GET_POSTS_SUCCEEDED = 'DATA_GET_POSTS_SUCCEEDED' as const;
export const DATA_GET_POSTS_FAILED = 'DATA_GET_POSTS_FAILED' as const;

export const DATA_GET_POST_PREVIEWS = 'DATA_GET_POST_PREVIEWS' as const;
export const DATA_GET_POST_PREVIEWS_SUCCEEDED = 'DATA_GET_POST_PREVIEWS_SUCCEEDED' as const;
export const DATA_GET_POST_PREVIEWS_FAILED = 'DATA_GET_POST_PREVIEWS_FAILED' as const;

export const DATA_GET_MEASUREMENTS = 'DATA_GET_MEASUREMENTS' as const;
export const DATA_GET_MEASUREMENTS_SUCCEEDED = 'DATA_GET_MEASUREMENTS_SUCCEEDED' as const;
export const DATA_GET_MEASUREMENTS_FAILED = 'DATA_GET_MEASUREMENTS_FAILED' as const;

export const DATA_GET_EQUIPMENTS = 'DATA_GET_EQUIPMENTS' as const;
export const DATA_GET_EQUIPMENTS_SUCCEEDED = 'DATA_GET_EQUIPMENTS_SUCCEEDED' as const;
export const DATA_GET_EQUIPMENTS_FAILED = 'DATA_GET_EQUIPMENTS_FAILED' as const;

export const DATA_GET_EQUIPMENT_TYPES = 'DATA_GET_EQUIPMENT_TYPES' as const;
export const DATA_GET_EQUIPMENT_TYPES_SUCCEEDED = 'DATA_GET_EQUIPMENT_TYPES_SUCCEEDED' as const;
export const DATA_GET_EQUIPMENT_TYPES_FAILED = 'DATA_GET_EQUIPMENT_TYPES_FAILED' as const;

export const DATA_GET_INGREDIENTS = 'DATA_GET_INGREDIENTS' as const;
export const DATA_GET_INGREDIENTS_SUCCEEDED = 'DATA_GET_INGREDIENTS_SUCCEEDED' as const;
export const DATA_GET_INGREDIENTS_FAILED = 'DATA_GET_INGREDIENTS_FAILED' as const;

export const DATA_GET_INGREDIENT_TYPES = 'DATA_GET_INGREDIENT_TYPES' as const;
export const DATA_GET_INGREDIENT_TYPES_SUCCEEDED = 'DATA_GET_INGREDIENT_TYPES_SUCCEEDED' as const;
export const DATA_GET_INGREDIENT_TYPES_FAILED = 'DATA_GET_INGREDIENT_TYPES_FAILED' as const;

export const DATA_GET_RECIPES = 'DATA_GET_RECIPES' as const;
export const DATA_GET_RECIPES_SUCCEEDED = 'DATA_GET_RECIPES_SUCCEEDED' as const;
export const DATA_GET_RECIPES_FAILED = 'DATA_GET_RECIPES_FAILED' as const;

export const DATA_GET_RECIPE_TYPES = 'DATA_GET_RECIPE_TYPES' as const;
export const DATA_GET_RECIPE_TYPES_SUCCEEDED = 'DATA_GET_RECIPE_TYPES_SUCCEEDED' as const;
export const DATA_GET_RECIPE_TYPES_FAILED = 'DATA_GET_RECIPE_TYPES_FAILED' as const;

export const DATA_GET_CUISINES = 'DATA_GET_CUISINES' as const;
export const DATA_GET_CUISINES_SUCCEEDED = 'DATA_GET_CUISINES_SUCCEEDED' as const;
export const DATA_GET_CUISINES_FAILED = 'DATA_GET_CUISINES_FAILED' as const;

export const DATA_GET_METHODS = 'DATA_GET_METHODS' as const;
export const DATA_GET_METHODS_SUCCEEDED = 'DATA_GET_METHODS_SUCCEEDED' as const;
export const DATA_GET_METHODS_FAILED = 'DATA_GET_METHODS_FAILED' as const;

export const DATA_GET_PUBLIC_RECIPES = 'DATA_GET_PUBLIC_RECIPES' as const;
export const DATA_GET_PUBLIC_RECIPES_SUCCEEDED = 'DATA_GET_PUBLIC_RECIPES_SUCCEEDED' as const;
export const DATA_GET_PUBLIC_RECIPES_FAILED = 'DATA_GET_PUBLIC_RECIPES_FAILED' as const;

export const DATA_GET_MY_PUBLIC_RECIPES = 'DATA_GET_MY_PUBLIC_RECIPES' as const;
export const DATA_GET_MY_PUBLIC_RECIPES_SUCCEEDED = 'DATA_GET_MY_PUBLIC_RECIPES_SUCCEEDED' as const;
export const DATA_GET_MY_PUBLIC_RECIPES_FAILED = 'DATA_GET_MY_PUBLIC_RECIPES_FAILED' as const;

export const DATA_GET_MY_PRIVATE_EQUIPMENTS = 'DATA_GET_MY_PRIVATE_EQUIPMENTS' as const;
export const DATA_GET_MY_PRIVATE_EQUIPMENTS_SUCCEEDED = 'DATA_GET_MY_PRIVATE_EQUIPMENTS_SUCCEEDED' as const;
export const DATA_GET_MY_PRIVATE_EQUIPMENTS_FAILED = 'DATA_GET_MY_PRIVATE_EQUIPMENTS_FAILED' as const;

export const DATA_GET_MY_PRIVATE_INGREDIENTS = 'DATA_GET_MY_PRIVATE_INGREDIENTS' as const;
export const DATA_GET_MY_PRIVATE_INGREDIENTS_SUCCEEDED = 'DATA_GET_MY_PRIVATE_INGREDIENTS_SUCCEEDED' as const;
export const DATA_GET_MY_PRIVATE_INGREDIENTS_FAILED = 'DATA_GET_MY_PRIVATE_INGREDIENTS_FAILED' as const;

export const DATA_GET_MY_PRIVATE_RECIPES = 'DATA_GET_MY_PRIVATE_RECIPES' as const;
export const DATA_GET_MY_PRIVATE_RECIPES_SUCCEEDED = 'DATA_GET_MY_PRIVATE_RECIPES_SUCCEEDED' as const;
export const DATA_GET_MY_PRIVATE_RECIPES_FAILED = 'DATA_GET_MY_PRIVATE_RECIPES_FAILED' as const;

export const DATA_GET_MY_FAVORITE_RECIPES = 'DATA_GET_MY_FAVORITE_RECIPES' as const;
export const DATA_GET_MY_FAVORITE_RECIPES_SUCCEEDED = 'DATA_GET_MY_FAVORITE_RECIPES_SUCCEEDED' as const;
export const DATA_GET_MY_FAVORITE_RECIPES_FAILED = 'DATA_GET_MY_FAVORITE_RECIPES_FAILED' as const;

export const DATA_GET_MY_SAVED_RECIPES = 'DATA_GET_MY_SAVED_RECIPES' as const;
export const DATA_GET_MY_SAVED_RECIPES_SUCCEEDED = 'DATA_GET_MY_SAVED_RECIPES_SUCCEEDED' as const;
export const DATA_GET_MY_SAVED_RECIPES_FAILED = 'DATA_GET_MY_SAVED_RECIPES_FAILED' as const;

export const DATA_GET_MY_PLANS = 'DATA_GET_MY_PLANS' as const;
export const DATA_GET_MY_PLANS_SUCCEEDED = 'DATA_GET_MY_PLANS_SUCCEEDED' as const;
export const DATA_GET_MY_PLANS_FAILED = 'DATA_GET_MY_PLANS_FAILED' as const;

export const DATA_GET_MY_FRIENDSHIPS = 'DATA_GET_MY_FRIENDSHIPS' as const;
export const DATA_GET_MY_FRIENDSHIPS_SUCCEEDED = 'DATA_GET_MY_FRIENDSHIPS_SUCCEEDED' as const;
export const DATA_GET_MY_FRIENDSHIPS_FAILED = 'DATA_GET_MY_FRIENDSHIPS_FAILED' as const;

export interface DataState {
  posts: []
  postPreviews: PostPreview[]
  measurements: Measurement[]
  equipment: Equipment[]
  equipmentTypes: EquipmentType[]
  ingredients: Ingredient[]
  ingredientTypes: IngredientType[]
  recipes: WorkRecipe[]
  recipeTypes: RecipeType[]
  cuisines: Cuisine[]
  methods: Method[]
  myPublicRecipes: WorkRecipe[]
  myPrivateEquipment: Equipment[]
  myPrivateIngredients: Ingredient[]
  myPrivateRecipes: WorkRecipe[]
  myFavoriteRecipes: WorkRecipe[]
  mySavedRecipes: WorkRecipe[]
  myPlans: Plan[]
  myFriendships: Friendship[]
}

//export interface Post {}

export interface PostPreview {
  postId: number
  title: string
  author: string
  thumbnail: string
  snippet: string
}

export interface Measurement {
  measurement_id: number
  measurement_name: string
}

export interface Equipment {
  equipment_id: number
  equipment_type_id: number
  owner_id: number
  equipment_type_name: string
  equipment_name: string
  equipment_description: string
  equipment_image: string
}

export interface EquipmentType {
  equipment_type_id: number
  equipment_type_name: string
}

export interface Ingredient {
  ingredient_id: number
  ingredient_type_id: number
  owner_id: number
  ingredient_type_name: string
  ingredient_name: string
  ingredient_description: string
  ingredient_image: string
}

export interface IngredientType {
  ingredient_type_id: number
  ingredient_type_name: string
}

export interface WorkRecipe {
  recipe_id: number
  owner_id: number
  recipe_type_id: number
  cuisine_id: number
  title: string
  recipe_image: string
}

export interface RecipeType {
  recipe_type_id: number
  recipe_type_name: string
}

export interface Cuisine {
  cuisine_id: number
  cuisine_name: string
}

export interface Method {
  method_id: number
  method_name: string
}

export interface Plan {
  plan_id: number
  plan_name: string
  plan_data: PlannerData
}

export interface Friendship {
  friend_id: number
  status: string
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
  type: typeof DATA_GET_POST_PREVIEWS
  posts: []
}

export interface DataGetPostPreviews {
  type: typeof DATA_GET_POST_PREVIEWS
  postPreviews: PostPreview[]
}

export interface DataGetMeasurements {
  type: typeof DATA_GET_MEASUREMENTS
  measurements: Measurement[]
}

export interface DataGetEquipments {
  type: typeof DATA_GET_EQUIPMENTS
  equipment: Equipment[]
}

export interface DataGetEquipmentTypes {
  type: typeof DATA_GET_EQUIPMENT_TYPES
  equipmentTypes: EquipmentType[]
}

export interface DataGetIngredients {
  type: typeof DATA_GET_INGREDIENTS
  ingredients: Ingredient[]
}

export interface DataGetIngredientTypes {
  type: typeof DATA_GET_INGREDIENT_TYPES
  ingredientTypes: IngredientType[]
}

export interface DataGetRecipes {
  type: typeof DATA_GET_RECIPES
  recipes: WorkRecipe[]
}

export interface DataGetRecipeTypes {
  type: typeof DATA_GET_RECIPE_TYPES
  recipeTypes: RecipeType[]
}

export interface DataGetCuisines {
  type: typeof DATA_GET_CUISINES
  cuisines: Cuisine[]
}

export interface DataGetMethods {
  type: typeof DATA_GET_METHODS
  methods: Method[]
}

export interface DataGetMyPublicRecipes {
  type: typeof DATA_GET_MY_PUBLIC_RECIPES
  myPublicRecipes: WorkRecipe[]
}

export interface DataGetMyPrivateEquipments {
  type: typeof DATA_GET_MY_PRIVATE_EQUIPMENTS
  myPrivateEquipment: Equipment[]
}

export interface DataGetMyPrivateIngredients {
  type: typeof DATA_GET_MY_PRIVATE_INGREDIENTS
  myPrivateIngredients: Ingredient[]
}

export interface DataGetMyPrivateRecipes {
  type: typeof DATA_GET_MY_PRIVATE_RECIPES
  myPrivateRecipes: WorkRecipe[]
}

export interface DataGetMyFavoriteRecipes {
  type: typeof DATA_GET_MY_FAVORITE_RECIPES
  myFavoriteRecipes: WorkRecipe[]
}

export interface DataGetMySavedRecipes {
  type: typeof DATA_GET_MY_SAVED_RECIPES
  mySavedRecipes: WorkRecipe[]
}

export interface DataGetMyPlans {
  type: typeof DATA_GET_MY_PLANS
  myPlans: Plan[]
}

export interface DataGetMyFriendships {
  type: typeof DATA_GET_MY_FRIENDSHIPS
  myFriendships: Friendship[]
}