import cesar from '././index';

it('Should encrypt and decrypt, no matter the shift', () => {
  const value = 'ZAbcdz0';
  const decodeValue = '1BcdeAa';
  expect(cesar(value, 1)).toEqual(decodeValue);
  expect(cesar(decodeValue, -1)).toEqual(value);

  const encodeValueA = cesar(value, 25);
  expect(cesar(encodeValueA, -25)).toEqual(value);

  const encodeValueB = cesar(value, -50);
  expect(cesar(encodeValueB, 50)).toEqual(value);

  const encodeValueC = cesar(value, -51);
  expect(cesar(encodeValueC, 51)).toEqual(value);

  const encodeValueD = cesar(value, 125);
  expect(cesar(encodeValueD, -125)).toEqual(value);
});
