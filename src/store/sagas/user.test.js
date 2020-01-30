import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { expectSaga } from 'redux-saga-test-plan';
//import * as matchers from 'redux-saga-test-plan/matchers';
//import { throwError } from 'redux-saga-test-plan/providers';

import {
  userCreateNewPrivateEquipmentSaga,
  userEditPrivateEquipmentSaga,
  userDeletePrivateEquipmentSaga,

  userCreateNewPrivateIngredientSaga,
  userEditPrivateIngredientSaga,
  userDeletePrivateIngredientSaga,

  userCreateNewRecipeSaga,
  userDeletePrivateRecipeSaga,
  userDisownPublicRecipeSaga,
  userEditRecipeSaga,

  userCreateNewPlanSaga,
  userEditPlanSaga,
  userDeletePlanSaga,

  userFavoriteRecipeSaga,
  userUnfavoriteRecipeSaga,

  userSaveRecipeSaga,
  userUnsaveRecipeSaga,

  userRequestFriendshipSaga,
  userAcceptFriendshipSaga,
  userRejectFriendshipSaga,
  userDeleteFriendshipSaga,
  userBlockUserSaga,
  userUnblockUserSaga,

  userSubmitAvatarSaga
} from './user';

import { NOBSCBackendAPIEndpointOne } from '../../config/NOBSCBackendAPIEndpointOne';
const endpoint = NOBSCBackendAPIEndpointOne;  // remove in test?

const mock = new MockAdapter(axios, {delayResponse: 100});



describe('the userCreateNewPrivateEquipmentSaga', () => {
  it('works', () => {
    const action = {};
    return expectSaga(userCreateNewPrivateEquipmentSaga, action)
    .silentRun(50);
  });
});



describe('the userEditPrivateEquipmentSaga', () => {
  it('works', () => {
    const action = {};
    return expectSaga(userEditPrivateEquipmentSaga, action)
    .silentRun(50);
  });
});



describe('the userDeletePrivateEquipmentSaga', () => {
  it('works', () => {
    const action = {};
    return expectSaga(userDeletePrivateEquipmentSaga, action)
    .silentRun(50);
  });
});





describe('the userCreateNewPrivateIngredientSaga', () => {
  it('works', () => {
    const action = {};
    return expectSaga(userCreateNewPrivateIngredientSaga, action)
    .silentRun(50);
  });
});



describe('the userEditPrivateIngredientSaga', () => {
  it('works', () => {
    const action = {};
    return expectSaga(userEditPrivateIngredientSaga, action)
    .silentRun(50);
  });
});



describe('the userDeletePrivateIngredientSaga', () => {
  it('works', () => {
    const action = {};
    return expectSaga(userDeletePrivateIngredientSaga, action)
    .silentRun(50);
  });
});





describe('the userCreateNewRecipeSaga', () => {
  it('works', () => {
    const action = {};
    return expectSaga(userCreateNewRecipeSaga, action)
    .silentRun(50);
  });
});



describe('the userDeletePrivateRecipeSaga', () => {
  it('works', () => {
    const action = {};
    return expectSaga(userDeletePrivateRecipeSaga, action)
    .silentRun(50);
  });
});



describe('the userDisownPublicRecipeSaga', () => {
  it('works', () => {
    const action = {};
    return expectSaga(userDisownPublicRecipeSaga, action)
    .silentRun(50);
  });
});



describe('the userEditRecipeSaga', () => {
  it('works', () => {
    const action = {};
    return expectSaga(userEditRecipeSaga, action)
    .silentRun(50);
  });
});





describe('the userCreateNewPlanSaga', () => {
  it('works', () => {
    const action = {};
    return expectSaga(userCreateNewPlanSaga, action)
    .silentRun(50);
  });
});



describe('the userEditPlanSaga', () => {
  it('works', () => {
    const action = {};
    return expectSaga(userEditPlanSaga, action)
    .silentRun(50);
  });
});



describe('the userDeletePlanSaga', () => {
  it('works', () => {
    const action = {};
    return expectSaga(userDeletePlanSaga, action)
    .silentRun(50);
  });
});





describe('the userFavoriteRecipeSaga', () => {
  it('works', () => {
    const action = {};
    return expectSaga(userFavoriteRecipeSaga, action)
    .silentRun(50);
  });
});



describe('the userUnfavoriteRecipeSaga', () => {
  it('works', () => {
    const action = {};
    return expectSaga(userUnfavoriteRecipeSaga, action)
    .silentRun(50);
  });
});





describe('the userSaveRecipeSaga', () => {
  it('works', () => {
    const action = {};
    return expectSaga(userSaveRecipeSaga, action)
    .silentRun(50);
  });
});



describe('the userUnsaveRecipeSaga', () => {
  it('works', () => {
    const action = {};
    return expectSaga(userUnsaveRecipeSaga, action)
    .silentRun(50);
  });
});





describe('the userRequestFriendshipSaga', () => {
  it('works', () => {
    const action = {};
    return expectSaga(userRequestFriendshipSaga, action)
    .silentRun(50);
  });
});



describe('the userAcceptFriendshipSaga', () => {
  it('works', () => {
    const action = {};
    return expectSaga(userAcceptFriendshipSaga, action)
    .silentRun(50);
  });
});



describe('the userRejectFriendshipSaga', () => {
  it('works', () => {
    const action = {};
    return expectSaga(userRejectFriendshipSaga, action)
    .silentRun(50);
  });
});



describe('the userDeleteFriendshipSaga', () => {
  it('works', () => {
    const action = {};
    return expectSaga(userDeleteFriendshipSaga, action)
    .silentRun(50);
  });
});



describe('the userBlockUserSaga', () => {
  it('works', () => {
    const action = {};
    return expectSaga(userBlockUserSaga, action)
    .silentRun(50);
  });
});



describe('the userUnblockUserSaga', () => {
  it('works', () => {
    const action = {};
    return expectSaga(userUnblockUserSaga, action)
    .silentRun(50);
  });
});





describe('the userSubmitAvatarSaga', () => {
  it('works', () => {
    const action = {};
    return expectSaga(userSubmitAvatarSaga, action)
    .silentRun(50);
  });
});