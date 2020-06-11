import cesar from './cesar';
import { encode, decode } from './index';

describe('[THE_ADVENTURES_OF_JIMMY_NEUTRON]', () => {
  it('[SHEEN_ESTEVEZ] O valor criptografado deve ser o mesmo depois de descriptografar', () => {
    const data = { name: 'Joao Pedro', isActive: true, email: 'joao.pedro@example.com' };
    const encrypt = encode(data);
    const decrypt = decode(encrypt);

    expect(decrypt).toEqual(data);
  });

  it('[JIMMY_NEUTRON] Deve criptografar e descriptografar, não importa o deslocamento (shift)', () => {
    const value = 'abcdz0';
    const decodeValue = 'bcdeAa';
    expect(cesar(value, 1)).toEqual(decodeValue);
    expect(cesar(decodeValue, -1)).toEqual(value);

    const encodeValueA = cesar(value, 25);
    expect(cesar(encodeValueA, -25)).toEqual(value);

    const encodeValueB = cesar(value, -50);
    expect(cesar(encodeValueB, 50)).toEqual(value);

    const encodeValueC = cesar(value, -51);
    expect(cesar(encodeValueC, 51)).toEqual(value);

    const encodeValueD = cesar(value, 125);
    expect(cesar(encodeValueD, -125)).toEqual(value);
  });
});
