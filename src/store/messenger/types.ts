import { IAuthUserLogout } from '../auth/types';

export const MESSENGER_CONNECT = 'MESSENGER_CONNECT' as const;
export const MESSENGER_CONNECTED = 'MESSENGER_CONNECTED' as const;

export const MESSENGER_DISCONNECT = 'MESSENGER_DISCONNECT' as const;
export const MESSENGER_DISCONNECTED = 'MESSENGER_DISCONNECTED' as const;

export const MESSENGER_SHOW_ONLINE = 'MESSENGER_SHOW_ONLINE' as const;
export const MESSENGER_SHOW_OFFLINE = 'MESSENGER_SHOW_OFFLINE' as const;

export const MESSENGER_CHANGE_CHANNEL = 'MESSENGER_CHANGE_CHANNEL' as const;
export const MESSENGER_CHANGED_CHANNEL = 'MESSENGER_CHANGED_CHANNEL' as const;

export const MESSENGER_REJOINED_CHANNEL = 'MESSENGER_REJOINED_CHANNEL' as const;

export const MESSENGER_SEND_MESSAGE = 'MESSENGER_SEND_MESSAGE' as const;
export const MESSENGER_SEND_WHISPER = 'MESSENGER_SEND_WHISPER' as const;

export const MESSENGER_RECEIVED_MESSAGE = 'MESSENGER_RECEIVED_MESSAGE' as const;
export const MESSENGER_RECEIVED_WHISPER = 'MESSENGER_RECEIVED_WHISPER' as const;
export const MESSENGER_FAILED_WHISPER = 'MESSENGER_FAILED_WHISPER' as const;
export const MESSENGER_JOINED_USER = 'MESSENGER_JOINED_USER' as const;
export const MESSENGER_LEFT_USER = 'MESSENGER_LEFT_USER' as const;
export const MESSENGER_GET_ONLINE = 'MESSENGER_GET_ONLINE' as const;

export interface IMessengerState {
  channel: string
  messages: Array<IMessage | IWhisper>
  users: IUser[]
  onlineFriends: IUser[]
  status: string
  connectButtonDisabled: boolean
  disconnectButtonDisabled: boolean
}

export interface IMessage {
  chatMessageId: string
  chatMessageText: string
  room: string
  user: IUser
  ts: string
}

export interface IWhisper {
  whisperId: string
  whisperText: string
  to: string
  user: IUser
  ts: string
}

export interface IUser {
  userId: string
  username: string
  avatar: string
}

export type MessengerActions =
IAuthUserLogout |
IMessengerConnect |
IMessengerConnected |
IMessengerDisconnect |
IMessengerDisconnected |
IMessengerGetOnline |
IMessengerShowOnline |
IMessengerShowOffline |
IMessengerChangeChannel |
IMessengerChangedChannel |
IMessengerRejoinedChannel |
IMessengerJoinedUser |
IMessengerLeftUser |
IMessengerSendMessage |
IMessengerReceivedMessage |
IMessengerSendWhisper |
IMessengerReceivedWhisper |
IMessengerFailedWhisper;

interface IMessengerConnect {
  type: typeof MESSENGER_CONNECT
}

interface IMessengerConnected {
  type: typeof MESSENGER_CONNECTED
}

interface IMessengerDisconnect {
  type: typeof MESSENGER_DISCONNECT
}

interface IMessengerDisconnected {
  type: typeof MESSENGER_DISCONNECTED
}

interface IMessengerGetOnline {
  type: typeof MESSENGER_GET_ONLINE
  online: IUser[]
}

interface IMessengerShowOnline {
  type: typeof MESSENGER_SHOW_ONLINE
  user: IUser
}

interface IMessengerShowOffline {
  type: typeof MESSENGER_SHOW_OFFLINE
  user: IUser
}

interface IMessengerChangeChannel {
  type: typeof MESSENGER_CHANGE_CHANNEL
  channel: string
}

interface IMessengerChangedChannel {
  type: typeof MESSENGER_CHANGED_CHANNEL
  users: IUser[]
  channel: string
}

interface IMessengerRejoinedChannel {
  type: typeof MESSENGER_REJOINED_CHANNEL
  users: IUser[],
  channel: string
}

interface IMessengerJoinedUser {
  type: typeof MESSENGER_JOINED_USER
  user: IUser
  ts: string
}

interface IMessengerLeftUser {
  type: typeof MESSENGER_LEFT_USER
  user: IUser
  ts: string
}

interface IMessengerSendMessage {
  type: typeof MESSENGER_SEND_MESSAGE
  message: string
}

export interface IMessengerReceivedMessage {
  type: typeof MESSENGER_RECEIVED_MESSAGE
  message: IMessage
  ts: string
}

interface IMessengerSendWhisper {
  type: typeof MESSENGER_SEND_WHISPER
  whisper: string
  to: string
}

export interface IMessengerReceivedWhisper {
  type: typeof MESSENGER_RECEIVED_WHISPER
  whisper: IWhisper
  ts: string
}

interface IMessengerFailedWhisper {
  type: typeof MESSENGER_FAILED_WHISPER
  feedback: string
  ts: string
}