import {
  userSubmitAvatar,
  userSubmitAvatarSucceeded,
  userSubmitAvatarFailed
} from './actions';
import {
  USER_SUBMIT_AVATAR,
  USER_SUBMIT_AVATAR_SUCCEEDED,
  USER_SUBMIT_AVATAR_FAILED
} from './types';

const fullAvatar = new File([(new Blob)], "resizedFinal", {type: "image/jpeg"});
const tinyAvatar = new File([(new Blob)], "resizedTiny", {type: "image/jpeg"});

describe('the userSubmitAvatar action creator', () => {
  it('returns the correct action type', () => {
    const actual = userSubmitAvatar(fullAvatar, tinyAvatar).type;
    const expected = USER_SUBMIT_AVATAR;
    expect(actual).toEqual(expected);
  });

  it('returns the correct fullAvatar', () => {
    const actual = userSubmitAvatar(fullAvatar, tinyAvatar).fullAvatar;
    const expected = fullAvatar;
    expect(actual).toEqual(expected);
  });
  
  it('returns the correct tinyAvatar', () => {
    const actual = userSubmitAvatar(fullAvatar, tinyAvatar).tinyAvatar;
    const expected = tinyAvatar;
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