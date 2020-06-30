const mutation = (entry: string) => {
  const entryForceLowerCase = entry.toLowerCase();
  return entryForceLowerCase === entry ? entry.toUpperCase() : entryForceLowerCase;
};

export const encode = (entry: string, sequence = 8, separator = '-') => {
  let parsered = btoa(entry);
  const equalSignIndex = parsered.indexOf('=');
  if (equalSignIndex !== -1) parsered = parsered.slice(0, equalSignIndex);
  const parseredLength = parsered.length - 1;
  return parsered
    .split('')
    .reverse()
    .map((letter, index) => {
      const position = index + 1;
      const mutantLetter = mutation(letter);

      return position % sequence === 0 && index !== 0 && index !== parseredLength
        ? mutantLetter + separator
        : mutantLetter;
    })
    .join('');
};

export const decode = (entry: string, separator = '-') => {
  const decoded = entry.split(separator).join('').split('').map(mutation).reverse().join('');
  return atob(decoded);
};
