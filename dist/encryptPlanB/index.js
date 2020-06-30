const separator = ':';
const divider = '.';
export const encode = (needle, radix = 36) => {
  const enconded = needle
    .split('')
    .map((letter) => {
      const count = 1000;
      const suffix = Math.floor(Math.random() * count) + 1;
      return `${(letter.charCodeAt(0) + suffix).toString(radix)}${divider}${suffix.toString(radix)}`;
    })
    .join(separator);
  return enconded;
};
export const decode = (needle, radix = 36) => {
  const decoded = needle
    .split(separator)
    .map((part) => {
      const data = part.split(divider);
      if (data.length !== 2) return part;
      const subtract = parseInt(data[1], radix);
      const charCode = parseInt(data[0], radix);
      return String.fromCharCode(charCode - subtract);
    })
    .join('');
  return decoded;
};
