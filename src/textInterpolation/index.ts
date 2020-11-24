/**
 * Interpolação de texto
 */
const textInterpolation = (text: string, variablesObject: {[k:string]:any}, delimiter: [string,string] = ['{{', '}}']) => {
  let textInterpolated = text;
  Object.keys(variablesObject).forEach((key) => {
    const regex = new RegExp(`${delimiter[0]}${key}${delimiter[1]}`, 'g');
    textInterpolated = textInterpolated.replace(regex, variablesObject[key]);
  });
  return textInterpolated;
};

export default textInterpolation;
