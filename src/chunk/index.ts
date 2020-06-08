export const arrayChunk = (array: any[], size: number) => {
  if (size <= 0) throw new RangeError('Size must be greater than zero');
  return Array.from({ length: Math.ceil(array.length / size) }, (value: never, index: number) =>
    array.slice(index * size, index * size + size)
  );
};

export const stringChunk = (needle: string, size: number) => {
  if (size <= 0) throw new RangeError('Size must be greater than zero');
  let index = 0;
  let chunkSize = size;
  const stringLength = needle.length;
  const chunkList = [];
  while (stringLength > index) {
    chunkList.push(needle.slice(index, chunkSize));
    chunkSize += size;
    index += size;
  }

  return chunkList;
};
