import { typeOf } from '.';

describe('Função typeOf', () => {
  it('deveria retornar corretamente o tipo do arg passado', () => {
    expect(typeOf({})).toBe('object');
    expect(typeOf([])).toBe('array');
    expect(typeOf(1)).toBe('number');
    expect(typeOf(1.2)).toBe('number');
    expect(typeOf(false)).toBe('boolean');
    expect(typeOf(undefined)).toBe('undefined');
    expect(typeOf(null)).toBe('null');
    expect(typeOf(new Date())).toBe('date');
    expect(typeOf(new Set())).toBe('set');
  });
});
