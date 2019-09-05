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
});

socket.on('disconnect', () => {
  console.log('Disconnected from NOBSC Messenger.');
});

socket.on('GetUser', function (users, roomToAdd) {
  store.dispatch(messengerTest(users, roomToAdd));
});

socket.on('AddUser', (user) => {
  store.dispatch(messengerJoinedUser(user));
});

socket.on('RemoveUser', (user) => {
  console.log('yay!!!');
  store.dispatch(messengerLeftUser(user));
});

/*socket.on('GetChat', () => {
  
});*/

socket.on('AddChat', (message) => {
  store.dispatch(messengerReceivedMessage(message));
});

export function* messengerConnectSaga() {
  socket.connect();  // Note to self: alias for .open()
  yield put(messengerConnected());  // ?
}

export function* messengerDisconnectSaga() {
  socket.disconnect();
  yield put(messengerDisconnected());  // ?
}

export function* messengerChangeChannelSaga(action) {
  socket.emit('AddRoom', action.channel);
  // conditional for error?
  //yield put(messengerChangedChannel(action.channel));
}

export function* messengerSendMessageSaga(action) {
  socket.emit('AddChat', action.message);
  // conditional for error?
  //yield put(messengerSentMessage(action.message));  // message? yes ?
}

/*function throttle(wait, func, immediate) {
  let timeout;
	return function() {
    let context = this;
    let args = arguments;
		function later() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		}
		let callNow = immediate && !timeout;
		if (!timeout) timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
}

function debounce(func, wait, immediate) {
  let timeout;
  return function() {
    let context = this;
    let args = arguments;
    function later() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    }
    let callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  }
}*/