import {
  IStaffCreateNewContentSucceeded,
  IStaffCreateNewContentFailed,
  IStaffEditContentSucceeded,
  IStaffEditContentFailed,
  IStaffDeleteContentSucceeded,
  IStaffDeleteContentFailed
} from './content/types';
import {
  IStaffCreateNewEquipmentSucceeded,
  IStaffCreateNewEquipmentFailed,
  IStaffEditEquipmentSucceeded,
  IStaffEditEquipmentFailed,
  IStaffDeleteEquipmentSucceeded,
  IStaffDeleteEquipmentFailed
} from './equipment/types';
import {
  IStaffCreateNewIngredientSucceeded,
  IStaffCreateNewIngredientFailed,
  IStaffEditIngredientSucceeded,
  IStaffEditIngredientFailed,
  IStaffDeleteIngredientSucceeded,
  IStaffDeleteIngredientFailed
} from './ingredient/types';
import {
  IStaffCreateNewRecipeSucceeded,
  IStaffCreateNewRecipeFailed,
  IStaffEditRecipeSucceeded,
  IStaffEditRecipeFailed,
  IStaffDeleteRecipeSucceeded,
  IStaffDeleteRecipeFailed
} from './recipe/types';

export const STAFF_MESSAGE_CLEAR = 'STAFF_MESSAGE_CLEAR' as const;

export interface IStaffMessageClear {
  type: typeof STAFF_MESSAGE_CLEAR
}

export interface IStaffState {
  message: string
}

export type StaffActions =
IStaffMessageClear |
IStaffCreateNewContentSucceeded |
IStaffCreateNewContentFailed |
IStaffEditContentSucceeded |
IStaffEditContentFailed |
IStaffDeleteContentSucceeded |
IStaffDeleteContentFailed |
IStaffCreateNewEquipmentSucceeded |
IStaffCreateNewEquipmentFailed |
IStaffEditEquipmentSucceeded |
IStaffEditEquipmentFailed |
IStaffDeleteEquipmentSucceeded |
IStaffDeleteEquipmentFailed |
IStaffCreateNewIngredientSucceeded |
IStaffCreateNewIngredientFailed |
IStaffEditIngredientSucceeded |
IStaffEditIngredientFailed |
IStaffDeleteIngredientSucceeded |
IStaffDeleteIngredientFailed |
IStaffCreateNewRecipeSucceeded |
IStaffCreateNewRecipeFailed |
IStaffEditRecipeSucceeded |
IStaffEditRecipeFailed |
IStaffDeleteRecipeSucceeded |
IStaffDeleteRecipeFailed;