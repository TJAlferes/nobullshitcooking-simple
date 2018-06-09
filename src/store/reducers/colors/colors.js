import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';
import update from 'immutability-helper';

const initialState = [];
/*
const color = (state, action) => {
  
    switch (action.type) {
        case C.ADD_COLOR:
            return {
                id: action.id,
                title: action.title,
                color: action.color,
                timestamp: action.timestamp,
                rating: 0
            }
        case C.RATE_COLOR:
            return (state.id !== action.id) ?
                state :
                {
                    ...state,
                    rating: action.rating
                }
        default :
            return state
    }
}

const sort = (state="SORTED_BY_DATE", action={ type: null }) => {
    switch (action.type) {
        case "SORT_COLORS":
            return action.sortBy
        default :
            return state
    }
}
*/
const addColor = (state, action) => {
  return updateObject(state, {

  });
}

const rateColor = (state, action) => {
  return updateObject(state, {
    
  });
}

const removeColor = (state, action) => {
  return updateObject(state, {
    
  });
}

const colorsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_COLOR: return [...state, color({}, action)];
    case actionTypes.RATE_COLOR: return state.map(c => color(c, action));
    case actionTypes.REMOVE_COLOR: return state.filter(c => c.id !== action.id);
    default: return state;
  }
}

export default colorsReducer;