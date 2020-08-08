import {
  USER_CREATE_NEW_PRIVATE_EQUIPMENT,
  USER_CREATE_NEW_PRIVATE_EQUIPMENT_SUCCEEDED,
  USER_CREATE_NEW_PRIVATE_EQUIPMENT_FAILED,
  USER_EDIT_PRIVATE_EQUIPMENT,
  USER_EDIT_PRIVATE_EQUIPMENT_SUCCEEDED,
  USER_EDIT_PRIVATE_EQUIPMENT_FAILED,
  USER_DELETE_PRIVATE_EQUIPMENT,
  USER_DELETE_PRIVATE_EQUIPMENT_SUCCEEDED,
  USER_DELETE_PRIVATE_EQUIPMENT_FAILED,
  ICreatingEquipmentInfo,
  IEditingEquipmentInfo
} from './types';

export const userCreateNewPrivateEquipment = (
  equipmentInfo: ICreatingEquipmentInfo
) => ({
  type: USER_CREATE_NEW_PRIVATE_EQUIPMENT,
  equipmentInfo
});

export const userCreateNewPrivateEquipmentSucceeded = (message: string) => ({
  type: USER_CREATE_NEW_PRIVATE_EQUIPMENT_SUCCEEDED,
  message
});

export const userCreateNewPrivateEquipmentFailed = (message: string) => ({
  type: USER_CREATE_NEW_PRIVATE_EQUIPMENT_FAILED,
  message
});

export const userEditPrivateEquipment = (
  equipmentInfo: IEditingEquipmentInfo
) => ({
  type: USER_EDIT_PRIVATE_EQUIPMENT,
  equipmentInfo
});

export const userEditPrivateEquipmentSucceeded = (message: string) => ({
  type: USER_EDIT_PRIVATE_EQUIPMENT_SUCCEEDED,
  message
});

export const userEditPrivateEquipmentFailed = (message: string) => ({
  type: USER_EDIT_PRIVATE_EQUIPMENT_FAILED,
  message
});

export const userDeletePrivateEquipment = (id: number) => ({
  type: USER_DELETE_PRIVATE_EQUIPMENT,
  id
});

export const userDeletePrivateEquipmentSucceeded = (message: string) => ({
  type: USER_DELETE_PRIVATE_EQUIPMENT_SUCCEEDED,
  message
});

export const userDeletePrivateEquipmentFailed = (message: string) => ({
  type: USER_DELETE_PRIVATE_EQUIPMENT_FAILED,
  message
});