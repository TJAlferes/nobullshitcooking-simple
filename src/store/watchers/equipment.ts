import { all, takeEvery } from 'redux-saga/effects';

import {
  dataGetEquipmentsSaga,
  dataGetMyPrivateEquipmentsSaga
} from '../data/sagas';
import {
  staffCreateNewEquipmentSaga,
  staffEditEquipmentSaga,
  staffDeleteEquipmentSaga
} from '../staff/equipment/sagas';
import {
  STAFF_CREATE_NEW_EQUIPMENT,
  STAFF_CREATE_NEW_EQUIPMENT_SUCCEEDED,
  STAFF_EDIT_EQUIPMENT,
  STAFF_EDIT_EQUIPMENT_SUCCEEDED,
  STAFF_DELETE_EQUIPMENT,
  STAFF_DELETE_EQUIPMENT_SUCCEEDED
} from '../staff/equipment/types';
import {
  userCreateNewPrivateEquipmentSaga,
  userEditPrivateEquipmentSaga,
  userDeletePrivateEquipmentSaga
} from '../user/equipment/sagas';
import {
  USER_CREATE_NEW_PRIVATE_EQUIPMENT,
  USER_CREATE_NEW_PRIVATE_EQUIPMENT_SUCCEEDED,
  USER_EDIT_PRIVATE_EQUIPMENT,
  USER_EDIT_PRIVATE_EQUIPMENT_SUCCEEDED,
  USER_DELETE_PRIVATE_EQUIPMENT,
  USER_DELETE_PRIVATE_EQUIPMENT_SUCCEEDED
} from '../user/equipment/types';

export function* watchEquipment() {
  yield all([
    takeEvery(STAFF_CREATE_NEW_EQUIPMENT, staffCreateNewEquipmentSaga),
    takeEvery(STAFF_CREATE_NEW_EQUIPMENT_SUCCEEDED, dataGetEquipmentsSaga),

    takeEvery(STAFF_EDIT_EQUIPMENT, staffEditEquipmentSaga),
    takeEvery(STAFF_EDIT_EQUIPMENT_SUCCEEDED, dataGetEquipmentsSaga),

    takeEvery(STAFF_DELETE_EQUIPMENT, staffDeleteEquipmentSaga),
    takeEvery(STAFF_DELETE_EQUIPMENT_SUCCEEDED, dataGetEquipmentsSaga),

    takeEvery(USER_CREATE_NEW_PRIVATE_EQUIPMENT, userCreateNewPrivateEquipmentSaga),
    takeEvery(USER_CREATE_NEW_PRIVATE_EQUIPMENT_SUCCEEDED, dataGetMyPrivateEquipmentsSaga),

    takeEvery(USER_EDIT_PRIVATE_EQUIPMENT, userEditPrivateEquipmentSaga),
    takeEvery(USER_EDIT_PRIVATE_EQUIPMENT_SUCCEEDED, dataGetMyPrivateEquipmentsSaga),
    
    takeEvery(USER_DELETE_PRIVATE_EQUIPMENT, userDeletePrivateEquipmentSaga),
    takeEvery(USER_DELETE_PRIVATE_EQUIPMENT_SUCCEEDED, dataGetMyPrivateEquipmentsSaga)
  ]);
}