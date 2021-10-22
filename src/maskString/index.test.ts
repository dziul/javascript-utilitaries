describe('formatCustom method', () => {
    it('should format with options default', () => {
      const entry = '11111111'
      const mask = '##.##-##'

      expect(formatCustom(entry, mask)).toEqual('11.11-11')
    })

    it('should format and not remove rest', () => {
      const entry = '11111111'
      const mask = '##.##-##'

      expect(formatCustom(entry, mask, { removeRest: false })).toEqual('11.11-1111')
    })

    it('should format with replacement indicate custom', () => {
      const entry = '12345678910'
      const mask = '000.000.000-00'

      expect(formatCustom(entry, mask, { indicateReplace: '0' })).toEqual(
        '123.456.789-10'
      )
    })
  })
