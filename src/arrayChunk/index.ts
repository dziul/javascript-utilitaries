const arrayChunk = (array: any[], size: number) => {
  if (size < 0) throw new RangeError('Size is negative');
  return Array.from({ length: Math.ceil(array.length / size) }, (value: never, index: number) =>
    array.slice(index * size, index * size + size)
  );
};

export default arrayChunk;
