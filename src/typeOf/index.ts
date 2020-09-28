const typeOf = (needle: any):string => {

  const objectPrototypeString = Object.prototype.toString.call(needle);
  const startSlice = objectPrototypeString.lastIndexOf(' ') + 1;
  return objectPrototypeString.slice(startSlice, -1).toLowerCase();

};


export default typeOf;
