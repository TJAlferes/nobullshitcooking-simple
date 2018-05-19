import { call, put } from 'redux-saga/effects';
import axios from 'axios';

import * as actions from '../actions/index';

export function* sampleSaga(action) {
  yield call([console, 'log'], 'sample saga');
  put(actions.sample());
}

export function* ingredientsSaga(action) {
  yield put(actions.getIngredientsStart());
  const params = '&ingredient_type_id=';  // just as an example, change this of course
  try {
    const response = yield axios.get('/api/ingredients/ingredients.json' + params);
    const fetchedIngredients = {};
    // do some fancy ES6+ shit here (be immutable where possible!)
    yield put(actions.getIngredientsSuccess(fetchedIngredients));
  } catch(error) {
    yield put(actions.getIngredientsFail(error));
  }
}