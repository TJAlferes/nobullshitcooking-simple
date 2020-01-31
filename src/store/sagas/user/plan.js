import { call, put, delay } from 'redux-saga/effects';
import axios from 'axios';

import {
  userMessageClear,
  userCreateNewPlanSucceeded,
  userCreateNewPlanFailed,
  userEditPlanSucceeded,
  userEditPlanFailed,
  userDeletePlanSucceeded,
  userDeletePlanFailed
} from '../../actions/index';

import {
  NOBSCBackendAPIEndpointOne
} from '../../../config/NOBSCBackendAPIEndpointOne';

const endpoint = NOBSCBackendAPIEndpointOne;

export function* userCreateNewPlanSaga(action) {
  try {
    const res = yield call(
      [axios, axios.post],
      `${endpoint}/user/plan/create`,
      {planInfo: action.planInfo},
      {withCredentials: true}
    );
    if (res.data.message == 'Plan created.') {
      yield put(userCreateNewPlanSucceeded(res.data.message));
      yield delay(3000);
      yield put(userMessageClear());
    } else {
      yield put(userCreateNewPlanFailed(res.data.message));
      yield delay(4000);
      yield put(userMessageClear());
    }
  } catch(err) {
    yield put(userCreateNewPlanFailed('An error occurred. Please try again.'));
    yield delay(4000);
    yield put(userMessageClear());
  }
}

export function* userEditPlanSaga(action) {
  try {
    const res = yield call(
      [axios, axios.put],
      `${endpoint}/user/plan/update`,
      {planInfo: action.planInfo},
      {withCredentials: true}
    );
    if (res.data.message == 'Plan updated.') {
      yield put(userEditPlanSucceeded(res.data.message));
      yield delay(3000);
      yield put(userMessageClear());
    } else {
      yield put(userEditPlanFailed(res.data.message));
      yield delay(4000);
      yield put(userMessageClear());
    }
  } catch(err) {
    yield put(userEditPlanFailed('An error occurred. Please try again.'));
    yield delay(4000);
    yield put(userMessageClear());
  }
}

export function* userDeletePlanSaga(action) {
  try {
    const res = yield call(
      [axios, axios.delete],
      `${endpoint}/user/plan/delete`,
      {withCredentials: true, data: {planId: action.planId}}
    );
    if (res.data.message == 'Plan deleted.') {
      yield put(userDeletePlanSucceeded(res.data.message));
      yield delay(3000);
      yield put(userMessageClear());
    } else {
      yield put(userDeletePlanFailed(res.data.message));
      yield delay(4000);
      yield put(userMessageClear());
    }
  } catch(err) {
    yield put(userDeletePlanFailed('An error occurred. Please try again.'));
    yield delay(4000);
    yield put(userMessageClear());
  }
}