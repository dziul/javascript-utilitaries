interface GenericObject extends Object {
  [key: string]: any;
}

export const httpQueryObjectToString = (parameters: GenericObject, encode: boolean = true) => {
  return Object.keys(parameters)
    .map((key) => {
      const parameterValue = parameters[key];
      if (encode) return `${encodeURIComponent(key)}=${encodeURIComponent(parameterValue)}`;
      return `${key}=${parameters[key]}`;
    })
    .join('&');
};

export const httpQueryToObject = (query: string) => {
  return query.split('&').reduce((accumulator: GenericObject, keyAndValueString) => {
    const [key, value] = keyAndValueString.split('=');
    accumulator[key] = value;
    return accumulator;
  }, {});
};
