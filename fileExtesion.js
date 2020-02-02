const _provider = (filename,isRemove=false) => {
    const brokenName = filename.split('.');
    if(brokenName.length <= 1 || !brokenName[0].length) return '';
    return isRemove ? brokenName.shift() : brokenName.pop();
};
export const getExtesion    = (filename) => _provider(filename);
export const removeExtesion = (filename) => _provider(filename,true);

export default getExtesion;