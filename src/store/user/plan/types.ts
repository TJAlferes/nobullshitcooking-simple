export const USER_CREATE_NEW_PLAN = 'USER_CREATE_NEW_PLAN' as const;
export const USER_CREATE_NEW_PLAN_SUCCEEDED = 'USER_CREATE_NEW_PLAN_SUCCEEDED' as const;
export const USER_CREATE_NEW_PLAN_FAILED = 'USER_CREATE_NEW_PLAN_FAILED' as const;
export const USER_EDIT_PLAN = 'USER_EDIT_PLAN' as const;
export const USER_EDIT_PLAN_SUCCEEDED = 'USER_EDIT_PLAN_SUCCEEDED' as const;
export const USER_EDIT_PLAN_FAILED = 'USER_EDIT_PLAN_FAILED' as const;
export const USER_DELETE_PLAN = 'USER_DELETE_PLAN' as const;
export const USER_DELETE_PLAN_SUCCEEDED = 'USER_DELETE_PLAN_SUCCEEDED' as const;
export const USER_DELETE_PLAN_FAILED = 'USER_DELETE_PLAN_FAILED' as const;

export interface IUserCreatePlan {
  type: typeof USER_CREATE_NEW_PLAN;
  planInfo: ICreatingPlanInfo;
}

export interface IUserCreatePlanSucceeded {
  type: typeof USER_CREATE_NEW_PLAN_SUCCEEDED;
  message: string;
}

export interface IUserCreatePlanFailed {
  type: typeof USER_CREATE_NEW_PLAN_FAILED;
  message: string;
}

export interface IUserEditPlan {
  type: typeof USER_EDIT_PLAN;
  planInfo: IEditingPlanInfo;
}

export interface IUserEditPlanSucceeded {
  type: typeof USER_EDIT_PLAN_SUCCEEDED;
  message: string;
}

export interface IUserEditPlanFailed {
  type: typeof USER_EDIT_PLAN_FAILED;
  message: string;
}

export interface IUserDeletePlan {
  type: typeof USER_DELETE_PLAN;
  id: number;
}

export interface IUserDeletePlanSucceeded {
  type: typeof USER_DELETE_PLAN_SUCCEEDED;
  message: string;
}

export interface IUserDeletePlanFailed {
  type: typeof USER_DELETE_PLAN_FAILED;
  message: string;
}

export interface ICreatingPlanInfo {
  name: string;
  data: string;
}

export interface IEditingPlanInfo {
  id: number;
  name: string;
  data: string;
}