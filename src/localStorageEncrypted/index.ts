/* eslint-disable @typescript-eslint/no-explicit-any */
import { encode as encryptEncode, decode as encryptDecode } from '../encrypt';

const storage = window.localStorage;

const createKey = (key: string) => {
  return `@${encryptEncode(key, 0)}`;
};
export const setItem = (key: string, data: any, divideAt = 6) => {
  storage.setItem(createKey(key), encryptEncode(data, divideAt));
};

export const hasItem = (key: string) => storage.getItem(createKey(key)) !== null;

export const getItem = <T>(key: string): T | null => {
  const data = storage.getItem(createKey(key));
  if (!data) return null;
  return encryptDecode(data);
};

export const removeItem = (key: string) => {
  storage.removeItem(createKey(key));
};
