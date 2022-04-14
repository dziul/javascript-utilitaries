export const simpleTemplaning = (
    template: string,
    variablesObject: { [k: string]: string | boolean | number | null | undefined },
    delimiter: [string, string] = ['{{', '}}']
) => {
  return Object.entries(variablesObject).reduce((templateAcc, [key, value]) => {
      const pattern = new RegExp(`${delimiter[0]}${key}${delimiter[1]}`, 'gs')
      const replaceValue = value ? String(value) : ''
      return templateAcc.replace(pattern, replaceValue)
    }, template)
};

export default textInterpolation;
