import { call, delay, put } from 'redux-saga/effects';
import io from 'socket.io-client';

import {
  messengerConnected,
  messengerDisconnected,
  messengerChangedChannel,
  messengerSentMessage,
  messengerReceivedMessage,
  messengerJoinedUser,
  messengerTest,
  messengerLeftUser
} from '../actions/index';
import { store } from '../../index';

import { NOBSCBackendAPIEndpointOne } from '../../config/NOBSCBackendAPIEndpointOne';
const endpoint = NOBSCBackendAPIEndpointOne;

const socket = io.connect(endpoint, {
  //forceNew: true,
  reconnection: false,
  autoConnect: false,
  //query: {//...}
});

socket.on('connect', () => {
  console.log('Connected to NOBSC Messenger.');
  //socket.emit('GetMe',);
});

socket.on('disconnect', () => {
  console.log('Disconnected from NOBSC Messenger.');
});

/*socket.on('GetMe', () => {

});*/

socket.on('GetUser', function (users) {
  console.log(users);
  //messengerJoinedUser(users);
  messengerJoinedUserSaga(users);
  store.dispatch(messengerTest(users));
});

socket.on('GetChat', () => {
  
});

socket.on('AddChat', () => {
  
});

socket.on('GetRoom', () => {
  
});

socket.on('RemoveUser', () => {
  
});

socket.on('AddUser', (user) => {
  console.log(user);
  // if that works, then do action to reducer to update store to update room list
});

//socket.emit('GetMe',);
//socket.emit('GetUser',);  // room (?)
//socket.emit('GetChat',);  // data (room?)
//socket.emit('AddChat',);  // chat
//socket.emit('GetRoom',);

export function* messengerConnectSaga() {
  socket.connect();  // Note to self: alias for .open()
  yield put(messengerConnected());
}

export function* messengerDisconnectSaga() {
  socket.disconnect();
  yield put(messengerDisconnected());
}



export function* messengerChangeChannelSaga(action) {
  console.log('called, yay!');
  socket.emit('AddRoom', action.channel);
  // conditional for error?
  //yield put({type: actionTypes.MESSENGER_CHANGED_CHANNEL, channel: action.channel});
  //yield put(messengerChangedChannel(action.channel));  // channel?
}

export function* messengerJoinedUserSaga(action) {
  console.log('called, yay!');
  yield put(messengerTest(action.user));
}

export function* messengerLeftUserSaga() {

}



export function* messengerSendMessageSaga(action) {
  //const { message } =
  const message = yield call([socket, socket.send], action.message);  // apply instead of call?
  socket.emit('AddChat',);
  // conditional for error?
  //yield put({type: actionTypes.MESSENGER_SENT_MESSAGE, message: action.message});
  yield put(messengerSentMessage(action.message));  // message? yes
}

export function* messengerReceivedMessageSaga(action) {

  yield put(messengerReceivedMessage(action.message));
}