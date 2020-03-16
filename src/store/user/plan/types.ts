export const USER_CREATE_NEW_PLAN = 'USER_CREATE_NEW_PLAN';
export const USER_CREATE_NEW_PLAN_SUCCEEDED = 'USER_CREATE_NEW_PLAN_SUCCEEDED';
export const USER_CREATE_NEW_PLAN_FAILED = 'USER_CREATE_NEW_PLAN_FAILED';

export const USER_EDIT_PLAN = 'USER_EDIT_PLAN';
export const USER_EDIT_PLAN_SUCCEEDED = 'USER_EDIT_PLAN_SUCCEEDED';
export const USER_EDIT_PLAN_FAILED = 'USER_EDIT_PLAN_FAILED';

export const USER_DELETE_PLAN = 'USER_DELETE_PLAN';
export const USER_DELETE_PLAN_SUCCEEDED = 'USER_DELETE_PLAN_SUCCEEDED';
export const USER_DELETE_PLAN_FAILED = 'USER_DELETE_PLAN_FAILED';

interface UserCreatePlan {
  type: typeof USER_CREATE_NEW_PLAN
  planInfo: CreatingPlanInfo
}

interface UserCreatePlanSucceeded {
  type: typeof USER_CREATE_NEW_PLAN_SUCCEEDED
  message: string
}

interface UserCreatePlanFailed {
  type: typeof USER_CREATE_NEW_PLAN_FAILED
  message: string
}

interface UserEditPlan {
  type: typeof USER_EDIT_PLAN
  planInfo: EditingPlanInfo
}

interface UserEditPlanSucceeded {
  type: typeof USER_EDIT_PLAN_SUCCEEDED
  message: string
}

interface UserEditPlanFailed {
  type: typeof USER_EDIT_PLAN_FAILED
  message: string
}

interface UserDeletePlan {
  type: typeof USER_DELETE_PLAN
  planId: number
}

interface UserDeletePlanSucceeded {
  type: typeof USER_DELETE_PLAN_SUCCEEDED
  message: string
}

interface UserDeletePlanFailed {
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