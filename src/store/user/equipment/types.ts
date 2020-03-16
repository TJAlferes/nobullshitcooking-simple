export const USER_CREATE_NEW_PRIVATE_EQUIPMENT = 'USER_CREATE_NEW_PRIVATE_EQUIPMENT';
export const USER_CREATE_NEW_PRIVATE_EQUIPMENT_SUCCEEDED = 'USER_CREATE_NEW_PRIVATE_EQUIPMENT_SUCCEEDED';
export const USER_CREATE_NEW_PRIVATE_EQUIPMENT_FAILED = 'USER_CREATE_NEW_PRIVATE_EQUIPMENT_FAILED';
export const USER_EDIT_PRIVATE_EQUIPMENT = 'USER_EDIT_PRIVATE_EQUIPMENT';
export const USER_EDIT_PRIVATE_EQUIPMENT_SUCCEEDED = 'USER_EDIT_PRIVATE_EQUIPMENT_SUCCEEDED';
export const USER_EDIT_PRIVATE_EQUIPMENT_FAILED = 'USER_EDIT_PRIVATE_EQUIPMENT_FAILED';
export const USER_DELETE_PRIVATE_EQUIPMENT = 'USER_DELETE_PRIVATE_EQUIPMENT';
export const USER_DELETE_PRIVATE_EQUIPMENT_SUCCEEDED = 'USER_DELETE_PRIVATE_EQUIPMENT_SUCCEEDED';
export const USER_DELETE_PRIVATE_EQUIPMENT_FAILED = 'USER_DELETE_PRIVATE_EQUIPMENT_FAILED';

interface UserCreateNewPrivateEquipment {
  type: typeof USER_CREATE_NEW_PRIVATE_EQUIPMENT
  equipmentInfo: CreatingEquipmentInfo
}

interface UserCreateNewPrivateEquipmentSucceeded {
  type: typeof USER_CREATE_NEW_PRIVATE_EQUIPMENT_SUCCEEDED
  message: string
}

interface UserCreateNewPrivateEquipmentFailed {
  type: typeof USER_CREATE_NEW_PRIVATE_EQUIPMENT_FAILED
  message: string
}

interface UserEditPrivateEquipment {
  type: typeof USER_EDIT_PRIVATE_EQUIPMENT
  equipmentInfo: EditingEquipmentInfo
}

interface UserEditPrivateEquipmentSucceeded {
  type: typeof USER_EDIT_PRIVATE_EQUIPMENT_SUCCEEDED
  message: string
}

interface UserEditPrivateEquipmentFailed {
  type: typeof USER_EDIT_PRIVATE_EQUIPMENT_FAILED
  message: string
}

interface UserDeletePrivateEquipment {
  type: typeof USER_DELETE_PRIVATE_EQUIPMENT
  equipmentId: string
}

interface UserDeletePrivateEquipmentSucceeded {
  type: typeof USER_DELETE_PRIVATE_EQUIPMENT_SUCCEEDED
  message: string
}

interface UserDeletePrivateEquipmentFailed {
  type: typeof USER_DELETE_PRIVATE_EQUIPMENT_FAILED
  message: string
}

export interface CreatingEquipmentInfo {
  equipmentTypeId: number
  equipmentName: string
  equipmentDescription: string
  equipmentImage: EquipmentImage
  fullEquipmentImage: EquipmentImage
  tinyEquipmentImage: EquipmentImage
}

export interface EditingEquipmentInfo {
  equipmentId: number
  equipmentTypeId: number
  equipmentName: string
  equipmentDescription: string
  prevEquipmentImage: string
  equipmentImage: EquipmentImage
  fullEquipmentImage: EquipmentImage
  tinyEquipmentImage: EquipmentImage
}

interface EquipmentImage {
  type: string
}