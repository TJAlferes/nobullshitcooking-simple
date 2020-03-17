export const USER_CREATE_NEW_PRIVATE_EQUIPMENT = 'USER_CREATE_NEW_PRIVATE_EQUIPMENT' as const;
export const USER_CREATE_NEW_PRIVATE_EQUIPMENT_SUCCEEDED = 'USER_CREATE_NEW_PRIVATE_EQUIPMENT_SUCCEEDED' as const;
export const USER_CREATE_NEW_PRIVATE_EQUIPMENT_FAILED = 'USER_CREATE_NEW_PRIVATE_EQUIPMENT_FAILED' as const;
export const USER_EDIT_PRIVATE_EQUIPMENT = 'USER_EDIT_PRIVATE_EQUIPMENT' as const;
export const USER_EDIT_PRIVATE_EQUIPMENT_SUCCEEDED = 'USER_EDIT_PRIVATE_EQUIPMENT_SUCCEEDED' as const;
export const USER_EDIT_PRIVATE_EQUIPMENT_FAILED = 'USER_EDIT_PRIVATE_EQUIPMENT_FAILED' as const;
export const USER_DELETE_PRIVATE_EQUIPMENT = 'USER_DELETE_PRIVATE_EQUIPMENT' as const;
export const USER_DELETE_PRIVATE_EQUIPMENT_SUCCEEDED = 'USER_DELETE_PRIVATE_EQUIPMENT_SUCCEEDED' as const;
export const USER_DELETE_PRIVATE_EQUIPMENT_FAILED = 'USER_DELETE_PRIVATE_EQUIPMENT_FAILED' as const;

export interface UserCreateNewPrivateEquipment {
  type: typeof USER_CREATE_NEW_PRIVATE_EQUIPMENT
  equipmentInfo: CreatingEquipmentInfo
}

export interface UserCreateNewPrivateEquipmentSucceeded {
  type: typeof USER_CREATE_NEW_PRIVATE_EQUIPMENT_SUCCEEDED
  message: string
}

export interface UserCreateNewPrivateEquipmentFailed {
  type: typeof USER_CREATE_NEW_PRIVATE_EQUIPMENT_FAILED
  message: string
}

export interface UserEditPrivateEquipment {
  type: typeof USER_EDIT_PRIVATE_EQUIPMENT
  equipmentInfo: EditingEquipmentInfo
}

export interface UserEditPrivateEquipmentSucceeded {
  type: typeof USER_EDIT_PRIVATE_EQUIPMENT_SUCCEEDED
  message: string
}

export interface UserEditPrivateEquipmentFailed {
  type: typeof USER_EDIT_PRIVATE_EQUIPMENT_FAILED
  message: string
}

export interface UserDeletePrivateEquipment {
  type: typeof USER_DELETE_PRIVATE_EQUIPMENT
  equipmentId: string
}

export interface UserDeletePrivateEquipmentSucceeded {
  type: typeof USER_DELETE_PRIVATE_EQUIPMENT_SUCCEEDED
  message: string
}

export interface UserDeletePrivateEquipmentFailed {
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