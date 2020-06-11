const htmlStringToDomDocument = (htmlString) => {
  const parser = new DOMParser();
  return parser.parseFromString(htmlString, 'text/html');
};
export const htmlStringToNodeList = (htmlString) =>
  Array.from(htmlStringToDomDocument(htmlString).body.childNodes);
export default htmlStringToDomDocument;
