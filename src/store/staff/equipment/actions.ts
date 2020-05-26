import {
  STAFF_CREATE_NEW_EQUIPMENT,
  STAFF_CREATE_NEW_EQUIPMENT_SUCCEEDED,
  STAFF_CREATE_NEW_EQUIPMENT_FAILED,
  STAFF_EDIT_EQUIPMENT,
  STAFF_EDIT_EQUIPMENT_SUCCEEDED,
  STAFF_EDIT_EQUIPMENT_FAILED,
  STAFF_DELETE_EQUIPMENT,
  STAFF_DELETE_EQUIPMENT_SUCCEEDED,
  STAFF_DELETE_EQUIPMENT_FAILED,
  ICreatingEquipmentInfo,
  IEditingEquipmentInfo
} from './types';

export const staffCreateNewEquipment = (
  equipmentInfo: ICreatingEquipmentInfo
) => ({
  type: STAFF_CREATE_NEW_EQUIPMENT,
  equipmentInfo
});

export const staffCreateNewEquipmentSucceeded = (message: string) => ({
  type: STAFF_CREATE_NEW_EQUIPMENT_SUCCEEDED,
  message
});

export const staffCreateNewEquipmentFailed = (message: string) => ({
  type: STAFF_CREATE_NEW_EQUIPMENT_FAILED,
  message
});

export const staffEditEquipment = (equipmentInfo: IEditingEquipmentInfo) => ({
  type: STAFF_EDIT_EQUIPMENT,
  equipmentInfo
});

export const staffEditEquipmentSucceeded = (message: string) => ({
  type: STAFF_EDIT_EQUIPMENT_SUCCEEDED,
  message
});

export const staffEditEquipmentFailed = (message: string) => ({
  type: STAFF_EDIT_EQUIPMENT_FAILED,
  message
});

export const staffDeleteEquipment = (equipmentId: number) => ({
  type: STAFF_DELETE_EQUIPMENT,
  equipmentId
});

export const staffDeleteEquipmentSucceeded = (message: string) => ({
  type: STAFF_DELETE_EQUIPMENT_SUCCEEDED,
  message
});

export const staffDeleteEquipmentFailed = (message: string) => ({
  type: STAFF_DELETE_EQUIPMENT_FAILED,
  message
});