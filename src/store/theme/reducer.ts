import {
  THEME_DARK_TRIGGER,
  THEME_LIGHT_TRIGGER,
  IThemeState,
  IThemeActions
} from './types';

const initialState: IThemeState = {
  headerTheme: "header-light",
  mainTheme: "main-light",
  footerTheme: "footer-light",
  dropDownMenuTheme: "drop-down-menu-light",
  navGridATheme: "nav-grid-a-light",
  oneColumnATheme: "one-column-a-light",
  twoColumnATheme: "two-column-a-light",
  twoColumnBTheme: "two-column-b-light",
  tableATheme: "table-a-light",
  breadCrumbsTheme: "bread-crumbs-light",
  leftNavTheme: "left-nav-light",
  suggestionsTheme: "suggestions-light",
  feedTheme: "feed-light"
};

const themeReducer = (
  state = initialState,
  action: IThemeActions
): IThemeState => {
  switch (action.type) {
    case THEME_DARK_TRIGGER:
      return {
        ...state,
        ...{
          headerTheme: "header-dark",
          mainTheme: "main-dark",
          footerTheme: "footer-dark",
          dropDownMenuTheme: "drop-down-menu-dark",
          navGridATheme: "nav-grid-a-dark",
          oneColumnATheme: "one-column-a-dark",
          twoColumnATheme: "two-column-a-dark",
          twoColumnBTheme: "two-column-b-dark",
          tableATheme: "table-a-dark",
          breadCrumbsTheme: "bread-crumbs-dark",
          leftNavTheme: "left-nav-dark",
          suggestionsTheme: "suggestions-dark",
          feedTheme: "feed-dark"
        }
      };

    case THEME_LIGHT_TRIGGER:
      return {...state, ...initialState};

    default: return state;
  }
};

export default themeReducer;