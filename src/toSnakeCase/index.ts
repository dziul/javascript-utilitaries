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
    .replace(/\W+/g, '_')
    .replace(/([a-z])([A-Z])/g, '$1_$2')
    .replace(/_+/g, '_')
    .replace(/^_|_$/g, '')
    .toLocaleLowerCase();
};

/**
 * retorna novo texto no formato `snake_case`
 *
 * @param text texto que deseja formatar
 *
 * @example
 * ```js
 * formatSnakeCase("camelCase") // => "CAMEL_CASE"
 * formatSnakeCase("pá+_~--tô") // => "PA_TO"
 * formatSnakeCase('{"key":"value"}') // => "KEY_VALUE"
 * ```
 */
export function toScreamingSnakeCase(text: string){
  return toSnakeCase(text).toLocaleUpperCase()
}
