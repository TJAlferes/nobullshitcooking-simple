import { NOBSCAPP_WINDOW_FOCUSED } from './types';

export const nobscappWindowFocused = (condition: boolean) => ({
  type: NOBSCAPP_WINDOW_FOCUSED,
  condition
});