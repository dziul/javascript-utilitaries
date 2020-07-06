import isPalindrome from './index';

it('Should be true', () => {
  expect(isPalindrome('salas')).toBe(true);
  expect(isPalindrome(52625)).toBe(true);
  expect(isPalindrome('abcdcba')).toBe(true);
});

it('Should be false', () => {
  expect(isPalindrome('girls')).toBe(false);
  expect(isPalindrome('Salas', true)).toBe(false);
  expect(isPalindrome('abCdcBa', true)).toBe(false);
});
