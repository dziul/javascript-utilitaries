export const logMeta = () => {
  const metas = Array.from(document.getElementsByTagName('meta')).map((meta) => ({
    element: meta,
    'name/property':
      meta.name ||
      meta.getAttribute('property') ||
      meta.getAttribute('http-equiv') ||
      (meta.getAttribute('charset') && 'charset'),
    content: meta.content || meta.getAttribute('charset'),
  }));
  // eslint-disable-next-line no-console
  console.table(metas);
};

export const createMeta = (config: SetMetaProps) => {
  const meta = document.createElement('meta');
  meta.setAttribute(config.attrName, config.attrValue);
  meta.setAttribute('content', config.content);
  meta.setAttribute('data-created', 'true');
  const metaFirst = document.getElementsByTagName('meta')[0];
  metaFirst.parentNode?.insertBefore(meta, metaFirst);
};

export const findMetaCreated = () => {
  document.querySelectorAll('meta[data-created]').forEach((meta) => {
    meta.parentNode?.removeChild(meta);
  });
};

export const setMeta = (config: SetMetaProps) => {
  const metas = document.getElementsByTagName('meta');
  const contains = Array.from(metas).some((meta) => {
    const has = meta.getAttribute(config.attrName) === config.attrValue;
    if (has) {
      meta.setAttribute(config.attrName, config.attrValue);
      meta.setAttribute('content', config.content);
    }
    return has;
  });
  if (!contains) createMeta(config);
};

type SetMetaProps = {
  attrName: 'name' | 'property';
  attrValue: string;
  content: string;
};
