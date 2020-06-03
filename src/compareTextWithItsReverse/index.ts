const compareTextWithItsReverse = (text: string, sensitive = false) => {
  const strReverse = text.split('').reverse().join('');
  if (sensitive) return strReverse === text;
  return strReverse.toLowerCase() === text.toLowerCase();
};

export default compareTextWithItsReverse;
