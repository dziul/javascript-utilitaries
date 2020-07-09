const isPalindrome = (text, sensitive = false) => {
  const strReverse = text.toString().split('').reverse().join('');
  if (sensitive) return strReverse === text;
  return strReverse.toLowerCase() === text.toString().toLowerCase();
};
export default isPalindrome;
