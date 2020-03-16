import {
  USER_SUBMIT_AVATAR,
  USER_SUBMIT_AVATAR_SUCCEEDED,
  USER_SUBMIT_AVATAR_FAILED
} from './types';

import {
  userSubmitAvatar,
  userSubmitAvatarSucceeded,
  userSubmitAvatarFailed
} from './actions';

describe('the userSubmitAvatar action creator', () => {
  it('returns the correct action type', () => {
    const actual = userSubmitAvatar('some-url', 'some-other-url').type;
    const expected = USER_SUBMIT_AVATAR;
    expect(actual).toEqual(expected);
  });

  it('returns the correct fullAvatar', () => {
    const actual = userSubmitAvatar('some-url', 'some-other-url').fullAvatar;
    const expected = 'some-url';
    expect(actual).toEqual(expected);
  });
  
  it('returns the correct tinyAvatar', () => {
    const actual = userSubmitAvatar('some-url', 'some-other-url').tinyAvatar;
    const expected = 'some-other-url';
    expect(actual).toEqual(expected);
  });
});

describe('the userSubmitAvatarSucceeded action creator', () => {
  it('returns the correct action type', () => {
    const actual = userSubmitAvatarSucceeded('OK.').type;
    const expected = USER_SUBMIT_AVATAR_SUCCEEDED;
    expect(actual).toEqual(expected);
  });

  it('returns the correct message', () => {
    const actual = userSubmitAvatarSucceeded('OK.').message;
    const expected = 'OK.';
    expect(actual).toEqual(expected);
  });
});

describe('the userSubmitAvatarFailed action creator', () => {
  it('returns the correct action type', () => {
    const actual = userSubmitAvatarFailed('Try again.').type;
    const expected = USER_SUBMIT_AVATAR_FAILED;
    expect(actual).toEqual(expected);
  });

  it('returns the correct message', () => {
    const actual = userSubmitAvatarFailed('Try again.').message;
    const expected = 'Try again.';
    expect(actual).toEqual(expected);
  });
});