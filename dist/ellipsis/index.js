export const hasNeedEllipsis = (paragraph, maxCharacters) => paragraph.length > maxCharacters;
export const formatterEllipsis = (paragraph, maxCharacters, suffix = '...') =>
  paragraph.slice(0, maxCharacters) + suffix;
const ellipsis = (paragraph, maxCharacters) => {
  if (!hasNeedEllipsis(paragraph, maxCharacters)) {
    return paragraph;
  }
  return formatterEllipsis(paragraph, maxCharacters);
};
export const reachedMaxWords = (paragraph, maxWords) => paragraph.trim().split(' ').length > maxWords;
export const wordEllipsis = (paragraph, maxWords, suffix = '...') => {
  const words = paragraph.trim().split(' ');
  if (words.length < maxWords) {
    return paragraph;
  }
  return words.splice(0, maxWords).join(' ') + suffix;
};
export default ellipsis;
