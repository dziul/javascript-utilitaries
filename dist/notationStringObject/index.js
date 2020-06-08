const stringToArray = (needle, separator) => needle.split(separator).filter((value) => value.length);
const buildCore = (target, notation, value, separator = '.', mergeValue = true) => {
  const parts = stringToArray(notation, separator);
  const partItemLast = parts.pop();
  let cloneTarget = target;
  let next;
  do {
    next = parts.shift();
    if (!next) continue;
    if (!(cloneTarget[next] instanceof Object)) cloneTarget[next] = {};
    cloneTarget = cloneTarget[next];
  } while (next);
  if (mergeValue && partItemLast && Object.prototype.hasOwnProperty.call(cloneTarget, partItemLast)) {
    if (cloneTarget[partItemLast] instanceof Array) {
      const cloneTargetItem = cloneTarget[partItemLast];
      if (!cloneTargetItem.includes(value)) cloneTargetItem.push(value);
    } else if (cloneTarget[partItemLast] instanceof Object && value instanceof Object) {
      cloneTarget[partItemLast] = Object.keys(value).reduce(
        (accumulator, current) => buildCore(accumulator, current, value[current]),
        cloneTarget[partItemLast]
      );
    } else cloneTarget[partItemLast] = [cloneTarget[partItemLast], value];
  } else if (!partItemLast) {
    return null;
  } else cloneTarget[partItemLast] = value;
  return target;
};
export const slashNotationToObject = (slashNotation, value, targetObject = {}) =>
  buildCore(targetObject, slashNotation, value, '/');
export const dotNotationToObject = (notation, value, targetObject = {}) =>
  buildCore(targetObject, notation, value);
export const getValueByDotNotation = (objectTarget, notation, separator = '.') => {
  const parts = stringToArray(notation, separator);
  const partItemLast = parts.pop();
  if (!partItemLast) return null;
  let copyTarget = Object.assign({}, objectTarget);
  let next;
  do {
    next = parts.shift();
    if (!next) continue;
    copyTarget = copyTarget[next];
  } while (next);
  return copyTarget[partItemLast];
};
