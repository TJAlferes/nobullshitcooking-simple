import axios from 'axios';
import { call, delay, put } from 'redux-saga/effects';

import {
  NOBSCBackendAPIEndpointOne
} from '../../../config/NOBSCBackendAPIEndpointOne';
import { userMessageClear } from '../actions';
import {
  userCreateNewPrivateIngredientSucceeded,
  userCreateNewPrivateIngredientFailed,
  userEditPrivateIngredientSucceeded,
  userEditPrivateIngredientFailed,
  userDeletePrivateIngredientSucceeded,
  userDeletePrivateIngredientFailed
} from './actions';
import {
  IUserCreateNewPrivateIngredient,
  IUserEditPrivateIngredient,
  IUserDeletePrivateIngredient
} from './types';

const endpoint = NOBSCBackendAPIEndpointOne;

export function* userCreateNewPrivateIngredientSaga(
  action: IUserCreateNewPrivateIngredient
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
        `${endpoint}/user/get-signed-url/ingredient`,
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
      `${endpoint}/user/ingredient/create`,
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
      yield put(userCreateNewPrivateIngredientSucceeded(message));
    } else {
      yield put(userCreateNewPrivateIngredientFailed(message));
    }
    yield delay(4000);
    yield put(userMessageClear());
  } catch(err) {
    yield put(userCreateNewPrivateIngredientFailed(
      'An error occurred. Please try again.'
    ));
    yield delay(4000);
    yield put(userMessageClear());
  }
}

export function* userEditPrivateIngredientSaga(
  action: IUserEditPrivateIngredient
) {
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
        `${endpoint}/user/get-signed-url/ingredient`,
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
      `${endpoint}/user/ingredient/update`,
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
      yield put(userEditPrivateIngredientSucceeded(message));
    } else {
      yield put(userEditPrivateIngredientFailed(message));
    }
    yield delay(4000);
    yield put(userMessageClear());
  } catch(err) {
    yield put(userEditPrivateIngredientFailed(
      'An error occurred. Please try again.'
    ));
    yield delay(4000);
    yield put(userMessageClear());
  }
}

export function* userDeletePrivateIngredientSaga(
  action: IUserDeletePrivateIngredient
) {
  try {
    const res = yield call(
      [axios, axios.delete],
      `${endpoint}/user/ingredient/delete`,
      {withCredentials: true, data: {ingredientId: action.ingredientId}}
    );
    const { message } = res.data;
    if (message == 'Ingredient deleted.') {
      yield put(userDeletePrivateIngredientSucceeded(message));
    } else {
      yield put(userDeletePrivateIngredientFailed(message));
    }
    yield delay(4000);
    yield put(userMessageClear());
  } catch(err) {
    yield put(userDeletePrivateIngredientFailed(
      'An error occurred. Please try again.'
    ));
    yield delay(4000);
    yield put(userMessageClear());
  }
}