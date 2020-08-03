import axios from 'axios';
import { call, delay, put } from 'redux-saga/effects';

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
  let {
    ingredientTypeId,
    ingredientName,
    ingredientDescription,
    ingredientImage,
    ingredientFullImage,
    ingredientTinyImage
  } = action.ingredientInfo;
  try {
    if (ingredientFullImage && ingredientTinyImage) {
      const res1 = yield call(
        [axios, axios.post],
        `${endpoint}/staff/get-signed-url/ingredient`,
        {fileType: ingredientFullImage.type},
        {withCredentials: true}
      );
      yield call(
        [axios, axios.put],
        res1.data.signedRequestFullSize,
        ingredientFullImage,
        {headers: {'Content-Type': ingredientFullImage.type}}
      );
      yield call(
        [axios, axios.put],
        res1.data.signedRequestTinySize,
        ingredientTinyImage,
        {headers: {'Content-Type': ingredientTinyImage.type}}
      );
      ingredientImage = res1.data.urlFullSize;
    } else {
      ingredientImage = 'nobsc-ingredient-default';
    }

    const res = yield call(
      [axios, axios.post],
      `${endpoint}/staff/ingredient/create`,
      {
        ingredientInfo: {
          ingredientTypeId,
          ingredientName,
          ingredientDescription,
          ingredientImage,
          ingredientFullImage,
          ingredientTinyImage
        }
      },
      {withCredentials: true}
    );

    const { message } = res.data;

    if (message == 'Ingredient created.') {
      yield put(staffCreateNewIngredientSucceeded(message));
    } else {
      yield put(staffCreateNewIngredientFailed(message));
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
  let {
    ingredientId,
    ingredientTypeId,
    ingredientName,
    ingredientDescription,
    ingredientPrevImage,
    ingredientImage,
    ingredientFullImage,
    ingredientTinyImage
  } = action.ingredientInfo;
  try {
    if (ingredientFullImage && ingredientTinyImage) {
      const res1 = yield call(
        [axios, axios.post],
        `${endpoint}/staff/get-signed-url/ingredient`,
        {fileType: ingredientFullImage.type},
        {withCredentials: true}
      );
      yield call(
        [axios, axios.put],
        res1.data.signedRequestFullSize,
        ingredientFullImage,
        {headers: {'Content-Type': ingredientFullImage.type}}
      );
      yield call(
        [axios, axios.put],
        res1.data.signedRequestTinySize,
        ingredientTinyImage,
        {headers: {'Content-Type': ingredientTinyImage.type}}
      );
      ingredientImage = res1.data.urlFullSize;
    } else {
      ingredientImage = ingredientPrevImage;
    }

    const res = yield call(
      [axios, axios.put],
      `${endpoint}/staff/ingredient/update`,
      {
        ingredientInfo: {
          ingredientId,
          ingredientTypeId,
          ingredientName,
          ingredientDescription,
          ingredientPrevImage,
          ingredientImage,
          ingredientFullImage,
          ingredientTinyImage
        }
      },
      {withCredentials: true}
    );

    const { message } = res.data;

    if (message == 'Ingredient updated.') {
      yield put(staffEditIngredientSucceeded(message));
    } else {
      yield put(staffEditIngredientFailed(message));
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
    const { message } = res.data;
    if (message == 'Ingredient deleted.') {
      yield put(staffDeleteIngredientSucceeded(message));
    } else {
      yield put(staffDeleteIngredientFailed(message));
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