import {
  AUTH_USER_REGISTER_SUCCEEDED,
  AUTH_USER_REGISTER_FAILED,
  AUTH_USER_LOGIN_SUCCEEDED,
  AUTH_USER_LOGIN_FAILED,
  AUTH_USER_LOGOUT_SUCCEEDED,
  AUTH_USER_LOGOUT_FAILED,
  AUTH_STAFF_LOGIN_SUCCEEDED,
  AUTH_STAFF_LOGIN_FAILED,
  AUTH_STAFF_LOGOUT_SUCCEEDED,
  AUTH_STAFF_LOGOUT_FAILED,
  AUTH_MESSAGE_CLEAR,
  AUTH_DISPLAY,
  AUTH_UPDATE_LOCAL_AVATAR,
  AUTH_RESET,
  AUTH_USER_LOGOUT,
  AUTH_STAFF_LOGOUT
} from './types';
import authReducer from './reducer';

const initialState = {
  message: '',
  isAuthenticated: false,
  authname: '',
  avatar: ''
};

// move
const beforeState = {
  message: '',
  isAuthenticated: true,
  authname: 'Spongebob',
  avatar: 'Spongebob'
};

describe('the auth reducer', () => {
  it('returns initial state', () => {
    const actual = authReducer(undefined, {
      type: AUTH_USER_REGISTER_SUCCEEDED,
      message: 'Registration successful.'
    });
    const expected = {
      message: 'Registration successful.',
      isAuthenticated: false,
      authname: '',
      avatar: ''
    };
    expect(actual).toEqual(expected);
  });

  it('handles actions of type AUTH_USER_REGISTER_SUCCEEDED', () => {
    const actual = authReducer(initialState, {
      type: AUTH_USER_REGISTER_SUCCEEDED,
      message: 'Registration successful.'
    });
    const expected = {
      message: 'Registration successful.',
      isAuthenticated: false,
      authname: '',
      avatar: ''
    };
    expect(actual).toEqual(expected);
  });

  it('handles actions of type AUTH_USER_REGISTER_FAILED', () => {
    const actual = authReducer(initialState, {
      type: AUTH_USER_REGISTER_FAILED,
      message: 'Registration failed.'
    });
    const expected = {
      message: 'Registration failed.',
      isAuthenticated: false,
      authname: '',
      avatar: ''
    };
    expect(actual).toEqual(expected);
  });

  it('handles actions of type AUTH_USER_LOGIN_SUCCEEDED', () => {
    const actual = authReducer(initialState, {
      type: AUTH_USER_LOGIN_SUCCEEDED,
      message: 'Login successful.'
    });
    const expected = {
      message: 'Login successful.',
      isAuthenticated: false,
      authname: '',
      avatar: ''
    };
    expect(actual).toEqual(expected);
  });

  it('handles actions of type AUTH_USER_LOGIN_FAILED', () => {
    const actual = authReducer(initialState, {
      type: AUTH_USER_LOGIN_FAILED,
      message: 'Login failed.'
    });
    const expected = {
      message: 'Login failed.',
      isAuthenticated: false,
      authname: '',
      avatar: ''
    };
    expect(actual).toEqual(expected);
  });

  it('handles actions of type AUTH_USER_LOGOUT_SUCCEEDED', () => {
    const actual = authReducer(initialState, {
      type: AUTH_USER_LOGOUT_SUCCEEDED,
      message: 'Logout successful.'
    });
    const expected = {
      message: 'Logout successful.',
      isAuthenticated: false,
      authname: '',
      avatar: ''
    };
    expect(actual).toEqual(expected);
  });

  it('handles actions of type AUTH_USER_LOGOUT_FAILED', () => {
    const actual = authReducer(initialState, {
      type: AUTH_USER_LOGOUT_FAILED,
      message: 'Logout failed.'
    });
    const expected = {
      message: 'Logout failed.',
      isAuthenticated: false,
      authname: '',
      avatar: ''
    };
    expect(actual).toEqual(expected);
  });

  it('handles actions of type AUTH_STAFF_LOGIN_SUCCEEDED', () => {
    const actual = authReducer(initialState, {
      type: AUTH_STAFF_LOGIN_SUCCEEDED,
      message: 'Login successful.'
    });
    const expected = {
      message: 'Login successful.',
      isAuthenticated: false,
      authname: '',
      avatar: ''
    };
    expect(actual).toEqual(expected);
  });

  it('handles actions of type AUTH_STAFF_LOGIN_FAILED', () => {
    const actual = authReducer(initialState, {
      type: AUTH_STAFF_LOGIN_FAILED,
      message: 'Login failed.'
    });
    const expected = {
      message: 'Login failed.',
      isAuthenticated: false,
      authname: '',
      avatar: ''
    };
    expect(actual).toEqual(expected);
  });
  
  it('handles actions of type AUTH_STAFF_LOGOUT_SUCCEEDED', () => {
    const actual = authReducer(initialState, {
      type: AUTH_STAFF_LOGOUT_SUCCEEDED,
      message: 'Logout successful.'
    });
    const expected = {
      message: 'Logout successful.',
      isAuthenticated: false,
      authname: '',
      avatar: ''
    };
    expect(actual).toEqual(expected);
  });

  it('handles actions of type AUTH_STAFF_LOGOUT_FAILED', () => {
    const actual = authReducer(initialState, {
      type: AUTH_STAFF_LOGOUT_FAILED,
      message: 'Logout failed.'
    });
    const expected = {
      message: 'Logout failed.',
      isAuthenticated: false,
      authname: '',
      avatar: ''
    };
    expect(actual).toEqual(expected);
  });

  it('handles actions of type AUTH_MESSAGE_CLEAR', () => {
    const actual = authReducer({
      message: 'Incorrect email or password.',
      isAuthenticated: false,
      authname: '',
      avatar: ''
    }, {type: AUTH_MESSAGE_CLEAR});
    const expected = {
      message: '',
      isAuthenticated: false,
      authname: '',
      avatar: ''
    };
    expect(actual).toEqual(expected);
  });

  it('handles actions of type AUTH_DISPLAY', () => {
    const actual = authReducer(initialState, {
      type: AUTH_DISPLAY,
      authname: 'Squidward',
      avatar: 'Squidward-123123123'
    });
    const expected = {
      message: '',
      isAuthenticated: true,
      authname: 'Squidward',
      avatar: 'Squidward-123123123'
    };
    expect(actual).toEqual(expected);
  });

  it('handles actions of type AUTH_UPDATE_LOCAL_AVATAR', () => {
    const actual = authReducer(beforeState, {
      type: AUTH_UPDATE_LOCAL_AVATAR,
      avatar: 'Squidward-456456456'
    });
    const expected = {
      message: '',
      isAuthenticated: true,
      authname: 'Spongebob',
      avatar: 'Squidward-456456456'
    };
    expect(actual).toEqual(expected);
  });

  it('handles actions of type AUTH_RESET', () => {
    const actual = authReducer(beforeState, {type: AUTH_RESET});
    const expected = initialState;
    expect(actual).toEqual(expected);
  });

  it('handles actions of type AUTH_USER_LOGOUT', () => {
    const actual = authReducer(beforeState, {type: AUTH_USER_LOGOUT});
    const expected = initialState;
    expect(actual).toEqual(expected);
  });

  it('handles actions of type AUTH_STAFF_LOGOUT', () => {
    const actual = authReducer(beforeState, {type: AUTH_STAFF_LOGOUT});
    const expected = initialState;
    expect(actual).toEqual(expected);
  });
});