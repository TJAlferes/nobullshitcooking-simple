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
  postId: number
  title: string
  author: string
  body: string
}

export interface PostPreview {
  postId: number
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