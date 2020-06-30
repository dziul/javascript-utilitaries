import { encode, decode } from './index';

it('Should the encrypted value be the same after decrypting', () => {
  const data = { name: 'Joao Pedro', isActive: true, email: 'joao.pedro@example.com' };
  const encrypt = encode(data);
  const decrypt = decode(encrypt);

  expect(decrypt).toEqual(data);
});
