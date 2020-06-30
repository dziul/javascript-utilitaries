import leftFillNumber from './index';

it('Should return 2 digits', () => {
  expect(leftFillNumber(1)).toEqual('01');
  expect(leftFillNumber(10)).toEqual('10');
});

it('Should return 5 digits', () => {
  expect(leftFillNumber(1, 5)).toEqual('00001');
  expect(leftFillNumber(10, 5)).toEqual('00010');
});
