import { getValueByDotNotation } from '../notationStringObject';
import stringNormalize from '../stringNormalize';
const searchFilter = (needle, data, target) => {
  return data.filter((item) => {
    const needleParse = stringNormalize(needle.toLowerCase());
    let valueParse;
    if (target && typeof item === 'object') {
      const value = getValueByDotNotation(item, target);
      if (!value) throw new Error(`Not found props ${target} in ${JSON.stringify(value)}`);
      valueParse = stringNormalize(value.toString()).toLowerCase();
    } else valueParse = stringNormalize(item.toString().toLowerCase());
    return valueParse.indexOf(needleParse) !== -1;
  });
};
export default searchFilter;
