export const NOBSCAPP_WINDOW_FOCUSED = 'NOBSCAPP_WINDOW_FOCUSED' as const;

export interface INOBSCAppState {
  windowFocused: boolean
}

export type NOBSCAppActions = INOBSCAppWindowFocused;

interface INOBSCAppWindowFocused {
  type: typeof NOBSCAPP_WINDOW_FOCUSED
  condition: boolean
}