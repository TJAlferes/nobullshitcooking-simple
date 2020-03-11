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

import {
  MessengerState,
  MessengerActions,
  MessengerReceivedMessage,
  MessengerReceivedWhisper
} from '../types/messenger';

// NORMALIZE STATE, USE OBJECTS/MAPS, NOT ARRAYS
// remember Nir Kofman's actions patterns (maybe)

const initialState: MessengerState = {
  channel: "",
  messages: [],
  users: [],
  onlineFriends: [],
  status: "Disconnected",
  connectButtonDisabled: false,
  disconnectButtonDisabled: true,
};

const receivedMessage = (
  state: MessengerState,
  action: MessengerReceivedMessage
): MessengerState => {
  action.message.ts = action.ts;
  return {
    ...state,
    messages: state.messages.concat(action.message)
  };
};

const receivedWhisper = (
  state: MessengerState,
  action: MessengerReceivedWhisper
): MessengerState => {
  action.whisper.ts = action.ts;
  return {
    ...state,
    ...{messages: state.messages.concat(action.whisper)}
  };
};

const messengerReducer = (
  state = initialState,
  action: MessengerActions
): MessengerState => {
  switch (action.type) {
    case MESSENGER_CONNECTED:
      return {
        ...state,
        ...{
          status: "Connected",
          connectButtonDisabled: true,
          disconnectButtonDisabled: false
        }
      };
    case MESSENGER_DISCONNECTED:
    case AUTH_USER_LOGOUT:
      return {
        ...state,
        ...{
          status: "Disconnected",
          connectButtonDisabled: false,
          disconnectButtonDisabled: true
        }
      };
    case MESSENGER_SHOW_ONLINE:
      return {
        ...state,
        ...{onlineFriends: state.onlineFriends.concat(action.user)}
      };
    case MESSENGER_SHOW_OFFLINE:
      return {
        ...state,
        ...{
          onlineFriends: state.onlineFriends.filter(
            friend => friend.userId !== action.user.userId
          )
        }
      };
    case MESSENGER_CHANGED_CHANNEL:
      return {
        ...state,
        ...{
          channel: action.channel,
          messages: [],
          users: action.users
        }
      };
    case MESSENGER_REJOINED_CHANNEL:
      return {
        ...state,
        ...{
          channel: action.channel,
          users: action.users
        }
      };
    case MESSENGER_JOINED_USER:
      return {
        ...state,
        ...{
          messages: state.messages.concat({
            chatMessageId: 'admin' + action.ts,
            chatMessageText: `${action.user.username} has joined the room.`,
            room: state.channel,
            user: {
              userId: 'messengerstatus',
              username: "messengerstatus",
              avatar: 'messengerstatus'
            },
            ts: action.ts,
          }),
          users: state.users.concat(action.user)
        }
      };
    case MESSENGER_LEFT_USER:
      return {
        ...state,
        ...{
          messages: state.messages.concat({
            chatMessageId: 'admin' + action.ts,
            chatMessageText: `${action.user.username} has left the room.`,
            room: state.channel,
            user: {
              userId: 'messengerstatus',
              username: "messengerstatus",
              avatar: 'messengerstatus'
            },
            ts: action.ts,
          }),
          users: state.users.filter(user => user.userId !== action.user.userId)
        }
      };
    case MESSENGER_RECEIVED_MESSAGE:
      return receivedMessage(state, action);
    case MESSENGER_RECEIVED_WHISPER:
      return receivedWhisper(state, action);
    case MESSENGER_FAILED_WHISPER:
      return {
        ...state,
        ...{
          messages: state.messages.concat({
            whisperId: 'admin' + action.ts,
            whisperText: action.feedback,
            to: '',
            user: {
              userId: 'messengerstatus',
              username: "messengerstatus",
              avatar: 'messengerstatus'
            },
            ts: action.ts,
          })
        }
      };
    case MESSENGER_GET_ONLINE:
      return {
        ...state,
        ...{onlineFriends: action.online}
      };
  }
  return state;
};

export default messengerReducer;