import { decode, encode } from './index';

it('Should encrypt and decrypt same entry', () => {
  const entry = 'abcedfg'; // YWJjZWRmZw==
  const result = 'WzMrwzJjwy';
  const resultAltB = 'WzMrw-zJjwy';
  const encodeEntry = encode(entry, 0);
  const encodeEntryAltB = encode(entry, 5);
  const decodeEntry = decode(encodeEntry);
  const decodeEntryAltB = decode(encodeEntryAltB);

  expect(encodeEntry).toEqual(result);
  expect(decodeEntry).toEqual(entry);

  expect(encodeEntryAltB).toEqual(resultAltB);
  expect(decodeEntryAltB).toEqual(entry);
});

it('Should encrypt and decrypt object', () => {
  const data = { name: 'Joao Pedro', isActive: true, email: 'joao.pedro@example.com' };
  const encodeData = encode(JSON.stringify(data));
  const decodeData = JSON.parse(decode(encodeData));
  expect(decodeData).toEqual(data);
});
