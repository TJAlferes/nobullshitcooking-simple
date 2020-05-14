import { Store } from 'redux';

import { nobscappWindowFocused } from '../store/nobscapp/actions';

export function initWindowBlurHandler(store: Store) {
  window.onblur = function() {
    store.dispatch(nobscappWindowFocused(false));
  };
}

export function initWindowFocusHandler(store: Store) {
  window.onfocus = function() {
    const nobscFavicon: HTMLLinkElement | null = document
    .getElementById('nobsc-favicon') as HTMLLinkElement | null;
    if (!nobscFavicon) return;
    nobscFavicon.href = "/nobsc-normal-favicon.png";
    store.dispatch(nobscappWindowFocused(true));
  };
}