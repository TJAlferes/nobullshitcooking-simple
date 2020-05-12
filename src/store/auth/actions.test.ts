import {
  AUTH_DISPLAY,
  AUTH_UPDATE_LOCAL_AVATAR,
  AUTH_USER_REGISTER,
  AUTH_USER_VERIFY,
  AUTH_USER_LOGIN
} from './types';
import {
  authDisplay,
  authUpdateLocalAvatar,
  authUserRegister,
  authUserVerify,
  authUserLogin
} from './actions';

describe('authDisplay action creator', () => {
  it('returns the correct action type', () => {
    const actual = authDisplay('Allison', 'Allison').type;
    const expected = AUTH_DISPLAY;
    expect(actual).toEqual(expected);
  });
  it('returns the correct authname', () => {
    const actual = authDisplay('Allison', 'Allison').authname;
    const expected = 'Allison';
    expect(actual).toEqual(expected);
  });
  it('returns the correct avatar', () => {
    const actual = authDisplay('Allison', 'Allison').avatar;
    const expected = 'Allison';
    expect(actual).toEqual(expected);
  });
});

describe('authUpdateLocalAvatar action creator', () => {
  it('returns the correct action type', () => {
    const actual = authUpdateLocalAvatar('Leeroy').type;
    const expected = AUTH_UPDATE_LOCAL_AVATAR;
    expect(actual).toEqual(expected);
  });
  it('returns the correct avatar', () => {
    const actual = authUpdateLocalAvatar('Leeroy').avatar;
    const expected = 'Leeroy';
    expect(actual).toEqual(expected);
  });
});

describe('authUserRegister action creator', () => {
  it('returns the correct action type', () => {
    const actual = authUserRegister(
      'coolperson@coolplace.com',
      'supersecret',
      'CoolPerson',
      {}
    ).type;
    const expected = AUTH_USER_REGISTER;
    expect(actual).toEqual(expected);
  });
  it('returns the correct email', () => {
    const actual = authUserRegister(
      'coolperson@coolplace.com',
      'supersecret',
      'CoolPerson',
      {}
    ).email;
    const expected = 'coolperson@coolplace.com';
    expect(actual).toEqual(expected);
  });
  it('returns the correct password', () => {
    const actual = authUserRegister(
      'coolperson@coolplace.com',
      'supersecret',
      'CoolPerson',
      {}
    ).password;
    const expected = 'supersecret';
    expect(actual).toEqual(expected);
  });
  it('returns the correct username', () => {
    const actual = authUserRegister(
      'coolperson@coolplace.com',
      'supersecret',
      'CoolPerson',
      {}
    ).username;
    const expected = 'CoolPerson';
    expect(actual).toEqual(expected);
  });
});

describe('authUserVerify action creator', () => {
  it('returns the correct action type', () => {
    const actual = authUserVerify(
      'coolperson@coolplace.com',
      'supersecret',
      'SOMERANDOMCODE',
      {}
    ).type;
    const expected = AUTH_USER_VERIFY;
    expect(actual).toEqual(expected);
  });
  it('returns the correct email', () => {
    const actual = authUserVerify(
      'coolperson@coolplace.com',
      'supersecret',
      'SOMERANDOMCODE',
      {}
    ).email;
    const expected = 'coolperson@coolplace.com';
    expect(actual).toEqual(expected);
  });
  it('returns the correct password', () => {
    const actual = authUserVerify(
      'coolperson@coolplace.com',
      'supersecret',
      'SOMERANDOMCODE',
      {}
    ).password;
    const expected = 'supersecret';
    expect(actual).toEqual(expected);
  });
  it('returns the correct confirmationCode', () => {
    const actual = authUserVerify(
      'coolperson@coolplace.com',
      'supersecret',
      'SOMERANDOMCODE',
      {}
    ).confirmationCode;
    const expected = 'SOMERANDOMCODE';
    expect(actual).toEqual(expected);
  });
});

describe('authUserLogin action creator', () => {
  it('returns the correct action type', () => {
    const actual = authUserLogin(
      'coolperson@coolplace.com',
      'supersecret'
    ).type;
    const expected = AUTH_USER_LOGIN;
    expect(actual).toEqual(expected);
  });
  it('returns the correct email', () => {
    const actual = authUserLogin(
      'coolperson@coolplace.com',
      'supersecret'
    ).email;
    const expected = 'coolperson@coolplace.com';
    expect(actual).toEqual(expected);
  });
  it('returns the correct password', () => {
    const actual = authUserLogin(
      'coolperson@coolplace.com',
      'supersecret'
    ).password;
    const expected = 'supersecret';
    expect(actual).toEqual(expected);
  });
});