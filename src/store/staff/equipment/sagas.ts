import { call, put, delay } from 'redux-saga/effects';
import axios from 'axios';

import {
  NOBSCBackendAPIEndpointOne
} from '../../../config/NOBSCBackendAPIEndpointOne';
import { staffMessageClear } from '../actions';
import {
  staffCreateNewEquipmentSucceeded,
  staffCreateNewEquipmentFailed,
  staffEditEquipmentSucceeded,
  staffEditEquipmentFailed,
  staffDeleteEquipmentSucceeded,
  staffDeleteEquipmentFailed
} from './actions';
import {
  IStaffCreateNewEquipment,
  IStaffEditEquipment,
  IStaffDeleteEquipment
} from './types';

const endpoint = NOBSCBackendAPIEndpointOne;

export function* staffCreateNewEquipmentSaga(action: IStaffCreateNewEquipment) {
  try {
    if (
      action.equipmentInfo.fullEquipmentImage &&
      action.equipmentInfo.tinyEquipmentImage
    ) {
      const res1 = yield call(
        [axios, axios.post],
        `${endpoint}/staff/get-signed-url/equipment`,
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
      `${endpoint}/staff/equipment/create`,
      {equipmentInfo: action.equipmentInfo},
      {withCredentials: true}
    );

    if (res.data.message == 'Equipment created.') {
      yield put(staffCreateNewEquipmentSucceeded(res.data.message));
    } else {
      yield put(staffCreateNewEquipmentFailed(res.data.message));
    }
    yield delay(4000);
    yield put(staffMessageClear());
  } catch(err) {
    yield put(staffCreateNewEquipmentFailed(
      'An error occurred. Please try again.'
    ));
    yield delay(4000);
    yield put(staffMessageClear());
  }
}

export function* staffEditEquipmentSaga(action: IStaffEditEquipment) {
  try {
    if (
      action.equipmentInfo.fullEquipmentImage &&
      action.equipmentInfo.tinyEquipmentImage
    ) {
      const res1 = yield call(
        [axios, axios.post],
        `${endpoint}/staff/get-signed-url/equipment`,
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
      `${endpoint}/staff/equipment/update`,
      {equipmentInfo: action.equipmentInfo},
      {withCredentials: true}
    );

    if (res.data.message == 'Equipment updated.') {
      yield put(staffEditEquipmentSucceeded(res.data.message));
    } else {
      yield put(staffEditEquipmentFailed(res.data.message));
    }
    yield delay(4000);
    yield put(staffMessageClear());
  } catch(err) {
    yield put(staffEditEquipmentFailed(
      'An error occurred. Please try again.'
    ));
    yield delay(4000);
    yield put(staffMessageClear());
  }
}

export function* staffDeleteEquipmentSaga(action: IStaffDeleteEquipment) {
  try {
    const res = yield call(
      [axios, axios.delete],
      `${endpoint}/staff/equipment/delete`,
      {withCredentials: true, data: {equipmentId: action.equipmentId}}
    );
    if (res.data.message == 'Equipment deleted.') {
      yield put(staffDeleteEquipmentSucceeded(res.data.message));
    } else {
      yield put(staffDeleteEquipmentFailed(res.data.message));
    }
    yield delay(4000);
    yield put(staffMessageClear());
  } catch(err) {
    yield put(staffDeleteEquipmentFailed(
      'An error occurred. Please try again.'
    ));
    yield delay(4000);
    yield put(staffMessageClear());
  }
}