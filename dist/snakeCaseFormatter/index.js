import stringNormalize from '../stringNormalize';
const snakeCaseFormatter = (text) =>
  stringNormalize(text)
    .split(' ')
    .join('_')
    .replace(/\W+/g, '')
    .replace(/([a-z])([A-Z])/g, '$1_$2')
    .toLocaleLowerCase();
export const screamingSnakeCaseFormatter = (text) => snakeCaseFormatter(text).toLocaleUpperCase();
export default snakeCaseFormatter;
