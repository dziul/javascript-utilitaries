import snakeCase, { screamingSnakeCaseFormatter } from './index';

it('Should covert "Hello People!" to "hello_people"', () => {
  expect(snakeCase('Hello Word!')).toEqual('hello_word');
});
it('Should covert "Helló Peoplê!" to "HELLO_PEOPLE"', () => {
  expect(screamingSnakeCaseFormatter('Helló Peoplê!')).toEqual('HELLO_PEOPLE');
});
