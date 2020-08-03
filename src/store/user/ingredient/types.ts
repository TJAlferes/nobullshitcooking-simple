export const USER_CREATE_NEW_PRIVATE_INGREDIENT = 'USER_CREATE_NEW_PRIVATE_INGREDIENT' as const;
export const USER_CREATE_NEW_PRIVATE_INGREDIENT_SUCCEEDED = 'USER_CREATE_NEW_PRIVATE_INGREDIENT_SUCCEEDED' as const;
export const USER_CREATE_NEW_PRIVATE_INGREDIENT_FAILED = 'USER_CREATE_NEW_PRIVATE_INGREDIENT_FAILED' as const;
export const USER_EDIT_PRIVATE_INGREDIENT = 'USER_EDIT_PRIVATE_INGREDIENT' as const;
export const USER_EDIT_PRIVATE_INGREDIENT_SUCCEEDED = 'USER_EDIT_PRIVATE_INGREDIENT_SUCCEEDED' as const;
export const USER_EDIT_PRIVATE_INGREDIENT_FAILED = 'USER_EDIT_PRIVATE_INGREDIENT_FAILED' as const;
export const USER_DELETE_PRIVATE_INGREDIENT = 'USER_DELETE_PRIVATE_INGREDIENT' as const;
export const USER_DELETE_PRIVATE_INGREDIENT_SUCCEEDED = 'USER_DELETE_PRIVATE_INGREDIENT_SUCCEEDED' as const;
export const USER_DELETE_PRIVATE_INGREDIENT_FAILED = 'USER_DELETE_PRIVATE_INGREDIENT_FAILED' as const;

export interface IUserCreateNewPrivateIngredient {
  type: typeof USER_CREATE_NEW_PRIVATE_INGREDIENT;
  ingredientInfo: ICreatingIngredientInfo;
}

export interface IUserCreateNewPrivateIngredientSucceeded {
  type: typeof USER_CREATE_NEW_PRIVATE_INGREDIENT_SUCCEEDED;
  message: string;
}

export interface IUserCreateNewPrivateIngredientFailed {
  type: typeof USER_CREATE_NEW_PRIVATE_INGREDIENT_FAILED;
  message: string;
}

export interface IUserEditPrivateIngredient {
  type: typeof USER_EDIT_PRIVATE_INGREDIENT;
  ingredientInfo: IEditingIngredientInfo;
}

export interface IUserEditPrivateIngredientSucceeded {
  type: typeof USER_EDIT_PRIVATE_INGREDIENT_SUCCEEDED;
  message: string;
}

export interface IUserEditPrivateIngredientFailed {
  type: typeof USER_EDIT_PRIVATE_INGREDIENT_FAILED;
  message: string;
}

export interface IUserDeletePrivateIngredient {
  type: typeof USER_DELETE_PRIVATE_INGREDIENT;
  ingredientId: number;
}

export interface IUserDeletePrivateIngredientSucceeded {
  type: typeof USER_DELETE_PRIVATE_INGREDIENT_SUCCEEDED;
  message: string;
}

export interface IUserDeletePrivateIngredientFailed {
  type: typeof USER_DELETE_PRIVATE_INGREDIENT_FAILED;
  message: string;
}

export interface ICreatingIngredientInfo {
  ingredientTypeId: number;
  ingredientName: string;
  ingredientDescription: string;
  ingredientImage: string | ArrayBuffer | null;
  ingredientFullImage: File | null;
  ingredientTinyImage: File | null;
}

export interface IEditingIngredientInfo {
  ingredientId: number;
  ingredientTypeId: number;
  ingredientName: string;
  ingredientDescription: string;
  ingredientPrevImage: string;
  ingredientImage: string | ArrayBuffer | null;
  ingredientFullImage: File | null;
  ingredientTinyImage: File | null;
}