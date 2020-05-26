import { call, put, delay } from 'redux-saga/effects';
import axios from 'axios';

import {
  NOBSCBackendAPIEndpointOne
} from '../../../config/NOBSCBackendAPIEndpointOne';
import { staffMessageClear } from '../actions';
import {
  staffCreateNewIngredientSucceeded,
  staffCreateNewIngredientFailed,
  staffEditIngredientSucceeded,
  staffEditIngredientFailed,
  staffDeleteIngredientSucceeded,
  staffDeleteIngredientFailed
} from './actions';
import {
  IStaffCreateNewIngredient,
  IStaffEditIngredient,
  IStaffDeleteIngredient
} from './types';

const endpoint = NOBSCBackendAPIEndpointOne;

export function* staffCreateNewIngredientSaga(
  action: IStaffCreateNewIngredient
) {
  try {
    if (
      action.ingredientInfo.fullIngredientImage &&
      action.ingredientInfo.tinyIngredientImage
    ) {
      const res1 = yield call(
        [axios, axios.post],
        `${endpoint}/staff/get-signed-url/ingredient`,
        {fileType: action.ingredientInfo.fullIngredientImage.type},
        {withCredentials: true}
      );
      yield call(
        [axios, axios.put],
        res1.data.signedRequestFullSize,
        action.ingredientInfo.fullIngredientImage,
        {headers: {'Content-Type': action.ingredientInfo.fullIngredientImage.type}}
      );
      yield call(
        [axios, axios.put],
        res1.data.signedRequestTinySize,
        action.ingredientInfo.tinyIngredientImage,
        {headers: {'Content-Type': action.ingredientInfo.tinyIngredientImage.type}}
      );
      action.ingredientInfo.ingredientImage = res1.data.urlFullSize;
    } else {
      action.ingredientInfo.ingredientImage = 'nobsc-ingredient-default';
    }

    const res = yield call(
      [axios, axios.post],
      `${endpoint}/staff/ingredient/create`,
      {ingredientInfo: action.ingredientInfo},
      {withCredentials: true}
    );

    if (res.data.message == 'Ingredient created.') {
      yield put(staffCreateNewIngredientSucceeded(res.data.message));
    } else {
      yield put(staffCreateNewIngredientFailed(res.data.message));
    }
    yield delay(4000);
    yield put(staffMessageClear());
  } catch(err) {
    yield put(staffCreateNewIngredientFailed(
      'An error occurred. Please try again.'
    ));
    yield delay(4000);
    yield put(staffMessageClear());
  }
}

export function* staffEditIngredientSaga(action: IStaffEditIngredient) {
  try {
    if (
      action.ingredientInfo.fullIngredientImage &&
      action.ingredientInfo.tinyIngredientImage
    ) {
      const res1 = yield call(
        [axios, axios.post],
        `${endpoint}/staff/get-signed-url/ingredient`,
        {fileType: action.ingredientInfo.fullIngredientImage.type},
        {withCredentials: true}
      );
      yield call(
        [axios, axios.put],
        res1.data.signedRequestFullSize,
        action.ingredientInfo.fullIngredientImage,
        {headers: {'Content-Type': action.ingredientInfo.fullIngredientImage.type}}
      );
      yield call(
        [axios, axios.put],
        res1.data.signedRequestTinySize,
        action.ingredientInfo.tinyIngredientImage,
        {headers: {'Content-Type': action.ingredientInfo.tinyIngredientImage.type}}
      );
      action.ingredientInfo.ingredientImage = res1.data.urlFullSize;
    } else {
      action.ingredientInfo.ingredientImage = action.ingredientInfo.prevIngredientImage;
    }

    const res = yield call(
      [axios, axios.put],
      `${endpoint}/staff/ingredient/update`,
      {ingredientInfo: action.ingredientInfo},
      {withCredentials: true}
    );

    if (res.data.message == 'Ingredient updated.') {
      yield put(staffEditIngredientSucceeded(res.data.message));
    } else {
      yield put(staffEditIngredientFailed(res.data.message));
    }
    yield delay(4000);
    yield put(staffMessageClear());
  } catch(err) {
    yield put(staffEditIngredientFailed(
      'An error occurred. Please try again.'
    ));
    yield delay(4000);
    yield put(staffMessageClear());
  }
}

export function* staffDeleteIngredientSaga(action: IStaffDeleteIngredient) {
  try {
    const res = yield call(
      [axios, axios.delete],
      `${endpoint}/staff/ingredient/delete`,
      {withCredentials: true, data: {ingredientId: action.ingredientId}}
    );
    if (res.data.message == 'Ingredient deleted.') {
      yield put(staffDeleteIngredientSucceeded(res.data.message));
    } else {
      yield put(staffDeleteIngredientFailed(res.data.message));
    }
    yield delay(4000);
    yield put(staffMessageClear());
  } catch(err) {
    yield put(staffDeleteIngredientFailed(
      'An error occurred. Please try again.'
    ));
    yield delay(4000);
    yield put(staffMessageClear());
  }
}