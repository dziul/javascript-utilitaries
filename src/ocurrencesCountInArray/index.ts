/**
 * @examples  ([2,8,8,1,0,5,8,2,4,2] 8) => 3
 */
const ocurrencesCountInArray = (list: [], target: string | number) =>
  list.filter((item) => item === target).length;

export default ocurrencesCountInArray;
