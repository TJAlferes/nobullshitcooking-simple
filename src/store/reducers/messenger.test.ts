import {
  MESSENGER_CONNECTED,
  MESSENGER_DISCONNECTED,
  AUTH_USER_LOGOUT,
  MESSENGER_SHOW_ONLINE,
  MESSENGER_SHOW_OFFLINE,
  MESSENGER_CHANGED_CHANNEL,
  MESSENGER_REJOINED_CHANNEL,
  MESSENGER_JOINED_USER,
  MESSENGER_LEFT_USER,
  MESSENGER_RECEIVED_MESSAGE,
  MESSENGER_RECEIVED_WHISPER,
  MESSENGER_FAILED_WHISPER,
  MESSENGER_GET_ONLINE
} from '../actions/actionTypes';

import messengerReducer from './messenger';

const initialState = {
  channel: "",
  messages: [],
  users: [],
  onlineFriends: [],
  status: "Disconnected",
  connectButtonDisabled: false,
  disconnectButtonDisabled: true,
};

describe('the messenger reducer', () => {
  it('returns initial state', () => {
    const actual = messengerReducer(undefined, {});
    const expected = initialState;
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
      user: {userId: "1", username: "Joe55", avatar: "Joe55"}
    });
    const expected = {
      channel: "",
      messages: [],
      users: [],
      onlineFriends: [{userId: "1", username: "Joe55", avatar: "Joe55"}],
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
      onlineFriends: [{userId: "1", username: "Joe55", avatar: "Joe55"}],
      status: "Connected",
      connectButtonDisabled: true,
      disconnectButtonDisabled: false
    };
    const actual = messengerReducer(beforeState, {
      type: MESSENGER_SHOW_OFFLINE,
      user: {userId: "1", username: "Joe55", avatar: "Joe55"}
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
      users: [{userId: 93, username: "CarEnthusiast", avatar: "CarEnthusiast"}]
    });
    const expected = {
      channel: "autos101",
      messages: [],
      users: [{userId: 93, username: "CarEnthusiast", avatar: "CarEnthusiast"}],
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
          chatMessageId: 555 + clientTimeStr,
          chatMessageText: "Hey! How are you?",
          room: "GrillNChill",
          user: {userId: 555, username: "Joe555", avatar: "Joe555"},
          ts: `${clientTimeStr}`
        },
        {
          chatMessageId: 888 + clientTimeStr,
          chatMessageText: "I'm good, thanks! You?",
          room: "GrillNChill",
          user: {userId: 888, username: "Jane888", avatar: "Jane888"},
          ts: `${clientTimeStr}`
        }
      ],
      users: [
        {userId: 555, username: "Joe555", avatar: "Joe555"},
        {userId: 888, username: "Jane888", avatar: "Jane888"}
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
        {userId: 555, username: "Joe555", avatar: "Joe555"},
        {userId: 888, username: "Jane888", avatar: "Jane888"}
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
          chatMessageId: 555 + clientTimeStr,
          chatMessageText: "Hey! How are you?",
          room: "GrillNChill",
          user: {userId: 555, username: "Joe555", avatar: "Joe555"},
          ts: `${clientTimeStr}`
        },
        {
          chatMessageId: 888 + clientTimeStr,
          chatMessageText: "I'm good, thanks! You?",
          room: "GrillNChill",
          user: {userId: 888, username: "Jane888", avatar: "Jane888"},
          ts: `${clientTimeStr}`
        }
      ],
      users: [
        {userId: 555, username: "Joe555", avatar: "Joe555"},
        {userId: 888, username: "Jane888", avatar: "Jane888"}
      ],
      onlineFriends: [],
      status: "Connected",
      connectButtonDisabled: true,
      disconnectButtonDisabled: false
    };

    const actual = messengerReducer(beforeState, {
      type: MESSENGER_JOINED_USER,
      user: {userId: 23, username: "Bubbles", avatar: "Bubbles"},
      ts: `${clientTimeStr}`
    });

    const expected = {
      channel: "GrillNChill",
      messages: [
        {
          chatMessageId: 555 + clientTimeStr,
          chatMessageText: "Hey! How are you?",
          room: "GrillNChill",
          user: {userId: 555, username: "Joe555", avatar: "Joe555"},
          ts: `${clientTimeStr}`
        },
        {
          chatMessageId: 888 + clientTimeStr,
          chatMessageText: "I'm good, thanks! You?",
          room: "GrillNChill",
          user: {userId: 888, username: "Jane888", avatar: "Jane888"},
          ts: `${clientTimeStr}`
        },
        {
          chatMessageId: 'admin' + clientTimeStr,
          chatMessageText: "Bubbles has joined the room.",
          room: "GrillNChill",
          user: {
            userId: 'messengerstatus',
            username: "messengerstatus",
            avatar: 'messengerstatus'
          },
          ts: `${clientTimeStr}`,
        }
      ],
      users: [
        {userId: 555, username: "Joe555", avatar: "Joe555"},
        {userId: 888, username: "Jane888", avatar: "Jane888"},
        {userId: 23, username: "Bubbles", avatar: "Bubbles"}
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
          chatMessageId: 555 + clientTimeStr,
          chatMessageText: "Hey! How are you?",
          room: "GrillNChill",
          user: {userId: 555, username: "Joe555", avatar: "Joe555"},
          ts: `${clientTimeStr}`
        },
        {
          chatMessageId: 888 + clientTimeStr,
          chatMessageText: "I'm good, thanks! You?",
          room: "GrillNChill",
          user: {userId: 888, username: "Jane888", avatar: "Jane888"},
          ts: `${clientTimeStr}`
        }
      ],
      users: [
        {userId: 555, username: "Joe555", avatar: "Joe555"},
        {userId: 888, username: "Jane888", avatar: "Jane888"}
      ],
      onlineFriends: [],
      status: "Connected",
      connectButtonDisabled: true,
      disconnectButtonDisabled: false
    };

    const actual = messengerReducer(beforeState, {
      type: MESSENGER_LEFT_USER,
      user: {userId: 888, username: "Jane888", avatar: "Jane888"},
      ts: `${clientTimeStr}`
    });

    const expected = {
      channel: "GrillNChill",
      messages: [
        {
          chatMessageId: 555 + clientTimeStr,
          chatMessageText: "Hey! How are you?",
          room: "GrillNChill",
          user: {userId: 555, username: "Joe555", avatar: "Joe555"},
          ts: `${clientTimeStr}`
        },
        {
          chatMessageId: 888 + clientTimeStr,
          chatMessageText: "I'm good, thanks! You?",
          room: "GrillNChill",
          user: {userId: 888, username: "Jane888", avatar: "Jane888"},
          ts: `${clientTimeStr}`
        },
        {
          chatMessageId: 'admin' + clientTimeStr,
          chatMessageText: `Jane888 has left the room.`,
          room: "GrillNChill",
          user: {
            userId: 'messengerstatus',
            username: "messengerstatus",
            avatar: 'messengerstatus'
          },
          ts: `${clientTimeStr}`,
        }
      ],
      users: [
        {userId: 555, username: "Joe555", avatar: "Joe555"}
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
          chatMessageId: 555 + clientTimeStr,
          chatMessageText: "Hey! How are you?",
          room: "GrillNChill",
          user: {userId: 555, username: "Joe555", avatar: "Joe555"},
          ts: `${clientTimeStr}`
        }
      ],
      users: [
        {userId: 555, username: "Joe555", avatar: "Joe555"},
        {userId: 888, username: "Jane888", avatar: "Jane888"}
      ],
      onlineFriends: [],
      status: "Connected",
      connectButtonDisabled: true,
      disconnectButtonDisabled: false
    };

    const actual = messengerReducer(beforeState, {
      type: MESSENGER_RECEIVED_MESSAGE,
      message: {
        chatMessageId: 888 + clientTimeStr,
        chatMessageText: "I'm good, thanks! You?",
        room: "GrillNChill",
        user: {userId: 888, username: "Jane888", avatar: "Jane888"},
      },
      ts: `${clientTimeStr}`
    });

    const expected = {
      channel: "GrillNChill",
      messages: [
        {
          chatMessageId: 555 + clientTimeStr,
          chatMessageText: "Hey! How are you?",
          room: "GrillNChill",
          user: {userId: 555, username: "Joe555", avatar: "Joe555"},
          ts: `${clientTimeStr}`
        },
        {
          chatMessageId: 888 + clientTimeStr,
          chatMessageText: "I'm good, thanks! You?",
          room: "GrillNChill",
          user: {userId: 888, username: "Jane888", avatar: "Jane888"},
          ts: `${clientTimeStr}`
        }
      ],
      users: [
        {userId: 555, username: "Joe555", avatar: "Joe555"},
        {userId: 888, username: "Jane888", avatar: "Jane888"}
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
      users: [{userId: 555, username: "Joe555", avatar: "Joe555"}],
      onlineFriends: [],
      status: "Connected",
      connectButtonDisabled: true,
      disconnectButtonDisabled: false
    };

    const actual = messengerReducer(beforeState, {
      type: MESSENGER_RECEIVED_WHISPER,
      whisper: {
        whisperId: 888 + clientTimeStr,
        whisperText: "Are you still moving next year?",
        to: "Joe555",
        user: {userId: 888, username: "Jane888", avatar: "Jane888"},
      },
      ts: `${clientTimeStr}`
    });

    const expected = {
      channel: "GrillNChill",
      messages: [
        {
          whisperId: 888 + clientTimeStr,
          whisperText: "Are you still moving next year?",
          to: "Joe555",
          user: {userId: 888, username: "Jane888", avatar: "Jane888"},
          ts: `${clientTimeStr}`
        }
      ],
      users: [{userId: 555, username: "Joe555", avatar: "Joe555"}],
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
      users: [{userId: 555, username: "Joe555", avatar: "Joe555"}],
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
          whisperId: 'admin' + clientTimeStr,
          whisperText: 'User not found.',
          to: '',
          user: {
            userId: 'messengerstatus',
            username: "messengerstatus",
            avatar: 'messengerstatus'
          },
          ts: `${clientTimeStr}`,
        }
      ],
      users: [{userId: 555, username: "Joe555", avatar: "Joe555"}],
      onlineFriends: [],
      status: "Connected",
      connectButtonDisabled: true,
      disconnectButtonDisabled: false
    };

    expect(actual).toEqual(expected);
  });



  it('handles actions of type MESSENGER_GET_ONLINE', () => {
    const actual = messengerReducer(initialState, {
      type: MESSENGER_GET_ONLINE,
      online: [
        {userId: 43, username: "MrClean", avatar: "MrClean"},
        {userId: 52, username: "Shabsquash", avatar: "Shabsquash"}
      ]
    });

    const expected = {
      channel: "",
      messages: [],
      users: [],
      onlineFriends: [
        {userId: 43, username: "MrClean", avatar: "MrClean"},
        {userId: 52, username: "Shabsquash", avatar: "Shabsquash"}
      ],
      status: "Disconnected",
      connectButtonDisabled: false,
      disconnectButtonDisabled: true,
    };

    expect(actual).toEqual(expected);
  });
});