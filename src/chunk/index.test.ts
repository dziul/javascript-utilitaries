import { arrayChunk as chunk } from './index';

it('Should return the matrix with the chunks. This chunks should have the set size value or less.', () => {
  const target = [1, 2, 3, 4, 5, 6];
  expect(chunk(target, 4)).toEqual([
    [1, 2, 3, 4],
    [5, 6],
  ]);
  expect(chunk(target, 3)).toEqual([
    [1, 2, 3],
    [4, 5, 6],
  ]);
  expect(chunk(target, 2)).toEqual([
    [1, 2],
    [3, 4],
    [5, 6],
  ]);
  expect(chunk(target, 1)).toEqual([[1], [2], [3], [4], [5], [6]]);
});
it('Using a size greater than the length of the array, an array with 1 element should be returned. This element should be array of all elements.', () => {
  const target = [1, 2, 3, 4, 5, 6];
  expect(chunk(target, 10)).toEqual([[1, 2, 3, 4, 5, 6]]);
});
it('If using the negative size it should return throw', () => {
  const target = [1, 2, 3, 4, 5, 6];

  expect(() => {
    chunk(target, -9);
  }).toThrowError(RangeError);
  expect(() => {
    chunk(target, 0);
  }).toThrowError(RangeError);
});
