import {
  MESSENGER_SHOW_ONLINE,
  MESSENGER_SHOW_OFFLINE,
  MESSENGER_CHANGE_CHANNEL,
  MESSENGER_CHANGED_CHANNEL,
  MESSENGER_JOINED_USER,
  MESSENGER_LEFT_USER,
  MESSENGER_SEND_MESSAGE,
  MESSENGER_RECEIVED_MESSAGE,
  MESSENGER_SEND_WHISPER,
  MESSENGER_RECEIVED_WHISPER,
  MESSENGER_GET_ONLINE
} from './actionTypes';

import {
  messengerShowOnline,
  messengerShowOffline,
  messengerChangeChannel,
  messengerChangedChannel,
  messengerJoinedUser,
  messengerLeftUser,
  messengerSendMessage,
  messengerReceivedMessage,
  messengerSendWhisper,
  messengerReceivedWhisper,
  messengerGetOnline
} from './messenger';

describe('messengerShowOnline action creator', () => {
  it('returns the correct action type', () => {
    const actual = messengerShowOnline().type;
    const expected = MESSENGER_SHOW_ONLINE;
    expect(actual).toEqual(expected);
  });
  it('returns the correct ', () => {
    const actual = messengerShowOnline().;
    const expected = '';
    expect(actual).toEqual(expected);
  });
});

describe('messengerShowOffline action creator', () => {
  it('returns the correct action type', () => {
    const actual = messengerShowOffline().type;
    const expected = MESSENGER_SHOW_OFFLINE;
    expect(actual).toEqual(expected);
  });
  it('returns the correct ', () => {
    const actual = messengerShowOffline().;
    const expected = '';
    expect(actual).toEqual(expected);
  });
});

describe('messengerChangeChannel action creator', () => {
  it('returns the correct action type', () => {
    const actual = messengerChangeChannel().type;
    const expected = MESSENGER_CHANGE_CHANNEL;
    expect(actual).toEqual(expected);
  });
  it('returns the correct ', () => {
    const actual = messengerChangeChannel().;
    const expected = '';
    expect(actual).toEqual(expected);
  });
});

describe('messengerChangedChannel action creator', () => {
  it('returns the correct action type', () => {
    const actual = messengerChangedChannel().type;
    const expected = MESSENGER_CHANGED_CHANNEL;
    expect(actual).toEqual(expected);
  });
  it('returns the correct ', () => {
    const actual = messengerChangedChannel().;
    const expected = '';
    expect(actual).toEqual(expected);
  });
});

describe('messengerJoinedUser action creator', () => {
  it('returns the correct action type', () => {
    const actual = messengerJoinedUser().type;
    const expected = MESSENGER_JOINED_USER;
    expect(actual).toEqual(expected);
  });
  it('returns the correct ', () => {
    const actual = messengerJoinedUser().;
    const expected = '';
    expect(actual).toEqual(expected);
  });
});

describe('messengerLeftUser action creator', () => {
  it('returns the correct action type', () => {
    const actual = messengerLeftUser().type;
    const expected = MESSENGER_LEFT_USER;
    expect(actual).toEqual(expected);
  });
  it('returns the correct ', () => {
    const actual = messengerLeftUser().;
    const expected = '';
    expect(actual).toEqual(expected);
  });
});

describe('messengerSendMessage action creator', () => {
  it('returns the correct action type', () => {
    const actual = messengerSendMessage().type;
    const expected = MESSENGER_SEND_MESSAGE;
    expect(actual).toEqual(expected);
  });
  it('returns the correct ', () => {
    const actual = messengerSendMessage().;
    const expected = '';
    expect(actual).toEqual(expected);
  });
});

describe('messengerReceivedMessage action creator', () => {
  it('returns the correct action type', () => {
    const actual = messengerReceivedMessage().type;
    const expected = MESSENGER_RECEIVED_MESSAGE;
    expect(actual).toEqual(expected);
  });
  it('returns the correct ', () => {
    const actual = messengerReceivedMessage().;
    const expected = '';
    expect(actual).toEqual(expected);
  });
});

describe('messengerSendWhisper action creator', () => {
  it('returns the correct action type', () => {
    const actual = messengerSendWhisper().type;
    const expected = MESSENGER_SEND_WHISPER;
    expect(actual).toEqual(expected);
  });
  it('returns the correct ', () => {
    const actual = messengerSendWhisper().;
    const expected = '';
    expect(actual).toEqual(expected);
  });
});

describe('messengerReceivedWhisper action creator', () => {
  it('returns the correct action type', () => {
    const actual = messengerReceivedWhisper().type;
    const expected = MESSENGER_RECEIVED_WHISPER;
    expect(actual).toEqual(expected);
  });
  it('returns the correct ', () => {
    const actual = messengerReceivedWhisper().;
    const expected = '';
    expect(actual).toEqual(expected);
  });
});

describe('messengerGetOnline action creator', () => {
  it('returns the correct action type', () => {
    const actual = messengerGetOnline().type;
    const expected = MESSENGER_GET_ONLINE;
    expect(actual).toEqual(expected);
  });
  it('returns the correct ', () => {
    const actual = messengerGetOnline().;
    const expected = '';
    expect(actual).toEqual(expected);
  });
});