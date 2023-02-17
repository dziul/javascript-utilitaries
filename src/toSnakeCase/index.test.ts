import { toSnakeCase } from './index';

type Cases = Record<'in' | 'out', string>[];

describe('formatSnakeCase', () => {
  it('deveria formatar o texto em snake_case', () => {
    const cases = [
      {
        in: 'oT çx__-gA+H',
        out: 'o_t_cx_g_a_h',
      },
      {
        in: 'camelCase',
        out: 'camel_case',
      },
      {
        in: ' space ',
        out: 'space',
      },
      {
        in: '{"key":"value"}',
        out: 'key_value',
      },
    ] as Cases;

    cases.forEach(item => {
      expect(toSnakeCase(item.in)).toEqual(item.out);
    });
  });
  
});
