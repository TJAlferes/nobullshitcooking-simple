import { call, put, delay } from 'redux-saga/effects';
import axios from 'axios';

import {
  userMessageClear,
  userCreateNewPrivateEquipmentSucceeded,
  userCreateNewPrivateEquipmentFailed,
  userEditPrivateEquipmentSucceeded,
  userEditPrivateEquipmentFailed,
  userDeletePrivateEquipmentSucceeded,
  userDeletePrivateEquipmentFailed,
  userCreateNewPrivateIngredientSucceeded,
  userCreateNewPrivateIngredientFailed,
  userEditPrivateIngredientSucceeded,
  userEditPrivateIngredientFailed,
  userDeletePrivateIngredientSucceeded,
  userDeletePrivateIngredientFailed,
  userCreateNewPrivateRecipeSucceeded,
  userCreateNewPrivateRecipeFailed,
  userEditPrivateRecipeSucceeded,
  userEditPrivateRecipeFailed,
  userDeletePrivateRecipeSucceeded,
  userDeletePrivateRecipeFailed,
  userCreateNewPublicRecipeSucceeded,
  userCreateNewPublicRecipeFailed,
  userEditPubicRecipeSucceeded,
  userEditPubicRecipeFailed,
  userDisownPublicRecipeSucceeded,
  userDisownPublicRecipeFailed,
  userCreateNewPlanSucceeded,
  userCreateNewPlanFailed,
  userEditPlanSucceeded,
  userEditPlanFailed,
  userDeletePlanSucceeded,
  userDeletePlanFailed,
  userFavoriteRecipeSucceeded,
  userFavoriteRecipeFailed,
  userUnfavoriteRecipeSucceeded,
  userUnfavoriteRecipeFailed,
  userSaveRecipeSucceeded,
  userSaveRecipeFailed,
  userUnsaveRecipeSucceeded,
  userUnsaveRecipeFailed
} from '../actions/index';

import { NOBSCBackendAPIEndpointOne } from '../../config/NOBSCBackendAPIEndpointOne';
const endpoint = NOBSCBackendAPIEndpointOne;



/*
equipment
*/

export function* userCreateNewPrivateEquipmentSaga(action) {
  try {
    const res = yield axios.post(
      `${endpoint}/user/equipment/create`,
      {equipmentInfo: action.equipmentInfo},
      {withCredentials: true}
    );
    if (res.data.message == 'Equipment created.') {
      //yield put();  refresh/update respective list
      yield put(userCreateNewPrivateEquipmentSucceeded(res.data.message));
    } else {
      yield put(userCreateNewPrivateEquipmentFailed(res.data.message));
    }
    yield delay(4000);
    yield put(userMessageClear());
  } catch(err) {
    yield put(userCreateNewPrivateEquipmentFailed('An error occurred. Please try again.'));
    yield delay(4000);
    yield put(userMessageClear());
  }
}

export function* userEditPrivateEquipmentSaga(action) {
  try {
    const res = yield axios.put(
      `${endpoint}/user/equipment/update`,
      {equipmentInfo: action.equipmentInfo},
      {withCredentials: true}
    );
    if (res.data.message == 'Equipment updated.') {
      //yield put();  refresh/update respective list
      yield put(userEditPrivateEquipmentSucceeded(res.data.message));
    } else {
      yield put(userEditPrivateEquipmentFailed(res.data.message));
    }
    yield delay(4000);
    yield put(userMessageClear());
  } catch(err) {
    yield put(userEditPrivateEquipmentFailed('An error occurred. Please try again.'));
    yield delay(4000);
    yield put(userMessageClear());
  }
}

export function* userDeletePrivateEquipmentSaga(action) {
  try {
    const res = yield axios.delete(
      `${endpoint}/user/equipment/delete`,
      {equipmentInfo: action.equipmentInfo},
      {withCredentials: true}
    );
    if (res.data.message == 'Equipment deleted.') {
      //yield put();  refresh/update respective list
      yield put(userDeletePrivateEquipmentSucceeded(res.data.message));
    } else {
      yield put(userDeletePrivateEquipmentFailed(res.data.message));
    }
    yield delay(4000);
    yield put(userMessageClear());
  } catch(err) {
    yield put(userDeletePrivateEquipmentFailed('An error occurred. Please try again.'));
    yield delay(4000);
    yield put(userMessageClear());
  }
}