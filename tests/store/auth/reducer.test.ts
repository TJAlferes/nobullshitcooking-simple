import {
  AUTH_MESSAGE_CLEAR,
  AUTH_RESET,
  AUTH_UPDATE_LOCAL_AVATAR,
  AUTH_STAFF_DISPLAY,
  AUTH_STAFF_LOGIN_SUCCEEDED,
  AUTH_STAFF_LOGIN_FAILED,
  AUTH_STAFF_LOGOUT,
  AUTH_STAFF_LOGOUT_SUCCEEDED,
  AUTH_STAFF_LOGOUT_FAILED,
  AUTH_USER_DISPLAY,
  AUTH_USER_LOGIN_SUCCEEDED,
  AUTH_USER_LOGIN_FAILED,
  AUTH_USER_LOGOUT,
  AUTH_USER_LOGOUT_SUCCEEDED,
  AUTH_USER_LOGOUT_FAILED,
  AUTH_USER_REGISTER_SUCCEEDED,
  AUTH_USER_REGISTER_FAILED,
  //AUTH_USER_VERIFY_SUCCEEDED,
  //AUTH_USER_VERIFY_FAILED
} from './types';
import { authReducer } from './reducer';

const initialState = {
  authname: '',
  avatar: '',
  message: '',
  staffIsAuthenticated: false,
  userIsAuthenticated: false
};

// move
const beforeState = {
  authname: 'Spongebob',
  avatar: 'Spongebob',
  message: '',
  staffIsAuthenticated: false,
  userIsAuthenticated: true
};

describe('auth reducer', () => {
  it('returns initial state', () => {
    expect(authReducer(undefined, {
      type: AUTH_USER_REGISTER_SUCCEEDED,
      message: 'Registration successful.'
    }))
      .toEqual({
        authname: '',
        avatar: '',
        message: 'Registration successful.',
        staffIsAuthenticated: false,
        userIsAuthenticated: false
      });
  });

  it('handles actions of type AUTH_MESSAGE_CLEAR', () => {
    expect(authReducer({
      authname: '',
      avatar: '',
      message: 'Incorrect email or password.',
      staffIsAuthenticated: false,
      userIsAuthenticated: false
    }, {type: AUTH_MESSAGE_CLEAR}))
      .toEqual({
        authname: '',
        avatar: '',
        message: '',
        staffIsAuthenticated: false,
        userIsAuthenticated: false
      });
  });

  it('handles actions of type AUTH_RESET', () => {
    expect(authReducer(beforeState, {type: AUTH_RESET})).toEqual(initialState);
  });

  it('handles actions of type AUTH_UPDATE_LOCAL_AVATAR', () => {
    expect(authReducer(beforeState, {
      type: AUTH_UPDATE_LOCAL_AVATAR,
      avatar: 'Squidward-456456456'
    }))
      .toEqual({
        authname: 'Spongebob',
        avatar: 'Squidward-456456456',
        message: '',
        staffIsAuthenticated: false,
        userIsAuthenticated: true
      });
  });

  // STAFF_DISPLAY

  it('handles actions of type AUTH_STAFF_LOGIN_SUCCEEDED', () => {
    expect(authReducer(initialState, {
      type: AUTH_STAFF_LOGIN_SUCCEEDED,
      message: 'Login successful.'
    }))
      .toEqual({
        authname: '',
        avatar: '',
        message: 'Login successful.',
        staffIsAuthenticated: false,
        userIsAuthenticated: false
      });
  });

  it('handles actions of type AUTH_STAFF_LOGIN_FAILED', () => {
    expect(authReducer(initialState, {
      type: AUTH_STAFF_LOGIN_FAILED,
      message: 'Login failed.'
    }))
      .toEqual({
        authname: '',
        avatar: '',
        message: 'Login failed.',
        staffIsAuthenticated: false,
        userIsAuthenticated: false
      });
  });

  it('handles actions of type AUTH_STAFF_LOGOUT', () => {
    expect(authReducer(beforeState, {type: AUTH_STAFF_LOGOUT}))
      .toEqual(initialState);
  });
  
  it('handles actions of type AUTH_STAFF_LOGOUT_SUCCEEDED', () => {
    expect(authReducer(initialState, {
      type: AUTH_STAFF_LOGOUT_SUCCEEDED,
      message: 'Logout successful.'
    }))
      .toEqual({
        authname: '',
        avatar: '',
        message: 'Logout successful.',
        staffIsAuthenticated: false,
        userIsAuthenticated: false
      });
  });

  it('handles actions of type AUTH_STAFF_LOGOUT_FAILED', () => {
    expect(authReducer(initialState, {
      type: AUTH_STAFF_LOGOUT_FAILED,
      message: 'Logout failed.'
    }))
      .toEqual({
        authname: '',
        avatar: '',
        message: 'Logout failed.',
        staffIsAuthenticated: false,
        userIsAuthenticated: false
      });
  });

  it('handles actions of type AUTH_USER_DISPLAY', () => {
    expect(authReducer(initialState, {
      type: AUTH_USER_DISPLAY,
      authname: 'Squidward',
      avatar: 'Squidward-123123123'
    }))
      .toEqual({
        authname: 'Squidward',
        avatar: 'Squidward-123123123',
        message: '',
        staffIsAuthenticated: false,
        userIsAuthenticated: true
      });
  });

  it('handles actions of type AUTH_USER_LOGIN_SUCCEEDED', () => {
    expect(authReducer(initialState, {
      type: AUTH_USER_LOGIN_SUCCEEDED,
      message: 'Login successful.'
    }))
      .toEqual({
        authname: '',
        avatar: '',
        message: 'Login successful.',
        staffIsAuthenticated: false,
        userIsAuthenticated: false
      });
  });

  it('handles actions of type AUTH_USER_LOGIN_FAILED', () => {
    expect(authReducer(initialState, {
      type: AUTH_USER_LOGIN_FAILED,
      message: 'Login failed.'
    }))
      .toEqual({
        authname: '',
        avatar: '',
        message: 'Login failed.',
        staffIsAuthenticated: false,
        userIsAuthenticated: false
      });
  });

  it('handles actions of type AUTH_USER_LOGOUT', () => {
    expect(authReducer(beforeState, {type: AUTH_USER_LOGOUT}))
      .toEqual(initialState);
  });

  it('handles actions of type AUTH_USER_LOGOUT_SUCCEEDED', () => {
    expect(authReducer(initialState, {
      type: AUTH_USER_LOGOUT_SUCCEEDED,
      message: 'Logout successful.'
    }))
      .toEqual({
        authname: '',
        avatar: '',
        message: 'Logout successful.',
        staffIsAuthenticated: false,
        userIsAuthenticated: false
      });
  });

  it('handles actions of type AUTH_USER_LOGOUT_FAILED', () => {
    expect(authReducer(initialState, {
      type: AUTH_USER_LOGOUT_FAILED,
      message: 'Logout failed.'
    }))
      .toEqual({
        authname: '',
        avatar: '',
        message: 'Logout failed.',
        staffIsAuthenticated: false,
        userIsAuthenticated: false
      });
  });

  it('handles actions of type AUTH_USER_REGISTER_SUCCEEDED', () => {
    expect(authReducer(initialState, {
      type: AUTH_USER_REGISTER_SUCCEEDED,
      message: 'Registration successful.'
    }))
      .toEqual({
        authname: '',
        avatar: '',
        message: 'Registration successful.',
        staffIsAuthenticated: false,
        userIsAuthenticated: false
      });
  });

  it('handles actions of type AUTH_USER_REGISTER_FAILED', () => {
    expect(authReducer(initialState, {
      type: AUTH_USER_REGISTER_FAILED,
      message: 'Registration failed.'
    }))
      .toEqual({
        authname: '',
        avatar: '',
        message: 'Registration failed.',
        staffIsAuthenticated: false,
        userIsAuthenticated: false
      });
  });
});