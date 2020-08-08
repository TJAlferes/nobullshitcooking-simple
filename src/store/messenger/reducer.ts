import { AUTH_USER_LOGOUT } from '../auth/types';
import {
  MESSENGER_CONNECTED,
  MESSENGER_DISCONNECTED,
  MESSENGER_GET_ONLINE,
  MESSENGER_SHOW_ONLINE,
  MESSENGER_SHOW_OFFLINE,
  MESSENGER_CHANGED_CHANNEL,
  MESSENGER_REJOINED_CHANNEL,
  MESSENGER_JOINED_USER,
  MESSENGER_LEFT_USER,
  MESSENGER_RECEIVED_MESSAGE,
  MESSENGER_RECEIVED_WHISPER,
  MESSENGER_FAILED_WHISPER,
  IMessengerState,
  KMessage,
  KWhisper,
  MessengerActions
} from './types';

// NORMALIZE STATE, USE OBJECTS/MAPS, NOT ARRAYS (maybe)
// remember Nir Kofman's actions patterns (maybe)

const initialState: IMessengerState = {
  channel: "",
  messages: [],
  users: [],
  onlineFriends: [],
  status: "Disconnected",
  connectButtonDisabled: false,
  disconnectButtonDisabled: true,
};

export const messengerReducer = (
  state = initialState,
  action: MessengerActions
): IMessengerState => {
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
    
    case MESSENGER_GET_ONLINE:
      return {
        ...state,
        ...{onlineFriends: action.online}
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
            f => f.id !== action.user.id
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
            kind: KMessage,
            id: 'admin' + action.ts,
            text: `${action.user.username} has joined the room.`,
            room: state.channel,
            user: {
              id: 'messengerstatus',
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
            kind: KMessage,
            id: 'admin' + action.ts,
            text: `${action.user.username} has left the room.`,
            room: state.channel,
            user: {
              id: 'messengerstatus',
              username: "messengerstatus",
              avatar: 'messengerstatus'
            },
            ts: action.ts,
          }),
          users: state.users.filter(u => u.id !== action.user.id)
        }
      };
    
    case MESSENGER_RECEIVED_MESSAGE:
      return {
        ...state,
        ...{messages: state.messages.concat(action.message)}
      };
    
    case MESSENGER_RECEIVED_WHISPER:
      return {
        ...state,
        ...{messages: state.messages.concat(action.whisper)}
      };
    
    case MESSENGER_FAILED_WHISPER:
      return {
        ...state,
        ...{
          messages: state.messages.concat({
            kind: KWhisper,
            id: 'admin' + action.ts,
            text: action.feedback,
            to: '',
            user: {
              id: 'messengerstatus',
              username: "messengerstatus",
              avatar: 'messengerstatus'
            },
            ts: action.ts,
          })
        }
      };
    
    default: return state;
  }
};