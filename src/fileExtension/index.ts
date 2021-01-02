const core = (filename: string, remove = false) => {
  const brokenName = filename.split('.');
  if (brokenName.length <= 1 || !brokenName[0].length) return null;
  return remove ? brokenName.shift() : brokenName.pop();
};

export const getExtension = (filename: string) => core(filename);

export const removeExtension = (filename: string) => core(filename, true);
