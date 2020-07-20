import { all, takeEvery } from 'redux-saga/effects';

import { dataGetContentSaga, dataGetMyContentSaga } from '../data/sagas';
import {
  staffCreateNewContentSaga,
  staffEditContentSaga,
  staffDeleteContentSaga
} from '../staff/content/sagas';
import {
  STAFF_CREATE_NEW_CONTENT,
  STAFF_CREATE_NEW_CONTENT_SUCCEEDED,
  STAFF_EDIT_CONTENT,
  STAFF_EDIT_CONTENT_SUCCEEDED,
  STAFF_DELETE_CONTENT,
  STAFF_DELETE_CONTENT_SUCCEEDED
} from '../staff/content/types';
import {
  userCreateNewContentSaga,
  userEditContentSaga,
  userDeleteContentSaga
} from '../user/content/sagas';
import {
  USER_CREATE_NEW_CONTENT,
  USER_CREATE_NEW_CONTENT_SUCCEEDED,
  USER_EDIT_CONTENT,
  USER_EDIT_CONTENT_SUCCEEDED,
  USER_DELETE_CONTENT,
  USER_DELETE_CONTENT_SUCCEEDED
} from '../user/content/types';

export function* watchContent() {
  yield all([
    takeEvery(STAFF_CREATE_NEW_CONTENT, staffCreateNewContentSaga),
    takeEvery(STAFF_CREATE_NEW_CONTENT_SUCCEEDED, dataGetContentSaga),

    takeEvery(STAFF_EDIT_CONTENT, staffEditContentSaga),
    takeEvery(STAFF_EDIT_CONTENT_SUCCEEDED, dataGetContentSaga),

    takeEvery(STAFF_DELETE_CONTENT, staffDeleteContentSaga),
    takeEvery(STAFF_DELETE_CONTENT_SUCCEEDED, dataGetContentSaga),

    takeEvery(USER_CREATE_NEW_CONTENT, userCreateNewContentSaga),
    takeEvery(USER_CREATE_NEW_CONTENT_SUCCEEDED, dataGetMyContentSaga),

    takeEvery(USER_EDIT_CONTENT, userEditContentSaga),
    takeEvery(USER_EDIT_CONTENT_SUCCEEDED, dataGetMyContentSaga),

    takeEvery(USER_DELETE_CONTENT, userDeleteContentSaga),
    takeEvery(USER_DELETE_CONTENT_SUCCEEDED, dataGetMyContentSaga)
  ]);
}