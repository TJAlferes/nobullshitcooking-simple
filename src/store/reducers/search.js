import { SEARCH_SET_INDEX } from '../actions/actionTypes';

const initialState = {currentIndex: "recipes"};

const setIndex = (state, action) => ({
  ...state,
  ...{currentIndex: action.index}
});

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_SET_INDEX: return setIndex(state, action);
  }
  return state;
};

export default searchReducer;