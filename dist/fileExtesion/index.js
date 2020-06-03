const core = (filename, remove = false) => {
  const brokenName = filename.split('.');
  if (brokenName.length <= 1 || !brokenName[0].length) {
    return null;
  }
  return remove ? brokenName.shift() : brokenName.pop();
};
export const getExtesion = (filename) => core(filename);
export const removeExtesion = (filename) => core(filename, true);
