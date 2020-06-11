import { encode as encryptEncode, decode as encryptDecode } from '../encrypt';
const storage = window.localStorage;
const createKey = (key) => {
  return `@${encryptEncode(key, 0)}`;
};
export const setItem = (key, data, divideAt = 6) => {
  storage.setItem(createKey(key), encryptEncode(data, divideAt));
};
export const hasItem = (key) => storage.getItem(createKey(key)) !== null;
export const getItem = (key) => {
  const data = storage.getItem(createKey(key));
  if (!data) return null;
  return encryptDecode(data);
};
export const removeItem = (key) => {
  storage.removeItem(createKey(key));
};
