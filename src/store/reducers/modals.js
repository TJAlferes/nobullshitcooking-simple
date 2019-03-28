import * as actionTypes from '../../actions/actionTypes';
import { updateObject } from '../../../utils/updateObject';

const initialState = {modals: []};

const openModal = (state, action) => {
  return updateObject(state, {
    modals: state.modals.concat(action.obj)
  });
}

const closeModal = (state, action) => {
  return updateObject(state, {
    modals: state.modals.filter(item => item.id !== action.obj.id)
  });
}

const modalsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.OPEN_MODAL: return openModal(state, action);
    case actionTypes.CLOSE_MODAL: return closeModal(state, action);
    default: return state;
  }
}

export default modalsReducer;