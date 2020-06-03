const characters = '0123456789aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ';
const charactersLength = characters.length - 1;

const uniqueId = (maxCharacters = 6, namespace = '') => {
  let result = '';
  while (maxCharacters) {
    const index = Math.round(Math.random() * charactersLength);
    result += characters[index];
    maxCharacters--;
  }
  return namespace + result;
};

export const hash = (strictLevel = 6, splitInto = 5, separator = '-') => {
  const result = [];
  while (splitInto) {
    result.push(uniqueId(strictLevel));
    splitInto--;
  }
  return result.join(separator);
};

export default uniqueId;
