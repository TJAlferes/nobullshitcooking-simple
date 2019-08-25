import { call, put } from 'redux-saga/effects';
import io from 'socket.io-client';

//import * as actionTypes from '../actions/actionTypes';
import {
  messengerConnected,
  messengerDisconnected,
  messengerChangedChannel,
  messengerSentMessage,
  messengerJoinedUser,
  messengerLeftUser
} from '../actions/index';

import { NOBSCBackendAPIEndpointOne } from '../../config/NOBSCBackendAPIEndpointOne';
const endpoint = NOBSCBackendAPIEndpointOne;

const socket = io.connect(endpoint, {autoConnect: false});  // move? pass?

export function* messengerConnectSaga() {
  // const { connection } = 
  //const connection = yield call([socket, socket.on], 'connect', )

  // MAKE YIELD CALLS ?

  let tokenInput;
  let error = null;

  socket.on('connect', () => {
    console.log('Connected');
    socket.emit('authenticate', {token: tokenInput.value});  // instead of token, do authname? (username)
    socket.on('authenticated', () => {
      // use as normal
    });
  });

  socket.on('unauthorized', (reason) => {
    console.log('Unauthorized:', reason);
    error = reason.message;
    socket.disconnect();
  });

  socket.on('disconnect', (reason) => {
    console.log(`Disconnected: ${error || reason}`);
    //statusInput.value = `Disconnected: ${error || reason}`;
    error = null;
  });

  socket.connect();
  yield put(messengerConnected());
}

export function* messengerChangeChannelSaga(action) {
  //const { channel } =
  const channel = yield call([socket, socket.emit], 'change-channel', action.channel);  // apply instead of call?
  // conditional for error?
  //yield put({type: actionTypes.MESSENGER_CHANGED_CHANNEL, channel: action.channel});
  yield put(messengerChangedChannel(action.channel));  // channel?
}

export function* messengerSendMessageSaga(action) {
  //const { message } =
  const message = yield call([socket, socket.send], action.message);  // apply instead of call?
  // conditional for error?
  //yield put({type: actionTypes.MESSENGER_SENT_MESSAGE, message: action.message});
  yield put(messengerSentMessage(action.message));  // message?
}