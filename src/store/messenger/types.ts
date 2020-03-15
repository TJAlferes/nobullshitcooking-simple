import { AuthUserLogout } from '../auth/types';

export const MESSENGER_CONNECT = 'MESSENGER_CONNECT';
export const MESSENGER_CONNECTED = 'MESSENGER_CONNECTED';

export const MESSENGER_DISCONNECT = 'MESSENGER_DISCONNECT';
export const MESSENGER_DISCONNECTED = 'MESSENGER_DISCONNECTED';

export const MESSENGER_SHOW_ONLINE = 'MESSENGER_SHOW_ONLINE';
export const MESSENGER_SHOW_OFFLINE = 'MESSENGER_SHOW_OFFLINE';

export const MESSENGER_CHANGE_CHANNEL = 'MESSENGER_CHANGE_CHANNEL';
export const MESSENGER_CHANGED_CHANNEL = 'MESSENGER_CHANGED_CHANNEL';

export const MESSENGER_REJOINED_CHANNEL = 'MESSENGER_REJOINED_CHANNEL';

export const MESSENGER_SEND_MESSAGE = 'MESSENGER_SEND_MESSAGE';
export const MESSENGER_SEND_WHISPER = 'MESSENGER_SEND_WHISPER';

export const MESSENGER_RECEIVED_MESSAGE = 'MESSENGER_RECEIVED_MESSAGE';
export const MESSENGER_RECEIVED_WHISPER = 'MESSENGER_RECEIVED_WHISPER';
export const MESSENGER_FAILED_WHISPER = 'MESSENGER_FAILED_WHISPER';
export const MESSENGER_JOINED_USER = 'MESSENGER_JOINED_USER';
export const MESSENGER_LEFT_USER = 'MESSENGER_LEFT_USER';
export const MESSENGER_GET_ONLINE = 'MESSENGER_GET_ONLINE';

export interface MessengerState {
  channel: string
  messages: Array<Message | Whisper>
  users: User[]
  onlineFriends: User[]
  status: string
  connectButtonDisabled: boolean
  disconnectButtonDisabled: boolean
}

export interface Message {
  chatMessageId: string
  chatMessageText: string
  room: string
  user: User
  ts: string
}

export interface Whisper {
  whisperId: string
  whisperText: string
  to: string
  user: User
  ts: string
}

export interface User {
  userId: string
  username: string
  avatar: string
}

export type MessengerActions =
AuthUserLogout |
MessengerConnect |
MessengerConnected |
MessengerDisconnect |
MessengerDisconnected |
MessengerGetOnline |
MessengerShowOnline |
MessengerShowOffline |
MessengerChangeChannel |
MessengerChangedChannel |
MessengerRejoinedChannel |
MessengerJoinedUser |
MessengerLeftUser |
MessengerSendMessage |
MessengerReceivedMessage |
MessengerSendWhisper |
MessengerReceivedWhisper |
MessengerFailedWhisper;

interface MessengerConnect {
  type: typeof MESSENGER_CONNECT
}

interface MessengerConnected {
  type: typeof MESSENGER_CONNECTED
}

interface MessengerDisconnect {
  type: typeof MESSENGER_DISCONNECT
}

interface MessengerDisconnected {
  type: typeof MESSENGER_DISCONNECTED
}

interface MessengerGetOnline {
  type: typeof MESSENGER_GET_ONLINE
  online: User[]
}

interface MessengerShowOnline {
  type: typeof MESSENGER_SHOW_ONLINE
  user: User
}

interface MessengerShowOffline {
  type: typeof MESSENGER_SHOW_OFFLINE
  user: User
}

interface MessengerChangeChannel {
  type: typeof MESSENGER_CHANGE_CHANNEL
  channel: string
}

interface MessengerChangedChannel {
  type: typeof MESSENGER_CHANGED_CHANNEL
  users: User[]
  channel: string
}

interface MessengerRejoinedChannel {
  type: typeof MESSENGER_REJOINED_CHANNEL
  users: User[],
  channel: string
}

interface MessengerJoinedUser {
  type: typeof MESSENGER_JOINED_USER
  user: User
  ts: string
}

interface MessengerLeftUser {
  type: typeof MESSENGER_LEFT_USER
  user: User
  ts: string
}

interface MessengerSendMessage {
  type: typeof MESSENGER_SEND_MESSAGE
  message: string
}

export interface MessengerReceivedMessage {
  type: typeof MESSENGER_RECEIVED_MESSAGE
  message: Message
  ts: string
}

interface MessengerSendWhisper {
  type: typeof MESSENGER_SEND_WHISPER
  whisper: string
  to: string
}

export interface MessengerReceivedWhisper {
  type: typeof MESSENGER_RECEIVED_WHISPER
  whisper: Whisper
  ts: string
}

interface MessengerFailedWhisper {
  type: typeof MESSENGER_FAILED_WHISPER
  feedback: string
  ts: string
}