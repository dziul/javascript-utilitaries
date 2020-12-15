const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
const lastIndexFromCharacters = characters.length - 1;

const uniqueId = (maxCharacters = 6) => {
  let result = '';
  while (maxCharacters--) {
    const index = Math.round(Math.random() * lastIndexFromCharacters);
    result += characters[index];
  }
  return result;
};

export const generateKey = (strictLevel = 6, splitInto = 5, separator = '-') => {
  const result = [];
  while (splitInto--) {
    result.push(uniqueId(strictLevel));
  }
  return result.join(separator);
};

export default uniqueId;
