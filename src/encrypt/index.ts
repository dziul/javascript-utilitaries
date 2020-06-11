import { cesarEncrypLetter } from './cesar';

// export const numberShiftForward = (needle: string | number) => String(Number(needle) + 1).slice(-1);
// export const numberShiftBack = (needle: string | number) =>
//   String(Number(needle) - 1 + 10).slice(-1);

const letterMetamorphosis = (letter: string) => {
  const letterUpper = letter.toUpperCase();
  return letterUpper === letter ? letter.toLowerCase() : letterUpper;
};

// const curator = (needle: string, isEncode = true) => {
//   if (Number.isNaN(Number(needle))) {
//     return letterMetamorphosis(needle);
//   }
//   return isEncode ? numberShiftForward(needle) : numberShiftBack(needle);
// };

const curator = (needle: string, isEncode = true) => {
  if (isEncode) {
    return cesarEncrypLetter(letterMetamorphosis(needle), 2);
  }
  return letterMetamorphosis(cesarEncrypLetter(needle, -2));
};

export const encode = (needle: unknown, divideAt = 6, separater = '-') => {
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

export const decode = (needle: string, separater = '-') => {
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

// export const process = (n: string, divideAt = 6) => {
//   const needle = btoa(n);
//   let count = needle.length;
//   let start = 0;
//   let end = divideAt || count;
//   const data = [];
//   do {
//     console.log(start, end);
//     data.push(needle.slice(start, end));
//     start += divideAt;
//     end += divideAt;
//     count -= divideAt;
//   } while (count > 0 && divideAt);

//   return data.join('-');
// };

// const simpleEncrypt = (message: string, skip = 1) => {
//   return message
//     .split('')
//     .map((letter) => {
//       const letterCode = letter.charCodeAt(0) + skip;
//       return String.fromCharCode(letterCode);
//     })
//     .join('');
// };
// export const encode = (data: unknown, skip = 10) => {
//   const dataString = JSON.stringify(data);
//   return JSON.stringify([simpleEncrypt(dataString, skip), skip]);
// };

// export const decode = (code: string) => {
//   const [data, skip] = JSON.parse(code);
//   return JSON.parse(simpleEncrypt(data, -skip));
// };

// export default simpleEncrypt;

//
//
//
// UMA OUTRA SUGESTAO DE CRIPTOGRAFIA GENERICA
//
//
// const encode = (needle: string, separator = '.', radix = 36) =>
//   needle
//     .split('')
//     .map((letter) => {
//       const suffix = Math.floor(Math.random() * 1000) + 1;
//       return `${(letter.charCodeAt(0) + suffix).toString(radix)}x${suffix.toString(radix)}`;
//     })
//     .join(separator);

// const decode = (needle: string, separator = '.', radix = 36) =>
//   needle
//     .split(separator)
//     .map((part) => {
//       const data = part.split('x');
//       if (data.length !== 2) return part;
//       const subtract = parseInt(data[1], radix);
//       const charCode = parseInt(data[0], radix);

//       return String.fromCharCode(charCode - subtract);
//     })
//     .join('');
