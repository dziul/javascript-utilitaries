import { encode, decode } from './index';

it('Should encrypt and decrypt', () => {
  const text = 'hello word';
  const textEncoded = encode(text);
  const textDecoded = decode(textEncoded);
  expect(text).toEqual(textDecoded);
});

it('when comparing two outputs from the same encrypted entry it should be different.', () => {
  const text = 'hello word';
  const textEncoded = encode(text);
  const textEncoded2 = encode(text);
  const textDecoded = decode(textEncoded);
  const textDecoded2 = decode(textEncoded);

  expect(textEncoded).not.toEqual(textEncoded2);

  expect(text).toEqual(textDecoded);
  expect(text).toEqual(textDecoded2);
});
