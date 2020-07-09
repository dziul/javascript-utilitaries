import toCamelCase, { toUpperCamelCase } from './index';

it('Should convert the text in camelCase', () => {
  const text = 'Hello World, Guy!';
  const textParsed = 'helloWorldGuy';
  expect(toCamelCase(text)).toEqual(textParsed);
});

it('Should convert the text in UpperCamelCase', () => {
  const text = 'Hello World, Girl!';
  const textParsed = 'HelloWorldGirl';
  expect(toUpperCamelCase(text)).toEqual(textParsed);
});
