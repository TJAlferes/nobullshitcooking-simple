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
  MESSENGER_FAILED_WHISPER,
  //Message,
  IMessage,
  IWhisper,
  IUser
} from './types';

export const messengerConnect = () => ({
  type: MESSENGER_CONNECT
});

export const messengerConnected = () => ({
  type: MESSENGER_CONNECTED
});

export const messengerDisconnect = () => ({
  type: MESSENGER_DISCONNECT
});

export const messengerDisconnected = () => ({
  type: MESSENGER_DISCONNECTED
});

export const messengerGetOnline = (online: IUser[]) => ({
  type: MESSENGER_GET_ONLINE,
  online
});

export const messengerShowOnline = (user: IUser) => ({
  type: MESSENGER_SHOW_ONLINE,
  user
});

export const messengerShowOffline = (user: IUser) => ({
  type: MESSENGER_SHOW_OFFLINE,
  user
});

export const messengerChangeChannel = (channel: string) => ({
  type: MESSENGER_CHANGE_CHANNEL,
  channel
});

export const messengerChangedChannel = (
  users: IUser[],
  channel: string
) => ({
  type: MESSENGER_CHANGED_CHANNEL,
  users,
  channel
});

export const messengerRejoinedChannel = (
  users: IUser[],
  channel: string
) => ({
  type: MESSENGER_REJOINED_CHANNEL,
  users,
  channel
});

export const messengerJoinedUser = (user: IUser) => {
  const ts = `${(new Date).toLocaleTimeString()}`;
  return {
    type: MESSENGER_JOINED_USER,
    user,
    ts
  };
};

export const messengerLeftUser = (user: IUser) => {
  const ts = `${(new Date).toLocaleTimeString()}`;
  return {
    type: MESSENGER_LEFT_USER,
    user,
    ts
  };
};

export const messengerSendMessage = (message: string) => ({
  type: MESSENGER_SEND_MESSAGE,
  message
});

export const messengerReceivedMessage = (
  message: IMessage
) => {
  const ts = `${(new Date).toLocaleTimeString()}`;
  return {
    type: MESSENGER_RECEIVED_MESSAGE,
    message,
    ts
  };
};

export const messengerSendWhisper = (
  whisper: string,
  to: string
) => ({
  type: MESSENGER_SEND_WHISPER,
  whisper,
  to
});

export const messengerReceivedWhisper = (whisper: IWhisper) => {
  const ts = `${(new Date).toLocaleTimeString()}`;
  return {
    type: MESSENGER_RECEIVED_WHISPER,
    whisper,
    ts
  };
};

export const messengerFailedWhisper = (feedback: string) => {
  const ts = `${(new Date).toLocaleTimeString()}`;
  return {
    type: MESSENGER_FAILED_WHISPER,
    feedback,
    ts
  };
};