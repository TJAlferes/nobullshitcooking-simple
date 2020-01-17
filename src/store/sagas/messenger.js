import io from 'socket.io-client';

import {
  messengerConnected,
  messengerDisconnected,
  messengerShowOnline,
  messengerShowOffline,
  messengerChangedChannel,
  messengerRejoinedChannel,
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

const socket = io.connect(`${endpoint}`, {
  reconnection: true,
  autoConnect: false
});



// +=========+
// |  Users  |
// +=========+

socket.on('GetOnline', online => {
  if (!online) return;
  if (typeof online === "undefined") return;
  store.dispatch(messengerGetOnline(online));
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



// +============+
// |  Messages  |
// +============+

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



// +=========+
// |  Rooms  |
// +=========+

socket.on('GetUser', (users, roomToAdd) => {
  if (!users) return;
  if (!roomToAdd) return;
  if (typeof users === "undefined") return;
  if (typeof users === "roomToAdd") return;  // ?
  store.dispatch(messengerChangedChannel(users, roomToAdd));
});

socket.on('RegetUser', (users, roomToRejoin) => {
  if (!users) return;
  if (!roomToRejoin) return;
  if (typeof users === "undefined") return;
  if (typeof users === "roomToRejoin") return;  // ?
  store.dispatch(messengerRejoinedChannel(users, roomToRejoin));
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



// +===================+
// |  SocketIO events  |
// +===================+

socket.on('connect', () => {
  store.dispatch(messengerConnected());
  socket.emit('GetOnline');
});

socket.on('disconnect', () => {
  store.dispatch(messengerDisconnected());
});

socket.on('reconnect', () => {
  messengerRejoinRoomSaga();
  // dispatches?
  //socket.emit('GetOnline');  Call here again?
});



// +=========+
// |  Sagas  |
// +=========+

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

export function messengerRejoinRoomSaga() {
  const { messenger } = store.getState();
  if (store.getState(messenger.channel) === "") return;
  console.log('Rejoining room: ', messenger.channel);
  socket.emit('RejoinRoom', messenger.channel);
}