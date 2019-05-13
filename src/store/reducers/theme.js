import * as actionTypes from '../actions/actionTypes';

// WRITE UNIT TESTS FOR REDUCERS AND ACTION CREATORS

const initialState = {theme: "light"};

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.THEME_DARK_TRIGGER: return {...state, ...{theme: "dark"}};
    case actionTypes.THEME_LIGHT_TRIGGER: return {...state, ...{theme: "light"}};
  }
  return state;
};

export default themeReducer;