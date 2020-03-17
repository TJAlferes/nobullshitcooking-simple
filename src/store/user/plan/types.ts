export const USER_CREATE_NEW_PLAN = 'USER_CREATE_NEW_PLAN' as const;
export const USER_CREATE_NEW_PLAN_SUCCEEDED = 'USER_CREATE_NEW_PLAN_SUCCEEDED' as const;
export const USER_CREATE_NEW_PLAN_FAILED = 'USER_CREATE_NEW_PLAN_FAILED' as const;
export const USER_EDIT_PLAN = 'USER_EDIT_PLAN' as const;
export const USER_EDIT_PLAN_SUCCEEDED = 'USER_EDIT_PLAN_SUCCEEDED' as const;
export const USER_EDIT_PLAN_FAILED = 'USER_EDIT_PLAN_FAILED' as const;
export const USER_DELETE_PLAN = 'USER_DELETE_PLAN' as const;
export const USER_DELETE_PLAN_SUCCEEDED = 'USER_DELETE_PLAN_SUCCEEDED' as const;
export const USER_DELETE_PLAN_FAILED = 'USER_DELETE_PLAN_FAILED' as const;

export interface UserCreatePlan {
  type: typeof USER_CREATE_NEW_PLAN
  planInfo: CreatingPlanInfo
}

export interface UserCreatePlanSucceeded {
  type: typeof USER_CREATE_NEW_PLAN_SUCCEEDED
  message: string
}

export interface UserCreatePlanFailed {
  type: typeof USER_CREATE_NEW_PLAN_FAILED
  message: string
}

export interface UserEditPlan {
  type: typeof USER_EDIT_PLAN
  planInfo: EditingPlanInfo
}

export interface UserEditPlanSucceeded {
  type: typeof USER_EDIT_PLAN_SUCCEEDED
  message: string
}

export interface UserEditPlanFailed {
  type: typeof USER_EDIT_PLAN_FAILED
  message: string
}

export interface UserDeletePlan {
  type: typeof USER_DELETE_PLAN
  planId: number
}

export interface UserDeletePlanSucceeded {
  type: typeof USER_DELETE_PLAN_SUCCEEDED
  message: string
}

export interface UserDeletePlanFailed {
  type: typeof USER_DELETE_PLAN_FAILED
  message: string
}

export interface CreatingPlanInfo {
  planName: string
  planData: string
}

export interface EditingPlanInfo {
  planId: number
  planName: string
  planData: string
}