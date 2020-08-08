import { AUTH_USER_LOGOUT } from '../auth/types';
import { messengerReducer } from './reducer';
import {
  MESSENGER_CONNECTED,
  MESSENGER_DISCONNECTED,
  MESSENGER_SHOW_ONLINE,
  MESSENGER_SHOW_OFFLINE,
  MESSENGER_CHANGED_CHANNEL,
  MESSENGER_REJOINED_CHANNEL,
  MESSENGER_JOINED_USER,
  MESSENGER_LEFT_USER,
  MESSENGER_RECEIVED_MESSAGE,
  MESSENGER_RECEIVED_WHISPER,
  MESSENGER_FAILED_WHISPER,
  MESSENGER_GET_ONLINE,
  KMessage,
  KWhisper
} from './types';

const initialState = {
  channel: "",
  messages: [],
  users: [],
  onlineFriends: [],
  status: "Disconnected",
  connectButtonDisabled: false,
  disconnectButtonDisabled: true,
};

describe('messenger reducer', () => {
  it('returns initial state', () => {
    const actual = messengerReducer(undefined, {type: MESSENGER_CONNECTED});
    const expected = {
      channel: "",
      messages: [],
      users: [],
      onlineFriends: [],
      status: "Connected",
      connectButtonDisabled: true,
      disconnectButtonDisabled: false
    };
    expect(actual).toEqual(expected);
  });

  it('handles actions of type MESSENGER_CONNECTED', () => {
    const actual = messengerReducer(initialState, {type: MESSENGER_CONNECTED});
    const expected = {
      channel: "",
      messages: [],
      users: [],
      onlineFriends: [],
      status: "Connected",
      connectButtonDisabled: true,
      disconnectButtonDisabled: false
    };
    expect(actual).toEqual(expected);
  });

  it('handles actions of type MESSENGER_DISCONNECTED', () => {
    const beforeState = {
      channel: "",
      messages: [],
      users: [],
      onlineFriends: [],
      status: "Connected",
      connectButtonDisabled: true,
      disconnectButtonDisabled: false
    };
    const actual = messengerReducer(beforeState, {type: MESSENGER_DISCONNECTED});
    const expected = {
      channel: "",
      messages: [],
      users: [],
      onlineFriends: [],
      status: "Disconnected",
      connectButtonDisabled: false,
      disconnectButtonDisabled: true
    };
    expect(actual).toEqual(expected);
  });

  it('handles actions of type AUTH_USER_LOGOUT', () => {
    const beforeState = {
      channel: "",
      messages: [],
      users: [],
      onlineFriends: [],
      status: "Connected",
      connectButtonDisabled: true,
      disconnectButtonDisabled: false
    };
    const actual = messengerReducer(beforeState, {type: AUTH_USER_LOGOUT});
    const expected = {
      channel: "",
      messages: [],
      users: [],
      onlineFriends: [],
      status: "Disconnected",
      connectButtonDisabled: false,
      disconnectButtonDisabled: true
    };
    expect(actual).toEqual(expected);
  });

  it('handles actions of type MESSENGER_GET_ONLINE', () => {
    const actual = messengerReducer(initialState, {
      type: MESSENGER_GET_ONLINE,
      online: [
        {id: 43, username: "MrClean", avatar: "MrClean"},
        {id: 52, username: "Shabsquash", avatar: "Shabsquash"}
      ]
    });

    const expected = {
      channel: "",
      messages: [],
      users: [],
      onlineFriends: [
        {id: 43, username: "MrClean", avatar: "MrClean"},
        {id: 52, username: "Shabsquash", avatar: "Shabsquash"}
      ],
      status: "Disconnected",
      connectButtonDisabled: false,
      disconnectButtonDisabled: true,
    };

    expect(actual).toEqual(expected);
  });

  it('handles actions of type MESSENGER_SHOW_ONLINE', () => {
    const beforeState = {
      channel: "",
      messages: [],
      users: [],
      onlineFriends: [],
      status: "Connected",
      connectButtonDisabled: true,
      disconnectButtonDisabled: false
    };
    const actual = messengerReducer(beforeState, {
      type: MESSENGER_SHOW_ONLINE,
      user: {id: "1", username: "Joe55", avatar: "Joe55"}
    });
    const expected = {
      channel: "",
      messages: [],
      users: [],
      onlineFriends: [{id: "1", username: "Joe55", avatar: "Joe55"}],
      status: "Connected",
      connectButtonDisabled: true,
      disconnectButtonDisabled: false
    };
    expect(actual).toEqual(expected);
  });

  it('handles actions of type MESSENGER_SHOW_OFFLINE', () => {
    const beforeState = {
      channel: "",
      messages: [],
      users: [],
      onlineFriends: [{id: "1", username: "Joe55", avatar: "Joe55"}],
      status: "Connected",
      connectButtonDisabled: true,
      disconnectButtonDisabled: false
    };
    const actual = messengerReducer(beforeState, {
      type: MESSENGER_SHOW_OFFLINE,
      user: {id: "1", username: "Joe55", avatar: "Joe55"}
    });
    const expected = {
      channel: "",
      messages: [],
      users: [],
      onlineFriends: [],
      status: "Connected",
      connectButtonDisabled: true,
      disconnectButtonDisabled: false
    };
    expect(actual).toEqual(expected);
  });

  it('handles actions of type MESSENGER_CHANGED_CHANNEL', () => {
    const beforeState = {
      channel: "",
      messages: [],
      users: [],
      onlineFriends: [],
      status: "Connected",
      connectButtonDisabled: true,
      disconnectButtonDisabled: false
    };
    const actual = messengerReducer(beforeState, {
      type: MESSENGER_CHANGED_CHANNEL,
      channel: "autos101",
      users: [{id: 93, username: "CarEnthusiast", avatar: "CarEnthusiast"}]
    });
    const expected = {
      channel: "autos101",
      messages: [],
      users: [{id: 93, username: "CarEnthusiast", avatar: "CarEnthusiast"}],
      onlineFriends: [],
      status: "Connected",
      connectButtonDisabled: true,
      disconnectButtonDisabled: false
    };
    expect(actual).toEqual(expected);
  });

  it('handles actions of type MESSENGER_REJOINED_CHANNEL', () => {
    const clientTimeStr = (new Date).toLocaleTimeString();

    const beforeState = {
      channel: "GrillNChill",
      messages: [
        {
          kind: KMessage,
          id: 555 + clientTimeStr,
          text: "Hey! How are you?",
          room: "GrillNChill",
          user: {id: 555, username: "Joe555", avatar: "Joe555"},
          ts: `${clientTimeStr}`
        },
        {
          kind: KMessage,
          id: 888 + clientTimeStr,
          text: "I'm good, thanks! You?",
          room: "GrillNChill",
          user: {id: 888, username: "Jane888", avatar: "Jane888"},
          ts: `${clientTimeStr}`
        }
      ],
      users: [
        {id: 555, username: "Joe555", avatar: "Joe555"},
        {id: 888, username: "Jane888", avatar: "Jane888"}
      ],
      onlineFriends: [],
      status: "Connected",
      connectButtonDisabled: true,
      disconnectButtonDisabled: false
    };

    const actual = messengerReducer(beforeState, {
      type: MESSENGER_REJOINED_CHANNEL,
      channel: "GrillNChill",
      users: [
        {id: 555, username: "Joe555", avatar: "Joe555"},
        {id: 888, username: "Jane888", avatar: "Jane888"}
      ]
    });

    const expected = beforeState;
    
    expect(actual).toEqual(expected);
  });

  it('handles actions of type MESSENGER_JOINED_USER', () => {
    const clientTimeStr = (new Date).toLocaleTimeString();

    const beforeState = {
      channel: "GrillNChill",
      messages: [
        {
          kind: KMessage,
          id: 555 + clientTimeStr,
          text: "Hey! How are you?",
          room: "GrillNChill",
          user: {id: 555, username: "Joe555", avatar: "Joe555"},
          ts: `${clientTimeStr}`
        },
        {
          kind: KMessage,
          id: 888 + clientTimeStr,
          text: "I'm good, thanks! You?",
          room: "GrillNChill",
          user: {id: 888, username: "Jane888", avatar: "Jane888"},
          ts: `${clientTimeStr}`
        }
      ],
      users: [
        {id: 555, username: "Joe555", avatar: "Joe555"},
        {id: 888, username: "Jane888", avatar: "Jane888"}
      ],
      onlineFriends: [],
      status: "Connected",
      connectButtonDisabled: true,
      disconnectButtonDisabled: false
    };

    const actual = messengerReducer(beforeState, {
      type: MESSENGER_JOINED_USER,
      user: {id: 23, username: "Bubbles", avatar: "Bubbles"},
      ts: `${clientTimeStr}`
    });

    const expected = {
      channel: "GrillNChill",
      messages: [
        {
          kind: KMessage,
          id: 555 + clientTimeStr,
          text: "Hey! How are you?",
          room: "GrillNChill",
          user: {id: 555, username: "Joe555", avatar: "Joe555"},
          ts: `${clientTimeStr}`
        },
        {
          kind: KMessage,
          id: 888 + clientTimeStr,
          text: "I'm good, thanks! You?",
          room: "GrillNChill",
          user: {id: 888, username: "Jane888", avatar: "Jane888"},
          ts: `${clientTimeStr}`
        },
        {
          kind: KMessage,
          id: 'admin' + clientTimeStr,
          text: "Bubbles has joined the room.",
          room: "GrillNChill",
          user: {
            id: 'messengerstatus',
            username: "messengerstatus",
            avatar: 'messengerstatus'
          },
          ts: `${clientTimeStr}`,
        }
      ],
      users: [
        {id: 555, username: "Joe555", avatar: "Joe555"},
        {id: 888, username: "Jane888", avatar: "Jane888"},
        {id: 23, username: "Bubbles", avatar: "Bubbles"}
      ],
      onlineFriends: [],
      status: "Connected",
      connectButtonDisabled: true,
      disconnectButtonDisabled: false
    };

    expect(actual).toEqual(expected);
  });

  it('handles actions of type MESSENGER_LEFT_USER', () => {
    const clientTimeStr = (new Date).toLocaleTimeString();

    const beforeState = {
      channel: "GrillNChill",
      messages: [
        {
          kind: KMessage,
          id: 555 + clientTimeStr,
          text: "Hey! How are you?",
          room: "GrillNChill",
          user: {id: 555, username: "Joe555", avatar: "Joe555"},
          ts: `${clientTimeStr}`
        },
        {
          kind: KMessage,
          id: 888 + clientTimeStr,
          text: "I'm good, thanks! You?",
          room: "GrillNChill",
          user: {id: 888, username: "Jane888", avatar: "Jane888"},
          ts: `${clientTimeStr}`
        }
      ],
      users: [
        {id: 555, username: "Joe555", avatar: "Joe555"},
        {id: 888, username: "Jane888", avatar: "Jane888"}
      ],
      onlineFriends: [],
      status: "Connected",
      connectButtonDisabled: true,
      disconnectButtonDisabled: false
    };

    const actual = messengerReducer(beforeState, {
      type: MESSENGER_LEFT_USER,
      user: {id: 888, username: "Jane888", avatar: "Jane888"},
      ts: `${clientTimeStr}`
    });

    const expected = {
      channel: "GrillNChill",
      messages: [
        {
          kind: KMessage,
          id: 555 + clientTimeStr,
          text: "Hey! How are you?",
          room: "GrillNChill",
          user: {id: 555, username: "Joe555", avatar: "Joe555"},
          ts: `${clientTimeStr}`
        },
        {
          kind: KMessage,
          id: 888 + clientTimeStr,
          text: "I'm good, thanks! You?",
          room: "GrillNChill",
          user: {id: 888, username: "Jane888", avatar: "Jane888"},
          ts: `${clientTimeStr}`
        },
        {
          kind: KMessage,
          id: 'admin' + clientTimeStr,
          text: `Jane888 has left the room.`,
          room: "GrillNChill",
          user: {
            id: 'messengerstatus',
            username: "messengerstatus",
            avatar: 'messengerstatus'
          },
          ts: `${clientTimeStr}`,
        }
      ],
      users: [
        {id: 555, username: "Joe555", avatar: "Joe555"}
      ],
      onlineFriends: [],
      status: "Connected",
      connectButtonDisabled: true,
      disconnectButtonDisabled: false
    };

    expect(actual).toEqual(expected);
  });

  it('handles actions of type MESSENGER_RECEIVED_MESSAGE', () => {
    const clientTimeStr = (new Date).toLocaleTimeString();

    const beforeState = {
      channel: "GrillNChill",
      messages: [
        {
          kind: KMessage,
          id: 555 + clientTimeStr,
          text: "Hey! How are you?",
          room: "GrillNChill",
          user: {id: 555, username: "Joe555", avatar: "Joe555"},
          ts: `${clientTimeStr}`
        }
      ],
      users: [
        {id: 555, username: "Joe555", avatar: "Joe555"},
        {id: 888, username: "Jane888", avatar: "Jane888"}
      ],
      onlineFriends: [],
      status: "Connected",
      connectButtonDisabled: true,
      disconnectButtonDisabled: false
    };

    const actual = messengerReducer(beforeState, {
      type: MESSENGER_RECEIVED_MESSAGE,
      message: {
        kind: KMessage,
        id: 888 + clientTimeStr,
        text: "I'm good, thanks! You?",
        room: "GrillNChill",
        user: {id: 888, username: "Jane888", avatar: "Jane888"},
        ts: `${clientTimeStr}`
      }
    });

    const expected = {
      channel: "GrillNChill",
      messages: [
        {
          kind: KMessage,
          id: 555 + clientTimeStr,
          text: "Hey! How are you?",
          room: "GrillNChill",
          user: {id: 555, username: "Joe555", avatar: "Joe555"},
          ts: `${clientTimeStr}`
        },
        {
          kind: KMessage,
          id: 888 + clientTimeStr,
          text: "I'm good, thanks! You?",
          room: "GrillNChill",
          user: {id: 888, username: "Jane888", avatar: "Jane888"},
          ts: `${clientTimeStr}`
        }
      ],
      users: [
        {id: 555, username: "Joe555", avatar: "Joe555"},
        {id: 888, username: "Jane888", avatar: "Jane888"}
      ],
      onlineFriends: [],
      status: "Connected",
      connectButtonDisabled: true,
      disconnectButtonDisabled: false
    };

    expect(actual).toEqual(expected);
  });

  it('handles actions of type MESSENGER_RECEIVED_WHISPER', () => {
    const clientTimeStr = (new Date).toLocaleTimeString();

    const beforeState = {
      channel: "GrillNChill",
      messages: [],
      users: [{id: 555, username: "Joe555", avatar: "Joe555"}],
      onlineFriends: [],
      status: "Connected",
      connectButtonDisabled: true,
      disconnectButtonDisabled: false
    };

    const actual = messengerReducer(beforeState, {
      type: MESSENGER_RECEIVED_WHISPER,
      whisper: {
        kind: KWhisper,
        id: 888 + clientTimeStr,
        text: "Are you still moving next year?",
        to: "Joe555",
        user: {id: 888, username: "Jane888", avatar: "Jane888"},
        ts: `${clientTimeStr}`
      }
    });

    const expected = {
      channel: "GrillNChill",
      messages: [
        {
          kind: KWhisper,
          id: 888 + clientTimeStr,
          text: "Are you still moving next year?",
          to: "Joe555",
          user: {id: 888, username: "Jane888", avatar: "Jane888"},
          ts: `${clientTimeStr}`
        }
      ],
      users: [{id: 555, username: "Joe555", avatar: "Joe555"}],
      onlineFriends: [],
      status: "Connected",
      connectButtonDisabled: true,
      disconnectButtonDisabled: false
    };

    expect(actual).toEqual(expected);
  });

  it('handles actions of type MESSENGER_FAILED_WHISPER', () => {
    const clientTimeStr = (new Date).toLocaleTimeString();

    const beforeState = {
      channel: "GrillNChill",
      messages: [],
      users: [{id: 555, username: "Joe555", avatar: "Joe555"}],
      onlineFriends: [],
      status: "Connected",
      connectButtonDisabled: true,
      disconnectButtonDisabled: false
    };

    const actual = messengerReducer(beforeState, {
      type: MESSENGER_FAILED_WHISPER,
      feedback: 'User not found.',
      ts: `${clientTimeStr}`
    });

    const expected = {
      channel: "GrillNChill",
      messages: [
        {
          kind: KWhisper,
          id: 'admin' + clientTimeStr,
          text: 'User not found.',
          to: '',
          user: {
            id: 'messengerstatus',
            username: "messengerstatus",
            avatar: 'messengerstatus'
          },
          ts: `${clientTimeStr}`,
        }
      ],
      users: [{id: 555, username: "Joe555", avatar: "Joe555"}],
      onlineFriends: [],
      status: "Connected",
      connectButtonDisabled: true,
      disconnectButtonDisabled: false
    };

    expect(actual).toEqual(expected);
  });
});