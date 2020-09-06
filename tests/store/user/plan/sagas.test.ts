import axios from 'axios';
import { call, delay, put } from 'redux-saga/effects';

import {
  NOBSCBackendAPIEndpointOne
} from '../../../../src/config/NOBSCBackendAPIEndpointOne';
import { userMessageClear } from '../../../../src/store/user/actions';
import {
  userCreateNewPlanSucceeded,
  userCreateNewPlanFailed,
  userEditPlanSucceeded,
  userEditPlanFailed,
  userDeletePlanSucceeded,
  userDeletePlanFailed
} from '../../../../src/store/user/plan/actions';
import {
  userCreateNewPlanSaga,
  userEditPlanSaga,
  userDeletePlanSaga
} from '../../../../src/store/user/plan/sagas';
import {
  USER_CREATE_NEW_PLAN,
  USER_EDIT_PLAN,
  USER_DELETE_PLAN
} from '../../../../src/store/user/plan/types';

const endpoint = NOBSCBackendAPIEndpointOne;

describe('userCreateNewPlanSaga', () => {
  const action = {
    type: USER_CREATE_NEW_PLAN,
    planInfo: {name: "Plan B", data: ""}
  };

  it ('should dispatch succeeded', () => {
    const iterator = userCreateNewPlanSaga(action);
    const res = {data: {message: 'Plan created.'}};

    expect(iterator.next().value)
    .toEqual(call(
      [axios, axios.post],
      `${endpoint}/user/plan/create`,
      {planInfo: action.planInfo},
      {withCredentials: true}
    ));

    expect(iterator.next(res).value)
    .toEqual(put(userCreateNewPlanSucceeded(res.data.message)));

    expect(iterator.next().value).toEqual(delay(3000));
    expect(iterator.next().value).toEqual(put(userMessageClear()));
    expect(iterator.next()).toEqual({done: true, value: undefined});
  });

  it ('should dispatch failed', () => {
    const iterator = userCreateNewPlanSaga(action);
    const res = {data: {message: 'Oops.'}};

    iterator.next();

    expect(iterator.next(res).value)
    .toEqual(put(userCreateNewPlanFailed(res.data.message)));

    expect(iterator.next().value).toEqual(delay(4000));
    expect(iterator.next().value).toEqual(put(userMessageClear()));
    expect(iterator.next()).toEqual({done: true, value: undefined});
  });

  it ('should dispatch failed if thrown', () => {
    const iterator = userCreateNewPlanSaga(action);

    iterator.next();

    expect(iterator.throw('error').value)
    .toEqual(
      put(userCreateNewPlanFailed('An error occurred. Please try again.'))
    );

    expect(iterator.next().value).toEqual(delay(4000));
    expect(iterator.next().value).toEqual(put(userMessageClear()));
    expect(iterator.next()).toEqual({done: true, value: undefined});
  });
});



describe('userEditPlanSaga', () => {
  const action = {
    type: USER_EDIT_PLAN,
    planInfo: {id: 2, name: "Plan B", data: ""}
  };

  it ('should dispatch succeeded', () => {
    const iterator = userEditPlanSaga(action);
    const res = {data: {message: 'Plan updated.'}};

    expect(iterator.next().value)
    .toEqual(call(
      [axios, axios.put],
      `${endpoint}/user/plan/update`,
      {planInfo: action.planInfo},
      {withCredentials: true}
    ));

    expect(iterator.next(res).value)
    .toEqual(put(userEditPlanSucceeded(res.data.message)));

    expect(iterator.next().value).toEqual(delay(3000));
    expect(iterator.next().value).toEqual(put(userMessageClear()));
    expect(iterator.next()).toEqual({done: true, value: undefined});
  });

  it ('should dispatch failed', () => {
    const iterator = userEditPlanSaga(action);
    const res = {data: {message: 'Oops.'}};

    iterator.next();

    expect(iterator.next(res).value)
    .toEqual(put(userEditPlanFailed(res.data.message)));

    expect(iterator.next().value).toEqual(delay(4000));
    expect(iterator.next().value).toEqual(put(userMessageClear()));
    expect(iterator.next()).toEqual({done: true, value: undefined});
  });

  it ('should dispatch failed if thrown', () => {
    const iterator = userEditPlanSaga(action);

    iterator.next();

    expect(iterator.throw('error').value)
    .toEqual(
      put(userEditPlanFailed('An error occurred. Please try again.'))
    );

    expect(iterator.next().value).toEqual(delay(4000));
    expect(iterator.next().value).toEqual(put(userMessageClear()));
    expect(iterator.next()).toEqual({done: true, value: undefined});
  });
});



describe('userDeletePlanSaga', () => {
  const action = {type: USER_DELETE_PLAN, id: 3};

  it ('should dispatch succeeded', () => {
    const iterator = userDeletePlanSaga(action);
    const res = {data: {message: 'Plan deleted.'}};

    expect(iterator.next().value)
    .toEqual(call(
      [axios, axios.delete],
      `${endpoint}/user/plan/delete`,
      {withCredentials: true, data: {id: action.id}}
    ));

    expect(iterator.next(res).value)
    .toEqual(put(userDeletePlanSucceeded(res.data.message)));

    expect(iterator.next().value).toEqual(delay(3000));
    expect(iterator.next().value).toEqual(put(userMessageClear()));
    expect(iterator.next()).toEqual({done: true, value: undefined});
  });

  it ('should dispatch failed', () => {
    const iterator = userDeletePlanSaga(action);
    const res = {data: {message: 'Oops.'}};

    iterator.next();

    expect(iterator.next(res).value)
    .toEqual(put(userDeletePlanFailed(res.data.message)));

    expect(iterator.next().value).toEqual(delay(4000));
    expect(iterator.next().value).toEqual(put(userMessageClear()));
    expect(iterator.next()).toEqual({done: true, value: undefined});
  });

  it ('should dispatch failed if thrown', () => {
    const iterator = userDeletePlanSaga(action);

    iterator.next();

    expect(iterator.throw('error').value)
    .toEqual(
      put(userDeletePlanFailed('An error occurred. Please try again.'))
    );

    expect(iterator.next().value).toEqual(delay(4000));
    expect(iterator.next().value).toEqual(put(userMessageClear()));
    expect(iterator.next()).toEqual({done: true, value: undefined});
  });
});