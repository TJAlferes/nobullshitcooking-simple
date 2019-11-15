import io from 'socket.io-client';

import {
  messengerConnected,
  messengerDisconnected,
  messengerShowOnline,
  messengerShowOffline,
  messengerChangedChannel,
  messengerJoinedUser,
  messengerLeftUser,
  messengerReceivedMessage,
  messengerReceivedWhisper,
  messengerFailedWhisper,
  messengerGetOnline
} from '../actions/index';
import { store } from '../../index';

import { NOBSCBackendAPIEndpointOne } from '../../config/NOBSCBackendAPIEndpointOne';
const endpoint = NOBSCBackendAPIEndpointOne;

const socket = io.connect(endpoint, {
  reconnection: false,
  autoConnect: false,
  transports: ['websocket']
});

socket.on('connect', () => {
  store.dispatch(messengerConnected());
  socket.emit('GetOnline');
});

socket.on('disconnect', () => {
  store.dispatch(messengerDisconnected());
});

socket.on('ShowOnline', (user) => {
  if (!user) return;
  if (typeof user === "undefined") return;
  store.dispatch(messengerShowOnline(user));
});

socket.on('ShowOffline', (user) => {
  if (!user) return;
  if (typeof user === "undefined") return;
  store.dispatch(messengerShowOffline(user));
});

socket.on('GetUser', (users, roomToAdd) => {
  if (!users) return;
  if (!roomToAdd) return;
  if (typeof users === "undefined") return;
  if (typeof users === "roomToAdd") return;
  store.dispatch(messengerChangedChannel(users, roomToAdd));
});

socket.on('AddUser', (user) => {
  if (!user) return;
  if (typeof user === "undefined") return;
  store.dispatch(messengerJoinedUser(user));
});

socket.on('RemoveUser', (user) => {
  if (!user) return;
  if (typeof user === "undefined") return;
  store.dispatch(messengerLeftUser(user));
});

socket.on('AddChat', (message) => {
  if (!message) return;
  if (typeof message === "undefined") return;
  store.dispatch(messengerReceivedMessage(message));
});

socket.on('AddWhisper', (whisper) => {
  if (!whisper) return;
  if (typeof whisper === "undefined") return;
  store.dispatch(messengerReceivedWhisper(whisper));
});

socket.on('FailedWhisper', (feedback) => {
  if (!feedback) return;
  if (typeof feedback === "undefined") return;
  store.dispatch(messengerFailedWhisper(feedback));
});

socket.on('GetOnline', online => {
  if (!online) return;
  if (typeof online === "undefined") return;
  store.dispatch(messengerGetOnline(online));
});



export function* messengerConnectSaga() {
  socket.connect();
}

export function* messengerDisconnectSaga() {
  socket.disconnect();
}

export function* messengerChangeChannelSaga(action) {
  socket.emit('AddRoom', action.channel);
}

export function* messengerSendMessageSaga(action) {
  socket.emit('AddChat', action.message);
}

export function* messengerSendWhisperSaga(action) {
  socket.emit('AddWhisper', action.whisper, action.to);
}

export function* messengerUpdateOnlineSaga() {
  const { messenger } = store.getState();
  if (store.getState(messenger.status) === "Connected") socket.emit('GetOnline');
}