import normalize, { onlyLetters } from './index'

describe('Test function stringNormalize', () => {
  it('should remove accents from text', () => {
    const needle = 'olá mãe, vovô e não menos... você, fátima. Ás 9h, caçamos o bicho.'
    const out = 'ola mae, vovo e nao menos... voce, fatima. As 9h, cacamos o bicho.'

    expect(normalize(needle)).toEqual(out)
  })

  it('should nothing happens', () => {
    const needle = '~´`abc,~ =>'
    const out = '~´`abc,~ =>'

    expect(normalize(needle)).toEqual(out)
  })

  it('should only letters', () => {
    const entryOk = '12açb~ã (ó)'
    const shouldOk = 'açbã ó'
    expect(onlyLetters(entryOk)).toEqual(shouldOk)
  })
  it('should only letters and number', () => {
    const entryOk = '12açb~ã (ó)'
    const shouldOk = '12açbã ó'
    expect(onlyLetters(entryOk, true)).toEqual(shouldOk)
  })
})
