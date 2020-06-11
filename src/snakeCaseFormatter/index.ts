import stringNormalize from '../stringNormalize';

/**
 * Formata texto para o estilo snake_case
 *
 * @examples Hello Word, BOT!  => hello_word_bot
 */
const snakeCaseFormatter = (text: string): string =>
  stringNormalize(text)
    .split(' ')
    .join('_')
    .replace(/\W+/g, '')
    .replace(/([a-z])([A-Z])/g, '$1_$2')
    .toLocaleLowerCase();
/**
 * Foramta texto para o estilo SCREAMING_SNAKE_CASE
 *
 * @param {string} text
 * @examples Hello World bOt! => HELLO_WORLD_BOT
 */
export const screamingSnakeCaseFormatter = (text: string): string =>
  snakeCaseFormatter(text).toLocaleUpperCase();

export default snakeCaseFormatter;
