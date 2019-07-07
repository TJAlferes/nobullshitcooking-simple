import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

import * as actionTypes from '../actions/actionTypes';
import {
  messengerChangeChannel,
  messengerAddToMessages,
  messengerSendMessage
} from '../actions/index';

// our backend API 
const endpoint = process.env.NODE_ENV === 'production'
? 'http://nobullshitcookingapi-env-1.kjumrgwpyc.us-east-1.elasticbeanstalk.com'
: 'http://localhost:3003';

/*function* sendMessageSaga(params) {
  yield takeEvery(
    actionTypes.MESSENGER_SEND_MESSAGE,
    function(message) {
      message.from = params.username;
      params.socket.send(JSON.stringify(message))
    }
  );
}*/