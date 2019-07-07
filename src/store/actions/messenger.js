import * as actionTypes from './actionTypes';

export const messengerChangeChannel = channel => ({
  type: actionTypes.CHANGE_CHANNEL,
  channel
});

export const messengerAddToMessages = message => ({
  type: actionTypes.ADD_TO_MESSAGES,
  message
});

export const messengerSendMessage = message => ({
  type: actionTypes.SEND_MESSAGE,
  message
});