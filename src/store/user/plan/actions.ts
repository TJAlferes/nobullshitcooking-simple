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
  CreatingPlanInfo,
  EditingPlanInfo
} from './types';

export const userCreateNewPlan = (planInfo: CreatingPlanInfo) => ({
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

export const userEditPlan = (planInfo: EditingPlanInfo) => ({
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

export const userDeletePlan = (planId: number) => ({
  type: USER_DELETE_PLAN,
  planId
});

export const userDeletePlanSucceeded = (message: string) => ({
  type: USER_DELETE_PLAN_SUCCEEDED,
  message
});

export const userDeletePlanFailed = (message: string) => ({
  type: USER_DELETE_PLAN_FAILED,
  message
});