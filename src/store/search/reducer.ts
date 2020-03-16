import { SEARCH_SET_INDEX, SearchState, SearchActions } from './types';

const initialState: SearchState = {currentIndex: "recipes"};

const searchReducer = (
  state = initialState,
  action: SearchActions
): SearchState => {
  switch (action.type) {
    case SEARCH_SET_INDEX: return {...state, ...{currentIndex: action.index}};
    default: return state;
  }
};

export default searchReducer;