import { all, takeEvery } from 'redux-saga/effects';

import { userSubmitAvatarSaga } from '../user/avatar/sagas';
import { USER_SUBMIT_AVATAR } from '../user/avatar/types';

export function* watchAvatar() {
  yield all([takeEvery(USER_SUBMIT_AVATAR, userSubmitAvatarSaga)]);
}