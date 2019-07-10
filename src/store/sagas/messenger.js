import { call, put } from 'redux-saga/effects';
import io from 'socket.io-client';

import * as actionTypes from '../actions/actionTypes';
import {
  messengerChangedChannel,
  messengerSentMessage
} from '../actions/index';

// our backend API 
const endpoint = process.env.NODE_ENV === 'production'
? 'http://nobullshitcookingapi-env-1.kjumrgwpyc.us-east-1.elasticbeanstalk.com'
: 'http://localhost:3003';

const socket = io.connect(endpoint);

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