import * as actionTypes from './actionTypes';

export const messengerConnect = () => ({
  type: actionTypes.MESSENGER_CONNECT
});

export const messengerConnected = () => ({
  type: actionTypes.MESSENGER_CONNECTED
});

export const messengerDisconnect = () => ({
  type: actionTypes.MESSENGER_DISCONNECT
});

export const messengerDisconnected = () => ({
  type: actionTypes.MESSENGER_DISCONNECTED
});

export const messengerChangeChannel = channel => ({
  type: actionTypes.MESSENGER_CHANGE_CHANNEL,
  channel
});

export const messengerChangedChannel = channel => ({
  type: actionTypes.MESSENGER_CHANGED_CHANNEL,
  channel
});

export const messengerSendMessage = message => ({
  type: actionTypes.MESSENGER_SEND_MESSAGE,
  message
});

export const messengerSentMessage = message => ({
  type: actionTypes.MESSENGER_SENT_MESSAGE,
  message
});

export const messengerJoinUser = user => ({
  type: actionTypes.MESSENGER_JOIN_USER,
  user
});

export const messengerJoinedUser = user => ({
  type: actionTypes.MESSENGER_JOINED_USER,
  user
});

export const messengerLeaveUser = user => ({
  type: actionTypes.MESSENGER_LEAVE_USER,
  user
});

export const messengerLeftUser = user => ({
  type: actionTypes.MESSENGER_LEFT_USER,
  user
});