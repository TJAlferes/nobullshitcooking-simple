import { RootState } from '../store/rootReducer';

export function getStorageItem(key: string) {
  const item = localStorage.getItem(key);
  if (!item) return undefined;  // sufficient?
  return JSON.parse(item);
}

export function setStorageItem(key: any, value: any) {  // is this used?
  localStorage.setItem(JSON.stringify(key), JSON.stringify(value));
}

export function removeStorageItem(key: string) {  // this is used
  localStorage.removeItem(JSON.stringify(key));
}

export function clearStorage() {
  localStorage.clear();
}

export function loadFromLocalStorage() {
  try {
    const item = localStorage.getItem('appState');
    if (!item) return undefined;  // sufficient?
    return JSON.parse(item);
  } catch (err) {
    console.log(err);
    return undefined;
  }
}

export function saveToLocalStorage(state: RootState) {  // correct type?
  try {
    localStorage.setItem('appState', JSON.stringify(state));
  } catch (err) {
    console.log(err);
  }
}