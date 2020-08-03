import axios from 'axios';
import { call, delay, put } from 'redux-saga/effects';

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
  let {
    equipmentTypeId,
    equipmentName,
    equipmentDescription,
    equipmentImage,
    equipmentFullImage,
    equipmentTinyImage
  } = action.equipmentInfo;
  try {
    if (equipmentFullImage && equipmentTinyImage) {
      const res1 = yield call(
        [axios, axios.post],
        `${endpoint}/staff/get-signed-url/equipment`,
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
      `${endpoint}/staff/equipment/create`,
      {
        equipmentInfo: {
          equipmentTypeId,
          equipmentName,
          equipmentDescription,
          equipmentImage,
          equipmentFullImage,
          equipmentTinyImage
        }
      },
      {withCredentials: true}
    );

    const { message } = res.data;

    if (message == 'Equipment created.') {
      yield put(staffCreateNewEquipmentSucceeded(message));
    } else {
      yield put(staffCreateNewEquipmentFailed(message));
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
    if (equipmentFullImage && equipmentTinyImage) {
      const res1 = yield call(
        [axios, axios.post],
        `${endpoint}/staff/get-signed-url/equipment`,
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
      `${endpoint}/staff/equipment/update`,
      {
        equipmentInfo: {
          equipmentId,
          equipmentTypeId,
          equipmentName,
          equipmentDescription,
          equipmentPrevImage,
          equipmentImage,
          equipmentFullImage,
          equipmentTinyImage
        }
      },
      {withCredentials: true}
    );

    const { message } = res.data;

    if (message == 'Equipment updated.') {
      yield put(staffEditEquipmentSucceeded(message));
    } else {
      yield put(staffEditEquipmentFailed(message));
    }
    yield delay(4000);
    yield put(staffMessageClear());
  } catch(err) {
    yield put(staffEditEquipmentFailed('An error occurred. Please try again.'));
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
    const { message } = res.data;
    if (message == 'Equipment deleted.') {
      yield put(staffDeleteEquipmentSucceeded(message));
    } else {
      yield put(staffDeleteEquipmentFailed(message));
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