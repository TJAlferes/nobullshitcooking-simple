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

describe('userSubmitAvatar action creator', () => {
  it('returns the correct action type', () => {
    expect(userSubmitAvatar(fullAvatar, tinyAvatar).type)
      .toEqual(USER_SUBMIT_AVATAR);
  });

  it('returns the correct fullAvatar', () => {
    expect(userSubmitAvatar(fullAvatar, tinyAvatar).fullAvatar)
      .toEqual(fullAvatar);
  });
  
  it('returns the correct tinyAvatar', () => {
    expect(userSubmitAvatar(fullAvatar, tinyAvatar).tinyAvatar)
      .toEqual(tinyAvatar);
  });
});

describe('userSubmitAvatarSucceeded action creator', () => {
  it('returns the correct action type', () => {
    expect(userSubmitAvatarSucceeded('OK.').type)
      .toEqual(USER_SUBMIT_AVATAR_SUCCEEDED);
  });

  it('returns the correct message', () => {
    expect(userSubmitAvatarSucceeded('OK.').message).toEqual('OK.');
  });
});

describe('userSubmitAvatarFailed action creator', () => {
  it('returns the correct action type', () => {
    expect(userSubmitAvatarFailed('Try again.').type)
      .toEqual(USER_SUBMIT_AVATAR_FAILED);
  });

  it('returns the correct message', () => {
    expect(userSubmitAvatarFailed('Try again.').message).toEqual('Try again.');
  });
});