export const hasNeedEllipsis = (paragraph: string, maxCharacters: number) => paragraph.length > maxCharacters;

export const formatterEllipsis = (paragraph: string, maxCharacters: number, suffix = '...') =>
  paragraph.slice(0, maxCharacters) + suffix;

const ellipsis = (paragraph: string, maxCharacters: number) => {
  if (!hasNeedEllipsis(paragraph, maxCharacters)) return paragraph;
  return formatterEllipsis(paragraph, maxCharacters);
};

export const reachedMaxWords = (paragraph: string, maxWords: number) =>
  paragraph.trim().split(' ').length > maxWords;

export const wordEllipsis = (paragraph: string, maxWords: number, suffix = '...') => {
  const words = paragraph.trim().split(' ');
  if (words.length < maxWords) return paragraph;
  return words.splice(0, maxWords).join(' ') + suffix;
};

export default ellipsis;
