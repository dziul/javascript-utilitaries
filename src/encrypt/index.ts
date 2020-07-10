import { encode as encodeBaseFixFour, decode as decodeBaseFixFour } from './baseFixFour';
import cesarEncrypt from './cesar';

export const encode = (entry: any, divideAt = 6, separater = '-') => {
  const data = encodeBaseFixFour(JSON.stringify([entry]), divideAt, separater);
  return cesarEncrypt(data, 2);
};

export const decode = (entry: string, separater = '-') => {
  const data = decodeBaseFixFour(cesarEncrypt(entry, -2), separater);

  return JSON.parse(data)[0];
};
