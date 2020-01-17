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
    const actual = messengerShowOnline('Sarah').type;
    const expected = MESSENGER_SHOW_ONLINE;
    expect(actual).toEqual(expected);
  });
  it('returns the correct user', () => {
    const actual = messengerShowOnline('Sarah').user;
    const expected = 'Sarah';
    expect(actual).toEqual(expected);
  });
});

describe('messengerShowOffline action creator', () => {
  it('returns the correct action type', () => {
    const actual = messengerShowOffline('Sarah').type;
    const expected = MESSENGER_SHOW_OFFLINE;
    expect(actual).toEqual(expected);
  });
  it('returns the correct user', () => {
    const actual = messengerShowOffline('Sarah').user;
    const expected = 'Sarah';
    expect(actual).toEqual(expected);
  });
});

describe('messengerChangeChannel action creator', () => {
  it('returns the correct action type', () => {
    const actual = messengerChangeChannel('5067').type;
    const expected = MESSENGER_CHANGE_CHANNEL;
    expect(actual).toEqual(expected);
  });
  it('returns the correct channel', () => {
    const actual = messengerChangeChannel('5067').channel;
    const expected = '5067';
    expect(actual).toEqual(expected);
  });
});

describe('messengerChangedChannel action creator', () => {
  it('returns the correct action type', () => {
    const actual = messengerChangedChannel('5067').type;
    const expected = MESSENGER_CHANGED_CHANNEL;
    expect(actual).toEqual(expected);
  });
  it('returns the correct channel', () => {
    const actual = messengerChangedChannel([], '5067').channel;
    const expected = '5067';
    expect(actual).toEqual(expected);
  });
});

describe('messengerJoinedUser action creator', () => {
  it('returns the correct action type', () => {
    const actual = messengerJoinedUser('Sarah').type;
    const expected = MESSENGER_JOINED_USER;
    expect(actual).toEqual(expected);
  });
  it('returns the correct user', () => {
    const actual = messengerJoinedUser('Sarah').user;
    const expected = 'Sarah';
    expect(actual).toEqual(expected);
  });
});

describe('messengerLeftUser action creator', () => {
  it('returns the correct action type', () => {
    const actual = messengerLeftUser('Sarah').type;
    const expected = MESSENGER_LEFT_USER;
    expect(actual).toEqual(expected);
  });
  it('returns the correct user', () => {
    const actual = messengerLeftUser('Sarah').user;
    const expected = 'Sarah';
    expect(actual).toEqual(expected);
  });
});

describe('messengerSendMessage action creator', () => {
  it('returns the correct action type', () => {
    const actual = messengerSendMessage('howdy').type;
    const expected = MESSENGER_SEND_MESSAGE;
    expect(actual).toEqual(expected);
  });
  it('returns the correct message', () => {
    const actual = messengerSendMessage('howdy').message;
    const expected = 'howdy';
    expect(actual).toEqual(expected);
  });
});

describe('messengerReceivedMessage action creator', () => {
  it('returns the correct action type', () => {
    const actual = messengerReceivedMessage('howdy').type;
    const expected = MESSENGER_RECEIVED_MESSAGE;
    expect(actual).toEqual(expected);
  });
  it('returns the correct message', () => {
    const actual = messengerReceivedMessage('howdy').message;
    const expected = 'howdy';
    expect(actual).toEqual(expected);
  });
});

describe('messengerSendWhisper action creator', () => {
  it('returns the correct action type', () => {
    const actual = messengerSendWhisper('How are you?', 'John').type;
    const expected = MESSENGER_SEND_WHISPER;
    expect(actual).toEqual(expected);
  });
  it('returns the correct whisper', () => {
    const actual = messengerSendWhisper('How are you?', 'John').whisper;
    const expected = 'How are you?';
    expect(actual).toEqual(expected);
  });
  it('returns the correct to', () => {
    const actual = messengerSendWhisper('How are you?', 'John').to;
    const expected = 'John';
    expect(actual).toEqual(expected);
  });
});

describe('messengerReceivedWhisper action creator', () => {
  it('returns the correct action type', () => {
    const actual = messengerReceivedWhisper({
      whisperId: '32873443823428384923',
      whisperText: 'How are you?',
      to: '0923849323432',
      user: {userId: 90, username: 'Jill', avatar: 'Jill'}
    }).type;
    const expected = MESSENGER_RECEIVED_WHISPER;
    expect(actual).toEqual(expected);
  });
  it('returns the correct ', () => {
    const actual = messengerReceivedWhisper({
      whisperId: '32873443823428384923',
      whisperText: 'How are you?',
      to: '0923849323432',
      user: {userId: 90, username: 'Jill', avatar: 'Jill'}
    }).whisper;
    const expected = {
      whisperId: '32873443823428384923',
      whisperText: 'How are you?',
      to: '0923849323432',
      user: {userId: 90, username: 'Jill', avatar: 'Jill'}
    };
    expect(actual).toEqual(expected);  // deep?
  });
});

describe('messengerGetOnline action creator', () => {
  it('returns the correct action type', () => {
    const actual = messengerGetOnline([{
      userId: 5,
      username: 'Alex',
      avatar: 'Alex'
    }]).type;
    const expected = MESSENGER_GET_ONLINE;
    expect(actual).toEqual(expected);
  });
  it('returns the correct ', () => {
    const actual = messengerGetOnline([{
      userId: 5,
      username: 'Alex',
      avatar: 'Alex'
    }]).online;
    const expected = [{
      userId: 5,
      username: 'Alex',
      avatar: 'Alex'
    }];
    expect(actual).toEqual(expected);  // deep?
  });
});