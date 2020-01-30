import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { expectSaga } from 'redux-saga-test-plan';
import * as matchers from 'redux-saga-test-plan/matchers';
import { throwError } from 'redux-saga-test-plan/providers';

import {
  authUserLoginSaga,
  authUserLogoutSaga,
  authUserRegisterSaga
} from './auth';

import { NOBSCBackendAPIEndpointOne } from '../../config/NOBSCBackendAPIEndpointOne';
const endpoint = NOBSCBackendAPIEndpointOne;  // remove in test?

const mock = new MockAdapter(axios, {delayResponse: 100});



describe('the authUserLoginSaga', () => {
  it('works', () => {
    const action = {
      type: 'AUTH_USER_LOGIN',
      email: 'person@company.com',
      password: 'secret'
    };
    return expectSaga(authUserLoginSaga, action)
    .provide([
      [call(() => {
        mock
        .onPost(
          `${endpoint}/user/auth/login`,
          {userInfo: {email: action.email, password: action.password}},
          {withCredentials: true}  // remove?
        )
        .reply(
          201,  // change?
          {message: 'Signed in.'}
        );
      })]
    ])
    .put({
      type: 'AUTH_USER_LOGIN_SUCCEEDED',
      message: 'Signed in.'
    })
    .put({type: 'AUTH_MESSAGE_CLEAR'})
    .dispatch(action)
    .silentRun(50);
  });

  it('handles errors', () => {
    const error = new Error('error');
    return expectSaga(userSaga, api)
    .provide([
      [matchers.call.fn(api.fetchUser), throwError(error)],
    ])
    .put({ type: 'FAIL_USER', error })
    .dispatch({ type: 'REQUEST_USER', payload: 42 })
    .silentRun(50);
  });
});



describe('the authUserLogoutSaga', () => {
  it('works', () => {
    return expectSaga(authUserLogoutSaga)
    .provide([
      [call(() => {
        mock.onPost(
          `${endpoint}/user/auth/logout`,
          {},
          {withCredentials: true}  // remove?
        )
        .reply(
          201,  // change?
          {message: 'Signed out.'}
        );
      })]
    ])
    .put({
      type: 'AUTH_USER_LOGOUT_SUCCEEDED',
      message: 'Signed out.'
    })
    .put({type: 'AUTH_MESSAGE_CLEAR'})
    .dispatch(action)
    .silentRun(50);
  });
});



describe('the authUserRegisterSaga', () => {
  it('works', () => {
    const action = {
      type: 'AUTH_USER_REGISTER',
      email: 'person@company.com',
      password: 'secret',
      username: 'kindperson',
      history: {}  // change? (not just here, in actionCreator too)
    };
    return expectSaga(authUserRegisterSaga, action)
    .provide([
      [call(() => {
        mock
        .onPost(
          `${endpoint}/user/auth/register`,
          {
            userInfo: {
              email: action.email,
              password: action.password,
              username: action.username
            }},
          {withCredentials: true}  // remove?
        )
        .reply(
          201,  // change?
          {message: 'User account created.'}
        );
      })]
    ])
    .put({
      type: 'AUTH_USER_REGISTER_SUCCEEDED',
      message: 'User account created.'
    })
    .put({type: 'AUTH_MESSAGE_CLEAR'})
    .dispatch(action)
    .silentRun(50);
  });
});