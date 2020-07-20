import { all, takeEvery } from 'redux-saga/effects';

import { dataGetInitialDataSaga } from '../data/sagas';
import { DATA_INIT } from '../data/types';

export function* watchData() {
  yield all([takeEvery(DATA_INIT, dataGetInitialDataSaga)]);
}