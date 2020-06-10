const arraySequence = (max: number, start = 1) =>
  Array.from({ length: max }, (value: any, index) => index + start);
export default arraySequence;
