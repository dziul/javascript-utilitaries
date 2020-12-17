
  const BASE = '1234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';
  const BASE_LAST_INDEX = CryptoUtil.base.length - 1;

  const encrypt = (needle: string, shift = 1) => {
    let indexTarget = needle.charCodeAt(0);
    indexTarget = ((indexTarget + shift) << 2) - shift;
    return indexTarget < BASE_LAST_INDEX
      ? BASE[indexTarget]
      : BASE[indexTarget % BASE_LAST_INDEX];
  }

  const hash = (message: string) => {
    const messageCount = message.length;
    const shift = [...message].reduce(
      (accumulator, letter) => letter.charCodeAt(0) + accumulator,
      0
    );

    return [...message].reduce((accumulator, letter, index) => {
      const shiftAntiConflict = accumulator.length ? accumulator[index - 1].charCodeAt(0) : 0;
      let letterNew = encrypt(letter, messageCount + shift + shiftAntiConflict + index);
      if (accumulator.length && accumulator[index - 1] === letterNew.toLowerCase()) {
        letterNew = encrypt(letterNew, shift);
      }
      return accumulator + letterNew;
    }, '');
  }
  
  export default hash;
