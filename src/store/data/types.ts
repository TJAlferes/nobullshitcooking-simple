import { IPlannerData } from '../planner/types';

export const DATA_INIT = 'DATA_INIT' as const;

export const DATA_GET_INITIAL_DATA = 'DATA_GET_INITIAL_DATA' as const;
export const DATA_GET_INITIAL_DATA_SUCCEEDED = 'DATA_GET_INITIAL_DATA_SUCCEEDED' as const;
export const DATA_GET_INITIAL_DATA_FAILED = 'DATA_GET_INITIAL_DATA_FAILED' as const;

export const DATA_GET_CONTENT_TYPES = 'DATA_GET_CONTENT_TYPES' as const;
export const DATA_GET_CONTENT_TYPES_SUCCEEDED = 'DATA_GET_CONTENT_TYPES_SUCCEEDED' as const;
export const DATA_GET_CONTENT_TYPES_FAILED = 'DATA_GET_CONTENT_TYPES_FAILED' as const;

//export const DATA_GET_POSTS = 'DATA_GET_POSTS' as const;
//export const DATA_GET_POSTS_SUCCEEDED = 'DATA_GET_POSTS_SUCCEEDED' as const;
//export const DATA_GET_POSTS_FAILED = 'DATA_GET_POSTS_FAILED' as const;

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

export interface IDataState {
  content: IWorkContent[]
  contentTypes: IContentType[]
  //posts: []  // remove?
  postPreviews: IPostPreview[]
  measurements: IMeasurement[]
  equipment: IEquipment[]
  equipmentTypes: IEquipmentType[]
  ingredients: IIngredient[]
  ingredientTypes: IIngredientType[]
  recipes: IWorkRecipe[]
  recipeTypes: IRecipeType[]
  cuisines: ICuisine[]
  methods: IMethod[]
  myPublicRecipes: IWorkRecipe[]
  myPrivateEquipment: IEquipment[]
  myPrivateIngredients: IIngredient[]
  myPrivateRecipes: IWorkRecipe[]
  myFavoriteRecipes: IWorkRecipe[]
  mySavedRecipes: IWorkRecipe[]
  myPlans: IPlan[]
  myFriendships: IFriendship[]
}

export interface IInitialData {
  contentTypes: IContentType[]
  //posts: []  // remove?
  measurements: IMeasurement[]
  officialEquipment: IEquipment[]
  equipmentTypes: IEquipmentType[]
  officialIngredients: IIngredient[]
  ingredientTypes: IIngredientType[]
  officialRecipes: IWorkRecipe[]
  recipeTypes: IRecipeType[]
  cuisines: ICuisine[]
  methods: IMethod[]
}

export interface IWorkContent {
  content_id: number;
  title: string;
}

export interface IContentType {
  content_type_id: number;
  parent_id: number;
  content_type_name: string;
  content_type_path: string;
}

//export interface IPost {}

export interface IPostPreview {
  postId: number
  title: string
  author: string
  thumbnail: string
  snippet: string
}

export interface IMeasurement {
  measurement_id: number
  measurement_name: string
}

export interface IEquipment {
  equipment_id: number
  equipment_type_id: number
  owner_id: number
  equipment_type_name: string
  equipment_name: string
  equipment_description: string
  equipment_image: string
}

export interface IEquipmentType {
  equipment_type_id: number
  equipment_type_name: string
}

export interface IIngredient {
  ingredient_id: number
  ingredient_type_id: number
  owner_id: number
  ingredient_type_name: string
  ingredient_name: string
  ingredient_description: string
  ingredient_image: string
}

export interface IIngredientType {
  ingredient_type_id: number
  ingredient_type_name: string
}

export interface IWorkRecipe {
  recipe_id: number
  owner_id: number
  recipe_type_id: number
  cuisine_id: number
  title: string
  recipe_image: string
}

export interface IRecipeType {
  recipe_type_id: number
  recipe_type_name: string
}

export interface ICuisine {
  cuisine_id: number
  cuisine_name: string
  cuisine_nation: string
}

export interface IMethod {
  method_id: number
  method_name: string
}

export interface IPlan {
  plan_id: number
  plan_name: string
  plan_data: IPlannerData
}

export interface IFriendship {
  user_id: number;
  username: string;
  avatar: string;
  status: string;
}

export type DataActions =
IDataInit |
IDataGetInitialData |
IDataGetContentTypes |
//IDataGetPosts |
IDataGetPostPreviews |
IDataGetMeasurements |
IDataGetEquipments |
IDataGetEquipmentTypes |
IDataGetIngredients |
IDataGetIngredientTypes |
IDataGetRecipes |
IDataGetRecipeTypes |
IDataGetCuisines |
IDataGetMethods |
IDataGetMyPublicRecipes |
IDataGetMyPrivateEquipments |
IDataGetMyPrivateIngredients |
IDataGetMyPrivateRecipes |
IDataGetMyFavoriteRecipes |
IDataGetMySavedRecipes |
IDataGetMyPlans |
IDataGetMyFriendships;

export interface IDataInit {
  type: typeof DATA_INIT;
}

export interface IDataGetInitialData {
  type: typeof DATA_GET_INITIAL_DATA,
  initialData: IInitialData
}

export interface IDataGetContentTypes {
  type: typeof DATA_GET_CONTENT_TYPES
  contentTypes: IContentType[]
}

/*export interface IDataGetPosts {
  type: typeof DATA_GET_POSTS
  posts: []
}*/

export interface IDataGetPostPreviews {
  type: typeof DATA_GET_POST_PREVIEWS
  postPreviews: IPostPreview[]
}

export interface IDataGetMeasurements {
  type: typeof DATA_GET_MEASUREMENTS
  measurements: IMeasurement[]
}

export interface IDataGetEquipments {
  type: typeof DATA_GET_EQUIPMENTS
  equipment: IEquipment[]
}

export interface IDataGetEquipmentTypes {
  type: typeof DATA_GET_EQUIPMENT_TYPES
  equipmentTypes: IEquipmentType[]
}

export interface IDataGetIngredients {
  type: typeof DATA_GET_INGREDIENTS
  ingredients: IIngredient[]
}

export interface IDataGetIngredientTypes {
  type: typeof DATA_GET_INGREDIENT_TYPES
  ingredientTypes: IIngredientType[]
}

export interface IDataGetRecipes {
  type: typeof DATA_GET_RECIPES
  recipes: IWorkRecipe[]
}

export interface IDataGetRecipeTypes {
  type: typeof DATA_GET_RECIPE_TYPES
  recipeTypes: IRecipeType[]
}

export interface IDataGetCuisines {
  type: typeof DATA_GET_CUISINES
  cuisines: ICuisine[]
}

export interface IDataGetMethods {
  type: typeof DATA_GET_METHODS
  methods: IMethod[]
}

export interface IDataGetMyPublicRecipes {
  type: typeof DATA_GET_MY_PUBLIC_RECIPES
  myPublicRecipes: IWorkRecipe[]
}

export interface IDataGetMyPrivateEquipments {
  type: typeof DATA_GET_MY_PRIVATE_EQUIPMENTS
  myPrivateEquipment: IEquipment[]
}

export interface IDataGetMyPrivateIngredients {
  type: typeof DATA_GET_MY_PRIVATE_INGREDIENTS
  myPrivateIngredients: IIngredient[]
}

export interface IDataGetMyPrivateRecipes {
  type: typeof DATA_GET_MY_PRIVATE_RECIPES
  myPrivateRecipes: IWorkRecipe[]
}

export interface IDataGetMyFavoriteRecipes {
  type: typeof DATA_GET_MY_FAVORITE_RECIPES
  myFavoriteRecipes: IWorkRecipe[]
}

export interface IDataGetMySavedRecipes {
  type: typeof DATA_GET_MY_SAVED_RECIPES
  mySavedRecipes: IWorkRecipe[]
}

export interface IDataGetMyPlans {
  type: typeof DATA_GET_MY_PLANS
  myPlans: IPlan[]
}

export interface IDataGetMyFriendships {
  type: typeof DATA_GET_MY_FRIENDSHIPS
  myFriendships: IFriendship[]
}