import {
  DATA_INIT,

  DATA_GET_INITIAL_DATA,
  DATA_GET_INITIAL_DATA_SUCCEEDED,
  DATA_GET_INITIAL_DATA_FAILED,
  DATA_GET_CONTENT,
  DATA_GET_CONTENT_SUCCEEDED,
  DATA_GET_CONTENT_FAILED,
  DATA_GET_CONTENT_TYPES,
  DATA_GET_CONTENT_TYPES_SUCCEEDED,
  DATA_GET_CONTENT_TYPES_FAILED,
  DATA_GET_CUISINES,
  DATA_GET_CUISINES_SUCCEEDED,
  DATA_GET_CUISINES_FAILED,
  DATA_GET_EQUIPMENTS,
  DATA_GET_EQUIPMENTS_SUCCEEDED,
  DATA_GET_EQUIPMENTS_FAILED,
  DATA_GET_EQUIPMENT_TYPES,
  DATA_GET_EQUIPMENT_TYPES_SUCCEEDED,
  DATA_GET_EQUIPMENT_TYPES_FAILED,
  DATA_GET_INGREDIENTS,
  DATA_GET_INGREDIENTS_SUCCEEDED,
  DATA_GET_INGREDIENTS_FAILED,
  DATA_GET_INGREDIENT_TYPES,
  DATA_GET_INGREDIENT_TYPES_SUCCEEDED,
  DATA_GET_INGREDIENT_TYPES_FAILED,
  DATA_GET_MEASUREMENTS,
  DATA_GET_MEASUREMENTS_SUCCEEDED,
  DATA_GET_MEASUREMENTS_FAILED,
  DATA_GET_METHODS,
  DATA_GET_METHODS_SUCCEEDED,
  DATA_GET_METHODS_FAILED,
  DATA_GET_PRODUCTS,
  DATA_GET_PRODUCTS_SUCCEEDED,
  DATA_GET_PRODUCTS_FAILED,
  DATA_GET_PRODUCT_CATEGORIES,
  DATA_GET_PRODUCT_CATEGORIES_SUCCEEDED,
  DATA_GET_PRODUCT_CATEGORIES_FAILED,
  DATA_GET_PRODUCT_TYPES,
  DATA_GET_PRODUCT_TYPES_SUCCEEDED,
  DATA_GET_PRODUCT_TYPES_FAILED,
  DATA_GET_RECIPES,
  DATA_GET_RECIPES_SUCCEEDED,
  DATA_GET_RECIPES_FAILED,
  DATA_GET_RECIPE_TYPES,
  DATA_GET_RECIPE_TYPES_SUCCEEDED,
  DATA_GET_RECIPE_TYPES_FAILED,

  DATA_GET_INITIAL_USER_DATA,
  DATA_GET_INITIAL_USER_DATA_SUCCEEDED,
  DATA_GET_INITIAL_USER_DATA_FAILED,
  DATA_GET_MY_CONTENT,
  DATA_GET_MY_CONTENT_SUCCEEDED,
  DATA_GET_MY_CONTENT_FAILED,
  DATA_GET_MY_FAVORITE_RECIPES,
  DATA_GET_MY_FAVORITE_RECIPES_SUCCEEDED,
  DATA_GET_MY_FAVORITE_RECIPES_FAILED,
  DATA_GET_MY_FRIENDSHIPS,
  DATA_GET_MY_FRIENDSHIPS_SUCCEEDED,
  DATA_GET_MY_FRIENDSHIPS_FAILED,
  DATA_GET_MY_PLANS,
  DATA_GET_MY_PLANS_SUCCEEDED,
  DATA_GET_MY_PLANS_FAILED,
  DATA_GET_MY_PRIVATE_EQUIPMENTS,
  DATA_GET_MY_PRIVATE_EQUIPMENTS_SUCCEEDED,
  DATA_GET_MY_PRIVATE_EQUIPMENTS_FAILED,
  DATA_GET_MY_PRIVATE_INGREDIENTS,
  DATA_GET_MY_PRIVATE_INGREDIENTS_SUCCEEDED,
  DATA_GET_MY_PRIVATE_INGREDIENTS_FAILED,
  DATA_GET_MY_PRIVATE_RECIPES,
  DATA_GET_MY_PRIVATE_RECIPES_SUCCEEDED,
  DATA_GET_MY_PRIVATE_RECIPES_FAILED,
  DATA_GET_MY_PUBLIC_RECIPES,
  DATA_GET_MY_PUBLIC_RECIPES_SUCCEEDED,
  DATA_GET_MY_PUBLIC_RECIPES_FAILED,
  DATA_GET_MY_SAVED_RECIPES,
  DATA_GET_MY_SAVED_RECIPES_SUCCEEDED,
  DATA_GET_MY_SAVED_RECIPES_FAILED,

  IInitialData,
  IInitialUserData,
  IWorkContent,
  IContentType,
  ICuisine,
  IMeasurement,
  IMethod,
  IEquipment,
  IEquipmentType,
  IFriendship,
  IIngredient,
  IIngredientType,
  IPlan,
  IProductCategory,
  IProductType,
  IWorkProduct,
  IWorkRecipe,
  IRecipeType
} from './types';

export const dataInit = () => ({type: DATA_INIT});



export const dataGetInitialData = (initialData: IInitialData) => ({
  type: DATA_GET_INITIAL_DATA,
  initialData
});

export const dataGetInitialDataSucceeded = () => ({
  type: DATA_GET_INITIAL_DATA_SUCCEEDED
});

export const dataGetInitialDataFailed = () => ({
  type: DATA_GET_INITIAL_DATA_FAILED
});

export const dataGetContent = (content: IWorkContent[]) => ({
  type: DATA_GET_CONTENT,
  content
});

export const dataGetContentSucceeded = () => ({
  type: DATA_GET_CONTENT_SUCCEEDED
});

export const dataGetContentFailed = () => ({type: DATA_GET_CONTENT_FAILED});

export const dataGetContentTypes = (contentTypes: IContentType[]) => ({
  type: DATA_GET_CONTENT_TYPES,
  contentTypes
});

export const dataGetContentTypesSucceeded = () => ({
  type: DATA_GET_CONTENT_TYPES_SUCCEEDED
});

export const dataGetContentTypesFailed = () => ({
  type: DATA_GET_CONTENT_TYPES_FAILED
});

export const dataGetCuisines = (cuisines: ICuisine[]) => ({
  type: DATA_GET_CUISINES,
  cuisines
});

export const dataGetCuisinesSucceeded = () => ({
  type: DATA_GET_CUISINES_SUCCEEDED
});

export const dataGetCuisinesFailed = () => ({type: DATA_GET_CUISINES_FAILED});

export const dataGetEquipments = (equipment: IEquipment[]) => ({
  type: DATA_GET_EQUIPMENTS,
  equipment
});

export const dataGetEquipmentsSucceeded = () => ({
  type: DATA_GET_EQUIPMENTS_SUCCEEDED
});

export const dataGetEquipmentsFailed = () => ({
  type: DATA_GET_EQUIPMENTS_FAILED
});

export const dataGetEquipmentTypes = (equipmentTypes: IEquipmentType[]) => ({
  type: DATA_GET_EQUIPMENT_TYPES,
  equipmentTypes
});

export const dataGetEquipmentTypesSucceeded = () => ({
  type: DATA_GET_EQUIPMENT_TYPES_SUCCEEDED
});

export const dataGetEquipmentTypesFailed = () => ({
  type: DATA_GET_EQUIPMENT_TYPES_FAILED
});

export const dataGetIngredients = (ingredients: IIngredient[]) => ({
  type: DATA_GET_INGREDIENTS,
  ingredients
});

export const dataGetIngredientsSucceeded = () => ({
  type: DATA_GET_INGREDIENTS_SUCCEEDED
});

export const dataGetIngredientsFailed = () => ({
  type: DATA_GET_INGREDIENTS_FAILED
});

export const dataGetIngredientTypes = (ingredientTypes: IIngredientType[]) => ({
  type: DATA_GET_INGREDIENT_TYPES,
  ingredientTypes
});

export const dataGetIngredientTypesSucceeded = () => ({
  type: DATA_GET_INGREDIENT_TYPES_SUCCEEDED
});

export const dataGetIngredientTypesFailed = () => ({
  type: DATA_GET_INGREDIENT_TYPES_FAILED
});

export const dataGetMeasurements = (measurements: IMeasurement[]) => ({
  type: DATA_GET_MEASUREMENTS,
  measurements
});

export const dataGetMeasurementsSucceeded = () => ({
  type: DATA_GET_MEASUREMENTS_SUCCEEDED
});

export const dataGetMeasurementsFailed = () => ({
  type: DATA_GET_MEASUREMENTS_FAILED
});

export const dataGetMethods = (methods: IMethod[]) => ({
  type: DATA_GET_METHODS,
  methods
});

export const dataGetMethodsSucceeded = () => ({
  type: DATA_GET_METHODS_SUCCEEDED
});

export const dataGetMethodsFailed = () => ({type: DATA_GET_METHODS_FAILED});

export const dataGetProducts = (products: IWorkProduct[]) => ({
  type: DATA_GET_PRODUCTS,
  products
});

export const dataGetProductsSucceeded = () => ({
  type: DATA_GET_PRODUCTS_SUCCEEDED
});

export const dataGetProductsFailed = () => ({type: DATA_GET_PRODUCTS_FAILED});

export const dataGetProductCategories =
  (productCategories: IProductCategory[]) =>
    ({type: DATA_GET_PRODUCT_CATEGORIES, productCategories});

export const dataGetProductCategoriesSucceeded = () => ({
  type: DATA_GET_PRODUCT_CATEGORIES_SUCCEEDED
});

export const dataGetProductCategoriesFailed = () => ({
  type: DATA_GET_PRODUCT_CATEGORIES_FAILED
});

export const dataGetProductTypes = (productTypes: IProductType[]) => ({
  type: DATA_GET_PRODUCT_TYPES,
  productTypes
});

export const dataGetProductTypesSucceeded = () => ({
  type: DATA_GET_PRODUCT_TYPES_SUCCEEDED
});

export const dataGetProductTypesFailed = () => ({
  type: DATA_GET_PRODUCT_TYPES_FAILED
});

export const dataGetRecipes = (recipes: IWorkRecipe[]) => ({
  type: DATA_GET_RECIPES,
  recipes
});

export const dataGetRecipesSucceeded = () => ({
  type: DATA_GET_RECIPES_SUCCEEDED
});

export const dataGetRecipesFailed = () => ({type: DATA_GET_RECIPES_FAILED});

export const dataGetRecipeTypes = (recipeTypes: IRecipeType[]) => ({
  type: DATA_GET_RECIPE_TYPES,
  recipeTypes
});

export const dataGetRecipeTypesSucceeded = () => ({
  type: DATA_GET_RECIPE_TYPES_SUCCEEDED
});

export const dataGetRecipeTypesFailed = () => ({
  type: DATA_GET_RECIPE_TYPES_FAILED
});



export const dataGetInitialUserData = (initialUserData: IInitialUserData) => ({
  type: DATA_GET_INITIAL_USER_DATA,
  initialUserData
});

export const dataGetInitialUserDataSucceeded = () => ({
  type: DATA_GET_INITIAL_USER_DATA_SUCCEEDED
});

export const dataGetInitialUserDataFailed = () => ({
  type: DATA_GET_INITIAL_USER_DATA_FAILED
});

export const dataGetMyContent = (myContent: IWorkContent[]) => ({
  type: DATA_GET_MY_CONTENT,
  myContent
});

export const dataGetMyContentSucceeded = () => ({
  type: DATA_GET_MY_CONTENT_SUCCEEDED
});

export const dataGetMyContentFailed = () => ({
  type: DATA_GET_MY_CONTENT_FAILED
});

export const dataGetMyFavoriteRecipes = (myFavoriteRecipes: IWorkRecipe[]) => ({
  type: DATA_GET_MY_FAVORITE_RECIPES,
  myFavoriteRecipes
});

export const dataGetMyFavoriteRecipesSucceeded = () => ({
  type: DATA_GET_MY_FAVORITE_RECIPES_SUCCEEDED
});

export const dataGetMyFavoriteRecipesFailed = () => ({
  type: DATA_GET_MY_FAVORITE_RECIPES_FAILED
});

export const dataGetMyFriendships = (myFriendships: IFriendship[]) => ({
  type: DATA_GET_MY_FRIENDSHIPS,
  myFriendships
});

export const dataGetMyFriendshipsSucceeded = () => ({
  type: DATA_GET_MY_FRIENDSHIPS_SUCCEEDED
});

export const dataGetMyFriendshipsFailed = () => ({
  type: DATA_GET_MY_FRIENDSHIPS_FAILED
});

export const dataGetMyPlans = (myPlans: IPlan[]) => ({
  type: DATA_GET_MY_PLANS,
  myPlans
});

export const dataGetMyPlansSucceeded = () => ({
  type: DATA_GET_MY_PLANS_SUCCEEDED
});

export const dataGetMyPlansFailed = () => ({type: DATA_GET_MY_PLANS_FAILED});

export const dataGetMyPrivateEquipments = (
  myPrivateEquipment: IEquipment[]
) => ({
  type: DATA_GET_MY_PRIVATE_EQUIPMENTS,
  myPrivateEquipment
});

export const dataGetMyPrivateEquipmentsSucceeded = () => ({
  type: DATA_GET_MY_PRIVATE_EQUIPMENTS_SUCCEEDED
});

export const dataGetMyPrivateEquipmentsFailed = () => ({
  type: DATA_GET_MY_PRIVATE_EQUIPMENTS_FAILED
});

export const dataGetMyPrivateIngredients = (
  myPrivateIngredients: IIngredient[]
) => ({
  type: DATA_GET_MY_PRIVATE_INGREDIENTS,
  myPrivateIngredients
});

export const dataGetMyPrivateIngredientsSucceeded = () => ({
  type: DATA_GET_MY_PRIVATE_INGREDIENTS_SUCCEEDED
});

export const dataGetMyPrivateIngredientsFailed = () => ({
  type: DATA_GET_MY_PRIVATE_INGREDIENTS_FAILED
});

export const dataGetMyPrivateRecipes = (myPrivateRecipes: IWorkRecipe[]) => ({
  type: DATA_GET_MY_PRIVATE_RECIPES,
  myPrivateRecipes
});

export const dataGetMyPrivateRecipesSucceeded = () => ({
  type: DATA_GET_MY_PRIVATE_RECIPES_SUCCEEDED
});

export const dataGetMyPrivateRecipesFailed = () => ({
  type: DATA_GET_MY_PRIVATE_RECIPES_FAILED
});

export const dataGetMyPublicRecipes = (myPublicRecipes: IWorkRecipe[]) => ({
  type: DATA_GET_MY_PUBLIC_RECIPES,
  myPublicRecipes
});

export const dataGetMyPublicRecipesSucceeded = () => ({
  type: DATA_GET_MY_PUBLIC_RECIPES_SUCCEEDED
});

export const dataGetMyPublicRecipesFailed = () => ({
  type: DATA_GET_MY_PUBLIC_RECIPES_FAILED
});

export const dataGetMySavedRecipes = (mySavedRecipes: IWorkRecipe[]) => ({
  type: DATA_GET_MY_SAVED_RECIPES,
  mySavedRecipes
});

export const dataGetMySavedRecipesSucceeded = () => ({
  type: DATA_GET_MY_SAVED_RECIPES_SUCCEEDED
});

export const dataGetMySavedRecipesFailed = () => ({
  type: DATA_GET_MY_SAVED_RECIPES_FAILED
});