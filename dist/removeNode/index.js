export const removeAllChildren = (target) => {
  while (target.lastChild) {
    target.removeChild(target.lastChild);
  }
};
export const selfRemoveMe = (target) => {
  target.parentNode?.removeChild(target);
};
