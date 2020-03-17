export const THEME_DARK_TRIGGER = 'THEME_DARK_TRIGGER' as const;
export const THEME_LIGHT_TRIGGER = 'THEME_LIGHT_TRIGGER' as const;

export interface ThemeState {
  headerTheme: string
  mainTheme: string
  footerTheme: string
  dropDownMenuTheme: string
  navGridATheme: string
  oneColumnATheme: string
  twoColumnATheme: string
  twoColumnBTheme: string
  tableATheme: string
  breadCrumbsTheme: string
  leftNavTheme: string
  suggestionsTheme: string
  feedTheme: string
}

export type ThemeActions = ThemeDarkTrigger | ThemeLightTrigger;

interface ThemeDarkTrigger {
  type: typeof THEME_DARK_TRIGGER
}

interface ThemeLightTrigger {
  type: typeof THEME_LIGHT_TRIGGER
}