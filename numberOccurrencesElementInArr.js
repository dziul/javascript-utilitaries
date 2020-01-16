
/**
 * Retornar a quantidade de ocorrencias/frequência na matriz, do numero setado
 * @param {number[]} arr  matriz de número
 * @param {number} elCheck  número para checar
 * @return {number}
 */
const NumberOccurrencesElementInArr =  (arr, elCheck) => arr.filter(value => value === elCheck).length;
//typescript
// const NumberOccurrencesElementInArr =  (arr:number[], elCheck:number):number => {
//     return arr.filter((value:number) => value === elCheck).length
// }


//teste usando node
// console.log(NumberOccurrencesElementInArr([2,8,8,1,0,5,8,2,4,2], 8)) //return 3