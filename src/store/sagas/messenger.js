import { call, put } from 'redux-saga/effects';
import io from 'socket.io-client';

import {
  messengerConnected,
  messengerDisconnected,
  messengerChangedChannel,
  messengerSentMessage,
  messengerReceivedMessage,
  messengerJoinedUser,
  messengerLeftUser
} from '../actions/index';

import { NOBSCBackendAPIEndpointOne } from '../../config/NOBSCBackendAPIEndpointOne';
const endpoint = NOBSCBackendAPIEndpointOne;

const socket = io.connect(endpoint, {
  //forceNew: true,
  reconnection: false,
  autoConnect: false,
  //query: {//...}
});  // move? pass?

export function* messengerConnectSaga() {
  // const { connection } = 
  //const connection = yield call([socket, socket.on], 'connect', )

  // MAKE YIELD CALLS ?

  let tokenInput;
  let error = null;

  socket.on('connect', () => {
    console.log('Connected to NOBSC Messenger.');
    //socket.emit('authenticate', {token: tokenInput.value});  // instead of token, do authname? (username)
    // move this outside of connect? ****************
    socket.on('authenticated', () => {
      // use as normal
    });

    socket.emit('GetMe');
  });

  socket.on('unauthorized', (reason) => {
    console.log('Unauthorized:', reason);
    error = reason.message;
    socket.disconnect();
  });

  /*socket.on('disconnect', (reason) => {
    console.log(`Disconnected: ${error || reason}`);
    //statusInput.value = `Disconnected: ${error || reason}`;
    error = null;
  });*/

  //socket.on('GetMe', )

  socket.connect();  // Note to self: alias for .open()
  yield put(messengerConnected());
}

export function* messengerDisconnectSaga() {
  socket.on('disconnect', () => {
    console.log('Disconnected from NOBSC Messenger.');
  });

  socket.disconnect();
  yield put(messengerDisconnected());
}



export function* messengerChangeChannelSaga(action) {
  const r = {};
  r.name = action.channel;
  //const channel = yield call([socket, socket.emit], 'change-channel', action.channel);  // apply instead of call?
  socket.emit('AddRoom', r);
  // conditional for error?
  //yield put({type: actionTypes.MESSENGER_CHANGED_CHANNEL, channel: action.channel});
  //yield put(messengerChangedChannel(action.channel));  // channel?
}



export function* messengerJoinedUserSaga() {

}

export function* messengerLeftUserSaga() {

}



export function* messengerSendMessageSaga(action) {
  //const { message } =
  const message = yield call([socket, socket.send], action.message);  // apply instead of call?
  // conditional for error?
  //yield put({type: actionTypes.MESSENGER_SENT_MESSAGE, message: action.message});
  yield put(messengerSentMessage(action.message));  // message? yes
}

export function* messengerReceivedMessageSaga(action) {

  yield put(messengerReceivedMessage(action.message));
}