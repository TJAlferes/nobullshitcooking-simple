import themeReducer from './reducer';
import { THEME_DARK_TRIGGER, THEME_LIGHT_TRIGGER } from './types';

const initialState = {
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

describe('the theme reducer', () => {
  it('returns initial state', () => {
    const actual = themeReducer(undefined, {type: THEME_LIGHT_TRIGGER});
    const expected = initialState;
    expect(actual).toEqual(expected);
  });

  it('handles actions of type THEME_DARK_TRIGGER', () => {
    const actual = themeReducer(initialState, {type: THEME_DARK_TRIGGER});
    const expected = {
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
    };
    expect(actual).toEqual(expected);
  });

  it('handles actions of type THEME_LIGHT_TRIGGER', () => {
    const beforeState = {
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
    };
    const actual = themeReducer(beforeState, {type: THEME_LIGHT_TRIGGER});
    const expected = initialState;
    expect(actual).toEqual(expected);
  });
});