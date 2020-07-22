import io from 'socket.io-client';

import {
  NOBSCBackendAPIEndpointOne
} from '../../config/NOBSCBackendAPIEndpointOne';
import { store } from '../../index';
import {
  messengerConnected,
  messengerDisconnected,
  messengerGetOnline,
  messengerShowOnline,
  messengerShowOffline,
  messengerChangedChannel,
  messengerRejoinedChannel,
  messengerJoinedUser,
  messengerLeftUser,
  messengerReceivedMessage,
  messengerReceivedWhisper,
  messengerFailedWhisper
} from './actions';
import {
  IMessage,
  IWhisper,
  IUser,
  IMessengerChangeChannel,
  IMessengerSendMessage,
  IMessengerSendWhisper
} from './types';

const endpoint = NOBSCBackendAPIEndpointOne;
const socket = io.connect(`${endpoint}`, {
  reconnection: true,
  autoConnect: false
});

// TO DO: make better event names (server side too)

/*

Users

*/

socket.on('GetOnline', (online: []) => {
  if (!online) return;
  store.dispatch(messengerGetOnline(online));
});

socket.on('ShowOnline', (user: IUser) => {
  if (!user) return;
  store.dispatch(messengerShowOnline(user));
});

socket.on('ShowOffline', (user: IUser) => {
  if (!user) return;
  store.dispatch(messengerShowOffline(user));
});

/*

Messages

*/

socket.on('AddChat', (message: IMessage) => {
  if (!message) return;
  store.dispatch(messengerReceivedMessage(message));
});

socket.on('AddWhisper', (whisper: IWhisper) => {
  if (!whisper) return;
  store.dispatch(messengerReceivedWhisper(whisper));
});

socket.on('FailedWhisper', (feedback: string) => {
  if (!feedback) return;
  store.dispatch(messengerFailedWhisper(feedback));
});

/*

Rooms

*/

socket.on('GetUser', (users: [], roomToAdd: string) => {
  if (!users) return;
  if (!roomToAdd) return;
  //if (typeof users === "roomToAdd") return;  // ?
  store.dispatch(messengerChangedChannel(users, roomToAdd));
});

socket.on('RegetUser', (users: [], roomToRejoin: string) => {
  if (!users) return;
  if (!roomToRejoin) return;
  //if (typeof users === "roomToRejoin") return;  // ?
  store.dispatch(messengerRejoinedChannel(users, roomToRejoin));
});

socket.on('AddUser', (user: IUser) => {
  if (!user) return;
  store.dispatch(messengerJoinedUser(user));
});

socket.on('RemoveUser', (user: IUser) => {
  if (!user) return;
  store.dispatch(messengerLeftUser(user));
});

/*

SocketIO Events

*/

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

/*

Sagas

*/

// use call([socket, socket.method(), ...args])
// do these even need to be sagas?
// channels?

export function* messengerConnectSaga() {
  socket.connect();
}

export function* messengerDisconnectSaga() {
  socket.disconnect();
}

export function* messengerChangeChannelSaga(action: IMessengerChangeChannel) {
  socket.emit('AddRoom', action.channel);
}

export function* messengerSendMessageSaga(action: IMessengerSendMessage) {
  socket.emit('AddChat', action.message);
}

export function* messengerSendWhisperSaga(action: IMessengerSendWhisper) {
  socket.emit('AddWhisper', action.whisper, action.to);
}

export function* messengerUpdateOnlineSaga() {
  const { messenger } = store.getState();
  if (messenger.status === "Connected") {
    socket.emit('GetOnline');
  }
}

export function messengerRejoinRoomSaga() {
  const { messenger } = store.getState();
  if (messenger.channel === "") return;
  socket.emit('RejoinRoom', messenger.channel);
}