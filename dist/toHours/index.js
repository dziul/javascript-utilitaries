export const minutesToHours = (time) => {
  const divider = 60;
  return {
    hours: Math.floor(time / divider),
    minutes: time % divider,
  };
};
export const secondsToHours = (time) => {
  const divider = 60 * 60;
  return {
    hours: Math.floor(time / divider),
    minutes: Math.floor((time % divider) / 60),
    seconds: time % 60,
  };
};
export const formatterMinutesToHours = (time, pattern = 'H:i') => {
  const { hours, minutes } = minutesToHours(time);
  const data = {
    H: hours,
    i: minutes,
  };
  return pattern.replace(/\\?(H|i)/g, (match) => {
    return data[match] !== undefined ? data[match] : match.slice(1);
  });
};
export const formatterSecondsToHours = (time, pattern = 'H:i:s') => {
  const { hours, minutes, seconds } = secondsToHours(time);
  const data = {
    H: hours,
    i: minutes,
    s: seconds,
  };
  return pattern.replace(/\\?(H|i|s)/g, (match) => {
    return data[match] !== undefined ? data[match] : match.slice(1);
  });
};
