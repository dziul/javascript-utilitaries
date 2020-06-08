import { stringChunk } from '../chunk';
export const hexToRgbString = (hexColor, opacityPercentage = 100) => {
  let hexColorCore = hexColor.trim();
  if (!/^#/.test(hexColorCore)) throw new Error(`'${hexColor}' not valid hexadecimal color`);
  hexColorCore = hexColorCore.slice(1);
  if (![6, 3].includes(hexColorCore.length))
    throw new Error(`'${hexColor}' has an invalid hexadecimal size. acceptable only 3 or 6`);
  if (hexColorCore.length === 3) hexColorCore += hexColorCore;
  const rgbArray = stringChunk(hexColorCore, 2).map((hexChunck) => parseInt(hexChunck, 16));
  if (opacityPercentage === 100) return `rgb(${rgbArray.join(',')})`;
  return `rgba(${rgbArray.join(',')}, ${opacityPercentage / 100})`;
};
