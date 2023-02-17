import normalizeText from '../stringNormalize';

/**
 * retorna novo texto no formato `snake_case`
 *
 * @param text texto que deseja formatar
 *
 * @example
 * ```js
 * formatSnakeCase("camelCase") // => "camel_case"
 * formatSnakeCase("pá+_~--tô") // => "pa_to"
 * formatSnakeCase('{"key":"value"}') // => "key_value"
 * ```
 */
export const toSnakeCase = (text: string) => {
  return normalizeText(text.trim())
    .split(/\s+/)
    .map(partialText => partialText.replace(/\W+/g, '_'))
    .join('_')
    .replace(/([a-z])([A-Z])/g, '$1_$2')
    .replace(/_+/g, '_')
    .replace(/^_|_$/g, '')
    .toLocaleLowerCase();
};

export default toSnakeCase;
