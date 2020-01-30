import { call, put } from 'redux-saga/effects'
import axios from 'axios';
//import MockAdapter from 'axios-mock-adapter';
import { expectSaga } from 'redux-saga-test-plan';
//import * as matchers from 'redux-saga-test-plan/matchers';
//import { throwError } from 'redux-saga-test-plan/providers';

import {
  dataGetMeasurements,
  dataGetMeasurementsSucceeded,
  dataGetMeasurementsFailed,

  dataGetEquipments,
  dataGetEquipmentsSucceeded,
  dataGetEquipmentsFailed,
  dataGetEquipmentTypes,
  dataGetEquipmentTypesSucceeded,
  dataGetEquipmentTypesFailed,

  dataGetIngredients,
  dataGetIngredientsSucceeded,
  dataGetIngredientsFailed,
  dataGetIngredientTypes,
  dataGetIngredientTypesSucceeded,
  dataGetIngredientTypesFailed,

  dataGetRecipes,
  dataGetRecipesSucceeded,
  dataGetRecipesFailed,
  dataGetRecipeTypes,
  dataGetRecipeTypesSucceeded,
  dataGetRecipeTypesFailed,
  dataGetCuisines,
  dataGetCuisinesSucceeded,
  dataGetCuisinesFailed,
  dataGetMethods,
  dataGetMethodsSucceeded,
  dataGetMethodsFailed,

  dataGetMyPublicRecipes,
  dataGetMyPublicRecipesSucceeded,
  dataGetMyPublicRecipesFailed,
  dataGetMyPrivateEquipments,
  dataGetMyPrivateEquipmentsSucceeded,
  dataGetMyPrivateEquipmentsFailed,
  dataGetMyPrivateIngredients,
  dataGetMyPrivateIngredientsSucceeded,
  dataGetMyPrivateIngredientsFailed,
  dataGetMyPrivateRecipes,
  dataGetMyPrivateRecipesSucceeded,
  dataGetMyPrivateRecipesFailed,

  dataGetMyFavoriteRecipes,
  dataGetMyFavoriteRecipesSucceeded,
  dataGetMyFavoriteRecipesFailed,
  dataGetMySavedRecipes,
  dataGetMySavedRecipesSucceeded,
  dataGetMySavedRecipesFailed,

  dataGetMyPlans,
  dataGetMyPlansSucceeded,
  dataGetMyPlansFailed,

  dataGetMyFriendships,
  dataGetMyFriendshipsSucceeded,
  dataGetMyFriendshipsFailed
} from '../actions/index';

/*import {
  dataGetMeasurementsSaga,

  dataGetEquipmentsSaga,
  dataGetEquipmentTypesSaga,

  dataGetIngredientsSaga,
  dataGetIngredientTypesSaga,

  dataGetRecipesSaga,
  dataGetRecipeTypesSaga,
  dataGetCuisinesSaga,
  dataGetMethodsSaga,

  dataGetMyPlansSaga,
  dataGetMyPublicRecipesSaga,
  dataGetMyPrivateRecipesSaga,
  dataGetMyFavoriteRecipesSaga,
  dataGetMySavedRecipesSaga,
  dataGetMyPrivateEquipmentsSaga,
  dataGetMyPrivateIngredientsSaga,

  dataGetMyFriendshipsSaga
} from './data';*/

import { NOBSCBackendAPIEndpointOne } from '../../config/NOBSCBackendAPIEndpointOne';
const endpoint = NOBSCBackendAPIEndpointOne;  // remove in test?

//const mock = new MockAdapter(axios, {delayResponse: 100});



describe('the dataGetMeasurementsSaga', () => {
  const iterator = dataGetMeasurementsSaga();
  it('should hit API', () => {
    expect(iterator.next().value)
    .toEqual(call([axios, axios.get], `${endpoint}/measurement`));

    /*return expectSaga(dataGetMeasurementsSaga)
    .provide([
      [call(() => {
        mock
        .onGet(`${endpoint}/measurement`)
        .reply(
          201,  // change?
          {data: []}
        );
      })]
    ])
    .put({
      type: 'DATA_GET_MEASUREMENTS',
      data: [{measurement_id: 1, measurement_name: "teaspoon"}]
    })
    .put({
      type: 'DATA_GET_MEASUREMENTS_SUCCEEDED',
      message: 'Signed in.'
    })
    .put({type: 'AUTH_MESSAGE_CLEAR'})
    .dispatch(action)
    .silentRun(50);*/
  });
  it('should dispatch succeeded', () => {
    const res = {
      data: [
        {"measurement_id": "1", "measurement_name": "teaspoon"}
      ]
    };
    expect(iterator.next().value)
    .toEqual(put(dataGetMeasurements(res)));
    expect(iterator.next().value)
    .toEqual(put(dataGetMeasurementsSucceeded()));
  });
  it('should dispatch failed', () => {
    const res = null;
    expect(iterator.next().value)
    .toEqual(put(dataGetMeasurementsFailed()))
  });
});





describe('the dataGetEquipmentsSaga', () => {
  it('works', () => {
    return expectSaga(dataGetEquipmentsSaga)
    .silentRun(50);
  });
});



describe('the dataGetEquipmentTypesSaga', () => {
  it('works', () => {
    return expectSaga(dataGetEquipmentTypesSaga)
    .silentRun(50);
  });
});





describe('the dataGetIngredientsSaga', () => {
  it('works', () => {
    return expectSaga(dataGetIngredientsSaga)
    .silentRun(50);
  });
});



describe('the dataGetIngredientTypesSaga', () => {
  it('works', () => {
    return expectSaga(dataGetIngredientTypesSaga)
    .silentRun(50);
  });
});





describe('the dataGetRecipesSaga', () => {
  it('works', () => {
    return expectSaga(dataGetRecipesSaga)
    .silentRun(50);
  });
});



describe('the dataGetRecipeTypesSaga', () => {
  it('works', () => {
    return expectSaga(dataGetRecipeTypesSaga)
    .silentRun(50);
  });
});



describe('the dataGetCuisinesSaga', () => {
  it('works', () => {
    return expectSaga(dataGetCuisinesSaga)
    .silentRun(50);
  });
});



describe('the dataGetMethodsSaga', () => {
  it('works', () => {
    return expectSaga(dataGetMethodsSaga)
    .silentRun(50);
  });
});





describe('the dataGetMyPlansSaga', () => {
  it('works', () => {
    return expectSaga(dataGetMyPlansSaga)
    .silentRun(50);
  });
});



describe('the dataGetMyPublicRecipesSaga', () => {
  it('works', () => {
    return expectSaga(dataGetMyPublicRecipesSaga)
    .silentRun(50);
  });
});



describe('the dataGetMyPrivateRecipesSaga', () => {
  it('works', () => {
    return expectSaga(dataGetMyPrivateRecipesSaga)
    .silentRun(50);
  });
});



describe('the dataGetMyFavoriteRecipesSaga', () => {
  it('works', () => {
    return expectSaga(dataGetMyFavoriteRecipesSaga)
    .silentRun(50);
  });
});



describe('the dataGetMySavedRecipesSaga', () => {
  it('works', () => {
    return expectSaga(dataGetMySavedRecipesSaga)
    .silentRun(50);
  });
});



describe('the dataGetMyPrivateEquipmentsSaga', () => {
  it('works', () => {
    return expectSaga(dataGetMyPrivateEquipmentsSaga)
    .silentRun(50);
  });
});



describe('the dataGetMyPrivateIngredientsSaga', () => {
  it('works', () => {
    return expectSaga(dataGetMyPrivateIngredientsSaga)
    .silentRun(50);
  });
});





describe('the dataGetMyFriendshipsSaga', () => {
  it('works', () => {
    return expectSaga(dataGetMyFriendshipsSaga)
    .silentRun(50);
  });
});