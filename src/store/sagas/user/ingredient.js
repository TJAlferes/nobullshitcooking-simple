import { call, put, delay } from 'redux-saga/effects';
import axios from 'axios';

import {
  userMessageClear,
  userCreateNewPrivateIngredientSucceeded,
  userCreateNewPrivateIngredientFailed,
  userEditPrivateIngredientSucceeded,
  userEditPrivateIngredientFailed,
  userDeletePrivateIngredientSucceeded,
  userDeletePrivateIngredientFailed
} from '../../actions/index';

import {
  NOBSCBackendAPIEndpointOne
} from '../../../config/NOBSCBackendAPIEndpointOne';

const endpoint = NOBSCBackendAPIEndpointOne;

export function* userCreateNewPrivateIngredientSaga(action) {
  try {
    if (
      action.ingredientInfo.fullIngredientImage &&
      action.ingredientInfo.tinyIngredientImage
    ) {
      const res1 = yield call(
        [axios, axios.post],
        `${endpoint}/user/get-signed-url/ingredient`,
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
      `${endpoint}/user/ingredient/create`,
      {ingredientInfo: action.ingredientInfo},
      {withCredentials: true}
    );

    if (res.data.message == 'Ingredient created.') {
      yield put(userCreateNewPrivateIngredientSucceeded(res.data.message));
      yield delay(3000);
      yield put(userMessageClear());
    } else {
      yield put(userCreateNewPrivateIngredientFailed(res.data.message));
      yield delay(4000);
      yield put(userMessageClear());
    }
  } catch(err) {
    yield put(userCreateNewPrivateIngredientFailed('An error occurred. Please try again.'));
    yield delay(4000);
    yield put(userMessageClear());
  }
}

export function* userEditPrivateIngredientSaga(action) {
  try {
    if (
      action.ingredientInfo.fullIngredientImage &&
      action.ingredientInfo.tinyIngredientImage
    ) {
      const res1 = yield call(
        [axios, axios.post],
        `${endpoint}/user/get-signed-url/ingredient`,
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
      `${endpoint}/user/ingredient/update`,
      {ingredientInfo: action.ingredientInfo},
      {withCredentials: true}
    );

    if (res.data.message == 'Ingredient updated.') {
      yield put(userEditPrivateIngredientSucceeded(res.data.message));
      yield delay(3000);
      yield put(userMessageClear());
    } else {
      yield put(userEditPrivateIngredientFailed(res.data.message));
      yield delay(4000);
      yield put(userMessageClear());
    }
  } catch(err) {
    yield put(userEditPrivateIngredientFailed('An error occurred. Please try again.'));
    yield delay(4000);
    yield put(userMessageClear());
  }
}

export function* userDeletePrivateIngredientSaga(action) {
  try {
    const res = yield call(
      [axios, axios.delete],
      `${endpoint}/user/ingredient/delete`,
      {withCredentials: true, data: {ingredientId: action.ingredientId}}
    );
    if (res.data.message == 'Ingredient deleted.') {
      yield put(userDeletePrivateIngredientSucceeded(res.data.message));
    } else {
      yield put(userDeletePrivateIngredientFailed(res.data.message));
    }
    yield delay(4000);
    yield put(userMessageClear());
  } catch(err) {
    yield put(userDeletePrivateIngredientFailed('An error occurred. Please try again.'));
    yield delay(4000);
    yield put(userMessageClear());
  }
}