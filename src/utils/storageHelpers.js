export const getStorageItem = key => JSON.parse(localStorage.getItem(key));

export const setStorageItem = (key, value) => localStorage.setItem(JSON.stringify(key), JSON.stringify(value));

export const removeStorageItem = key => localStorage.removeItem(JSON.stringify(key));

export const clearStorage = () => localStorage.clear();