import { nobscappWindowFocused } from '../store/nobscapp/actions';

export function initWindowBlurHandler(store: ) {
  window.onblur = function() {
    store.dispatch(nobscappWindowFocused(false));
  };
}

export function initWindowFocusHandler(store: ) {
  window.onfocus = function() {
    const nobscFavicon = document.getElementById('nobsc-favicon');
    nobscFavicon.href = "/nobsc-normal-favicon.png";
    store.dispatch(nobscappWindowFocused(true));
  };
}