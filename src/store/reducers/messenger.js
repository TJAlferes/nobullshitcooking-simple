import * as actionTypes from '../actions/actionTypes';

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
  ...{status: "Connected", connectButtonDisabled: true, disconnectButtonDisabled: false}
});

const disconnected = (state, action) => ({
  ...state,
  ...{status: "Disconnected", connectButtonDisabled: false, disconnectButtonDisabled: true}
});

const showOnline = (state, action) => ({
  ...state,
  ...{onlineFriends: state.onlineFriends.concat(action.user)}
});

const showOffline = (state, action) => ({
  ...state,
  ...{onlineFriends: state.onlineFriends.filter(friend => friend.user !== action.user.user)}
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

const joinedUser = (state, action) => {
  const ts = `${(new Date).toLocaleTimeString()}`;
  return {
    ...state,
    ...{
      messages: state.messages.concat({
        id: 'admin' + (new Date).getTime().toString(),
        ts,
        message: `${action.user.user} has joined the room.`,
        user: {user: "messengerstatus"}
      }),
      users: state.users.concat(action.user)
    }
  };
};

const leftUser = (state, action) => {
  const ts = `${(new Date).toLocaleTimeString()}`;
  return {
    ...state,
    ...{
      messages: state.messages.concat({
        id: 'admin' + (new Date).getTime().toString(),
        ts,
        message: `${action.user.user} has left the room.`,
        user: {user: "messengerstatus"}
      }),
      users: state.users.filter(user => user.user !== action.user.user)
    }
  };
};

const receivedMessage = (state, action) => {
  const ts = `${(new Date).toLocaleTimeString()}`;
  action.message.ts = ts;
  return {
    ...state,
    ...{messages: state.messages.concat(action.message)}
  };
};

const receivedWhisper = (state, action) => {
  const ts = `${(new Date).toLocaleTimeString()}`;
  action.whisper.ts = ts;
  return {
    ...state,
    ...{messages: state.messages.concat(action.whisper)}
  };
};

const failedWhisper = (state, action) => {
  const ts = `${(new Date).toLocaleTimeString()}`;
  return {
    ...state,
    ...{
      messages: state.messages.concat({
        id: 'admin' + (new Date).getTime().toString(),
        ts,
        message: action.feedback,
        user: {user: "messengerstatus"}
      })
    }
  };
};

const getOnline = (state, action) => ({
  ...state,
  ...{onlineFriends: action.online}
});

const messengerReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.MESSENGER_CONNECTED: return connected(state, action);
    case actionTypes.MESSENGER_DISCONNECTED: return disconnected(state, action);
    case actionTypes.AUTH_USER_LOGOUT: return disconnected(state, action);
    case actionTypes.MESSENGER_SHOW_ONLINE: return showOnline(state, action);
    case actionTypes.MESSENGER_SHOW_OFFLINE: return showOffline(state, action);
    case actionTypes.MESSENGER_CHANGED_CHANNEL: return changedChannel(state, action);
    case actionTypes.MESSENGER_REJOINED_CHANNEL: return rejoinedChannel(state, action);
    case actionTypes.MESSENGER_JOINED_USER: return joinedUser(state, action);
    case actionTypes.MESSENGER_LEFT_USER: return leftUser(state, action);
    case actionTypes.MESSENGER_RECEIVED_MESSAGE: return receivedMessage(state, action);
    case actionTypes.MESSENGER_RECEIVED_WHISPER: return receivedWhisper(state, action);
    case actionTypes.MESSENGER_FAILED_WHISPER: return failedWhisper(state, action);
    case actionTypes.MESSENGER_GET_ONLINE: return getOnline(state, action);
  }
  return state;
};

export default messengerReducer;