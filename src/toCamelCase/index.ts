const toCamelCase = (needle: string) => {
  const parsed = needle.toLowerCase().replace(/[^\w]+(\w)/g, (match, p1) => {
    if (p1) return p1.toUpperCase();
    return match;
  });

  return parsed.replace(/[^\w]/g, '');
};

export const toUpperCamelCase = (needle: string) => {
  const parsed = toCamelCase(needle);
  const firstLetter = parsed[0];
  const restLetters = parsed.slice(1);
  return firstLetter.toLocaleUpperCase() + restLetters;
  // const [firstLetter, ...rest] = [...parsed];
  // return firstLetter.toLocaleUpperCase() + rest.join('');
};

export default toCamelCase;
