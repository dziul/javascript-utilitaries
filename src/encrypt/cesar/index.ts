const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
const alphabetLength = alphabet.length - 1;

export const cesarEncrypLetter = (letter: string, shift: number) => {
  const index = alphabet.indexOf(letter);

  if (index === -1) return letter;
  let nextModified;
  const nextResult = index + (shift % alphabetLength);
  if (nextResult > alphabetLength) {
    nextModified = (nextResult % alphabetLength) - 1;
  } else if (nextResult < 0) nextModified = nextResult + alphabetLength + 1;
  else nextModified = nextResult;

  const letterShifted = alphabet.charAt(nextModified);

  return letterShifted;
};

const cesarEncrypt = (message: string, shift = 1) =>
  [...message].map((letter) => cesarEncrypLetter(letter, shift)).join('');

export default cesarEncrypt;
