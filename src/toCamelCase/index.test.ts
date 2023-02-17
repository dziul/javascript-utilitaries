import { toCamelCase, toPascalCase } from './index';

type Cases = Record<'in' | 'out', string>[];

describe('functions format case', () => {

  it('deveria formatar o texto em camelCase', () => {
    const cases = [
      {
        in: 'camelCase',
        out: 'camelCase',
      },
      {
        in: ' espace ',
        out: 'espace',
      },
      {
        in: '_underline_baby_',
        out: 'underlineBaby',
      },
      {
        in: '{"key":"value"}',
        out: 'keyValue',
      },
      {
        in: '',
        out: '',
      },
    ] as Cases;

    cases.forEach(item => {
      expect(toCamelCase(item.in)).toEqual(item.out);
    });
  });

  it('deveria formatar o texto em PascalCase', () => {
    const cases = [
      {
        in: 'camelCase',
        out: 'CamelCase',
      },
      {
        in: ' espace ',
        out: 'Espace',
      },
      {
        in: '_underline_baby_',
        out: 'UnderlineBaby',
      },
      {
        in: '{"key":"value"}',
        out: 'KeyValue',
      },
      {
        in: '',
        out: '',
      },
    ] as Cases;

    cases.forEach(item => {
      expect(toPascalCase(item.in)).toEqual(item.out);
    });
  });
});
