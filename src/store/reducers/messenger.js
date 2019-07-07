import * as actionTypes from '../actions/actionTypes';

// WRITE UNIT TESTS FOR REDUCERS AND ACTION CREATORS

const initialState = {
  channel: "",
  messages: []
};

const changeChannel = (state, action) => ({
  ...state,
  ...{channel: action.channel, messages: []}
});

const addToMessages = (state, action) => ({
  ...state,
  ...{messages: state.messages.concat(action.message)}
});

const messengerReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.MESSENGER_CHANGE_CHANNEL: return changeChannel(state, action);
    case actionTypes.MESSENGER_ADD_TO_MESSAGES: return addToMessages(state, action);
  }
  return state;
};

export default messengerReducer;