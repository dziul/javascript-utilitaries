/**
 * Saber se uma string é igual sua versao inversa
 * 
 * @param {string} s 
 * @param {boolean} sensitive [default:false] Comparação sensível
 * @returns {boolean}
 */
const compareStrReverse = (s, sensitive=false) => {
    const strReverse = s.split('').reverse().join('')
    if(sensitive) {
        return strReverse === s
    } else {
        return (strReverse.toLowerCase()) === (s.toLowerCase())
    }
}



// console.log(compareStrReverse('Ommo')) //true
// console.log(compareStrReverse('Ommo',true)) //false
// console.log(compareStrReverse('abcde'))//false