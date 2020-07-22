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
    const actual = authReducer(undefined, {
      type: AUTH_USER_REGISTER_SUCCEEDED,
      message: 'Registration successful.'
    });
    const expected = {
      authname: '',
      avatar: '',
      message: 'Registration successful.',
      staffIsAuthenticated: false,
      userIsAuthenticated: false
    };
    expect(actual).toEqual(expected);
  });

  it('handles actions of type AUTH_MESSAGE_CLEAR', () => {
    const actual = authReducer({
      authname: '',
      avatar: '',
      message: 'Incorrect email or password.',
      staffIsAuthenticated: false,
      userIsAuthenticated: false
    }, {type: AUTH_MESSAGE_CLEAR});
    const expected = {
      authname: '',
      avatar: '',
      message: '',
      staffIsAuthenticated: false,
      userIsAuthenticated: false
    };
    expect(actual).toEqual(expected);
  });

  it('handles actions of type AUTH_RESET', () => {
    const actual = authReducer(beforeState, {type: AUTH_RESET});
    const expected = initialState;
    expect(actual).toEqual(expected);
  });

  it('handles actions of type AUTH_UPDATE_LOCAL_AVATAR', () => {
    const actual = authReducer(beforeState, {
      type: AUTH_UPDATE_LOCAL_AVATAR,
      avatar: 'Squidward-456456456'
    });
    const expected = {
      authname: 'Spongebob',
      avatar: 'Squidward-456456456',
      message: '',
      staffIsAuthenticated: false,
      userIsAuthenticated: true
    };
    expect(actual).toEqual(expected);
  });

  // STAFF_DISPLAY

  it('handles actions of type AUTH_STAFF_LOGIN_SUCCEEDED', () => {
    const actual = authReducer(initialState, {
      type: AUTH_STAFF_LOGIN_SUCCEEDED,
      message: 'Login successful.'
    });
    const expected = {
      authname: '',
      avatar: '',
      message: 'Login successful.',
      staffIsAuthenticated: false,
      userIsAuthenticated: false
    };
    expect(actual).toEqual(expected);
  });

  it('handles actions of type AUTH_STAFF_LOGIN_FAILED', () => {
    const actual = authReducer(initialState, {
      type: AUTH_STAFF_LOGIN_FAILED,
      message: 'Login failed.'
    });
    const expected = {
      authname: '',
      avatar: '',
      message: 'Login failed.',
      staffIsAuthenticated: false,
      userIsAuthenticated: false
    };
    expect(actual).toEqual(expected);
  });

  it('handles actions of type AUTH_STAFF_LOGOUT', () => {
    const actual = authReducer(beforeState, {type: AUTH_STAFF_LOGOUT});
    const expected = initialState;
    expect(actual).toEqual(expected);
  });
  
  it('handles actions of type AUTH_STAFF_LOGOUT_SUCCEEDED', () => {
    const actual = authReducer(initialState, {
      type: AUTH_STAFF_LOGOUT_SUCCEEDED,
      message: 'Logout successful.'
    });
    const expected = {
      authname: '',
      avatar: '',
      message: 'Logout successful.',
      staffIsAuthenticated: false,
      userIsAuthenticated: false
    };
    expect(actual).toEqual(expected);
  });

  it('handles actions of type AUTH_STAFF_LOGOUT_FAILED', () => {
    const actual = authReducer(initialState, {
      type: AUTH_STAFF_LOGOUT_FAILED,
      message: 'Logout failed.'
    });
    const expected = {
      authname: '',
      avatar: '',
      message: 'Logout failed.',
      staffIsAuthenticated: false,
      userIsAuthenticated: false
    };
    expect(actual).toEqual(expected);
  });

  it('handles actions of type AUTH_USER_DISPLAY', () => {
    const actual = authReducer(initialState, {
      type: AUTH_USER_DISPLAY,
      authname: 'Squidward',
      avatar: 'Squidward-123123123'
    });
    const expected = {
      authname: 'Squidward',
      avatar: 'Squidward-123123123',
      message: '',
      staffIsAuthenticated: false,
      userIsAuthenticated: true
    };
    expect(actual).toEqual(expected);
  });

  it('handles actions of type AUTH_USER_LOGIN_SUCCEEDED', () => {
    const actual = authReducer(initialState, {
      type: AUTH_USER_LOGIN_SUCCEEDED,
      message: 'Login successful.'
    });
    const expected = {
      authname: '',
      avatar: '',
      message: 'Login successful.',
      staffIsAuthenticated: false,
      userIsAuthenticated: false
    };
    expect(actual).toEqual(expected);
  });

  it('handles actions of type AUTH_USER_LOGIN_FAILED', () => {
    const actual = authReducer(initialState, {
      type: AUTH_USER_LOGIN_FAILED,
      message: 'Login failed.'
    });
    const expected = {
      authname: '',
      avatar: '',
      message: 'Login failed.',
      staffIsAuthenticated: false,
      userIsAuthenticated: false
    };
    expect(actual).toEqual(expected);
  });

  it('handles actions of type AUTH_USER_LOGOUT', () => {
    const actual = authReducer(beforeState, {type: AUTH_USER_LOGOUT});
    const expected = initialState;
    expect(actual).toEqual(expected);
  });

  it('handles actions of type AUTH_USER_LOGOUT_SUCCEEDED', () => {
    const actual = authReducer(initialState, {
      type: AUTH_USER_LOGOUT_SUCCEEDED,
      message: 'Logout successful.'
    });
    const expected = {
      authname: '',
      avatar: '',
      message: 'Logout successful.',
      staffIsAuthenticated: false,
      userIsAuthenticated: false
    };
    expect(actual).toEqual(expected);
  });

  it('handles actions of type AUTH_USER_LOGOUT_FAILED', () => {
    const actual = authReducer(initialState, {
      type: AUTH_USER_LOGOUT_FAILED,
      message: 'Logout failed.'
    });
    const expected = {
      authname: '',
      avatar: '',
      message: 'Logout failed.',
      staffIsAuthenticated: false,
      userIsAuthenticated: false
    };
    expect(actual).toEqual(expected);
  });

  it('handles actions of type AUTH_USER_REGISTER_SUCCEEDED', () => {
    const actual = authReducer(initialState, {
      type: AUTH_USER_REGISTER_SUCCEEDED,
      message: 'Registration successful.'
    });
    const expected = {
      authname: '',
      avatar: '',
      message: 'Registration successful.',
      staffIsAuthenticated: false,
      userIsAuthenticated: false
    };
    expect(actual).toEqual(expected);
  });

  it('handles actions of type AUTH_USER_REGISTER_FAILED', () => {
    const actual = authReducer(initialState, {
      type: AUTH_USER_REGISTER_FAILED,
      message: 'Registration failed.'
    });
    const expected = {
      authname: '',
      avatar: '',
      message: 'Registration failed.',
      staffIsAuthenticated: false,
      userIsAuthenticated: false
    };
    expect(actual).toEqual(expected);
  });
});