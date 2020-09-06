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

const jane = {id: 888, username: "Jane888", avatar: "Jane888"};
const joe = {id: 555, username: "Joe555", avatar: "Joe555"};
const clientTimeStr = (new Date).toLocaleTimeString();
const message1 = {
  kind: KMessage,
  id: 555 + clientTimeStr,
  text: "Hey! How are you?",
  room: "GrillNChill",
  user: joe,
  ts: `${clientTimeStr}`
};
const message2 = {
  kind: KMessage,
  id: 888 + clientTimeStr,
  text: "I'm good, thanks! You?",
  room: "GrillNChill",
  user: jane,
  ts: `${clientTimeStr}`
};
//const whisper1 = 
const whisper2 = {
  kind: KWhisper,
  id: 888 + clientTimeStr,
  text: "Are you still moving next year?",
  to: "Joe555",
  user: jane,
  ts: `${clientTimeStr}`
};

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
    expect(messengerReducer(undefined, {type: MESSENGER_CONNECTED}))
      .toEqual({
        channel: "",
        messages: [],
        users: [],
        onlineFriends: [],
        status: "Connected",
        connectButtonDisabled: true,
        disconnectButtonDisabled: false
      });
  });

  it('handles actions of type MESSENGER_CONNECTED', () => {
    expect(messengerReducer(initialState, {type: MESSENGER_CONNECTED}))
      .toEqual({
        channel: "",
        messages: [],
        users: [],
        onlineFriends: [],
        status: "Connected",
        connectButtonDisabled: true,
        disconnectButtonDisabled: false
      });
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

    expect(messengerReducer(beforeState, {type: MESSENGER_DISCONNECTED}))
      .toEqual({
        channel: "",
        messages: [],
        users: [],
        onlineFriends: [],
        status: "Disconnected",
        connectButtonDisabled: false,
        disconnectButtonDisabled: true
      });
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

    expect(messengerReducer(beforeState, {type: AUTH_USER_LOGOUT}))
      .toEqual({
        channel: "",
        messages: [],
        users: [],
        onlineFriends: [],
        status: "Disconnected",
        connectButtonDisabled: false,
        disconnectButtonDisabled: true
      });
  });

  it('handles actions of type MESSENGER_GET_ONLINE', () => {
    const online = [
      {id: 43, username: "MrClean", avatar: "MrClean"},
      {id: 52, username: "Shabsquash", avatar: "Shabsquash"}
    ];

    expect(messengerReducer(initialState, {type: MESSENGER_GET_ONLINE, online}))
      .toEqual({
        channel: "",
        messages: [],
        users: [],
        onlineFriends: online,
        status: "Disconnected",
        connectButtonDisabled: false,
        disconnectButtonDisabled: true,
      });
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

    expect(
      messengerReducer(beforeState, {type: MESSENGER_SHOW_ONLINE, user: joe})
    ).toEqual({
      channel: "",
      messages: [],
      users: [],
      onlineFriends: [joe],
      status: "Connected",
      connectButtonDisabled: true,
      disconnectButtonDisabled: false
    });
  });

  it('handles actions of type MESSENGER_SHOW_OFFLINE', () => {
    const beforeState = {
      channel: "",
      messages: [],
      users: [],
      onlineFriends: [joe],
      status: "Connected",
      connectButtonDisabled: true,
      disconnectButtonDisabled: false
    };

    expect(
      messengerReducer(beforeState, {type: MESSENGER_SHOW_OFFLINE, user: joe})
    ).toEqual({
      channel: "",
      messages: [],
      users: [],
      onlineFriends: [],
      status: "Connected",
      connectButtonDisabled: true,
      disconnectButtonDisabled: false
    });
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

    expect(messengerReducer(beforeState, {
      type: MESSENGER_CHANGED_CHANNEL,
      channel: "autos101",
      users: [{id: 93, username: "CarEnthusiast", avatar: "CarEnthusiast"}]
    })).toEqual({
      channel: "autos101",
      messages: [],
      users: [{id: 93, username: "CarEnthusiast", avatar: "CarEnthusiast"}],
      onlineFriends: [],
      status: "Connected",
      connectButtonDisabled: true,
      disconnectButtonDisabled: false
    });
  });

  it('handles actions of type MESSENGER_REJOINED_CHANNEL', () => {
    const beforeState = {
      channel: "GrillNChill",
      messages: [message1, message2],
      users: [joe, jane],
      onlineFriends: [],
      status: "Connected",
      connectButtonDisabled: true,
      disconnectButtonDisabled: false
    };
    
    expect(messengerReducer(beforeState, {
      type: MESSENGER_REJOINED_CHANNEL,
      channel: "GrillNChill",
      users: [joe, jane]
    })).toEqual(beforeState);
  });

  it('handles actions of type MESSENGER_JOINED_USER', () => {
    const beforeState = {
      channel: "GrillNChill",
      messages: [message1, message2],
      users: [joe, jane],
      onlineFriends: [],
      status: "Connected",
      connectButtonDisabled: true,
      disconnectButtonDisabled: false
    };

    expect(messengerReducer(beforeState, {
      type: MESSENGER_JOINED_USER,
      user: {id: 23, username: "Bubbles", avatar: "Bubbles"},
      ts: `${clientTimeStr}`
    })).toEqual({
      channel: "GrillNChill",
      messages: [
        message1,
        message2,
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
        joe,
        jane,
        {id: 23, username: "Bubbles", avatar: "Bubbles"}
      ],
      onlineFriends: [],
      status: "Connected",
      connectButtonDisabled: true,
      disconnectButtonDisabled: false
    });
  });

  it('handles actions of type MESSENGER_LEFT_USER', () => {
    const beforeState = {
      channel: "GrillNChill",
      messages: [message1, message2],
      users: [joe, jane],
      onlineFriends: [],
      status: "Connected",
      connectButtonDisabled: true,
      disconnectButtonDisabled: false
    };

    expect(messengerReducer(beforeState, {
      type: MESSENGER_LEFT_USER,
      user: jane,
      ts: `${clientTimeStr}`
    })).toEqual({
      channel: "GrillNChill",
      messages: [
        message1,
        message2,
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
      users: [joe],
      onlineFriends: [],
      status: "Connected",
      connectButtonDisabled: true,
      disconnectButtonDisabled: false
    });
  });

  it('handles actions of type MESSENGER_RECEIVED_MESSAGE', () => {
    const beforeState = {
      channel: "GrillNChill",
      messages: [message1],
      users: [joe, jane],
      onlineFriends: [],
      status: "Connected",
      connectButtonDisabled: true,
      disconnectButtonDisabled: false
    };

    expect(messengerReducer(beforeState, {
      type: MESSENGER_RECEIVED_MESSAGE,
      message: message2
    })).toEqual({
      channel: "GrillNChill",
      messages: [message1, message2],
      users: [joe, jane],
      onlineFriends: [],
      status: "Connected",
      connectButtonDisabled: true,
      disconnectButtonDisabled: false
    });
  });

  it('handles actions of type MESSENGER_RECEIVED_WHISPER', () => {
    const beforeState = {
      channel: "GrillNChill",
      messages: [],
      users: [joe],
      onlineFriends: [],
      status: "Connected",
      connectButtonDisabled: true,
      disconnectButtonDisabled: false
    };

    expect(messengerReducer(beforeState, {
      type: MESSENGER_RECEIVED_WHISPER,
      whisper: whisper2
    })).toEqual({
      channel: "GrillNChill",
      messages: [whisper2],
      users: [joe],
      onlineFriends: [],
      status: "Connected",
      connectButtonDisabled: true,
      disconnectButtonDisabled: false
    });
  });

  it('handles actions of type MESSENGER_FAILED_WHISPER', () => {
    const beforeState = {
      channel: "GrillNChill",
      messages: [],
      users: [joe],
      onlineFriends: [],
      status: "Connected",
      connectButtonDisabled: true,
      disconnectButtonDisabled: false
    };

    expect(messengerReducer(beforeState, {
      type: MESSENGER_FAILED_WHISPER,
      feedback: 'User not found.',
      ts: `${clientTimeStr}`
    })).toEqual({
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
      users: [joe],
      onlineFriends: [],
      status: "Connected",
      connectButtonDisabled: true,
      disconnectButtonDisabled: false
    });
  });
});