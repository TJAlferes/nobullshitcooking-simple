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
} from './actions';
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
  MESSENGER_FAILED_WHISPER,
  KMessage,
  KWhisper
} from './types';

describe('messengerConnect action creator', () => {
  it('returns the correct action type', () => {
    const actual = messengerConnect().type;
    const expected = MESSENGER_CONNECT;
    expect(actual).toEqual(expected);
  });
});

describe('messengerConnected action creator', () => {
  it('returns the correct action type', () => {
    const actual = messengerConnected().type;
    const expected = MESSENGER_CONNECTED;
    expect(actual).toEqual(expected);
  });
});

describe('messengerDisconnect action creator', () => {
  it('returns the correct action type', () => {
    const actual = messengerDisconnect().type;
    const expected = MESSENGER_DISCONNECT;
    expect(actual).toEqual(expected);
  });
});

describe('messengerDisconnected action creator', () => {
  it('returns the correct action type', () => {
    const actual = messengerDisconnected().type;
    const expected = MESSENGER_DISCONNECTED;
    expect(actual).toEqual(expected);
  });
});

describe('messengerGetOnline action creator', () => {
  it('returns the correct action type', () => {
    const actual = messengerGetOnline([
      {id: '5', username: 'Alex', avatar: 'Alex'}
    ]).type;
    const expected = MESSENGER_GET_ONLINE;
    expect(actual).toEqual(expected);
  });
  it('returns the correct online', () => {
    const actual = messengerGetOnline([
      {id: '5', username: 'Alex', avatar: 'Alex'}
    ]).online;
    const expected = [
      {id: '5', username: 'Alex', avatar: 'Alex'}
    ];
    expect(actual).toEqual(expected);  // deep?
  });
});

describe('messengerShowOnline action creator', () => {
  it('returns the correct action type', () => {
    const actual = messengerShowOnline(
      {id: '5', username: 'Alex', avatar: 'Alex'}
    ).type;
    const expected = MESSENGER_SHOW_ONLINE;
    expect(actual).toEqual(expected);
  });
  it('returns the correct user', () => {
    const actual = messengerShowOnline(
      {id: '5', username: 'Alex', avatar: 'Alex'}
    ).user;
    const expected = {id: '5', username: 'Alex', avatar: 'Alex'};
    expect(actual).toEqual(expected);
  });
});

describe('messengerShowOffline action creator', () => {
  it('returns the correct action type', () => {
    const actual = messengerShowOffline(
      {id: '5', username: 'Alex', avatar: 'Alex'}
    ).type;
    const expected = MESSENGER_SHOW_OFFLINE;
    expect(actual).toEqual(expected);
  });
  it('returns the correct user', () => {
    const actual = messengerShowOffline(
      {id: '5', username: 'Alex', avatar: 'Alex'}
    ).user;
    const expected = {id: '5', username: 'Alex', avatar: 'Alex'};
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
    const actual = messengerChangedChannel(
      [
        {id: '4', username: 'Aaron', avatar: 'Aaron'},
        {id: '5', username: 'Alex', avatar: 'Alex'}
      ],
      '5067'
    ).type;
    const expected = MESSENGER_CHANGED_CHANNEL;
    expect(actual).toEqual(expected);
  });

  it('returns the correct users', () => {
    const actual = messengerChangedChannel(
      [
        {id: '4', username: 'Aaron', avatar: 'Aaron'},
        {id: '5', username: 'Alex', avatar: 'Alex'}
      ],
      '5067'
    ).users;
    const expected = [
      {id: '4', username: 'Aaron', avatar: 'Aaron'},
      {id: '5', username: 'Alex', avatar: 'Alex'},
    ];
    expect(actual).toEqual(expected);
  });

  it('returns the correct channel', () => {
    const actual = messengerChangedChannel(
      [
        {id: '4', username: 'Aaron', avatar: 'Aaron'},
        {id: '5', username: 'Alex', avatar: 'Alex'}
      ],
      '5067'
    ).channel;
    const expected = '5067';
    expect(actual).toEqual(expected);
  });
});

describe('messengerRejoinedChannel action creator', () => {
  it('returns the correct action type', () => {
    const actual = messengerRejoinedChannel(
      [
        {id: '4', username: 'Aaron', avatar: 'Aaron'},
        {id: '5', username: 'Alex', avatar: 'Alex'},
      ],
      '5067'
    ).type;
    const expected = MESSENGER_REJOINED_CHANNEL;
    expect(actual).toEqual(expected);
  });

  it('returns the correct users', () => {
    const actual = messengerRejoinedChannel(
      [
        {id: '4', username: 'Aaron', avatar: 'Aaron'},
        {id: '5', username: 'Alex', avatar: 'Alex'},
      ],
      '5067'
    ).users;
    const expected = [
      {id: '4', username: 'Aaron', avatar: 'Aaron'},
      {id: '5', username: 'Alex', avatar: 'Alex'},
    ];
    expect(actual).toEqual(expected);
  });
  
  it('returns the correct channel', () => {
    const actual = messengerRejoinedChannel(
      [
        {id: '4', username: 'Aaron', avatar: 'Aaron'},
        {id: '5', username: 'Alex', avatar: 'Alex'},
      ],
      '5067'
    ).channel;
    const expected = '5067';
    expect(actual).toEqual(expected);
  });
});

describe('messengerJoinedUser action creator', () => {
  it('returns the correct action type', () => {
    const actual = messengerJoinedUser(
      {id: '5', username: 'Alex', avatar: 'Alex'}
    ).type;
    const expected = MESSENGER_JOINED_USER;
    expect(actual).toEqual(expected);
  });
  it('returns the correct user', () => {
    const actual = messengerJoinedUser(
      {id: '5', username: 'Alex', avatar: 'Alex'}
    ).user;
    const expected = {id: '5', username: 'Alex', avatar: 'Alex'};
    expect(actual).toEqual(expected);
  });
});

describe('messengerLeftUser action creator', () => {
  it('returns the correct action type', () => {
    const actual = messengerLeftUser(
      {id: '5', username: 'Alex', avatar: 'Alex'}
    ).type;
    const expected = MESSENGER_LEFT_USER;
    expect(actual).toEqual(expected);
  });
  it('returns the correct user', () => {
    const actual = messengerLeftUser(
      {id: '5', username: 'Alex', avatar: 'Alex'}
    ).user;
    const expected = {id: '5', username: 'Alex', avatar: 'Alex'};
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
      kind: KMessage,
      id: '555' + (new Date).getTime().toString(),
      text: "Hey! How are you?",
      room: "GrillNChill",
      user: {id: '555', username: "Joe555", avatar: "Joe555"}
    }).type;
    const expected = MESSENGER_RECEIVED_MESSAGE;
    expect(actual).toEqual(expected);
  });
  it('returns the correct message', () => {
    const actual = messengerReceivedMessage({
      kind: KMessage,
      id: '555' + (new Date).getTime().toString(),
      text: "Hey! How are you?",
      room: "GrillNChill",
      user: {id: '555', username: "Joe555", avatar: "Joe555"}
    }).message;
    const expected = {
      kind: KMessage,
      id: '555' + (new Date).getTime().toString(),
      text: "Hey! How are you?",
      room: "GrillNChill",
      user: {id: '555', username: "Joe555", avatar: "Joe555"}
    };
    expect(actual.kind).toEqual(expected.kind);
    expect(actual.id).toEqual(expected.id);
    expect(actual.text).toEqual(expected.text);
    expect(actual.room).toEqual(expected.room);
    expect(actual.user).toEqual(expected.user);
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
      kind: KWhisper,
      id: '32873443823428384923',
      text: 'How are you?',
      to: '0923849323432',
      user: {id: '90', username: 'Jill', avatar: 'Jill'}
    }).type;
    const expected = MESSENGER_RECEIVED_WHISPER;
    expect(actual).toEqual(expected);
  });
  it('returns the correct ', () => {
    const actual = messengerReceivedWhisper({
      kind: KWhisper,
      id: '32873443823428384923',
      text: 'How are you?',
      to: '0923849323432',
      user: {id: '90', username: 'Jill', avatar: 'Jill'}
    }).whisper;
    const expected = {
      kind: KWhisper,
      id: '32873443823428384923',
      text: 'How are you?',
      to: '0923849323432',
      user: {id: '90', username: 'Jill', avatar: 'Jill'}
    };
    expect(actual.kind).toEqual(expected.kind);
    expect(actual.id).toEqual(expected.id);
    expect(actual.text).toEqual(expected.text);
    expect(actual.to).toEqual(expected.to);
    expect(actual.user).toEqual(expected.user);
  });
});

describe('messengerFailedWhisper action creator', () => {
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