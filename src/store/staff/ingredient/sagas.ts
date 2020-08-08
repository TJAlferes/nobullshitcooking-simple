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
    name,
    description,
    image,
    fullImage,
    tinyImage
  } = action.ingredientInfo;
  try {
    if (fullImage && tinyImage) {
      const res1 = yield call(
        [axios, axios.post],
        `${endpoint}/staff/get-signed-url/ingredient`,
        {fileType: fullImage.type},
        {withCredentials: true}
      );
      yield call(
        [axios, axios.put],
        res1.data.fullSignature,
        fullImage,
        {headers: {'Content-Type': fullImage.type}}
      );
      yield call(
        [axios, axios.put],
        res1.data.tinySignature,
        tinyImage,
        {headers: {'Content-Type': tinyImage.type}}
      );
      image = res1.data.fullName;
    } else {
      image = 'nobsc-ingredient-default';
    }

    const res = yield call(
      [axios, axios.post],
      `${endpoint}/staff/ingredient/create`,
      {
        ingredientInfo: {
          ingredientTypeId,
          name,
          description,
          image
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
    id,
    ingredientTypeId,
    name,
    description,
    prevImage,
    image,
    fullImage,
    tinyImage
  } = action.ingredientInfo;
  try {
    if (fullImage && tinyImage) {
      const res1 = yield call(
        [axios, axios.post],
        `${endpoint}/staff/get-signed-url/ingredient`,
        {fileType: fullImage.type},
        {withCredentials: true}
      );
      yield call(
        [axios, axios.put],
        res1.data.fullSignature,
        fullImage,
        {headers: {'Content-Type': fullImage.type}}
      );
      yield call(
        [axios, axios.put],
        res1.data.tinySignature,
        tinyImage,
        {headers: {'Content-Type': tinyImage.type}}
      );
      image = res1.data.fullName;
    } else {
      image = prevImage;
    }

    const res = yield call(
      [axios, axios.put],
      `${endpoint}/staff/ingredient/update`,
      {
        ingredientInfo: {
          id,
          ingredientTypeId,
          name,
          description,
          prevImage,
          image
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
      {withCredentials: true, data: {id: action.id}}
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