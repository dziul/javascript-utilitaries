const htmlStringToDomDocument = (htmlString: string) => {
  const parser = new DOMParser();
  return parser.parseFromString(htmlString, 'text/html');
};

export const htmlStringToNodeList = (htmlString: string) =>
  Array.from(htmlStringToDomDocument(htmlString).body.childNodes);

export default htmlStringToDomDocument;
