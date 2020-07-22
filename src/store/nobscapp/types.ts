export const NOBSCAPP_WINDOW_FOCUSED = 'NOBSCAPP_WINDOW_FOCUSED' as const;

/*

State

*/

export interface INOBSCAppState {
  windowFocused: boolean
}

/*

Actions

*/

export type NOBSCAppActions = INOBSCAppWindowFocused;

interface INOBSCAppWindowFocused {
  type: typeof NOBSCAPP_WINDOW_FOCUSED
  condition: boolean
}