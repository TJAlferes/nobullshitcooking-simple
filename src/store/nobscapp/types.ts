export const NOBSCAPP_WINDOW_FOCUSED = 'NOBSCAPP_WINDOW_FOCUSED' as const;

export interface NOBSCAppState {
  windowFocused: boolean
}

export type NOBSCAppActions = NOBSCAppWindowFocused;

interface NOBSCAppWindowFocused {
  type: typeof NOBSCAPP_WINDOW_FOCUSED
  condition: boolean
}