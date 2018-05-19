import { takeEvery } from 'redux-saga/effects';
//takeLatest
//all

import * as actionTypes from '../actions/actionTypes';
import { sampleSaga } from './sample';
import { ingredientsSaga } from './ingredients';

function* watchSample() {
  yield takeEvery(actionTypes.SAMPLE, sampleSaga);
}

function* watchIngredients() {
  //yield
}