import * as actionTypes from '../actions/actionTypes';

// WRITE UNIT TESTS FOR REDUCERS AND ACTION CREATORS

// NORMALIZE STATE, USE OBJECTS/MAPS, NOT ARRAYS

// remember Nir Kofman's actions patterns (maybe)

const initialState = {
  channel: "",
  messages: [],
  users: [],
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
  ...initialState
});

/*const changedChannel = (state, action) => ({
  ...state,
  ...{channel: action.channel, messages: []}
});*/

const joinedUser = (state, action) => ({
  ...state,
  ...{
    users: state.users.concat(action.user),
    messages: state.messages.concat({
      ts: (new Date).getTime(),
      message: `${action.user.user} has joined the room.`,
      user: {user: "messengerstatus"}
    })
  }
});

const leftUser = (state, action) => ({
  ...state,
  ...{
    users: state.users.filter(user => user.user !== action.user.user),
    messages: state.messages.concat({
      ts: (new Date).getTime(),
      message: `${action.user.user} has left the room.`,
      user: {user: "messengerstatus"}
    })
  }
});

const receivedMessage = (state, action) => ({
  ...state,
  ...{messages: state.messages.concat(action.message)}
});

const messengerReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.MESSENGER_CONNECTED: return connected(state, action);
    case actionTypes.MESSENGER_DISCONNECTED: return disconnected(state, action);
    //case actionTypes.MESSENGER_CHANGED_CHANNEL: return changedChannel(state, action);
    case actionTypes.MESSENGER_JOINED_USER: return joinedUser(state, action);
    case actionTypes.MESSENGER_TEST: return {...state, ...{users: action.users, channel: action.channel, messages: []}}
    case actionTypes.MESSENGER_LEFT_USER: return leftUser(state, action);
    case actionTypes.MESSENGER_RECEIVED_MESSAGE: return receivedMessage(state, action);
  }
  return state;
};

export default messengerReducer;