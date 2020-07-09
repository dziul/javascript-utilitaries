const toCamelCase = (needle) => {
  const parsed = needle.toLowerCase().replace(/[^\w]+(\w)/g, (match, p1) => {
    if (p1) return p1.toUpperCase();
    return match;
  });
  return parsed.replace(/[^\w]/g, '');
};
export const toUpperCamelCase = (needle) => {
  const parsed = toCamelCase(needle);
  const firstLetter = parsed[0];
  const restLetters = parsed.slice(1);
  return firstLetter.toLocaleUpperCase() + restLetters;
};
export default toCamelCase;
