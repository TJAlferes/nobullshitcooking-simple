export const USER_CREATE_NEW_PRIVATE_INGREDIENT = 'USER_CREATE_NEW_PRIVATE_INGREDIENT' as const;
export const USER_CREATE_NEW_PRIVATE_INGREDIENT_SUCCEEDED = 'USER_CREATE_NEW_PRIVATE_INGREDIENT_SUCCEEDED' as const;
export const USER_CREATE_NEW_PRIVATE_INGREDIENT_FAILED = 'USER_CREATE_NEW_PRIVATE_INGREDIENT_FAILED' as const;
export const USER_EDIT_PRIVATE_INGREDIENT = 'USER_EDIT_PRIVATE_INGREDIENT' as const;
export const USER_EDIT_PRIVATE_INGREDIENT_SUCCEEDED = 'USER_EDIT_PRIVATE_INGREDIENT_SUCCEEDED' as const;
export const USER_EDIT_PRIVATE_INGREDIENT_FAILED = 'USER_EDIT_PRIVATE_INGREDIENT_FAILED' as const;
export const USER_DELETE_PRIVATE_INGREDIENT = 'USER_DELETE_PRIVATE_INGREDIENT' as const;
export const USER_DELETE_PRIVATE_INGREDIENT_SUCCEEDED = 'USER_DELETE_PRIVATE_INGREDIENT_SUCCEEDED' as const;
export const USER_DELETE_PRIVATE_INGREDIENT_FAILED = 'USER_DELETE_PRIVATE_INGREDIENT_FAILED' as const;

export interface UserCreateNewPrivateIngredient {
  type: typeof USER_CREATE_NEW_PRIVATE_INGREDIENT
  ingredientInfo: CreatingIngredientInfo
}

export interface UserCreateNewPrivateIngredientSucceeded {
  type: typeof USER_CREATE_NEW_PRIVATE_INGREDIENT_SUCCEEDED
  message: string
}

export interface UserCreateNewPrivateIngredientFailed {
  type: typeof USER_CREATE_NEW_PRIVATE_INGREDIENT_FAILED
  message: string
}

export interface UserEditPrivateIngredient {
  type: typeof USER_EDIT_PRIVATE_INGREDIENT
  ingredientInfo: EditingIngredientInfo
}

export interface UserEditPrivateIngredientSucceeded {
  type: typeof USER_EDIT_PRIVATE_INGREDIENT_SUCCEEDED
  message: string
}

export interface UserEditPrivateIngredientFailed {
  type: typeof USER_EDIT_PRIVATE_INGREDIENT_FAILED
  message: string
}

export interface UserDeletePrivateIngredient {
  type: typeof USER_DELETE_PRIVATE_INGREDIENT
  ingredientId: string
}

export interface UserDeletePrivateIngredientSucceeded {
  type: typeof USER_DELETE_PRIVATE_INGREDIENT_SUCCEEDED
  message: string
}

export interface UserDeletePrivateIngredientFailed {
  type: typeof USER_DELETE_PRIVATE_INGREDIENT_FAILED
  message: string
}

export interface CreatingIngredientInfo {
  ingredientTypeId: number
  ingredientName: string
  ingredientDescription: string
  ingredientImage: IngredientImage
  fullIngredientImage: IngredientImage
  tinyIngredientImage: IngredientImage
}

export interface EditingIngredientInfo {
  ingredientId: number
  ingredientTypeId: number
  ingredientName: string
  ingredientDescription: string
  prevIngredientImage: string
  ingredientImage: IngredientImage
  fullIngredientImage: IngredientImage
  tinyIngredientImage: IngredientImage
}

interface IngredientImage {
  type: string
}