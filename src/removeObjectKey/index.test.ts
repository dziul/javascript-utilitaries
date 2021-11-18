import removeObjectKey from './index'

describe('removeObjectKey', () => {
  it('should return filtered object', () => {
    const provided = { a: 'value a', b: 'value b' }
    const expected = { b: 'value b' }
    const expectedAlt = {}

    expect(removeObjectKey(provided, 'a')).toEqual(expected)
    expect(removeObjectKey(provided, ['a', 'b'])).toEqual(expectedAlt)
  })

  it('should return object with same keys when invalid value is provided', () => {
    const provided = { a: 'value a', b: 'value b' }
    const invalidKey = 'foo'

    expect(removeObjectKey(provided, invalidKey)).toEqual(provided)
  })

  it('should do nothing with empty object', () => {
    const provided = {}
    const key = 'foo'

    expect(removeObjectKey(provided, key)).toEqual({})
  })
})
