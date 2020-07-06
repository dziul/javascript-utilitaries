// identifica se uma string é igual a sua versão inversa.
// leitura da esquerda pra direta é igual a direta pra esquerda

const isPalindrome = (text: string | number, sensitive = false) => {
  const strReverse = text.toString().split('').reverse().join('');
  if (sensitive) return strReverse === text;
  return strReverse.toLowerCase() === text.toString().toLowerCase();
};

export default isPalindrome;
