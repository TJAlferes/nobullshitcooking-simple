import { call, put, delay } from 'redux-saga/effects';
import axios from 'axios';

import {
  userMessageClear,
  userCreateNewPrivateEquipmentSucceeded,
  userCreateNewPrivateEquipmentFailed,
  userEditPrivateEquipmentSucceeded,
  userEditPrivateEquipmentFailed,
  userDeletePrivateEquipmentSucceeded,
  userDeletePrivateEquipmentFailed
} from '../../actions/index';

import {
  NOBSCBackendAPIEndpointOne
} from '../../../config/NOBSCBackendAPIEndpointOne';
const endpoint = NOBSCBackendAPIEndpointOne;

export function* userCreateNewPrivateEquipmentSaga(action) {
  try {
    if (
      action.equipmentInfo.fullEquipmentImage &&
      action.equipmentInfo.tinyEquipmentImage
    ) {
      const res1 = yield call(
        [axios, axios.post],
        `${endpoint}/user/get-signed-url/equipment`,
        {fileType: action.equipmentInfo.fullEquipmentImage.type},
        {withCredentials: true}
      );
      yield call(
        [axios, axios.put],
        res1.data.signedRequestFullSize,
        action.equipmentInfo.fullEquipmentImage,
        {headers: {'Content-Type': action.equipmentInfo.fullEquipmentImage.type}}
      );
      yield call(
        [axios, axios.put],
        res1.data.signedRequestTinySize,
        action.equipmentInfo.tinyEquipmentImage,
        {headers: {'Content-Type': action.equipmentInfo.tinyEquipmentImage.type}}
      );
      action.equipmentInfo.equipmentImage = res1.data.urlFullSize;
    } else {
      action.equipmentInfo.equipmentImage = 'nobsc-equipment-default';
    }

    const res = yield call(
      [axios, axios.post],
      `${endpoint}/user/equipment/create`,
      {equipmentInfo: action.equipmentInfo},
      {withCredentials: true}
    );

    if (res.data.message == 'Equipment created.') {
      yield put(userCreateNewPrivateEquipmentSucceeded(res.data.message));
      yield delay(3000);
      yield put(userMessageClear());
    } else {
      yield put(userCreateNewPrivateEquipmentFailed(res.data.message));
      yield delay(4000);
      yield put(userMessageClear());
    }
  } catch(err) {
    yield put(userCreateNewPrivateEquipmentFailed('An error occurred. Please try again.'));
    yield delay(4000);
    yield put(userMessageClear());
  }
}

export function* userEditPrivateEquipmentSaga(action) {
  try {
    if (
      action.equipmentInfo.fullEquipmentImage &&
      action.equipmentInfo.tinyEquipmentImage
    ) {
      const res1 = yield call(
        [axios, axios.post],
        `${endpoint}/user/get-signed-url/equipment`,
        {fileType: action.equipmentInfo.fullEquipmentImage.type},
        {withCredentials: true}
      );
      yield call(
        [axios, axios.put],
        res1.data.signedRequestFullSize,
        action.equipmentInfo.fullEquipmentImage,
        {headers: {'Content-Type': action.equipmentInfo.fullEquipmentImage.type}}
      );
      yield call(
        [axios, axios.put],
        res1.data.signedRequestTinySize,
        action.equipmentInfo.tinyEquipmentImage,
        {headers: {'Content-Type': action.equipmentInfo.tinyEquipmentImage.type}}
      );
      action.equipmentInfo.equipmentImage = res1.data.urlFullSize;
    } else {
      action.equipmentInfo.equipmentImage = action.equipmentInfo.prevEquipmentImage;
    }

    const res = yield call(
      [axios, axios.put],
      `${endpoint}/user/equipment/update`,
      {equipmentInfo: action.equipmentInfo},
      {withCredentials: true}
    );

    if (res.data.message == 'Equipment updated.') {
      yield put(userEditPrivateEquipmentSucceeded(res.data.message));
      yield delay(3000);
      yield put(userMessageClear());
    } else {
      yield put(userEditPrivateEquipmentFailed(res.data.message));
      yield delay(4000);
      yield put(userMessageClear());
    }
  } catch(err) {
    yield put(userEditPrivateEquipmentFailed('An error occurred. Please try again.'));
    yield delay(4000);
    yield put(userMessageClear());
  }
}

export function* userDeletePrivateEquipmentSaga(action) {
  try {
    const res = yield call(
      [axios, axios.delete],
      `${endpoint}/user/equipment/delete`,
      {withCredentials: true, data: {equipmentId: action.equipmentId}}
    );
    if (res.data.message == 'Equipment deleted.') {
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