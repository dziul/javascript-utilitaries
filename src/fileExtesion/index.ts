const core = (filename: string, remove = false) => {
  const brokenName = filename.split('.');
  if (brokenName.length <= 1 || !brokenName[0].length) return null;
  return remove ? brokenName.shift() : brokenName.pop();
};

export const getExtesion = (filename: string) => core(filename);

export const removeExtesion = (filename: string) => core(filename, true);
