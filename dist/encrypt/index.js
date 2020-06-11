import { cesarEncrypLetter } from './cesar';
const letterMetamorphosis = (letter) => {
  const letterUpper = letter.toUpperCase();
  return letterUpper === letter ? letter.toLowerCase() : letterUpper;
};
const curator = (needle, isEncode = true) => {
  if (isEncode) {
    return cesarEncrypLetter(letterMetamorphosis(needle), 2);
  }
  return letterMetamorphosis(cesarEncrypLetter(needle, -2));
};
export const encode = (needle, divideAt = 6, separater = '-') => {
  let data = btoa(JSON.stringify([needle]));
  const equalIndex = data.indexOf('=');
  data = data.slice(0, equalIndex > 0 ? equalIndex : data.length);
  const dataLength = data.length - 1;
  return data
    .split('')
    .reverse()
    .map((unid, index) => {
      let after = '';
      if (divideAt && (divideAt === 1 || !((index + 1) % divideAt)) && dataLength > index) after = separater;
      return curator(unid) + after;
    })
    .join('');
};
export const decode = (needle, separater = '-') => {
  const data = needle
    .split(separater)
    .join('')
    .split('')
    .reverse()
    .map((letter) => curator(letter, false))
    .join('');
  const out = JSON.parse(atob(data));
  return out[0];
};
