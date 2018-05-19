import { put } from 'redux-saga/effects';
//import { call, put } from 'redux-saga/effects';

import * as actions from '../actions/index';

export function* sampleSaga(action) {
  //yield call([console, 'log'], 'sample saga');  this is easier to test
  yield console.log('sample saga');
  put(actions.sample());
}