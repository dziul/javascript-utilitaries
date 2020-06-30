import searchFilter from './index';

it("Should filter only the values ​​that have 'abc'", () => {
  expect(searchFilter(['a', 'abc', 'tabcy', 'ab2c'], 'abc')).toEqual(['abc', 'tabcy']);
});

it('Should filter only the values ​​that have name=50', () => {
  expect(
    searchFilter(
      [
        { name: 'Targ', age: 105 },
        { name: 'Heb', age: 50 },
        { name: 'Jose', age: 50 },
      ],
      '50',
      'age'
    )
  ).toEqual([
    { name: 'Heb', age: 50 },
    { name: 'Jose', age: 50 },
  ]);
});
