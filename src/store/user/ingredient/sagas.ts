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
        `${endpoint}/user/get-signed-url/ingredient`,
        {fileType: fullImage.type},
        {withCredentials: true}
      );
      yield call(
        [axios, axios.put],
        res1.data.signedRequestFullSize,
        fullImage,
        {headers: {'Content-Type': fullImage.type}}
      );
      yield call(
        [axios, axios.put],
        res1.data.signedRequestTinySize,
        tinyImage,
        {headers: {'Content-Type': tinyImage.type}}
      );
      image = res1.data.urlFullSize;
    } else {
      image = 'nobsc-ingredient-default';
    }

    const res = yield call(
      [axios, axios.post],
      `${endpoint}/user/ingredient/create`,
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
        `${endpoint}/user/get-signed-url/ingredient`,
        {fileType: fullImage.type},
        {withCredentials: true}
      );
      yield call(
        [axios, axios.put],
        res1.data.signedRequestFullSize,
        fullImage,
        {headers: {'Content-Type': fullImage.type}}
      );
      yield call(
        [axios, axios.put],
        res1.data.signedRequestTinySize,
        tinyImage,
        {headers: {'Content-Type': tinyImage.type}}
      );
      image = res1.data.urlFullSize;
    } else {
      image = prevImage;
    }

    const res = yield call(
      [axios, axios.put],
      `${endpoint}/user/ingredient/update`,
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
      {withCredentials: true, data: {id: action.id}}
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