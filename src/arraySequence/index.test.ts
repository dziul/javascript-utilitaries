import arraySequence from './index';

it('Should create a array sequence from 1 to 10 by default', () => {
  expect(arraySequence(10)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
it('should create a array sequence from 0 to 9', () => {
  expect(arraySequence(10, 0)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
});
it('should create a array sequence from -5 to 4', () => {
  expect(arraySequence(10, -5)).toEqual([-5, -4, -3, -2, -1, 0, 1, 2, 3, 4]);
});
