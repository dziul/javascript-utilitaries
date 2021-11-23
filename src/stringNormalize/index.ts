const stringNormalize = (text: string): string =>
  text.normalize('NFD').replace(/[\u0300-\u036f]/g, '')

export const onlyLetters = (str: string, allowNumber = false) => {
  const pattern = allowNumber
    ? /[^\sa-zA-Z0-9\u00C0-\u00FF]+/g
    : /[^\sa-zA-Z\u00C0-\u00FF]+/g

  return str.replace(pattern, '')
}

export default stringNormalize
