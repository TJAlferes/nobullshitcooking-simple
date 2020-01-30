import {
  MESSENGER_CONNECT,
  MESSENGER_CONNECTED,
  MESSENGER_DISCONNECT,
  MESSENGER_DISCONNECTED,

  MESSENGER_GET_ONLINE,
  MESSENGER_SHOW_ONLINE,
  MESSENGER_SHOW_OFFLINE,

  MESSENGER_CHANGE_CHANNEL,
  MESSENGER_CHANGED_CHANNEL,
  MESSENGER_REJOINED_CHANNEL,
  MESSENGER_JOINED_USER,
  MESSENGER_LEFT_USER,

  MESSENGER_SEND_MESSAGE,
  MESSENGER_RECEIVED_MESSAGE,
  MESSENGER_SEND_WHISPER,
  MESSENGER_RECEIVED_WHISPER,
  MESSENGER_FAILED_WHISPER
} from './actionTypes';



export const messengerConnect = () => ({type: MESSENGER_CONNECT});

export const messengerConnected = () => ({type: MESSENGER_CONNECTED});

export const messengerDisconnect = () => ({type: MESSENGER_DISCONNECT});

export const messengerDisconnected = () => ({type: MESSENGER_DISCONNECTED});



export const messengerGetOnline = online => ({
  type: MESSENGER_GET_ONLINE,
  online
});

export const messengerShowOnline = user => ({
  type: MESSENGER_SHOW_ONLINE,
  user
});

export const messengerShowOffline = user => ({
  type: MESSENGER_SHOW_OFFLINE,
  user
});



export const messengerChangeChannel = channel => ({
  type: MESSENGER_CHANGE_CHANNEL,
  channel
});

export const messengerChangedChannel = (users, channel) => ({
  type: MESSENGER_CHANGED_CHANNEL,
  users,
  channel
});
 
export const messengerRejoinedChannel = (users, channel) => ({
  type: MESSENGER_REJOINED_CHANNEL,
  users,
  channel
});

export const messengerJoinedUser = user => ({
  type: MESSENGER_JOINED_USER,
  user
});

export const messengerLeftUser = user => ({
  type: MESSENGER_LEFT_USER,
  user
});



export const messengerSendMessage = message => ({
  type: MESSENGER_SEND_MESSAGE,
  message
});

export const messengerReceivedMessage = message => ({
  type: MESSENGER_RECEIVED_MESSAGE,
  message
});

export const messengerSendWhisper = (whisper, to) => ({
  type: MESSENGER_SEND_WHISPER,
  whisper,
  to
});

export const messengerReceivedWhisper = whisper => ({
  type: MESSENGER_RECEIVED_WHISPER,
  whisper
});

export const messengerFailedWhisper = feedback => ({
  type: MESSENGER_FAILED_WHISPER,
  feedback
});