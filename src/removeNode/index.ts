export const removeAllChildren = (target: Element) => {
  while (target.lastChild) {
    target.removeChild(target.lastChild);
  }
};

export const selfRemoveMe = (target: Element) => {
  target.parentNode?.removeChild(target);
};
