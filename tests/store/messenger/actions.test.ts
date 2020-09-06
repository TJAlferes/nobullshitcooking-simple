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

const aaron = {id: '4', username: 'Aaron', avatar: 'Aaron'};
const alex = {id: '5', username: 'Alex', avatar: 'Alex'};
const message = {
  kind: KMessage,
  id: '555' + (new Date).getTime().toString(),
  text: "Hey! How are you?",
  room: "GrillNChill",
  user: {id: '555', username: "Joe555", avatar: "Joe555"}
};
const whisper = {
  kind: KWhisper,
  id: '32873443823428384923',
  text: 'How are you?',
  to: '0923849323432',
  user: {id: '90', username: 'Jill', avatar: 'Jill'}
};

describe('messengerConnect action creator', () => {
  it('returns the correct action type', () => {
    expect(messengerConnect().type).toEqual(MESSENGER_CONNECT);
  });
});

describe('messengerConnected action creator', () => {
  it('returns the correct action type', () => {
    expect(messengerConnected().type).toEqual(MESSENGER_CONNECTED);
  });
});

describe('messengerDisconnect action creator', () => {
  it('returns the correct action type', () => {
    expect(messengerDisconnect().type).toEqual(MESSENGER_DISCONNECT);
  });
});

describe('messengerDisconnected action creator', () => {
  it('returns the correct action type', () => {
    expect(messengerDisconnected().type).toEqual(MESSENGER_DISCONNECTED);
  });
});

describe('messengerGetOnline action creator', () => {
  it('returns the correct action type', () => {
    expect(messengerGetOnline([alex]).type).toEqual(MESSENGER_GET_ONLINE);
  });

  it('returns the correct online', () => {
    expect(messengerGetOnline([alex]).online).toEqual([alex]);
  });
});

describe('messengerShowOnline action creator', () => {
  it('returns the correct action type', () => {
    expect(messengerShowOnline(alex).type).toEqual(MESSENGER_SHOW_ONLINE);
  });

  it('returns the correct user', () => {
    expect(messengerShowOnline(alex).user).toEqual(alex);
  });
});

describe('messengerShowOffline action creator', () => {
  it('returns the correct action type', () => {
    expect(messengerShowOffline(alex).type).toEqual(MESSENGER_SHOW_OFFLINE);
  });

  it('returns the correct user', () => {
    expect(messengerShowOffline(alex).user).toEqual(alex);
  });
});

describe('messengerChangeChannel action creator', () => {
  it('returns the correct action type', () => {
    expect(messengerChangeChannel('5067').type)
      .toEqual(MESSENGER_CHANGE_CHANNEL);
  });

  it('returns the correct channel', () => {
    expect(messengerChangeChannel('5067').channel).toEqual('5067');
  });
});

describe('messengerChangedChannel action creator', () => {
  it('returns the correct action type', () => {
    expect(messengerChangedChannel([aaron, alex], '5067').type)
      .toEqual(MESSENGER_CHANGED_CHANNEL);
  });

  it('returns the correct users', () => {
    expect(messengerChangedChannel([aaron, alex], '5067').users)
      .toEqual([aaron, alex]);
  });

  it('returns the correct channel', () => {
    expect(messengerChangedChannel([aaron, alex], '5067').channel)
      .toEqual('5067');
  });
});

describe('messengerRejoinedChannel action creator', () => {
  it('returns the correct action type', () => {
    expect(messengerRejoinedChannel([aaron, alex], '5067').type)
      .toEqual(MESSENGER_REJOINED_CHANNEL);
  });

  it('returns the correct users', () => {
    expect(messengerRejoinedChannel([aaron, alex], '5067').users)
      .toEqual([aaron, alex]);
  });
  
  it('returns the correct channel', () => {
    expect(messengerRejoinedChannel([aaron, alex], '5067').channel)
      .toEqual('5067');
  });
});

describe('messengerJoinedUser action creator', () => {
  it('returns the correct action type', () => {
    expect(messengerJoinedUser(alex).type).toEqual(MESSENGER_JOINED_USER);
  });

  it('returns the correct user', () => {
    expect(messengerJoinedUser(alex).user).toEqual(alex);
  });
});

describe('messengerLeftUser action creator', () => {
  it('returns the correct action type', () => {
    expect(messengerLeftUser(alex).type).toEqual(MESSENGER_LEFT_USER);
  });

  it('returns the correct user', () => {
    expect(messengerLeftUser(alex).user).toEqual(alex);
  });
});

describe('messengerSendMessage action creator', () => {
  it('returns the correct action type', () => {
    expect(messengerSendMessage('howdy').type).toEqual(MESSENGER_SEND_MESSAGE);
  });

  it('returns the correct text', () => {
    expect(messengerSendMessage('howdy').text).toEqual('howdy');
  });
});

describe('messengerReceivedMessage action creator', () => {
  it('returns the correct action type', () => {
    expect(messengerReceivedMessage(message).type)
      .toEqual(MESSENGER_RECEIVED_MESSAGE);
  });

  it('returns the correct message', () => {
    const actual = messengerReceivedMessage(message).message;
    const expected = message;

    expect(actual.kind).toEqual(expected.kind);
    expect(actual.id).toEqual(expected.id);
    expect(actual.text).toEqual(expected.text);
    expect(actual.room).toEqual(expected.room);
    expect(actual.user).toEqual(expected.user);
  });
});

describe('messengerSendWhisper action creator', () => {
  it('returns the correct action type', () => {
    expect(messengerSendWhisper('How are you?', 'John').type)
      .toEqual(MESSENGER_SEND_WHISPER);
  });

  it('returns the correct text', () => {
    expect(messengerSendWhisper('How are you?', 'John').text)
      .toEqual('How are you?');
  });

  it('returns the correct to', () => {
    expect(messengerSendWhisper('How are you?', 'John').to).toEqual('John');
  });
});

describe('messengerReceivedWhisper action creator', () => {
  it('returns the correct action type', () => {
    expect(messengerReceivedWhisper(whisper).type)
      .toEqual(MESSENGER_RECEIVED_WHISPER);
  });

  it('returns the correct ', () => {
    const actual = messengerReceivedWhisper(whisper).whisper;
    const expected = whisper;

    expect(actual.kind).toEqual(expected.kind);
    expect(actual.id).toEqual(expected.id);
    expect(actual.text).toEqual(expected.text);
    expect(actual.to).toEqual(expected.to);
    expect(actual.user).toEqual(expected.user);
  });
});

describe('messengerFailedWhisper action creator', () => {
  it('returns the correct action type', () => {
    expect(messengerFailedWhisper("User not found.").type)
      .toEqual(MESSENGER_FAILED_WHISPER);
  });

  it('returns the correct feedback', () => {
    expect(messengerFailedWhisper("User not found.").feedback)
      .toEqual("User not found.");
  });
});