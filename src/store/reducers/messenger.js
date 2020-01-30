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

// NORMALIZE STATE, USE OBJECTS/MAPS, NOT ARRAYS
// remember Nir Kofman's actions patterns (maybe)

const initialState = {
  channel: "",
  messages: [],
  users: [],
  onlineFriends: [],
  status: "Disconnected",
  connectButtonDisabled: false,
  disconnectButtonDisabled: true,
};

const connected = (state, action) => ({
  ...state,
  ...{
    status: "Connected",
    connectButtonDisabled: true,
    disconnectButtonDisabled: false
  }
});

const disconnected = (state, action) => ({
  ...state,
  ...{
    status: "Disconnected",
    connectButtonDisabled: false,
    disconnectButtonDisabled: true
  }
});

const showOnline = (state, action) => ({
  ...state,
  ...{onlineFriends: state.onlineFriends.concat(action.user)}
});

const showOffline = (state, action) => ({
  ...state,
  ...{
    onlineFriends: state.onlineFriends.filter(friend => friend.userId !== action.user.userId)
  }
});

const changedChannel = (state, action) => ({
  ...state,
  ...{
    channel: action.channel,
    messages: [],
    users: action.users
  }
});

const rejoinedChannel = (state, action) => ({
  ...state,
  ...{
    channel: action.channel,
    users: action.users
  }
});

const joinedUser = (state, action) => ({
  ...state,
  ...{
    messages: state.messages.concat({
      chatMessageId: 'admin' + action.ts,
      ts: action.ts,
      chatMessageText: `${action.user.username} has joined the room.`,
      user: {username: "messengerstatus"}
    }),
    users: state.users.concat(action.user)
  }
});

const leftUser = (state, action) => ({
  ...state,
  ...{
    messages: state.messages.concat({
      chatMessageId: 'admin' + action.ts,
      ts: action.ts,
      chatMessageText: `${action.user.username} has left the room.`,
      user: {username: "messengerstatus"}
    }),
    users: state.users.filter(user => user.userId !== action.user.userId)
  }
});

const receivedMessage = (state, action) => {
  action.message.ts = action.ts;
  return {
    ...state,
    ...{messages: state.messages.concat(action.message)}
  };
};

const receivedWhisper = (state, action) => {
  action.whisper.ts = action.ts;
  return {
    ...state,
    ...{messages: state.messages.concat(action.whisper)}
  };
};

const failedWhisper = (state, action) => ({
  ...state,
  ...{
    messages: state.messages.concat({
      whisperId: 'admin' + action.ts,
      ts: action.ts,
      whisperText: action.feedback,
      user: {username: "messengerstatus"}
    })
  }
});

const getOnline = (state, action) => ({
  ...state,
  ...{onlineFriends: action.online}
});

const messengerReducer = (state = initialState, action) => {
  switch (action.type) {
    case MESSENGER_CONNECTED: return connected(state, action);
    case MESSENGER_DISCONNECTED: return disconnected(state, action);
    case AUTH_USER_LOGOUT: return disconnected(state, action);
    case MESSENGER_SHOW_ONLINE: return showOnline(state, action);
    case MESSENGER_SHOW_OFFLINE: return showOffline(state, action);
    case MESSENGER_CHANGED_CHANNEL: return changedChannel(state, action);
    case MESSENGER_REJOINED_CHANNEL: return rejoinedChannel(state, action);
    case MESSENGER_JOINED_USER: return joinedUser(state, action);
    case MESSENGER_LEFT_USER: return leftUser(state, action);
    case MESSENGER_RECEIVED_MESSAGE: return receivedMessage(state, action);
    case MESSENGER_RECEIVED_WHISPER: return receivedWhisper(state, action);
    case MESSENGER_FAILED_WHISPER: return failedWhisper(state, action);
    case MESSENGER_GET_ONLINE: return getOnline(state, action);
  }
  return state;
};

export default messengerReducer;