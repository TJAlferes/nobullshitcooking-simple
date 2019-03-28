import { call, put } from 'redux-saga/effects';
import axios from 'axios';

import {
  authCheckState,
  plannerLoad,
  plannerSave,
  plannerLoadSucceeded,
  plannerLoadFailed,
  plannerSaveSucceeded,
  plannerSaveFailed
} from '../actions/index';

// our backend API 
const endpoint = process.env.NODE_ENV === 'production'
? 'http://nobullshitcookingapi-env-1.kjumrgwpyc.us-east-1.elasticbeanstalk.com'
: 'http://localhost:3003';

export function* plannerLoadSaga() {
  try {
    yield put(authCheckState());  // yield call(authCheckStateSaga()); ?
    axios.post(`${endpoint}/user/auth`, {});
    if (user) {
      yield put(plannerLoad());
      axios.post(`${endpoint}/user/plan`, {});
      yield put(plannerLoadSucceeded());
    }
  } catch (error) {
    yield put(plannerLoadFailed(error));
  }
};

export function* plannerSaveSaga() {
  try {
    yield put(authCheckState());
    const user = yield call(axios.post, `${endpoint}/user/auth`, {});
    if (user) {
      yield put(plannerSave());
      yield call(axios.post, `${endpoint}/user/plan`, {});
      yield put(plannerSaveSucceeded());
    }
  } catch (error) {
    yield put(plannerSaveFailed(error));
  }
};