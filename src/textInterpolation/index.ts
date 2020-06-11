/**
 * Interpolação de texto
 */
const textInterpolation = (text: string, variablesObject: any, delimiter: string[] = ['{{', '}}']) => {
  let textInterpolated = '';
  Object.keys(variablesObject).forEach((key) => {
    const regex = new RegExp(`${delimiter[0]}${key}${delimiter[1]}`, 'g');
    textInterpolated = text.replace(regex, variablesObject[key]);
  });
  return textInterpolated;
};

export default textInterpolation;
