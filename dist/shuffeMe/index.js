export const shuffle = (array) => {
  const arrayOut = [...array];
  let count = arrayOut.length;
  let value;
  let index;
  while (count) {
    index = Math.floor(Math.random() * count--);
    value = arrayOut[count];
    arrayOut[count] = arrayOut[index];
    arrayOut[index] = value;
  }
  return arrayOut;
};
const shuffleMe = (array) => {
  let count = array.length;
  let value;
  let index;
  while (count) {
    index = Math.floor(Math.random() * count--);
    value = array[count];
    array[count] = array[index];
    array[index] = value;
  }
  return array;
};
export default shuffleMe;
