interface FormatCustomOptionProp {
  indicateReplace: string
  removeRest: boolean
}

const initialOptions: FormatCustomOptionProp = {
  indicateReplace: '#',
  removeRest: true,
}

const maskString = (
  value: string,
  mask: string,
  options?: Partial<FormatCustomOptionProp>
): string => {
  const { indicateReplace, removeRest } = options
    ? { ...initialOptions, ...options }
    : initialOptions

  const indicateReg = new RegExp(indicateReplace, 'g')

  let indexCurrent = 0
  // eslint-disable-next-line no-plusplus
  const maskedValue = mask.replace(indicateReg, () => value[indexCurrent++])

  return removeRest ? maskedValue : maskedValue + value.slice(indexCurrent)
}


export default maskString
