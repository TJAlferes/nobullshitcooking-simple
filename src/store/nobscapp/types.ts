export const NOBSCAPP_WINDOW_FOCUSED = 'NOBSCAPP_WINDOW_FOCUSED';

export interface NOBSCAppState {
  windowFocused: boolean
}

export type NOBSCAppActions = NOBSCAppWindowFocused;

interface NOBSCAppWindowFocused {
  type: typeof NOBSCAPP_WINDOW_FOCUSED
  condition: boolean
}