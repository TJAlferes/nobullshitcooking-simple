import * as actionTypes from '../actions/actionTypes';

// WRITE UNIT TESTS FOR REDUCERS AND ACTION CREATORS

// NORMALIZE STATE, USE OBJECTS/MAPS, NOT ARRAYS

const initialState = {
  channel: "",
  messages: [],
  users: []
};

const changedChannel = (state, action) => ({
  ...state,
  ...{channel: action.channel, messages: []}
});

const sentMessage = (state, action) => ({
  ...state,
  ...{messages: state.messages.concat(action.message)}
});

const joinedUser = (state, action) => ({
  ...state,
  ...{messages: state.users.concat(action.user)}
});

const leftUser = (state, action) => ({
  ...state,
  ...{users: state.users.filter(user => user.username !== action.user.username)}
});

const messengerReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.MESSENGER_CHANGED_CHANNEL: return changedChannel(state, action);
    case actionTypes.MESSENGER_SENT_MESSAGE: return sentMessage(state, action);
    case actionTypes.MESSENGER_JOINED_USER_JOINED: return joinedUser(state, action);
    case actionTypes.MESSENGER_LEFT_USER: return leftUser(state, action);
  }
  return state;
};

export default messengerReducer;