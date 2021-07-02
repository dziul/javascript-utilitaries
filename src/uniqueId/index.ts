const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
const lastIndexFromCharacters = characters.length - 1;

const uniqueId = (maxCharacters = 6) => {
  let result = '';
  while (maxCharacters--) {
    //const random = window.crypto.getRandomValues(new Uint32Array(1))[0]/2**32; //to fortify
    const random = Math.random();
    const index = Math.round(random * lastIndexFromCharacters);
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
