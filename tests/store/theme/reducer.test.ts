import { themeReducer } from '../../../src/store/theme/reducer';
import { THEME_DARK_TRIGGER, THEME_LIGHT_TRIGGER } from '../../../src/store/theme/types';

const dark = {
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
const light = {
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

const initialState = light;

describe('theme reducer', () => {
  it('returns initial state', () => {
    expect(themeReducer(undefined, {type: THEME_LIGHT_TRIGGER}))
      .toEqual(initialState);
  });

  it('handles actions of type THEME_DARK_TRIGGER', () => {
    expect(themeReducer(initialState, {type: THEME_DARK_TRIGGER}))
      .toEqual(dark);
  });

  it('handles actions of type THEME_LIGHT_TRIGGER', () => {
    expect(themeReducer(dark, {type: THEME_LIGHT_TRIGGER})).toEqual(light);
  });
});