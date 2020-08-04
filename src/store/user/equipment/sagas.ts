import axios from 'axios';
import { call, delay, put } from 'redux-saga/effects';

import {
  NOBSCBackendAPIEndpointOne
} from '../../../config/NOBSCBackendAPIEndpointOne';
import { userMessageClear } from '../actions';
import {
  userCreateNewPrivateEquipmentSucceeded,
  userCreateNewPrivateEquipmentFailed,
  userEditPrivateEquipmentSucceeded,
  userEditPrivateEquipmentFailed,
  userDeletePrivateEquipmentSucceeded,
  userDeletePrivateEquipmentFailed
} from './actions';
import {
  IUserCreateNewPrivateEquipment,
  IUserEditPrivateEquipment,
  IUserDeletePrivateEquipment
} from './types';

const endpoint = NOBSCBackendAPIEndpointOne;

export function* userCreateNewPrivateEquipmentSaga(
  action: IUserCreateNewPrivateEquipment
) {
  let {
    equipmentTypeId,
    equipmentName,
    equipmentDescription,
    equipmentImage,
    equipmentFullImage,
    equipmentTinyImage
  } = action.equipmentInfo;
  try {
    if (
      equipmentFullImage &&
      equipmentTinyImage
    ) {
      const res1 = yield call(
        [axios, axios.post],
        `${endpoint}/user/get-signed-url/equipment`,
        {fileType: equipmentFullImage.type},
        {withCredentials: true}
      );
      yield call(
        [axios, axios.put],
        res1.data.signedRequestFullSize,
        equipmentFullImage,
        {headers: {'Content-Type': equipmentFullImage.type}}
      );
      yield call(
        [axios, axios.put],
        res1.data.signedRequestTinySize,
        equipmentTinyImage,
        {headers: {'Content-Type': equipmentTinyImage.type}}
      );
      equipmentImage = res1.data.urlFullSize;
    } else {
      equipmentImage = 'nobsc-equipment-default';
    }

    const res = yield call(
      [axios, axios.post],
      `${endpoint}/user/equipment/create`,
      {
        equipmentInfo: {
          equipmentTypeId,
          equipmentName,
          equipmentDescription,
          equipmentImage
        }
      },
      {withCredentials: true}
    );

    const { message } = res.data;

    if (message == 'Equipment created.') {
      yield put(userCreateNewPrivateEquipmentSucceeded(message));
    } else {
      yield put(userCreateNewPrivateEquipmentFailed(message));
    }
    yield delay(4000);
    yield put(userMessageClear());
  } catch(err) {
    yield put(userCreateNewPrivateEquipmentFailed(
      'An error occurred. Please try again.'
    ));
    yield delay(4000);
    yield put(userMessageClear());
  }
}

export function* userEditPrivateEquipmentSaga(
  action: IUserEditPrivateEquipment
) {
  let {
    equipmentId,
    equipmentTypeId,
    equipmentName,
    equipmentDescription,
    equipmentPrevImage,
    equipmentImage,
    equipmentFullImage,
    equipmentTinyImage
  } = action.equipmentInfo;
  try {
    if (
      equipmentFullImage &&
      equipmentTinyImage
    ) {
      const res1 = yield call(
        [axios, axios.post],
        `${endpoint}/user/get-signed-url/equipment`,
        {fileType: equipmentFullImage.type},
        {withCredentials: true}
      );
      yield call(
        [axios, axios.put],
        res1.data.signedRequestFullSize,
        equipmentFullImage,
        {headers: {'Content-Type': equipmentFullImage.type}}
      );
      yield call(
        [axios, axios.put],
        res1.data.signedRequestTinySize,
        equipmentTinyImage,
        {headers: {'Content-Type': equipmentTinyImage.type}}
      );
      equipmentImage = res1.data.urlFullSize;
    } else {
      equipmentImage = equipmentPrevImage;
    }

    const res = yield call(
      [axios, axios.put],
      `${endpoint}/user/equipment/update`,
      {
        equipmentInfo: {
          equipmentId,
          equipmentTypeId,
          equipmentName,
          equipmentDescription,
          equipmentPrevImage,
          equipmentImage
        }
      },
      {withCredentials: true}
    );

    const { message } = res.data;

    if (message == 'Equipment updated.') {
      yield put(userEditPrivateEquipmentSucceeded(message));
    } else {
      yield put(userEditPrivateEquipmentFailed(message));
    }
    yield delay(4000);
    yield put(userMessageClear());
  } catch(err) {
    yield put(userEditPrivateEquipmentFailed(
      'An error occurred. Please try again.'
    ));
    yield delay(4000);
    yield put(userMessageClear());
  }
}

export function* userDeletePrivateEquipmentSaga(
  action: IUserDeletePrivateEquipment
) {
  try {
    const res = yield call(
      [axios, axios.delete],
      `${endpoint}/user/equipment/delete`,
      {withCredentials: true, data: {equipmentId: action.equipmentId}}
    );
    const { message } = res.data;
    if (message == 'Equipment deleted.') {
      yield put(userDeletePrivateEquipmentSucceeded(message));
    } else {
      yield put(userDeletePrivateEquipmentFailed(message));
    }
    yield delay(4000);
    yield put(userMessageClear());
  } catch(err) {
    yield put(userDeletePrivateEquipmentFailed(
      'An error occurred. Please try again.'
    ));
    yield delay(4000);
    yield put(userMessageClear());
  }
}