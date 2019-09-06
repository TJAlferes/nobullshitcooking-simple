import io from 'socket.io-client';

import {
  messengerChangedChannel,
  messengerJoinedUser,
  messengerLeftUser,
  messengerReceivedMessage
} from '../actions/index';
import { store } from '../../index';

import { NOBSCBackendAPIEndpointOne } from '../../config/NOBSCBackendAPIEndpointOne';
const endpoint = NOBSCBackendAPIEndpointOne;

const socket = io.connect(endpoint, {reconnection: false, autoConnect: false});

socket.on('connect', () => {
  console.log('Connected to NOBSC Messenger.');
});

socket.on('disconnect', () => {
  console.log('Disconnected from NOBSC Messenger.');
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