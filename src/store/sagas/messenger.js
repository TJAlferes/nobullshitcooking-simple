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

const socket = io.connect(endpoint, {reconnection: false, autoConnect: false});



socket.on('connect', () => {
  store.dispatch(messengerConnected());
  console.log('Connected to NOBSC Messenger.');
  socket.emit('GetOnline');
});

socket.on('disconnect', () => {
  store.dispatch(messengerDisconnected());
  console.log('Disconnected from NOBSC Messenger.');
});

socket.on('ShowOnline', (user) => {
  store.dispatch(messengerShowOnline(user));
});

socket.on('ShowOffline', (user) => {
  store.dispatch(messengerShowOffline(user));
});

socket.on('GetUser', (users, roomToAdd) => {
  store.dispatch(messengerChangedChannel(users, roomToAdd));
});

socket.on('AddUser', (user) => {
  store.dispatch(messengerJoinedUser(user));
});

socket.on('RemoveUser', (user) => {
  store.dispatch(messengerLeftUser(user));
});

socket.on('AddChat', (message) => {
  store.dispatch(messengerReceivedMessage(message));
});

socket.on('AddWhisper', (whisper) => {
  store.dispatch(messengerReceivedWhisper(whisper));
});

socket.on('FailedWhisper', (feedback) => {
  store.dispatch(messengerFailedWhisper(feedback));
});

socket.on('GetOnline', online => {
  console.log(online);
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
  console.log(store.getState(messenger.status));
  if (store.getState(messenger.status) === "Disconnected") return;
  socket.emit('GetOnline');
}