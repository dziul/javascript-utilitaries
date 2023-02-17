import normalizeText from '../stringNormalize';

/**
 * retorna o texto normalizado para {@link toCamelCase} e {@link toPascalCase}
 *
 * @private
 * @param text
 */
function normalizeCamelAndPascalCase(text: string) {
  return normalizeText(text)
    .replace(/[^a-zA-Z]+(\w)/g, (match, capture) => {
      if (capture) return capture.toUpperCase();
      return match;
    })
    .replace(/[^a-zA-Z]+/g, '');
}


/**
 * retorna um novo texto no formato _PascalCase_
 *
 * @param text texto que deseja formatar
 *
 * @example
 * ```js
 * toCamelCase(" camelCase ") // => "CamelCase"
 * toCamelCase("pá+_~--tô") // => "PaTo"
 * toCamelCase('{"key":"value"}') // => "KeyValue"
 * ```
 */
export function toPascalCase(text: string) {
  return normalizeCamelAndPascalCase(text).replace(
    /(^[a-z])/i,
    (_, firstLetter: string) => firstLetter.toLocaleUpperCase()
  );
}


/**
 * retorna um novo texto no formato _camelCase_
 *
 * @param text texto que deseja formatar
 *
 * @example
 * ```js
 * toCamelCase(" camelCase ") // => "camelCase"
 * toCamelCase("pá+_~--tô") // => "paTo"
 * toCamelCase('{"key":"value"}') // => "keyValue"
 * ```
 */
export function toCamelCase(text: string) {
  return normalizeCamelAndPascalCase(text).replace(
    /(^[a-z])/i,
    (_, firstLetter: string) => firstLetter.toLocaleLowerCase()
  );
}
