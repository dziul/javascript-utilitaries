export const httpQueryObjectToString = (parameters, encode = true) => {
  return Object.keys(parameters)
    .map((key) => {
      const parameterValue = parameters[key];
      if (encode) {
        return `${encodeURIComponent(key)}=${encodeURIComponent(parameterValue)}`;
      }
      return `${key}=${parameters[key]}`;
    })
    .join('&');
};
export const httpQueryToObject = (query) => {
  return query.split('&').reduce((accumulator, keyAndValueString) => {
    const [key, value] = keyAndValueString.split('=');
    accumulator[key] = value;
    return accumulator;
  }, {});
};
