import * as actionTypes from '../actions/actionTypes';

// WRITE UNIT TESTS FOR REDUCERS AND ACTION CREATORS

const initialState = {
  headerTheme: "header-light",
  mainTheme: "main-light",
  footerTheme: "footer-light",
  dropDownMenuTheme: "drop-down-menu-light"
};

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.THEME_DARK_TRIGGER:
      return {...state, ...{
        headerTheme: "header-dark",
        mainTheme: "main-dark",
        footerTheme: "footer-dark",
        dropDownMenuTheme: "drop-down-menu-dark"
      }};
    case actionTypes.THEME_LIGHT_TRIGGER:
      return {...state, ...initialState};
  }
  return state;
};

export default themeReducer;