import searchFilter from './index';

it("Should filter only the values ​​that have 'abc'", () => {
  expect(searchFilter('abc', ['a', 'abc', 'tabcy', 'ab2c'])).toEqual(['abc', 'tabcy']);
});

it('Should filter only the values ​​that have name=50', () => {
  expect(
    searchFilter(
      '50',
      [
        { name: 'Targ', age: 105 },
        { name: 'Heb', age: 50 },
        { name: 'Jose', age: 50 },
      ],
      'age'
    )
  ).toEqual([
    { name: 'Heb', age: 50 },
    { name: 'Jose', age: 50 },
  ]);
});
