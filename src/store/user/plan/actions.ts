import {
  USER_CREATE_NEW_PLAN,
  USER_CREATE_NEW_PLAN_SUCCEEDED,
  USER_CREATE_NEW_PLAN_FAILED,
  USER_EDIT_PLAN,
  USER_EDIT_PLAN_SUCCEEDED,
  USER_EDIT_PLAN_FAILED,
  USER_DELETE_PLAN,
  USER_DELETE_PLAN_SUCCEEDED,
  USER_DELETE_PLAN_FAILED,
  ICreatingPlanInfo,
  IEditingPlanInfo
} from './types';

export const userCreateNewPlan = (planInfo: ICreatingPlanInfo) => ({
  type: USER_CREATE_NEW_PLAN,
  planInfo
});

export const userCreateNewPlanSucceeded = (message: string) => ({
  type: USER_CREATE_NEW_PLAN_SUCCEEDED,
  message
});

export const userCreateNewPlanFailed = (message: string) => ({
  type: USER_CREATE_NEW_PLAN_FAILED,
  message
});

export const userEditPlan = (planInfo: IEditingPlanInfo) => ({
  type: USER_EDIT_PLAN,
  planInfo
});

export const userEditPlanSucceeded = (message: string) => ({
  type: USER_EDIT_PLAN_SUCCEEDED,
  message
});

export const userEditPlanFailed = (message: string) => ({
  type: USER_EDIT_PLAN_FAILED,
  message
});

export const userDeletePlan = (id: number) => ({
  type: USER_DELETE_PLAN,
  id
});

export const userDeletePlanSucceeded = (message: string) => ({
  type: USER_DELETE_PLAN_SUCCEEDED,
  message
});

export const userDeletePlanFailed = (message: string) => ({
  type: USER_DELETE_PLAN_FAILED,
  message
});