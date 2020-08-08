import axios from 'axios';
import { call, delay, put } from 'redux-saga/effects';

import {
  NOBSCBackendAPIEndpointOne
} from '../../../config/NOBSCBackendAPIEndpointOne';
import { userMessageClear } from '../actions';
import {
  userCreateNewPlanSucceeded,
  userCreateNewPlanFailed,
  userEditPlanSucceeded,
  userEditPlanFailed,
  userDeletePlanSucceeded,
  userDeletePlanFailed
} from './actions';
import { IUserCreatePlan, IUserEditPlan, IUserDeletePlan } from './types';

const endpoint = NOBSCBackendAPIEndpointOne;

export function* userCreateNewPlanSaga(action: IUserCreatePlan) {
  try {
    const res = yield call(
      [axios, axios.post],
      `${endpoint}/user/plan/create`,
      {planInfo: action.planInfo},
      {withCredentials: true}
    );
    const { message } = res.data;
    if (message == 'Plan created.') {
      yield put(userCreateNewPlanSucceeded(message));
      yield delay(3000);
    } else {
      yield put(userCreateNewPlanFailed(message));
      yield delay(4000);
    }
    yield put(userMessageClear());
  } catch(err) {
    yield put(userCreateNewPlanFailed('An error occurred. Please try again.'));
    yield delay(4000);
    yield put(userMessageClear());
  }
}

export function* userEditPlanSaga(action: IUserEditPlan) {
  try {
    const res = yield call(
      [axios, axios.put],
      `${endpoint}/user/plan/update`,
      {planInfo: action.planInfo},
      {withCredentials: true}
    );
    const { message } = res.data;
    if (message == 'Plan updated.') {
      yield put(userEditPlanSucceeded(message));
      yield delay(3000);
    } else {
      yield put(userEditPlanFailed(message));
      yield delay(4000);
    }
    yield put(userMessageClear());
  } catch(err) {
    yield put(userEditPlanFailed('An error occurred. Please try again.'));
    yield delay(4000);
    yield put(userMessageClear());
  }
}

export function* userDeletePlanSaga(action: IUserDeletePlan) {
  try {
    const res = yield call(
      [axios, axios.delete],
      `${endpoint}/user/plan/delete`,
      {withCredentials: true, data: {id: action.id}}
    );
    const { message } = res.data;
    if (message == 'Plan deleted.') {
      yield put(userDeletePlanSucceeded(message));
      yield delay(3000);
    } else {
      yield put(userDeletePlanFailed(message));
      yield delay(4000);
    }
    yield put(userMessageClear());
  } catch(err) {
    yield put(userDeletePlanFailed('An error occurred. Please try again.'));
    yield delay(4000);
    yield put(userMessageClear());
  }
}