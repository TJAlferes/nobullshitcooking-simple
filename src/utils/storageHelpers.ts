export const getStorageItem = (key: ) =>
  JSON.parse(localStorage.getItem(key));

export const setStorageItem = (key: , value: ) =>
  localStorage.setItem(JSON.stringify(key), JSON.stringify(value));

export const removeStorageItem = (key: ) =>
  localStorage.removeItem(JSON.stringify(key));

export const clearStorage = () => localStorage.clear();

export function loadFromLocalStorage() {
  try {
    if (localStorage.getItem('appState') === null) return undefined;  // sufficient?
    return JSON.parse(localStorage.getItem('appState'));
  } catch (err) {
    console.log(err);
    return undefined;
  }
}

export function saveToLocalStorage(state: ) {
  try {
    localStorage.setItem('appState', JSON.stringify(state));
  } catch (err) {
    console.log(err);
  }
}