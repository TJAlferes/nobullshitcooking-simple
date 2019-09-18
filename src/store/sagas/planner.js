import { put } from 'redux-saga/effects';

import convertPlannerToUrl from '../../utils/publicPlanner/convertPlannerToUrl';
//import convertUrlToPlanner from '../../utils/publicPlanner/convertUrlToPlanner';
import {
  plannerPublicLoadFromUrl,
  plannerPublicSaveToUrl,
} from '../actions/index';

/*export function* plannerPublicLoadFromUrlSaga(history, plan) {
  convertUrlToPlanner(url);
  yield put(plannerPublicLoadFromUrl(history, plan));
}*/

export function* plannerPublicSaveToUrlSaga(history, plan) {
  convertPlannerToUrl(plan);
  yield put(plannerPublicSaveToUrl(history, plan));
}