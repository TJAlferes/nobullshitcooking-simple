import {
  MESSENGER_CONNECT,
  MESSENGER_CONNECTED,
  MESSENGER_DISCONNECT,
  MESSENGER_DISCONNECTED,

  MESSENGER_GET_ONLINE,
  MESSENGER_SHOW_ONLINE,
  MESSENGER_SHOW_OFFLINE,

  MESSENGER_CHANGE_CHANNEL,
  MESSENGER_CHANGED_CHANNEL,
  MESSENGER_REJOINED_CHANNEL,
  MESSENGER_JOINED_USER,
  MESSENGER_LEFT_USER,

  MESSENGER_SEND_MESSAGE,
  MESSENGER_RECEIVED_MESSAGE,
  MESSENGER_SEND_WHISPER,
  MESSENGER_RECEIVED_WHISPER,
  MESSENGER_FAILED_WHISPER
} from './actionTypes';

import {
  messengerConnect,
  messengerConnected,
  messengerDisconnect,
  messengerDisconnected,

  messengerGetOnline,
  messengerShowOnline,
  messengerShowOffline,

  messengerChangeChannel,
  messengerChangedChannel,
  messengerRejoinedChannel,
  messengerJoinedUser,
  messengerLeftUser,

  messengerSendMessage,
  messengerReceivedMessage,
  messengerSendWhisper,
  messengerReceivedWhisper,
  messengerFailedWhisper
} from './messenger';



describe('the messengerConnect action creator', () => {
  it('returns the correct action type', () => {
    const actual = messengerConnect().type;
    const expected = MESSENGER_CONNECT;
    expect(actual).toEqual(expected);
  });
});

describe('the messengerConnected action creator', () => {
  it('returns the correct action type', () => {
    const actual = messengerConnected().type;
    const expected = MESSENGER_CONNECTED;
    expect(actual).toEqual(expected);
  });
});

describe('the messengerDisconnect action creator', () => {
  it('returns the correct action type', () => {
    const actual = messengerDisconnect().type;
    const expected = MESSENGER_DISCONNECT;
    expect(actual).toEqual(expected);
  });
});

describe('the messengerDisconnected action creator', () => {
  it('returns the correct action type', () => {
    const actual = messengerDisconnected().type;
    const expected = MESSENGER_DISCONNECTED;
    expect(actual).toEqual(expected);
  });
});



describe('the messengerGetOnline action creator', () => {
  it('returns the correct action type', () => {
    const actual = messengerGetOnline([
      {userId: 5, username: 'Alex', avatar: 'Alex'}
    ]).type;
    const expected = MESSENGER_GET_ONLINE;
    expect(actual).toEqual(expected);
  });
  it('returns the correct online', () => {
    const actual = messengerGetOnline([
      {userId: 5, username: 'Alex', avatar: 'Alex'}
    ]).online;
    const expected = [
      {userId: 5, username: 'Alex', avatar: 'Alex'}
    ];
    expect(actual).toEqual(expected);  // deep?
  });
});

describe('the messengerShowOnline action creator', () => {
  it('returns the correct action type', () => {
    const actual = messengerShowOnline(
      {userId: 5, username: 'Alex', avatar: 'Alex'}
    ).type;
    const expected = MESSENGER_SHOW_ONLINE;
    expect(actual).toEqual(expected);
  });
  it('returns the correct user', () => {
    const actual = messengerShowOnline(
      {userId: 5, username: 'Alex', avatar: 'Alex'}
    ).user;
    const expected = {userId: 5, username: 'Alex', avatar: 'Alex'};
    expect(actual).toEqual(expected);
  });
});

describe('the messengerShowOffline action creator', () => {
  it('returns the correct action type', () => {
    const actual = messengerShowOffline(
      {userId: 5, username: 'Alex', avatar: 'Alex'}
    ).type;
    const expected = MESSENGER_SHOW_OFFLINE;
    expect(actual).toEqual(expected);
  });
  it('returns the correct user', () => {
    const actual = messengerShowOffline(
      {userId: 5, username: 'Alex', avatar: 'Alex'}
    ).user;
    const expected = {userId: 5, username: 'Alex', avatar: 'Alex'};
    expect(actual).toEqual(expected);
  });
});



describe('the messengerChangeChannel action creator', () => {
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

describe('the messengerChangedChannel action creator', () => {
  it('returns the correct action type', () => {
    const actual = messengerChangedChannel(
      [
        {userId: 4, username: 'Aaron', avatar: 'Aaron'},
        {userId: 5, username: 'Alex', avatar: 'Alex'}
      ],
      '5067'
    ).type;
    const expected = MESSENGER_CHANGED_CHANNEL;
    expect(actual).toEqual(expected);
  });

  it('returns the correct users', () => {
    const actual = messengerChangedChannel(
      [
        {userId: 4, username: 'Aaron', avatar: 'Aaron'},
        {userId: 5, username: 'Alex', avatar: 'Alex'}
      ],
      '5067'
    ).users;
    const expected = [
      {userId: 4, username: 'Aaron', avatar: 'Aaron'},
      {userId: 5, username: 'Alex', avatar: 'Alex'},
    ];
    expect(actual).toEqual(expected);
  });

  it('returns the correct channel', () => {
    const actual = messengerChangedChannel(
      [
        {userId: 4, username: 'Aaron', avatar: 'Aaron'},
        {userId: 5, username: 'Alex', avatar: 'Alex'}
      ],
      '5067'
    ).channel;
    const expected = '5067';
    expect(actual).toEqual(expected);
  });
});

describe('the messengerRejoinedChannel action creator', () => {
  it('returns the correct action type', () => {
    const actual = messengerRejoinedChannel(
      [
        {userId: 4, username: 'Aaron', avatar: 'Aaron'},
        {userId: 5, username: 'Alex', avatar: 'Alex'},
      ],
      '5067'
    ).type;
    const expected = MESSENGER_REJOINED_CHANNEL;
    expect(actual).toEqual(expected);
  });

  it('returns the correct users', () => {
    const actual = messengerRejoinedChannel(
      [
        {userId: 4, username: 'Aaron', avatar: 'Aaron'},
        {userId: 5, username: 'Alex', avatar: 'Alex'},
      ],
      '5067'
    ).users;
    const expected = [
      {userId: 4, username: 'Aaron', avatar: 'Aaron'},
      {userId: 5, username: 'Alex', avatar: 'Alex'},
    ];
    expect(actual).toEqual(expected);
  });
  
  it('returns the correct channel', () => {
    const actual = messengerRejoinedChannel(
      [
        {userId: 4, username: 'Aaron', avatar: 'Aaron'},
        {userId: 5, username: 'Alex', avatar: 'Alex'},
      ],
      '5067'
    ).channel;
    const expected = '5067';
    expect(actual).toEqual(expected);
  });
});

describe('the messengerJoinedUser action creator', () => {
  it('returns the correct action type', () => {
    const actual = messengerJoinedUser(
      {userId: 5, username: 'Alex', avatar: 'Alex'}
    ).type;
    const expected = MESSENGER_JOINED_USER;
    expect(actual).toEqual(expected);
  });
  it('returns the correct user', () => {
    const actual = messengerJoinedUser(
      {userId: 5, username: 'Alex', avatar: 'Alex'}
    ).user;
    const expected = {userId: 5, username: 'Alex', avatar: 'Alex'};
    expect(actual).toEqual(expected);
  });
});

describe('the messengerLeftUser action creator', () => {
  it('returns the correct action type', () => {
    const actual = messengerLeftUser(
      {userId: 5, username: 'Alex', avatar: 'Alex'}
    ).type;
    const expected = MESSENGER_LEFT_USER;
    expect(actual).toEqual(expected);
  });
  it('returns the correct user', () => {
    const actual = messengerLeftUser(
      {userId: 5, username: 'Alex', avatar: 'Alex'}
    ).user;
    const expected = {userId: 5, username: 'Alex', avatar: 'Alex'};
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
    const actual = messengerReceivedMessage({
      chatMessageId: 555 + (new Date).getTime().toString(),
      chatMessageText: "Hey! How are you?",
      room: "GrillNChill",
      user: {userId: 555, username: "Joe555", avatar: "Joe555"},
      ts: `${(new Date).toLocaleTimeString()}`
    }).type;
    const expected = MESSENGER_RECEIVED_MESSAGE;
    expect(actual).toEqual(expected);
  });
  it('returns the correct message', () => {
    const actual = messengerReceivedMessage({
      chatMessageId: 555 + (new Date).getTime().toString(),
      chatMessageText: "Hey! How are you?",
      room: "GrillNChill",
      user: {userId: 555, username: "Joe555", avatar: "Joe555"},
      ts: `${(new Date).toLocaleTimeString()}`
    }).message;
    const expected = {
      chatMessageId: 555 + (new Date).getTime().toString(),
      chatMessageText: "Hey! How are you?",
      room: "GrillNChill",
      user: {userId: 555, username: "Joe555", avatar: "Joe555"},
      ts: `${(new Date).toLocaleTimeString()}`
    };
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
      user: {userId: 90, username: 'Jill', avatar: 'Jill'},
      ts: `${(new Date).toLocaleTimeString()}`
    }).type;
    const expected = MESSENGER_RECEIVED_WHISPER;
    expect(actual).toEqual(expected);
  });
  it('returns the correct ', () => {
    const actual = messengerReceivedWhisper({
      whisperId: '32873443823428384923',
      whisperText: 'How are you?',
      to: '0923849323432',
      user: {userId: 90, username: 'Jill', avatar: 'Jill'},
      ts: `${(new Date).toLocaleTimeString()}`
    }).whisper;
    const expected = {
      whisperId: '32873443823428384923',
      whisperText: 'How are you?',
      to: '0923849323432',
      user: {userId: 90, username: 'Jill', avatar: 'Jill'},
      ts: `${(new Date).toLocaleTimeString()}`
    };
    expect(actual).toEqual(expected);  // deep?
  });
});

describe('the messengerFailedWhisper action creator', () => {
  it('returns the correct action type', () => {
    const actual = messengerFailedWhisper("User not found.").type;
    const expected = MESSENGER_FAILED_WHISPER;
    expect(actual).toEqual(expected);
  });
  it('returns the correct feedback', () => {
    const actual = messengerFailedWhisper("User not found.").feedback;
    const expected = "User not found.";
    expect(actual).toEqual(expected);
  });
});