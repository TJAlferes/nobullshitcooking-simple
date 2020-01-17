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
      user: {id: "1", user: "Joe55", avatar: "Joe55"}
    });
    const expected = {
      channel: "",
      messages: [],
      users: [],
      onlineFriends: [{id: "1", user: "Joe55", avatar: "Joe55"}],
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
      onlineFriends: [{id: "1", user: "Joe55", avatar: "Joe55"}],
      status: "Connected",
      connectButtonDisabled: true,
      disconnectButtonDisabled: false
    };
    const actual = messengerReducer(beforeState, {
      type: MESSENGER_SHOW_OFFLINE,
      user: {id: "1", user: "Joe55", avatar: "Joe55"}
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
      users: []
    });
    const expected = ;
    expect(actual).toEqual(expected);
  });



  it('handles actions of type MESSENGER_REJOINED_CHANNEL', () => {
    const beforeState = {
      channel: "GrillNChill",
      messages: [
        {
          id: "Joe555" + (new Date).getTime().toString(),
          message: "Hey! How are you?",
          room: "GrillNChill",
          user: "Joe555"
        },
        {
          id: "Jane888" + (new Date).getTime().toString(),
          message: "I'm good, thanks! You?",
          room: "GrillNChill",
          user: "Jane888"
        }
      ],
      users: [
        {id: "1", user: "Joe55", avatar: "Joe55"},
        `rooms:${room}`, Date.now(), user  // FINISH
      ],
      onlineFriends: [],
      status: "Connected",
      connectButtonDisabled: true,
      disconnectButtonDisabled: false
    };
    const actual = messengerReducer(beforeState, {
      type: MESSENGER_REJOINED_CHANNEL,
      
    });
    const expected = ;
    expect(actual).toEqual(expected);
  });



  it('handles actions of type MESSENGER_JOINED_USER', () => {
    const actual = messengerReducer(, {
      type: MESSENGER_JOINED_USER,
      
    });
    const expected = ;
    expect(actual).toEqual(expected);
  });



  it('handles actions of type MESSENGER_LEFT_USER', () => {
    const actual = messengerReducer(, {
      type: MESSENGER_LEFT_USER,
      
    });
    const expected = ;
    expect(actual).toEqual(expected);
  });



  it('handles actions of type MESSENGER_RECEIVED_MESSAGE', () => {
    const actual = messengerReducer(, {
      type: MESSENGER_RECEIVED_MESSAGE,
      
    });
    const expected = ;
    expect(actual).toEqual(expected);
  });



  it('handles actions of type MESSENGER_RECEIVED_WHISPER', () => {
    const actual = messengerReducer(, {
      type: MESSENGER_RECEIVED_WHISPER,
      
    });
    const expected = ;
    expect(actual).toEqual(expected);
  });



  it('handles actions of type MESSENGER_FAILED_WHISPER', () => {
    const actual = messengerReducer(, {
      type: MESSENGER_FAILED_WHISPER,
      
    });
    const expected = ;
    expect(actual).toEqual(expected);
  });



  it('handles actions of type MESSENGER_GET_ONLINE', () => {
    const actual = messengerReducer(, {
      type: MESSENGER_GET_ONLINE,
      
    });
    const expected = ;
    expect(actual).toEqual(expected);
  });
});