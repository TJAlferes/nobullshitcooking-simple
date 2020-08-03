import axios from 'axios';
import { createMemoryHistory } from 'history';
import { call, delay, put } from 'redux-saga/effects';

import {
  NOBSCBackendAPIEndpointOne
} from '../../config/NOBSCBackendAPIEndpointOne';
import { removeStorageItem } from '../../utils/storageHelpers';
import {
  authMessageClear,
  authStaffDisplay,
  authStaffLoginSucceeded,
  authStaffLoginFailed,
  authStaffLogoutSucceeded,
  authStaffLogoutFailed,
  authUserDisplay,
  authUserLoginSucceeded,
  authUserLoginFailed,
  authUserLogoutSucceeded,
  authUserLogoutFailed,
  authUserRegisterSucceeded,
  authUserRegisterFailed,
  authUserVerifySucceeded,
  authUserVerifyFailed
} from './actions';
import {
  authStaffLoginSaga,
  authStaffLogoutSaga,
  authUserLoginSaga,
  authUserLogoutSaga,
  authUserRegisterSaga,
  authUserVerifySaga
} from './sagas';
import {
  AUTH_STAFF_LOGIN,
  AUTH_STAFF_LOGOUT,
  AUTH_USER_LOGIN,
  AUTH_USER_LOGOUT,
  AUTH_USER_REGISTER,
  AUTH_USER_VERIFY
} from './types';

const endpoint = NOBSCBackendAPIEndpointOne;
//const history = useHistory();
const history = createMemoryHistory();

describe('authStaffLoginSaga', () => {
  const action = {
    type: AUTH_STAFF_LOGIN,
    email: 'person@place.com',
    password: 'secret'
  };

  it('should dispatch display and succeeded', () => {
    const iterator = authStaffLoginSaga(action);
    const res = {
      data: {
        message: 'Signed in.',
        staffname: 'Person',
        avatar: 'Person'
      }
    };

    expect(iterator.next().value)
    .toEqual(call(
      [axios, axios.post],
      `${endpoint}/staff/auth/login`,
      {staffInfo: {email: action.email, password: action.password}},
      {withCredentials: true}
    ));

    expect(iterator.next(res).value)
    .toEqual(put(authStaffDisplay(res.data.staffname, res.data.avatar)));

    expect(iterator.next(res).value)
    .toEqual(put(authStaffLoginSucceeded(res.data.message)));

    expect(iterator.next().value).toEqual(delay(4000));
    expect(iterator.next().value).toEqual(put(authMessageClear()));
    expect(iterator.next()).toEqual({done: true, value: undefined});
  });

  it('should dispatch failed', () => {
    const iterator = authStaffLoginSaga(action);
    const res = {data: {message: 'Oops.'}};

    iterator.next();

    expect(iterator.next(res).value)
    .toEqual(put(authStaffLoginFailed(res.data.message)));

    expect(iterator.next().value).toEqual(delay(4000));
    expect(iterator.next().value).toEqual(put(authMessageClear()));
    expect(iterator.next()).toEqual({done: true, value: undefined});    
  });

  it('should dispatch failed if thrown', () => {
    const iterator = authStaffLoginSaga(action);

    iterator.next();

    expect(iterator.throw('error').value)
    .toEqual(put(authStaffLoginFailed('An error occurred. Please try again.')));
    
    expect(iterator.next().value).toEqual(delay(4000));
    expect(iterator.next().value).toEqual(put(authMessageClear()));
    expect(iterator.next()).toEqual({done: true, value: undefined});
  });
});

describe('authStaffLogoutSaga', () => {
  const action = {type: AUTH_STAFF_LOGOUT};

  it('should dispatch succeeded', () => {
    const iterator = authStaffLogoutSaga(action);
    const res = {data: {message: 'Signed out.'}};

    expect(iterator.next().value)
    .toEqual(call(
      [axios, axios.post],
      `${endpoint}/staff/auth/logout`,
      {},
      {withCredentials: true}
    ));

    expect(iterator.next(res).value)
    .toEqual(call(removeStorageItem, 'appState'));

    expect(iterator.next(res).value)
    .toEqual(put(authStaffLogoutSucceeded(res.data.message)));

    expect(iterator.next().value).toEqual(delay(4000));
    expect(iterator.next().value).toEqual(put(authMessageClear()));
    expect(iterator.next()).toEqual({done: true, value: undefined});
  });

  it('should dispatch failed', () => {
    const iterator = authStaffLogoutSaga(action);
    const res = {data: {message: 'Oops.'}};

    iterator.next();

    expect(iterator.next(res).value)
    .toEqual(call(removeStorageItem, 'appState'));

    expect(iterator.next(res).value)
    .toEqual(put(authStaffLogoutFailed(res.data.message)));

    expect(iterator.next().value).toEqual(delay(4000));
    expect(iterator.next().value).toEqual(put(authMessageClear()));
    expect(iterator.next()).toEqual({done: true, value: undefined});
  });

  it('should dispatch failed if thrown', () => {
    const iterator = authStaffLogoutSaga(action);
    
    iterator.next();

    expect(iterator.throw('error').value)
    .toEqual(put(authStaffLogoutFailed('An error occurred. Please try again.')));

    expect(iterator.next().value).toEqual(delay(4000));
    expect(iterator.next().value).toEqual(put(authMessageClear()));
    expect(iterator.next()).toEqual({done: true, value: undefined});
  });
});

describe('authUserLoginSaga', () => {
  const action = {
    type: AUTH_USER_LOGIN,
    email: 'person@place.com',
    password: 'secret'
  };

  it('should dispatch display and succeeded', () => {
    const iterator = authUserLoginSaga(action);
    const res = {
      data: {
        message: 'Signed in.',
        username: 'Person',
        avatar: 'Person'
      }
    };

    expect(iterator.next().value)
    .toEqual(call(
      [axios, axios.post],
      `${endpoint}/user/auth/login`,
      {userInfo: {email: action.email, password: action.password}},
      {withCredentials: true}
    ));

    expect(iterator.next(res).value)
    .toEqual(put(authUserDisplay(res.data.username, res.data.avatar)));

    expect(iterator.next(res).value)
    .toEqual(put(authUserLoginSucceeded(res.data.message)));

    expect(iterator.next().value).toEqual(delay(4000));
    expect(iterator.next().value).toEqual(put(authMessageClear()));
    expect(iterator.next()).toEqual({done: true, value: undefined});
  });

  it('should dispatch failed', () => {
    const iterator = authUserLoginSaga(action);
    const res = {data: {message: 'Oops.'}};

    iterator.next();

    expect(iterator.next(res).value)
    .toEqual(put(authUserLoginFailed(res.data.message)));

    expect(iterator.next().value).toEqual(delay(4000));
    expect(iterator.next().value).toEqual(put(authMessageClear()));
    expect(iterator.next()).toEqual({done: true, value: undefined});    
  });

  it('should dispatch failed if thrown', () => {
    const iterator = authUserLoginSaga(action);

    iterator.next();

    expect(iterator.throw('error').value)
    .toEqual(put(authUserLoginFailed('An error occurred. Please try again.')));
    
    expect(iterator.next().value).toEqual(delay(4000));
    expect(iterator.next().value).toEqual(put(authMessageClear()));
    expect(iterator.next()).toEqual({done: true, value: undefined});
  });
});

describe('authUserLogoutSaga', () => {
  const action = {type: AUTH_USER_LOGOUT};

  it('should dispatch succeeded', () => {
    const iterator = authUserLogoutSaga(action);
    const res = {data: {message: 'Signed out.'}};

    expect(iterator.next().value)
    .toEqual(call(
      [axios, axios.post],
      `${endpoint}/user/auth/logout`,
      {},
      {withCredentials: true}
    ));

    expect(iterator.next(res).value)
    .toEqual(call(removeStorageItem, 'appState'));

    expect(iterator.next(res).value)
    .toEqual(put(authUserLogoutSucceeded(res.data.message)));

    expect(iterator.next().value).toEqual(delay(4000));
    expect(iterator.next().value).toEqual(put(authMessageClear()));
    expect(iterator.next()).toEqual({done: true, value: undefined});
  });

  it('should dispatch failed', () => {
    const iterator = authUserLogoutSaga(action);
    const res = {data: {message: 'Oops.'}};

    iterator.next();

    expect(iterator.next(res).value)
    .toEqual(call(removeStorageItem, 'appState'));

    expect(iterator.next(res).value)
    .toEqual(put(authUserLogoutFailed(res.data.message)));

    expect(iterator.next().value).toEqual(delay(4000));
    expect(iterator.next().value).toEqual(put(authMessageClear()));
    expect(iterator.next()).toEqual({done: true, value: undefined});
  });

  it('should dispatch failed if thrown', () => {
    const iterator = authUserLogoutSaga(action);
    
    iterator.next();

    expect(iterator.throw('error').value)
    .toEqual(put(authUserLogoutFailed('An error occurred. Please try again.')));

    expect(iterator.next().value).toEqual(delay(4000));
    expect(iterator.next().value).toEqual(put(authMessageClear()));
    expect(iterator.next()).toEqual({done: true, value: undefined});
  });
});

describe('authUserRegisterSaga', () => {
  const action = {
    type: AUTH_USER_REGISTER,
    email: 'person@place.com',
    password: 'secret',
    username: 'Person',
    history
  };

  it('should dispatch succeeded, then push history', () => {
    const iterator = authUserRegisterSaga(action);
    const { history } = action;
    const res = {data: {message: 'User account created.'}};

    expect(iterator.next().value)
    .toEqual(call(
      [axios, axios.post],
      `${endpoint}/user/auth/register`,
      {
        userInfo: {
          email: action.email,
          password: action.password,
          username: action.username
        }
      }
    ));

    expect(iterator.next(res).value)
    .toEqual(put(authUserRegisterSucceeded(res.data.message)));

    expect(iterator.next().value).toEqual(delay(2000));
    expect(iterator.next().value).toEqual(put(authMessageClear()));

    expect(JSON.stringify(iterator.next().value))
    .toEqual(JSON.stringify(call(() => history.push('/verify'))));

    expect(iterator.next()).toEqual({done: true, value: undefined});
  });

  it('should dispatch failed', () => {
    const iterator = authUserRegisterSaga(action);
    const res = {data: {message: 'Oops.'}};

    iterator.next();

    expect(iterator.next(res).value)
    .toEqual(put(authUserRegisterFailed(res.data.message)));

    expect(iterator.next().value).toEqual(delay(4000));
    expect(iterator.next().value).toEqual(put(authMessageClear()));
    expect(iterator.next()).toEqual({done: true, value: undefined});
  });

  it('should dispatch failed if thrown', () => {
    const iterator = authUserRegisterSaga(action);

    iterator.next();

    expect(iterator.throw('error').value)
    .toEqual(
      put(authUserRegisterFailed('An error occurred. Please try again.'))
    );

    expect(iterator.next().value).toEqual(delay(4000));
    expect(iterator.next().value).toEqual(put(authMessageClear()));
    expect(iterator.next()).toEqual({done: true, value: undefined});
  });
});

describe('authUserVerifySaga', () => {
  const action = {
    type: AUTH_USER_VERIFY,
    email: 'person@place.com',
    password: 'secret',
    confirmationCode: '0123456789',
    history
  };

  it('should dispatch succeeded, then push history', () => {
    const iterator = authUserVerifySaga(action);
    const { history } = action;
    const res = {data: {message: 'User account verified.'}};

    expect(iterator.next().value)
    .toEqual(call(
      [axios, axios.post],
      `${endpoint}/user/auth/verify`,
      {
        userInfo: {
          email: action.email,
          password: action.password,
          confirmationCode: action.confirmationCode
        }
      }
    ));

    expect(iterator.next(res).value)
    .toEqual(put(authUserVerifySucceeded(res.data.message)));

    expect(iterator.next().value).toEqual(delay(2000));
    expect(iterator.next().value).toEqual(put(authMessageClear()));

    expect(JSON.stringify(iterator.next().value))
    .toEqual(JSON.stringify(call(() => history.push('/login'))));

    expect(iterator.next()).toEqual({done: true, value: undefined});
  });

  it('should dispatch failed', () => {
    const iterator = authUserVerifySaga(action);
    const res = {data: {message: 'Oops.'}};

    iterator.next();

    expect(iterator.next(res).value)
    .toEqual(put(authUserVerifyFailed(res.data.message)));

    expect(iterator.next().value).toEqual(delay(4000));
    expect(iterator.next().value).toEqual(put(authMessageClear()));
    expect(iterator.next()).toEqual({done: true, value: undefined});
  });

  it('should dispatch failed if thrown', () => {
    const iterator = authUserVerifySaga(action);

    iterator.next();

    expect(iterator.throw('error').value)
    .toEqual(
      put(authUserVerifyFailed('An error occurred. Please try again.'))
    );

    expect(iterator.next().value).toEqual(delay(4000));
    expect(iterator.next().value).toEqual(put(authMessageClear()));
    expect(iterator.next()).toEqual({done: true, value: undefined});
  });
});